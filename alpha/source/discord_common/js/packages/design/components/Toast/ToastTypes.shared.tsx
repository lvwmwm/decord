// Module ID: 16122
// Function ID: 16123
// Dependencies: [2]
// Exports: isToastEntity

// Module 16122
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Toast/ToastTypes.shared.tsx");

export function isToastEntity(icon) {
  let tmp = typeof icon === "object";
  if (typeof icon === "object") {
    tmp = null != icon;
  }
  if (tmp) {
    tmp = "type" in icon;
  }
  if (tmp) {
    tmp = typeof icon.type === "string";
  }
  return tmp;
}
