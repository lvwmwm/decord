// Module ID: 16384
// Function ID: 16385
// Name: getEmptyServerSettingsAuditLogSource
// Dependencies: [19, 17, 21, 6535, 16385, 16386, 16387, 4035, 2]
// Exports: EmptyServerSettingsAuditLog, getEmptyServerSettingsAuditLogSource, useEmptyServerSettingsAuditLogSource

// Module 16384 (getEmptyServerSettingsAuditLogSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16385);
    },
    darker() {
      return callback(16386);
    },
    light() {
      return callback(16387);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16385);
    },
    darker() {
      return callback(16386);
    },
    light() {
      return callback(16387);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16385);
    },
    darker() {
      return callback(16386);
    },
    light() {
      return callback(16387);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
