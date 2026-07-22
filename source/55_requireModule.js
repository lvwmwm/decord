// Module ID: 55
// Function ID: 1384
// Name: requireModule
// Dependencies: [57, 38]

// Module 55 (requireModule)
function requireModule(self) {
  if (null != __turboModuleProxy) {
    const tmp2 = __turboModuleProxy(self);
    if (null != tmp2) {
      return tmp2;
    }
  }
  if (true === self.RN$Bridgeless) {
    return null;
  }
  const tmp5 = arg1(arg6[0]).default[self];
  return null != tmp5 ? tmp5 : undefined;
}
__turboModuleProxy = __turboModuleProxy.__turboModuleProxy;
arg5.get = function get(arg0) {
  return requireModule(arg0);
};
arg5.getEnforcing = function getEnforcing(StatusBarManager) {
  const tmp = requireModule(StatusBarManager);
  arg2(arg6[1])(null != tmp, "TurboModuleRegistry.getEnforcing(...): '" + StatusBarManager + "' could not be found. Verify that a module by this name is registered in the native binary.");
  return tmp;
};
