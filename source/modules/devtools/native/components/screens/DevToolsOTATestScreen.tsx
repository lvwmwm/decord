// Module ID: 14627
// Function ID: 111431
// Name: OtaVerificationActionSheet
// Dependencies: [5, 57, 31, 27, 482, 33, 4130, 689, 5187, 5186, 4126, 10941, 4098, 4541, 5503, 5165, 14392, 5492, 9284, 4080, 14628, 2]
// Exports: default

// Module 14627 (OtaVerificationActionSheet)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
function OtaVerificationActionSheet(result) {
  result = result.result;
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = { header: callback2(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: "OTA Verification Result" }) };
  obj = { style: tmp.verificationLine };
  const items = [callback2(require(4126) /* Text */.Text, { variant: "heading-md/bold", children: "Has OTA Applied" }), ];
  obj = { variant: "text-md/normal" };
  let str = "No";
  let str2 = "No";
  if (result.hasOtaApplied) {
    str2 = "Yes";
  }
  obj.children = str2;
  items[1] = callback2(require(4126) /* Text */.Text, obj);
  obj.children = items;
  const items1 = [callback3(closure_7, obj), , , , ];
  const obj1 = { style: tmp.verificationLine };
  const items2 = [callback2(require(4126) /* Text */.Text, { variant: "heading-md/bold", children: "Has Local Copy" }), ];
  const obj2 = { variant: "text-md/normal" };
  let str3 = "--";
  if (null != result.hasLocalCopy) {
    let str4 = str;
    if (result.hasLocalCopy) {
      str4 = "Yes";
    }
    str3 = str4;
  }
  obj2.children = str3;
  items2[1] = callback2(require(4126) /* Text */.Text, obj2);
  obj1.children = items2;
  items1[1] = callback3(closure_7, obj1);
  const obj3 = { style: tmp.verificationLine };
  const items3 = [callback2(require(4126) /* Text */.Text, { variant: "heading-md/bold", children: "OTA is Valid" }), ];
  const obj4 = { variant: "text-md/normal" };
  if (result.isValid) {
    str = "Yes";
  }
  obj4.children = str;
  items3[1] = callback2(require(4126) /* Text */.Text, obj4);
  obj3.children = items3;
  items1[2] = callback3(closure_7, obj3);
  let tmp21Result = null;
  if (null !== result.totalFileCount) {
    const obj5 = { style: tmp.verificationLine };
    const items4 = [callback2(require(4126) /* Text */.Text, { variant: "heading-md/bold", children: "File Counts" }), ];
    const obj6 = { variant: "text-md/normal" };
    const items5 = [result.totalFileCount, " files. ", , , , ];
    const successes = result.successes;
    let length;
    if (null != successes) {
      length = successes.length;
    }
    items5[2] = length;
    items5[3] = " successes, ";
    const failures = result.failures;
    let length1;
    if (null != failures) {
      length1 = failures.length;
    }
    items5[4] = length1;
    items5[5] = " failures.";
    obj6.children = items5;
    items4[1] = callback3(require(4126) /* Text */.Text, obj6);
    obj5.children = items4;
    tmp21Result = callback3(closure_7, obj5);
    const tmp21 = callback3;
    const tmp22 = closure_7;
    const tmp26 = callback3;
  }
  items1[3] = tmp21Result;
  let tmp15 = null;
  if (result.failures.length > 0) {
    const obj7 = { style: tmp.verificationLine };
    const items6 = [callback2(require(4126) /* Text */.Text, { variant: "heading-md/bold", children: "Failures" }), ];
    const failures1 = result.failures;
    items6[1] = failures1.map((children) => outer1_8(tmp(outer1_2[10]).Text, { variant: "text-md/normal", style: tmp.verificationFailure, children }, children));
    obj7.children = items6;
    tmp15 = callback3(closure_7, obj7);
  }
  items1[4] = tmp15;
  obj.children = items1;
  return callback3(require(5187) /* Background */.BottomSheet, obj);
}
({ ScrollView: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.wrap = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.verificationLine = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.verificationFailure = { fontFamily: require("sum").Fonts.CODE_NORMAL };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("result").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx");

export default function DevToolsOTATestScreen() {
  let closure_3;
  let result;
  let dependencyMap;
  let tmp10;
  let tmp5;
  let tmp7;
  function _verifyFiles() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  const importDefault = tmp2[1];
  [tmp5, dependencyMap] = callback(React.useState(null), 2);
  const tmp4 = callback(React.useState(null), 2);
  [tmp7, closure_3] = callback(React.useState(null), 2);
  const tmp8 = callback(React.useState(""), 2);
  callback = tmp8[1];
  const tmp6 = callback(React.useState(null), 2);
  [tmp10, result] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const otaRootPath = callback(outer1_2[11]).getOtaRootPath();
    otaRootPath.then(callback);
    const obj = callback(outer1_2[11]);
    const manifestInfo = callback(outer1_2[11]).getManifestInfo();
    manifestInfo.then(closure_2);
    const obj2 = callback(outer1_2[11]);
    const buildOverrideCookieContents = callback(outer1_2[11]).getBuildOverrideCookieContents();
    buildOverrideCookieContents.then(closure_3);
    const obj3 = callback(outer1_2[11]);
    const otaStatus = callback(outer1_2[11]).getOtaStatus();
    otaStatus.then(_slicedToArray);
  }, []);
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer };
  obj = { spacing: 16 };
  obj = { title: "OTA Status", hasIcons: true };
  const obj1 = { label: "Status", subLabel: tmp8[0], icon: callback2(first(14392).WrenchIcon, {}) };
  const items = [
    callback2(first(5165).TableRow, obj1),
    callback2(first(5165).TableRow, {
      label: "Root Path (tap to copy)",
      subLabel: first,
      onPress: function copyRootPath() {
        first(outer1_2[17]).copy(first);
      }
    })
  ];
  obj.children = items;
  const items1 = [callback3(first(5503).TableRowGroup, obj), , , ];
  let obj3 = { title: "Manifest", hasIcons: true };
  const obj4 = { label: "Manifest Source" };
  let source;
  if (null != tmp5) {
    source = tmp5.source;
  }
  let str = "Unknown";
  if (null != source) {
    str = source;
  }
  obj4.subLabel = str;
  obj4.icon = callback2(first(14392).WrenchIcon, {});
  const items2 = [callback2(first(5165).TableRow, obj4), ];
  const obj5 = { icon: callback2(first(9284).PaperIcon, {}) };
  let str2 = "{}";
  if (null != tmp5) {
    let metadata = tmp5.metadata;
    if (null == metadata) {
      metadata = {};
    }
    str2 = JSON.stringify(metadata, null, 2);
  }
  obj5.label = str2;
  items2[1] = callback2(first(5165).TableRow, obj5);
  obj3.children = items2;
  items1[1] = callback3(first(5503).TableRowGroup, obj3);
  const obj6 = { title: "Build Override Cookie", hasIcons: true };
  const obj7 = { icon: callback2(first(14392).WrenchIcon, {}), label: "Is cookie set?" };
  let str3 = "Yes";
  if (null == tmp7) {
    str3 = "No";
  }
  obj7.subLabel = str3;
  const items3 = [callback2(first(5165).TableRow, obj7), ];
  let tmp22 = null != tmp7;
  if (tmp22) {
    const obj8 = { icon: callback2(first(14392).WrenchIcon, {}) };
    const _JSON = JSON;
    obj8.label = JSON.stringify(tmp7, null, 2);
    tmp22 = callback2(first(5165).TableRow, obj8);
  }
  items3[1] = tmp22;
  obj6.children = items3;
  items1[2] = callback3(first(5503).TableRowGroup, obj6);
  const obj9 = { title: "Actions", hasIcons: true };
  const obj10 = { label: "Check for Update & Reload", icon: callback2(first(4080).DownloadIcon, {}), onPress: importDefault(10941).checkForUpdateAndReload };
  const items4 = [callback2(first(5165).TableRow, obj10), ];
  const obj11 = { label: "Verify OTA Files" };
  let str4 = "Verify content hashes for all app files";
  if (tmp10) {
    str4 = "Verification in progress";
  }
  obj11.subLabel = str4;
  obj11.icon = callback2(first(14628).ClipboardCheckIcon, {});
  obj11.onPress = function verifyFiles() {
    return _verifyFiles(...arguments);
  };
  obj11.disabled = tmp10;
  items4[1] = callback2(first(5165).TableRow, obj11);
  obj9.children = items4;
  items1[3] = callback3(first(5503).TableRowGroup, obj9);
  obj.children = items1;
  obj.children = callback3(first(4541).Stack, obj);
  return callback2(_verifyFiles, obj);
};
