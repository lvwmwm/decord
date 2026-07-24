// Module ID: 850
// Function ID: 9490
// Name: getFilenameToDebugIdMap
// Dependencies: [798, 810]

// Module 850 (getFilenameToDebugIdMap)
const require = arg1;
const dependencyMap = arg6;
function getFilenameToDebugIdMap(arg0) {
  const _require = arg0;
  const _sentryDebugIds = _require(798).GLOBAL_OBJ._sentryDebugIds;
  const _debugIds = _require(798).GLOBAL_OBJ._debugIds;
  if (!_sentryDebugIds) {
    if (!_debugIds) {
      return {};
    }
  }
  if (_sentryDebugIds) {
    const _Object = Object;
    let keys = Object.keys(_sentryDebugIds);
  } else {
    keys = [];
  }
  if (_debugIds) {
    const _Object2 = Object;
    let keys1 = Object.keys(_debugIds);
  } else {
    keys1 = [];
  }
  if (closure_5) {
    if (keys.length === length) {
      if (keys1.length === length) {
        return closure_5;
      }
    }
  }
  length = keys.length;
  length = keys1.length;
  closure_5 = {};
  if (!closure_2) {
    closure_2 = {};
  }
  function processDebugIds(keys, _debugIds) {
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp38 = nextResult;
      let tmp39 = _debugIds;
      let tmp40 = _debugIds[nextResult];
      let tmp4;
      if (null != closure_2) {
        let tmp2 = closure_2;
        let tmp3 = nextResult;
        tmp4 = tmp41[tmp38];
      }
      let tmp5 = tmp4;
      if (tmp4) {
        let tmp6 = closure_5;
        if (closure_5) {
          let tmp7 = tmp40;
          if (tmp40) {
            let tmp30 = closure_5;
            let tmp31 = tmp4;
            let tmp32 = tmp40;
            closure_5[tmp5[0]] = tmp40;
            let tmp33 = closure_2;
            if (closure_2) {
              let tmp34 = closure_2;
              let tmp35 = nextResult;
              let tmp36 = tmp4;
              let items = [tmp5[0], ];
              let tmp37 = tmp40;
              items[1] = tmp40;
              closure_2[tmp38] = items;
            }
            continue;
          }
        }
      }
      let tmp8 = tmp40;
      if (tmp40) {
        let tmp9 = callback;
        let tmp10 = nextResult;
        let arr = callback(tmp38);
        let diff = arr.length - 1;
        let tmp13 = diff;
        if (diff >= 0) {
          while (true) {
            let tmp14 = arr;
            let tmp15 = tmp13;
            let tmp16 = tmp11[tmp13];
            let filename;
            if (null != tmp16) {
              let tmp19 = tmp16;
              filename = tmp17.filename;
            }
            let tmp20 = filename;
            if (filename) {
              let tmp21 = closure_5;
              if (closure_5) {
                let tmp22 = closure_2;
                if (closure_2) {
                  break;
                }
              }
            }
            let tmp23 = tmp13;
            let diff1 = tmp13 - 1;
            tmp13 = diff1;
          }
          let tmp25 = closure_5;
          let tmp26 = filename;
          let tmp27 = tmp40;
          closure_5[tmp20] = tmp40;
          let tmp28 = closure_2;
          let tmp29 = nextResult;
          let items1 = [tmp20, tmp40];
          closure_2[tmp38] = items1;
        }
      }
    }
  }
  if (_sentryDebugIds) {
    processDebugIds(keys, _sentryDebugIds);
  }
  if (_debugIds) {
    processDebugIds(keys1, _debugIds);
  }
  return closure_5;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getDebugImagesForResources = function getDebugImagesForResources(arg0, arg1) {
  const tmp = getFilenameToDebugIdMap(arg0);
  const items = [];
  if (tmp) {
    const iter = arg1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = require;
      let tmp8 = dependencyMap;
      let tmp6 = nextResult;
      let obj = require(810) /* createStackParser */;
      let result = obj.normalizeStackTracePath(nextResult);
      let tmp10 = result;
      let tmp11 = result;
      if (result) {
        let tmp12 = tmp;
        let tmp13 = result;
        tmp11 = tmp2[tmp10];
      }
      if (tmp11) {
        let tmp14 = items;
        obj = { type: "sourcemap" };
        let tmp15 = nextResult;
        obj.code_file = tmp6;
        let tmp16 = tmp;
        let tmp17 = result;
        obj.debug_id = tmp2[tmp10];
        let arr = items.push(obj);
      }
      continue;
    }
    return items;
  } else {
    return items;
  }
};
arg5.getFilenameToDebugIdMap = getFilenameToDebugIdMap;
