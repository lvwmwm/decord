// Module ID: 18015
// Function ID: 18016
// Name: CaptchaTestUtils
// Dependencies: [18016, 2]

// Module 18015 (CaptchaTestUtils)
import CaptchaTestActionCreators from "CaptchaTestActionCreators" /* 18016 */;
import size from "module_2" /* 2 */;

const entries = Object.entries(CaptchaTestActionCreators.HCaptchaDifficulty);
const mapped = entries.map((item) => {
  let str;
  let tmp;
  [tmp, str] = item;
  const obj = { id: str.toString(), label: tmp, value: str };
  return obj;
});
const found = mapped.filter(function isHCaptchaDifficulty(value) {
  return typeof value.value !== "string";
});
const entries1 = Object.entries(CaptchaTestActionCreators.CaptchaDeciderType);
const mapped1 = entries1.map((item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  return { id, label, value: id };
});
const result = size.fileFinishedImporting("modules/captcha/tooling/CaptchaTestUtils.tsx");

export const HCAPTCHA_DIFFICULTY_OPTIONS = found;
export const CAPTCHA_DECIDER_TYPE_OPTIONS = mapped1;
