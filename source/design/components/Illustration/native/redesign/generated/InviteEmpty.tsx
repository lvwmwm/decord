// Module ID: 16648
// Function ID: 16649
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 7563, 9638, 16649, 9637, 4147, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 16648 (getInviteEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9638);
    },
    darker() {
      return callback(16649);
    },
    light() {
      return callback(9637);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9638);
    },
    darker() {
      return callback(16649);
    },
    light() {
      return callback(9637);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9638);
    },
    darker() {
      return callback(16649);
    },
    light() {
      return callback(9637);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
