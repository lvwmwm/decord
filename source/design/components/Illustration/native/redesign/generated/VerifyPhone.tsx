// Module ID: 16484
// Function ID: 16485
// Name: getVerifyPhoneSource
// Dependencies: [19, 17, 21, 7544, 16485, 16486, 16487, 4130, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 16484 (getVerifyPhoneSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16485);
    },
    darker() {
      return callback(16486);
    },
    light() {
      return callback(16487);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16485);
    },
    darker() {
      return callback(16486);
    },
    light() {
      return callback(16487);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16485);
    },
    darker() {
      return callback(16486);
    },
    light() {
      return callback(16487);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
