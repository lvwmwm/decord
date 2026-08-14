// Module ID: 11262
// Function ID: 11263
// Name: getInvalidLinkSource
// Dependencies: [19, 17, 21, 7689, 10407, 11263, 10408, 1363, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11262 (getInvalidLinkSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = require(7689) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10407);
    },
    darker() {
      return callback(11263);
    },
    light() {
      return callback(10408);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10407);
    },
    darker() {
      return callback(11263);
    },
    light() {
      return callback(10408);
    }
  };
  return require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10407);
    },
    darker() {
      return callback(11263);
    },
    light() {
      return callback(10408);
    }
  };
  obj = {};
  const illustrationSource = require(7689) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
