// Module ID: 16713
// Function ID: 16714
// Name: getEmptyServerSettingsAuditLogSource
// Dependencies: [19, 17, 21, 7664, 16714, 16715, 16716, 1363, 2]
// Exports: EmptyServerSettingsAuditLog, getEmptyServerSettingsAuditLogSource, useEmptyServerSettingsAuditLogSource

// Module 16713 (getEmptyServerSettingsAuditLogSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16714);
    },
    darker() {
      return callback(16715);
    },
    light() {
      return callback(16716);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16714);
    },
    darker() {
      return callback(16715);
    },
    light() {
      return callback(16716);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16714);
    },
    darker() {
      return callback(16715);
    },
    light() {
      return callback(16716);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
