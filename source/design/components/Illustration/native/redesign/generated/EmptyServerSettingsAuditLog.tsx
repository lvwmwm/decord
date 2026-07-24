// Module ID: 16293
// Function ID: 126834
// Name: getEmptyServerSettingsAuditLogSource
// Dependencies: [31, 27, 33, 7405, 16294, 16295, 16296, 3976, 2]
// Exports: EmptyServerSettingsAuditLog

// Module 16293 (getEmptyServerSettingsAuditLogSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = require(7405) /* getIllustrationSource */;
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
  return getEmptyServerSettingsAuditLogSource(require(3976) /* AccessibilityAnnouncer */.useThemeContext().theme);
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
