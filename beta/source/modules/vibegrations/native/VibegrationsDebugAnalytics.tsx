// Module ID: 16427
// Function ID: 16428
// Name: VibegrationsDebugAnalytics
// Dependencies: [19, 21, 558, 576, 1127, 3718, 16414, 16416, 16413, 2]

// Module 16427 (VibegrationsDebugAnalytics)
import react2 from "react" /* 576 */;
import intl7 from "intl" /* 1127 */;
import _modDef3718 from "module_3718" /* 3718 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 16413 */;
import VibegrationsDebugLabels from "VibegrationsDebugLabels" /* 16414 */;
import VibegrationsDebugPrimitives from "VibegrationsDebugPrimitives" /* 16416 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let analytics;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((analytics) => {
  let intl2;
  let intl4;
  let items;
  let tmp41;
  let tmp42;
  const obj = react2;
  const cResult = obj.c(24);
  analytics = analytics.analytics;
  if ("ok" !== analytics.status) {
    let tmp46;
    let tmp48;
    const _Symbol5 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = tmp(1127).intl;
      const stringResult = intl5.string(_modDef3718.H6PMwW);
      const intl6 = tmp(1127).intl;
      const stringResult1 = intl6.string(_modDef3718.TLOZ8J);
      cResult[0] = stringResult;
      cResult[1] = stringResult1;
      tmp41 = stringResult;
      tmp42 = stringResult1;
    } else {
      [tmp41, tmp42] = cResult;
    }
    if (cResult[2] !== analytics) {
      const tmpResult = VibegrationsDebugLabels;
      const result = tmpResult.analyticsUnavailableReason(analytics);
      cResult[2] = analytics;
      cResult[3] = result;
      tmp46 = result;
    } else {
      tmp46 = cResult[3];
    }
    if (cResult[4] !== tmp46) {
      const obj2 = { label: tmp41, value: tmp42, hint: tmp46 };
      const tmp50 = _false(VibegrationsDebugPrimitives.DebugStatRow, obj2);
      cResult[4] = tmp46;
      cResult[5] = tmp50;
      tmp48 = tmp50;
    } else {
      tmp48 = cResult[5];
    }
    return tmp48;
  } else {
    let tmp8;
    let tmp7;
    let tmp6;
    let tmp5;
    let tmp4;
    if (cResult[6] !== analytics.objects) {
      let formatMsResult;
      let tmp16;
      const _Symbol = Symbol;
      const objects = analytics.objects;
      let found;
      const forResult = Symbol.for("react.early_return_sentinel");
      if (objects != null) {
        found = objects.find((role) => "agent" === role.role);
      }
      if (null != found) {
        const _Symbol3 = Symbol;
        const tmpResult3 = VibegrationsDebugLabels;
        tmpResult3.analyticsMemoryValue(found);
        const DebugStatRow2 = tmp(16416).DebugStatRow;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1127).intl;
          const stringResult2 = intl3.string(_modDef3718.awAqRi);
          cResult[14] = stringResult2;
        }
        const tmpResult4 = VibegrationsDebugFormat;
        formatMsResult = tmpResult4.formatMs(found.cpu_ms);
        tmp16 = forResult;
      } else {
        let tmp13;
        const _Symbol6 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1127).intl;
          const stringResult3 = intl.string(_modDef3718.H6PMwW);
          cResult[12] = stringResult3;
          tmp13 = stringResult3;
        } else {
          tmp13 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { label: tmp13, value: "\u2014", hint: intl2.string(_modDef3718.uAzxdh) };
          const DebugStatRow = tmp(16416).DebugStatRow;
          intl2 = tmp(1127).intl;
          const tmp19 = _false(DebugStatRow, obj3);
          cResult[13] = tmp19;
          tmp16 = tmp19;
        } else {
          tmp16 = cResult[13];
        }
      }
      cResult[6] = analytics.objects;
      cResult[7] = tmp23;
      cResult[8] = tmp22;
      cResult[9] = tmp21;
      cResult[10] = formatMsResult;
      cResult[11] = tmp16;
      tmp8 = tmp16;
      tmp7 = formatMsResult;
      tmp6 = tmp21;
      tmp5 = tmp22;
      tmp4 = tmp23;
    } else {
      tmp4 = cResult[7];
      tmp5 = cResult[8];
      tmp6 = cResult[9];
      tmp7 = cResult[10];
      tmp8 = cResult[11];
    }
    const _Symbol4 = Symbol;
    if (tmp8 === Symbol.for("react.early_return_sentinel")) {
      if (cResult[15] === tmp4) {
        if (cResult[16] === tmp6) {
          let tmp29;
          let tmp32;
          if (cResult[17] === tmp7) {
            tmp29 = cResult[18];
          }
          if (cResult[19] !== tmp5) {
            let tmp33 = null;
            if (null != tmp5) {
              const obj4 = { label: intl4.string(_modDef3718.WdGviA), value: tmp5 };
              const DebugStatRow3 = tmp(16416).DebugStatRow;
              intl4 = tmp(1127).intl;
              tmp33 = _false(DebugStatRow3, obj4);
            }
            cResult[19] = tmp5;
            cResult[20] = tmp33;
            tmp32 = tmp33;
          } else {
            tmp32 = cResult[20];
          }
          if (cResult[21] === tmp29) {
            let tmp36;
            if (cResult[22] === tmp32) {
              tmp36 = cResult[23];
            }
            tmp8 = tmp36;
          }
          const obj5 = { children: items };
          items = [tmp29, tmp32];
          const tmp39 = hasOwnProperty(React3, obj5);
          cResult[21] = tmp29;
          cResult[22] = tmp32;
          cResult[23] = tmp39;
          tmp36 = tmp39;
        }
      }
      const obj6 = { label: tmp6, value: tmp7 };
      const tmp31 = _false(tmp4, obj6);
      cResult[15] = tmp4;
      cResult[16] = tmp6;
      cResult[17] = tmp7;
      cResult[18] = tmp31;
      tmp29 = tmp31;
    }
    return tmp8;
  }
}) : ((analytics) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj5;
  let obj8;
  analytics = analytics.analytics;
  if ("ok" !== analytics.status) {
    const obj2 = { label: intl4.string(_modDef3718.H6PMwW), value: intl5.string(_modDef3718.TLOZ8J), hint: obj5.analyticsUnavailableReason(analytics) };
    const DebugStatRow3 = VibegrationsDebugPrimitives.DebugStatRow;
    intl4 = intl7.intl;
    intl5 = intl7.intl;
    obj5 = VibegrationsDebugLabels;
    return _false(DebugStatRow3, obj2);
  } else {
    const objects = analytics.objects;
    let found;
    if (objects != null) {
      found = objects.find((role) => "agent" === role.role);
    }
    if (null == found) {
      const obj3 = { label: intl2.string(_modDef3718.H6PMwW), value: "\u2014", hint: intl3.string(_modDef3718.uAzxdh) };
      const DebugStatRow2 = VibegrationsDebugPrimitives.DebugStatRow;
      intl2 = intl7.intl;
      intl3 = intl7.intl;
      return _false(DebugStatRow2, obj3);
    } else {
      const obj6 = VibegrationsDebugLabels;
      const analyticsMemoryValueResult = obj6.analyticsMemoryValue(found);
      const obj4 = { label: intl6.string(_modDef3718.awAqRi), value: obj8.formatMs(found.cpu_ms) };
      const DebugStatRow4 = VibegrationsDebugPrimitives.DebugStatRow;
      intl6 = intl7.intl;
      obj8 = VibegrationsDebugFormat;
      const items = [_false(DebugStatRow4, obj4), ];
      let tmp17Result = null;
      const tmp15 = hasOwnProperty;
      const tmp16 = React3;
      const tmp17 = _false;
      const tmp18 = importDefault;
      if (null != analyticsMemoryValueResult) {
        const obj = { label: intl.string(tmp18(3718).WdGviA), value: analyticsMemoryValueResult };
        const DebugStatRow = tmp12(16416).DebugStatRow;
        intl = tmp12(1127).intl;
        tmp17Result = tmp17(DebugStatRow, obj);
      }
      const obj7 = { children: items };
      items[1] = tmp17Result;
      return tmp15(tmp16, obj7);
    }
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((analytics) => {
  let first;
  let intl2;
  let obj3;
  let obj = react2;
  const cResult = obj.c(15);
  analytics = analytics.analytics;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = intl7.intl;
    const stringResult = intl.string(_modDef3718.Pgvj3h);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if ("ok" !== analytics.status) {
    let tmp19;
    let tmp21;
    if (cResult[1] !== analytics) {
      const tmpResult = VibegrationsDebugLabels;
      const result = tmpResult.analyticsUnavailableReason(analytics);
      cResult[1] = analytics;
      cResult[2] = result;
      tmp19 = result;
    } else {
      tmp19 = cResult[2];
    }
    if (cResult[3] !== tmp19) {
      let obj2 = { title: first, children: _false(VibegrationsDebugPrimitives.DebugNote, obj3) };
      const DebugSection2 = VibegrationsDebugPrimitives.DebugSection;
      obj3 = { children: tmp19 };
      const tmp23 = _false(DebugSection2, obj2);
      cResult[3] = tmp19;
      cResult[4] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[4];
    }
    return tmp21;
  } else {
    let tmp9;
    let tmp8;
    if (cResult[5] !== analytics.objects) {
      let tmp10;
      let tmp11;
      let tmp14;
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            obj = { object: analytics, label: null };
            obj2 = closure_1_0(closure_1_2[6]);
            obj.label = obj2.analyticsRoleLabel(analytics.role);
            return obj;
          }
        }
        cResult[9] = S;
        tmp10 = S;
      } else {
        class S {
          constructor(arg0) {
            obj = { object: analytics, label: null };
            obj2 = closure_1_0(closure_1_2[6]);
            obj.label = obj2.analyticsRoleLabel(analytics.role);
            return obj;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            obj = { object: analytics, label: null };
            obj2 = closure_1_0(closure_1_2[6]);
            obj.label = obj2.analyticsRoleLabel(analytics.role);
            return obj;
          }
        }
        cResult[10] = tmp12;
        tmp11 = tmp12;
      } else {
        class S {
          constructor(arg0) {
            obj = { object: analytics, label: null };
            obj2 = closure_1_0(closure_1_2[6]);
            obj.label = obj2.analyticsRoleLabel(analytics.role);
            return obj;
          }
        }
      }
      const objects = analytics.objects;
      if (objects == null) {
        class S {
          constructor(arg0) {
            obj = { object: analytics, label: null };
            obj2 = closure_1_0(closure_1_2[6]);
            obj.label = obj2.analyticsRoleLabel(analytics.role);
            return obj;
          }
        }
      }
      const mapped = objects.map(tmp10);
      const found = mapped.filter(tmp11);
      const DebugSection = VibegrationsDebugPrimitives.DebugSection;
      if (0 === found.length) {
        class S {
          constructor(arg0) {
            obj = { object: analytics, label: null };
            obj2 = closure_1_0(closure_1_2[6]);
            obj.label = obj2.analyticsRoleLabel(analytics.role);
            return obj;
          }
        }
        let obj4 = { children: intl2.string(_modDef3718.uAzxdh) };
        const DebugNote = VibegrationsDebugPrimitives.DebugNote;
        intl2 = intl7.intl;
        tmp14 = _false(DebugNote, obj4);
      } else {
        class S {
          constructor(arg0) {
            obj = { object: analytics, label: null };
            obj2 = closure_1_0(closure_1_2[6]);
            obj.label = obj2.analyticsRoleLabel(analytics.role);
            return obj;
          }
        }
      }
      cResult[5] = analytics.objects;
      cResult[6] = DebugSection;
      cResult[7] = first;
      cResult[8] = tmp14;
      tmp9 = tmp14;
      tmp8 = first;
    } else {
      class S {
        constructor(arg0) {
          obj = { object: analytics, label: null };
          obj2 = closure_1_0(closure_1_2[6]);
          obj.label = obj2.analyticsRoleLabel(analytics.role);
          return obj;
        }
      }
      tmp8 = cResult[7];
      tmp9 = cResult[8];
    }
    if (cResult[11] === tmp7) {
      class S {
        constructor(arg0) {
          obj = { object: analytics, label: null };
          obj2 = closure_1_0(closure_1_2[6]);
          obj.label = obj2.analyticsRoleLabel(analytics.role);
          return obj;
        }
      }
    }
    const obj5 = { title: tmp8, children: tmp9 };
    cResult[11] = tmp7;
    cResult[12] = tmp8;
    cResult[13] = tmp9;
    cResult[14] = _false(tmp7, obj5);
    const tmp18 = _false(tmp7, obj5);
  }
}) : ((analytics) => {
  let DebugNote2;
  let intl2;
  let mapped1;
  let obj3;
  let tmpResult;
  analytics = analytics.analytics;
  let intl = intl7.intl;
  const stringResult = intl.string(_modDef3718.Pgvj3h);
  if ("ok" !== analytics.status) {
    let obj2 = { title: stringResult, children: _false(DebugNote2, obj3) };
    const DebugSection2 = VibegrationsDebugPrimitives.DebugSection;
    obj3 = { children: tmpResult.analyticsUnavailableReason(analytics) };
    DebugNote2 = VibegrationsDebugPrimitives.DebugNote;
    tmpResult = VibegrationsDebugLabels;
    return _false(DebugSection2, obj2);
  } else {
    let items = analytics.objects;
    if (items == null) {
      items = [];
    }
    const mapped = items.map((object) => {
      let obj2;
      const obj = { object, label: obj2.analyticsRoleLabel(object.role) };
      obj2 = require("VibegrationsDebugLabels");
      return obj;
    });
    const found = mapped.filter((label) => null != label.label);
    let obj = { title: stringResult, children: mapped1 };
    const DebugSection = VibegrationsDebugPrimitives.DebugSection;
    if (0 === found.length) {
      let obj4 = { children: intl2.string(_modDef3718.uAzxdh) };
      const DebugNote = VibegrationsDebugPrimitives.DebugNote;
      intl2 = intl7.intl;
      mapped1 = tmp5(DebugNote, obj4);
    } else {
      mapped1 = found.map((label) => {
        let AnRynJ;
        let analyticsMemoryValueResult;
        let formatToPlainString;
        let obj2;
        let obj3;
        const object = label.object;
        const obj = { label: label.label, value: formatToPlainString(AnRynJ, obj2), hint: analyticsMemoryValueResult };
        const DebugStatRow = require("VibegrationsDebugPrimitives").DebugStatRow;
        const intl = require("intl").intl;
        formatToPlainString = intl.formatToPlainString;
        obj2 = { cpu: obj3.formatMs(object.cpu_ms) };
        AnRynJ = _modDef3718.AnRynJ;
        obj3 = require("VibegrationsDebugFormat");
        const obj4 = require("VibegrationsDebugLabels");
        analyticsMemoryValueResult = obj4.analyticsMemoryValue(object);
        return closure_1_3(DebugStatRow, obj, object.role);
      });
    }
    return _false(DebugSection, obj);
  }
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugAnalytics.tsx");

export const VibegrationsDebugAgentAnalyticsRows = tmp4;
export const VibegrationsDebugWorkerAnalyticsSection = tmp5;
