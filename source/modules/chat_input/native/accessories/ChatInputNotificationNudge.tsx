// Module ID: 11447
// Function ID: 89070
// Name: ChatInputNotificationNudgeImpl
// Dependencies: [57, 31, 27, 3760, 4325, 11448, 653, 1345, 11449, 33, 4130, 689, 1324, 675, 10202, 4126, 4660, 11450, 1212, 11451, 5119, 566, 11268, 11459, 5802, 1334, 2]
// Exports: default

// Module 11447 (ChatInputNotificationNudgeImpl)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { PermissionPromptType } from "_isNativeReflectConstruct";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import EventActionType from "EventActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let closure_5;
const require = arg1;
function ChatInputNotificationNudgeImpl(onDismiss) {
  let importDefault;
  let require;
  let surface;
  ({ promptType: require, location: importDefault, surface } = onDismiss);
  onDismiss = onDismiss.onDismiss;
  let obj = require(surface[12]);
  const enabled = obj.useMobileVisualRefreshConfig({ location: "ChatInputNotificationNudge" }).enabled;
  const tmp = callback5(enabled);
  const items = [surface];
  callback3(() => {
    let obj = outer1_1(surface[13]);
    obj = { action: outer1_15.IMPRESSION, prompt_type: surface };
    obj.track(outer1_10.CONTEXTUAL_REMINDER_ACTION, obj);
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
  const obj1 = { size: "sm", color: importDefault(surface[11]).colors.ICON_STRONG };
  obj.children = callback4(require(surface[14]).BellSlashIcon, obj1);
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
  const items3 = [callback4(require(surface[15]).Text, obj3), ];
  const obj4 = {
    hitSlop: 8,
    onPress() {
      let obj = outer1_0(surface[17]);
      const pushNotificationPermission = obj.requestPushNotificationPermission(outer1_14.ALLOW_TO_REQUEST, closure_1, outer1_11);
      obj = { action: outer1_15.ACCEPT, prompt_type: surface };
      outer1_1(surface[13]).track(outer1_10.CONTEXTUAL_REMINDER_ACTION, obj);
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
  const intl = require(surface[18]).intl;
  obj5.children = intl.string(require(surface[18]).t["+7MDbQ"]);
  obj4.children = callback4(require(surface[15]).Text, obj5);
  items3[1] = callback4(require(surface[16]).PressableOpacity, obj4);
  obj2.children = items3;
  items2[1] = closure_18(View, obj2);
  const obj6 = {
    onPress() {
      let obj = outer1_0(surface[19]);
      const result = obj.setPushPermissionReactivationSeen(closure_0);
      obj = { action: outer1_15.DISMISS, prompt_type: surface, dismiss_logic: "relaxed" };
      outer1_1(surface[13]).track(outer1_10.CONTEXTUAL_REMINDER_ACTION, obj);
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button"
  };
  const intl2 = require(surface[18]).intl;
  obj6.accessibilityLabel = intl2.string(require(surface[18]).t.WAI6xu);
  obj6.children = callback4(require(surface[20]).XSmallIcon, { size: "sm", color: "icon-subtle" });
  items2[2] = callback4(require(surface[16]).PressableHighlight, obj6);
  obj.children = items2;
  return closure_18(View, obj);
}
({ useCallback: closure_4, useEffect: closure_5 } = result);
({ AnalyticEvents: closure_10, NOOP: closure_11 } = ME);
({ EventActionLocation: closure_13, EventActionType: closure_14, NotificationNudgeAnalyticsAction: closure_15, NotificationNudgeSurface: closure_16 } = EventActionType);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { display: "flex", flexDirection: "row", padding: importDefault(689).space.PX_12, backgroundColor: importDefault(689).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, alignItems: "center", borderTopWidth: importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH, borderColor: importDefault(689).colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, marginBottom: importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM };
  let num;
  if (arg0) {
    num = 12;
  }
  obj.gap = num;
  obj.container = obj;
  obj = {};
  const merged = Object.assign(importDefault(689).shadows.SHADOW_MEDIUM);
  obj.containerRefreshShadow = obj;
  const obj1 = {};
  let num2 = 10;
  if (arg0) {
    num2 = 0;
  }
  obj1.padding = num2;
  let str = "transparent";
  if (!arg0) {
    str = importDefault(689).colors.BACKGROUND_MOD_STRONG;
  }
  obj1.backgroundColor = str;
  obj1.borderRadius = importDefault(689).radii.round;
  obj.iconContainer = obj1;
  const obj2 = { flex: 1 };
  let num3 = 0;
  if (!arg0) {
    num3 = importDefault(689).space.PX_12;
  }
  obj2.marginLeft = num3;
  obj.contentContainer = obj2;
  obj.ctaButton = { alignSelf: "flex-start" };
  return obj;
});
result = require("get ActivityIndicator").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx");

export default function ChatInputNotificationNudge(channel) {
  channel = channel.channel;
  let importDefault;
  let dependencyMap;
  let obj = channel(566);
  const items = [_isNativeReflectConstruct, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guildId = channel.getGuildId();
    if (channel.isThread()) {
      let isMutedResult = outer1_7.isMuted(channel.id);
    } else {
      isMutedResult = outer1_8.isChannelMuted(guildId, channel.id);
    }
    return isMutedResult;
  });
  const tmp2 = !stateFromStores && !importDefault(11268)(channel);
  let obj1 = channel(11450);
  const shouldShowPushNotificationNudgeByPromptType = obj1.useShouldShowPushNotificationNudgeByPromptType(PermissionPromptType.CHANNEL_BANNER);
  let obj2 = importDefault(11459);
  const shouldShowPushNotificationNudgeByPromptType1 = channel(11450).useShouldShowPushNotificationNudgeByPromptType(PermissionPromptType.POST_REACTION_BANNER);
  const obj4 = channel(11450);
  let prop = null;
  if (tmp2) {
    prop = null;
    if (shouldShowPushNotificationNudgeByPromptType) {
      prop = channel(1334).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
    }
  }
  obj = { cooldownDurationMs: 604800000 };
  const tmp8 = callback(channel(5802).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  const first = tmp8[0];
  importDefault = tmp10;
  const obj5 = channel(5802);
  let prop1 = null;
  if (tmp2) {
    prop1 = null;
    if (obj2.useConfig({ location: "ChatInputNotificationNudge" }).enabled) {
      prop1 = null;
      if (shouldShowPushNotificationNudgeByPromptType1) {
        prop1 = null;
        if (null == first) {
          prop1 = channel(1334).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
        }
      }
    }
  }
  obj = { cooldownDurationMs: 604800000 };
  const tmp14 = callback(channel(5802).useSelectedTimeRecurringDismissibleContent(prop1, obj, undefined, true), 2);
  dependencyMap = tmp15;
  const items1 = [tmp8[1]];
  const items2 = [tmp14[1]];
  const obj7 = channel(5802);
  const tmp16 = callback2(() => _undefined(outer1_12.USER_DISMISS), items1);
  if (first === channel(1334).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER) {
    obj1 = { promptType: PermissionPromptType.CHANNEL_BANNER, location: constants.CHANNEL_BANNER, surface: constants2.CHANNEL_BANNER };
    const intl = channel(1212).intl;
    obj1.body = intl.string(channel(1212).t["/6SnPw"]);
    obj1.onDismiss = tmp16;
    let tmp25 = callback4(ChatInputNotificationNudgeImpl, obj1);
  } else {
    tmp25 = null;
    if (tmp14[0] === channel(1334).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER) {
      obj2 = { promptType: PermissionPromptType.POST_REACTION_BANNER, location: constants.POST_REACTION, surface: constants2.POST_REACTION_BANNER };
      const intl2 = channel(1212).intl;
      obj2.body = intl2.string(channel(1212).t.VS6ey0);
      obj2.onDismiss = tmp17;
      tmp25 = callback4(ChatInputNotificationNudgeImpl, obj2);
    }
  }
  return tmp25;
};
