// Module ID: 444
// Function ID: 6016
// Name: codegenNativeComponent
// Dependencies: []

// Module 444 (codegenNativeComponent)
arg5.default = function codegenNativeComponent(arg0, paperComponentName) {
  paperComponentName = arg0;
  if (paperComponentName) {
    paperComponentName = arg0;
    if (null != paperComponentName.paperComponentName) {
      paperComponentName = paperComponentName.paperComponentName;
    }
  }
  let paperComponentNameDeprecated = paperComponentName;
  if (null != paperComponentName) {
    paperComponentNameDeprecated = paperComponentName;
    if (null != paperComponentName.paperComponentNameDeprecated) {
      paperComponentNameDeprecated = arg0;
      if (!obj2.hasViewManagerConfig(arg0)) {
        if (null != paperComponentName.paperComponentNameDeprecated) {
          if (obj.hasViewManagerConfig(paperComponentName.paperComponentNameDeprecated)) {
            paperComponentNameDeprecated = paperComponentName.paperComponentNameDeprecated;
          }
          const obj = arg2(arg6[0]);
        }
        let _Error = Error;
        const paperComponentNameDeprecated2 = paperComponentName.paperComponentNameDeprecated;
        let str = "(unknown)";
        if (null != paperComponentNameDeprecated2) {
          str = paperComponentNameDeprecated2;
        }
        const _HermesInternal = HermesInternal;
        const prototype = _Error.prototype;
        _Error = new _Error("Failed to find native component for either " + arg0 + " or " + str);
        throw _Error;
      }
      const obj2 = arg2(arg6[0]);
    }
  }
  return arg2(arg6[1])(paperComponentNameDeprecated);
};
