// Module ID: 4705
// Function ID: 40946
// Name: _prepareMessageRequestBodyCloud
// Dependencies: [1921, 1194, 683, 4666, 22, 675, 2]
// Exports: getUploadPayload, prepareMessagePayload

// Module 4705 (_prepareMessageRequestBodyCloud)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function _prepareMessageRequestBodyCloud(arr, arg1, arg2) {
  const items = [];
  const item = arr.forEach((id) => {
    let obj = items(outer1_2[3]);
    obj = {};
    const merged = Object.assign(obj.getAttachmentPayload(id, arg1));
    items.push(obj);
  });
  if (null != arg2) {
    if (null != arg1) {
      let obj = {};
      let merged = Object.assign(arg1);
      const items1 = [];
      HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(importDefault(22).get(obj, arg2, []), 0));
      const obj3 = importDefault(22);
      let result = importDefault(22).set(obj, arg2, items1);
      const obj4 = importDefault(22);
    }
    return result;
  }
  result = {};
  const merged1 = Object.assign(arg1);
  result["attachments"] = items;
}
function getUploadPayload(self) {
  const obj = { filename: self.filename, file_size: self.currentSize, id: importDefault(22).uniqueId(), original_content_type: undefined };
  return obj;
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("lib/uploader/native/CloudUploaderUtils.tsx");

export default { getUploadPayload };
export const prepareMessagePayload = function prepareMessagePayload(Authorization, arr) {
  let obj = {};
  obj = { Authorization, "X-Debug-Options": debugOptionsHeaderValue.getDebugOptionsHeaderValue(), "Accept-Language": locale.locale };
  const tmp = _prepareMessageRequestBodyCloud(arr, arg2, arg3);
  const superPropertiesBase64 = importDefault(675).getSuperPropertiesBase64();
  if (null != superPropertiesBase64) {
    obj["X-Super-Properties"] = superPropertiesBase64;
  }
  fingerprint = fingerprint.getFingerprint();
  if (null != fingerprint) {
    obj["X-Fingerprint"] = fingerprint;
  }
  obj.headers = obj;
  obj.body = tmp;
  return obj;
};
export { getUploadPayload };
