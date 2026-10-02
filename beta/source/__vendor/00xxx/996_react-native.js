// Module ID: 996
// Function ID: 997
// Name: react-native
// Dependencies: [997, 694]
// Exports: getDebugMetadata

// Module 996 (react-native)
import react_native from "react-native" /* 997 */;


export const getDebugMetadata = function getDebugMetadata() {
  if (react_native.DEFAULT_BUNDLE_NAME) {
    const _sentryDebugIds = tmp(694).GLOBAL_OBJ._sentryDebugIds;
    if (_sentryDebugIds) {
      const _Object = Object;
      const keys = Object.keys(_sentryDebugIds);
      if (keys.length) {
        if (keys.length > 1) {
          const debug = tmp(694).debug;
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
};
