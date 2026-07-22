// Module ID: 13665
// Function ID: 103488
// Name: FamilyCenterTeenQRCodeButtonInner
// Dependencies: []
// Exports: FamilyCenterParentQRCodeButton, FamilyCenterTeenQRCodeButton

// Module 13665 (FamilyCenterTeenQRCodeButtonInner)
function FamilyCenterTeenQRCodeButtonInner() {
  const callback = React.useCallback(() => {
    const intl = getLinkCode(stateFromStores[12]).intl;
    getLinkCode(stateFromStores[11]).presentFailedToast(intl.string(getLinkCode(stateFromStores[12]).t.R0RpRX));
  }, []);
  let obj = arg1(dependencyMap[13]);
  const getLinkCode = obj.useFamilyCenterActions().getLinkCode;
  const arg1 = getLinkCode;
  let obj1 = arg1(dependencyMap[13]);
  const getLinkCode2 = obj1.useFamilyCenterActions({ onError: callback }).getLinkCode;
  const importDefault = getLinkCode2;
  const tmp = callback3();
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[14]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const dependencyMap = stateFromStores;
  const obj3 = arg1(dependencyMap[14]);
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[14]).useStateFromStores(items1, () => store.getLinkCode());
  const React = stateFromStores1;
  const obj4 = arg1(dependencyMap[14]);
  const items2 = [closure_6];
  const stateFromStores2 = arg1(dependencyMap[14]).useStateFromStores(items2, () => store.getLinkCodeExpiresAt());
  const View = stateFromStores2;
  const obj5 = arg1(dependencyMap[14]);
  const userQRLinkUrl = arg1(dependencyMap[10]).useUserQRLinkUrl();
  const effect = React.useEffect(() => {
    getLinkCode();
  }, []);
  importDefault(dependencyMap[15])(stateFromStores2, getLinkCode);
  const items3 = [stateFromStores, stateFromStores1];
  const items4 = [stateFromStores1, stateFromStores2, getLinkCode2];
  const callback1 = React.useCallback(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != stateFromStores1;
    }
    if (tmp) {
      let obj = getLinkCode2(stateFromStores[16]);
      obj = { action: closure_9.ShareLink };
      obj.track(constants.FAMILY_CENTER_ACTION, obj);
      const result = getLinkCode(stateFromStores[17]).shareGuardianConnectLink(stateFromStores, stateFromStores1);
      const obj3 = getLinkCode(stateFromStores[17]);
    }
  }, items3);
  const callback2 = React.useCallback(() => {
    let tmp = null != stateFromStores1;
    if (tmp) {
      tmp = null != stateFromStores2;
    }
    if (tmp) {
      let obj = getLinkCode2(stateFromStores[16]);
      obj = { action: closure_9.ShowQRCodeModal };
      obj.track(constants.FAMILY_CENTER_ACTION, obj);
      obj = { linkCode: stateFromStores1, expiresAt: stateFromStores2, onRefresh: getLinkCode2 };
      getLinkCode2(stateFromStores[18]).openLazy(getLinkCode(stateFromStores[20])(stateFromStores[19], stateFromStores.paths), closure_7, obj);
      const obj3 = getLinkCode2(stateFromStores[18]);
    }
  }, items4);
  obj = { direction: "horizontal", spacing: importDefault(dependencyMap[9]).space.PX_8, style: tmp.container };
  obj = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj.text = intl.string(arg1(dependencyMap[12]).t.Ej3B3Y);
  obj.disabled = null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2;
  obj.onPress = callback1;
  obj.icon = callback(arg1(dependencyMap[23]).ShareIcon, { "Bool(false)": "%Float64Array%", "Bool(false)": "GAME_CLAIM_NOTICE_MARGIN_BOTTOM" });
  obj.iconPosition = "start";
  const items5 = [callback(arg1(dependencyMap[22]).Button, obj), ];
  obj1 = {};
  const intl2 = arg1(dependencyMap[12]).intl;
  obj1.text = intl2.string(importDefault(dependencyMap[24]).wd4yrz);
  obj1.disabled = null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2;
  obj1.onPress = callback2;
  obj1.icon = callback(arg1(dependencyMap[25]).QrCodeIcon, { "Bool(false)": 1, "Bool(false)": 12 });
  obj1.iconPosition = "start";
  items5[1] = callback(arg1(dependencyMap[22]).Button, obj1);
  obj.children = items5;
  return callback2(arg1(dependencyMap[21]).Stack, obj);
}
class FamilyCenterBannerButton {
  constructor(arg0) {
    ({ onPress, text, loading } = global);
    tmp = closure_15();
    obj = { style: tmp.button };
    obj = { text, onPress, loading };
    obj1 = { style: tmp.art };
    obj.icon = jsx(arg1(dependencyMap[25]).QrCodeIcon, obj1);
    obj.iconPosition = "start";
    obj.children = jsx(arg1(dependencyMap[22]).Button, obj);
    return jsx(View, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ CONNECT_GUARDIAN_BOTTOM_SHEET_KEY: closure_7, FAMILY_CENTER_LINK_REQUEST_REGEX: closure_8, FamilyCenterAction: closure_9 } = arg1(dependencyMap[4]));
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const NativePermissionTypes = arg1(dependencyMap[6]).NativePermissionTypes;
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[9]).space.PX_16 };
obj.container = obj;
let closure_14 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[7]);
let closure_15 = arg1(dependencyMap[8]).createStyles({ button: {}, art: { -9223372036854775808: 0, 9223372036854775807: 1, 0: 3 } });
const obj4 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterBannerButton.tsx");

export default FamilyCenterBannerButton;
export const FamilyCenterTeenQRCodeButton = function FamilyCenterTeenQRCodeButton() {
  let tmp = null;
  if (!obj.useHasMaxConnections()) {
    tmp = callback(FamilyCenterTeenQRCodeButtonInner, {});
  }
  return tmp;
};
export const FamilyCenterParentQRCodeButton = function FamilyCenterParentQRCodeButton() {
  function handleQrCodeScanSucess(closure_0) {
    let hostname;
    let pathname;
    let arr = callback(closure_2[26]);
    arr = arr.pop();
    let toURLSafeResult = callback(closure_2[27]).toURLSafe(closure_0);
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
          if (null !== pathname.match(closure_8)) {
            const result = handleQrCodeScanSucess(closure_2[28]).handleFamilyCenterQRCodeScan(pathname, "FamilyCenterQRCodeScan");
            const obj4 = handleQrCodeScanSucess(closure_2[28]);
          }
          tmp2 = tmp6;
        }
        const obj3 = callback(closure_2[27]);
      }
    }
    return tmp2;
  }
  let obj = handleQrCodeScanSucess(dependencyMap[10]);
  if (obj.useHasMaxConnections()) {
    return null;
  } else {
    obj = {};
    const intl = handleQrCodeScanSucess(dependencyMap[12]).intl;
    obj.text = intl.string(importDefault(dependencyMap[24]).z4a9HP);
    obj.onPress = function onPress() {
      let obj = callback(closure_2[16]);
      obj = { action: ScanQRCodeButton.ScanQRCodeButton };
      obj.track(constants.FAMILY_CENTER_ACTION, obj);
      const obj3 = handleQrCodeScanSucess(closure_2[29]);
      const tmp3 = handleQrCodeScanSucess(closure_2[29]).isMetaQuest() ? closure_11.HEADSET_CAMERA : closure_11.CAMERA;
      const permission = callback(closure_2[30]).requestPermission(tmp3);
      permission.then((arg0) => {
        if (arg0) {
          let obj = callback2(paths[26]);
          obj = { showHelp: false, onScanSuccess: callback };
          obj.pushLazy(callback(paths[20])(paths[31], paths.paths), obj);
        }
      });
    };
    return callback(FamilyCenterBannerButton, obj);
  }
};
