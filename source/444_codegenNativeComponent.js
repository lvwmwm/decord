// Module ID: 444
// Function ID: 6016
// Name: codegenNativeComponent
// Dependencies: [46, 445]

// Module 444 (codegenNativeComponent)
const global = arg0;
const module = arg2;
const dependencyMap = arg6;
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
          obj = module(46);
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
      obj2 = module(46);
    }
  }
  return module(445)(paperComponentNameDeprecated);
};
