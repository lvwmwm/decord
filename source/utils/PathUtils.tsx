// Module ID: 4182
// Function ID: 35997
// Name: pathBasename
// Dependencies: []
// Exports: pathFilenameWithoutExt, pathJoin

// Module 4182 (pathBasename)
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
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/PathUtils.tsx");

export const pathJoin = function pathJoin(arg0, closure_18) {
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
