// Module ID: 16814
// Function ID: 16815
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 7664, 16815, 16816, 16817, 1363, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 16814 (getIntroHeaderSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16815);
    },
    darker() {
      return callback(16816);
    },
    light() {
      return callback(16817);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16815);
    },
    darker() {
      return callback(16816);
    },
    light() {
      return callback(16817);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16815);
    },
    darker() {
      return callback(16816);
    },
    light() {
      return callback(16817);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
