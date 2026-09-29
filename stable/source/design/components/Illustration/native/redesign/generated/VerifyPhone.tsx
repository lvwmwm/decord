// Module ID: 17919
// Function ID: 17920
// Name: generated/VerifyPhone
// Dependencies: [19, 17, 21, 8534, 17920, 17921, 17922, 4639, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 17919 (generated/VerifyPhone)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_17920");
    },
    darker() {
      return require("module_17921");
    },
    light() {
      return require("module_17922");
    }
  });
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17920");
    },
    darker() {
      return require("module_17921");
    },
    light() {
      return require("module_17922");
    }
  });
};
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17920");
    },
    darker() {
      return require("module_17921");
    },
    light() {
      return require("module_17922");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
