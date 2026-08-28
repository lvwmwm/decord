// Module ID: 9201
// Function ID: 9202
// Name: getNoMutualFriendsSource
// Dependencies: [19, 17, 21, 8851, 9202, 9203, 9204, 1363, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 9201 (getNoMutualFriendsSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 8851 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9202);
    },
    darker() {
      return callback(9203);
    },
    light() {
      return callback(9204);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9202);
    },
    darker() {
      return callback(9203);
    },
    light() {
      return callback(9204);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9202);
    },
    darker() {
      return callback(9203);
    },
    light() {
      return callback(9204);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
