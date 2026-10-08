// Module ID: 11072
// Function ID: 11073
// Dependencies: [10994]
// Exports: addMetadataToStackFrames, stripMetadataFromStackFrames

// Module 11072
import _mod10994 from "module_10994" /* 10994 */;

function getMetadataForUrl(fn, arg1) {
  function ensureMetadataStacksAreParsed(fn) {
    const tmp2 = require;
    const tmp4 = dependencyMap;
    if (_mod10994.GLOBAL_OBJ._sentryModuleMetadata) {
      const _Object = Object;
      const keys = Object.keys(tmp2(tmp4[0]).GLOBAL_OBJ._sentryModuleMetadata);
      for (const item10026 of keys) {
        let tmp11 = item10026;
        let tmp16 = _mod10994.GLOBAL_OBJ._sentryModuleMetadata[item10026];
        let obj = set;
        if (!set.has(item10026)) {
          let addResult = obj.add(tmp11);
          let obj2 = fn(tmp11);
          let reversed = obj2.reverse();
          for (const item10050 of reversed) {
            if (item10050.filename) {
              let result = map.set(tmp22.filename, tmp16);
              obj3.return();
              break;
            }
            continue;
          }
        }
        continue;
      }
    }
  }
  const tmp = ensureMetadataStacksAreParsed(fn);
  return map.get(arg1);
}
const map = new Map();
const set = new Set();

export const addMetadataToStackFrames = function addMetadataToStackFrames(arg0, exception) {
  let closure_0 = arg0;
  try {
    let tmp = exception;
    const values = exception.exception.values;
    const item = values.forEach((stacktrace) => {
      if (stacktrace.stacktrace) {
        const tmp = stacktrace.stacktrace.frames || [];
        for (const item10010 of tmp) {
          let tmp4 = item10010;
          if (item10010.filename) {
            if (!tmp4.module_metadata) {
              let tmp9 = getMetadataForUrl(closure_0, tmp4.filename);
              if (tmp9) {
                tmp4.module_metadata = tmp10;
              }
            }
          }
          continue;
        }
      }
    });
  } catch (err) {
  }
};
export { getMetadataForUrl };
export const stripMetadataFromStackFrames = function stripMetadataFromStackFrames(exception) {
  try {
    let tmp = exception;
    const values = exception.exception.values;
    const item = values.forEach((stacktrace) => {
      if (stacktrace.stacktrace) {
        const tmp = stacktrace.stacktrace.frames || [];
        const iter = tmp[Symbol.iterator]();
        while (iter !== undefined) {
          delete iter.next()[`module_metadata`];
          continue;
        }
      }
    });
  } catch (err) {
  }
};
