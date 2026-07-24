// Module ID: 15924
// Function ID: 122983
// Name: MobilePhoneShareIcon
// Dependencies: [31, 27, 1348, 653, 33, 1553, 11592, 15925, 4130, 689, 10046, 15908, 566, 44, 10718, 675, 1324, 15909, 1212, 5515, 2]
// Exports: default

// Module 15924 (MobilePhoneShareIcon)
import result from "result";
import { Image } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import isMetaQuest from "isMetaQuest";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
if (isMetaQuest.isMetaQuest()) {
  let MobilePhoneShareIcon = require("ScreenArrowIcon").ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = require("MobilePhoneShareIcon").MobilePhoneShareIcon;
}
isMetaQuest = {};
isMetaQuest = { width: "100%", height: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
isMetaQuest.circle = isMetaQuest;
isMetaQuest.iconContainer = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
isMetaQuest.icon = { width: 24, height: 24 };
isMetaQuest = _createForOfIteratorHelperLoose.createStyles(isMetaQuest);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default function ScreenshareButton(arg0) {
  let props;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const channelId = onPress.useContext(isActive(isFeatureEnabled[10])).channelId;
  const tmp = isMetaQuest();
  let obj = channelId(isFeatureEnabled[11]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  let obj1 = channelId(isFeatureEnabled[12]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getChannel(channelId));
  isActive(isFeatureEnabled[13])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp5 = isActive(isFeatureEnabled[14])(stateFromStores);
  isActive = tmp5.isActive;
  isFeatureEnabled = tmp5.isFeatureEnabled;
  onPress = tmp5.onPress;
  const items1 = [isActive, isFeatureEnabled, onPress];
  const callback = onPress.useCallback(() => {
    if (isFeatureEnabled) {
      let obj = isActive(isFeatureEnabled[15]);
      obj = { source: "connected button", was_active: isActive };
      obj.track(outer1_6.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj);
      onPress();
    }
  }, items1);
  if (!isFeatureEnabled) {
    let color = voicePanelButtonStyles.iconFillMuted.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  if (isActive) {
    let backgroundColor = voicePanelButtonStyles.iconBgSelected.backgroundColor;
  } else {
    backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  }
  if (isActive) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  obj = { onPress: callback, disabled: tmp7, props };
  const tmp8 = isActive(isFeatureEnabled[16])("ScreenshareButton");
  const tmp9 = closure_8;
  const intl = channelId(isFeatureEnabled[18]).intl;
  const string = intl.string;
  const t = channelId(isFeatureEnabled[18]).t;
  if (isActive) {
    let stringResult = string(t.CpkXwZ);
  } else {
    stringResult = string(t.fjBNo1);
  }
  obj.accessibilityLabel = stringResult;
  let iconBgSelected;
  if (isActive) {
    iconBgSelected = voicePanelButtonStyles.iconBgSelected;
  }
  obj.style = iconBgSelected;
  const items2 = [tmp.circle, ];
  obj = { backgroundColor };
  items2[1] = obj;
  const items3 = [callback(isActive(isFeatureEnabled[19]), { style: items2 }), ];
  obj1 = { style: tmp.iconContainer };
  const tmp10 = isActive(isFeatureEnabled[17]);
  const tmp13 = callback;
  if (tmp8) {
    const obj2 = { color };
    let tmp15Result = tmp15(MobilePhoneShareIcon, obj2);
  } else {
    const obj3 = { source: tmp5.imgSource };
    const items4 = [tmp.icon, ];
    const obj4 = { tintColor: color };
    items4[1] = obj4;
    obj3.style = items4;
    tmp15Result = tmp15(Image, obj3);
  }
  obj1.children = tmp15Result;
  items3[1] = tmp13(isActive(isFeatureEnabled[19]), obj1);
  obj.children = items3;
  return tmp9(tmp10, obj);
};
