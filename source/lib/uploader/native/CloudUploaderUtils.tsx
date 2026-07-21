// Module ID: 4702
// Function ID: 40915
// Name: _prepareMessageRequestBodyCloud
// Dependencies: []
// Exports: getUploadPayload, prepareMessagePayload

// Module 4702 (_prepareMessageRequestBodyCloud)
function _prepareMessageRequestBodyCloud(arr, arg1, arg2) {
  const items = [];
  arg1 = items;
  const item = arr.forEach((id) => {
    let obj = items(closure_2[3]);
    obj = {};
    const merged = Object.assign(obj.getAttachmentPayload(id, arg1));
    items.push(obj);
  });
  if (null != arg2) {
    if (null != arg1) {
      const obj = {};
      const merged = Object.assign(arg1);
      const items1 = [];
      HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(importDefault(dependencyMap[4]).get(obj, arg2, []), 0));
      const obj3 = importDefault(dependencyMap[4]);
      let result = importDefault(dependencyMap[4]).set(obj, arg2, items1);
      const obj4 = importDefault(dependencyMap[4]);
    }
    return result;
  }
  result = {};
  const merged1 = Object.assign(arg1);
  result["attachments"] = items;
}
function getUploadPayload(self) {
  const obj = { filename: self.filename, file_size: self.currentSize, id: importDefault(dependencyMap[4]).uniqueId(), original_content_type: undefined };
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("lib/uploader/native/CloudUploaderUtils.tsx");

export default { getUploadPayload };
export const prepareMessagePayload = function prepareMessagePayload(Authorization, arr) {
  let obj = {};
  obj = { Authorization, X-Debug-Options: debugOptionsHeaderValue.getDebugOptionsHeaderValue(), Accept-Language: locale.locale };
  const tmp = _prepareMessageRequestBodyCloud(arr, arg2, arg3);
  const superPropertiesBase64 = importDefault(dependencyMap[5]).getSuperPropertiesBase64();
  if (null != superPropertiesBase64) {
    obj.X-Super-Properties = superPropertiesBase64;
  }
  const fingerprint = fingerprint.getFingerprint();
  if (null != fingerprint) {
    obj.X-Fingerprint = fingerprint;
  }
  obj.headers = obj;
  obj.body = tmp;
  return obj;
};
export { getUploadPayload };
