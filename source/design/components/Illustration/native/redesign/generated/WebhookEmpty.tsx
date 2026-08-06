// Module ID: 15811
// Function ID: 15812
// Name: getWebhookEmptySource
// Dependencies: [19, 17, 21, 7544, 15812, 15813, 15814, 4130, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 15811 (getWebhookEmptySource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(15812);
    },
    darker() {
      return callback(15813);
    },
    light() {
      return callback(15814);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15812);
    },
    darker() {
      return callback(15813);
    },
    light() {
      return callback(15814);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(15812);
    },
    darker() {
      return callback(15813);
    },
    light() {
      return callback(15814);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
