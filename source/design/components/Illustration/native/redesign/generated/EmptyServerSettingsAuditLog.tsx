// Module ID: 16532
// Function ID: 16533
// Name: getEmptyServerSettingsAuditLogSource
// Dependencies: [19, 17, 21, 7544, 16533, 16534, 16535, 4130, 2]
// Exports: EmptyServerSettingsAuditLog, getEmptyServerSettingsAuditLogSource, useEmptyServerSettingsAuditLogSource

// Module 16532 (getEmptyServerSettingsAuditLogSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16533);
    },
    darker() {
      return callback(16534);
    },
    light() {
      return callback(16535);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16533);
    },
    darker() {
      return callback(16534);
    },
    light() {
      return callback(16535);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16533);
    },
    darker() {
      return callback(16534);
    },
    light() {
      return callback(16535);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
