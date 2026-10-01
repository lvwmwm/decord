// Module ID: 17016
// Function ID: 17017
// Name: VoicePanelChatButton
// Dependencies: [19, 21, 4836, 576, 11754, 17008, 16954, 16995, 17009, 1115, 17017, 5901, 5385, 2]
// Exports: default

// Module 17016 (VoicePanelChatButton)
import nativeDefault from "native" /* 576 */;
import ChatIcon from "ChatIcon" /* 5385 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 16995 */;
import CircleWithCutoutDefault from "CircleWithCutout" /* 17017 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let size;
let react = react_mod;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, badge: size, notificationBadge: obj2 };
size = { position: "absolute", zIndex: 1, width: 10, height: 10, borderRadius: nativeDefault.radii.round, top: 0, right: 0 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx");

export default function ChatButton(props) {
  let iconContainer;
  let intl;
  let items1;
  props = props.props;
  const openTab = props.openTab;
  let connected;
  react = undefined;
  const wrapperSpecs = props.wrapperSpecs;
  const context = react.useContext(openTab(connected[4]));
  connected = context.connected;
  const channelId = context.channelId;
  let tmp2 = closure_7();
  react = tmp2;
  let obj = props(connected[5]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  let tmp4 = openTab(connected[6])(channelId);
  let closure_5 = tmp4;
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  const items = [openTab, connected];
  const callback = react.useCallback(() => {
    const value = connected.get();
    const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
    const obj = { tab: "chat", source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON };
    openTab(obj);
  }, items);
  const element = {
    onPress: callback,
    props,
    accessibilityLabel: intl.string(props(connected[9]).t["5KxXrK"]),
    children: react.useMemo(() => {
      let items1;
      let obj3;
      const children = [, , ];
      const obj = { fill: backgroundColor, circleRadius: props.width / 2, cutoutRadius: 8, enableCutout: null != hasOwnProperty, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius: 5, scaleToPixelDensity: true };
      children[0] = React3(CircleWithCutoutDefault, obj);
      const obj2 = { style: iconContainer.iconContainer, children: React3(ChatIcon.ChatIcon, obj3) };
      obj3 = { color: voicePanelButtonStyles.iconFill.color };
      const tmp6 = NativeViewDefault;
      children[1] = React3(tmp6, obj2);
      let tmp3Result = null != hasOwnProperty;
      const tmp = metroRequire;
      const tmp2 = hasOwnProperty;
      const tmp3 = React3;
      const tmp7 = iconContainer;
      if (tmp3Result) {
        const obj4 = { style: items1 };
        items1 = [, ];
        ({ badge: arr2[0], notificationBadge: arr2[1] } = tmp7);
        tmp3Result = tmp3(NativeViewDefault, obj4);
      }
      children[2] = tmp3Result;
      return tmp(tmp2, { children });
    }, items1)
  };
  let tmp6 = openTab(connected[8]);
  intl = props(connected[9]).intl;
  items1 = [backgroundColor, props.width, tmp4, , , , ];
  ({ iconContainer: arr2[3], badge: arr2[4], notificationBadge: arr2[5] } = tmp2);
  items1[6] = voicePanelButtonStyles.iconFill.color;
  return voicePanelButtonStyles(tmp6, element);
};
