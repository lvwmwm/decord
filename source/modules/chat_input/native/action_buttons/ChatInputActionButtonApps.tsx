// Module ID: 11376
// Function ID: 88460
// Dependencies: [31, 27, 11132, 33, 11193, 11248, 11377, 11374, 4539, 11379, 1212, 2]

// Module 11376
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { ChatInputActionType } from "TextAreaCta";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const memoResult = importAllResult.memo(function ChatInputActionButtonApps(onPress) {
  let accessible;
  let active;
  let canShowBotsBanner;
  let canShowOnboarding;
  let channel;
  let disabled;
  let styleActive;
  let styleActiveIcon;
  let styleButton;
  ({ active, channel } = onPress);
  onPress = onPress.onPress;
  canShowOnboarding = undefined;
  let closure_7;
  ({ accessible, disabled, styleButton, styleActive, styleActiveIcon } = onPress);
  const ref = canShowBotsBanner.useRef(null);
  let obj = { channelId: channel.id };
  const tmp2 = onPress(ref[4])(obj);
  ({ canShowOnboarding, canShowBotsBanner } = tmp2);
  const canShowAppsOrActivitiesBanner = tmp2.canShowAppsOrActivitiesBanner;
  const willShowGlobalSearchOnboarding = tmp2.willShowGlobalSearchOnboarding;
  if (canShowOnboarding) {
    canShowOnboarding = !tmp2.fromTriggeredOnboarding;
  }
  closure_7 = canShowBotsBanner.useRef(-1);
  const items = [canShowOnboarding, canShowAppsOrActivitiesBanner, canShowBotsBanner, , , ];
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  items[3] = guild_id;
  items[4] = channel.id;
  items[5] = willShowGlobalSearchOnboarding;
  const effect = canShowBotsBanner.useEffect(() => {
    if (canShowOnboarding) {
      if (canShowBotsBanner) {
        let guild_id;
        let obj = { channelId: channel.id };
        const _Date2 = Date;
        obj.timeMs = Date.now();
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        obj.guildId = guild_id;
        obj.canShowBotsBanner = true;
        obj.canShowAppsOrActivitiesBanner = false;
        obj.willShowGlobalSearchOnboarding = willShowGlobalSearchOnboarding;
        const result = channel(ref[5]).setTriggeredOnboardingContentMetadata(obj);
        const obj3 = channel(ref[5]);
      } else if (canShowAppsOrActivitiesBanner) {
        let guild_id1;
        obj = channel(ref[5]);
        obj = { channelId: channel.id };
        const _Date = Date;
        obj.timeMs = Date.now();
        if (null != channel) {
          guild_id1 = channel.guild_id;
        }
        obj.guildId = guild_id1;
        obj.canShowBotsBanner = false;
        obj.canShowAppsOrActivitiesBanner = true;
        obj.willShowGlobalSearchOnboarding = willShowGlobalSearchOnboarding;
        const result1 = obj.setTriggeredOnboardingContentMetadata(obj);
      }
      if (willShowGlobalSearchOnboarding) {
        let guild_id2;
        const obj1 = { channelId: channel.id };
        const _Date3 = Date;
        obj1.timeMs = Date.now();
        if (null != channel) {
          guild_id2 = channel.guild_id;
        }
        obj1.guildId = guild_id2;
        obj1.canShowAppsOrActivitiesBanner = canShowAppsOrActivitiesBanner;
        obj1.canShowBotsBanner = canShowBotsBanner;
        obj1.willShowGlobalSearchOnboarding = true;
        const result2 = channel(ref[5]).setTriggeredOnboardingContentMetadata(obj1);
        const obj5 = channel(ref[5]);
      }
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(() => {
        channel(ref[5]).setLastSeenTimeMs();
      }, channel(ref[6]).APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS);
    }
  }, items);
  obj = {};
  let tmp8 = null;
  if (canShowOnboarding) {
    tmp8 = null;
    if (!active) {
      obj = { channelId: channel.id };
      tmp8 = canShowOnboarding(channel(ref[6]).AppLauncherOnboardingChatInputButtonAnimation, obj);
    }
  }
  const items1 = [tmp8, ];
  let obj1 = {
    ref,
    accessible,
    style: styleButton,
    disabled,
    active,
    activeIconStyle: styleActiveIcon,
    activeStyle: styleActive,
    onPress(arg0) {
      clearTimeout(ref.current);
      onPress(arg0, willShowGlobalSearchOnboarding.APPS, ref);
      let obj = channel(ref[8]);
      obj = { ref };
      const result = obj.setAccessibilityFocus(obj);
    },
    IconComponent: channel(ref[9]).AppLauncherButtonIcon
  };
  const intl = channel(ref[10]).intl;
  obj1.accessibilityLabel = intl.string(channel(ref[10]).t.rugBPp);
  obj1.accessibilityState = { expanded: active };
  items1[1] = canShowOnboarding(onPress(ref[7]), obj1);
  obj.children = items1;
  return closure_7(canShowAppsOrActivitiesBanner, obj);
});
let result = require("TextAreaCta").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonApps.tsx");

export default memoResult;
