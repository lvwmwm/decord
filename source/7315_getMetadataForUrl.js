// Module ID: 7315
// Function ID: 59032
// Name: getMetadataForUrl
// Dependencies: [7237]

// Module 7315 (getMetadataForUrl)
const require = arg1;
const dependencyMap = arg6;
function getMetadataForUrl(arg0, arg1) {
  if (require(7237) /* getGlobalSingleton */.GLOBAL_OBJ._sentryModuleMetadata) {
    const _Object = Object;
    const keys = Object.keys(require(7237) /* getGlobalSingleton */.GLOBAL_OBJ._sentryModuleMetadata);
    for (const item10024 of keys) {
      let tmp17 = item10024;
      let tmp18 = require;
      let tmp19 = dependencyMap;
      let tmp20 = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ._sentryModuleMetadata[item10024];
      let tmp21 = set;
      if (!set.has(item10024)) {
        let tmp6 = set;
        let tmp7 = item10024;
        let addResult = set.add(tmp17);
        let tmp9 = arg0;
        let obj = arg0(tmp17);
        let reversed = obj.reverse();
        let tmp11 = reversed;
        for (const item10036 of reversed) {
          if (item10036.filename) {
            let tmp13 = map;
            let tmp14 = item10036;
            let tmp15 = tmp20;
            let result = map.set(tmp12.filename, tmp20);
            obj2.return();
            break;
          }
          continue;
        }
      }
      continue;
    }
  }
  return map.get(arg1);
}
const map = new Map();
const set = new Set();
arg5.addMetadataToStackFrames = function addMetadataToStackFrames(arg0, exception) {
  let closure_0 = arg0;
  const values = exception.exception.values;
  const item = values.forEach((stacktrace) => {
    if (stacktrace.stacktrace) {
      const tmp = stacktrace.stacktrace.frames || [];
      for (const item10009 of tmp) {
        let tmp3 = item10009;
        if (item10009.filename) {
          let tmp4 = item10009;
          if (!tmp3.module_metadata) {
            let tmp5 = outer1_4;
            let tmp6 = closure_0;
            let tmp7 = item10009;
            let tmp8 = outer1_4(closure_0, tmp3.filename);
            if (tmp8) {
              let tmp10 = item10009;
              let tmp11 = tmp8;
              tmp3.module_metadata = tmp9;
            }
          }
        }
        continue;
      }
    }
  });
};
arg5.getMetadataForUrl = getMetadataForUrl;
arg5.stripMetadataFromStackFrames = function stripMetadataFromStackFrames(exception) {
  const values = exception.exception.values;
  const item = values.forEach((stacktrace) => {
    if (stacktrace.stacktrace) {
      const tmp2 = stacktrace.stacktrace.frames || [];
      for (const item10007 of tmp2) {
        delete tmp.module_metadata;
        continue;
      }
    }
  });
};
