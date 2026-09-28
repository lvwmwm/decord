// Module ID: 9304
// Function ID: 9305
// Name: AppCrash
// Dependencies: [19, 17, 21, 7679, 9305, 9306, 9307, 4685, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9304 (AppCrash)
import shared from "shared" /* 4685 */;
import _mod7679 from "module_7679" /* 7679 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod7679.getIllustrationSource(theme, {
    dark() {
      return require("module_9305");
    },
    darker() {
      return require("module_9306");
    },
    light() {
      return require("module_9307");
    }
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9305");
    },
    darker() {
      return require("module_9306");
    },
    light() {
      return require("module_9307");
    }
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9305");
    },
    darker() {
      return require("module_9306");
    },
    light() {
      return require("module_9307");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
