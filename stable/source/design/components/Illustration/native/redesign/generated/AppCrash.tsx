// Module ID: 10144
// Function ID: 10145
// Name: AppCrash
// Dependencies: [19, 17, 21, 8534, 10145, 10146, 10147, 4639, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 10144 (AppCrash)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_10145");
    },
    darker() {
      return require("module_10146");
    },
    light() {
      return require("module_10147");
    }
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10145");
    },
    darker() {
      return require("module_10146");
    },
    light() {
      return require("module_10147");
    }
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10145");
    },
    darker() {
      return require("module_10146");
    },
    light() {
      return require("module_10147");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
