// Module ID: 11246
// Function ID: 11247
// Name: getInvalidLinkSource
// Dependencies: [19, 17, 21, 7668, 10393, 11247, 10394, 1363, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11246 (getInvalidLinkSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10393);
    },
    darker() {
      return callback(11247);
    },
    light() {
      return callback(10394);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10393);
    },
    darker() {
      return callback(11247);
    },
    light() {
      return callback(10394);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10393);
    },
    darker() {
      return callback(11247);
    },
    light() {
      return callback(10394);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
