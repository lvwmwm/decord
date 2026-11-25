// Module ID: 11705
// Function ID: 11706
// Name: StageSpeakInviteNotification
// Dependencies: [19, 17, 10582, 21, 5012, 575, 5628, 1112, 10224, 10228, 10620, 10630, 10300, 6084, 7910, 7216, 7805, 7460, 11706, 5603, 7801, 2]

// Module 11705 (StageSpeakInviteNotification)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 7801 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7805 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 10582 */;
import speakOnStageDefault from "speakOnStage" /* 11706 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let react = react_mod;
const View = react_native.View;
let closure_5 = InAppNotificationConstants.NOTIFICATION_PREVIEW_LINE_CLAMP;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { iconContainer: size, actions: obj2 };
size = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj2 = { width: "auto", alignSelf: "center", marginStart: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
const memoResult = react.memo(function StageSpeakInviteNotification(notification) {
  let HandRequestSpeakIcon;
  let Stack;
  let Text;
  let closure_3;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let obj4;
  let obj5;
  let obj6;
  let obj9;
  let text;
  notification = notification.notification;
  dependencyMap = undefined;
  react = undefined;
  let isVoicePanelOpen;
  let handleDismissNotification;
  let ref;
  let callback;
  const channel = notification.channel;
  const guild = notification.guild;
  let tmp = closure_8();
  let stringResult = guild(5628)(channel);
  if (stringResult == null) {
    const intl = channel(1112).intl;
    stringResult = intl.string(channel(1112).t["/YzI63"]);
  }
  dependencyMap = stringResult;
  const tmp6 = guild(10224)();
  react = tmp6;
  let obj = channel(10228);
  isVoicePanelOpen = obj.useIsVoicePanelOpen(channel.id);
  const obj2 = channel(10620);
  handleDismissNotification = obj2.useInAppNotificationContext().handleDismissNotification;
  ref = react.useRef(false);
  const items = [handleDismissNotification];
  callback = react.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      handleDismissNotification(arg0);
    }
  }, items);
  const items1 = [tmp6, callback];
  const effect = react.useEffect(() => {
    const tmp = closure_3;
    if (!tmp) {
      callback("invite_resolved");
    }
  }, items1);
  const items2 = [isVoicePanelOpen, callback];
  const effect1 = react.useEffect(() => {
    const tmp = isVoicePanelOpen;
    if (tmp) {
      callback("call_opened");
    }
  }, items2);
  const items3 = [stringResult, guild];
  const memo = react.useMemo(() => {
    let name;
    const obj = { type: "simple", text, secondaryText: name };
    name = undefined;
    if (guild != null) {
      name = guild.name;
    }
    return obj;
  }, items3);
  const obj3 = {
    icon: ref(isVoicePanelOpen, obj4),
    header: memo,
    rightAccessory: callback(Stack, obj6),
    children: ref(Text, obj9),
    onPress() {
      const obj = StageChannelActionCreatorExtras;
      obj.openStageChannel(channel);
      callback("notification_clicked");
    },
    notification
  };
  obj4 = { style: tmp.iconContainer, children: ref(HandRequestSpeakIcon, obj5) };
  const NotificationPressable = channel(10630).NotificationPressable;
  obj5 = { size: "md", color: guild(575).colors.WHITE };
  HandRequestSpeakIcon = channel(10300).HandRequestSpeakIcon;
  obj6 = { direction: "horizontal", spacing: guild(575).space.PX_8, style: tmp.actions, children: items4 };
  Stack = channel(6084).Stack;
  const obj7 = {
    size: "sm",
    variant: "secondary",
    icon: ref(channel(7216).XSmallIcon, {}),
    accessibilityLabel: intl2.string(channel(1112).t["1YDv7a"]),
    onPress() {
      const obj = StageChannelActionCreators;
      const result = obj.audienceAckRequestToSpeak(channel, true);
      callback("declined");
    }
  };
  const IconButton = channel(7910).IconButton;
  intl2 = channel(1112).intl;
  items4 = [ref(IconButton, obj7), ];
  const obj8 = {
    size: "sm",
    variant: "primary",
    icon: ref(channel(7460).CheckmarkSmallIcon, { color: "white" }),
    accessibilityLabel: intl3.string(channel(1112).t.MpO0px),
    onPress() {
      speakOnStageDefault(channel);
      callback("accepted");
    }
  };
  const IconButton2 = channel(7910).IconButton;
  intl3 = channel(1112).intl;
  items4[1] = ref(IconButton2, obj8);
  obj9 = { variant: "heading-sm/medium", color: "text-subtle", lineClamp: handleDismissNotification, children: intl4.string(channel(1112).t.Ul1RJQ) };
  Text = channel(5603).Text;
  intl4 = channel(1112).intl;
  return ref(NotificationPressable, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSpeakInviteNotification.tsx");

export default memoResult;
