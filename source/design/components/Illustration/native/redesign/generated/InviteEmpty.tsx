// Module ID: 16746
// Function ID: 16747
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 7625, 9708, 16747, 9707, 1363, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 16746 (getInviteEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9708);
    },
    darker() {
      return callback(16747);
    },
    light() {
      return callback(9707);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9708);
    },
    darker() {
      return callback(16747);
    },
    light() {
      return callback(9707);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9708);
    },
    darker() {
      return callback(16747);
    },
    light() {
      return callback(9707);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
