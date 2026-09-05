// Module ID: 17556
// Function ID: 17557
// Name: getEmptyServerSettingsAuditLogSource
// Dependencies: [19, 17, 21, 8233, 17557, 17558, 17559, 4411, 2]
// Exports: EmptyServerSettingsAuditLog, getEmptyServerSettingsAuditLogSource, useEmptyServerSettingsAuditLogSource

// Module 17556 (getEmptyServerSettingsAuditLogSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17557);
    },
    darker() {
      return callback(17558);
    },
    light() {
      return callback(17559);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17557);
    },
    darker() {
      return callback(17558);
    },
    light() {
      return callback(17559);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17557);
    },
    darker() {
      return callback(17558);
    },
    light() {
      return callback(17559);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
