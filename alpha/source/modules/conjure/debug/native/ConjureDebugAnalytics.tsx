// Module ID: 13017
// Function ID: 13018
// Name: ConjureDebugAnalytics
// Dependencies: [19, 21, 13015, 1113, 3868, 13012, 13013, 2]
// Exports: ConjureDebugAgentAnalyticsRows, ConjureDebugWorkerAnalyticsSection

// Module 13017 (ConjureDebugAnalytics)
import intl7 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ConjureDebugLabels from "ConjureDebugLabels" /* 13012 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 13013 */;
import ConjureDebugPrimitives from "ConjureDebugPrimitives" /* 13015 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAnalytics.tsx");

export function ConjureDebugAgentAnalyticsRows(analytics) {
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
    const obj2 = { label: intl4.string(_modDef3868.SXP7pD), value: intl5.string(_modDef3868.E5hKVi), hint: obj5.analyticsUnavailableReason(analytics) };
    const DebugStatRow3 = ConjureDebugPrimitives.DebugStatRow;
    intl4 = intl7.intl;
    intl5 = intl7.intl;
    obj5 = ConjureDebugLabels;
    return _false(DebugStatRow3, obj2);
  } else {
    const objects = analytics.objects;
    let found;
    if (objects != null) {
      found = objects.find((role) => "agent" === role.role);
    }
    if (null == found) {
      const obj3 = { label: intl2.string(_modDef3868.SXP7pD), value: "\u2014", hint: intl3.string(_modDef3868.AGvoMJ) };
      const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
      intl2 = intl7.intl;
      intl3 = intl7.intl;
      return _false(DebugStatRow2, obj3);
    } else {
      const obj6 = ConjureDebugLabels;
      const analyticsMemoryValueResult = obj6.analyticsMemoryValue(found);
      const obj4 = { label: intl6.string(_modDef3868["H/X+FI"]), value: obj8.formatMs(found.cpu_ms) };
      const DebugStatRow4 = ConjureDebugPrimitives.DebugStatRow;
      intl6 = intl7.intl;
      obj8 = ConjureDebugFormat;
      const items = [_false(DebugStatRow4, obj4), ];
      let tmp17Result = null;
      const tmp15 = hasOwnProperty;
      const tmp16 = React3;
      const tmp17 = _false;
      const tmp18 = importDefault;
      if (null != analyticsMemoryValueResult) {
        const obj = { label: intl.string(tmp18(3868).lmFmMO), value: analyticsMemoryValueResult };
        const DebugStatRow = tmp12(13015).DebugStatRow;
        intl = tmp12(1113).intl;
        tmp17Result = tmp17(DebugStatRow, obj);
      }
      const obj7 = { children: items };
      items[1] = tmp17Result;
      return tmp15(tmp16, obj7);
    }
  }
}
export function ConjureDebugWorkerAnalyticsSection(analytics) {
  let DebugNote2;
  let intl2;
  let mapped1;
  let obj3;
  let tmpResult;
  analytics = analytics.analytics;
  let intl = intl7.intl;
  const stringResult = intl.string(_modDef3868.LoZwWn);
  if ("ok" !== analytics.status) {
    let obj2 = { title: stringResult, children: _false(DebugNote2, obj3) };
    const DebugSection2 = ConjureDebugPrimitives.DebugSection;
    obj3 = { children: tmpResult.analyticsUnavailableReason(analytics) };
    DebugNote2 = ConjureDebugPrimitives.DebugNote;
    tmpResult = ConjureDebugLabels;
    return _false(DebugSection2, obj2);
  } else {
    let items = analytics.objects;
    if (items == null) {
      items = [];
    }
    const mapped = items.map((object) => {
      let obj2;
      const obj = { object, label: obj2.analyticsRoleLabel(object.role) };
      obj2 = ConjureDebugLabels;
      return obj;
    });
    const found = mapped.filter((label) => null != label.label);
    let obj = { title: stringResult, children: mapped1 };
    const DebugSection = ConjureDebugPrimitives.DebugSection;
    if (0 === found.length) {
      let obj4 = { children: intl2.string(_modDef3868.AGvoMJ) };
      const DebugNote = ConjureDebugPrimitives.DebugNote;
      intl2 = intl7.intl;
      mapped1 = tmp5(DebugNote, obj4);
    } else {
      mapped1 = found.map((label) => {
        let analyticsMemoryValueResult;
        let formatToPlainString;
        let obj2;
        let obj3;
        let prop;
        const object = label.object;
        const obj = { label: label.label, value: formatToPlainString(prop, obj2), hint: analyticsMemoryValueResult };
        const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
        const intl = intl7.intl;
        formatToPlainString = intl.formatToPlainString;
        obj2 = { cpu: obj3.formatMs(object.cpu_ms) };
        prop = _modDef3868["w/2voO"];
        obj3 = ConjureDebugFormat;
        const obj4 = ConjureDebugLabels;
        analyticsMemoryValueResult = obj4.analyticsMemoryValue(object);
        return closure_1_3(DebugStatRow, obj, object.role);
      });
    }
    return _false(DebugSection, obj);
  }
}
