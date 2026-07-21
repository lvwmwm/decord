// Module ID: 8238
// Function ID: 65046
// Name: _readFile
// Dependencies: []
// Exports: clearFolder, moveFile, readFile, removeFile, writeFile

// Module 8238 (_readFile)
async function _readFile(arg0, arg1, filePathForGif, arg3) {
  if (null == callback(closure_1[2])) {
    if (null == null) {
      return null;
    } else {
      if (yield obj4.fileExists(tmp7 + "/" + arg1)) {
        return yield callback(closure_1[2]).readFile(null + "/" + arg1, filePathForGif);
      } else {
        return null;
      }
      const obj4 = callback(closure_1[2]);
    }
  } else if ("cache" === arg0) {
    let DocumentsDirPath = callback(closure_1[2]).getConstants().CacheDirPath;
    const obj2 = callback(closure_1[2]);
  } else {
    DocumentsDirPath = callback(closure_1[2]).getConstants().DocumentsDirPath;
    const obj = callback(closure_1[2]);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult("FileManagerUtils");
const result = arg1(dependencyMap[3]).fileFinishedImporting("utils/FileManagerUtils.android.tsx");

export const writeFile = function writeFile(cache, combined1, arg2, utf8) {
  let nextPromise;
  if (null != importDefault(dependencyMap[2])) {
    const obj = importDefault(dependencyMap[2]);
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
  if (null != importDefault(dependencyMap[2])) {
    moveFileResult = importDefault(dependencyMap[2]).moveFile(arg0, arg1, filePathForGif);
    const obj = importDefault(dependencyMap[2]);
  }
  if (null == moveFileResult) {
    moveFileResult = Promise.reject(false);
  }
  return moveFileResult;
};
export const removeFile = function removeFile(cache, filePathForGif) {
  let removeFileResult;
  if (null != importDefault(dependencyMap[2])) {
    removeFileResult = importDefault(dependencyMap[2]).removeFile(cache, filePathForGif);
    const obj = importDefault(dependencyMap[2]);
  }
  if (null == removeFileResult) {
    removeFileResult = Promise.reject(false);
  }
  return removeFileResult;
};
export const clearFolder = function clearFolder(cache, arg1) {
  let clearFolderResult;
  if (null != importDefault(dependencyMap[2])) {
    clearFolderResult = importDefault(dependencyMap[2]).clearFolder(cache, arg1);
    const obj = importDefault(dependencyMap[2]);
  }
  if (null == clearFolderResult) {
    clearFolderResult = Promise.reject(false);
  }
  return clearFolderResult;
};
export const readFile = function readFile(documents, filePathForGif, utf8) {
  return _readFile(...arguments);
};
