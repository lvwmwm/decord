// Module ID: 16355
// Function ID: 127205
// Name: getEmptyServerSettingsAuditLogSource
// Dependencies: [31, 27, 33, 6517, 16356, 16357, 16358, 4011, 2]
// Exports: EmptyServerSettingsAuditLog

// Module 16355 (getEmptyServerSettingsAuditLogSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = require(6517) /* getIllustrationSource */;
  obj = {
    dark() {
      return outer1_0(outer1_1[4]);
    },
    darker() {
      return outer1_0(outer1_1[5]);
    },
    light() {
      return outer1_0(outer1_1[6]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function useEmptyServerSettingsAuditLogSource() {
  return getEmptyServerSettingsAuditLogSource(require(4011) /* AccessibilityAnnouncer */.useThemeContext().theme);
}
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export { getEmptyServerSettingsAuditLogSource };
export { useEmptyServerSettingsAuditLogSource };
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useEmptyServerSettingsAuditLogSource();
  return <Image />;
};
