// Module ID: 16192
// Function ID: 16193
// Name: getWebhookEmptySource
// Dependencies: [19, 17, 21, 7767, 16193, 16194, 16195, 1363, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 16192 (getWebhookEmptySource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16193);
    },
    darker() {
      return callback(16194);
    },
    light() {
      return callback(16195);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16193);
    },
    darker() {
      return callback(16194);
    },
    light() {
      return callback(16195);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16193);
    },
    darker() {
      return callback(16194);
    },
    light() {
      return callback(16195);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
