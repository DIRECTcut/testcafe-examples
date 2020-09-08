import { Selector } from 'testcafe';

fixture `fixture`
    .page `./index.html`;

test('Test background color and opacity', async t => {
    const colorBox = Selector('#color-box');
    const opacity  = colorBox.getStyleProperty('opacity');
    const color = colorBox.getStyleProperty('background-color');

    await t
            .click('#btnRgb')
            .expect(opacity).eql('1')
            .expect(color).eql('rgb(255, 45, 0)');
});