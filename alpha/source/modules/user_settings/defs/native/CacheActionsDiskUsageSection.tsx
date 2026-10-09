// Module ID: 15787
// Function ID: 15788
// Name: CacheActionsDiskUsageSection
// Dependencies: [5, 32, 19, 21, 5091, 587, 15788, 2090, 4789, 1126, 558, 576, 5087, 5637, 5374, 1382, 6188, 15790, 2]
// Exports: useDiskUsageMeasurement

// Module 15787 (CacheActionsDiskUsageSection)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl24 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import Text_Text from "Text/Text" /* 5087 */;
import Stack_Stack from "Stack/Stack" /* 5374 */;
import FileSizeUtils from "FileSizeUtils" /* 5637 */;
import Card_Card from "Card/Card" /* 6188 */;
import CacheActionsStorageDiagnosticsDefault from "CacheActionsStorageDiagnostics" /* 15790 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, ref;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let obj = { label: { flex: 1 }, nestedLabel: obj2, value: { flexShrink: 1 } };
obj2 = { flex: 1, paddingLeft: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function SizeRow(arg0) {
  let bytes;
  let indented;
  let items;
  let label;
  const obj = react2;
  const cResult = obj.c(11);
  ({ label, bytes, indented } = arg0);
  const tmp4 = undefined !== indented && indented;
  const iter = closure_9();
  const tmp5 = tmp4 ? iter.nestedLabel : iter.label;
  if (cResult[0] === label) {
    let tmp6;
    let tmp8;
    if (cResult[1] === tmp5) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== bytes) {
      let formatKbSizeResult;
      if (null != bytes) {
        const tmpResult = FileSizeUtils;
        formatKbSizeResult = tmpResult.formatKbSize(bytes);
      } else {
        const intl = tmp(1126).intl;
        formatKbSizeResult = intl.string(tmp(1126).t.Yrz9rv);
      }
      cResult[3] = bytes;
      cResult[4] = formatKbSizeResult;
      tmp8 = formatKbSizeResult;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === iter.value) {
      let tmp11;
      if (cResult[6] === tmp8) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        let tmp14;
        if (cResult[9] === tmp11) {
          tmp14 = cResult[10];
        }
        return tmp14;
      }
      const obj2 = { direction: "horizontal", justify: "space-between", spacing: nativeDefault.space.PX_16, children: items };
      const Stack = tmp(5374).Stack;
      items = [tmp6, tmp11];
      const tmp17 = metroImportDefault(Stack, obj2);
      cResult[8] = tmp6;
      cResult[9] = tmp11;
      cResult[10] = tmp17;
      tmp14 = tmp17;
    }
    const obj3 = { variant: "text-sm/semibold", tabularNumbers: true, style: iter.value, children: tmp8 };
    const tmp13 = metroRequire(Text_Text.Text, obj3);
    cResult[5] = iter.value;
    cResult[6] = tmp8;
    cResult[7] = tmp13;
    tmp11 = tmp13;
  }
  const tmp7 = metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", style: tmp5, children: label });
  cResult[0] = label;
  cResult[1] = tmp5;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function SizeRow(label) {
  let bytes;
  let formatKbSizeResult;
  let indented;
  let items;
  ({ bytes, indented } = label);
  label = label.label;
  if (indented === undefined) {
    indented = false;
  }
  const iter = closure_9();
  const obj = { direction: "horizontal", justify: "space-between", spacing: nativeDefault.space.PX_16, children: items };
  const Stack = Stack_Stack.Stack;
  items = [, ];
  const obj2 = { variant: "text-sm/normal", color: "text-subtle", style: indented ? iter.nestedLabel : iter.label, children: label };
  items[0] = metroRequire(Text_Text.Text, obj2);
  const obj3 = { variant: "text-sm/semibold", tabularNumbers: true, style: iter.value, children: formatKbSizeResult };
  const Text = tmp2(5087).Text;
  const tmp = metroImportDefault;
  if (null != bytes) {
    const tmp2Result = FileSizeUtils;
    formatKbSizeResult = tmp2Result.formatKbSize(bytes);
  } else {
    const intl = tmp2(1126).intl;
    formatKbSizeResult = intl.string(tmp2(1126).t.Yrz9rv);
  }
  items[1] = metroRequire(Text, obj3);
  return tmp(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function DiskUsageResults(arg0) {
  let first;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl21;
  let intl22;
  let intl23;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let kvDatabaseUsage;
  let metricKitSize;
  let obj10;
  let report;
  let str;
  let tmp11;
  let tmp15;
  let tmp22;
  let tmp5;
  let tmp7;
  const tmp = kvDatabaseUsage;
  const tmp2 = str;
  let obj = kvDatabaseUsage(str[11]);
  const cResult = obj.c(25);
  ({ report, metricKitSize, kvDatabaseUsage } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { caches: intl.string(tmp(tmp2[9]).t["2CKnsF"]), files: intl2.string(tmp(tmp2[9]).t["8Hvr3+"]), databases: intl3.string(tmp(tmp2[9]).t["9paF2r"]), shared_preferences: intl4.string(tmp(tmp2[9]).t["Y9/ijr"]), no_backup: intl5.string(tmp(tmp2[9]).t["lZWCZ+"]), code_cache: intl6.string(tmp(tmp2[9]).t.GN6kqM), external_files: intl7.string(tmp(tmp2[9]).t["6Ej9W0"]), external_caches: intl8.string(tmp(tmp2[9]).t.ZmaptE), documents: intl9.string(tmp(tmp2[9]).t.aE3Wbw), tmp: intl10.string(tmp(tmp2[9]).t.UQsNEK), application_support: intl11.string(tmp(tmp2[9]).t.DGQvlY), webkit: intl12.string(tmp(tmp2[9]).t.aIcsfw), library_other: intl13.string(tmp(tmp2[9]).t.U2f1ef), container_other: intl14.string(tmp(tmp2[9]).t.ZduI7f), app_group: intl15.string(tmp(tmp2[9]).t.rManeQ), share_extension: intl16.string(tmp(tmp2[9]).t.BEL9MJ), notification_service_extension: intl17.string(tmp(tmp2[9]).t.V46Edz), broadcast_upload_extension: intl18.string(tmp(tmp2[9]).t.BhYGtj), lockscreen_widget_extension: intl19.string(tmp(tmp2[9]).t.toGFBn) };
    intl = tmp(tmp2[9]).intl;
    intl2 = tmp(tmp2[9]).intl;
    intl3 = tmp(tmp2[9]).intl;
    intl4 = tmp(tmp2[9]).intl;
    intl5 = tmp(tmp2[9]).intl;
    intl6 = tmp(tmp2[9]).intl;
    intl7 = tmp(tmp2[9]).intl;
    intl8 = tmp(tmp2[9]).intl;
    intl9 = tmp(tmp2[9]).intl;
    intl10 = tmp(tmp2[9]).intl;
    intl11 = tmp(tmp2[9]).intl;
    intl12 = tmp(tmp2[9]).intl;
    intl13 = tmp(tmp2[9]).intl;
    intl14 = tmp(tmp2[9]).intl;
    intl15 = tmp(tmp2[9]).intl;
    intl16 = tmp(tmp2[9]).intl;
    intl17 = tmp(tmp2[9]).intl;
    intl18 = tmp(tmp2[9]).intl;
    intl19 = tmp(tmp2[9]).intl;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  let tmpResult = tmp(tmp2[15]);
  str = "files";
  if (tmpResult.isIOS()) {
    str = "caches";
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl20 = tmp(tmp2[9]).intl;
    const stringResult = intl20.string(tmp(tmp2[9]).t.O20zQi);
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== report.totalMeasuredBytes) {
    const tmp9 = closure_10;
    let obj3 = { label: tmp5, bytes: report.totalMeasuredBytes };
    const tmp10 = closure_6(closure_10, obj3);
    cResult[2] = report.totalMeasuredBytes;
    cResult[3] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== metricKitSize) {
    const tmpResult2 = tmp(tmp2[15]);
    let isIOSResult = tmpResult2.isIOS();
    if (isIOSResult) {
      const obj4 = { label: intl21.string(tmp(tmp2[9]).t.VQKK5O), bytes: metricKitSize };
      intl21 = tmp(tmp2[9]).intl;
      isIOSResult = closure_6(closure_10, obj4);
    }
    cResult[4] = metricKitSize;
    cResult[5] = isIOSResult;
    tmp11 = isIOSResult;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "heading-sm/semibold", children: intl22.string(tmp(tmp2[9]).t.CoudPr) };
    const Heading = tmp(tmp2[12]).Heading;
    intl22 = tmp(tmp2[9]).intl;
    const tmp17 = closure_6(Heading, obj5);
    cResult[6] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  let free;
  const tmp18 = cResult[7];
  if (kvDatabaseUsage != null) {
    free = kvDatabaseUsage.free;
  }
  if (tmp18 === free) {
    let total;
    const tmp20 = cResult[8];
    if (kvDatabaseUsage != null) {
      total = kvDatabaseUsage.total;
    }
    if (tmp20 === total) {
      if (cResult[9] === report.roots) {
        tmp22 = cResult[10];
      }
      if (cResult[14] === report.complete) {
        if (cResult[15] === report.errorCount) {
          let tmp33;
          if (cResult[16] === report.unmeasuredRootCount) {
            tmp33 = cResult[17];
          }
          if (cResult[18] === tmp22) {
            let tmp36;
            if (cResult[19] === tmp33) {
              tmp36 = cResult[20];
            }
            if (cResult[21] === tmp7) {
              if (cResult[22] === tmp11) {
                let tmp39;
                if (cResult[23] === tmp36) {
                  tmp39 = cResult[24];
                }
                return tmp39;
              }
            }
            const obj6 = { spacing: first(tmp2[5]).space.PX_16, children: items };
            const Stack = tmp(tmp2[14]).Stack;
            items = [tmp7, tmp11, tmp36];
            const tmp42 = closure_7(Stack, obj6);
            cResult[21] = tmp7;
            cResult[22] = tmp11;
            cResult[23] = tmp36;
            cResult[24] = tmp42;
            tmp39 = tmp42;
          }
          const obj7 = { children: items1 };
          items1 = [tmp15, tmp22, tmp33];
          const tmp38 = closure_7(tmp(tmp2[14]).Stack, obj7);
          cResult[18] = tmp22;
          cResult[19] = tmp33;
          cResult[20] = tmp38;
          tmp36 = tmp38;
        }
      }
      const complete = report.complete;
      let tmp34 = !complete;
      if (complete) {
        tmp34 = report.errorCount > 0;
      }
      if (!tmp34) {
        tmp34 = report.unmeasuredRootCount > 0;
      }
      if (tmp34) {
        const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: intl23.formatToPlainString(tmp(tmp2[9]).t.kt7tAT, obj10) };
        const Text = tmp(tmp2[12]).Text;
        intl23 = tmp(tmp2[9]).intl;
        obj10 = { errors: null, unavailable: null };
        ({ errorCount: obj9.errors, unmeasuredRootCount: obj9.unavailable } = report);
        tmp34 = closure_6(Text, obj8);
      }
      cResult[14] = report.complete;
      cResult[15] = report.errorCount;
      cResult[16] = report.unmeasuredRootCount;
      cResult[17] = tmp34;
      tmp33 = tmp34;
    }
  }
  let free1;
  const tmp23 = cResult[11];
  if (kvDatabaseUsage != null) {
    free1 = kvDatabaseUsage.free;
  }
  if (tmp23 === free1) {
    let tmp27;
    let total1;
    const tmp25 = cResult[12];
    if (kvDatabaseUsage != null) {
      total1 = kvDatabaseUsage.total;
    }
    if (tmp25 === total1) {
      tmp27 = cResult[13];
    }
    const roots = report.roots;
    const mapped = roots.map(tmp27);
    let free2;
    if (kvDatabaseUsage != null) {
      free2 = kvDatabaseUsage.free;
    }
    cResult[7] = free2;
    let total2;
    if (kvDatabaseUsage != null) {
      total2 = kvDatabaseUsage.total;
    }
    cResult[8] = total2;
    cResult[9] = report.roots;
    cResult[10] = mapped;
    tmp22 = mapped;
  }
  let free3;
  if (kvDatabaseUsage != null) {
    free3 = kvDatabaseUsage.free;
  }
  cResult[11] = free3;
  let total3;
  if (kvDatabaseUsage != null) {
    total3 = kvDatabaseUsage.total;
  }
  const fn = function k(root) {
    let free;
    let intl;
    let intl2;
    let total;
    root = root.root;
    let tmp4 = first[root];
    const bytes = root.bytes;
    const Fragment = react.Fragment;
    if (tmp4 == null) {
      tmp4 = root;
    }
    const children = [metroRequire(closure_10, { label: tmp4, bytes }), ];
    let tmpResult = root === str;
    if (tmpResult) {
      const obj = { label: intl.string(intl24.t["He+1tx"]), bytes: total, indented: true };
      intl = intl24.intl;
      total = undefined;
      const tmp6 = metroImportAll;
      if (kvDatabaseUsage != null) {
        total = tmp9.total;
      }
      const items1 = [metroRequire(closure_10, obj), ];
      const obj2 = { label: intl2.string(intl24.t.UD3OKX), bytes: free, indented: true };
      intl2 = tmp7(1126).intl;
      free = undefined;
      if (kvDatabaseUsage != null) {
        free = tmp9.free;
      }
      const obj3 = { children: items1 };
      items1[1] = metroRequire(closure_10, obj2);
      tmpResult = tmp(tmp6, obj3);
    }
    children[1] = tmpResult;
    return metroImportDefault(Fragment, { children }, root);
  };
  cResult[12] = total3;
  cResult[13] = fn;
  tmp27 = fn;
}) : (function DiskUsageResults(metricKitSize) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
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
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let obj8;
  let report;
  ({ report, kvDatabaseUsage: require } = metricKitSize);
  let str;
  let obj = { caches: intl.string(require("intl").t["2CKnsF"]), files: intl2.string(require("intl").t["8Hvr3+"]), databases: intl3.string(require("intl").t["9paF2r"]), shared_preferences: intl4.string(require("intl").t["Y9/ijr"]), no_backup: intl5.string(require("intl").t["lZWCZ+"]), code_cache: intl6.string(require("intl").t.GN6kqM), external_files: intl7.string(require("intl").t["6Ej9W0"]), external_caches: intl8.string(require("intl").t.ZmaptE), documents: intl9.string(require("intl").t.aE3Wbw), tmp: intl10.string(require("intl").t.UQsNEK), application_support: intl11.string(require("intl").t.DGQvlY), webkit: intl12.string(require("intl").t.aIcsfw), library_other: intl13.string(require("intl").t.U2f1ef), container_other: intl14.string(require("intl").t.ZduI7f), app_group: intl15.string(require("intl").t.rManeQ), share_extension: intl16.string(require("intl").t.BEL9MJ), notification_service_extension: intl17.string(require("intl").t.V46Edz), broadcast_upload_extension: intl18.string(require("intl").t.BhYGtj), lockscreen_widget_extension: intl19.string(require("intl").t.toGFBn) };
  const tmp = require;
  metricKitSize = metricKitSize.metricKitSize;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  intl3 = require("intl").intl;
  intl4 = require("intl").intl;
  intl5 = require("intl").intl;
  intl6 = require("intl").intl;
  intl7 = require("intl").intl;
  intl8 = require("intl").intl;
  intl9 = require("intl").intl;
  intl10 = require("intl").intl;
  intl11 = require("intl").intl;
  intl12 = require("intl").intl;
  intl13 = require("intl").intl;
  intl14 = require("intl").intl;
  intl15 = require("intl").intl;
  intl16 = require("intl").intl;
  intl17 = require("intl").intl;
  intl18 = require("intl").intl;
  intl19 = require("intl").intl;
  let obj2 = require("PlatformUtils");
  str = "files";
  if (obj2.isIOS()) {
    str = "caches";
  }
  let obj3 = { spacing: obj(tmp2[5]).space.PX_16, children: items };
  const Stack = tmp(tmp2[14]).Stack;
  let tmp4 = closure_6;
  const obj4 = { label: intl20.string(tmp(str[9]).t.O20zQi), bytes: report.totalMeasuredBytes };
  intl20 = tmp(tmp2[9]).intl;
  items = [closure_6(closure_10, obj4), , ];
  let tmpResult = tmp(tmp2[15]);
  let isIOSResult = tmpResult.isIOS();
  const tmp5 = closure_10;
  if (isIOSResult) {
    const obj5 = { label: intl21.string(tmp(str[9]).t.VQKK5O), bytes: metricKitSize };
    intl21 = tmp(tmp2[9]).intl;
    isIOSResult = tmp4(tmp5, obj5);
  }
  items[1] = isIOSResult;
  const Stack2 = tmp(tmp2[14]).Stack;
  const obj6 = { variant: "heading-sm/semibold", children: intl22.string(tmp(str[9]).t.CoudPr) };
  const Heading = tmp(tmp2[12]).Heading;
  intl22 = tmp(tmp2[9]).intl;
  let items1 = [tmp4(Heading, obj6), , ];
  const roots = report.roots;
  items1[1] = roots.map((root) => {
    let free;
    let intl;
    let intl2;
    let total;
    root = root.root;
    let tmp4 = obj[root];
    const bytes = root.bytes;
    const Fragment = react.Fragment;
    if (tmp4 == null) {
      tmp4 = root;
    }
    const children = [metroRequire(closure_10, { label: tmp4, bytes }), ];
    let tmpResult = root === str;
    if (tmpResult) {
      obj = { label: intl.string(intl24.t["He+1tx"]), bytes: total, indented: true };
      intl = intl24.intl;
      total = undefined;
      const tmp6 = metroImportAll;
      if (require != null) {
        total = tmp9.total;
      }
      const items1 = [metroRequire(closure_10, obj), ];
      const obj2 = { label: intl2.string(intl24.t.UD3OKX), bytes: free, indented: true };
      intl2 = tmp7(1126).intl;
      free = undefined;
      if (require != null) {
        free = tmp9.free;
      }
      const obj3 = { children: items1 };
      items1[1] = metroRequire(closure_10, obj2);
      tmpResult = tmp(tmp6, obj3);
    }
    children[1] = tmpResult;
    return metroImportDefault(Fragment, { children }, root);
  });
  const complete = report.complete;
  let tmp4Result = !complete;
  if (complete) {
    tmp4Result = report.errorCount > 0;
  }
  if (!tmp4Result) {
    tmp4Result = report.unmeasuredRootCount > 0;
  }
  if (tmp4Result) {
    const obj7 = { variant: "text-sm/normal", color: "text-feedback-warning", children: intl23.formatToPlainString(tmp(str[9]).t.kt7tAT, obj8) };
    const Text = tmp(tmp2[12]).Text;
    intl23 = tmp(tmp2[9]).intl;
    obj8 = { errors: null, unavailable: null };
    ({ errorCount: obj9.errors, unmeasuredRootCount: obj9.unavailable } = report);
    tmp4Result = tmp4(Text, obj7);
  }
  items1[2] = tmp4Result;
  items[2] = closure_7(Stack2, { children: items1 });
  return closure_7(Stack, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CacheActionsDiskUsageSection(arg0) {
  let first;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let onDiagnosticsBusyChange;
  let state;
  let tmp10;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(20);
  ({ state, onDiagnosticsBusyChange } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-md/semibold", children: intl.string(intl24.t.m8BOpo) };
    const Heading = tmp(5087).Heading;
    intl = tmp(1126).intl;
    const tmp6 = metroRequire(Heading, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== state.status) {
    let tmp8 = "loading" === state.status;
    if (tmp8) {
      const obj3 = { variant: "text-sm/normal", children: intl2.string(intl24.t.Ynmbie) };
      const Text = tmp(5087).Text;
      intl2 = tmp(1126).intl;
      tmp8 = metroRequire(Text, obj3);
    }
    cResult[1] = state.status;
    cResult[2] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== state.status) {
    let tmp11 = "error" === state.status;
    if (tmp11) {
      const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl3.string(intl24.t["hj/3qI"]) };
      const Text2 = tmp(5087).Text;
      intl3 = tmp(1126).intl;
      tmp11 = metroRequire(Text2, obj4);
    }
    cResult[3] = state.status;
    cResult[4] = tmp11;
    tmp10 = tmp11;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === state.kvDatabaseUsage) {
    if (cResult[6] === state.metricKitSize) {
      if (cResult[7] === state.report) {
        let tmp13;
        if (cResult[8] === state.status) {
          tmp13 = cResult[9];
        }
        if (cResult[10] === tmp7) {
          if (cResult[11] === tmp10) {
            let tmp17;
            if (cResult[12] === tmp13) {
              tmp17 = cResult[13];
            }
            if (cResult[14] === onDiagnosticsBusyChange) {
              let tmp20;
              if (cResult[15] === state.status) {
                tmp20 = cResult[16];
              }
              if (cResult[17] === tmp17) {
                let tmp24;
                if (cResult[18] === tmp20) {
                  tmp24 = cResult[19];
                }
                return tmp24;
              }
              const obj6 = { children: items };
              items = [first, tmp17, tmp20];
              const tmp26 = metroImportDefault(Stack_Stack.Stack, obj6);
              cResult[17] = tmp17;
              cResult[18] = tmp20;
              cResult[19] = tmp26;
              tmp24 = tmp26;
            }
            let isIOSResult = "success" === state.status;
            if (isIOSResult) {
              const tmpResult = PlatformUtils;
              isIOSResult = tmpResult.isIOS();
            }
            if (isIOSResult) {
              const obj7 = { onBusyChange: onDiagnosticsBusyChange };
              isIOSResult = metroRequire(CacheActionsStorageDiagnosticsDefault, obj7);
            }
            cResult[14] = onDiagnosticsBusyChange;
            cResult[15] = state.status;
            cResult[16] = isIOSResult;
            tmp20 = isIOSResult;
          }
        }
        const obj8 = { children: items1 };
        items1 = [tmp7, tmp10, tmp13];
        const tmp19 = metroImportDefault(Card_Card.Card, obj8);
        cResult[10] = tmp7;
        cResult[11] = tmp10;
        cResult[12] = tmp13;
        cResult[13] = tmp19;
        tmp17 = tmp19;
      }
    }
  }
  let tmp14 = "success" === state.status;
  if (tmp14) {
    const obj9 = { report: null, metricKitSize: null, kvDatabaseUsage: null };
    ({ report: obj5.report, metricKitSize: obj5.metricKitSize, kvDatabaseUsage: obj5.kvDatabaseUsage } = state);
    tmp14 = metroRequire(closure_11, obj9);
  }
  cResult[5] = state.kvDatabaseUsage;
  cResult[6] = state.metricKitSize;
  cResult[7] = state.report;
  cResult[8] = state.status;
  cResult[9] = tmp14;
  tmp13 = tmp14;
}) : (function CacheActionsDiskUsageSection(state) {
  let intl;
  let intl2;
  let intl3;
  state = state.state;
  const onDiagnosticsBusyChange = state.onDiagnosticsBusyChange;
  const Stack = Stack_Stack.Stack;
  const obj = { variant: "heading-md/semibold", children: intl.string(intl24.t.m8BOpo) };
  const Heading = Text_Text.Heading;
  intl = intl24.intl;
  const children = [metroRequire(Heading, obj), , ];
  let tmp4Result = "loading" === state.status;
  const Card = Card_Card.Card;
  if (tmp4Result) {
    const obj2 = { variant: "text-sm/normal", children: intl2.string(intl24.t.Ynmbie) };
    const Text = tmp2(5087).Text;
    intl2 = tmp2(1126).intl;
    tmp4Result = tmp4(Text, obj2);
  }
  const items1 = [tmp4Result, , ];
  let tmp4Result3 = "error" === state.status;
  if (tmp4Result3) {
    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl3.string(intl24.t["hj/3qI"]) };
    const Text2 = tmp2(5087).Text;
    intl3 = tmp2(1126).intl;
    tmp4Result3 = tmp4(Text2, obj3);
  }
  items1[1] = tmp4Result3;
  let tmp4Result4 = "success" === state.status;
  if (tmp4Result4) {
    const obj5 = { report: null, metricKitSize: null, kvDatabaseUsage: null };
    ({ report: obj4.report, metricKitSize: obj4.metricKitSize, kvDatabaseUsage: obj4.kvDatabaseUsage } = state);
    tmp4Result4 = tmp4(closure_11, obj5);
  }
  items1[2] = tmp4Result4;
  children[1] = metroImportDefault(Card, { children: items1 });
  let isIOSResult = "success" === state.status;
  if (isIOSResult) {
    const tmp2Result = PlatformUtils;
    isIOSResult = tmp2Result.isIOS();
  }
  if (isIOSResult) {
    const obj6 = { onBusyChange: onDiagnosticsBusyChange };
    isIOSResult = tmp4(CacheActionsStorageDiagnosticsDefault, obj6);
  }
  children[2] = isIOSResult;
  return metroImportDefault(Stack, { children });
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsDiskUsageSection.tsx");

export default tmp3;
export const useDiskUsageMeasurement = function useDiskUsageMeasurement() {
  let status;
  let tmp2;
  let obj = function _handleCalculateSize() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp43;
        let c3;
        try {
          let closure_0;
          let database;
          c5 = 2;
          if (0 === report) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = undefined;
              ref = undefined;
              tmp43 = undefined;
              database = undefined;
              report = undefined;
              if (!ref.current) {
                if (null != ref(tmp43[6]).calculateSize) {
                  ref.current = true;
                  require({ status: "loading" });
                  c3 = 2;
                  const items = [, ];
                  const tmp40Result = ref(tmp43[6]);
                  items[0] = tmp40Result.calculateSize();
                  const tmp40Result2 = ref(tmp43[7]);
                  const databaseResult = tmp40Result2.database();
                  let catchPromise;
                  if (databaseResult != null) {
                    const fsInfoResult = databaseResult.fsInfo();
                    catchPromise = fsInfoResult.catch(() => null);
                  }
                  items[1] = catchPromise;
                  report = 3;
                  c5 = 1;
                  const obj4 = { value: all(items), done: false };
                  return obj4;
                }
              }
            }
          } else if (1 === report) {
            c3 = 0;
            closure_129_1.current = false;
            throw tmp43;
          } else {
            if (2 === report) {
              c3 = 1;
              closure_129_0({ status: "error" });
              const AccessibilityAnnouncer2 = closure_0(tmp43[8]).AccessibilityAnnouncer;
              const announce2 = AccessibilityAnnouncer2.announce;
              const intl2 = closure_0(tmp43[9]).intl;
              announce2(intl2.string(closure_0(tmp43[9]).t["hj/3qI"]), "polite");
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_1.current = false;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              ref = report(closure_0, 2);
              tmp43 = ref[0];
              database = ref[1];
              if (null == tmp43.report) {
                const _Error2 = Error;
                const self3 = this;
                const self4 = this;
                const error = new Error("Disk usage report was not returned");
                throw error;
              } else {
                const _JSON = JSON;
                report = JSON.parse(tmp43.report);
                let roots;
                const _Array = Array;
                if (report != null) {
                  roots = report.roots;
                }
                if (isArray(roots)) {
                  if (typeof report.totalMeasuredBytes === "number") {
                    const obj5 = { status: "success", report, metricKitSize: tmp43.metricKitSize, kvDatabaseUsage: database };
                    database = undefined;
                    const tmp62 = closure_129_0;
                    if (database != null) {
                      database = database.database;
                    }
                    tmp62(obj5);
                    const AccessibilityAnnouncer = closure_0(tmp43[8]).AccessibilityAnnouncer;
                    const announce = AccessibilityAnnouncer.announce;
                    const intl = closure_0(tmp43[9]).intl;
                    announce(intl.string(closure_0(tmp43[9]).t["lzJM+Z"]), "polite");
                    c3 = 1;
                  }
                }
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error1 = new Error("Unsupported disk usage report");
                throw error1;
              }
            }
            c3 = 0;
            closure_129_1.current = false;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp43) {
          if (0 === c3) {
            c5 = 3;
            throw tmp43;
          } else if (1 === tmp45) {
            report = 1;
          } else {
            report = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, require] = tmp;
  let closure_1 = react.useRef(false);
  obj = {
    diskUsageState: tmp2,
    isCalculating: "loading" === status,
    handleCalculateSize() {
      return obj(...arguments);
    }
  };
  status = undefined;
  if (tmp2 != null) {
    status = tmp2.status;
  }
  return obj;
};
