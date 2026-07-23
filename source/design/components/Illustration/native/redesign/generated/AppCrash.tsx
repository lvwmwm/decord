// Module ID: 12159
// Function ID: 95198
// Name: getAppCrashSource
// Dependencies: [31, 27, 33, 7403, 12160, 12161, 12162, 3976, 2]
// Exports: AppCrash

// Module 12159 (getAppCrashSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getAppCrashSource(theme) {
  let obj = require(7403) /* getIllustrationSource */;
  obj = {
    dark() {
      return outer1_0(outer1_1[4]);
    },
    darker() {
      return outer1_0(outer1_1[5]);
    },
    light() {
      return outer1_0(outer1_1[6]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function useAppCrashSource() {
  return getAppCrashSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export { getAppCrashSource };
export { useAppCrashSource };
export const AppCrash = function AppCrash(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useAppCrashSource();
  return <Image />;
};
