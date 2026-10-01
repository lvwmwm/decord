// Module ID: 9499
// Function ID: 9500
// Name: AppCrash
// Dependencies: [19, 17, 21, 7861, 9500, 9501, 9502, 4714, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9499 (AppCrash)
import shared from "shared" /* 4714 */;
import _mod7861 from "module_7861" /* 7861 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod7861.getIllustrationSource(theme, {
    dark() {
      return require("module_9500");
    },
    darker() {
      return require("module_9501");
    },
    light() {
      return require("module_9502");
    }
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9500");
    },
    darker() {
      return require("module_9501");
    },
    light() {
      return require("module_9502");
    }
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9500");
    },
    darker() {
      return require("module_9501");
    },
    light() {
      return require("module_9502");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
