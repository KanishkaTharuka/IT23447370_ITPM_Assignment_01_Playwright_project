import { test, expect } from '@playwright/test';

test('Pos_UI_001: Real-time output updates while typing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');

  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  await sinInput.type('mama gedhara yanavaa.', { delay: 150 });

  await expect(page.getByText('මම ගෙදර යනවා.')).toBeVisible({ timeout: 10000 });
});


test('Neg_UI_002: Output does not clear when input is cleared', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');

  const sinInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  await sinInput.fill('mama aayith vaedata yanne nae.');
  await sinInput.press('Enter');

  const outputText = page.getByText('මම ආයිත් වැඩට යන්නෙ නැ.');

  await expect(outputText).toBeVisible({ timeout: 10000 });

  await sinInput.fill('');

  await expect(outputText).not.toBeVisible();
});
