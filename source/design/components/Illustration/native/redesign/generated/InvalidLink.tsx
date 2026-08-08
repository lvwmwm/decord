// Module ID: 11194
// Function ID: 11195
// Name: getInvalidLinkSource
// Dependencies: [19, 17, 21, 7623, 10432, 11195, 10433, 4153, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11194 (getInvalidLinkSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(10432);
    },
    darker() {
      return callback(11195);
    },
    light() {
      return callback(10433);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10432);
    },
    darker() {
      return callback(11195);
    },
    light() {
      return callback(10433);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(10432);
    },
    darker() {
      return callback(11195);
    },
    light() {
      return callback(10433);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
