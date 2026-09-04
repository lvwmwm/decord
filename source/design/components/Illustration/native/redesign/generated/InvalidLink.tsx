// Module ID: 11728
// Function ID: 11729
// Name: getInvalidLinkSource
// Dependencies: [19, 17, 21, 8164, 11386, 11729, 11387, 1362, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11728 (getInvalidLinkSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(11386);
    },
    darker() {
      return callback(11729);
    },
    light() {
      return callback(11387);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11386);
    },
    darker() {
      return callback(11729);
    },
    light() {
      return callback(11387);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11386);
    },
    darker() {
      return callback(11729);
    },
    light() {
      return callback(11387);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
