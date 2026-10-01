// Module ID: 12646
// Function ID: 12647
// Name: vibegrationsPreviewClaims
// Dependencies: [32, 2]
// Exports: awaitVibegrationsPreviewClaim, clearVibegrationsPreviewClaims, resolveVibegrationsPreviewClaim

// Module 12646 (vibegrationsPreviewClaims)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let map = new Map();
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPreviewClaims.tsx");

export const awaitVibegrationsPreviewClaim = function awaitVibegrationsPreviewClaim(projectId, id) {
  map = id;
  const value = map.get(id);
  if (null != value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    value.resolve(null);
  }
  const promise = new Promise((resolve) => {
    projectId = resolve;
    const obj = {
      resolve,
      timer: setTimeout(() => {
        map.delete(id);
        resolve(null);
      }, 5000),
      projectId
    };
    const result = id.set(id, obj);
  });
  return promise;
};
export const resolveVibegrationsPreviewClaim = function resolveVibegrationsPreviewClaim(id, upload_token) {
  const value = map.get(id);
  const obj = map;
  if (null != value) {
    obj.delete(id);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    const obj2 = { uploadToken: upload_token };
    value.resolve(obj2);
  }
};
export const clearVibegrationsPreviewClaims = function clearVibegrationsPreviewClaims(projectId) {
  let tmp5;
  let tmp6;
  const items = [...map];
  const tmp = items[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    let obj = tmp6;
    if (tmp6.projectId === projectId) {
      let deleteResult = map.delete(tmp5);
      let _clearTimeout = clearTimeout;
      let clearTimeoutResult = clearTimeout(obj.timer);
      let resolveResult = obj.resolve(null);
    }
    continue;
  }
};
