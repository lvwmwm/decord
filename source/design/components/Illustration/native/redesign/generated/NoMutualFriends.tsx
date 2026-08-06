// Module ID: 11887
// Function ID: 11888
// Name: getNoMutualFriendsSource
// Dependencies: [19, 17, 21, 7544, 11888, 11889, 11890, 4130, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 11887 (getNoMutualFriendsSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(11888);
    },
    darker() {
      return callback(11889);
    },
    light() {
      return callback(11890);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11888);
    },
    darker() {
      return callback(11889);
    },
    light() {
      return callback(11890);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(11888);
    },
    darker() {
      return callback(11889);
    },
    light() {
      return callback(11890);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
