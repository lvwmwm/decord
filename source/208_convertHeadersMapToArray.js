// Module ID: 208
// Function ID: 2934
// Name: convertHeadersMapToArray
// Dependencies: [209, 210, 213]

// Module 208 (convertHeadersMapToArray)
import importDefaultResult from "NativeEventEmitter";

function convertHeadersMapToArray(obj) {
  const items = [];
  for (const key10004 in arg0) {
    let tmp = key10004;
    let items1 = [key10004, arg0[key10004]];
    let arr = items.push(items1);
    continue;
  }
  return items;
}
let c2 = 1;
importDefaultResult = new importDefaultResult(null);

export default {
  addListener(arg0, arg1, arg2) {
    return importDefaultResult.addListener(arg0, arg1, arg2);
  },
  sendRequest(arg0, trackingName) {
    const tmp = importDefault(210)(arg4);
    let formData = tmp;
    if (tmp) {
      formData = tmp.formData;
    }
    if (formData) {
      formData = tmp.formData;
      tmp.formData = formData.map((headers) => Object.assign({}, headers, { headers: outer1_4(headers.headers) }));
    }
    let closure_2 = tmp2 + 1;
    let obj = importDefault(213);
    obj = { trackingName };
    obj.sendRequest(arg0, arg2, +closure_2, convertHeadersMapToArray(arg3), Object.assign({}, tmp, obj), arg5, arg6, arg7, arg9);
    arg8(+closure_2);
  },
  abortRequest(_requestId) {
    importDefault(213).abortRequest(_requestId);
  },
  clearCookies(arg0) {
    importDefault(213).clearCookies(arg0);
  }
};
