// Module ID: 16487
// Function ID: 16488
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 6538, 10210, 16488, 10209, 4035, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 16487 (getInviteEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10210);
    },
    darker() {
      return callback(16488);
    },
    light() {
      return callback(10209);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10210);
    },
    darker() {
      return callback(16488);
    },
    light() {
      return callback(10209);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10210);
    },
    darker() {
      return callback(16488);
    },
    light() {
      return callback(10209);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
