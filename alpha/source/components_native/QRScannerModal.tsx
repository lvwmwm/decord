// Module ID: 14017
// Function ID: 14018
// Name: QRScannerModal
// Dependencies: [32, 19, 17, 1085, 7253, 21, 1382, 14018, 558, 576, 587, 6724, 1631, 1384, 13992, 5941, 14007, 2000, 7087, 11481, 4765, 5299, 1126, 8660, 6774, 1200, 2]
// Exports: default

// Module 14017 (QRScannerModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import URLUtilsDefault from "URLUtils" /* 1384 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import LinkingDefault from "Linking" /* 4765 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5299 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7253 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 8660 */;
import FamilyCenterNativeUtils from "FamilyCenterNativeUtils" /* 11481 */;
import QRLoginUtils from "QRLoginUtils" /* 13992 */;
import QRScannerNativeComponentDefault from "QRScannerNativeComponent" /* 14018 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let importDefaultResult;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let requireNativeComponent;
({ View: hasOwnProperty, requireNativeComponent } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
let closure_7 = FamilyCenterConstants.FAMILY_CENTER_LINK_REQUEST_REGEX;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
if (PlatformUtils.isAndroid()) {
  importDefaultResult = QRScannerNativeComponentDefault;
} else {
  const str = "DCDQRScanner";
  importDefaultResult = requireNativeComponent("DCDQRScanner");
}
let c10 = importDefaultResult;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function DCDQRScanner(arg0) {
  let tmp2;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp8 = metroImportAll(c10, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp8;
    tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function DCDQRScanner(arg0) {
  obj = {};
  const merged = Object.assign(arg0);
  return metroImportAll(c10, obj);
});
let obj = { scanner: { position: "absolute", height: "100%", width: "100%" }, closeButton: { marginLeft: 8 }, emptyView: obj2, showHelp: obj3, text: obj4 };
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.BLACK };
obj3 = { marginLeft: 16, marginRight: 16, marginTop: "auto", borderRadius: 16, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500, paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16 };
obj4 = { color: nativeDefault.unsafe_rawColors.WHITE, textAlign: "center" };
let closure_13 = { SUCCEEDED: "SUCCEEDED", FAILED: "FAILED" };
let result = size.fileFinishedImporting("components_native/QRScannerModal.tsx");

export default function QRScannerModal(showHelp) {
  let LegacyText;
  let bottom;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let obj7;
  let tmp10Result;
  let tmp12;
  let tmp14;
  let tmp3;
  let top;
  showHelp = showHelp.showHelp;
  const tmp = undefined !== showHelp && showHelp;
  const onScanSuccess = showHelp.onScanSuccess;
  const tmp2 = _slicedToArray(react.useState(true), 2);
  [tmp3, importDefault] = tmp2;
  const effect = react.useEffect(() => {
    obj = onScanSuccess(dependencyMap[11]);
    let closure_0 = obj.runAfterInteractions(() => {
      closure_1_1(false);
    });
    return () => {
      closure_0.cancel();
    };
  }, []);
  let tmp9 = closure_5;
  obj = { style: { flex: 1 }, children: items1 };
  ({ bottom, top } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  const tmp8 = closure_9;
  if (tmp3) {
    let obj2 = { style: items };
    items = [, ];
    ({ scanner: arr[0], emptyView: arr[1] } = obj);
    tmp10Result = tmp10(tmp9, obj2);
    tmp12 = obj;
    tmp14 = tmp10;
  } else {
    let obj3 = {
      style: obj.scanner,
      pointerEvents: "none",
      onQRCodeFound(nativeEvent) {
          let intl;
          let intl2;
          let tmp9;
          if (constants.SUCCEEDED === nativeEvent.nativeEvent.status) {
            if (undefined !== onScanSuccess) {
              tmp2(nativeEvent.nativeEvent.result);
            } else {
              const obj9 = URLUtilsDefault;
              let url = obj9.toURLSafe(nativeEvent.nativeEvent.result);
              if (url == null) {
                url = {};
              }
              const hostname = url.hostname;
              obj = QRLoginUtils;
              const result = obj.findRemoteAuthFingerprint(hostname, str);
              if (null != result) {
                const tmp22Result = ModalActionCreatorsDefault;
                tmp22Result.pop();
                const obj2 = { remoteAuthFingerprint: result };
                const tmp22Result4 = ModalActionCreatorsDefault;
                tmp22Result4.pushLazy(asyncRequire(14007, dependencyMap.paths), obj2);
              } else {
                let match;
                if (url.pathname != null) {
                  match = str.match(closure_7);
                }
                if (null != match) {
                  if (null != url.pathname) {
                    const tmp22Result5 = ModalActionCreatorsDefault;
                    tmp22Result5.pop();
                    const obj3 = { screen: UserSettingsSections.FAMILY_CENTER };
                    const tmp3Result = openUserSettings;
                    tmp3Result.openUserSettings(obj3);
                    const tmp3Result2 = FamilyCenterNativeUtils;
                    const result1 = tmp3Result2.handleFamilyCenterQRCodeScan(str, "UserSettingsQRCodeScan");
                  }
                }
                const tmp22Result6 = LinkingDefault;
                tmp22Result6.openURL(nativeEvent.nativeEvent.result, undefined, false);
                tmp9 = tmp22;
              }
            }
          } else {
            const FAILED = tmp.FAILED;
            const obj4 = { body: intl.string(intl3.t.QOQlWa), title: intl2.string(intl3.t["6S318H"]) };
            const show = actions_AlertActionCreatorsDefault.show;
            actions_AlertActionCreatorsDefault;
            intl = intl3.intl;
            intl2 = intl3.intl;
            show(obj4);
            tmp9 = importDefault;
          }
          const tmp9Result = tmp9(5941);
          tmp9Result.pop();
        }
    };
    tmp12 = obj;
    tmp10Result = tmp10(closure_11, obj3);
    tmp14 = tmp10;
  }
  items1 = [tmp10Result, , ];
  let obj4 = { accessibilityRole: "button", accessibilityLabel: intl.string(onScanSuccess(1126).t.cpT0Cq), source: tmp5(6774), style: items2, onPress: tmp5(5941).pop };
  const tmp5Result = TouchableHitBoxDefault;
  intl = onScanSuccess(1126).intl;
  items2 = [tmp12.closeButton, { marginTop: top }];
  items1[1] = tmp14(tmp5Result, obj4);
  let tmp14Result = null;
  if (tmp) {
    tmp14Result = null;
    if (!tmp3) {
      const obj5 = { style: items3, children: tmp14(LegacyText, obj7) };
      items3 = [tmp12.showHelp, ];
      const obj6 = { marginBottom: bottom + 8 };
      items3[1] = obj6;
      obj7 = { style: tmp12.text, children: intl2.string(onScanSuccess(1126).t.dklV0G) };
      LegacyText = tmp17(1200).LegacyText;
      intl2 = tmp17(1126).intl;
      tmp14Result = tmp14(tmp9, obj5);
    }
  }
  items1[2] = tmp14Result;
  return tmp8(tmp9, obj);
};
