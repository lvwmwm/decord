// Module ID: 981
// Function ID: 982
// Name: react-native
// Dependencies: [982, 681]
// Exports: getDebugMetadata

// Module 981 (react-native)
import react_native from "react-native" /* 982 */;


export function getDebugMetadata() {
  if (react_native.DEFAULT_BUNDLE_NAME) {
    const _sentryDebugIds = tmp(681).GLOBAL_OBJ._sentryDebugIds;
    if (_sentryDebugIds) {
      const _Object = Object;
      const keys = Object.keys(_sentryDebugIds);
      if (keys.length) {
        if (keys.length > 1) {
          const debug = tmp(681).debug;
          debug.warn("[Profiling] Multiple debug images found, but only one one bundle is supported. Using the first one...");
          return [];
        } else if (keys[0]) {
          let items1;
          if (_sentryDebugIds[keys[0]]) {
            const items = [{ code_file: react_native.DEFAULT_BUNDLE_NAME, debug_id: _sentryDebugIds[keys[0]], type: "sourcemap" }];
            items1 = items;
            const obj = { code_file: react_native.DEFAULT_BUNDLE_NAME, debug_id: _sentryDebugIds[keys[0]], type: "sourcemap" };
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
}
