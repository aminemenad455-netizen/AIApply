import got from 'got';

const COUPON_URL = 'https://www.aiapply.co/?via=amine-menad';

(async () => {
  try {
    const res = await got.head(COUPON_URL, { followRedirect: false, throwHttpErrors: false });
    console.log(`Deal page status: ${res.statusCode}`);
  } catch (err) {
    console.error('Could not reach deal page:', err.message);
  }

  console.log('\n--- AIApply API Simulation ---');
  const jobDesc = 'Senior React Developer — TypeScript, Next.js, GraphQL';
  console.log(`Target role: "${jobDesc}"`);

  if (process.env.AIAPPLY_API_KEY) {
    console.log('API key detected. Ready for resume optimization.');
    console.log('Endpoints: /v1/resume/optimize, /v1/cover-letter, /v1/ats-score');
  } else {
    console.log('Set AIAPPLY_API_KEY to enable API calls.');
  }

  console.log('Tip: Use code GETJOB for 40% student discount.');
})();
