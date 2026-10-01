// Module ID: 16425
// Function ID: 16426
// Name: VibegrationsDebugAnalytics
// Dependencies: [19, 21, 16414, 1115, 3715, 16412, 16411, 2]
// Exports: VibegrationsDebugAgentAnalyticsRows, VibegrationsDebugWorkerAnalyticsSection

// Module 16425 (VibegrationsDebugAnalytics)
import intl7 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 16411 */;
import VibegrationsDebugLabels from "VibegrationsDebugLabels" /* 16412 */;
import VibegrationsDebugPrimitives from "VibegrationsDebugPrimitives" /* 16414 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugAnalytics.tsx");

export const VibegrationsDebugAgentAnalyticsRows = function VibegrationsDebugAgentAnalyticsRows(analytics) {
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
    const obj2 = { label: intl4.string(_modDef3715.H6PMwW), value: intl5.string(_modDef3715.TLOZ8J), hint: obj5.analyticsUnavailableReason(analytics) };
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
      const obj3 = { label: intl2.string(_modDef3715.H6PMwW), value: "\u2014", hint: intl3.string(_modDef3715.uAzxdh) };
      const DebugStatRow2 = VibegrationsDebugPrimitives.DebugStatRow;
      intl2 = intl7.intl;
      intl3 = intl7.intl;
      return _false(DebugStatRow2, obj3);
    } else {
      const obj6 = VibegrationsDebugLabels;
      const analyticsMemoryValueResult = obj6.analyticsMemoryValue(found);
      const obj4 = { label: intl6.string(_modDef3715.awAqRi), value: obj8.formatMs(found.cpu_ms) };
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
        const obj = { label: intl.string(tmp18(3715).WdGviA), value: analyticsMemoryValueResult };
        const DebugStatRow = tmp12(16414).DebugStatRow;
        intl = tmp12(1115).intl;
        tmp17Result = tmp17(DebugStatRow, obj);
      }
      const obj7 = { children: items };
      items[1] = tmp17Result;
      return tmp15(tmp16, obj7);
    }
  }
};
export const VibegrationsDebugWorkerAnalyticsSection = function VibegrationsDebugWorkerAnalyticsSection(analytics) {
  let DebugNote2;
  let intl2;
  let mapped1;
  let obj3;
  let tmpResult;
  analytics = analytics.analytics;
  let intl = intl7.intl;
  const stringResult = intl.string(_modDef3715.Pgvj3h);
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
      obj2 = VibegrationsDebugLabels;
      return obj;
    });
    const found = mapped.filter((label) => null != label.label);
    let obj = { title: stringResult, children: mapped1 };
    const DebugSection = VibegrationsDebugPrimitives.DebugSection;
    if (0 === found.length) {
      let obj4 = { children: intl2.string(_modDef3715.uAzxdh) };
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
        const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
        const intl = intl7.intl;
        formatToPlainString = intl.formatToPlainString;
        obj2 = { cpu: obj3.formatMs(object.cpu_ms) };
        AnRynJ = _modDef3715.AnRynJ;
        obj3 = VibegrationsDebugFormat;
        const obj4 = VibegrationsDebugLabels;
        analyticsMemoryValueResult = obj4.analyticsMemoryValue(object);
        return closure_1_3(DebugStatRow, obj, object.role);
      });
    }
    return _false(DebugSection, obj);
  }
};
