// Module ID: 17476
// Function ID: 17477
// Name: getEmptyServerSettingsAuditLogSource
// Dependencies: [19, 17, 21, 8164, 17477, 17478, 17479, 1362, 2]
// Exports: EmptyServerSettingsAuditLog, getEmptyServerSettingsAuditLogSource, useEmptyServerSettingsAuditLogSource

// Module 17476 (getEmptyServerSettingsAuditLogSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17477);
    },
    darker() {
      return callback(17478);
    },
    light() {
      return callback(17479);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17477);
    },
    darker() {
      return callback(17478);
    },
    light() {
      return callback(17479);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17477);
    },
    darker() {
      return callback(17478);
    },
    light() {
      return callback(17479);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
