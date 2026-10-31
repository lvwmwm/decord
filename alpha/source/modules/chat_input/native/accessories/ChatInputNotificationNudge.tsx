// Module ID: 13957
// Function ID: 13958
// Name: ChatInputNotificationNudge
// Dependencies: [32, 19, 17, 4948, 6775, 13958, 1072, 4860, 13959, 21, 5014, 575, 1252, 10992, 5624, 6980, 13960, 1113, 13961, 7054, 504, 12336, 13969, 7569, 4847, 2]
// Exports: default

// Module 13957 (ChatInputNotificationNudge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import useIsAppDMDefault from "useIsAppDM" /* 12336 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13958 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13960 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 13961 */;
import PostReactionPermissionNudgeExperimentDefault from "PostReactionPermissionNudgeExperiment" /* 13969 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4948 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6775 */;
import Constants from "Constants" /* 1072 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 13959 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let c10;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let unpackModuleId;
function ChatInputNotificationNudgeImpl(onDismiss) {
  let BellSlashIcon;
  let Text;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj3;
  let obj6;
  let surface;
  ({ promptType: require, location: importDefault, surface } = onDismiss);
  onDismiss = onDismiss.onDismiss;
  const body = onDismiss.body;
  const tmp = closure_19();
  const items = [surface];
  closure_5(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action: constants3.IMPRESSION, prompt_type: surface };
    obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
  }, items);
  let obj = { style: items1, children: items2 };
  items1 = [, ];
  ({ container: arr2[0], containerRefreshShadow: arr2[1] } = tmp);
  let obj2 = { style: tmp.iconContainer, children: closure_17(BellSlashIcon, obj3) };
  obj3 = { size: "sm", color: require("native").colors.ICON_STRONG };
  BellSlashIcon = require("BellSlashIcon").BellSlashIcon;
  items2 = [closure_17(View, obj2), , ];
  const obj4 = { style: tmp.contentContainer, children: items3 };
  items3 = [closure_17(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-default", children: body }), ];
  const obj5 = {
    hitSlop: 8,
    onPress: function handlePress() {
      const obj = NotificationPermissionUtil;
      const pushNotificationPermission = obj.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, importDefault, unpackModuleId);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { action: constants3.ACCEPT, prompt_type: surface };
      obj2.track(constants.CONTEXTUAL_REMINDER_ACTION, obj3);
    },
    style: tmp.ctaButton,
    accessibilityRole: "button",
    children: closure_17(Text, obj6)
  };
  const PressableOpacity = require("Pressables").PressableOpacity;
  obj6 = { variant: "text-xs/medium", color: "text-brand", children: intl.string(require("intl").t["+7MDbQ"]) };
  Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items3[1] = closure_17(PressableOpacity, obj5);
  items2[1] = closure_18(View, obj4);
  const obj7 = {
    onPress: function handleDismiss() {
      const obj = PushNotificationActionCreators;
      const result = obj.setPushPermissionReactivationSeen(require);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { action: constants3.DISMISS, prompt_type: surface, dismiss_logic: "relaxed" };
      obj2.track(constants.CONTEXTUAL_REMINDER_ACTION, obj3);
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button",
    accessibilityLabel: intl2.string(require("intl").t.WAI6xu),
    children: closure_17(require("XSmallIcon").XSmallIcon, { size: "sm", color: "icon-subtle" })
  };
  const PressableHighlight = require("Pressables").PressableHighlight;
  intl2 = require("intl").intl;
  items2[2] = closure_17(PressableHighlight, obj7);
  return closure_18(View, obj);
}
({ useCallback: closure_4, useEffect: hasOwnProperty } = react);
const View = react_native.View;
const PermissionPromptType = PushNotificationPermissionStore.PermissionPromptType;
({ AnalyticEvents: c10, NOOP: unpackModuleId } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ EventActionLocation: map1, EventActionType: closure_14, NotificationNudgeAnalyticsAction: closure_15, NotificationNudgeSurface: closure_16 } = NotificationPermissionConstants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = createStyles.createStyles(() => {
  let obj3;
  const obj = { container: { display: "flex", flexDirection: "row", padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, alignItems: "center", borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, marginBottom: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM, gap: 12 }, containerRefreshShadow: obj3, iconContainer: { backgroundColor: "transparent", borderRadius: nativeDefault.radii.round }, contentContainer: { flex: 1 }, ctaButton: { alignSelf: "flex-start" } };
  ({ display: "flex", flexDirection: "row", padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, alignItems: "center", borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, marginBottom: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM, gap: 12 });
  obj3 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
  ({ backgroundColor: "transparent", borderRadius: nativeDefault.radii.round });
  return obj;
});
let c20 = 604800000;
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputNotificationNudge.tsx");

export default function ChatInputNotificationNudge(channel) {
  let _undefined;
  let closure_2;
  let intl;
  let intl2;
  let tmp14;
  let tmp15;
  let tmp27;
  channel = channel.channel;
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = channel;
  const items = [JoinedThreadsStore, UserGuildSettingsStore];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isMutedResult;
    const guildId = channel.getGuildId();
    if (channel.isThread()) {
      isMutedResult = JoinedThreadsStore.isMuted(tmp.id);
    } else {
      isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, tmp.id);
    }
    return isMutedResult;
  });
  const tmp5 = !stateFromStores && !useIsAppDMDefault(channel);
  const tmpResult = tmp(13960);
  const shouldShowPushNotificationNudgeByPromptType = tmpResult.useShouldShowPushNotificationNudgeByPromptType(PermissionPromptType.CHANNEL_BANNER);
  const tmp4Result = PostReactionPermissionNudgeExperimentDefault;
  const enabled = tmp4Result.useConfig({ location: "ChatInputNotificationNudge" }).enabled;
  const tmpResult4 = tmp(13960);
  const shouldShowPushNotificationNudgeByPromptType1 = tmpResult4.useShouldShowPushNotificationNudgeByPromptType(PermissionPromptType.POST_REACTION_BANNER);
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = tmp(7569).useSelectedTimeRecurringDismissibleContent;
  tmp(7569);
  if (tmp5) {
    prop = null;
    if (shouldShowPushNotificationNudgeByPromptType) {
      prop = tmp(4847).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER;
    }
  }
  const obj2 = { cooldownDurationMs };
  [tmp14, tmp15] = useSelectedTimeRecurringDismissibleContent(prop, obj2, undefined, true);
  importDefault = tmp15;
  _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, obj2, undefined, true), 2);
  let prop1 = null;
  const useSelectedTimeRecurringDismissibleContent2 = tmp(7569).useSelectedTimeRecurringDismissibleContent;
  tmp(7569);
  const tmp11 = cooldownDurationMs;
  const tmp12 = _slicedToArray;
  if (tmp5) {
    prop1 = null;
    if (enabled) {
      prop1 = null;
      if (shouldShowPushNotificationNudgeByPromptType1) {
        prop1 = null;
        if (null == tmp14) {
          prop1 = tmp(4847).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER;
        }
      }
    }
  }
  const obj3 = { cooldownDurationMs: tmp11 };
  const tmp12Result = tmp12(useSelectedTimeRecurringDismissibleContent2(prop1, obj3, undefined, true), 2);
  dependencyMap = tmp20;
  const items1 = [tmp15];
  const first = tmp12Result[0];
  const items2 = [tmp12Result[1]];
  const tmp21 = closure_4(() => _undefined(ContentDismissActionType.USER_DISMISS), items1);
  const tmp22 = closure_4(() => closure_2(ContentDismissActionType.USER_DISMISS), items2);
  if (tmp14 === tmp(4847).DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER) {
    const obj4 = { promptType: PermissionPromptType.CHANNEL_BANNER, location: constants2.CHANNEL_BANNER, surface: constants5.CHANNEL_BANNER, body: intl2.string(tmp(1113).t["/6SnPw"]), onDismiss: tmp21 };
    intl2 = tmp(1113).intl;
    tmp27 = closure_17(ChatInputNotificationNudgeImpl, obj4);
  } else {
    tmp27 = null;
    if (first === tmp(4847).DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER) {
      const obj5 = { promptType: PermissionPromptType.POST_REACTION_BANNER, location: constants2.POST_REACTION, surface: constants5.POST_REACTION_BANNER, body: intl.string(tmp(1113).t.VS6ey0), onDismiss: tmp22 };
      intl = tmp(1113).intl;
      tmp27 = closure_17(ChatInputNotificationNudgeImpl, obj5);
    }
  }
  return tmp27;
};
