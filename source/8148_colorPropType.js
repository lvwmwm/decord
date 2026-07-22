// Module ID: 8148
// Function ID: 64467
// Name: colorPropType
// Dependencies: [4163]

// Module 8148 (colorPropType)
function colorPropType(arg0, arg1, arg2, arg3, arg4, arg5) {
  let tmp = arg5;
  if (null == arg1[arg2]) {
    let _Error2;
    if (arg0) {
      _Error2 = Error;
      const text = `Required ${arg4}`;
      if (!tmp) {
        tmp = arg2;
      }
      const prototype2 = _Error2.prototype;
      _Error2 = new _Error2(text + " `" + tmp + "` was not specified in `" + arg3 + "`.");
    }
    let _Error = _Error2;
  } else if ("number" !== typeof tmp2) {
    if ("string" === tmp15) {
      if (null === require(dependencyMap[0])(tmp2)) {
        _Error = Error;
        let tmp5 = tmp;
        const text1 = `Invalid ${arg4}`;
        if (!tmp) {
          tmp5 = arg2;
        }
        const prototype = _Error.prototype;
        _Error = new _Error(text1 + " `" + tmp5 + "` supplied to `" + arg3 + "`: " + tmp2 + "\nValid color formats are\n  - '#f0f' (#rgb)\n  - '#f0fc' (#rgba)\n  - '#ff00ff' (#rrggbb)\n  - '#ff00ff00' (#rrggbbaa)\n  - 'rgb(255, 255, 255)'\n  - 'rgba(255, 255, 255, 1.0)'\n  - 'hsl(360, 100%, 100%)'\n  - 'hsla(360, 100%, 100%, 1.0)'\n  - 'transparent'\n  - 'red'\n  - 0xff00ff00 (0xrrggbbaa)\n");
      }
    }
  }
  return _Error;
}
const bindResult = colorPropType.bind(null, false);
bindResult.isRequired = colorPropType.bind(null, true);

export default bindResult;
