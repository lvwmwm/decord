// Module ID: 16246
// Function ID: 126510
// Name: getEmptyServerSettingsAuditLogSource
// Dependencies: [31, 27, 33, 7403, 16247, 16248, 16249, 3976, 2]
// Exports: EmptyServerSettingsAuditLog

// Module 16246 (getEmptyServerSettingsAuditLogSource)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = require(7403) /* getIllustrationSource */;
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
