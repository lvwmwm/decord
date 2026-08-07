// Module ID: 11128
// Function ID: 11129
// Name: getInvalidLinkSource
// Dependencies: [19, 17, 21, 7563, 10366, 11129, 10367, 4147, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11128 (getInvalidLinkSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = require(7563) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10366);
    },
    darker() {
      return callback(11129);
    },
    light() {
      return callback(10367);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10366);
    },
    darker() {
      return callback(11129);
    },
    light() {
      return callback(10367);
    }
  };
  return require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = require(4147) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10366);
    },
    darker() {
      return callback(11129);
    },
    light() {
      return callback(10367);
    }
  };
  obj = {};
  const illustrationSource = require(7563) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
