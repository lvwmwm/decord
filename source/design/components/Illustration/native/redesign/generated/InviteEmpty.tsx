// Module ID: 16822
// Function ID: 16823
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 7689, 9763, 16823, 9762, 1363, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 16822 (getInviteEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9763);
    },
    darker() {
      return callback(16823);
    },
    light() {
      return callback(9762);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9763);
    },
    darker() {
      return callback(16823);
    },
    light() {
      return callback(9762);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9763);
    },
    darker() {
      return callback(16823);
    },
    light() {
      return callback(9762);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
