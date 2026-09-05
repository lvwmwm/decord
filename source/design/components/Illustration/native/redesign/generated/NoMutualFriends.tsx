// Module ID: 12610
// Function ID: 12611
// Name: getNoMutualFriendsSource
// Dependencies: [19, 17, 21, 8233, 12611, 12612, 12613, 4411, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 12610 (getNoMutualFriendsSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(12611);
    },
    darker() {
      return callback(12612);
    },
    light() {
      return callback(12613);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12611);
    },
    darker() {
      return callback(12612);
    },
    light() {
      return callback(12613);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12611);
    },
    darker() {
      return callback(12612);
    },
    light() {
      return callback(12613);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
