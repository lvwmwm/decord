// Module ID: 1158
// Function ID: 13172
// Name: weakMap
// Dependencies: []

// Module 1158 (weakMap)
const weakMap = new WeakMap();
arg5.enableSyncToNative = function enableSyncToNative(globalScope) {
  const arg1 = globalScope;
  if (!weakMap.has(globalScope)) {
    const result = weakMap.set(globalScope, true);
    arg1(arg6[0]).fillTyped(globalScope, "setUser", (arg0) => (arg0) => {
      const NATIVE = arg0(closure_1[1]).NATIVE;
      NATIVE.setUser(arg0);
      return arg0.call(arg0, arg0);
    });
    const obj = arg1(arg6[0]);
    arg1(arg6[0]).fillTyped(globalScope, "setTag", (arg0) => (arg0, arg1) => {
      const NATIVE = arg0(closure_1[1]).NATIVE;
      const NATIVE2 = arg0(closure_1[1]).NATIVE;
      NATIVE.setTag(arg0, NATIVE2.primitiveProcessor(arg1));
      return arg0.call(arg0, arg0, arg1);
    });
    const obj2 = arg1(arg6[0]);
    arg1(arg6[0]).fillTyped(globalScope, "setTags", (arg0) => (arg0) => {
      const keys = Object.keys(arg0);
      const item = keys.forEach((arg0) => {
        const NATIVE = arg0(closure_1[1]).NATIVE;
        const NATIVE2 = arg0(closure_1[1]).NATIVE;
        NATIVE.setTag(arg0, NATIVE2.primitiveProcessor(arg0[arg0]));
      });
      return arg0.call(arg0, arg0);
    });
    const obj3 = arg1(arg6[0]);
    arg1(arg6[0]).fillTyped(globalScope, "setExtras", (arg0) => (arg0) => {
      const keys = Object.keys(arg0);
      const item = keys.forEach((arg0) => {
        const NATIVE = arg0(closure_1[1]).NATIVE;
        NATIVE.setExtra(arg0, arg0[arg0]);
      });
      return arg0.call(arg0, arg0);
    });
    const obj4 = arg1(arg6[0]);
    arg1(arg6[0]).fillTyped(globalScope, "setExtra", (arg0) => (arg0, arg1) => {
      const NATIVE = arg0(closure_1[1]).NATIVE;
      NATIVE.setExtra(arg0, arg1);
      return arg0.call(arg0, arg0, arg1);
    });
    const obj5 = arg1(arg6[0]);
    arg1(arg6[0]).fillTyped(globalScope, "addBreadcrumb", (arg0) => (level) => {
      const obj = {};
      let DEFAULT_BREADCRUMB_LEVEL = level.level;
      const merged = Object.assign({}, level);
      if (!DEFAULT_BREADCRUMB_LEVEL) {
        DEFAULT_BREADCRUMB_LEVEL = level(closure_1[2]).DEFAULT_BREADCRUMB_LEVEL;
      }
      obj.level = DEFAULT_BREADCRUMB_LEVEL;
      let result;
      if (level.data) {
        result = level(closure_1[3]).convertToNormalizedObject(level.data);
        const obj2 = level(closure_1[3]);
      }
      obj.data = result;
      level.call(level, Object.assign(merged, obj), arg1);
      const lastBreadcrumb = level.getLastBreadcrumb();
      if (lastBreadcrumb) {
        const NATIVE = tmp9(tmp10[1]).NATIVE;
        NATIVE.addBreadcrumb(lastBreadcrumb);
      } else {
        const logger = tmp9(tmp10[4]).logger;
        logger.warn("[ScopeSync] Last created breadcrumb is undefined. Skipping sync to native.");
      }
      return level;
    });
    const obj6 = arg1(arg6[0]);
    arg1(arg6[0]).fillTyped(globalScope, "clearBreadcrumbs", (arg0) => () => {
      const NATIVE = arg0(closure_1[1]).NATIVE;
      NATIVE.clearBreadcrumbs();
      return arg0.call(arg0);
    });
    const obj7 = arg1(arg6[0]);
    arg1(arg6[0]).fillTyped(globalScope, "setContext", (arg0) => (arg0, arg1) => {
      const NATIVE = arg0(closure_1[1]).NATIVE;
      NATIVE.setContext(arg0, arg1);
      return arg0.call(arg0, arg0, arg1);
    });
    const obj8 = arg1(arg6[0]);
  }
};
