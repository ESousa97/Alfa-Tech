const fs = require('fs');
const assert = require('assert');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const styleCss = fs.readFileSync('Style.css', 'utf8');

assert.ok(indexHtml.includes('Alfa Tech'), 'Título principal ausente');
assert.ok(indexHtml.includes('class="hero"'), 'Seção hero ausente');
assert.ok(indexHtml.includes('class="card"'), 'Cards principais ausentes');
assert.ok(styleCss.includes(':root'), 'Variáveis CSS ausentes');
assert.ok(styleCss.includes('.cta-button'), 'Estilo do botão CTA ausente');

console.log('Smoke tests OK');
