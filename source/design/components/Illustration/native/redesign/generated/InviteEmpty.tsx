// Module ID: 16576
// Function ID: 16577
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 7532, 10362, 16577, 10361, 4101, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 16576 (getInviteEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require(7532) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10362);
    },
    darker() {
      return callback(16577);
    },
    light() {
      return callback(10361);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10362);
    },
    darker() {
      return callback(16577);
    },
    light() {
      return callback(10361);
    }
  };
  return require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10362);
    },
    darker() {
      return callback(16577);
    },
    light() {
      return callback(10361);
    }
  };
  obj = {};
  const illustrationSource = require(7532) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
