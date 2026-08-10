// Module ID: 15919
// Function ID: 15920
// Name: getWebhookEmptySource
// Dependencies: [19, 17, 21, 7623, 15920, 15921, 15922, 4153, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 15919 (getWebhookEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15920);
    },
    darker() {
      return callback(15921);
    },
    light() {
      return callback(15922);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15920);
    },
    darker() {
      return callback(15921);
    },
    light() {
      return callback(15922);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15920);
    },
    darker() {
      return callback(15921);
    },
    light() {
      return callback(15922);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
