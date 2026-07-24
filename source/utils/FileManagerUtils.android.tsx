// Module ID: 8289
// Function ID: 65323
// Name: _readFile
// Dependencies: [5, 3, 1247, 2]
// Exports: clearFolder, moveFile, readFile, removeFile, writeFile

// Module 8289 (_readFile)
import asyncGeneratorStep from "asyncGeneratorStep";
import importDefaultResult from "set";

async function _readFile(arg0, arg1, arg2, arg3) {
  if (null == outer2_0(outer2_1[2])) {
    if (null == null) {
      return null;
    } else {
      if (yield obj4.fileExists(tmp7 + "/" + arg1)) {
        return yield outer2_0(outer2_1[2]).readFile(null + "/" + arg1, arg2);
      } else {
        return null;
      }
      obj4 = outer2_0(outer2_1[2]);
    }
  } else if ("cache" === arg0) {
    let DocumentsDirPath = outer2_0(outer2_1[2]).getConstants().CacheDirPath;
    const obj2 = outer2_0(outer2_1[2]);
  } else {
    DocumentsDirPath = outer2_0(outer2_1[2]).getConstants().DocumentsDirPath;
    const obj = outer2_0(outer2_1[2]);
  }
}
importDefaultResult = new importDefaultResult("FileManagerUtils");
const result = require("enforcing").fileFinishedImporting("utils/FileManagerUtils.android.tsx");

export const writeFile = function writeFile(cache, combined1, arg2, utf8) {
  let nextPromise;
  if (null != importDefault(1247)) {
    const obj = importDefault(1247);
    nextPromise = obj.writeFile(cache, combined1, arg2, utf8).then((arg0) => "file:" + arg0);
    const writeFileResult = obj.writeFile(cache, combined1, arg2, utf8);
  }
  if (null == nextPromise) {
    nextPromise = Promise.reject("RTNFileManager doesn't exist?");
  }
  return nextPromise;
};
export const moveFile = function moveFile(arg0, arg1, filePathForGif) {
  let moveFileResult;
  if (null != importDefault(1247)) {
    moveFileResult = importDefault(1247).moveFile(arg0, arg1, filePathForGif);
    const obj = importDefault(1247);
  }
  if (null == moveFileResult) {
    moveFileResult = Promise.reject(false);
  }
  return moveFileResult;
};
export const removeFile = function removeFile(cache, filePathForGif) {
  let removeFileResult;
  if (null != importDefault(1247)) {
    removeFileResult = importDefault(1247).removeFile(cache, filePathForGif);
    const obj = importDefault(1247);
  }
  if (null == removeFileResult) {
    removeFileResult = Promise.reject(false);
  }
  return removeFileResult;
};
export const clearFolder = function clearFolder(cache, arg1) {
  let clearFolderResult;
  if (null != importDefault(1247)) {
    clearFolderResult = importDefault(1247).clearFolder(cache, arg1);
    const obj = importDefault(1247);
  }
  if (null == clearFolderResult) {
    clearFolderResult = Promise.reject(false);
  }
  return clearFolderResult;
};
export const readFile = function readFile(documents, filePathForGif, utf8) {
  return _readFile(...arguments);
};
