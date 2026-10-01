// Module ID: 11723
// Function ID: 11724
// Name: ChatInputActionButtonApps
// Dependencies: [19, 17, 11444, 21, 11525, 11581, 11724, 11721, 5275, 11726, 1115, 2]

// Module 11723 (ChatInputActionButtonApps)
import react_native from "react-native" /* 17 */;
import react_native2 from "react-native" /* 5275 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import AppLauncherOnboardingActionCreators from "AppLauncherOnboardingActionCreators" /* 11581 */;
import AppLauncherOnboardingChatInputButtonAnimation from "AppLauncherOnboardingChatInputButtonAnimation" /* 11724 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const ChatInputActionType = ChatInputConstants.ChatInputActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const memoResult = react.memo(function ChatInputActionButtonApps(onPress) {
  let accessible;
  let active;
  let canShowBotsBanner;
  let canShowOnboarding;
  let channel;
  let disabled;
  let intl;
  let items1;
  let styleActive;
  let styleActiveIcon;
  let styleButton;
  ({ active, channel } = onPress);
  onPress = onPress.onPress;
  canShowBotsBanner = undefined;
  canShowOnboarding = undefined;
  let obj = canShowBotsBanner;
  ({ accessible, disabled, styleButton, styleActive, styleActiveIcon } = onPress);
  let ref = canShowBotsBanner.useRef(null);
  let tmp3 = ref;
  let obj2 = { channelId: channel.id };
  const tmp4 = onPress(ref[4])(obj2);
  ({ canShowOnboarding, canShowBotsBanner } = tmp4);
  const canShowAppsOrActivitiesBanner = tmp4.canShowAppsOrActivitiesBanner;
  const willShowGlobalSearchOnboarding = tmp4.willShowGlobalSearchOnboarding;
  const tmp2 = onPress;
  if (canShowOnboarding) {
    canShowOnboarding = !tmp4.fromTriggeredOnboarding;
  }
  ref = obj.useRef(-1);
  const items = [canShowOnboarding, canShowAppsOrActivitiesBanner, canShowBotsBanner, , , ];
  let guild_id;
  const useEffect = obj.useEffect;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  items[3] = guild_id;
  items[4] = channel.id;
  items[5] = willShowGlobalSearchOnboarding;
  const effect = useEffect(() => {
    let guild_id;
    let guild_id1;
    let guild_id2;
    const tmp = canShowOnboarding;
    if (tmp) {
      if (canShowBotsBanner) {
        const _Date2 = Date;
        const obj2 = { channelId: channel.id, timeMs: Date.now(), guildId: guild_id, canShowBotsBanner: true, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding };
        const setTriggeredOnboardingContentMetadata2 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata;
        AppLauncherOnboardingActionCreators;
        guild_id = undefined;
        const tmp16 = channel;
        if (channel != null) {
          guild_id = tmp16.guild_id;
        }
        const result = setTriggeredOnboardingContentMetadata2(obj2);
      } else {
        const tmp3 = canShowAppsOrActivitiesBanner;
        if (tmp3) {
          let obj = { channelId: channel.id, timeMs: Date.now(), guildId: guild_id1, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: true, willShowGlobalSearchOnboarding };
          const _Date = Date;
          const setTriggeredOnboardingContentMetadata = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata;
          AppLauncherOnboardingActionCreators;
          guild_id1 = undefined;
          const tmp7 = channel;
          if (channel != null) {
            guild_id1 = tmp7.guild_id;
          }
          const result1 = setTriggeredOnboardingContentMetadata(obj);
        }
      }
      const tmp22 = willShowGlobalSearchOnboarding;
      if (tmp22) {
        const _Date3 = Date;
        const obj3 = { channelId: channel.id, timeMs: Date.now(), guildId: guild_id2, canShowAppsOrActivitiesBanner, canShowBotsBanner, willShowGlobalSearchOnboarding: true };
        const setTriggeredOnboardingContentMetadata3 = AppLauncherOnboardingActionCreators.setTriggeredOnboardingContentMetadata;
        AppLauncherOnboardingActionCreators;
        guild_id2 = undefined;
        const tmp26 = channel;
        if (channel != null) {
          guild_id2 = tmp26.guild_id;
        }
        const result2 = setTriggeredOnboardingContentMetadata3(obj3);
      }
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        const obj = channel(ref[5]);
        obj.setLastSeenTimeMs();
      }, AppLauncherOnboardingChatInputButtonAnimation.APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS);
    }
  }, items);
  let tmp9 = null;
  let tmp7 = ref;
  const tmp8 = canShowAppsOrActivitiesBanner;
  if (canShowOnboarding) {
    tmp9 = null;
    if (!active) {
      let obj3 = { channelId: channel.id };
      tmp9 = canShowOnboarding(channel(tmp3[6]).AppLauncherOnboardingChatInputButtonAnimation, obj3);
    }
  }
  const obj4 = { children: items1 };
  items1 = [tmp9, ];
  const obj5 = {
    ref,
    accessible,
    style: styleButton,
    disabled,
    active,
    activeIconStyle: styleActiveIcon,
    activeStyle: styleActive,
    onPress(arg0) {
      clearTimeout(ref.current);
      onPress(arg0, ChatInputActionType.APPS, ref);
      const obj = react_native2;
      const obj2 = { ref };
      const result = obj.setAccessibilityFocus(obj2);
    },
    IconComponent: channel(tmp3[9]).AppLauncherButtonIcon,
    accessibilityLabel: intl.string(channel(tmp3[10]).t.rugBPp),
    accessibilityState: { expanded: active }
  };
  const tmp2Result = tmp2(tmp3[7]);
  intl = channel(tmp3[10]).intl;
  items1[1] = canShowOnboarding(tmp2Result, obj5);
  return tmp7(tmp8, obj4);
});
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonApps.tsx");

export default memoResult;
