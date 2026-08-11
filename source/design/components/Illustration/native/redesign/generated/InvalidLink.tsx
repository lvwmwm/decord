// Module ID: 11200
// Function ID: 11201
// Name: getInvalidLinkSource
// Dependencies: [19, 17, 21, 7625, 10438, 11201, 10439, 1363, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11200 (getInvalidLinkSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = require(7625) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10438);
    },
    darker() {
      return callback(11201);
    },
    light() {
      return callback(10439);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10438);
    },
    darker() {
      return callback(11201);
    },
    light() {
      return callback(10439);
    }
  };
  return require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10438);
    },
    darker() {
      return callback(11201);
    },
    light() {
      return callback(10439);
    }
  };
  obj = {};
  const illustrationSource = require(7625) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
