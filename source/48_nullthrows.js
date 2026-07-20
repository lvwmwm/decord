// Module ID: 48
// Function ID: 1353
// Name: nullthrows
// Dependencies: []

// Module 48 (nullthrows)
function nullthrows(arg0, arg1) {
  let text = arg1;
  if (null != arg0) {
    return arg0;
  } else {
    let _Error = Error;
    if (undefined === text) {
      text = `Got unexpected ${arg0}`;
    }
    const prototype = _Error.prototype;
    _Error = new _Error(text);
    _Error.framesToPop = 1;
    throw _Error;
  }
}
module.exports.default = nullthrows;

export default nullthrows;
