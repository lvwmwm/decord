// Module ID: 16734
// Function ID: 16735
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 7623, 9703, 16735, 9702, 4153, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 16734 (getInviteEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9703);
    },
    darker() {
      return callback(16735);
    },
    light() {
      return callback(9702);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9703);
    },
    darker() {
      return callback(16735);
    },
    light() {
      return callback(9702);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9703);
    },
    darker() {
      return callback(16735);
    },
    light() {
      return callback(9702);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
