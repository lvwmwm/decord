// Module ID: 7283
// Function ID: 58708
// Name: getFilenameToDebugIdMap
// Dependencies: []

// Module 7283 (getFilenameToDebugIdMap)
function getFilenameToDebugIdMap(arg0) {
  const arg1 = arg0;
  const _sentryDebugIds = arg1(arg6[0]).GLOBAL_OBJ._sentryDebugIds;
  const arg6 = _sentryDebugIds;
  if (_sentryDebugIds) {
    const _Object = Object;
    const keys = Object.keys(_sentryDebugIds);
    if (reduced) {
      return reduced;
    }
    const reduced = keys.reduce((arg0, arg1) => {
      let filename;
      if (!closure_2) {
        closure_2 = {};
      }
      if (closure_2[arg1]) {
        arg0[tmp[0]] = tmp[1];
      } else {
        const arr = arg0(arg1);
        let diff = arr.length - 1;
        if (diff >= 0) {
          while (true) {
            let tmp4 = arr[diff];
            filename = tmp4;
            if (tmp4) {
              filename = tmp4.filename;
            }
            let tmp5 = _sentryDebugIds;
            if (filename) {
              if (_sentryDebugIds[arg1]) {
                break;
              }
            }
            diff = diff - 1;
          }
          arg0[filename] = tmp6;
          const items = [filename, tmp6];
          closure_2[arg1] = items;
        }
      }
      return arg0;
    }, {});
  } else {
    return {};
  }
}
arg5.getDebugImagesForResources = function getDebugImagesForResources(arg0, arg1) {
  const tmp = getFilenameToDebugIdMap(arg0);
  const items = [];
  if (tmp) {
    const iter = arg1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let tmp7 = nextResult;
      if (nextResult) {
        let tmp8 = tmp;
        let tmp9 = nextResult;
        tmp7 = tmp2[tmp6];
      }
      if (tmp7) {
        let tmp10 = items;
        let obj = { type: "sourcemap" };
        let tmp11 = nextResult;
        obj.code_file = tmp6;
        let tmp12 = tmp;
        obj.debug_id = tmp2[tmp6];
        let arr = items.push(obj);
      }
      // continue
    }
    return items;
  } else {
    return items;
  }
};
arg5.getFilenameToDebugIdMap = getFilenameToDebugIdMap;
