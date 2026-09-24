// Module ID: 14176
// Function ID: 14177
// Name: QRScannerModal
// Dependencies: [32, 19, 17, 1078, 7817, 21, 1368, 14177, 558, 568, 580, 7316, 1616, 1370, 14157, 4993, 14172, 1984, 7658, 12080, 4487, 5143, 1119, 10056, 7368, 1181, 2]
// Exports: default

// Module 14176 (QRScannerModal)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import URLUtilsDefault from "URLUtils" /* 1370 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5143 */;
import _modDef7368 from "module_7368" /* 7368 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 10056 */;
import QRLoginUtils from "QRLoginUtils" /* 14157 */;
import QRScannerNativeComponentDefault from "QRScannerNativeComponent" /* 14177 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, requireNativeComponent } = get_ActivityIndicator);
const UserSettingsSections = fn(1078).UserSettingsSections;
let closure_7 = fn(7817).FAMILY_CENTER_LINK_REQUEST_REGEX;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PlatformUtils = fn(1368);
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = QRScannerNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDQRScanner");
}
let c10 = importDefaultResult;
const ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp8 = closure_1_8(importDefaultResult, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp8;
    let tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  const merged = Object.assign(arg0);
  return closure_1_8(importDefaultResult, {});
});
let obj3 = { scanner: { position: "absolute", height: "100%", width: "100%" }, closeButton: { marginLeft: 8 }, emptyView: { backgroundColor: nativeDefault.unsafe_rawColors.BLACK }, showHelp: null, text: null };
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.BLACK };
obj3.showHelp = { marginLeft: 16, marginRight: 16, marginTop: "auto", borderRadius: 16, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500, paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16 };
let obj5 = { marginLeft: 16, marginRight: 16, marginTop: "auto", borderRadius: 16, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500, paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16 };
obj3.text = { color: nativeDefault.unsafe_rawColors.WHITE, textAlign: "center" };
let closure_13 = { SUCCEEDED: "SUCCEEDED", FAILED: "FAILED" };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/QRScannerModal.tsx");

export default function QRScannerModal(showHelp) {
  showHelp = showHelp.showHelp;
  const onScanSuccess = showHelp.onScanSuccess;
  [tmp3, importDefault] = noop.useState(true);
  const effect = noop.useEffect(() => {
    closure_0 = onScanSuccess(dependencyMap[11]).runAfterInteractions(() => {
      closure_1_1(false);
    });
    return () => {
      closure_0.cancel();
    };
  }, []);
  const tmp = undefined !== showHelp && showHelp;
  const tmp2 = _slicedToArray(noop.useState(true), 2);
  let obj = { style: { flex: 1 }, children: null };
  ({ bottom, top } = useSafeAreaInsetsDefault());
  if (tmp3) {
    let obj2 = { style: null };
    const items = [, ];
    ({ scanner: arr[0], emptyView: arr[1] } = obj3);
    obj2.style = items;
    let tmp10Result = tmp10(tmp9, obj2);
    let tmp12 = obj3;
    let tmp14 = tmp10;
  } else {
    obj3 = { style: null, pointerEvents: "none", onQRCodeFound: null };
    tmp12 = obj3;
    obj3.style = obj3.scanner;
    obj3.onQRCodeFound = function onQRCodeFound(nativeEvent) {
      if (constants.SUCCEEDED === nativeEvent.nativeEvent.status) {
        if (undefined !== onScanSuccess) {
          tmp2(nativeEvent.nativeEvent.result);
        } else {
          let url = URLUtilsDefault.toURLSafe(nativeEvent.nativeEvent.result);
          if (url == null) {
            url = {};
          }
          const result = QRLoginUtils.findRemoteAuthFingerprint(url.hostname, str);
          if (null != result) {
            tmp21(4993).pop();
            const tmp21Result = tmp21(4993);
            const obj2 = { remoteAuthFingerprint: result };
            tmp21(4993).pushLazy(tmp3(1984)(14172, tmp22.paths), obj2);
          } else {
            let match;
            if (str != null) {
              match = str.match(closure_7);
            }
            if (null != match) {
              if (null != str) {
                tmp21(4993).pop();
                const tmp21Result5 = tmp21(4993);
                obj3 = { screen: UserSettingsSections.FAMILY_CENTER };
                tmp3(7658).openUserSettings(obj3);
                const tmp3Result = tmp3(7658);
                const result1 = tmp3(12080).handleFamilyCenterQRCodeScan(str, "UserSettingsQRCodeScan");
              }
            }
            tmp21(4487).openURL(nativeEvent.nativeEvent.result, undefined, false);
            let tmp9 = tmp21;
            const tmp21Result6 = tmp21(4487);
          }
        }
      } else {
        const FAILED = tmp.FAILED;
        const obj4 = { body: null, title: null };
        const intl = util.intl;
        obj4.body = intl.string(util.t.QOQlWa);
        const intl2 = util.intl;
        obj4.title = intl2.string(util.t["6S318H"]);
        actions_AlertActionCreatorsDefault.show(obj4);
        tmp9 = importDefault;
      }
      tmp9(4993).pop();
    };
    tmp10Result = tmp10(closure_11, obj3);
    tmp14 = tmp10;
  }
  const items1 = [tmp10Result, , ];
  let obj4 = { accessibilityRole: "button", accessibilityLabel: null, source: null, style: null, onPress: null };
  const tmp7 = useSafeAreaInsetsDefault();
  const tmp8 = closure_9;
  let intl = onScanSuccess(1119).intl;
  obj4.accessibilityLabel = intl.string(onScanSuccess(1119).t.cpT0Cq);
  obj4.source = _modDef7368;
  const items2 = [tmp12.closeButton, { marginTop: top }];
  obj4.style = items2;
  obj4.onPress = ModalActionCreatorsDefault.pop;
  items1[1] = tmp14(TouchableHitBoxDefault, obj4);
  let tmp14Result = null;
  if (tmp) {
    tmp14Result = null;
    if (!tmp3) {
      const obj5 = { style: null, children: null };
      const items3 = [tmp12.showHelp, ];
      const obj6 = { marginBottom: bottom + 8 };
      items3[1] = obj6;
      obj5.style = items3;
      const obj7 = { style: tmp12.text, children: null };
      let intl2 = tmp17(1119).intl;
      obj7.children = intl2.string(tmp17(1119).t.dklV0G);
      obj5.children = tmp14(tmp17(1181).LegacyText, obj7);
      tmp14Result = tmp14(tmp9, obj5);
    }
  }
  items1[2] = tmp14Result;
  obj.children = items1;
  return tmp8(closure_5, obj);
};
