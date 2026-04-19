const { chromium } = require('/Users/brandonbot/projects/workbench/inbox-pilot/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const files = [
  { f: '01-veteran-fb-ad.html',       w: 1280, h: 720  },
  { f: '02-hustler-fb-ad.html',       w: 1200, h: 1200 },
  { f: '03-callbacks-vsl.html',       w: 1280, h: 3600 },
  { f: '04-commercial-site.html',     w: 1440, h: 3400 },
  { f: '05-route-buyer-fb-ad.html',   w: 1280, h: 1600 },
  { f: '06-roi-vsl.html',             w: 1440, h: 2000 },
  { f: '07-sunbelt-site.html',        w: 1440, h: 3800 },
  { f: '08-tech-retention-fb-ad.html',w: 1200, h: 1200 },
  { f: '09-founder-vsl.html',         w: 1100, h: 1700 },
  { f: '10-multilocation-site.html',  w: 1440, h: 3400 },
  { f: 'index.html',                  w: 1440, h: 3800 },
];

(async () => {
  const dir = '/tmp/poolops-creative';
  const outdir = '/tmp/poolops-creative/shots';
  if (!fs.existsSync(outdir)) fs.mkdirSync(outdir);
  const browser = await chromium.launch();
  for (const { f, w, h } of files) {
    const context = await browser.newContext({ viewport: { width: w, height: Math.min(h, 2000) }, deviceScaleFactor: 2 });
    const page = await context.newPage();
    await page.goto('file://' + path.join(dir, f), { waitUntil: 'networkidle', timeout: 20000 });
    await page.waitForTimeout(600);
    const out = path.join(outdir, f.replace('.html', '.png'));
    await page.screenshot({ path: out, fullPage: true });
    console.log('✓', out);
    await context.close();
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
