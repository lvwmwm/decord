// Module ID: 16804
// Function ID: 16805
// Name: getInviteEmptySource
// Dependencies: [19, 17, 21, 7664, 9748, 16805, 9747, 1363, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 16804 (getInviteEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(9748);
    },
    darker() {
      return callback(16805);
    },
    light() {
      return callback(9747);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9748);
    },
    darker() {
      return callback(16805);
    },
    light() {
      return callback(9747);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(9748);
    },
    darker() {
      return callback(16805);
    },
    light() {
      return callback(9747);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
