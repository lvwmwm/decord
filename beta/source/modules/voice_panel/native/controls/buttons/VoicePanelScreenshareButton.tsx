// Module ID: 19761
// Function ID: 19762
// Name: VoicePanelScreenshareButton
// Dependencies: [19, 5019, 21, 1624, 14381, 19627, 5170, 11394, 19748, 504, 38, 19621, 19762, 19749, 1113, 7056, 2]
// Exports: default

// Module 19761 (VoicePanelScreenshareButton)
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import NativeViewDefault from "NativeView" /* 7056 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11394 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 14381 */;
import useVoicePanelScreenshareToggleDefault from "useVoicePanelScreenshareToggle" /* 19621 */;
import MobilePhoneShareIcon2 from "MobilePhoneShareIcon" /* 19627 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 19749 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = ScreenArrowIcon.ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = MobilePhoneShareIcon2.MobilePhoneShareIcon;
}
let closure_7 = createStyles.createStyles({ iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } });
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default function ScreenshareButton(arg0) {
  let isActive;
  let props;
  let stringResult;
  let videoBlocked;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp3 = closure_7();
  const obj = channelId(19748);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const items = [ChannelStore];
  const obj2 = channelId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  _modDef38(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = useVoicePanelScreenshareToggleDefault(stateFromStores, "VoicePanelScreenshareButton", "connected button");
  ({ isActive, videoBlocked } = tmp8);
  let tmp9 = !videoBlocked;
  const onPress = tmp8.onPress;
  if (!videoBlocked) {
    tmp9 = !tmp8.isFeatureEnabled;
  }
  if (tmp9) {
    let color = voicePanelButtonStyles.iconFillMuted.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  if (isActive) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  if (videoBlocked) {
    let MobilePhoneDenyIcon = tmp4(19762).MobilePhoneDenyIcon;
  } else {
    MobilePhoneDenyIcon = MobilePhoneShareIcon;
  }
  VoicePanelAnimatedButtonWrapperDefault;
  const intl = tmp4(1113).intl;
  const string = intl.string;
  const t = tmp4(1113).t;
  if (isActive) {
    stringResult = string(t.CpkXwZ);
  } else {
    stringResult = string(t.fjBNo1);
  }
  let iconBgSelected;
  if (isActive) {
    iconBgSelected = voicePanelButtonStyles.iconBgSelected;
  }
  NativeViewDefault;
  return <tmpResult onPress={onPress} disabled={tmp9} props={props} accessibilityLabel={stringResult} style={iconBgSelected}>{null}</tmpResult>;
};
