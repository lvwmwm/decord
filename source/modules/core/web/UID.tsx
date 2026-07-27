// Module ID: 9234
// Function ID: 72375
// Name: uid
// Dependencies: [4339, 5450, 2]
// Exports: UID

// Module 9234 (uid)
function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4339)(str);
}
function useUID() {
  return importDefault(5450)(() => outer1_2());
}
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export { uid };
export { useUID };
export const UID = function UID(children) {
  return children.children(useUID());
};
