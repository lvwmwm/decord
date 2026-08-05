// Module ID: 16588
// Function ID: 16589
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 7516, 9593, 16589, 9592, 4101, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 16588 (getInviteEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require(7516) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9593);
    },
    darker() {
      return callback(16589);
    },
    light() {
      return callback(9592);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9593);
    },
    darker() {
      return callback(16589);
    },
    light() {
      return callback(9592);
    }
  };
  return require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require(4101) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9593);
    },
    darker() {
      return callback(16589);
    },
    light() {
      return callback(9592);
    }
  };
  obj = {};
  const illustrationSource = require(7516) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
