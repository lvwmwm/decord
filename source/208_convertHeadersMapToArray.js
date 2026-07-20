// Module ID: 208
// Function ID: 2934
// Name: convertHeadersMapToArray
// Dependencies: []

// Module 208 (convertHeadersMapToArray)
function convertHeadersMapToArray(obj) {
  const items = [];
  for (const key10004 in arg0) {
    let tmp = key10004;
    let items1 = [key10004, arg0[key10004]];
    let arr = items.push(items1);
  }
  return items;
}
let closure_2 = 1;
let importDefaultResult = importDefault(dependencyMap[0]);
importDefaultResult = new importDefaultResult(null);

export default {
  addListener(arg0, arg1, arg2) {
    return importDefaultResult.addListener(arg0, arg1, arg2);
  },
  sendRequest(arg0, trackingName) {
    const tmp = importDefault(dependencyMap[1])(arg4);
    let formData = tmp;
    if (tmp) {
      formData = tmp.formData;
    }
    if (formData) {
      formData = tmp.formData;
      tmp.formData = formData.map((headers) => Object.assign({}, headers, { headers: callback(headers.headers) }));
    }
    let closure_2 = tmp2 + 1;
    let obj = importDefault(dependencyMap[2]);
    obj = { trackingName };
    obj.sendRequest(arg0, arg2, +closure_2, convertHeadersMapToArray(arg3), Object.assign({}, tmp, obj), arg5, arg6, arg7, arg9);
    arg8(+closure_2);
  },
  abortRequest(_requestId) {
    importDefault(dependencyMap[2]).abortRequest(_requestId);
  },
  clearCookies(arg0) {
    importDefault(dependencyMap[2]).clearCookies(arg0);
  }
};
