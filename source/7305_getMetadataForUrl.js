// Module ID: 7305
// Function ID: 58935
// Name: getMetadataForUrl
// Dependencies: []

// Module 7305 (getMetadataForUrl)
function getMetadataForUrl(arg0, arg1) {
  if (arg1(arg6[0]).GLOBAL_OBJ._sentryModuleMetadata) {
    const _Object = Object;
    const keys = Object.keys(arg1(arg6[0]).GLOBAL_OBJ._sentryModuleMetadata);
    for (const item10024 of keys) {
      let tmp17 = item10024;
      let tmp18 = closure_0;
      let tmp19 = closure_1;
      let tmp20 = closure_0(closure_1[0]).GLOBAL_OBJ._sentryModuleMetadata[item10024];
      let tmp21 = closure_3;
      if (!closure_3.has(item10024)) {
        let tmp6 = closure_3;
        let tmp7 = item10024;
        let addResult = closure_3.add(tmp17);
        let tmp9 = arg0;
        let obj = arg0(tmp17);
        let reversed = obj.reverse();
        let tmp11 = reversed;
        for (const item10036 of reversed) {
          if (item10036.filename) {
            let tmp13 = closure_2;
            let tmp14 = item10036;
            let tmp15 = tmp20;
            let result = closure_2.set(tmp12.filename, tmp20);
            obj2.return();
            // break
          } else {
            // continue
          }
          continue;
        }
      }
    }
  }
  return map.get(arg1);
}
const map = new Map();
const set = new Set();
arg5.addMetadataToStackFrames = function addMetadataToStackFrames(arg0, exception) {
  exception = arg0;
  const values = exception.exception.values;
  const item = values.forEach((stacktrace) => {
    if (stacktrace.stacktrace) {
      const tmp = stacktrace.stacktrace.frames || [];
      for (const item10009 of tmp) {
        let tmp3 = item10009;
        if (item10009.filename) {
          let tmp4 = item10009;
          if (!tmp3.module_metadata) {
            let tmp5 = closure_4;
            let tmp6 = closure_0;
            let tmp7 = item10009;
            let tmp8 = closure_4(closure_0, tmp3.filename);
            if (tmp8) {
              let tmp10 = item10009;
              let tmp11 = tmp8;
              tmp3.module_metadata = tmp9;
            }
          }
        }
      }
    }
  });
};
arg5.getMetadataForUrl = getMetadataForUrl;
arg5.stripMetadataFromStackFrames = function stripMetadataFromStackFrames(exception) {
  const values = exception.exception.values;
  const item = values.forEach((stacktrace) => {
    if (stacktrace.stacktrace) {
      const tmp = stacktrace.stacktrace.frames || [];
      for (const item10007 of tmp) {
        delete r3.module_metadata;
      }
    }
  });
};
