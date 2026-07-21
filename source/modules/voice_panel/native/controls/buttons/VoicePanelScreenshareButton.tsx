// Module ID: 15752
// Function ID: 120445
// Name: MobilePhoneShareIcon
// Dependencies: []
// Exports: default

// Module 15752 (MobilePhoneShareIcon)
let closure_3 = importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
if (obj.isMetaQuest()) {
  let MobilePhoneShareIcon = arg1(dependencyMap[6]).ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = arg1(dependencyMap[7]).MobilePhoneShareIcon;
}
const tmp2 = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[9]).radii.round };
obj.circle = obj;
obj.iconContainer = { <string:1446693987>: null, <string:1666068817>: "no-hide-descendants", <string:1370110668>: true, <string:1549880881>: "/assets/.cache/intl/ZGVzaWdu", <string:1638698833>: null };
obj.icon = {};
let closure_10 = arg1(dependencyMap[8]).createStyles(obj);
const obj2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default function ScreenshareButton(arg0) {
  let props;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const arg1 = React.useContext(importDefault(dependencyMap[10])).channelId;
  const tmp = callback2();
  let obj = arg1(dependencyMap[11]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  let obj1 = arg1(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => channel.getChannel(channelId));
  importDefault(dependencyMap[13])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp5 = importDefault(dependencyMap[14])(stateFromStores);
  const isActive = tmp5.isActive;
  const importDefault = isActive;
  const isFeatureEnabled = tmp5.isFeatureEnabled;
  const dependencyMap = isFeatureEnabled;
  const onPress = tmp5.onPress;
  const React = onPress;
  const items1 = [isActive, isFeatureEnabled, onPress];
  const callback = React.useCallback(() => {
    if (isFeatureEnabled) {
      let obj = isActive(isFeatureEnabled[15]);
      obj = { source: "connected button", was_active: isActive };
      obj.track(constants.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj);
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
  const tmp8 = importDefault(dependencyMap[16])("ScreenshareButton");
  const tmp9 = closure_8;
  const intl = arg1(dependencyMap[18]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[18]).t;
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
  const items3 = [callback(importDefault(dependencyMap[19]), { style: items2 }), ];
  obj1 = { style: tmp.iconContainer };
  const tmp10 = importDefault(dependencyMap[17]);
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
  items3[1] = tmp13(importDefault(dependencyMap[19]), obj1);
  obj.children = items3;
  return tmp9(tmp10, obj);
};
