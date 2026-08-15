// Module ID: 16062
// Function ID: 16063
// Name: getWebhookEmptySource
// Dependencies: [19, 17, 21, 7907, 16063, 16064, 16065, 1363, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 16062 (getWebhookEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  let obj = require(7907) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16063);
    },
    darker() {
      return callback(16064);
    },
    light() {
      return callback(16065);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16063);
    },
    darker() {
      return callback(16064);
    },
    light() {
      return callback(16065);
    }
  };
  return require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16063);
    },
    darker() {
      return callback(16064);
    },
    light() {
      return callback(16065);
    }
  };
  obj = {};
  const illustrationSource = require(7907) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
