// Module ID: 12761
// Function ID: 97850
// Name: DCDQRScanner
// Dependencies: []
// Exports: default

// Module 12761 (DCDQRScanner)
function DCDQRScanner(arg0) {
  const merged = Object.assign(arg0);
  return callback2(importDefaultResult, {});
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let obj = arg1(dependencyMap[2]);
const View = obj.View;
const UserSettingsSections = arg1(dependencyMap[3]).UserSettingsSections;
let closure_7 = arg1(dependencyMap[4]).FAMILY_CENTER_LINK_REQUEST_REGEX;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
if (obj1.isAndroid()) {
  let importDefaultResult = importDefault(dependencyMap[7]);
} else {
  importDefaultResult = obj.requireNativeComponent("DCDQRScanner");
}
obj = { scanner: { zIndex: null, width: null, backgroundColor: null }, closeButton: { marginLeft: 8 } };
obj = { backgroundColor: importDefault(dependencyMap[8]).unsafe_rawColors.BLACK };
obj.emptyView = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[8]).unsafe_rawColors.BRAND_500 };
obj.showHelp = obj1;
const tmp2 = arg1(dependencyMap[5]);
obj.text = { color: importDefault(dependencyMap[8]).unsafe_rawColors.WHITE, textAlign: "center" };
let closure_12 = { SUCCEEDED: "SUCCEEDED", FAILED: "FAILED" };
const obj2 = { color: importDefault(dependencyMap[8]).unsafe_rawColors.WHITE, textAlign: "center" };
const result = arg1(dependencyMap[24]).fileFinishedImporting("components_native/QRScannerModal.tsx");

export default function QRScannerModal(showHelp) {
  let bottom;
  let top;
  showHelp = showHelp.showHelp;
  const arg1 = showHelp.onScanSuccess;
  const tmp2 = callback(React.useState(true), 2);
  const first = tmp2[0];
  const importDefault = tmp2[1];
  const effect = React.useEffect(() => {
    const onScanSuccess = onScanSuccess(closure_2[9]).runAfterInteractions(() => {
      callback(false);
    });
    return () => {
      closure_0.cancel();
    };
  }, []);
  let obj = { style: { flex: 1 } };
  ({ bottom, top } = importDefault(dependencyMap[10])());
  if (first) {
    obj = {};
    const items = [obj.scanner, obj.emptyView];
    obj.style = items;
    let tmp8Result = tmp8(View, obj);
  } else {
    obj = {};
    obj.style = obj.scanner;
    obj.pointerEvents = "none";
    obj.onQRCodeFound = function onQRCodeFound(nativeEvent) {
      if (constants2.SUCCEEDED === nativeEvent.nativeEvent.status) {
        if (undefined !== onScanSuccess) {
          onScanSuccess(nativeEvent.nativeEvent.result);
        } else {
          let url = callback(paths[11]).toURLSafe(nativeEvent.nativeEvent.result);
          if (null == url) {
            url = {};
          }
          let obj = onScanSuccess(paths[12]);
          const result = obj.findRemoteAuthFingerprint(url.hostname, str);
          if (null != result) {
            let arr = callback(paths[13]).pop();
            const arr3 = callback(paths[13]);
            obj = { remoteAuthFingerprint: result };
            callback(paths[13]).pushLazy(onScanSuccess(paths[15])(paths[14], paths.paths), obj);
          } else {
            let match;
            if (null != str) {
              match = str.match(closure_7);
            }
            if (null != match) {
              if (null != str) {
                let arr1 = callback(paths[13]);
                arr = arr1.pop();
                obj = { screen: constants.FAMILY_CENTER };
                onScanSuccess(paths[16]).openUserSettings(obj);
                const obj3 = onScanSuccess(paths[16]);
                const result1 = onScanSuccess(paths[17]).handleFamilyCenterQRCodeScan(str, "UserSettingsQRCodeScan");
              }
            }
            let obj1 = callback(paths[18]);
            obj1.openURL(nativeEvent.nativeEvent.result, undefined, false);
          }
          const obj10 = callback(paths[11]);
        }
      } else {
        const FAILED = constants2.FAILED;
        obj1 = {};
        const intl = onScanSuccess(paths[20]).intl;
        obj1.body = intl.string(onScanSuccess(paths[20]).t.QOQlWa);
        const intl2 = onScanSuccess(paths[20]).intl;
        obj1.title = intl2.string(onScanSuccess(paths[20]).t.6S318H);
        callback(paths[19]).show(obj1);
        const obj8 = callback(paths[19]);
      }
      arr = callback(paths[13]);
      arr1 = arr.pop();
    };
    tmp8Result = tmp8(DCDQRScanner, obj);
  }
  const items1 = [tmp8Result, , ];
  const obj1 = { accessibilityRole: "button" };
  const tmp = undefined !== showHelp && showHelp;
  const tmp5 = importDefault(dependencyMap[10])();
  const tmp6 = closure_9;
  const tmp7 = View;
  const intl = arg1(dependencyMap[20]).intl;
  obj1.accessibilityLabel = intl.string(arg1(dependencyMap[20]).t.cpT0Cq);
  obj1.source = importDefault(dependencyMap[22]);
  const items2 = [obj.closeButton, { marginTop: top }];
  obj1.style = items2;
  obj1.onPress = importDefault(dependencyMap[13]).pop;
  items1[1] = callback2(importDefault(dependencyMap[21]), obj1);
  let tmp16 = null;
  if (tmp) {
    tmp16 = null;
    if (!first) {
      const obj2 = {};
      const items3 = [obj.showHelp, ];
      const obj3 = { marginBottom: bottom + 8 };
      items3[1] = obj3;
      obj2.style = items3;
      const obj4 = { style: obj.text };
      const intl2 = arg1(dependencyMap[20]).intl;
      obj4.children = intl2.string(arg1(dependencyMap[20]).t.dklV0G);
      obj2.children = callback2(arg1(dependencyMap[23]).LegacyText, obj4);
      tmp16 = callback2(View, obj2);
    }
  }
  items1[2] = tmp16;
  obj.children = items1;
  return tmp6(tmp7, obj);
};
