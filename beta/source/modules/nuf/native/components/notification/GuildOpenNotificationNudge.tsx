// Module ID: 16163
// Function ID: 16164
// Name: GuildOpenNotificationNudge
// Dependencies: [32, 19, 2108, 2067, 4655, 5017, 11902, 11903, 1074, 21, 504, 16164, 1115, 15033, 11904, 6527, 4673, 6806, 2029, 11905, 4800, 16163, 1981, 2]
// Exports: default, useGuildOpenNudge

// Module 16163 (GuildOpenNotificationNudge)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6527 */;
import PushNotificationPermissionStore2 from "PushNotificationPermissionStore" /* 11902 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 11905 */;
import NotificationNudgeBottomSheetDefault from "NotificationNudgeBottomSheet" /* 16164 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 11903 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const PushNotificationPermissionStore = PushNotificationPermissionStore2;
let dependencyMap;

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const PermissionPromptType = PushNotificationPermissionStore2.PermissionPromptType;
({ EventActionLocation: unpackModuleId, NotificationNudgeSurface: closure_12 } = NotificationPermissionConstants);
({ UserNotificationSettings: map1, ZERO_STRING_GUILD_ID: closure_14 } = Constants);
const jsx = Fragment.jsx;
let c16 = "guild-open-notification-nudge-key";
let closure_17 = { cooldownDurationMs: 5184000000 };
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/GuildOpenNotificationNudge.tsx");

export default function GuildOpenNotificationNudge(guildId) {
  let markAsDismissed;
  let onHide;
  guildId = guildId.guildId;
  ({ markAsDismissed, onHide } = guildId);
  const items = [GuildStore];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let str;
    if (guild != null) {
      str = guild.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  });
  NotificationNudgeBottomSheetDefault;
  const intl = guildId(1115).intl;
  const intl2 = guildId(1115).intl;
  return <tmp2 title={intl.formatToPlainString(guildId(1115).t.tyWHMY, { guildName: stateFromStores })} body={intl2.string(guildId(1115).t["ehJH+P"])} actionLocation={constants.GUILD_OPEN} surface={constants2.GUILD_OPEN_BOTTOM_SHEET} markAsDismissed={markAsDismissed} onHide={onHide} />;
};
export const GUILD_OPEN_NOTIFICATION_NUDGE_KEY = "guild-open-notification-nudge-key";
export const useGuildOpenNudge = function useGuildOpenNudge() {
  let closure_3;
  let first;
  let first1;
  let markAsDismissed;
  let ref;
  let state;
  let stateFromStores;
  let stateFromStores3;
  let tmp = stateFromStores;
  let tmp2 = dependencyMap;
  let obj = stateFromStores(504);
  const items = [SelectedGuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    return guildId;
  });
  let obj2 = stateFromStores3(15033);
  const inHoldout = obj2.useConfig({ location: "useGuildOpenNudge" }).inHoldout;
  let obj3 = stateFromStores(11904);
  const canSeePushNotificationNudge = obj3.useCanSeePushNotificationNudge();
  const items1 = [UserGuildSettingsStore];
  const obj4 = stateFromStores(504);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    const isMutedResult = null == stateFromStores || UserGuildSettingsStore.isMuted(tmp);
    return isMutedResult;
  });
  const items2 = [UserGuildSettingsStore];
  const obj5 = stateFromStores(504);
  const stateFromStores2 = obj5.useStateFromStores(items2, () => {
    let NO_MESSAGES;
    if (null != stateFromStores) {
      NO_MESSAGES = UserGuildSettingsStore.getMessageNotifications(tmp);
    } else {
      NO_MESSAGES = map1.NO_MESSAGES;
    }
    return NO_MESSAGES;
  });
  const items3 = [GuildStore, markAsDismissed];
  const obj6 = stateFromStores(504);
  stateFromStores3 = obj6.useStateFromStores(items3, () => {
    let result = null != stateFromStores;
    if (result) {
      const isBlockedByOnboarding = GuildOnboardingUtils.isBlockedByOnboarding;
      GuildOnboardingUtils;
      const guild = GuildStore.getGuild(tmp);
      result = isBlockedByOnboarding(guild, GuildMemberStore.getSelfMember(tmp));
    }
    return result;
  });
  dependencyMap = first1.useRef(stateFromStores);
  const tmp8 = _slicedToArray;
  [first, _slicedToArray] = first1.useState(stateFromStores3);
  const items4 = [stateFromStores, stateFromStores3];
  const effect = first1.useEffect(() => {
    ref.current = stateFromStores;
    if (ref.current !== stateFromStores) {
      closure_3(stateFromStores3);
    } else {
      const tmp = stateFromStores3;
      if (tmp) {
        closure_3(true);
      }
    }
  }, items4);
  const items5 = [PushNotificationPermissionStore];
  let tmp13 = null != stateFromStores;
  const obj8 = stateFromStores(504);
  const stateFromStores4 = obj8.useStateFromStores(items5, function() {
    const tmp = state.getState().promptLastSeen[constants.GUILD_OPEN_BOTTOM_SHEET];
    let tmp2 = null == tmp;
    if (!tmp2) {
      const _Date = Date;
      const _Date2 = Date;
      const self = this;
      const self2 = this;
      const timestamp = Date.now();
      const date = new Date(tmp);
      tmp2 = timestamp - date.getTime() >= 604800000;
    }
    return tmp2;
  });
  const obj7 = first1;
  if (tmp13) {
    const tmpResult = tmp(4673);
    tmp13 = !tmpResult.isPseudoGuildId(stateFromStores);
  }
  if (tmp13) {
    tmp13 = !inHoldout;
  }
  if (tmp13) {
    tmp13 = canSeePushNotificationNudge;
  }
  if (tmp13) {
    tmp13 = !first;
  }
  if (tmp13) {
    tmp13 = !stateFromStores1;
  }
  if (tmp13) {
    tmp13 = stateFromStores2 !== constants3.NO_MESSAGES;
  }
  if (tmp13) {
    tmp13 = stateFromStores4;
  }
  let prop = null;
  const useSelectedTimeRecurringGuildDismissibleContent = tmp(6806).useSelectedTimeRecurringGuildDismissibleContent;
  tmp(6806);
  if (tmp13) {
    prop = tmp(2029).DismissibleContent.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD;
  }
  let tmp17 = stateFromStores;
  if (stateFromStores == null) {
    tmp17 = closure_14;
  }
  const tmp8Result = tmp8(useSelectedTimeRecurringGuildDismissibleContent(prop, tmp17, closure_17), 2);
  first1 = tmp8Result[0];
  markAsDismissed = tmp20;
  const items6 = [stateFromStores, tmp8Result[1], first1];
  const effect1 = obj7.useEffect(() => {
    let tmp2 = null != stateFromStores;
    const tmp = stateFromStores;
    if (tmp2) {
      tmp2 = null != first1;
    }
    if (tmp2) {
      const obj = PushNotificationActionCreators;
      const result = obj.setPushPermissionReactivationSeen(PermissionPromptType.GUILD_OPEN_BOTTOM_SHEET);
      const obj3 = { guildId: tmp, markAsDismissed };
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.openLazy(asyncRequire(16163, dependencyMap.paths), c16, obj3);
    }
  }, items6);
};
