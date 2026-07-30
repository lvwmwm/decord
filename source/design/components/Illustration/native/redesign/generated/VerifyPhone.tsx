// Module ID: 16336
// Function ID: 16337
// Name: getVerifyPhoneSource
// Dependencies: [19, 17, 21, 6535, 16337, 16338, 16339, 4035, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 16336 (getVerifyPhoneSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16337);
    },
    darker() {
      return callback(16338);
    },
    light() {
      return callback(16339);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16337);
    },
    darker() {
      return callback(16338);
    },
    light() {
      return callback(16339);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16337);
    },
    darker() {
      return callback(16338);
    },
    light() {
      return callback(16339);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
