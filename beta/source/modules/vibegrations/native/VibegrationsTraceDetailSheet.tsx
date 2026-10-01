// Module ID: 16421
// Function ID: 16422
// Name: VibegrationsTraceDetailSheet
// Dependencies: [19, 17, 8495, 21, 4836, 576, 4832, 1115, 3715, 16417, 16416, 1613, 504, 16418, 16422, 16423, 16420, 6618, 6570, 6045, 2]
// Exports: default

// Module 16421 (VibegrationsTraceDetailSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl30 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import _modDef3715 from "module_3715" /* 3715 */;
import Text_Text from "Text/Text" /* 4832 */;
import vibegrations_VibegrationsTraceFormat from "vibegrations/VibegrationsTraceFormat" /* 16417 */;
import react from "react" /* 19 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8495 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function Row(muted) {
  let items;
  let label;
  let value;
  let flag = muted.muted;
  ({ label, value } = muted);
  if (flag === undefined) {
    flag = false;
  }
  const obj = { style: closure_8().row, children: items };
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: label }), ];
  let str = "text-default";
  const Text = Text_Text.Text;
  const tmp = metroRequire;
  const tmp2 = View;
  const tmp3 = hasOwnProperty;
  if (flag) {
    str = "text-subtle";
  }
  items[1] = tmp3(Text, { variant: "text-xs/normal", color: str, selectable: true, children: value });
  return tmp(tmp2, obj);
}
function Section(arg0) {
  let children;
  let items;
  let title;
  ({ title, children } = arg0);
  const obj = { style: closure_8().section, children: items };
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children: title }), children];
  return metroRequire(View, obj);
}
function FieldRow(field) {
  let found;
  if (null != field.field.value) {
    const obj2 = { label: null, value: null };
    ({ key: obj5.label, value: obj5.value } = field.field);
    return hasOwnProperty(Row, obj2);
  } else {
    let formatToPlainStringResult;
    if (null != field.field.chars) {
      const intl2 = intl30.intl;
      const obj3 = { count: field.field.chars };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3715.DdXP0P, obj3);
    } else {
      formatToPlainStringResult = null;
      if (null != field.field.items) {
        const intl = intl30.intl;
        const obj = { count: field.field.items };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3715.OB8Qvn, obj);
      }
    }
    let str = iter.omitted;
    const obj4 = { label: field.field.key, value: found.join(" \u00B7 "), muted: true };
    const omissionLabel = vibegrations_VibegrationsTraceFormat.omissionLabel;
    vibegrations_VibegrationsTraceFormat;
    const tmp8 = hasOwnProperty;
    const tmp9 = Row;
    if (str == null) {
      str = "content";
    }
    const items = [omissionLabel(str), formatToPlainStringResult];
    found = items.filter((item) => null != item);
    return tmp8(tmp9, obj4);
  }
}
function RichEntries(arg0) {
  let intl;
  let items;
  let row;
  const entries = arg0.entries;
  _require = closure_8();
  let tmp = null;
  if (0 !== entries.length) {
    const tmp2 = closure_6;
    let tmp3 = closure_7;
    let obj = { children: items };
    const tmp4 = closure_5;
    const tmp5 = _require;
    let obj2 = { variant: "text-xs/semibold", color: "text-feedback-warning", children: intl.string(_modDef3715.fy9PRy) };
    let Text = require("Text/Text").Text;
    intl = require("intl").intl;
    items = [
      closure_5(Text, obj2),
      entries.map((children) => {
          let intl;
          let items;
          let obj4;
          const obj = { style: row.row, children: items };
          items = [, , , ];
          const obj2 = { variant: "text-xs/medium", color: "text-muted", children: children.key };
          items[0] = hasOwnProperty(Text_Text.Text, obj2);
          let tmp4Result = null;
          const tmp = metroRequire;
          const tmp3 = row;
          if (null != children.value) {
            const obj3 = { style: tmp3.rich, children: hasOwnProperty(Text_Text.Text, obj4) };
            obj4 = { variant: "text-xs/normal", color: "text-default", selectable: true, children: children.value };
            tmp4Result = tmp4(tmp2, obj3);
          }
          items[1] = tmp4Result;
          let tmp4Result3 = null;
          if (true === children.scrubbed) {
            const obj5 = { variant: "text-xs/normal", color: "text-feedback-warning", children: intl.string(_modDef3715.PkIUHD) };
            const Text = tmp5(4832).Text;
            intl = tmp5(1115).intl;
            tmp4Result3 = tmp4(Text, obj5);
          }
          items[2] = tmp4Result3;
          let tmp4Result4 = null;
          if (true === children.truncated) {
            let stringResult;
            const Text2 = tmp5(4832).Text;
            if (null == children.chars) {
              const intl3 = tmp5(1115).intl;
              stringResult = intl3.string(_modDef3715["1kBG9Z"]);
            } else {
              const intl2 = tmp5(1115).intl;
              const obj6 = { count: children.chars };
              stringResult = intl2.formatToPlainString(_modDef3715.VGSwo4, obj6);
            }
            const obj7 = { variant: "text-xs/normal", color: "text-subtle", children: stringResult };
            tmp4Result4 = tmp4(Text2, obj7);
          }
          items[3] = tmp4Result4;
          return tmp(View, obj, children.key);
        })
    ];
    tmp = closure_6(closure_7, obj);
  }
  return tmp;
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, head: obj3, headTitle: { flexShrink: 1 }, section: obj4, row: obj5, rich: obj6 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_4 };
obj6 = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTraceDetailSheet.tsx");

export default function VibegrationsTraceDetailSheet(projectId) {
  let BottomSheetScrollView;
  let DdXP0P;
  let Qy2iTq;
  let cacheWriteTokens;
  let costUsd;
  let entryId;
  let formatToPlainString;
  let formatToPlainString2;
  let formatToPlainString3;
  let formatToPlainString4;
  let formatTokens;
  let formatTokens2;
  let initialEntry;
  let intl10;
  let intl11;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl26;
  let intl27;
  let intl29;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let intl9;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let lkMc23;
  let num2;
  let num3;
  let num4;
  let num5;
  let obj18;
  let obj24;
  let obj26;
  let obj30;
  let obj38;
  let obj6;
  let obj7;
  let prop;
  let resultAdded;
  let resultRemoved;
  let stringResult;
  let tmp18Result29;
  let tmp2Result19;
  let tmp2Result21;
  let tmp2Result22;
  projectId = projectId.projectId;
  ({ entryId, initialEntry } = projectId);
  const tmp = closure_8();
  const tmp2 = projectId;
  let tmp3 = dependencyMap;
  let obj = projectId(16416);
  const traceCategoryTextStyles = obj.useTraceCategoryTextStyles();
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj2 = projectId(504);
  const items = [VibegrationsProjectStore];
  const items1 = [projectId];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => VibegrationsProjectStore.getTrace(projectId), items1);
  const obj3 = projectId(16418);
  let findTraceEntryResult = obj3.findTraceEntry(stateFromStoresArray, entryId);
  if (findTraceEntryResult == null) {
    findTraceEntryResult = initialEntry;
  }
  let findTraceEntryResult1 = null;
  if ("tool" === findTraceEntryResult.kind) {
    let parentId = findTraceEntryResult.parentId;
    const findTraceEntry = tmp2(16418).findTraceEntry;
    tmp2(16418);
    if (parentId == null) {
      parentId = null;
    }
    findTraceEntryResult1 = findTraceEntry(stateFromStoresArray, parentId);
  }
  const tmp2Result13 = tmp2(16418);
  const length = tmp2Result13.traceChildren(stateFromStoresArray, findTraceEntryResult.id).length;
  const obj4 = { childCount: length, hasParent: null != findTraceEntryResult1 };
  const tmp2Result14 = tmp2(16422);
  const traceDetailSectionsResult = tmp2Result14.traceDetailSections(findTraceEntryResult, obj4);
  let detailId;
  const useVibegrationsTraceDetail = tmp2(16423).useVibegrationsTraceDetail;
  tmp2(16423);
  if ("tool" === findTraceEntryResult.kind) {
    detailId = findTraceEntryResult.detailId;
  }
  const vibegrationsTraceDetail = useVibegrationsTraceDetail(projectId, detailId);
  const tmp14 = "model" === findTraceEntryResult.kind ? findTraceEntryResult.model : findTraceEntryResult.tool;
  const tmp2Result16 = tmp2(16420);
  const formatClockTimeResult = tmp2Result16.formatClockTime(findTraceEntryResult.startedAt, "millis");
  const tmp2Result17 = tmp2(16418);
  const traceCategoryResult = tmp2Result17.traceCategory(findTraceEntryResult);
  const tmp2Result18 = tmp2(16417);
  const traceRichStatusLabelResult = tmp2Result18.traceRichStatusLabel(vibegrationsTraceDetail);
  const obj5 = { scrollable: true, header: closure_5(tmp2(6570).BottomSheetTitleHeader, { title: tmp14 }), children: closure_5(BottomSheetScrollView, obj6) };
  const ActionSheet = tmp2(6618).ActionSheet;
  obj6 = { contentContainerStyle: { paddingBottom: bottom }, children: closure_6(View, obj7) };
  obj7 = { style: tmp.content, children: items3 };
  const obj8 = { style: tmp.head, children: items2 };
  BottomSheetScrollView = tmp2(6045).BottomSheetScrollView;
  items2 = [, , ];
  const obj9 = { status: findTraceEntryResult.status };
  items2[0] = closure_5(tmp2(16416).TraceStatusDot, obj9);
  const obj10 = { variant: "text-xs/semibold", style: traceCategoryTextStyles[traceCategoryResult], children: tmp2Result19.categoryLabel(traceCategoryResult) };
  const Text = tmp2(4832).Text;
  tmp2Result19 = tmp2(16417);
  items2[1] = closure_5(Text, obj10);
  const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp.headTitle, children: stringResult };
  const Text2 = tmp2(4832).Text;
  if (null == findTraceEntryResult.durationMs) {
    let intl = tmp2(1115).intl;
    stringResult = intl.string(tmp5(3715).HpKDyl);
  } else {
    const tmp2Result20 = tmp2(16417);
    stringResult = tmp2Result20.formatDuration(findTraceEntryResult.durationMs);
  }
  items2[2] = closure_5(Text2, obj11);
  items3 = [closure_6(View, obj8), , , , , , ];
  let tmp18Result = null;
  if (null != findTraceEntryResult.error) {
    const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", selectable: true, children: findTraceEntryResult.error };
    tmp18Result = tmp18(tmp2(4832).Text, obj12);
  }
  items3[1] = tmp18Result;
  let tmp19Result = null;
  if (traceDetailSectionsResult.includes("arguments")) {
    tmp19Result = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj13 = { title: intl25.string(_modDef3715.jXY3mm), children: items4 };
      intl25 = tmp2(1115).intl;
      let fields = findTraceEntryResult.fields;
      const tmp68 = Section;
      if (fields == null) {
        fields = [];
      }
      items4 = [
        fields.map((field) => {
              const obj = { field };
              return closure_1_5(FieldRow, obj, field.key);
            }),
  ,

      ];
      let status;
      if (vibegrationsTraceDetail != null) {
        status = vibegrationsTraceDetail.status;
      }
      let tmp18Result18 = null;
      if ("loaded" === status) {
        tmp18Result18 = null;
        if (null != vibegrationsTraceDetail.rich.args) {
          const obj14 = { entries: vibegrationsTraceDetail.rich.args };
          tmp18Result18 = tmp18(RichEntries, obj14);
        }
      }
      items4[1] = tmp18Result18;
      let tmp18Result19 = null;
      if (null != traceRichStatusLabelResult) {
        const obj15 = { variant: "text-xs/normal", color: "text-subtle", children: traceRichStatusLabelResult };
        tmp18Result19 = tmp18(tmp2(4832).Text, obj15);
      }
      items4[2] = tmp18Result19;
      tmp19Result = tmp19(tmp68, obj13);
    }
  }
  items3[2] = tmp19Result;
  let tmp19Result5 = null;
  if (traceDetailSectionsResult.includes("result")) {
    tmp19Result5 = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj16 = { title: intl26.string(_modDef3715.KXrf5F), children: items5 };
      intl26 = tmp2(1115).intl;
      const obj17 = { label: intl27.string(_modDef3715["2Aii2k"]), value: formatToPlainString4(DdXP0P, obj18) };
      intl27 = tmp2(1115).intl;
      const intl28 = tmp2(1115).intl;
      formatToPlainString4 = intl28.formatToPlainString;
      let num = findTraceEntryResult.resultChars;
      DdXP0P = tmp5(3715).DdXP0P;
      const tmp69 = Section;
      if (num == null) {
        num = 0;
      }
      obj18 = { count: num };
      items5 = [closure_5(Row, obj17), , , ];
      let tmp18Result20 = null;
      if (null != findTraceEntryResult.resultAdded) {
        const obj19 = { label: intl2.string(_modDef3715.hpGFzS), value: "+" + resultAdded + " \u2212" + resultRemoved };
        intl2 = tmp2(1115).intl;
        ({ resultRemoved, resultAdded } = findTraceEntryResult);
        if (resultRemoved == null) {
          resultRemoved = 0;
        }
        const _HermesInternal = HermesInternal;
        tmp18Result20 = tmp18(tmp70, obj19);
      }
      items5[1] = tmp18Result20;
      let tmp18Result21 = null;
      if (true === findTraceEntryResult.resultTruncated) {
        const obj20 = { label: intl3.string(_modDef3715["UV2R1/"]), value: intl4.string(_modDef3715["1kBG9Z"]), muted: true };
        intl3 = tmp2(1115).intl;
        intl4 = tmp2(1115).intl;
        tmp18Result21 = tmp18(tmp70, obj20);
      }
      items5[2] = tmp18Result21;
      let status1;
      if (vibegrationsTraceDetail != null) {
        status1 = vibegrationsTraceDetail.status;
      }
      let tmp18Result22 = null;
      if ("loaded" === status1) {
        tmp18Result22 = null;
        if (null != vibegrationsTraceDetail.rich.result) {
          const obj21 = { entries: vibegrationsTraceDetail.rich.result };
          tmp18Result22 = tmp18(RichEntries, obj21);
        }
      }
      items5[3] = tmp18Result22;
      tmp19Result5 = tmp19(tmp69, obj16);
    }
  }
  items3[3] = tmp19Result5;
  let tmp19Result6 = null;
  if (traceDetailSectionsResult.includes("usage")) {
    tmp19Result6 = null;
    if ("model" === findTraceEntryResult.kind) {
      const obj22 = { title: intl29.string(_modDef3715["W+4BVk"]), children: items6 };
      intl29 = tmp2(1115).intl;
      let tmp18Result23 = null;
      const tmp71 = Section;
      if (null != findTraceEntryResult.promptTokens) {
        const obj23 = { label: intl5.string(_modDef3715.Ran4BY), value: formatToPlainString(prop, obj24) };
        intl5 = tmp2(1115).intl;
        const intl6 = tmp2(1115).intl;
        formatToPlainString = intl6.formatToPlainString;
        obj24 = { tokens: tmp2Result21.formatTokens(findTraceEntryResult.promptTokens) };
        prop = tmp5(3715)["PYO+Jv"];
        tmp2Result21 = tmp2(16417);
        tmp18Result23 = tmp18(Row, obj23);
      }
      items6 = [tmp18Result23, , , , , , ];
      let tmp18Result24 = null;
      if (null != findTraceEntryResult.systemTokens) {
        const obj25 = { label: intl7.string(_modDef3715.vPIcyv), value: formatToPlainString2(Qy2iTq, obj26) };
        intl7 = tmp2(1115).intl;
        const intl8 = tmp2(1115).intl;
        formatToPlainString2 = intl8.formatToPlainString;
        obj26 = { system: tmp2Result22.formatTokens(findTraceEntryResult.systemTokens), tools: formatTokens(num2), toolCount: num3, messages: formatTokens2(num4), messageCount: num5 };
        Qy2iTq = tmp5(3715).Qy2iTq;
        num2 = findTraceEntryResult.toolsTokens;
        tmp2Result22 = tmp2(16417);
        formatTokens = tmp2(16417).formatTokens;
        tmp2(16417);
        const tmp40 = Row;
        if (num2 == null) {
          num2 = 0;
        }
        num3 = findTraceEntryResult.tools;
        if (num3 == null) {
          num3 = 0;
        }
        num4 = findTraceEntryResult.messagesTokens;
        formatTokens2 = tmp2(16417).formatTokens;
        tmp2(16417);
        if (num4 == null) {
          num4 = 0;
        }
        num5 = findTraceEntryResult.messages;
        if (num5 == null) {
          num5 = 0;
        }
        tmp18Result24 = tmp18(tmp40, obj25);
      }
      items6[1] = tmp18Result24;
      let tmp18Result25 = null;
      if (null != findTraceEntryResult.inputTokens) {
        const obj27 = { label: intl9.string(_modDef3715["/703Yk"]), value: String(findTraceEntryResult.inputTokens) };
        intl9 = tmp2(1115).intl;
        const _String = String;
        tmp18Result25 = tmp18(Row, obj27);
      }
      items6[2] = tmp18Result25;
      let tmp18Result26 = null;
      if (null != findTraceEntryResult.outputTokens) {
        const obj28 = { label: intl10.string(_modDef3715["6+W0dJ"]), value: String(findTraceEntryResult.outputTokens) };
        intl10 = tmp2(1115).intl;
        const _String2 = String;
        tmp18Result26 = tmp18(Row, obj28);
      }
      items6[3] = tmp18Result26;
      let tmp18Result27 = null;
      if (null != findTraceEntryResult.cacheReadTokens) {
        const obj29 = { label: intl11.string(_modDef3715.VyAl6j), value: formatToPlainString3(lkMc23, obj30) };
        intl11 = tmp2(1115).intl;
        const intl12 = tmp2(1115).intl;
        formatToPlainString3 = intl12.formatToPlainString;
        obj30 = { read: null, write: cacheWriteTokens };
        ({ cacheReadTokens: obj36.read, cacheWriteTokens } = findTraceEntryResult);
        lkMc23 = tmp5(3715).lkMc23;
        const tmp50 = Row;
        if (cacheWriteTokens == null) {
          cacheWriteTokens = 0;
        }
        tmp18Result27 = tmp18(tmp50, obj29);
      }
      items6[4] = tmp18Result27;
      let tmp18Result28 = null;
      if (null != findTraceEntryResult.costUsd) {
        const obj31 = { label: intl13.string(_modDef3715.l9YFEQ), value: "$" + costUsd.toFixed(4) };
        intl13 = tmp2(1115).intl;
        costUsd = findTraceEntryResult.costUsd;
        const _HermesInternal2 = HermesInternal;
        tmp18Result28 = tmp18(Row, obj31);
      }
      items6[5] = tmp18Result28;
      const obj32 = { variant: "text-xs/normal", color: "text-subtle", children: intl14.string(_modDef3715.F9jaUF) };
      const Text3 = tmp2(4832).Text;
      intl14 = tmp2(1115).intl;
      items6[6] = closure_5(Text3, obj32);
      tmp19Result6 = tmp19(tmp71, obj22);
    }
  }
  items3[4] = tmp19Result6;
  if (traceDetailSectionsResult.includes("arguments")) {
    const obj33 = { variant: "text-xs/normal", color: "text-subtle", children: intl15.string(_modDef3715["ppv+97"]) };
    const Text4 = tmp2(4832).Text;
    intl15 = tmp2(1115).intl;
    tmp18Result29 = tmp18(Text4, obj33);
  } else {
    tmp18Result29 = null;
  }
  items3[5] = tmp18Result29;
  let tmp19Result8 = null;
  if (traceDetailSectionsResult.includes("diagnostics")) {
    const obj34 = { title: intl16.string(_modDef3715.T7SFyZ), children: items7 };
    intl16 = tmp2(1115).intl;
    let tmp18Result30 = null;
    const tmp56 = Section;
    if (null != findTraceEntryResult1) {
      const obj35 = { label: intl17.string(_modDef3715.NnBqcd), value: "model" === findTraceEntryResult1.kind ? findTraceEntryResult1.model : findTraceEntryResult1.tool };
      intl17 = tmp2(1115).intl;
      tmp18Result30 = tmp18(Row, obj35);
    }
    items7 = [tmp18Result30, , , , , , ];
    let tmp18Result31 = null;
    if (length > 0) {
      const obj37 = { label: intl18.string(_modDef3715.fI6mzD), value: intl19.formatToPlainString(_modDef3715.hO8FYp, obj38) };
      intl18 = tmp2(1115).intl;
      intl19 = tmp2(1115).intl;
      obj38 = { count: length };
      tmp18Result31 = tmp18(Row, obj37);
    }
    items7[1] = tmp18Result31;
    let tmp18Result32 = null;
    if (null != findTraceEntryResult.turnId) {
      const obj39 = { label: intl20.string(_modDef3715.I7cJP0), value: findTraceEntryResult.turnId };
      intl20 = tmp2(1115).intl;
      tmp18Result32 = tmp18(Row, obj39);
    }
    items7[2] = tmp18Result32;
    const obj40 = { label: intl21.string(_modDef3715["XVTP/S"]), value: findTraceEntryResult.id };
    intl21 = tmp2(1115).intl;
    items7[3] = closure_5(Row, obj40);
    let tmp18Result33 = null;
    if (null != formatClockTimeResult) {
      const obj41 = { label: intl22.string(_modDef3715.rD7bm0), value: formatClockTimeResult };
      intl22 = tmp2(1115).intl;
      tmp18Result33 = tmp18(tmp63, obj41);
    }
    items7[4] = tmp18Result33;
    let tmp18Result34 = null;
    if ("model" === findTraceEntryResult.kind) {
      tmp18Result34 = null;
      if (null != findTraceEntryResult.stopReason) {
        const obj42 = { label: intl23.string(_modDef3715.rxmzYT), value: findTraceEntryResult.stopReason };
        intl23 = tmp2(1115).intl;
        tmp18Result34 = tmp18(tmp63, obj42);
      }
    }
    items7[5] = tmp18Result34;
    let tmp19Result7 = null;
    if ("tool" === findTraceEntryResult.kind) {
      tmp19Result7 = null;
      if (null != findTraceEntryResult.schema) {
        tmp19Result7 = null;
        if (findTraceEntryResult.schema.length > 0) {
          const obj43 = { children: items8 };
          const obj44 = { variant: "text-xs/semibold", color: "text-muted", children: intl24.string(_modDef3715["6oILKx"]) };
          const Text5 = tmp2(4832).Text;
          intl24 = tmp2(1115).intl;
          items8 = [closure_5(Text5, obj44), ];
          const schema = findTraceEntryResult.schema;
          items8[1] = schema.map((label) => {
            let formatToPlainString;
            let obj2;
            let required;
            let tmp3;
            const obj = { label: label.name, value: formatToPlainString(required ? tmp3["6QoPmP"] : tmp3["/L6GFe"], obj2) };
            const intl = projectId(dependencyMap[7]).intl;
            formatToPlainString = intl.formatToPlainString;
            required = label.required;
            tmp3 = _modDef3715;
            obj2 = { type: label.type };
            return closure_1_5(Row, obj, label.name);
          });
          tmp19Result7 = tmp19(closure_7, obj43);
        }
      }
    }
    items7[6] = tmp19Result7;
    tmp19Result8 = tmp19(tmp56, obj34);
  }
  items3[6] = tmp19Result8;
  return closure_5(ActionSheet, obj5);
};
export const VIBEGRATIONS_TRACE_DETAIL_SHEET_KEY = "VibegrationsTraceDetailSheet";
