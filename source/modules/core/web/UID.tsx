// Module ID: 9278
// Function ID: 72526
// Name: uid
// Dependencies: [4373, 5485, 2]
// Exports: UID

// Module 9278 (uid)
function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4373)(str);
}
function useUID() {
  return importDefault(5485)(() => outer1_2());
}
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export { uid };
export { useUID };
export const UID = function UID(children) {
  return children.children(useUID());
};
