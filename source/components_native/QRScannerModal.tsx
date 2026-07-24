// Module ID: 12927
// Function ID: 100329
// Name: DCDQRScanner
// Dependencies: [57, 31, 27, 653, 6770, 33, 477, 12928, 689, 5582, 1557, 1443, 12907, 4337, 12922, 1934, 5796, 11085, 3827, 4471, 1212, 8518, 7729, 1273, 2]
// Exports: default

// Module 12927 (DCDQRScanner)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import { FAMILY_CENTER_LINK_REQUEST_REGEX as closure_7 } from "items";
import jsxProd from "jsxProd";
import set from "set";
import set from "get ActivityIndicator";

let closure_8;
let closure_9;
const require = arg1;
function DCDQRScanner(arg0) {
  const merged = Object.assign(arg0);
  return callback2(closure_10, {});
}
const View = get_ActivityIndicator.View;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
if (set.isAndroid()) {
  let importDefaultResult = require("__INTERNAL_VIEW_CONFIG");
} else {
  importDefaultResult = get_ActivityIndicator.requireNativeComponent("DCDQRScanner");
}
get_ActivityIndicator = { scanner: { position: "absolute", height: "100%", width: "100%" }, closeButton: { marginLeft: 8 } };
get_ActivityIndicator = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK };
get_ActivityIndicator.emptyView = get_ActivityIndicator;
set = { marginLeft: 16, marginRight: 16, marginTop: "auto", borderRadius: 16, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500, paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16 };
get_ActivityIndicator.showHelp = set;
get_ActivityIndicator.text = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, textAlign: "center" };
let closure_12 = { SUCCEEDED: "SUCCEEDED", FAILED: "FAILED" };
let result = set.fileFinishedImporting("components_native/QRScannerModal.tsx");

export default function QRScannerModal(showHelp) {
  let bottom;
  let top;
  showHelp = showHelp.showHelp;
  const onScanSuccess = showHelp.onScanSuccess;
  const tmp2 = callback(React.useState(true), 2);
  const first = tmp2[0];
  const importDefault = tmp2[1];
  const effect = React.useEffect(() => {
    let closure_0 = onScanSuccess(outer1_2[9]).runAfterInteractions(() => {
      outer1_1(false);
    });
    return () => {
      closure_0.cancel();
    };
  }, []);
  let obj = { style: { flex: 1 } };
  ({ bottom, top } = importDefault(1557)());
  if (first) {
    obj = {};
    const items = [get_ActivityIndicator.scanner, get_ActivityIndicator.emptyView];
    obj.style = items;
    let tmp8Result = tmp8(View, obj);
  } else {
    obj = {
      style: get_ActivityIndicator.scanner,
      pointerEvents: "none",
      onQRCodeFound(nativeEvent) {
          if (outer1_12.SUCCEEDED === nativeEvent.nativeEvent.status) {
            if (undefined !== onScanSuccess) {
              onScanSuccess(nativeEvent.nativeEvent.result);
            } else {
              let url = callback(outer1_2[11]).toURLSafe(nativeEvent.nativeEvent.result);
              if (null == url) {
                url = {};
              }
              let obj = onScanSuccess(outer1_2[12]);
              const result = obj.findRemoteAuthFingerprint(url.hostname, str);
              if (null != result) {
                let arr = callback(outer1_2[13]).pop();
                const arr3 = callback(outer1_2[13]);
                obj = { remoteAuthFingerprint: result };
                callback(outer1_2[13]).pushLazy(onScanSuccess(outer1_2[15])(outer1_2[14], outer1_2.paths), obj);
              } else {
                let match;
                if (null != str) {
                  match = str.match(outer1_7);
                }
                if (null != match) {
                  if (null != str) {
                    let arr1 = callback(outer1_2[13]);
                    arr = arr1.pop();
                    obj = { screen: outer1_6.FAMILY_CENTER };
                    onScanSuccess(outer1_2[16]).openUserSettings(obj);
                    const obj3 = onScanSuccess(outer1_2[16]);
                    const result1 = onScanSuccess(outer1_2[17]).handleFamilyCenterQRCodeScan(str, "UserSettingsQRCodeScan");
                  }
                }
                let obj1 = callback(outer1_2[18]);
                obj1.openURL(nativeEvent.nativeEvent.result, undefined, false);
              }
              const obj10 = callback(outer1_2[11]);
            }
          } else {
            const FAILED = outer1_12.FAILED;
            obj1 = {};
            const intl = onScanSuccess(outer1_2[20]).intl;
            obj1.body = intl.string(onScanSuccess(outer1_2[20]).t.QOQlWa);
            const intl2 = onScanSuccess(outer1_2[20]).intl;
            obj1.title = intl2.string(onScanSuccess(outer1_2[20]).t["6S318H"]);
            callback(outer1_2[19]).show(obj1);
            const obj8 = callback(outer1_2[19]);
          }
          arr = callback(outer1_2[13]);
          arr1 = arr.pop();
        }
    };
    tmp8Result = tmp8(DCDQRScanner, obj);
  }
  const items1 = [tmp8Result, , ];
  let obj1 = { accessibilityRole: "button" };
  const tmp = undefined !== showHelp && showHelp;
  const tmp5 = importDefault(1557)();
  const tmp6 = closure_9;
  const tmp7 = View;
  let intl = onScanSuccess(1212).intl;
  obj1.accessibilityLabel = intl.string(onScanSuccess(1212).t.cpT0Cq);
  obj1.source = importDefault(7729);
  const items2 = [get_ActivityIndicator.closeButton, { marginTop: top }];
  obj1.style = items2;
  obj1.onPress = importDefault(4337).pop;
  items1[1] = callback2(importDefault(8518), obj1);
  let tmp16 = null;
  if (tmp) {
    tmp16 = null;
    if (!first) {
      const obj2 = {};
      const items3 = [get_ActivityIndicator.showHelp, ];
      let obj3 = { marginBottom: bottom + 8 };
      items3[1] = obj3;
      obj2.style = items3;
      const obj4 = { style: get_ActivityIndicator.text };
      let intl2 = onScanSuccess(1212).intl;
      obj4.children = intl2.string(onScanSuccess(1212).t.dklV0G);
      obj2.children = callback2(onScanSuccess(1273).LegacyText, obj4);
      tmp16 = callback2(View, obj2);
    }
  }
  items1[2] = tmp16;
  obj.children = items1;
  return tmp6(tmp7, obj);
};
