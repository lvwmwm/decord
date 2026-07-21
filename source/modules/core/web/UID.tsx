// Module ID: 9297
// Function ID: 72611
// Name: uid
// Dependencies: []
// Exports: UID

// Module 9297 (uid)
function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(dependencyMap[0])(str);
}
function useUID() {
  return importDefault(dependencyMap[1])(() => callback());
}
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/core/web/UID.tsx");

export { uid };
export { useUID };
export const UID = function UID(children) {
  return children.children(useUID());
};
