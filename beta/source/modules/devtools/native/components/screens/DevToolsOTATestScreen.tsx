// Module ID: 15213
// Function ID: 15214
// Name: DevToolsOTATestScreen
// Dependencies: [5, 32, 19, 17, 1085, 21, 4836, 576, 6571, 6570, 4832, 11269, 4800, 5279, 5999, 5917, 15115, 6610, 7336, 4781, 15214, 2]
// Exports: default

// Module 15213 (DevToolsOTATestScreen)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 4832 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import BundleUpdaterDefault from "BundleUpdater" /* 11269 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, c2, c3;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function OtaVerificationActionSheet(result) {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items6;
  let verificationFailure;
  result = result.result;
  const tmp = closure_10();
  _require = tmp;
  const totalFileCount = result.totalFileCount;
  let obj = { header: closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "OTA Verification Result" }), children: items1 };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  const obj2 = { style: tmp.verificationLine, children: items };
  items = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Has OTA Applied" }), ];
  let str = "No";
  let str2 = "No";
  const Text = require("Text/Text").Text;
  if (result.hasOtaApplied) {
    str2 = "Yes";
  }
  items[1] = closure_8(Text, { variant: "text-md/normal", children: str2 });
  items1 = [closure_9(closure_7, obj2), , , , ];
  const obj3 = { style: tmp.verificationLine, children: items2 };
  items2 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Has Local Copy" }), ];
  let str3 = "--";
  const Text2 = tmp3(4832).Text;
  if (null != result.hasLocalCopy) {
    let str4 = str;
    if (result.hasLocalCopy) {
      str4 = "Yes";
    }
    str3 = str4;
  }
  items2[1] = closure_8(Text2, { variant: "text-md/normal", children: str3 });
  items1[1] = closure_9(closure_7, obj3);
  const obj4 = { style: tmp.verificationLine, children: items3 };
  items3 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "OTA is Valid" }), ];
  const Text3 = tmp3(4832).Text;
  if (result.isValid) {
    str = "Yes";
  }
  items3[1] = closure_8(Text3, { variant: "text-md/normal", children: str });
  items1[2] = closure_9(closure_7, obj4);
  let tmp2Result = null;
  if (null !== totalFileCount) {
    const obj5 = { style: tmp.verificationLine, children: items4 };
    items4 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "File Counts" }), ];
    const items5 = [result.totalFileCount, " files. ", , , , ];
    const successes = result.successes;
    let length;
    const Text4 = tmp3(4832).Text;
    if (successes != null) {
      length = successes.length;
    }
    items5[2] = length;
    items5[3] = " successes, ";
    const failures = result.failures;
    let length1;
    if (failures != null) {
      length1 = failures.length;
    }
    const obj6 = { variant: "text-md/normal", children: items5 };
    items5[4] = length1;
    items5[5] = " failures.";
    items4[1] = closure_9(Text4, obj6);
    tmp2Result = tmp2(tmp6, obj5);
  }
  items1[3] = tmp2Result;
  let tmp2Result2 = null;
  if (result.failures.length > 0) {
    const obj7 = { style: tmp.verificationLine, children: items6 };
    items6 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Failures" }), ];
    const failures1 = result.failures;
    items6[1] = failures1.map((children) => {
      const obj = { variant: "text-md/normal", style: verificationFailure.verificationFailure, children };
      return metroImportAll(Text_Text.Text, obj, children);
    });
    tmp2Result2 = tmp2(tmp6, obj7);
  }
  items1[4] = tmp2Result2;
  return closure_9(BottomSheet, obj);
}
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, contentContainer: obj3, verificationLine: obj4, verificationFailure: { fontFamily: Fonts.CODE_NORMAL } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx");

export default function DevToolsOTATestScreen() {
  let Stack;
  let closure_1;
  let closure_4;
  let first1;
  let items;
  let obj11;
  let str2;
  let str3;
  let subLabel;
  let tmp11;
  let tmp5;
  let tmp7;
  let obj = function _verifyFiles() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let result;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              result = undefined;
              react(true);
              const obj2 = tmp4(c2[11]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj2.verifyOtaFiles(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            result = value;
            closure_129_5(false);
            const obj7 = { default: closure_1_11 };
            const obj8 = { result };
            const obj6 = tmp4(c2[12]);
            obj6.openLazy(Promise.resolve(obj7), "OtaVerificationActionSheet", obj8);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          c3 = 3;
          throw tmp9;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_10();
  [subLabel, importDefault] = react.useState("");
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, dependencyMap] = tmp4;
  [tmp7, _asyncToGenerator] = _slicedToArray(react.useState(null), 2);
  const tmp6 = _slicedToArray(react.useState(null), 2);
  [first1, _slicedToArray] = react.useState("");
  const tmp10 = _slicedToArray(react.useState(false), 2);
  [tmp11, react] = tmp10;
  const effect = react.useEffect(() => {
    obj = BundleUpdaterDefault;
    const otaRootPath = obj.getOtaRootPath();
    otaRootPath.then(closure_1);
    const obj2 = BundleUpdaterDefault;
    const manifestInfo = obj2.getManifestInfo();
    manifestInfo.then(dependencyMap);
    const obj3 = BundleUpdaterDefault;
    const buildOverrideCookieContents = obj3.getBuildOverrideCookieContents();
    buildOverrideCookieContents.then(_asyncToGenerator);
    const obj4 = BundleUpdaterDefault;
    const otaStatus = obj4.getOtaStatus();
    otaStatus.then(closure_4);
  }, []);
  obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: tmp15(Stack, obj11) };
  Stack = subLabel(5279).Stack;
  let obj2 = { title: "OTA Status", hasIcons: true, children: items };
  const TableRowGroup = subLabel(5999).TableRowGroup;
  let obj3 = { label: "Status", subLabel: first1, icon: closure_8(subLabel(15115).WrenchIcon, {}) };
  const TableRow = subLabel(5917).TableRow;
  items = [closure_8(TableRow, obj3), ];
  let obj4 = {
    label: "Root Path (tap to copy)",
    subLabel,
    onPress: function copyRootPath() {
      obj = ClipboardUtils;
      obj.copy(first);
    }
  };
  items[1] = closure_8(subLabel(5917).TableRow, obj4);
  const items1 = [closure_9(TableRowGroup, obj2), , , ];
  const TableRowGroup2 = subLabel(5999).TableRowGroup;
  let str;
  const TableRow2 = subLabel(5917).TableRow;
  const tmp14 = obj;
  if (tmp5 != null) {
    str = tmp5.source;
  }
  if (str == null) {
    str = "Unknown";
  }
  let obj5 = { label: "Manifest Source", subLabel: str, icon: tmp13(tmp16(15115).WrenchIcon, {}) };
  const items2 = [tmp13(TableRow2, obj5), ];
  let obj6 = { icon: tmp13(tmp16(7336).PaperIcon, {}), label: str2 };
  const TableRow3 = tmp16(5917).TableRow;
  str2 = "{}";
  if (null != tmp5) {
    let metadata = tmp5.metadata;
    const _JSON = JSON;
    if (metadata == null) {
      metadata = {};
    }
    str2 = stringify(metadata, null, 2);
  }
  let obj7 = { title: "Manifest", hasIcons: true, children: items2 };
  items2[1] = closure_8(TableRow3, obj6);
  items1[1] = closure_9(TableRowGroup2, obj7);
  const TableRowGroup3 = tmp16(5999).TableRowGroup;
  let obj8 = { icon: tmp13(tmp16(15115).WrenchIcon, {}), label: "Is cookie set?", subLabel: str3 };
  const TableRow4 = tmp16(5917).TableRow;
  str3 = "Yes";
  if (null == tmp7) {
    str3 = "No";
  }
  const items3 = [tmp13(TableRow4, obj8), ];
  let tmp13Result = null != tmp7;
  if (tmp13Result) {
    const obj9 = { icon: closure_8(subLabel(15115).WrenchIcon, {}), label: JSON.stringify(tmp7, null, 2) };
    const TableRow5 = tmp16(5917).TableRow;
    const _JSON2 = JSON;
    tmp13Result = tmp13(TableRow5, obj9);
  }
  items3[1] = tmp13Result;
  items1[2] = closure_9(TableRowGroup3, { title: "Build Override Cookie", hasIcons: true, children: items3 });
  const TableRowGroup4 = tmp16(5999).TableRowGroup;
  const obj10 = { label: "Check for Update & Reload", icon: closure_8(subLabel(4781).DownloadIcon, {}), onPress: BundleUpdaterDefault.checkForUpdateAndReload };
  const TableRow6 = tmp16(5917).TableRow;
  const items4 = [tmp13(TableRow6, obj10), ];
  let str4 = "Verify content hashes for all app files";
  const TableRow7 = tmp16(5917).TableRow;
  if (tmp11) {
    str4 = "Verification in progress";
  }
  obj11 = { spacing: 16, children: items1 };
  const obj12 = { title: "Actions", hasIcons: true, children: items4 };
  const obj13 = {
    label: "Verify OTA Files",
    subLabel: str4,
    icon: closure_8(subLabel(15214).ClipboardCheckIcon, {}),
    onPress: function verifyFiles() {
      return obj(...arguments);
    },
    disabled: tmp11
  };
  items4[1] = closure_8(TableRow7, obj13);
  items1[3] = closure_9(TableRowGroup4, obj12);
  return closure_8(tmp14, obj);
};
