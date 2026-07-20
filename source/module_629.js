// Module ID: 629
// Function ID: 7247
// Dependencies: []

// Module 629
const _module = require(dependencyMap[0]);
if (null == Date.now) {
  const _Date = Date;
  Date.now = () => new Date().valueOf();
}
while (true) {
  let tmp3 = global;
  let navigationStart = global.performance.timing.navigationStart;
  let tmp4 = navigationStart;
  let tmp5 = null;
  if (null != navigationStart) {
    let nowResult = navigationStart;
  } else {
    let tmp6 = global;
    let _performance = global.performance;
    nowResult = _performance.now();
  }
  while (true) {
    let tmp9 = nowResult;
    let timeOrigin = global.performance.timeOrigin;
    let tmp10 = timeOrigin;
    let tmp11 = null;
    let tmp8 = nowResult;
    if (null != timeOrigin) {
      tmp9 = timeOrigin;
    }
    while (true) {
      let tmp13 = global;
      let tmp14 = null;
      let tmp12 = tmp9;
      if (null != global.performance.timing) {
        break;
      } else {
        let tmp15 = global;
        let obj = {};
        let tmp16 = nowResult;
        obj.navigationStart = tmp8;
        global.performance.timing = obj;
        // break
      }
      while (true) {
        let tmp17 = global;
        if (null != global.performance.timeOrigin) {
          break;
        } else {
          let tmp18 = global;
          let tmp19 = tmp9;
          global.performance.timeOrigin = tmp12;
          // break
        }
        let tmp20 = dependencyMap;
        let num = 1;
        let _module1 = require(dependencyMap[1]);
        let str = "../discord_common/js/packages/performance-utils/index.js";
        let result = _module1.fileFinishedImporting("../discord_common/js/packages/performance-utils/index.js");
        exports.navigationStart = nowResult;
        exports.timeOrigin = tmp9;
        exports.performance = global.performance;
      }
    }
  }
}
