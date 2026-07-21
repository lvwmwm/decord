// Module ID: 1095
// Function ID: 12557
// Name: getDebugMetadata
// Dependencies: []

// Module 1095 (getDebugMetadata)
arg5.getDebugMetadata = function getDebugMetadata() {
  if (arg1(arg6[0]).DEFAULT_BUNDLE_NAME) {
    const _sentryDebugIds = arg1(arg6[1]).GLOBAL_OBJ._sentryDebugIds;
    if (_sentryDebugIds) {
      const _Object = Object;
      const keys = Object.keys(_sentryDebugIds);
      if (keys.length) {
        if (keys.length > 1) {
          const debug = arg1(arg6[1]).debug;
          debug.warn("[Profiling] Multiple debug images found, but only one one bundle is supported. Using the first one...");
          return [];
        } else if (keys[0]) {
          if (_sentryDebugIds[keys[0]]) {
            const obj = { code_file: arg1(arg6[0]).DEFAULT_BUNDLE_NAME, debug_id: tmp4, type: "sourcemap" };
            const items = [obj];
            let items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        } else {
          return [];
        }
      } else {
        return [];
      }
    } else {
      return [];
    }
  } else {
    return [];
  }
};
