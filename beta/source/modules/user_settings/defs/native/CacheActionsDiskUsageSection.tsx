// Module ID: 15123
// Function ID: 15124
// Name: CacheActionsDiskUsageSection
// Dependencies: [5, 32, 19, 21, 4836, 15124, 4541, 1115, 5279, 576, 4832, 4731, 5919, 15125, 2]
// Exports: default, useDiskUsageMeasurement

// Module 15123 (CacheActionsDiskUsageSection)
import nativeDefault from "native" /* 576 */;
import intl17 from "intl" /* 1115 */;
import FileSizeUtils from "FileSizeUtils" /* 4731 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import Card_Card from "Card/Card" /* 5919 */;
import DiskUsageManagerDefault from "DiskUsageManager" /* 15124 */;
import CacheActionsStorageDiagnosticsDefault from "CacheActionsStorageDiagnostics" /* 15125 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, c5, closure_2, root;

let metroImportDefault;
let metroRequire;
function SizeRow(bytes) {
  let formatKbSizeResult;
  let items;
  bytes = bytes.bytes;
  const label = bytes.label;
  const iter = closure_8();
  const obj = { direction: "horizontal", justify: "space-between", spacing: nativeDefault.space.PX_16, children: items };
  const Stack = Stack_Stack.Stack;
  items = [, ];
  const obj2 = { variant: "text-sm/normal", color: "text-subtle", style: iter.label, children: label };
  items[0] = metroRequire(Text_Text.Text, obj2);
  const obj3 = { variant: "text-sm/semibold", tabularNumbers: true, style: iter.value, children: formatKbSizeResult };
  const Text = Text_Text.Text;
  const tmp = metroImportDefault;
  const tmp4 = metroRequire;
  if (null != bytes) {
    const tmp2Result = FileSizeUtils;
    formatKbSizeResult = tmp2Result.formatKbSize(bytes);
  } else {
    const intl = tmp2(1115).intl;
    formatKbSizeResult = intl.string(tmp2(1115).t.Yrz9rv);
  }
  items[1] = tmp4(Text, obj3);
  return tmp(Stack, obj);
}
function DiskUsageResults(report) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let obj13;
  report = report.report;
  let obj;
  obj = { caches: intl.string(obj(1115).t["2CKnsF"]), documents: intl2.string(obj(1115).t.aE3Wbw), tmp: intl3.string(obj(1115).t.UQsNEK), application_support: intl4.string(obj(1115).t.DGQvlY), webkit: intl5.string(obj(1115).t.aIcsfw), library_other: intl6.string(obj(1115).t.U2f1ef), container_other: intl7.string(obj(1115).t.ZduI7f), app_group: intl8.string(obj(1115).t.rManeQ), share_extension: intl9.string(obj(1115).t.BEL9MJ), notification_service_extension: intl10.string(obj(1115).t.V46Edz), broadcast_upload_extension: intl11.string(obj(1115).t.BhYGtj), lockscreen_widget_extension: intl12.string(obj(1115).t.toGFBn) };
  let tmp = obj;
  let tmp2 = dependencyMap;
  const metricKitSize = report.metricKitSize;
  intl = obj(1115).intl;
  intl2 = obj(1115).intl;
  intl3 = obj(1115).intl;
  intl4 = obj(1115).intl;
  intl5 = obj(1115).intl;
  intl6 = obj(1115).intl;
  intl7 = obj(1115).intl;
  intl8 = obj(1115).intl;
  intl9 = obj(1115).intl;
  intl10 = obj(1115).intl;
  intl11 = obj(1115).intl;
  intl12 = obj(1115).intl;
  const obj2 = { spacing: nativeDefault.space.PX_16, children: items };
  const Stack = obj(5279).Stack;
  const obj3 = { label: intl13.string(obj(1115).t.O20zQi), bytes: report.totalMeasuredBytes };
  intl13 = obj(1115).intl;
  items = [closure_6(SizeRow, obj3), , ];
  const obj4 = { label: intl14.string(obj(1115).t.VQKK5O), bytes: metricKitSize };
  intl14 = obj(1115).intl;
  items[1] = closure_6(SizeRow, obj4);
  const Stack2 = obj(5279).Stack;
  const obj5 = { variant: "heading-sm/semibold", children: intl15.string(obj(1115).t.CoudPr) };
  const Heading = obj(4832).Heading;
  intl15 = obj(1115).intl;
  const items1 = [closure_6(Heading, obj5), , ];
  const roots = report.roots;
  items1[1] = roots.map((root) => {
    root = root.root;
    let label = obj[root];
    const bytes = root.bytes;
    const tmp = metroRequire;
    const tmp2 = SizeRow;
    if (label == null) {
      label = root;
    }
    return tmp(tmp2, { label, bytes }, root);
  });
  const complete = report.complete;
  let tmp4Result = !complete;
  const tmp4 = closure_6;
  if (complete) {
    tmp4Result = report.errorCount > 0;
  }
  if (!tmp4Result) {
    tmp4Result = report.unmeasuredRootCount > 0;
  }
  if (tmp4Result) {
    const obj6 = { variant: "text-sm/normal", color: "text-feedback-warning", children: intl16.formatToPlainString(tmp(1115).t.kt7tAT, obj13) };
    const Text = tmp(4832).Text;
    intl16 = tmp(1115).intl;
    obj13 = { errors: null, unavailable: null };
    ({ errorCount: obj7.errors, unmeasuredRootCount: obj7.unavailable } = report);
    tmp4Result = tmp4(Text, obj6);
  }
  items1[2] = tmp4Result;
  items[2] = closure_7(Stack2, { children: items1 });
  return closure_7(Stack, obj2);
}
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ label: { flex: 1 }, value: { flexShrink: 1 } });
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsDiskUsageSection.tsx");

export default function CacheActionsDiskUsageSection(state) {
  let intl;
  let intl2;
  let intl3;
  state = state.state;
  const onDiagnosticsBusyChange = state.onDiagnosticsBusyChange;
  const Stack = Stack_Stack.Stack;
  const obj = { variant: "heading-md/semibold", children: intl.string(intl17.t.m8BOpo) };
  const Heading = Text_Text.Heading;
  intl = intl17.intl;
  const children = [metroRequire(Heading, obj), , ];
  let tmp4Result = "loading" === state.status;
  const Card = Card_Card.Card;
  if (tmp4Result) {
    const obj2 = { variant: "text-sm/normal", children: intl2.string(intl17.t.Ynmbie) };
    const Text = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    tmp4Result = tmp4(Text, obj2);
  }
  const items1 = [tmp4Result, , ];
  let tmp4Result4 = "error" === state.status;
  if (tmp4Result4) {
    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl3.string(intl17.t["hj/3qI"]) };
    const Text2 = tmp2(4832).Text;
    intl3 = tmp2(1115).intl;
    tmp4Result4 = tmp4(Text2, obj3);
  }
  items1[1] = tmp4Result4;
  let tmp4Result5 = "success" === state.status;
  if (tmp4Result5) {
    const obj5 = { report: null, metricKitSize: null };
    ({ report: obj4.report, metricKitSize: obj4.metricKitSize } = state);
    tmp4Result5 = tmp4(DiskUsageResults, obj5);
  }
  items1[2] = tmp4Result5;
  children[1] = metroImportDefault(Card, { children: items1 });
  let tmp4Result6 = "success" === state.status && null != DiskUsageManagerDefault.uploadStorageDiagnostics;
  if (tmp4Result6) {
    const obj9 = { onBusyChange: onDiagnosticsBusyChange };
    tmp4Result6 = tmp4(CacheActionsStorageDiagnosticsDefault, obj9);
  }
  children[2] = tmp4Result6;
  return metroImportDefault(Stack, { children });
};
export const useDiskUsageMeasurement = function useDiskUsageMeasurement() {
  let status;
  let tmp2;
  let obj = function _handleCalculateSize() {
    let ref;
    obj = _asyncToGenerator(async function(arg0, value) {
      let tmp30Result;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          let report;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = undefined;
              report = undefined;
              if (!ref.current) {
                const tmp30 = report;
                if (null != report(closure_2[5]).calculateSize) {
                  ref.current = true;
                  require({ status: "loading" });
                  c3 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj4 = { value: tmp30Result.calculateSize(), done: false };
                  tmp30Result = tmp30(closure_2[5]);
                  return obj4;
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_1.current = false;
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              closure_129_0({ status: "error" });
              const AccessibilityAnnouncer = closure_0(closure_2[6]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = closure_0(closure_2[7]).intl;
              announce(intl.string(closure_0(closure_2[7]).t["hj/3qI"]), "polite");
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
              if (null == closure_0.report) {
                const _Error2 = Error;
                const self3 = this;
                const self4 = this;
                const error = new Error("Disk usage report was not returned");
                throw error;
              } else {
                const _JSON = JSON;
                report = JSON.parse(closure_0.report);
                let roots;
                const _Array = Array;
                if (report != null) {
                  roots = report.roots;
                }
                if (isArray(roots)) {
                  if (typeof report.totalMeasuredBytes === "number") {
                    const obj5 = { status: "success", report, metricKitSize: closure_0.metricKitSize };
                    closure_129_0(obj5);
                    const AccessibilityAnnouncer2 = closure_0(closure_2[6]).AccessibilityAnnouncer;
                    const announce2 = AccessibilityAnnouncer2.announce;
                    const intl2 = closure_0(closure_2[7]).intl;
                    announce2(intl2.string(closure_0(closure_2[7]).t["lzJM+Z"]), "polite");
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
          return { value: "HermesInternal", done: null };
        } catch (tmp36) {
          closure_2 = tmp36;
          if (0 === c3) {
            c5 = 3;
            throw tmp36;
          } else if (1 === tmp38) {
            c4 = 1;
          } else {
            c4 = 2;
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
