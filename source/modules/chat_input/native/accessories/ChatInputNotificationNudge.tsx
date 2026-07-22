// Module ID: 11437
// Function ID: 89020
// Name: ChatInputNotificationNudgeImpl
// Dependencies: []
// Exports: default

// Module 11437 (ChatInputNotificationNudgeImpl)
function ChatInputNotificationNudgeImpl(onDismiss) {
  let surface;
  ({ promptType: closure_0, location: closure_1, surface } = onDismiss);
  const dependencyMap = surface;
  onDismiss = onDismiss.onDismiss;
  let obj = arg1(dependencyMap[12]);
  const enabled = obj.useMobileVisualRefreshConfig({ location: "ChatInputNotificationNudge" }).enabled;
  const tmp = callback5(enabled);
  const items = [surface];
  callback3(() => {
    let obj = callback2(surface[13]);
    obj = { action: constants3.IMPRESSION, prompt_type: surface };
    obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
  }, items);
  obj = {};
  const items1 = [tmp.container, ];
  let containerRefreshShadow = enabled;
  if (enabled) {
    containerRefreshShadow = tmp.containerRefreshShadow;
  }
  items1[1] = containerRefreshShadow;
  obj.style = items1;
  obj = { style: tmp.iconContainer };
  const obj1 = { size: "sm", color: importDefault(dependencyMap[11]).colors.ICON_STRONG };
  obj.children = callback4(arg1(dependencyMap[14]).BellSlashIcon, obj1);
  const items2 = [callback4(View, obj), , ];
  const obj2 = { style: tmp.contentContainer };
  const obj3 = {};
  let str = "text-md/medium";
  if (enabled) {
    str = "text-sm/medium";
  }
  obj3.variant = str;
  let str2 = "text-strong";
  if (enabled) {
    str2 = "text-default";
  }
  obj3.color = str2;
  obj3.children = onDismiss.body;
  const items3 = [callback4(arg1(dependencyMap[15]).Text, obj3), ];
  const obj4 = {
    hitSlop: 8,
    onPress() {
      let obj = callback(surface[17]);
      const pushNotificationPermission = obj.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, callback2, closure_11);
      obj = { action: constants3.ACCEPT, prompt_type: surface };
      callback2(surface[13]).track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
    },
    style: tmp.ctaButton,
    accessibilityRole: "button"
  };
  const obj5 = {};
  let str3 = "text-sm/semibold";
  if (enabled) {
    str3 = "text-xs/medium";
  }
  obj5.variant = str3;
  obj5.color = "text-brand";
  const intl = arg1(dependencyMap[18]).intl;
  obj5.children = intl.string(arg1(dependencyMap[18]).t.+7MDbQ);
  obj4.children = callback4(arg1(dependencyMap[15]).Text, obj5);
  items3[1] = callback4(arg1(dependencyMap[16]).PressableOpacity, obj4);
  obj2.children = items3;
  items2[1] = closure_18(View, obj2);
  const obj6 = {
    onPress() {
      let obj = callback(surface[19]);
      const result = obj.setPushPermissionReactivationSeen(callback);
      obj = { action: constants3.DISMISS, prompt_type: surface, dismiss_logic: "relaxed" };
      callback2(surface[13]).track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
      onDismiss();
    }
  };
  const intl2 = arg1(dependencyMap[18]).intl;
  obj6.accessibilityLabel = intl2.string(arg1(dependencyMap[18]).t.WAI6xu);
  obj6.children = callback4(arg1(dependencyMap[20]).XSmallIcon, {});
  items2[2] = callback4(arg1(dependencyMap[16]).PressableHighlight, obj6);
  obj.children = items2;
  return closure_18(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
({ useCallback: closure_4, useEffect: closure_5 } = arg1(dependencyMap[1]));
const View = arg1(dependencyMap[2]).View;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const PermissionPromptType = arg1(dependencyMap[5]).PermissionPromptType;
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_10, NOOP: closure_11 } = arg1(dependencyMap[6]));
const ContentDismissActionType = arg1(dependencyMap[7]).ContentDismissActionType;
const tmp3 = arg1(dependencyMap[6]);
({ EventActionLocation: closure_13, EventActionType: closure_14, NotificationNudgeAnalyticsAction: closure_15, NotificationNudgeSurface: closure_16 } = arg1(dependencyMap[8]));
const tmp4 = arg1(dependencyMap[8]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[9]));
const tmp5 = arg1(dependencyMap[9]);
let closure_19 = arg1(dependencyMap[10]).createStyles((arg0) => {
  let obj = {};
  obj = { 33837506: "d69e45ebad9f40b8957190ed86104514", 1471013480: "ic_application_command_24px", 1310491355: "png", -404790432: true, -1756080938: "/assets/images/native/emoji", padding: importDefault(dependencyMap[11]).space.PX_12, backgroundColor: importDefault(dependencyMap[11]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderTopWidth: importDefault(dependencyMap[11]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH, borderColor: importDefault(dependencyMap[11]).colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: importDefault(dependencyMap[11]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: importDefault(dependencyMap[11]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, marginBottom: importDefault(dependencyMap[11]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM };
  let num;
  if (arg0) {
    num = 12;
  }
  obj.gap = num;
  obj.container = obj;
  obj = {};
  const merged = Object.assign(importDefault(dependencyMap[11]).shadows.SHADOW_MEDIUM);
  obj.containerRefreshShadow = obj;
  const obj1 = {};
  let num2 = 10;
  if (arg0) {
    num2 = 0;
  }
  obj1.padding = num2;
  let str = "transparent";
  if (!arg0) {
    str = importDefault(dependencyMap[11]).colors.BACKGROUND_MOD_STRONG;
  }
  obj1.backgroundColor = str;
  obj1.borderRadius = importDefault(dependencyMap[11]).radii.round;
  obj.iconContainer = obj1;
  const obj2 = { flex: 1 };
  let num3 = 0;
  if (!arg0) {
    num3 = importDefault(dependencyMap[11]).space.PX_12;
  }
  obj2.marginLeft = num3;
  obj.contentContainer = obj2;
  obj.ctaButton = { alignSelf: "flex-start" };
  return obj;
});
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx");

export default function ChatInputNotificationNudge(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  let dependencyMap;
  let obj = arg1(dependencyMap[21]);
  const items = [closure_7, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guildId = channel.getGuildId();
    if (channel.isThread()) {
      let isMutedResult = muted.isMuted(channel.id);
    } else {
      isMutedResult = channelMuted.isChannelMuted(guildId, channel.id);
    }
    return isMutedResult;
  });
  const tmp2 = !stateFromStores && !importDefault(dependencyMap[22])(channel);
  let obj1 = arg1(dependencyMap[17]);
  const shouldShowPushNotificationNudgeByPromptType = obj1.useShouldShowPushNotificationNudgeByPromptType(PermissionPromptType.CHANNEL_BANNER);
  let obj2 = importDefault(dependencyMap[23]);
  const shouldShowPushNotificationNudgeByPromptType1 = arg1(dependencyMap[17]).useShouldShowPushNotificationNudgeByPromptType(PermissionPromptType.POST_REACTION_BANNER);
  const obj4 = arg1(dependencyMap[17]);
  let prop = null;
  if (tmp2) {
    prop = null;
    if (shouldShowPushNotificationNudgeByPromptType) {
      prop = arg1(dependencyMap[25]).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
    }
  }
  obj = { cooldownDurationMs: 604800000 };
  const tmp8 = callback(arg1(dependencyMap[24]).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  const first = tmp8[0];
  importDefault = tmp10;
  const obj5 = arg1(dependencyMap[24]);
  let prop1 = null;
  if (tmp2) {
    prop1 = null;
    if (obj2.useConfig({ location: "ChatInputNotificationNudge" }).enabled) {
      prop1 = null;
      if (shouldShowPushNotificationNudgeByPromptType1) {
        prop1 = null;
        if (null == first) {
          prop1 = arg1(dependencyMap[25]).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
        }
      }
    }
  }
  obj = { cooldownDurationMs: 604800000 };
  const tmp14 = callback(arg1(dependencyMap[24]).useSelectedTimeRecurringDismissibleContent(prop1, obj, undefined, true), 2);
  dependencyMap = tmp15;
  const items1 = [tmp8[1]];
  const items2 = [tmp14[1]];
  const obj7 = arg1(dependencyMap[24]);
  const tmp16 = callback2(() => tmp10(constants.USER_DISMISS), items1);
  if (first === arg1(dependencyMap[25]).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER) {
    obj1 = { promptType: PermissionPromptType.CHANNEL_BANNER, location: constants.CHANNEL_BANNER, surface: constants2.CHANNEL_BANNER };
    const intl = arg1(dependencyMap[18]).intl;
    obj1.body = intl.string(arg1(dependencyMap[18]).t./6SnPw);
    obj1.onDismiss = tmp16;
    let tmp25 = callback4(ChatInputNotificationNudgeImpl, obj1);
  } else {
    tmp25 = null;
    if (tmp14[0] === arg1(dependencyMap[25]).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER) {
      obj2 = { promptType: PermissionPromptType.POST_REACTION_BANNER, location: constants.POST_REACTION, surface: constants2.POST_REACTION_BANNER };
      const intl2 = arg1(dependencyMap[18]).intl;
      obj2.body = intl2.string(arg1(dependencyMap[18]).t.VS6ey0);
      obj2.onDismiss = tmp17;
      tmp25 = callback4(ChatInputNotificationNudgeImpl, obj2);
    }
  }
  return tmp25;
};
