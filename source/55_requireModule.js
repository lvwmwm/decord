// Module ID: 55
// Function ID: 1384
// Name: requireModule
// Dependencies: [56, 44]

// Module 55 (requireModule)
const global = __turboModuleProxy;
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function requireModule(arg0) {
  if (null != __turboModuleProxy) {
    const tmp2 = __turboModuleProxy(arg0);
    if (null != tmp2) {
      return tmp2;
    }
  }
  if (true === global.RN$Bridgeless) {
    return null;
  }
  const tmp5 = require(56) /* genModule */.default[arg0];
  return null != tmp5 ? tmp5 : undefined;
}
__turboModuleProxy = __turboModuleProxy.__turboModuleProxy;
arg5.get = function get(arg0) {
  return requireModule(arg0);
};
arg5.getEnforcing = function getEnforcing(StatusBarManager) {
  const tmp = requireModule(StatusBarManager);
  module(44)(null != tmp, "TurboModuleRegistry.getEnforcing(...): '" + StatusBarManager + "' could not be found. Verify that a module by this name is registered in the native binary.");
  return tmp;
};
