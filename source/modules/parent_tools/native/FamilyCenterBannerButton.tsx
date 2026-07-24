// Module ID: 13830
// Function ID: 105968
// Name: FamilyCenterTeenQRCodeButtonInner
// Dependencies: [31, 27, 1849, 6769, 6770, 653, 4344, 33, 4130, 689, 7122, 3830, 1212, 11088, 624, 13831, 675, 13832, 4098, 13833, 1934, 4541, 4543, 12254, 2198, 13836, 4337, 1443, 11085, 1553, 4675, 12927, 2]
// Exports: FamilyCenterParentQRCodeButton, FamilyCenterTeenQRCodeButton

// Module 13830 (FamilyCenterTeenQRCodeButtonInner)
import DCDQRScanner from "DCDQRScanner";
import { View } from "isOriginalContentTypeDifferent";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import items from "items";
import { AnalyticEvents } from "ME";
import { NativePermissionTypes } from "NativePermissionStatus";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function FamilyCenterTeenQRCodeButtonInner() {
  const callback = stateFromStores1.useCallback(() => {
    const intl = getLinkCode(stateFromStores[12]).intl;
    getLinkCode(stateFromStores[11]).presentFailedToast(intl.string(getLinkCode(stateFromStores[12]).t.R0RpRX));
  }, []);
  let obj = getLinkCode(stateFromStores[13]);
  getLinkCode = obj.useFamilyCenterActions().getLinkCode;
  let obj1 = getLinkCode(stateFromStores[13]);
  const getLinkCode2 = obj1.useFamilyCenterActions({ onError: callback }).getLinkCode;
  let tmp = _createForOfIteratorHelperLoose();
  const items = [_isNativeReflectConstruct];
  stateFromStores = getLinkCode(stateFromStores[14]).useStateFromStores(items, () => outer1_5.getCurrentUser());
  let obj3 = getLinkCode(stateFromStores[14]);
  const items1 = [closure_6];
  stateFromStores1 = getLinkCode(stateFromStores[14]).useStateFromStores(items1, () => outer1_6.getLinkCode());
  const obj4 = getLinkCode(stateFromStores[14]);
  const items2 = [closure_6];
  const stateFromStores2 = getLinkCode(stateFromStores[14]).useStateFromStores(items2, () => outer1_6.getLinkCodeExpiresAt());
  const obj5 = getLinkCode(stateFromStores[14]);
  const userQRLinkUrl = getLinkCode(stateFromStores[10]).useUserQRLinkUrl();
  const effect = stateFromStores1.useEffect(() => {
    getLinkCode();
  }, []);
  getLinkCode2(stateFromStores[15])(stateFromStores2, getLinkCode);
  const items3 = [stateFromStores, stateFromStores1];
  const items4 = [stateFromStores1, stateFromStores2, getLinkCode2];
  const callback1 = stateFromStores1.useCallback(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != stateFromStores1;
    }
    if (tmp) {
      let obj = getLinkCode2(stateFromStores[16]);
      obj = { action: outer1_9.ShareLink };
      obj.track(outer1_10.FAMILY_CENTER_ACTION, obj);
      const result = getLinkCode(stateFromStores[17]).shareGuardianConnectLink(stateFromStores, stateFromStores1);
      const obj3 = getLinkCode(stateFromStores[17]);
    }
  }, items3);
  const callback2 = stateFromStores1.useCallback(() => {
    let tmp = null != stateFromStores1;
    if (tmp) {
      tmp = null != stateFromStores2;
    }
    if (tmp) {
      let obj = getLinkCode2(stateFromStores[16]);
      obj = { action: outer1_9.ShowQRCodeModal };
      obj.track(outer1_10.FAMILY_CENTER_ACTION, obj);
      obj = { linkCode: stateFromStores1, expiresAt: stateFromStores2, onRefresh: getLinkCode2 };
      getLinkCode2(stateFromStores[18]).openLazy(getLinkCode(stateFromStores[20])(stateFromStores[19], stateFromStores.paths), outer1_7, obj);
      const obj3 = getLinkCode2(stateFromStores[18]);
    }
  }, items4);
  obj = { direction: "horizontal", spacing: getLinkCode2(stateFromStores[9]).space.PX_8, style: tmp.container };
  obj = { grow: true, shrink: true, size: "md", variant: "primary" };
  let intl = getLinkCode(stateFromStores[12]).intl;
  obj.text = intl.string(getLinkCode(stateFromStores[12]).t.Ej3B3Y);
  obj.disabled = null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2;
  obj.onPress = callback1;
  obj.icon = callback(getLinkCode(stateFromStores[23]).ShareIcon, { size: "sm", color: "control-primary-text-default" });
  obj.iconPosition = "start";
  const items5 = [callback(getLinkCode(stateFromStores[22]).Button, obj), ];
  obj1 = { grow: true, shrink: true, size: "md", variant: "secondary" };
  const intl2 = getLinkCode(stateFromStores[12]).intl;
  obj1.text = intl2.string(getLinkCode2(stateFromStores[24]).wd4yrz);
  obj1.disabled = null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2;
  obj1.onPress = callback2;
  obj1.icon = callback(getLinkCode(stateFromStores[25]).QrCodeIcon, { size: "sm", color: "control-secondary-text-default" });
  obj1.iconPosition = "start";
  items5[1] = callback(getLinkCode(stateFromStores[22]).Button, obj1);
  obj.children = items5;
  return callback2(getLinkCode(stateFromStores[21]).Stack, obj);
}
class FamilyCenterBannerButton {
  constructor(arg0) {
    ({ onPress, text, loading } = global);
    tmp = c15();
    obj = { style: tmp.button };
    obj = { grow: true, shrink: true, size: "md", variant: "primary" };
    obj.text = text;
    obj.onPress = onPress;
    obj.loading = loading;
    obj1 = { style: null, size: "custom", color: "white" };
    obj1.style = tmp.art;
    obj.icon = jsx(require("QrCodeIcon").QrCodeIcon, obj1);
    obj.iconPosition = "start";
    obj.children = jsx(require("Button").Button, obj);
    return jsx(View, obj);
  }
}
({ CONNECT_GUARDIAN_BOTTOM_SHEET_KEY: closure_7, FAMILY_CENTER_LINK_REQUEST_REGEX: closure_8, FamilyCenterAction: closure_9 } = items);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_15 = _createForOfIteratorHelperLoose.createStyles({ button: { height: 50, width: "100%", marginTop: 16 }, art: { width: 18, height: 18, marginRight: 6 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/native/FamilyCenterBannerButton.tsx");

export default FamilyCenterBannerButton;
export const FamilyCenterTeenQRCodeButton = function FamilyCenterTeenQRCodeButton() {
  let tmp = null;
  if (!obj.useHasMaxConnections()) {
    tmp = callback(FamilyCenterTeenQRCodeButtonInner, {});
  }
  return tmp;
};
export const FamilyCenterParentQRCodeButton = function FamilyCenterParentQRCodeButton() {
  function handleQrCodeScanSucess(outer1_0) {
    let hostname;
    let pathname;
    let arr = outer1_1(outer1_2[26]);
    arr = arr.pop();
    let toURLSafeResult = outer1_1(outer1_2[27]).toURLSafe(outer1_0);
    if (null == toURLSafeResult) {
      toURLSafeResult = {};
    }
    ({ hostname, pathname } = toURLSafeResult);
    let tmp2 = null;
    if (null != hostname) {
      tmp2 = null;
      if (null != pathname) {
        tmp2 = null;
        if (obj3.isDiscordHostname(hostname)) {
          if (null !== pathname.match(outer1_8)) {
            const result = handleQrCodeScanSucess(outer1_2[28]).handleFamilyCenterQRCodeScan(pathname, "FamilyCenterQRCodeScan");
            const obj4 = handleQrCodeScanSucess(outer1_2[28]);
          }
          tmp2 = tmp6;
        }
        obj3 = outer1_1(outer1_2[27]);
      }
    }
    return tmp2;
  }
  let obj = handleQrCodeScanSucess(7122);
  if (obj.useHasMaxConnections()) {
    return null;
  } else {
    obj = {};
    const intl = handleQrCodeScanSucess(1212).intl;
    obj.text = intl.string(importDefault(2198).z4a9HP);
    obj.onPress = function onPress() {
      let obj = outer1_1(outer1_2[16]);
      obj = { action: outer1_9.ScanQRCodeButton };
      obj.track(outer1_10.FAMILY_CENTER_ACTION, obj);
      const obj3 = handleQrCodeScanSucess(outer1_2[29]);
      const tmp3 = handleQrCodeScanSucess(outer1_2[29]).isMetaQuest() ? outer1_11.HEADSET_CAMERA : outer1_11.CAMERA;
      const permission = outer1_1(outer1_2[30]).requestPermission(tmp3);
      permission.then((arg0) => {
        if (arg0) {
          let obj = outer2_1(outer2_2[26]);
          obj = { showHelp: false, onScanSuccess: outer1_0 };
          obj.pushLazy(handleQrCodeScanSucess(outer2_2[20])(outer2_2[31], outer2_2.paths), obj);
        }
      });
    };
    return callback(FamilyCenterBannerButton, obj);
  }
};
