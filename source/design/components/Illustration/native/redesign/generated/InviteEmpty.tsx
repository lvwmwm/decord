// Module ID: 16481
// Function ID: 16482
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 6535, 10206, 16482, 10205, 4035, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 16481 (getInviteEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10206);
    },
    darker() {
      return callback(16482);
    },
    light() {
      return callback(10205);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10206);
    },
    darker() {
      return callback(16482);
    },
    light() {
      return callback(10205);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10206);
    },
    darker() {
      return callback(16482);
    },
    light() {
      return callback(10205);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
