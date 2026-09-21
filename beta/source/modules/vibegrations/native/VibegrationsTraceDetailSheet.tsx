// Module ID: 17080
// Function ID: 17081
// Name: VibegrationsTraceDetailSheet
// Dependencies: [19, 17, 9307, 21, 4758, 580, 558, 568, 4754, 1119, 3682, 17076, 17075, 1616, 504, 17077, 17081, 17082, 17079, 7449, 7396, 6863, 2]

// Module 17080 (VibegrationsTraceDetailSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import _modDef3682 from "module_3682" /* 3682 */;
import Text_Text from "Text/Text" /* 4754 */;
import vibegrations_VibegrationsTraceFormat from "vibegrations/VibegrationsTraceFormat" /* 17076 */;
import noop from "module_19" /* 19 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 9307 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, head: null, headTitle: null, section: null, row: null, rich: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.head = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.headTitle = { flexShrink: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.row = { gap: nativeDefault.space.PX_4 };
let obj6 = { gap: nativeDefault.space.PX_4 };
obj2.rich = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ label, value, muted } = arg0);
  const tmp5 = closure_8();
  if (cResult[0] !== label) {
    const obj2 = { variant: "text-xs/medium", color: "text-muted", children: label };
    const tmp8 = hasOwnProperty(tmp(4754).Text, obj2);
    cResult[0] = label;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  let str = "text-default";
  if (tmp4) {
    str = "text-subtle";
  }
  if (cResult[2] === str) {
    if (cResult[3] === value) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === tmp5.row) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp9) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj3 = { style: tmp5.row, children: null };
    const items = [tmp6, tmp9];
    obj3.children = items;
    const tmp14 = timestampProducer(View, obj3);
    cResult[5] = tmp5.row;
    cResult[6] = tmp6;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = hasOwnProperty(Text_Text.Text, { variant: "text-xs/normal", color: str, selectable: true, children: value });
  cResult[2] = str;
  cResult[3] = value;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((muted) => {
  let flag = muted.muted;
  ({ label, value } = muted);
  if (flag === undefined) {
    flag = false;
  }
  const obj = { style: closure_8().row, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: label }), ];
  let str = "text-default";
  if (flag) {
    str = "text-subtle";
  }
  items[1] = hasOwnProperty(Text_Text.Text, { variant: "text-xs/normal", color: str, selectable: true, children: value });
  obj.children = items;
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ title, children } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== title) {
    const obj2 = { variant: "text-xs/semibold", color: "text-default", children: title };
    const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = title;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === tmp4.section) {
      if (cResult[4] === tmp5) {
        let tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const obj3 = { style: tmp4.section, children: null };
  const items = [tmp5, children];
  obj3.children = items;
  const tmp9 = timestampProducer(View, obj3);
  cResult[2] = children;
  cResult[3] = tmp4.section;
  cResult[4] = tmp5;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  ({ title, children } = arg0);
  const obj = { style: closure_8().section, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children: title }), children];
  obj.children = items;
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((field) => {
  const cResult = c.c(14);
  if (null != field.field.value) {
    if (cResult[0] === iter.key) {
      if (cResult[1] === iter.value) {
        let tmp17 = cResult[2];
      }
      return tmp17;
    }
    ({ key: obj7.label, value: obj7.value } = iter);
    const tmp20 = hasOwnProperty(closure_9, { label: null, value: null });
    cResult[0] = iter.key;
    cResult[1] = iter.value;
    cResult[2] = tmp20;
    tmp17 = tmp20;
    const obj2 = { label: null, value: null };
  } else {
    if (cResult[3] === iter.chars) {
      if (cResult[4] === iter.items) {
        ({ omitted, key } = iter);
        if (omitted == null) {
          omitted = "content";
        }
        if (cResult[6] !== omitted) {
          const omissionLabelResult = tmp(17076).omissionLabel(omitted);
          cResult[6] = omitted;
          cResult[7] = omissionLabelResult;
          let tmp9 = omissionLabelResult;
          const tmpResult = tmp(17076);
        } else {
          tmp9 = cResult[7];
        }
        if (cResult[8] === cResult[5]) {
          if (cResult[9] === tmp9) {
            let obj5 = cResult[10];
          }
          const joined = obj5.join(" \u00B7 ");
          if (cResult[11] === iter.key) {
            if (cResult[12] === joined) {
              let tmp13 = cResult[13];
            }
            return tmp13;
          }
          const obj3 = { label: key, value: joined, muted: true };
          const tmp16 = hasOwnProperty(closure_9, obj3);
          cResult[11] = iter.key;
          cResult[12] = joined;
          cResult[13] = tmp16;
          tmp13 = tmp16;
        }
        const items = [tmp9, cResult[5]];
        const found = items.filter((item) => null != item);
        cResult[8] = cResult[5];
        cResult[9] = tmp9;
        cResult[10] = found;
        obj5 = found;
      }
    }
    if (null != iter.chars) {
      const intl2 = tmp(1119).intl;
      const obj4 = { count: iter.chars };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3682.DdXP0P, obj4);
    } else {
      formatToPlainStringResult = null;
      if (null != iter.items) {
        const intl = tmp(1119).intl;
        const obj6 = { count: iter.items };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3682.OB8Qvn, obj6);
      }
    }
    cResult[3] = iter.chars;
    cResult[4] = iter.items;
    cResult[5] = formatToPlainStringResult;
  }
}) : ((field) => {
  if (null != field.field.value) {
    ({ key: obj6.label, value: obj6.value } = iter);
    return hasOwnProperty(closure_9, { label: null, value: null });
  } else {
    if (null != iter.chars) {
      const intl2 = util.intl;
      const obj3 = { count: iter.chars };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3682.DdXP0P, obj3);
    } else {
      formatToPlainStringResult = null;
      if (null != iter.items) {
        const intl = util.intl;
        const obj = { count: iter.items };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3682.OB8Qvn, obj);
      }
    }
    const obj5 = { label: iter.key, value: null, muted: true };
    let str = iter.omitted;
    if (str == null) {
      str = "content";
    }
    const items = [vibegrations_VibegrationsTraceFormat.omissionLabel(str), formatToPlainStringResult];
    const found = items.filter((item) => null != item);
    obj5.value = found.join(" \u00B7 ");
    return hasOwnProperty(closure_9, obj5);
  }
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(8);
  const entries = arg0.entries;
  const tmp4 = closure_8();
  _require = tmp4;
  if (0 === entries.length) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-xs/semibold", color: "text-feedback-warning", children: null };
      let intl = tmp(1119).intl;
      obj2.children = intl.string(_modDef3682.fy9PRy);
      const tmp8 = closure_5(tmp(4754).Text, obj2);
      cResult[0] = tmp8;
      let first = tmp8;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === entries) {
      if (cResult[2] === tmp4) {
        if (cResult[6] !== cResult[3]) {
          let obj3 = { children: null };
          let items = [first, tmp9];
          obj3.children = items;
          const tmp16 = closure_6(closure_7, obj3);
          cResult[6] = tmp9;
          cResult[7] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[7];
        }
        return tmp13;
      }
    }
    if (cResult[4] !== tmp4) {
      const fn = function x(children) {
        const obj = { style: row.row, children: null };
        let intl = require;
        let obj7 = dependencyMap;
        const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: children.key }), , , ];
        let tmp4Result = null;
        if (null != children.value) {
          const obj3 = { style: row.rich, children: null };
          const obj4 = { variant: "text-xs/normal", color: "text-default", selectable: true, children: children.value };
          obj3.children = tmp4(Text_Text.Text, obj4);
          tmp4Result = tmp4(tmp2, obj3);
        }
        items[1] = tmp4Result;
        let tmp4Result3 = null;
        if (true === children.scrubbed) {
          const obj5 = { variant: "text-xs/normal", color: "text-feedback-warning", children: null };
          const intl2 = util.intl;
          obj5.children = intl2.string(_modDef3682.PkIUHD);
          tmp4Result3 = tmp4(Text_Text.Text, obj5);
        }
        items[2] = tmp4Result3;
        if (true !== children.truncated) {
          items[3] = null;
          obj.children = items;
          return timestampProducer(tmp2, obj, children.key);
        } else {
          if (null == children.chars) {
            intl = util.intl;
            let stringResult = intl.string(_modDef3682["1kBG9Z"]);
          } else {
            const intl3 = util.intl;
            const obj6 = { count: children.chars };
            stringResult = intl3.formatToPlainString(_modDef3682.VGSwo4, obj6);
          }
          obj7 = { variant: "text-xs/normal", color: "text-subtle", children: stringResult };
          tmp4(Text_Text.Text, obj7);
        }
      };
      cResult[4] = tmp4;
      cResult[5] = fn;
      let tmp10 = fn;
    } else {
      tmp10 = cResult[5];
    }
    const mapped = entries.map(tmp10);
    cResult[1] = entries;
    cResult[2] = tmp4;
    cResult[3] = mapped;
  }
}) : ((arg0) => {
  const entries = arg0.entries;
  _require = closure_8();
  let tmp = null;
  if (0 !== entries.length) {
    let obj = { children: null };
    const obj2 = { variant: "text-xs/semibold", color: "text-feedback-warning", children: null };
    let intl = require("util").intl;
    obj2.children = intl.string(_modDef3682.fy9PRy);
    let items = [
      closure_5(require("Text/Text").Text, obj2),
      entries.map((children) => {
          const obj = { style: row.row, children: null };
          let intl = require;
          let obj7 = dependencyMap;
          const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: children.key }), , , ];
          let tmp4Result = null;
          if (null != children.value) {
            const obj3 = { style: row.rich, children: null };
            const obj4 = { variant: "text-xs/normal", color: "text-default", selectable: true, children: children.value };
            obj3.children = tmp4(Text_Text.Text, obj4);
            tmp4Result = tmp4(tmp2, obj3);
          }
          items[1] = tmp4Result;
          let tmp4Result3 = null;
          if (true === children.scrubbed) {
            const obj5 = { variant: "text-xs/normal", color: "text-feedback-warning", children: null };
            const intl2 = util.intl;
            obj5.children = intl2.string(_modDef3682.PkIUHD);
            tmp4Result3 = tmp4(Text_Text.Text, obj5);
          }
          items[2] = tmp4Result3;
          if (true !== children.truncated) {
            items[3] = null;
            obj.children = items;
            return timestampProducer(tmp2, obj, children.key);
          } else {
            if (null == children.chars) {
              intl = util.intl;
              let stringResult = intl.string(_modDef3682["1kBG9Z"]);
            } else {
              const intl3 = util.intl;
              const obj6 = { count: children.chars };
              stringResult = intl3.formatToPlainString(_modDef3682.VGSwo4, obj6);
            }
            obj7 = { variant: "text-xs/normal", color: "text-subtle", children: stringResult };
            tmp4(Text_Text.Text, obj7);
          }
        })
    ];
    obj.children = items;
    tmp = closure_6(closure_7, obj);
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let obj7 = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTraceDetailSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const tmp = projectId;
  const cResult = projectId(568).c(8);
  projectId = projectId.projectId;
  ({ entryId, initialEntry } = projectId);
  const tmp4 = closure_8();
  let obj = projectId(568);
  const traceCategoryTextStyles = projectId(17075).useTraceCategoryTextStyles();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function k() {
      return VibegrationsProjectStore.getTrace(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const obj2 = projectId(17075);
  const stateFromStoresArray = tmp(504).useStateFromStoresArray(first, tmp9, tmp10);
  const tmpResult = tmp(504);
  let findTraceEntryResult = tmp(17077).findTraceEntry(stateFromStoresArray, entryId);
  if (findTraceEntryResult == null) {
    findTraceEntryResult = initialEntry;
  }
  let findTraceEntryResult1 = null;
  if ("tool" === findTraceEntryResult.kind) {
    let parentId = findTraceEntryResult.parentId;
    if (parentId == null) {
      parentId = null;
    }
    findTraceEntryResult1 = tmp(17077).findTraceEntry(stateFromStoresArray, parentId);
    const tmpResult16 = tmp(17077);
  }
  const tmpResult15 = tmp(17077);
  const length = tmp(17077).traceChildren(stateFromStoresArray, findTraceEntryResult.id).length;
  const tmpResult17 = tmp(17077);
  const traceDetailSectionsResult = tmp(17081).traceDetailSections(findTraceEntryResult, { childCount: length, hasParent: null != findTraceEntryResult1 });
  const obj3 = { childCount: length, hasParent: null != findTraceEntryResult1 };
  const tmpResult18 = tmp(17081);
  let detailId;
  if ("tool" === findTraceEntryResult.kind) {
    detailId = findTraceEntryResult.detailId;
  }
  const vibegrationsTraceDetail = tmp(17082).useVibegrationsTraceDetail(projectId, detailId);
  const tmp17 = "model" === findTraceEntryResult.kind ? findTraceEntryResult.model : findTraceEntryResult.tool;
  const tmpResult19 = tmp(17082);
  const formatClockTimeResult = tmp(17079).formatClockTime(findTraceEntryResult.startedAt, "millis");
  const tmpResult20 = tmp(17079);
  const traceCategoryResult = tmp(17077).traceCategory(findTraceEntryResult);
  if (cResult[4] !== vibegrationsTraceDetail) {
    const traceRichStatusLabelResult = tmp(17076).traceRichStatusLabel(vibegrationsTraceDetail);
    cResult[4] = vibegrationsTraceDetail;
    cResult[5] = traceRichStatusLabelResult;
    let tmp20 = traceRichStatusLabelResult;
    const tmpResult22 = tmp(17076);
  } else {
    tmp20 = cResult[5];
  }
  if (cResult[6] !== bottom) {
    const obj4 = { paddingBottom: bottom };
    cResult[6] = bottom;
    cResult[7] = obj4;
    let tmp22 = obj4;
  } else {
    tmp22 = cResult[7];
  }
  const obj5 = { scrollable: true, header: closure_5(tmp(7396).BottomSheetTitleHeader, { title: tmp17 }), children: null };
  const obj6 = { contentContainerStyle: tmp22, children: null };
  const obj7 = { style: tmp4.content, children: null };
  const obj8 = { style: tmp4.head, children: null };
  const items2 = [closure_5(tmp(17075).TraceStatusDot, { status: findTraceEntryResult.status }), , ];
  const obj10 = { variant: "text-xs/semibold", style: traceCategoryTextStyles[traceCategoryResult], children: null };
  const obj9 = { status: findTraceEntryResult.status };
  const tmpResult21 = tmp(17077);
  obj10.children = tmp(17076).categoryLabel(traceCategoryResult);
  items2[1] = closure_5(tmp(4754).Text, obj10);
  const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp4.headTitle, children: null };
  if (null == findTraceEntryResult.durationMs) {
    let intl = tmp(1119).intl;
    let stringResult = intl.string(tmp6(3682).HpKDyl);
  } else {
    stringResult = tmp(17076).formatDuration(findTraceEntryResult.durationMs);
    const tmpResult24 = tmp(17076);
  }
  obj11.children = stringResult;
  items2[2] = closure_5(tmp(4754).Text, obj11);
  obj8.children = items2;
  const items3 = [closure_6(View, obj8), , , , , , ];
  let tmp23Result = null;
  if (null != findTraceEntryResult.error) {
    const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", selectable: true, children: findTraceEntryResult.error };
    tmp23Result = tmp23(tmp(4754).Text, obj12);
  }
  items3[1] = tmp23Result;
  let tmp24Result = null;
  if (traceDetailSectionsResult.includes("arguments")) {
    tmp24Result = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj13 = { title: null, children: null };
      const intl25 = tmp(1119).intl;
      obj13.title = intl25.string(tmp6(3682).jXY3mm);
      let fields = findTraceEntryResult.fields;
      if (fields == null) {
        fields = [];
      }
      const items4 = [fields.map((field) => closure_1_5(closure_1_11, { field }, field.key)), , ];
      let status;
      if (vibegrationsTraceDetail != null) {
        status = vibegrationsTraceDetail.status;
      }
      let tmp23Result18 = null;
      if ("loaded" === status) {
        tmp23Result18 = null;
        if (null != vibegrationsTraceDetail.rich.args) {
          const obj14 = { entries: vibegrationsTraceDetail.rich.args };
          tmp23Result18 = tmp23(closure_12, obj14);
        }
      }
      items4[1] = tmp23Result18;
      let tmp23Result19 = null;
      if (null != tmp20) {
        const obj15 = { variant: "text-xs/normal", color: "text-subtle", children: tmp20 };
        tmp23Result19 = tmp23(tmp(4754).Text, obj15);
      }
      items4[2] = tmp23Result19;
      obj13.children = items4;
      tmp24Result = tmp24(closure_10, obj13);
    }
  }
  items3[2] = tmp24Result;
  let tmp24Result5 = null;
  if (traceDetailSectionsResult.includes("result")) {
    tmp24Result5 = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj16 = { title: null, children: null };
      const intl26 = tmp(1119).intl;
      obj16.title = intl26.string(tmp6(3682).KXrf5F);
      const obj17 = { label: null, value: null };
      const intl27 = tmp(1119).intl;
      obj17.label = intl27.string(tmp6(3682)["2Aii2k"]);
      const intl28 = tmp(1119).intl;
      let num9 = findTraceEntryResult.resultChars;
      if (num9 == null) {
        num9 = 0;
      }
      const obj18 = { count: num9 };
      obj17.value = intl28.formatToPlainString(tmp6(3682).DdXP0P, obj18);
      const items5 = [tmp23(closure_9, obj17), , , ];
      let tmp23Result20 = null;
      if (null != findTraceEntryResult.resultAdded) {
        const obj19 = { label: null, value: null };
        const intl2 = tmp(1119).intl;
        obj19.label = intl2.string(tmp6(3682).hpGFzS);
        ({ resultRemoved, resultAdded } = findTraceEntryResult);
        if (resultRemoved == null) {
          resultRemoved = 0;
        }
        const _HermesInternal = HermesInternal;
        obj19.value = "+" + resultAdded + " \u2212" + resultRemoved;
        tmp23Result20 = tmp23(tmp69, obj19);
      }
      items5[1] = tmp23Result20;
      let tmp23Result21 = null;
      if (true === findTraceEntryResult.resultTruncated) {
        const obj20 = { label: null, value: null, muted: true };
        const intl3 = tmp(1119).intl;
        obj20.label = intl3.string(tmp6(3682)["UV2R1/"]);
        const intl4 = tmp(1119).intl;
        obj20.value = intl4.string(tmp6(3682)["1kBG9Z"]);
        tmp23Result21 = tmp23(tmp69, obj20);
      }
      items5[2] = tmp23Result21;
      let status1;
      if (vibegrationsTraceDetail != null) {
        status1 = vibegrationsTraceDetail.status;
      }
      let tmp23Result22 = null;
      if ("loaded" === status1) {
        tmp23Result22 = null;
        if (null != vibegrationsTraceDetail.rich.result) {
          const obj21 = { entries: vibegrationsTraceDetail.rich.result };
          tmp23Result22 = tmp23(closure_12, obj21);
        }
      }
      items5[3] = tmp23Result22;
      obj16.children = items5;
      tmp24Result5 = tmp24(closure_10, obj16);
    }
  }
  items3[3] = tmp24Result5;
  let tmp24Result6 = null;
  if (traceDetailSectionsResult.includes("usage")) {
    tmp24Result6 = null;
    if ("model" === findTraceEntryResult.kind) {
      const obj22 = { title: null, children: null };
      const intl29 = tmp(1119).intl;
      obj22.title = intl29.string(tmp6(3682)["W+4BVk"]);
      let tmp23Result23 = null;
      if (null != findTraceEntryResult.promptTokens) {
        const obj23 = { label: null, value: null };
        const intl5 = tmp(1119).intl;
        obj23.label = intl5.string(tmp6(3682).Ran4BY);
        const intl6 = tmp(1119).intl;
        const obj24 = { tokens: tmp(17076).formatTokens(findTraceEntryResult.promptTokens) };
        obj23.value = intl6.formatToPlainString(tmp6(3682)["PYO+Jv"], obj24);
        tmp23Result23 = tmp23(closure_9, obj23);
        const tmpResult25 = tmp(17076);
      }
      const items6 = [tmp23Result23, , , , , , ];
      let tmp23Result24 = null;
      if (null != findTraceEntryResult.systemTokens) {
        const obj25 = { label: null, value: null };
        const intl7 = tmp(1119).intl;
        obj25.label = intl7.string(tmp6(3682).vPIcyv);
        const intl8 = tmp(1119).intl;
        const obj26 = { system: tmp(17076).formatTokens(findTraceEntryResult.systemTokens), tools: null, toolCount: null, messages: null, messageCount: null };
        const tmp43 = closure_9;
        const tmpResult26 = tmp(17076);
        let num10 = findTraceEntryResult.toolsTokens;
        if (num10 == null) {
          num10 = 0;
        }
        obj26.tools = tmp(17076).formatTokens(num10);
        let num11 = findTraceEntryResult.tools;
        if (num11 == null) {
          num11 = 0;
        }
        obj26.toolCount = num11;
        const tmpResult27 = tmp(17076);
        let num12 = findTraceEntryResult.messagesTokens;
        if (num12 == null) {
          num12 = 0;
        }
        obj26.messages = tmp(17076).formatTokens(num12);
        let num13 = findTraceEntryResult.messages;
        if (num13 == null) {
          num13 = 0;
        }
        obj26.messageCount = num13;
        obj25.value = intl8.formatToPlainString(tmp6(3682).Qy2iTq, obj26);
        tmp23Result24 = tmp23(tmp43, obj25);
        const tmpResult28 = tmp(17076);
      }
      items6[1] = tmp23Result24;
      let tmp23Result25 = null;
      if (null != findTraceEntryResult.inputTokens) {
        const obj27 = { label: null, value: null };
        const intl9 = tmp(1119).intl;
        obj27.label = intl9.string(tmp6(3682)["/703Yk"]);
        const _String = String;
        obj27.value = String(findTraceEntryResult.inputTokens);
        tmp23Result25 = tmp23(closure_9, obj27);
      }
      items6[2] = tmp23Result25;
      let tmp23Result26 = null;
      if (null != findTraceEntryResult.outputTokens) {
        const obj28 = { label: null, value: null };
        const intl10 = tmp(1119).intl;
        obj28.label = intl10.string(tmp6(3682)["6+W0dJ"]);
        const _String2 = String;
        obj28.value = String(findTraceEntryResult.outputTokens);
        tmp23Result26 = tmp23(closure_9, obj28);
      }
      items6[3] = tmp23Result26;
      let tmp23Result27 = null;
      if (null != findTraceEntryResult.cacheReadTokens) {
        const obj29 = { label: null, value: null };
        const intl11 = tmp(1119).intl;
        obj29.label = intl11.string(tmp6(3682).VyAl6j);
        const intl12 = tmp(1119).intl;
        const obj30 = { read: null, write: null };
        ({ cacheReadTokens: obj42.read, cacheWriteTokens } = findTraceEntryResult);
        if (cacheWriteTokens == null) {
          cacheWriteTokens = 0;
        }
        obj30.write = cacheWriteTokens;
        obj29.value = intl12.formatToPlainString(tmp6(3682).lkMc23, obj30);
        tmp23Result27 = tmp23(closure_9, obj29);
      }
      items6[4] = tmp23Result27;
      let tmp23Result28 = null;
      if (null != findTraceEntryResult.costUsd) {
        const obj31 = { label: null, value: null };
        const intl13 = tmp(1119).intl;
        obj31.label = intl13.string(tmp6(3682).l9YFEQ);
        const costUsd = findTraceEntryResult.costUsd;
        const _HermesInternal2 = HermesInternal;
        obj31.value = "$" + costUsd.toFixed(4);
        tmp23Result28 = tmp23(closure_9, obj31);
      }
      items6[5] = tmp23Result28;
      const obj32 = { variant: "text-xs/normal", color: "text-subtle", children: null };
      const intl14 = tmp(1119).intl;
      obj32.children = intl14.string(tmp6(3682).F9jaUF);
      items6[6] = tmp23(tmp(4754).Text, obj32);
      obj22.children = items6;
      tmp24Result6 = tmp24(closure_10, obj22);
    }
  }
  items3[4] = tmp24Result6;
  if (traceDetailSectionsResult.includes("arguments")) {
    const obj33 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    const intl15 = tmp(1119).intl;
    obj33.children = intl15.string(tmp6(3682)["ppv+97"]);
    let tmp23Result29 = tmp23(tmp(4754).Text, obj33);
  } else {
    tmp23Result29 = null;
  }
  items3[5] = tmp23Result29;
  let tmp24Result8 = null;
  if (traceDetailSectionsResult.includes("diagnostics")) {
    const obj34 = { title: null, children: null };
    const intl16 = tmp(1119).intl;
    obj34.title = intl16.string(tmp6(3682).T7SFyZ);
    if (null == findTraceEntryResult1) {
      const items7 = [null, , , , , , ];
      let tmp23Result30 = null;
      if (length > 0) {
        const obj35 = { label: null, value: null };
        const intl18 = tmp(1119).intl;
        obj35.label = intl18.string(tmp6(3682).fI6mzD);
        const intl19 = tmp(1119).intl;
        const obj36 = { count: length };
        obj35.value = intl19.formatToPlainString(tmp6(3682).hO8FYp, obj36);
        tmp23Result30 = tmp23(closure_9, obj35);
      }
      items7[1] = tmp23Result30;
      let tmp23Result31 = null;
      if (null != findTraceEntryResult.turnId) {
        const obj37 = { label: null, value: null };
        const intl20 = tmp(1119).intl;
        obj37.label = intl20.string(tmp6(3682).I7cJP0);
        obj37.value = findTraceEntryResult.turnId;
        tmp23Result31 = tmp23(closure_9, obj37);
      }
      items7[2] = tmp23Result31;
      const obj38 = { label: null, value: null };
      const intl21 = tmp(1119).intl;
      obj38.label = intl21.string(tmp6(3682)["XVTP/S"]);
      obj38.value = findTraceEntryResult.id;
      items7[3] = tmp23(closure_9, obj38);
      let tmp23Result32 = null;
      if (null != formatClockTimeResult) {
        const obj39 = { label: null, value: null };
        const intl22 = tmp(1119).intl;
        obj39.label = intl22.string(tmp6(3682).rD7bm0);
        obj39.value = formatClockTimeResult;
        tmp23Result32 = tmp23(tmp62, obj39);
      }
      items7[4] = tmp23Result32;
      let tmp23Result33 = null;
      if ("model" === findTraceEntryResult.kind) {
        tmp23Result33 = null;
        if (null != findTraceEntryResult.stopReason) {
          const obj40 = { label: null, value: null };
          const intl23 = tmp(1119).intl;
          obj40.label = intl23.string(tmp6(3682).rxmzYT);
          obj40.value = findTraceEntryResult.stopReason;
          tmp23Result33 = tmp23(tmp62, obj40);
        }
      }
      items7[5] = tmp23Result33;
      let tmp24Result7 = null;
      if ("tool" === findTraceEntryResult.kind) {
        tmp24Result7 = null;
        if (null != findTraceEntryResult.schema) {
          tmp24Result7 = null;
          if (findTraceEntryResult.schema.length > 0) {
            const obj41 = { children: null };
            const obj43 = { variant: "text-xs/semibold", color: "text-muted", children: null };
            const intl24 = tmp(1119).intl;
            obj43.children = intl24.string(tmp6(3682)["6oILKx"]);
            const items8 = [tmp23(tmp(4754).Text, obj43), ];
            const schema = findTraceEntryResult.schema;
            items8[1] = schema.map((label) => {
              const obj = { label: label.name, value: null };
              const intl = projectId(1119).intl;
              const tmp3 = _modDef3682;
              obj.value = intl.formatToPlainString(label.required ? tmp3["6QoPmP"] : tmp3["/L6GFe"], { type: label.type });
              return closure_1_5(closure_1_9, obj, label.name);
            });
            obj41.children = items8;
            tmp24Result7 = tmp24(closure_7, obj41);
          }
        }
      }
      items7[6] = tmp24Result7;
      obj34.children = items7;
      tmp24Result8 = tmp24(tmp54, obj34);
    } else {
      const obj44 = { label: null, value: null };
      const intl17 = tmp(1119).intl;
      obj44.label = intl17.string(tmp6(3682).NnBqcd);
      obj44.value = "model" === findTraceEntryResult1.kind ? findTraceEntryResult1.model : findTraceEntryResult1.tool;
      tmp23(closure_9, obj44);
    }
    tmp54 = closure_10;
  }
  items3[6] = tmp24Result8;
  obj7.children = items3;
  obj6.children = closure_6(View, obj7);
  obj5.children = closure_5(tmp(6863).BottomSheetScrollView, obj6);
  return closure_5(tmp(7449).ActionSheet, obj5);
}) : ((projectId) => {
  projectId = projectId.projectId;
  ({ entryId, initialEntry } = projectId);
  const tmp = closure_8();
  const tmp2 = projectId;
  const traceCategoryTextStyles = projectId(17075).useTraceCategoryTextStyles();
  let obj = projectId(17075);
  const items = [VibegrationsProjectStore];
  const items1 = [projectId];
  const stateFromStoresArray = projectId(504).useStateFromStoresArray(items, () => VibegrationsProjectStore.getTrace(projectId), items1);
  const obj2 = projectId(504);
  let findTraceEntryResult = projectId(17077).findTraceEntry(stateFromStoresArray, entryId);
  if (findTraceEntryResult == null) {
    findTraceEntryResult = initialEntry;
  }
  let findTraceEntryResult1 = null;
  if ("tool" === findTraceEntryResult.kind) {
    let parentId = findTraceEntryResult.parentId;
    if (parentId == null) {
      parentId = null;
    }
    findTraceEntryResult1 = tmp2(17077).findTraceEntry(stateFromStoresArray, parentId);
    const tmp2Result = tmp2(17077);
  }
  const obj3 = projectId(17077);
  const length = tmp2(17077).traceChildren(stateFromStoresArray, findTraceEntryResult.id).length;
  const tmp2Result13 = tmp2(17077);
  const traceDetailSectionsResult = tmp2(17081).traceDetailSections(findTraceEntryResult, { childCount: length, hasParent: null != findTraceEntryResult1 });
  const obj4 = { childCount: length, hasParent: null != findTraceEntryResult1 };
  const tmp2Result14 = tmp2(17081);
  let detailId;
  if ("tool" === findTraceEntryResult.kind) {
    detailId = findTraceEntryResult.detailId;
  }
  const vibegrationsTraceDetail = tmp2(17082).useVibegrationsTraceDetail(projectId, detailId);
  const tmp12 = "model" === findTraceEntryResult.kind ? findTraceEntryResult.model : findTraceEntryResult.tool;
  const tmp2Result15 = tmp2(17082);
  const formatClockTimeResult = tmp2(17079).formatClockTime(findTraceEntryResult.startedAt, "millis");
  const tmp2Result16 = tmp2(17079);
  const traceCategoryResult = tmp2(17077).traceCategory(findTraceEntryResult);
  const tmp2Result17 = tmp2(17077);
  const traceRichStatusLabelResult = tmp2(17076).traceRichStatusLabel(vibegrationsTraceDetail);
  const obj5 = { scrollable: true, header: closure_5(tmp2(7396).BottomSheetTitleHeader, { title: tmp12 }), children: null };
  const obj6 = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const obj7 = { style: tmp.content, children: null };
  const obj8 = { style: tmp.head, children: null };
  const items2 = [closure_5(tmp2(17075).TraceStatusDot, { status: findTraceEntryResult.status }), , ];
  const obj10 = { variant: "text-xs/semibold", style: traceCategoryTextStyles[traceCategoryResult], children: null };
  const obj9 = { status: findTraceEntryResult.status };
  const tmp2Result18 = tmp2(17076);
  obj10.children = tmp2(17076).categoryLabel(traceCategoryResult);
  items2[1] = closure_5(tmp2(4754).Text, obj10);
  const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp.headTitle, children: null };
  if (null == findTraceEntryResult.durationMs) {
    let intl = tmp2(1119).intl;
    let stringResult = intl.string(tmp5(3682).HpKDyl);
  } else {
    stringResult = tmp2(17076).formatDuration(findTraceEntryResult.durationMs);
    const tmp2Result20 = tmp2(17076);
  }
  obj11.children = stringResult;
  items2[2] = closure_5(tmp2(4754).Text, obj11);
  obj8.children = items2;
  const items3 = [closure_6(View, obj8), , , , , , ];
  let tmp16Result = null;
  if (null != findTraceEntryResult.error) {
    const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", selectable: true, children: findTraceEntryResult.error };
    tmp16Result = tmp16(tmp2(4754).Text, obj12);
  }
  items3[1] = tmp16Result;
  let tmp17Result = null;
  if (traceDetailSectionsResult.includes("arguments")) {
    tmp17Result = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj13 = { title: null, children: null };
      const intl25 = tmp2(1119).intl;
      obj13.title = intl25.string(tmp5(3682).jXY3mm);
      let fields = findTraceEntryResult.fields;
      if (fields == null) {
        fields = [];
      }
      const items4 = [fields.map((field) => closure_1_5(closure_1_11, { field }, field.key)), , ];
      let status;
      if (vibegrationsTraceDetail != null) {
        status = vibegrationsTraceDetail.status;
      }
      let tmp16Result18 = null;
      if ("loaded" === status) {
        tmp16Result18 = null;
        if (null != vibegrationsTraceDetail.rich.args) {
          const obj14 = { entries: vibegrationsTraceDetail.rich.args };
          tmp16Result18 = tmp16(closure_12, obj14);
        }
      }
      items4[1] = tmp16Result18;
      let tmp16Result19 = null;
      if (null != traceRichStatusLabelResult) {
        const obj15 = { variant: "text-xs/normal", color: "text-subtle", children: traceRichStatusLabelResult };
        tmp16Result19 = tmp16(tmp2(4754).Text, obj15);
      }
      items4[2] = tmp16Result19;
      obj13.children = items4;
      tmp17Result = tmp17(closure_10, obj13);
    }
  }
  items3[2] = tmp17Result;
  let tmp17Result5 = null;
  if (traceDetailSectionsResult.includes("result")) {
    tmp17Result5 = null;
    if ("tool" === findTraceEntryResult.kind) {
      const obj16 = { title: null, children: null };
      const intl26 = tmp2(1119).intl;
      obj16.title = intl26.string(tmp5(3682).KXrf5F);
      const obj17 = { label: null, value: null };
      const intl27 = tmp2(1119).intl;
      obj17.label = intl27.string(tmp5(3682)["2Aii2k"]);
      const intl28 = tmp2(1119).intl;
      let num = findTraceEntryResult.resultChars;
      if (num == null) {
        num = 0;
      }
      const obj18 = { count: num };
      obj17.value = intl28.formatToPlainString(tmp5(3682).DdXP0P, obj18);
      const items5 = [tmp16(closure_9, obj17), , , ];
      let tmp16Result20 = null;
      if (null != findTraceEntryResult.resultAdded) {
        const obj19 = { label: null, value: null };
        const intl2 = tmp2(1119).intl;
        obj19.label = intl2.string(tmp5(3682).hpGFzS);
        ({ resultRemoved, resultAdded } = findTraceEntryResult);
        if (resultRemoved == null) {
          resultRemoved = 0;
        }
        const _HermesInternal = HermesInternal;
        obj19.value = "+" + resultAdded + " \u2212" + resultRemoved;
        tmp16Result20 = tmp16(tmp66, obj19);
      }
      items5[1] = tmp16Result20;
      let tmp16Result21 = null;
      if (true === findTraceEntryResult.resultTruncated) {
        const obj20 = { label: null, value: null, muted: true };
        const intl3 = tmp2(1119).intl;
        obj20.label = intl3.string(tmp5(3682)["UV2R1/"]);
        const intl4 = tmp2(1119).intl;
        obj20.value = intl4.string(tmp5(3682)["1kBG9Z"]);
        tmp16Result21 = tmp16(tmp66, obj20);
      }
      items5[2] = tmp16Result21;
      let status1;
      if (vibegrationsTraceDetail != null) {
        status1 = vibegrationsTraceDetail.status;
      }
      let tmp16Result22 = null;
      if ("loaded" === status1) {
        tmp16Result22 = null;
        if (null != vibegrationsTraceDetail.rich.result) {
          const obj21 = { entries: vibegrationsTraceDetail.rich.result };
          tmp16Result22 = tmp16(closure_12, obj21);
        }
      }
      items5[3] = tmp16Result22;
      obj16.children = items5;
      tmp17Result5 = tmp17(closure_10, obj16);
    }
  }
  items3[3] = tmp17Result5;
  let tmp17Result6 = null;
  if (traceDetailSectionsResult.includes("usage")) {
    tmp17Result6 = null;
    if ("model" === findTraceEntryResult.kind) {
      const obj22 = { title: null, children: null };
      const intl29 = tmp2(1119).intl;
      obj22.title = intl29.string(tmp5(3682)["W+4BVk"]);
      let tmp16Result23 = null;
      if (null != findTraceEntryResult.promptTokens) {
        const obj23 = { label: null, value: null };
        const intl5 = tmp2(1119).intl;
        obj23.label = intl5.string(tmp5(3682).Ran4BY);
        const intl6 = tmp2(1119).intl;
        const obj24 = { tokens: tmp2(17076).formatTokens(findTraceEntryResult.promptTokens) };
        obj23.value = intl6.formatToPlainString(tmp5(3682)["PYO+Jv"], obj24);
        tmp16Result23 = tmp16(closure_9, obj23);
        const tmp2Result21 = tmp2(17076);
      }
      const items6 = [tmp16Result23, , , , , , ];
      let tmp16Result24 = null;
      if (null != findTraceEntryResult.systemTokens) {
        const obj25 = { label: null, value: null };
        const intl7 = tmp2(1119).intl;
        obj25.label = intl7.string(tmp5(3682).vPIcyv);
        const intl8 = tmp2(1119).intl;
        const obj26 = { system: tmp2(17076).formatTokens(findTraceEntryResult.systemTokens), tools: null, toolCount: null, messages: null, messageCount: null };
        const tmp2Result22 = tmp2(17076);
        const tmp37 = closure_9;
        let num2 = findTraceEntryResult.toolsTokens;
        if (num2 == null) {
          num2 = 0;
        }
        obj26.tools = tmp2(17076).formatTokens(num2);
        let num3 = findTraceEntryResult.tools;
        if (num3 == null) {
          num3 = 0;
        }
        obj26.toolCount = num3;
        const tmp2Result23 = tmp2(17076);
        let num4 = findTraceEntryResult.messagesTokens;
        if (num4 == null) {
          num4 = 0;
        }
        obj26.messages = tmp2(17076).formatTokens(num4);
        let num5 = findTraceEntryResult.messages;
        if (num5 == null) {
          num5 = 0;
        }
        obj26.messageCount = num5;
        obj25.value = intl8.formatToPlainString(tmp5(3682).Qy2iTq, obj26);
        tmp16Result24 = tmp16(tmp37, obj25);
        const tmp2Result24 = tmp2(17076);
      }
      items6[1] = tmp16Result24;
      let tmp16Result25 = null;
      if (null != findTraceEntryResult.inputTokens) {
        const obj27 = { label: null, value: null };
        const intl9 = tmp2(1119).intl;
        obj27.label = intl9.string(tmp5(3682)["/703Yk"]);
        const _String = String;
        obj27.value = String(findTraceEntryResult.inputTokens);
        tmp16Result25 = tmp16(closure_9, obj27);
      }
      items6[2] = tmp16Result25;
      let tmp16Result26 = null;
      if (null != findTraceEntryResult.outputTokens) {
        const obj28 = { label: null, value: null };
        const intl10 = tmp2(1119).intl;
        obj28.label = intl10.string(tmp5(3682)["6+W0dJ"]);
        const _String2 = String;
        obj28.value = String(findTraceEntryResult.outputTokens);
        tmp16Result26 = tmp16(closure_9, obj28);
      }
      items6[3] = tmp16Result26;
      let tmp16Result27 = null;
      if (null != findTraceEntryResult.cacheReadTokens) {
        const obj29 = { label: null, value: null };
        const intl11 = tmp2(1119).intl;
        obj29.label = intl11.string(tmp5(3682).VyAl6j);
        const intl12 = tmp2(1119).intl;
        const obj30 = { read: null, write: null };
        ({ cacheReadTokens: obj40.read, cacheWriteTokens } = findTraceEntryResult);
        if (cacheWriteTokens == null) {
          cacheWriteTokens = 0;
        }
        obj30.write = cacheWriteTokens;
        obj29.value = intl12.formatToPlainString(tmp5(3682).lkMc23, obj30);
        tmp16Result27 = tmp16(closure_9, obj29);
      }
      items6[4] = tmp16Result27;
      let tmp16Result28 = null;
      if (null != findTraceEntryResult.costUsd) {
        const obj31 = { label: null, value: null };
        const intl13 = tmp2(1119).intl;
        obj31.label = intl13.string(tmp5(3682).l9YFEQ);
        const costUsd = findTraceEntryResult.costUsd;
        const _HermesInternal2 = HermesInternal;
        obj31.value = "$" + costUsd.toFixed(4);
        tmp16Result28 = tmp16(closure_9, obj31);
      }
      items6[5] = tmp16Result28;
      const obj32 = { variant: "text-xs/normal", color: "text-subtle", children: null };
      const intl14 = tmp2(1119).intl;
      obj32.children = intl14.string(tmp5(3682).F9jaUF);
      items6[6] = tmp16(tmp2(4754).Text, obj32);
      obj22.children = items6;
      tmp17Result6 = tmp17(closure_10, obj22);
    }
  }
  items3[4] = tmp17Result6;
  if (traceDetailSectionsResult.includes("arguments")) {
    const obj33 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    const intl15 = tmp2(1119).intl;
    obj33.children = intl15.string(tmp5(3682)["ppv+97"]);
    let tmp16Result29 = tmp16(tmp2(4754).Text, obj33);
  } else {
    tmp16Result29 = null;
  }
  items3[5] = tmp16Result29;
  let tmp17Result8 = null;
  if (traceDetailSectionsResult.includes("diagnostics")) {
    const obj34 = { title: null, children: null };
    const intl16 = tmp2(1119).intl;
    obj34.title = intl16.string(tmp5(3682).T7SFyZ);
    if (null == findTraceEntryResult1) {
      const items7 = [null, , , , , , ];
      let tmp16Result30 = null;
      if (length > 0) {
        const obj35 = { label: null, value: null };
        const intl18 = tmp2(1119).intl;
        obj35.label = intl18.string(tmp5(3682).fI6mzD);
        const intl19 = tmp2(1119).intl;
        const obj36 = { count: length };
        obj35.value = intl19.formatToPlainString(tmp5(3682).hO8FYp, obj36);
        tmp16Result30 = tmp16(closure_9, obj35);
      }
      items7[1] = tmp16Result30;
      let tmp16Result31 = null;
      if (null != findTraceEntryResult.turnId) {
        const obj37 = { label: null, value: null };
        const intl20 = tmp2(1119).intl;
        obj37.label = intl20.string(tmp5(3682).I7cJP0);
        obj37.value = findTraceEntryResult.turnId;
        tmp16Result31 = tmp16(closure_9, obj37);
      }
      items7[2] = tmp16Result31;
      const obj38 = { label: null, value: null };
      const intl21 = tmp2(1119).intl;
      obj38.label = intl21.string(tmp5(3682)["XVTP/S"]);
      obj38.value = findTraceEntryResult.id;
      items7[3] = tmp16(closure_9, obj38);
      let tmp16Result32 = null;
      if (null != formatClockTimeResult) {
        const obj39 = { label: null, value: null };
        const intl22 = tmp2(1119).intl;
        obj39.label = intl22.string(tmp5(3682).rD7bm0);
        obj39.value = formatClockTimeResult;
        tmp16Result32 = tmp16(tmp59, obj39);
      }
      items7[4] = tmp16Result32;
      let tmp16Result33 = null;
      if ("model" === findTraceEntryResult.kind) {
        tmp16Result33 = null;
        if (null != findTraceEntryResult.stopReason) {
          const obj41 = { label: null, value: null };
          const intl23 = tmp2(1119).intl;
          obj41.label = intl23.string(tmp5(3682).rxmzYT);
          obj41.value = findTraceEntryResult.stopReason;
          tmp16Result33 = tmp16(tmp59, obj41);
        }
      }
      items7[5] = tmp16Result33;
      let tmp17Result7 = null;
      if ("tool" === findTraceEntryResult.kind) {
        tmp17Result7 = null;
        if (null != findTraceEntryResult.schema) {
          tmp17Result7 = null;
          if (findTraceEntryResult.schema.length > 0) {
            const obj42 = { children: null };
            const obj43 = { variant: "text-xs/semibold", color: "text-muted", children: null };
            const intl24 = tmp2(1119).intl;
            obj43.children = intl24.string(tmp5(3682)["6oILKx"]);
            const items8 = [tmp16(tmp2(4754).Text, obj43), ];
            const schema = findTraceEntryResult.schema;
            items8[1] = schema.map((label) => {
              const obj = { label: label.name, value: null };
              const intl = projectId(1119).intl;
              const tmp3 = _modDef3682;
              obj.value = intl.formatToPlainString(label.required ? tmp3["6QoPmP"] : tmp3["/L6GFe"], { type: label.type });
              return closure_1_5(closure_1_9, obj, label.name);
            });
            obj42.children = items8;
            tmp17Result7 = tmp17(closure_7, obj42);
          }
        }
      }
      items7[6] = tmp17Result7;
      obj34.children = items7;
      tmp17Result8 = tmp17(tmp51, obj34);
    } else {
      const obj44 = { label: null, value: null };
      const intl17 = tmp2(1119).intl;
      obj44.label = intl17.string(tmp5(3682).NnBqcd);
      obj44.value = "model" === findTraceEntryResult1.kind ? findTraceEntryResult1.model : findTraceEntryResult1.tool;
      tmp16(closure_9, obj44);
    }
    tmp51 = closure_10;
  }
  items3[6] = tmp17Result8;
  obj7.children = items3;
  obj6.children = closure_6(View, obj7);
  obj5.children = closure_5(tmp2(6863).BottomSheetScrollView, obj6);
  return closure_5(tmp2(7449).ActionSheet, obj5);
});
export const VIBEGRATIONS_TRACE_DETAIL_SHEET_KEY = "VibegrationsTraceDetailSheet";
