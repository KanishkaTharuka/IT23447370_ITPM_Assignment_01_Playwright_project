import { test, expect, Page } from '@playwright/test';

test('Neg_Fun_001: Joined words with slang fail compleately', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('machanhetamamagedharayanne.');
  await sinInput.press('Enter');
  await expect(page.getByText('මචන් හෙට මම ගෙදර යන්නෙ.')).not.toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_002: Excessive repeated characters produce wrong output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mataaaa baaaayaa hithenavaaa.');
  await sinInput.press('Enter');
  await expect(page.getByText('මට බය හිතෙනවා.')).not.toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_003: Very informal slang fails conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('adoo bn eka hariyata karapanko.');
  await sinInput.press('Enter');
  await expect(page.getByText('අඩෝ බං එක හරියට කරපන්කෝ.')).not.toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_004: Mixed Singlish with chat shorthand fails', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('oya enne nae nedh? pls ikmanata enna.');
  await sinInput.press('Enter');
  await expect(page.getByText('ඔය එන්නෙ නැ නෙද්? please ඉක්මනට එන්න.')).not.toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_005: Typographical errors produce wrong characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama gedhara yanava dn .');
  await sinInput.press('Enter');
  await expect(page.getByText('මම ගෙදර යනව දැන්.')).not.toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_006: Long paragraph with line breaks loses formatting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama gedhara yanavaa oyaa enavadha api passe kathaa karamu.');
  await sinInput.press('Enter');
  await expect(page.getByText('මම ගෙදර යනවා ඔයා එනවද අපි පස්සෙ කතා කරමු.')).not.toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_007: Single vs double consonant confusion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('parissmin vada krnna.');
  await sinInput.press('Enter');
  await expect(page.getByText('පරිස්ස්මින් වැඩ කරන්න.')).not.toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_008: Incorrect character mapping (w vs v)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama weda karanne naehae.');
  await sinInput.press('Enter');
  await expect(page.getByText('මම වැඩ කරන්නේ නැහැ.')).not.toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_009: English abbreviations wrongly transliterated', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mage NICeka office ekata ganna.');
  await sinInput.press('Enter');
  await expect(page.getByText('mage NIC එක office එකට ගන්න.')).not.toBeVisible({ timeout: 10000 });
});


test('Neg_Fun_010: Joined proper noun and adverb no separation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('Ashan fast duwanawaa.');
  await sinInput.press('Enter');
  await expect(page.getByText('අශාන් fast දුවනවා.')).not.toBeVisible({ timeout: 10000 });
});