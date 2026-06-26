// Vercel serverless function — proxy NVIDIA API to bypass CORS
export default async function handler(req, res) {
  // CORS headers for browser requests from our app
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { model, messages, temperature, max_tokens } = req.body;
  const apiKey = req.headers.authorization || '';

  try {
    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey,
      },
      body: JSON.stringify({ model, messages, temperature, max_tokens }),
    });

    const data = await response.text();
    res.status(response.status);
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } catch (err) {
    res.status(502).json({ error: 'Proxy error: ' + err.message });
  }
}
