// Module ID: 16824
// Function ID: 16825
// Name: getVerifyPhoneSource
// Dependencies: [19, 17, 21, 7946, 16825, 16826, 16827, 1363, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 16824 (getVerifyPhoneSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7946 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16825);
    },
    darker() {
      return callback(16826);
    },
    light() {
      return callback(16827);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16825);
    },
    darker() {
      return callback(16826);
    },
    light() {
      return callback(16827);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16825);
    },
    darker() {
      return callback(16826);
    },
    light() {
      return callback(16827);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
