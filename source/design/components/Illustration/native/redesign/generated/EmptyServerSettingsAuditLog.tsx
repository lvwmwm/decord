// Module ID: 17376
// Function ID: 17377
// Name: getEmptyServerSettingsAuditLogSource
// Dependencies: [19, 17, 21, 8926, 17377, 17378, 17379, 1362, 2]
// Exports: EmptyServerSettingsAuditLog, getEmptyServerSettingsAuditLogSource, useEmptyServerSettingsAuditLogSource

// Module 17376 (getEmptyServerSettingsAuditLogSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8926 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17377);
    },
    darker() {
      return callback(17378);
    },
    light() {
      return callback(17379);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17377);
    },
    darker() {
      return callback(17378);
    },
    light() {
      return callback(17379);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17377);
    },
    darker() {
      return callback(17378);
    },
    light() {
      return callback(17379);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
