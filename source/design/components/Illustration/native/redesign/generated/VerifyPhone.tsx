// Module ID: 16685
// Function ID: 16686
// Name: getVerifyPhoneSource
// Dependencies: [19, 17, 21, 7689, 16686, 16687, 16688, 1363, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 16685 (getVerifyPhoneSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16686);
    },
    darker() {
      return callback(16687);
    },
    light() {
      return callback(16688);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16686);
    },
    darker() {
      return callback(16687);
    },
    light() {
      return callback(16688);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16686);
    },
    darker() {
      return callback(16687);
    },
    light() {
      return callback(16688);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
