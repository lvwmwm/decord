// Module ID: 16960
// Function ID: 16961
// Name: GuildOpenNotificationNudge
// Dependencies: [32, 19, 2125, 2087, 4939, 5966, 12121, 12122, 1085, 21, 558, 576, 504, 1126, 16961, 15758, 12123, 6794, 4957, 7099, 2049, 12124, 5056, 16960, 2000, 2]
// Exports: useGuildOpenNudge

// Module 16960 (GuildOpenNotificationNudge)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6794 */;
import PushNotificationPermissionStore2 from "PushNotificationPermissionStore" /* 12121 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12124 */;
import NotificationNudgeBottomSheetDefault from "NotificationNudgeBottomSheet" /* 16961 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 12122 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildOpenNotificationNudge(guildId) {
  let first;
  let markAsDismissed;
  let onHide;
  let tmp10;
  let tmp6;
  let tmp8;
  const obj = guildId(576);
  const cResult = obj.c(10);
  guildId = guildId.guildId;
  ({ markAsDismissed, onHide } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      const guild = GuildStore.getGuild(guildId);
      let str;
      if (guild != null) {
        str = guild.name;
      }
      if (str == null) {
        str = "";
      }
      return str;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    const intl = tmp(1126).intl;
    const obj2 = { guildName: stateFromStores };
    const formatToPlainStringResult = intl.formatToPlainString(guildId(1126).t.tyWHMY, obj2);
    cResult[3] = stateFromStores;
    cResult[4] = formatToPlainStringResult;
    tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(guildId(1126).t["ehJH+P"]);
    cResult[5] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === markAsDismissed) {
    if (cResult[7] === onHide) {
      let tmp12;
      if (cResult[8] === tmp8) {
        tmp12 = cResult[9];
      }
      return tmp12;
    }
  }
  const tmp13 = jsx(NotificationNudgeBottomSheetDefault, { title: tmp8, body: tmp10, actionLocation: constants.GUILD_OPEN, surface: constants2.GUILD_OPEN_BOTTOM_SHEET, markAsDismissed, onHide });
  cResult[6] = markAsDismissed;
  cResult[7] = onHide;
  cResult[8] = tmp8;
  cResult[9] = tmp13;
  tmp12 = tmp13;
}) : (function GuildOpenNotificationNudge(guildId) {
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
  const intl = guildId(1126).intl;
  const intl2 = guildId(1126).intl;
  return <tmp2 title={intl.formatToPlainString(guildId(1126).t.tyWHMY, { guildName: stateFromStores })} body={intl2.string(guildId(1126).t["ehJH+P"])} actionLocation={constants.GUILD_OPEN} surface={constants2.GUILD_OPEN_BOTTOM_SHEET} markAsDismissed={markAsDismissed} onHide={onHide} />;
});
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/GuildOpenNotificationNudge.tsx");

export default tmp4;
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
  let obj2 = stateFromStores3(15758);
  const inHoldout = obj2.useConfig({ location: "useGuildOpenNudge" }).inHoldout;
  let obj3 = stateFromStores(12123);
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
    const tmpResult = tmp(4957);
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
  const useSelectedTimeRecurringGuildDismissibleContent = tmp(7099).useSelectedTimeRecurringGuildDismissibleContent;
  tmp(7099);
  if (tmp13) {
    prop = tmp(2049).DismissibleContent.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD;
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
      obj2.openLazy(asyncRequire(16960, dependencyMap.paths), c16, obj3);
    }
  }, items6);
};
