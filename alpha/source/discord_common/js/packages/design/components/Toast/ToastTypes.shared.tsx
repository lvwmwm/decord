// Module ID: 14260
// Function ID: 14261
// Dependencies: [2]
// Exports: isToastEntity

// Module 14260
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Toast/ToastTypes.shared.tsx");

export const isToastEntity = function isToastEntity(icon) {
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
};
