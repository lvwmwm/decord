// Module ID: 14656
// Function ID: 111663
// Name: found
// Dependencies: [14657, 2]

// Module 14656 (found)
const entries = Object.entries(require("_testCaptcha").HCaptchaDifficulty);
const mapped = entries.map((arg0) => {
  let str;
  let tmp;
  [tmp, str] = arg0;
  return { id: str.toString(), label: tmp, value: str };
});
const found = mapped.filter(function isHCaptchaDifficulty(value) {
  return "string" !== typeof value.value;
});
const entries1 = Object.entries(require("_testCaptcha").CaptchaDeciderType);
const mapped1 = entries1.map((arg0) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  return { id, label, value: id };
});
const result = require("set").fileFinishedImporting("modules/captcha/tooling/CaptchaTestUtils.tsx");

export const HCAPTCHA_DIFFICULTY_OPTIONS = found;
export const CAPTCHA_DECIDER_TYPE_OPTIONS = mapped1;
