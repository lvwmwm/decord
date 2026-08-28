// Module ID: 16356
// Function ID: 16357
// Name: getWebhookEmptySource
// Dependencies: [19, 17, 21, 8851, 16357, 16358, 16359, 1363, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 16356 (getWebhookEmptySource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 8851 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16357);
    },
    darker() {
      return callback(16358);
    },
    light() {
      return callback(16359);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16357);
    },
    darker() {
      return callback(16358);
    },
    light() {
      return callback(16359);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16357);
    },
    darker() {
      return callback(16358);
    },
    light() {
      return callback(16359);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
