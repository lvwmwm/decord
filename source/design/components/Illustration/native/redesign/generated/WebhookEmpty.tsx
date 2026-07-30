// Module ID: 15667
// Function ID: 15668
// Name: getWebhookEmptySource
// Dependencies: [19, 17, 21, 6535, 15668, 15669, 15670, 4035, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 15667 (getWebhookEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15668);
    },
    darker() {
      return callback(15669);
    },
    light() {
      return callback(15670);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15668);
    },
    darker() {
      return callback(15669);
    },
    light() {
      return callback(15670);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15668);
    },
    darker() {
      return callback(15669);
    },
    light() {
      return callback(15670);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
