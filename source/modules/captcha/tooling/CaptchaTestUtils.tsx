// Module ID: 14534
// Function ID: 109460
// Name: found
// Dependencies: []

// Module 14534 (found)
const entries = Object.entries(require(dependencyMap[0]).HCaptchaDifficulty);
const mapped = entries.map((arg0) => {
  let str;
  let tmp;
  [tmp, str] = arg0;
  return { id: str.toString(), label: tmp, value: str };
});
const found = mapped.filter(function isHCaptchaDifficulty(value) {
  return "string" !== typeof value.value;
});
const entries1 = Object.entries(require(dependencyMap[0]).CaptchaDeciderType);
const mapped1 = entries1.map((arg0) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  return { id, label, value: id };
});
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/captcha/tooling/CaptchaTestUtils.tsx");

export const HCAPTCHA_DIFFICULTY_OPTIONS = found;
export const CAPTCHA_DECIDER_TYPE_OPTIONS = mapped1;
