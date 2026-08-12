// Module ID: 11254
// Function ID: 11255
// Name: getInvalidLinkSource
// Dependencies: [19, 17, 21, 7664, 10479, 11255, 10480, 1363, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11254 (getInvalidLinkSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10479);
    },
    darker() {
      return callback(11255);
    },
    light() {
      return callback(10480);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10479);
    },
    darker() {
      return callback(11255);
    },
    light() {
      return callback(10480);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10479);
    },
    darker() {
      return callback(11255);
    },
    light() {
      return callback(10480);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
