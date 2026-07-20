// Module ID: 3651
// Function ID: 27946
// Dependencies: []

// Module 3651
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    const StringResult = String(unit);
    const NumberResult = Number(arg0);
    if ("date" === StringResult) {
      if (3 === NumberResult) {
        let str5 = "-\u0454";
      } else {
        str5 = "-\u0435";
      }
      let str3 = str5;
    } else {
      if ("minute" !== StringResult) {
        if ("second" !== StringResult) {
          str3 = "-\u0439";
        }
      }
      str3 = "-\u0430";
    }
    return NumberResult + str3;
  }
};
obj.era = obj.default({ values: { narrow: [0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000035480043432111075, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000056154696340132605], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [false, false, false, false], abbreviated: [], wide: ["<string:80396544>", "<string:80395520>", "<string:80394752>", "<string:59660032>"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["TCN", "SCN", "tr\u01B0\u1EDBc CN", "sau CN", "tr\u01B0\u1EDBc C\u00F4ng Nguy\u00EAn", "sau C\u00F4ng Nguy\u00EAn", "USER_UPDATE", "top", "r", "isArray", "registerAsset", "useRef"], abbreviated: [264442856, 1017592567, 1620663708, 440292732, 1266358466, 1456475849, 620059371, true, true, "qu\u00FD I", "qu\u00FD II", "qu\u00FD III"], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: ["TCN", "SCN", "tr\u01B0\u1EDBc CN", "sau CN", "tr\u01B0\u1EDBc C\u00F4ng Nguy\u00EAn", "sau C\u00F4ng Nguy\u00EAn", "USER_UPDATE", "top", "r", "isArray", "registerAsset", "useRef"], abbreviated: [264442856, 1017592567, 1620663708, 440292732, 1266358466, 1456475849, 620059371, true, true, "qu\u00FD I", "qu\u00FD II", "qu\u00FD III"], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { <string:13107200>: "a", <string:13303808>: "ACTION_SHEET_GRADIENT_BORDER_WIDTH", <string:13369344>: "__SENTRY_EXCLUDE_REPLAY_WORKER__", <string:13631488>: "updatedBadge", <string:13893632>: "__SENTRY_EXCLUDE_REPLAY_WORKER__", <string:14024704>: "WIN32_DEPRECATED_MESSAGE", <string:14286848>: "ad", <string:14548992>: "_handlePassiveUpdateV2" }, abbreviated: { <string:13107200>: "a", <string:13303808>: "ACTION_SHEET_GRADIENT_BORDER_WIDTH", <string:13369344>: "__SENTRY_EXCLUDE_REPLAY_WORKER__", <string:13631488>: "updatedBadge", <string:13893632>: "__SENTRY_EXCLUDE_REPLAY_WORKER__", <string:14024704>: "WIN32_DEPRECATED_MESSAGE", <string:14286848>: "ad", <string:14548992>: "_handlePassiveUpdateV2" }, wide: {} }, defaultWidth: "any", formattingValues: { narrow: { <string:13107200>: 1912602918, <string:13303808>: 16, <string:13369344>: 20, <string:13631488>: 1917147729, <string:13893632>: 10, <string:14024704>: 54, <string:14286848>: 470024786, <string:14548992>: -333758054 }, abbreviated: { <string:13107200>: 1912602918, <string:13303808>: 16, <string:13369344>: 20, <string:13631488>: 1917147729, <string:13893632>: 10, <string:14024704>: 54, <string:14286848>: 470024786, <string:14548992>: -333758054 }, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
