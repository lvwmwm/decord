// Module ID: 12032
// Function ID: 12033
// Name: getNoMutualFriendsSource
// Dependencies: [19, 17, 21, 7668, 12033, 12034, 12035, 1363, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 12032 (getNoMutualFriendsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12033);
    },
    darker() {
      return callback(12034);
    },
    light() {
      return callback(12035);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12033);
    },
    darker() {
      return callback(12034);
    },
    light() {
      return callback(12035);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12033);
    },
    darker() {
      return callback(12034);
    },
    light() {
      return callback(12035);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
