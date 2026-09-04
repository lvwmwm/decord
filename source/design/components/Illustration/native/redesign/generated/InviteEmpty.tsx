// Module ID: 17567
// Function ID: 17568
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 8164, 10881, 17568, 10880, 1362, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 17567 (getInviteEmptySource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(10881);
    },
    darker() {
      return callback(17568);
    },
    light() {
      return callback(10880);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10881);
    },
    darker() {
      return callback(17568);
    },
    light() {
      return callback(10880);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10881);
    },
    darker() {
      return callback(17568);
    },
    light() {
      return callback(10880);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
