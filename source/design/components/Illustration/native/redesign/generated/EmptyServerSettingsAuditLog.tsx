// Module ID: 16643
// Function ID: 16644
// Name: getEmptyServerSettingsAuditLogSource
// Dependencies: [19, 17, 21, 7623, 16644, 16645, 16646, 4153, 2]
// Exports: EmptyServerSettingsAuditLog, getEmptyServerSettingsAuditLogSource, useEmptyServerSettingsAuditLogSource

// Module 16643 (getEmptyServerSettingsAuditLogSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = require(7623) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16644);
    },
    darker() {
      return callback(16645);
    },
    light() {
      return callback(16646);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16644);
    },
    darker() {
      return callback(16645);
    },
    light() {
      return callback(16646);
    }
  };
  return require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = require(4153) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16644);
    },
    darker() {
      return callback(16645);
    },
    light() {
      return callback(16646);
    }
  };
  obj = {};
  const illustrationSource = require(7623) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
