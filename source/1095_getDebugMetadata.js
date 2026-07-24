// Module ID: 1095
// Function ID: 12559
// Name: getDebugMetadata
// Dependencies: [1096, 794]

// Module 1095 (getDebugMetadata)
const require = arg1;
const dependencyMap = arg6;
arg5.getDebugMetadata = function getDebugMetadata() {
  if (require(1096) /* DEFAULT_BUNDLE_NAME */.DEFAULT_BUNDLE_NAME) {
    const _sentryDebugIds = require(794) /* registerSpanErrorInstrumentation */.GLOBAL_OBJ._sentryDebugIds;
    if (_sentryDebugIds) {
      const _Object = Object;
      const keys = Object.keys(_sentryDebugIds);
      if (keys.length) {
        if (keys.length > 1) {
          const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
          debug.warn("[Profiling] Multiple debug images found, but only one one bundle is supported. Using the first one...");
          return [];
        } else if (keys[0]) {
          if (_sentryDebugIds[keys[0]]) {
            const obj = { code_file: require(1096) /* DEFAULT_BUNDLE_NAME */.DEFAULT_BUNDLE_NAME, debug_id: tmp4, type: "sourcemap" };
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
