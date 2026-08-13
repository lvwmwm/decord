// Module ID: 16806
// Function ID: 16807
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 7668, 9752, 16807, 9751, 1363, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 16806 (getInviteEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9752);
    },
    darker() {
      return callback(16807);
    },
    light() {
      return callback(9751);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9752);
    },
    darker() {
      return callback(16807);
    },
    light() {
      return callback(9751);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9752);
    },
    darker() {
      return callback(16807);
    },
    light() {
      return callback(9751);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
