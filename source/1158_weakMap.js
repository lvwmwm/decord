// Module ID: 1158
// Function ID: 13177
// Name: weakMap
// Dependencies: [1130, 977, 991, 990, 1111]

// Module 1158 (weakMap)
const require = arg1;
const dependencyMap = arg6;
const weakMap = new WeakMap();
arg5.enableSyncToNative = function enableSyncToNative(globalScope) {
  const _require = globalScope;
  if (!weakMap.has(globalScope)) {
    let result = weakMap.set(globalScope, true);
    _require(1130).fillTyped(globalScope, "setUser", (arg0) => {
      let closure_0 = arg0;
      return (arg0) => {
        const NATIVE = callback(outer2_1[1]).NATIVE;
        NATIVE.setUser(arg0);
        return callback.call(callback, arg0);
      };
    });
    let obj = _require(1130);
    _require(1130).fillTyped(globalScope, "setTag", (arg0) => {
      let closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = callback(outer2_1[1]).NATIVE;
        const NATIVE2 = callback(outer2_1[1]).NATIVE;
        NATIVE.setTag(arg0, NATIVE2.primitiveProcessor(arg1));
        return callback.call(callback, arg0, arg1);
      };
    });
    let obj2 = _require(1130);
    _require(1130).fillTyped(globalScope, "setTags", (arg0) => {
      let closure_0 = arg0;
      return (arg0) => {
        const callback = arg0;
        const keys = Object.keys(arg0);
        const item = keys.forEach((arg0) => {
          const NATIVE = dependencyMap(outer3_1[1]).NATIVE;
          const NATIVE2 = dependencyMap(outer3_1[1]).NATIVE;
          NATIVE.setTag(arg0, NATIVE2.primitiveProcessor(dependencyMap[arg0]));
        });
        return callback.call(callback, arg0);
      };
    });
    const obj3 = _require(1130);
    _require(1130).fillTyped(globalScope, "setExtras", (arg0) => {
      let closure_0 = arg0;
      return (arg0) => {
        const callback = arg0;
        const keys = Object.keys(arg0);
        const item = keys.forEach((arg0) => {
          const NATIVE = dependencyMap(outer3_1[1]).NATIVE;
          NATIVE.setExtra(arg0, dependencyMap[arg0]);
        });
        return callback.call(callback, arg0);
      };
    });
    const obj4 = _require(1130);
    _require(1130).fillTyped(globalScope, "setExtra", (arg0) => {
      let closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = callback(outer2_1[1]).NATIVE;
        NATIVE.setExtra(arg0, arg1);
        return callback.call(callback, arg0, arg1);
      };
    });
    const obj5 = _require(1130);
    _require(1130).fillTyped(globalScope, "addBreadcrumb", (arg0) => {
      let closure_0 = arg0;
      return (level) => {
        const obj = {};
        let DEFAULT_BREADCRUMB_LEVEL = level.level;
        const merged = Object.assign({}, level);
        if (!DEFAULT_BREADCRUMB_LEVEL) {
          DEFAULT_BREADCRUMB_LEVEL = lastBreadcrumb(outer2_1[2]).DEFAULT_BREADCRUMB_LEVEL;
        }
        obj.level = DEFAULT_BREADCRUMB_LEVEL;
        let result;
        if (level.data) {
          result = lastBreadcrumb(outer2_1[3]).convertToNormalizedObject(level.data);
          const obj2 = lastBreadcrumb(outer2_1[3]);
        }
        obj.data = result;
        lastBreadcrumb.call(lastBreadcrumb, Object.assign(merged, obj), arg1);
        lastBreadcrumb = lastBreadcrumb.getLastBreadcrumb();
        if (lastBreadcrumb) {
          const NATIVE = tmp9(tmp10[1]).NATIVE;
          NATIVE.addBreadcrumb(lastBreadcrumb);
        } else {
          const logger = tmp9(tmp10[4]).logger;
          logger.warn("[ScopeSync] Last created breadcrumb is undefined. Skipping sync to native.");
        }
        return lastBreadcrumb;
      };
    });
    const obj6 = _require(1130);
    _require(1130).fillTyped(globalScope, "clearBreadcrumbs", (arg0) => {
      let closure_0 = arg0;
      return () => {
        const NATIVE = callback(outer2_1[1]).NATIVE;
        NATIVE.clearBreadcrumbs();
        return callback.call(callback);
      };
    });
    const obj7 = _require(1130);
    _require(1130).fillTyped(globalScope, "setContext", (arg0) => {
      let closure_0 = arg0;
      return (arg0, arg1) => {
        const NATIVE = callback(outer2_1[1]).NATIVE;
        NATIVE.setContext(arg0, arg1);
        return callback.call(callback, arg0, arg1);
      };
    });
    const obj8 = _require(1130);
  }
};
