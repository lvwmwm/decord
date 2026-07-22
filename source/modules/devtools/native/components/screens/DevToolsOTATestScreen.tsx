// Module ID: 14513
// Function ID: 109271
// Name: OtaVerificationActionSheet
// Dependencies: []
// Exports: default

// Module 14513 (OtaVerificationActionSheet)
function OtaVerificationActionSheet(result) {
  result = result.result;
  const tmp = callback4();
  const arg1 = tmp;
  let obj = { header: callback2(arg1(dependencyMap[9]).BottomSheetTitleHeader, { title: "OTA Verification Result" }) };
  obj = { style: tmp.verificationLine };
  const items = [callback2(arg1(dependencyMap[10]).Text, {}), ];
  obj = { variant: "text-md/normal" };
  let str = "No";
  let str2 = "No";
  if (result.hasOtaApplied) {
    str2 = "Yes";
  }
  obj.children = str2;
  items[1] = callback2(arg1(dependencyMap[10]).Text, obj);
  obj.children = items;
  const items1 = [callback3(closure_7, obj), , , , ];
  const obj1 = { style: tmp.verificationLine };
  const items2 = [callback2(arg1(dependencyMap[10]).Text, { <string:2807142664>: "Array", <string:1446667417>: "isArray" }), ];
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
  items2[1] = callback2(arg1(dependencyMap[10]).Text, obj2);
  obj1.children = items2;
  items1[1] = callback3(closure_7, obj1);
  const obj3 = { style: tmp.verificationLine };
  const items3 = [callback2(arg1(dependencyMap[10]).Text, {}), ];
  const obj4 = { variant: "text-md/normal" };
  if (result.isValid) {
    str = "Yes";
  }
  obj4.children = str;
  items3[1] = callback2(arg1(dependencyMap[10]).Text, obj4);
  obj3.children = items3;
  items1[2] = callback3(closure_7, obj3);
  let tmp21Result = null;
  if (null !== result.totalFileCount) {
    const obj5 = { style: tmp.verificationLine };
    const items4 = [callback2(arg1(dependencyMap[10]).Text, { <string:2807142664>: true, <string:1446667417>: true }), ];
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
    items4[1] = callback3(arg1(dependencyMap[10]).Text, obj6);
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
    const items6 = [callback2(arg1(dependencyMap[10]).Text, { <string:2807142664>: "heading-lg/bold", <string:1446667417>: "mobile-text-heading-primary" }), ];
    const failures1 = result.failures;
    items6[1] = failures1.map((children) => callback(tmp(closure_2[10]).Text, { variant: "text-md/normal", style: tmp.verificationFailure, children }, children));
    obj7.children = items6;
    tmp15 = callback3(closure_7, obj7);
  }
  items1[4] = tmp15;
  obj.children = items1;
  return callback3(arg1(dependencyMap[8]).BottomSheet, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ ScrollView: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.wrap = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.contentContainer = { padding: importDefault(dependencyMap[7]).space.PX_16 };
const obj1 = { padding: importDefault(dependencyMap[7]).space.PX_16 };
obj.verificationLine = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingVertical: importDefault(dependencyMap[7]).space.PX_8 };
obj.verificationFailure = { fontFamily: arg1(dependencyMap[4]).Fonts.CODE_NORMAL };
let closure_10 = obj.createStyles(obj);
const obj2 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingVertical: importDefault(dependencyMap[7]).space.PX_8 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx");

export default function DevToolsOTATestScreen() {
  let tmp10;
  let tmp5;
  let tmp7;
  function _verifyFiles() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback2(tmp);
    const _verifyFiles = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  const arg1 = first;
  const importDefault = tmp2[1];
  [tmp5, closure_2] = callback(React.useState(null), 2);
  const tmp4 = callback(React.useState(null), 2);
  [tmp7, closure_3] = callback(React.useState(null), 2);
  const tmp8 = callback(React.useState(""), 2);
  const callback = tmp8[1];
  const tmp6 = callback(React.useState(null), 2);
  [tmp10, closure_5] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const otaRootPath = callback(closure_2[11]).getOtaRootPath();
    otaRootPath.then(callback);
    const obj = callback(closure_2[11]);
    const manifestInfo = callback(closure_2[11]).getManifestInfo();
    manifestInfo.then(closure_2);
    const obj2 = callback(closure_2[11]);
    const buildOverrideCookieContents = callback(closure_2[11]).getBuildOverrideCookieContents();
    buildOverrideCookieContents.then(closure_3);
    const obj3 = callback(closure_2[11]);
    const otaStatus = callback(closure_2[11]).getOtaStatus();
    otaStatus.then(closure_4);
  }, []);
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer };
  obj = { spacing: 16 };
  obj = { -9223372036854775808: true, 9223372036854775807: true };
  const obj1 = { label: "Status", subLabel: tmp8[0], icon: callback2(arg1(dependencyMap[16]).WrenchIcon, {}) };
  const items = [
    callback2(arg1(dependencyMap[15]).TableRow, obj1),
    callback2(arg1(dependencyMap[15]).TableRow, {
      label: "Root Path (tap to copy)",
      subLabel: first,
      onPress: function copyRootPath() {
        first(closure_2[17]).copy(first);
      }
    })
  ];
  obj.children = items;
  const items1 = [callback3(arg1(dependencyMap[14]).TableRowGroup, obj), , , ];
  const obj3 = { -9223372036854775808: "RateChange", 9223372036854775807: "getAgeGroup" };
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
  obj4.icon = callback2(arg1(dependencyMap[16]).WrenchIcon, {});
  const items2 = [callback2(arg1(dependencyMap[15]).TableRow, obj4), ];
  const obj5 = { icon: callback2(arg1(dependencyMap[18]).PaperIcon, {}) };
  let str2 = "{}";
  if (null != tmp5) {
    let metadata = tmp5.metadata;
    if (null == metadata) {
      metadata = {};
    }
    str2 = JSON.stringify(metadata, null, 2);
  }
  obj5.label = str2;
  items2[1] = callback2(arg1(dependencyMap[15]).TableRow, obj5);
  obj3.children = items2;
  items1[1] = callback3(arg1(dependencyMap[14]).TableRowGroup, obj3);
  const obj6 = { -9223372036854775808: false, 9223372036854775807: false };
  const obj7 = { icon: callback2(arg1(dependencyMap[16]).WrenchIcon, {}), label: "Is cookie set?" };
  let str3 = "Yes";
  if (null == tmp7) {
    str3 = "No";
  }
  obj7.subLabel = str3;
  const items3 = [callback2(arg1(dependencyMap[15]).TableRow, obj7), ];
  let tmp22 = null != tmp7;
  if (tmp22) {
    const obj8 = { icon: callback2(arg1(dependencyMap[16]).WrenchIcon, {}) };
    const _JSON = JSON;
    obj8.label = JSON.stringify(tmp7, null, 2);
    tmp22 = callback2(arg1(dependencyMap[15]).TableRow, obj8);
  }
  items3[1] = tmp22;
  obj6.children = items3;
  items1[2] = callback3(arg1(dependencyMap[14]).TableRowGroup, obj6);
  const obj9 = {};
  const obj10 = { label: "Check for Update & Reload", icon: callback2(arg1(dependencyMap[19]).DownloadIcon, {}), onPress: importDefault(dependencyMap[11]).checkForUpdateAndReload };
  const items4 = [callback2(arg1(dependencyMap[15]).TableRow, obj10), ];
  const obj11 = { label: "Verify OTA Files" };
  let str4 = "Verify content hashes for all app files";
  if (tmp10) {
    str4 = "Verification in progress";
  }
  obj11.subLabel = str4;
  obj11.icon = callback2(arg1(dependencyMap[20]).ClipboardCheckIcon, {});
  obj11.onPress = function verifyFiles() {
    return _verifyFiles(...arguments);
  };
  obj11.disabled = tmp10;
  items4[1] = callback2(arg1(dependencyMap[15]).TableRow, obj11);
  obj9.children = items4;
  items1[3] = callback3(arg1(dependencyMap[14]).TableRowGroup, obj9);
  obj.children = items1;
  obj.children = callback3(arg1(dependencyMap[13]).Stack, obj);
  return callback2(_verifyFiles, obj);
};
