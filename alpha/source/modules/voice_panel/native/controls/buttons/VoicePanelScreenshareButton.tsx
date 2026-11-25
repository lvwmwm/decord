// Module ID: 19515
// Function ID: 19516
// Name: VoicePanelScreenshareButton
// Dependencies: [19, 4861, 21, 1625, 13467, 18147, 5012, 19501, 18141, 19516, 19502, 1112, 7024, 11733, 504, 2]
// Exports: default

// Module 19515 (VoicePanelScreenshareButton)
import Fragment from "Fragment" /* 21 */;
import NativeViewDefault from "NativeView" /* 7024 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11733 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 13467 */;
import useVoicePanelScreenshareToggleDefault from "useVoicePanelScreenshareToggle" /* 18141 */;
import MobilePhoneShareIcon2 from "MobilePhoneShareIcon" /* 18147 */;
import VoicePanelStyles from "VoicePanelStyles" /* 19501 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 19502 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

function ScreenshareButtonInner(arg0) {
  let channel;
  let isActive;
  let props;
  let stringResult;
  let videoBlocked;
  let wrapperSpecs;
  ({ props, wrapperSpecs, channel } = arg0);
  const tmp = closure_7();
  const obj = VoicePanelStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp6 = useVoicePanelScreenshareToggleDefault(channel, "VoicePanelScreenshareButton", "connected button");
  ({ isActive, videoBlocked } = tmp6);
  let tmp7 = !videoBlocked;
  const onPress = tmp6.onPress;
  if (!videoBlocked) {
    tmp7 = !tmp6.isFeatureEnabled;
  }
  if (tmp7) {
    let color = voicePanelButtonStyles.iconFillMuted.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  if (isActive) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  if (videoBlocked) {
    let MobilePhoneDenyIcon = tmp2(19516).MobilePhoneDenyIcon;
  } else {
    MobilePhoneDenyIcon = MobilePhoneShareIcon;
  }
  VoicePanelAnimatedButtonWrapperDefault;
  const intl = tmp2(1112).intl;
  const string = intl.string;
  const t = tmp2(1112).t;
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
  return <tmp5Result onPress={onPress} disabled={tmp7} props={props} accessibilityLabel={stringResult} style={iconBgSelected}>{null}</tmp5Result>;
}
const jsx = Fragment.jsx;
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = ScreenArrowIcon.ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = MobilePhoneShareIcon2.MobilePhoneShareIcon;
}
let closure_7 = createStyles.createStyles({ iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } });
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default function ScreenshareButton(arg0) {
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const merged = Object.assign(arg0);
    tmp2 = <ScreenshareButtonInner channel={stateFromStores} />;
  }
  return tmp2;
};
