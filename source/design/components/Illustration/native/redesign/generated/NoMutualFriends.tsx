// Module ID: 12029
// Function ID: 12030
// Name: getNoMutualFriendsSource
// Dependencies: [19, 17, 21, 7664, 12030, 12031, 12032, 1363, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 12029 (getNoMutualFriendsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12030);
    },
    darker() {
      return callback(12031);
    },
    light() {
      return callback(12032);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12030);
    },
    darker() {
      return callback(12031);
    },
    light() {
      return callback(12032);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12030);
    },
    darker() {
      return callback(12031);
    },
    light() {
      return callback(12032);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
