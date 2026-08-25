// Module ID: 16993
// Function ID: 16994
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 7767, 9853, 16994, 9852, 1363, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 16993 (getInviteEmptySource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9853);
    },
    darker() {
      return callback(16994);
    },
    light() {
      return callback(9852);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9853);
    },
    darker() {
      return callback(16994);
    },
    light() {
      return callback(9852);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9853);
    },
    darker() {
      return callback(16994);
    },
    light() {
      return callback(9852);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
