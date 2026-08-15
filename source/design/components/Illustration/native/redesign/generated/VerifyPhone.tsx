// Module ID: 16731
// Function ID: 16732
// Name: getVerifyPhoneSource
// Dependencies: [19, 17, 21, 7907, 16732, 16733, 16734, 1363, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 16731 (getVerifyPhoneSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  let obj = require(7907) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16732);
    },
    darker() {
      return callback(16733);
    },
    light() {
      return callback(16734);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16732);
    },
    darker() {
      return callback(16733);
    },
    light() {
      return callback(16734);
    }
  };
  return require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16732);
    },
    darker() {
      return callback(16733);
    },
    light() {
      return callback(16734);
    }
  };
  obj = {};
  const illustrationSource = require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
