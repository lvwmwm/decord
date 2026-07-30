// Module ID: 11701
// Function ID: 11702
// Name: getNoMutualFriendsSource
// Dependencies: [19, 17, 21, 6535, 11702, 11703, 11704, 4035, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 11701 (getNoMutualFriendsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11702);
    },
    darker() {
      return callback(11703);
    },
    light() {
      return callback(11704);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11702);
    },
    darker() {
      return callback(11703);
    },
    light() {
      return callback(11704);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11702);
    },
    darker() {
      return callback(11703);
    },
    light() {
      return callback(11704);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
