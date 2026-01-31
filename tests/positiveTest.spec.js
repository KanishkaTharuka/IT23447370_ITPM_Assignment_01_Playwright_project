import { test, expect } from '@playwright/test';

test('Pos_Fun_001: Convert simple present tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama gedhara yanavaa.');
  await sinInput.press('Enter');
  await expect(page.getByText('මම ගෙදර යනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_002: Convert simple request sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mata bath oonii.');
  await sinInput.press('Enter');
  await expect(page.getByText('මට බත් ඕනී.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_003: Convert compound sentence with multiple clauses', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.');
  await sinInput.press('Enter');
  await expect(page.getByText('මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_004: Convert compound sentence with two joined ideas', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.');
  await sinInput.press('Enter');
  await expect(page.getByText('අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_005: Convert complex sentence with condition', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('oya enavaanam mama balan innavaa.');
  await sinInput.press('Enter');
  await expect(page.getByText('ඔය එනවානම් මම බලන් ඉන්නවා.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_006: Convert compound sentence with two joined ideas', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama sunaQQgu vunee maarga thadhabadhaya nisaa.');
  await sinInput.press('Enter');
  await expect(page.getByText('මම සුනංගු වුනේ මාර්ග තදබදය නිසා.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_007: Convert simple question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('oyaata kohomadha?.');
  await sinInput.press('Enter');
  await expect(page.getByText('ඔයාට කොහොමද?.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_008: Convert question with time reference', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('oyaa kavadhdha enna hithan inne?.');
  await sinInput.press('Enter');
  await expect(page.getByText('ඔයා කවද්ද එන්න හිතන් ඉන්නේ?.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_009: Convert direct command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('vahaama enna.');
  await sinInput.press('Enter');
  await expect(page.getByText('වහාම එන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_010: Convert polite command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mata kiyanna.');
  await sinInput.press('Enter');
  await expect(page.getByText('මට කියන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_011: Convert positive statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama ehema karanavaa.');
  await sinInput.press('Enter');
  await expect(page.getByText('මම එහෙම කරනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_012: Convert negative statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama ehema karannee naehae.');
  await sinInput.press('Enter');
  await expect(page.getByText('මම එහෙම කරන්නේ නැහැ.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_013: Convert traditional greeting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('aayuboovan!');
  await sinInput.press('Enter');
  await expect(page.getByText('ආයුබෝවන්!')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_014: Convert formal greeting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('suba udhaeesanak!');
  await sinInput.press('Enter');
  await expect(page.getByText('සුබ උදෑසනක්!')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_015: Convert polite', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('karuNaakaralaa eka poddak balanna');
  await sinInput.press('Enter');
  await expect(page.getByText('කරුණාකරලා එක පොඩ්ඩක් බලන්න')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_016: Convert past tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama iiyee gedhara giyaa');
  await sinInput.press('Enter');
  await expect(page.getByText('මම ඊයේ ගෙදර ගියා')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_017: Convert present tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama dhaen vaeda karanavaa');
  await sinInput.press('Enter');
  await expect(page.getByText('මම දැන් වැඩ කරනවා')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_018: Convert future tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama heta enavaa.');
  await sinInput.press('Enter');
  await expect(page.getByText('මම හෙට එනවා.')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_019: Convert plural pronoun sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('api yamu.');
  await sinInput.press('Enter');
  await expect(page.getByText('අපි යමු.')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_020: Convert third person plural', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('eyaalaa enavaa.');
  await sinInput.press('Enter');
  await expect(page.getByText('එයාලා එනවා.')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_021: Convert to sentence with English brand term', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('Zoom meeting ekak thiyennee.');
  await sinInput.press('Enter');
  await expect(page.getByText('Zoom meeting එකක් තියෙන්නේ.')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_022: Convert sentence with place names', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('mama Colombo yanna hadhannee.');
  await sinInput.press('Enter');
  await expect(page.getByText('මම Colombo යන්න හදන්නේ.')).toBeVisible({ timeout: 10000 });
});



test('Pos_Fun_023: Convert sentence with exclamation mark', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('ela machan! supiri!!');
  await sinInput.press('Enter');
  await expect(page.getByText('එල මචන්! සුපිරි!!')).toBeVisible({ timeout: 10000 });
});


test('Pos_Fun_024: Convert frequent collocation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await sinInput.fill('poddak inna.');
  await sinInput.press('Enter');
  await expect(page.getByText('පොඩ්ඩක් ඉන්න.')).toBeVisible({ timeout: 10000 });
});