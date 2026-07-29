// Module ID: 15673
// Function ID: 15674
// Name: getWebhookEmptySource
// Dependencies: [19, 17, 21, 6538, 15674, 15675, 15676, 4035, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 15673 (getWebhookEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  let obj = require(6538) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15674);
    },
    darker() {
      return callback(15675);
    },
    light() {
      return callback(15676);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15674);
    },
    darker() {
      return callback(15675);
    },
    light() {
      return callback(15676);
    }
  };
  return require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15674);
    },
    darker() {
      return callback(15675);
    },
    light() {
      return callback(15676);
    }
  };
  obj = {};
  const illustrationSource = require(6538) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
