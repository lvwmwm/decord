// Module ID: 16667
// Function ID: 16668
// Name: getVerifyPhoneSource
// Dependencies: [19, 17, 21, 7664, 16668, 16669, 16670, 1363, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 16667 (getVerifyPhoneSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16668);
    },
    darker() {
      return callback(16669);
    },
    light() {
      return callback(16670);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16668);
    },
    darker() {
      return callback(16669);
    },
    light() {
      return callback(16670);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16668);
    },
    darker() {
      return callback(16669);
    },
    light() {
      return callback(16670);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
