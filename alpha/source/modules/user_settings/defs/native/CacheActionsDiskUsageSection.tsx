// Module ID: 17554
// Function ID: 17555
// Name: CacheActionsDiskUsageSection
// Dependencies: [5, 32, 19, 21, 5014, 575, 17555, 4892, 5023, 1113, 6027, 5624, 6451, 1375, 6977, 17557, 2]
// Exports: default, useDiskUsageMeasurement

// Module 17554 (CacheActionsDiskUsageSection)
import nativeDefault from "native" /* 575 */;
import intl24 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import Text_Text from "Text/Text" /* 5624 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import FileSizeUtils from "FileSizeUtils" /* 6451 */;
import Card_Card from "Card/Card" /* 6977 */;
import CacheActionsStorageDiagnosticsDefault from "CacheActionsStorageDiagnostics" /* 17557 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, ref, root;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function SizeRow(label) {
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
  const Text = tmp2(5624).Text;
  const tmp = metroImportDefault;
  if (null != bytes) {
    const tmp2Result = FileSizeUtils;
    formatKbSizeResult = tmp2Result.formatKbSize(bytes);
  } else {
    const intl = tmp2(1113).intl;
    formatKbSizeResult = intl.string(tmp2(1113).t.Yrz9rv);
  }
  items[1] = metroRequire(Text, obj3);
  return tmp(Stack, obj);
}
function DiskUsageResults(metricKitSize) {
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
  const Stack = tmp(tmp2[10]).Stack;
  let tmp4 = closure_6;
  const obj4 = { label: intl20.string(tmp(str[9]).t.O20zQi), bytes: report.totalMeasuredBytes };
  intl20 = tmp(tmp2[9]).intl;
  items = [closure_6(SizeRow, obj4), , ];
  let tmpResult = tmp(tmp2[13]);
  let isIOSResult = tmpResult.isIOS();
  const tmp5 = SizeRow;
  if (isIOSResult) {
    const obj5 = { label: intl21.string(tmp(str[9]).t.VQKK5O), bytes: metricKitSize };
    intl21 = tmp(tmp2[9]).intl;
    isIOSResult = tmp4(tmp5, obj5);
  }
  items[1] = isIOSResult;
  const Stack2 = tmp(tmp2[10]).Stack;
  const obj6 = { variant: "heading-sm/semibold", children: intl22.string(tmp(str[9]).t.CoudPr) };
  const Heading = tmp(tmp2[11]).Heading;
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
    const children = [metroRequire(SizeRow, { label: tmp4, bytes }), ];
    let tmpResult = root === str;
    if (tmpResult) {
      obj = { label: intl.string(intl24.t["He+1tx"]), bytes: total, indented: true };
      intl = intl24.intl;
      total = undefined;
      const tmp6 = metroImportAll;
      if (require != null) {
        total = tmp9.total;
      }
      const items1 = [metroRequire(SizeRow, obj), ];
      const obj2 = { label: intl2.string(intl24.t.UD3OKX), bytes: free, indented: true };
      intl2 = tmp7(1113).intl;
      free = undefined;
      if (require != null) {
        free = tmp9.free;
      }
      const obj3 = { children: items1 };
      items1[1] = metroRequire(SizeRow, obj2);
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
    const Text = tmp(tmp2[11]).Text;
    intl23 = tmp(tmp2[9]).intl;
    obj8 = { errors: null, unavailable: null };
    ({ errorCount: obj9.errors, unmeasuredRootCount: obj9.unavailable } = report);
    tmp4Result = tmp4(Text, obj7);
  }
  items1[2] = tmp4Result;
  items[2] = closure_7(Stack2, { children: items1 });
  return closure_7(Stack, obj3);
}
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let obj = { label: { flex: 1 }, nestedLabel: obj2, value: { flexShrink: 1 } };
obj2 = { flex: 1, paddingLeft: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsDiskUsageSection.tsx");

export default function CacheActionsDiskUsageSection(state) {
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
    const Text = tmp2(5624).Text;
    intl2 = tmp2(1113).intl;
    tmp4Result = tmp4(Text, obj2);
  }
  const items1 = [tmp4Result, , ];
  let tmp4Result3 = "error" === state.status;
  if (tmp4Result3) {
    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: intl3.string(intl24.t["hj/3qI"]) };
    const Text2 = tmp2(5624).Text;
    intl3 = tmp2(1113).intl;
    tmp4Result3 = tmp4(Text2, obj3);
  }
  items1[1] = tmp4Result3;
  let tmp4Result4 = "success" === state.status;
  if (tmp4Result4) {
    const obj5 = { report: null, metricKitSize: null, kvDatabaseUsage: null };
    ({ report: obj4.report, metricKitSize: obj4.metricKitSize, kvDatabaseUsage: obj4.kvDatabaseUsage } = state);
    tmp4Result4 = tmp4(DiskUsageResults, obj5);
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
};
export function useDiskUsageMeasurement() {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
}
