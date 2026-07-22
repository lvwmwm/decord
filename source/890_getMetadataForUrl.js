// Module ID: 890
// Function ID: 9822
// Name: getMetadataForUrl
// Dependencies: [0]

// Module 890 (getMetadataForUrl)
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
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const map = new Map();
const set = new Set();
arg5.addMetadataToStackFrames = function addMetadataToStackFrames(arg0, exception) {
  exception = arg0;
  exception = exception.exception;
  let tmp = null == exception;
  let arr = exception;
  if (!tmp) {
    const values = exception.values;
    tmp = null == values;
    arr = values;
  }
  if (!tmp) {
    const item = arr.forEach((stacktrace) => {
      stacktrace = stacktrace.stacktrace;
      let tmp = null == stacktrace;
      let arr = stacktrace;
      if (!tmp) {
        const frames = stacktrace.frames;
        tmp = null == frames;
        arr = frames;
      }
      if (!tmp) {
        const item = arr.forEach((filename) => {
          if (filename.filename) {
            if (!filename.module_metadata) {
              const tmp3 = callback(closure_0, filename.filename);
              if (tmp3) {
                filename.module_metadata = tmp3;
              }
            }
          }
        });
      }
    });
  }
};
arg5.getFilenameToMetadataMap = function getFilenameToMetadataMap(arg0) {
  const obj = {};
  if (arg1(arg6[0]).GLOBAL_OBJ._sentryModuleMetadata) {
    const _Object = Object;
    const keys = Object.keys(arg1(arg6[0]).GLOBAL_OBJ._sentryModuleMetadata);
    for (const item10026 of keys) {
      let tmp11 = closure_0;
      let tmp12 = closure_1;
      let tmp13 = closure_0(closure_1[0]).GLOBAL_OBJ._sentryModuleMetadata[item10026];
      let tmp14 = arg0;
      let obj2 = arg0(item10026);
      let reversed = obj2.reverse();
      let tmp16 = reversed;
      for (const item10028 of reversed) {
        if (item10028.filename) {
          let tmp8 = obj;
          let tmp9 = item10028;
          let tmp10 = tmp13;
          obj[tmp7.filename] = tmp13;
          obj3.return();
          // break
        } else {
          // continue
        }
        continue;
      }
    }
    return obj;
  } else {
    return obj;
  }
};
arg5.getMetadataForUrl = getMetadataForUrl;
arg5.stripMetadataFromStackFrames = function stripMetadataFromStackFrames(exception) {
  exception = exception.exception;
  let tmp = null == exception;
  let arr = exception;
  if (!tmp) {
    const values = exception.values;
    tmp = null == values;
    arr = values;
  }
  if (!tmp) {
    const item = arr.forEach((stacktrace) => {
      stacktrace = stacktrace.stacktrace;
      let tmp = null == stacktrace;
      let arr = stacktrace;
      if (!tmp) {
        const frames = stacktrace.frames;
        tmp = null == frames;
        arr = frames;
      }
      if (!tmp) {
        const item = arr.forEach((arg0) => {
          delete r0.module_metadata;
        });
      }
    });
  }
};
