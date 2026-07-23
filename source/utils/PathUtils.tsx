// Module ID: 4186
// Function ID: 36036
// Name: pathBasename
// Dependencies: [477, 2]
// Exports: pathFilenameWithoutExt, pathJoin

// Module 4186 (pathBasename)
function pathBasename(str) {
  let arr = str;
  const parts = str.split(/[/\\]/);
  if ("" !== parts[parts.length - 1]) {
    arr = parts[parts.length - 1];
  }
  let substr = arr;
  if (tmp) {
    substr = arr.slice(0, -arg1.length);
  }
  return substr;
}
const result = require("set").fileFinishedImporting("utils/PathUtils.tsx");

export const pathJoin = function pathJoin(arg0, outer2_18) {
  const items = [...arguments];
  let str = "/";
  if (obj.isWindows()) {
    str = "\\";
  }
  const found = items.filter((arg0) => arg0.length > 0);
  return found.join(str);
};
export { pathBasename };
export const pathFilenameWithoutExt = function pathFilenameWithoutExt(arg0) {
  const arr = pathBasename(arg0);
  const lastIndexOfResult = arr.lastIndexOf(".");
  let substr = arr;
  if (lastIndexOfResult > 0) {
    substr = arr.slice(0, lastIndexOfResult);
  }
  return substr;
};
