// Module ID: 11113
// Function ID: 11114
// Name: getInvalidLinkSource
// Dependencies: [19, 17, 21, 7544, 10350, 11114, 10351, 4130, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11113 (getInvalidLinkSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10350);
    },
    darker() {
      return callback(11114);
    },
    light() {
      return callback(10351);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10350);
    },
    darker() {
      return callback(11114);
    },
    light() {
      return callback(10351);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10350);
    },
    darker() {
      return callback(11114);
    },
    light() {
      return callback(10351);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
