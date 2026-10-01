// Module ID: 14412
// Function ID: 14413
// Name: FamilyCenterBannerButton
// Dependencies: [19, 17, 1372, 6957, 6958, 1074, 5045, 21, 4836, 576, 8105, 4527, 1115, 11395, 563, 14413, 1241, 14414, 4800, 14415, 1981, 5279, 5281, 12470, 2487, 14418, 5039, 1366, 11392, 1610, 5451, 13412, 2]
// Exports: FamilyCenterParentQRCodeButton, FamilyCenterTeenQRCodeButton

// Module 14412 (FamilyCenterBannerButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import _modDef2487 from "module_2487" /* 2487 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import useUserLinks from "useUserLinks" /* 8105 */;
import shareGuardianConnectLink from "shareGuardianConnectLink" /* 14414 */;
import QrCodeIcon from "QrCodeIcon" /* 14418 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
const NativePermissionUtilsDefault = tmp(5451);
function FamilyCenterTeenQRCodeButtonInner() {
  let currentUser;
  let getLinkCode;
  let intl;
  let intl2;
  let items5;
  let stateFromStores;
  let stateFromStores1;
  let obj = stateFromStores1;
  let tmp = closure_14();
  const callback = stateFromStores1.useCallback(() => {
    const presentFailedToast = getLinkCode(stateFromStores[11]).presentFailedToast;
    getLinkCode(stateFromStores[11]);
    const intl = getLinkCode(stateFromStores[12]).intl;
    presentFailedToast(intl.string(getLinkCode(stateFromStores[12]).t.R0RpRX));
  }, []);
  let obj2 = getLinkCode(stateFromStores[13]);
  getLinkCode = obj2.useFamilyCenterActions().getLinkCode;
  let obj3 = getLinkCode(stateFromStores[13]);
  const getLinkCode2 = obj3.useFamilyCenterActions({ onError: callback }).getLinkCode;
  let obj4 = getLinkCode(stateFromStores[14]);
  const items = [UserStore];
  stateFromStores = obj4.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [FamilyCenterStore];
  const obj5 = getLinkCode(stateFromStores[14]);
  stateFromStores1 = obj5.useStateFromStores(items1, () => FamilyCenterStore.getLinkCode());
  const items2 = [FamilyCenterStore];
  const obj6 = getLinkCode(stateFromStores[14]);
  const stateFromStores2 = obj6.useStateFromStores(items2, () => FamilyCenterStore.getLinkCodeExpiresAt());
  const obj7 = getLinkCode(stateFromStores[10]);
  const userQRLinkUrl = obj7.useUserQRLinkUrl();
  const effect = stateFromStores1.useEffect(() => {
    getLinkCode();
  }, []);
  getLinkCode2(stateFromStores[15])(stateFromStores2, getLinkCode);
  const items3 = [stateFromStores, stateFromStores1];
  const items4 = [stateFromStores1, stateFromStores2, getLinkCode2];
  const callback1 = obj.useCallback(() => {
    let tmp2 = null != stateFromStores;
    const tmp = stateFromStores;
    if (tmp2) {
      tmp2 = null != stateFromStores1;
    }
    if (tmp2) {
      const obj2 = { action: React4.ShareLink };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
      const obj3 = shareGuardianConnectLink;
      const result = obj3.shareGuardianConnectLink(tmp, stateFromStores1);
    }
  }, items3);
  const callback2 = obj.useCallback(() => {
    let tmp2 = null != stateFromStores1;
    const tmp = stateFromStores1;
    if (tmp2) {
      tmp2 = null != stateFromStores2;
    }
    if (tmp2) {
      const obj2 = { action: React4.ShowQRCodeModal };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
      const obj4 = { linkCode: tmp, expiresAt: stateFromStores2, onRefresh: getLinkCode2 };
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(14415, dependencyMap.paths), metroImportDefault, obj4);
    }
  }, items4);
  const obj8 = { direction: "horizontal", spacing: getLinkCode2(stateFromStores[9]).space.PX_8, style: tmp.container, children: items5 };
  const Stack = tmp3(tmp4[21]).Stack;
  const obj9 = { grow: true, shrink: true, size: "md", variant: "primary", text: intl.string(getLinkCode(stateFromStores[12]).t.Ej3B3Y), disabled: null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2, onPress: callback1, icon: closure_12(getLinkCode(stateFromStores[23]).ShareIcon, { size: "sm", color: "control-primary-text-default" }), iconPosition: "start" };
  const Button = tmp3(tmp4[22]).Button;
  intl = tmp3(tmp4[12]).intl;
  items5 = [closure_12(Button, obj9), ];
  const obj10 = { grow: true, shrink: true, size: "md", variant: "secondary", text: intl2.string(getLinkCode2(stateFromStores[24]).wd4yrz), disabled: null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2, onPress: callback2, icon: closure_12(getLinkCode(stateFromStores[25]).QrCodeIcon, { size: "sm", color: "control-secondary-text-default" }), iconPosition: "start" };
  const Button2 = tmp3(tmp4[22]).Button;
  intl2 = tmp3(tmp4[12]).intl;
  items5[1] = closure_12(Button2, obj10);
  return closure_13(Stack, obj8);
}
class FamilyCenterBannerButton {
  constructor(arg0) {
    let Button;
    let loading;
    let obj2;
    let obj3;
    let onPress;
    let text;
    ({ onPress, text, loading } = arg0);
    const tmp = closure_16();
    const obj = { style: tmp.button, children: closure_12(Button, obj2) };
    obj2 = { grow: true, shrink: true, size: "md", variant: "primary", text, onPress, loading, icon: closure_12(QrCodeIcon.QrCodeIcon, obj3), iconPosition: "start" };
    Button = components_Button_Button.Button;
    obj3 = { style: tmp.art, size: "custom", color: "white" };
    return closure_12(View, obj);
  }
}
const View = react_native.View;
({ CONNECT_GUARDIAN_BOTTOM_SHEET_KEY: metroImportDefault, FAMILY_CENTER_LINK_REQUEST_REGEX: metroImportAll, FamilyCenterAction: c9 } = FamilyCenterConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
const authStore3 = createStyles.createStyles({ button: { height: 50, width: "100%", marginTop: 16 }, art: { width: 18, height: 18, marginRight: 6 } });
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterBannerButton.tsx");

export default FamilyCenterBannerButton;
export const FamilyCenterTeenQRCodeButton = function FamilyCenterTeenQRCodeButton() {
  let tmp = null;
  const obj = useUserLinks;
  if (!obj.useHasMaxConnections()) {
    tmp = closure_12(FamilyCenterTeenQRCodeButtonInner, {});
  }
  return tmp;
};
export const FamilyCenterParentQRCodeButton = function FamilyCenterParentQRCodeButton() {
  let intl;
  let paths;
  function handleQrCodeScanSucess(dependencyMap) {
    let hostname;
    let pathname;
    const arr = require("ModalActionCreators");
    arr.pop();
    const obj = require("URLUtils");
    let toURLSafeResult = obj.toURLSafe(dependencyMap);
    const tmp = importDefault;
    if (toURLSafeResult == null) {
      toURLSafeResult = {};
    }
    ({ hostname, pathname } = toURLSafeResult);
    let tmp4 = null;
    if (null != hostname) {
      tmp4 = null;
      if (null != pathname) {
        tmp4 = null;
        const tmpResult = tmp(paths[27]);
        if (tmpResult.isDiscordHostname(hostname)) {
          if (null !== pathname.match(closure_1_8)) {
            const obj4 = handleQrCodeScanSucess(paths[28]);
            const result = obj4.handleFamilyCenterQRCodeScan(pathname, "FamilyCenterQRCodeScan");
          }
          tmp4 = tmp6;
        }
      }
    }
    return tmp4;
  }
  let tmp = handleQrCodeScanSucess;
  let obj = handleQrCodeScanSucess(8105);
  if (obj.useHasMaxConnections()) {
    const tmp6 = null;
    return null;
  } else {
    let tmp4 = FamilyCenterBannerButton;
    let obj2 = {
      text: intl.string(_modDef2487.z4a9HP),
      onPress() {
          let onScanSuccess;
          let tmp = importDefault;
          let obj = AnalyticsUtilsDefault;
          let obj2 = { action: React4.ScanQRCodeButton };
          obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
          const obj3 = MetaQuestUtils;
          const tmp5 = obj3.isMetaQuest() ? NativePermissionTypes.HEADSET_CAMERA : NativePermissionTypes.CAMERA;
          const tmpResult = NativePermissionUtilsDefault;
          const permission = tmpResult.requestPermission(tmp5);
          permission.then((result) => {
            const tmp = result;
            if (tmp) {
              const obj2 = { showHelp: false, onScanSuccess };
              const obj = require("ModalActionCreators");
              obj.pushLazy(handleQrCodeScanSucess(paths[20])(paths[31], paths.paths), obj2);
            }
          });
        }
    };
    intl = tmp(1115).intl;
    let tmp5 = importDefault;
    return closure_12(FamilyCenterBannerButton, obj2);
  }
};
