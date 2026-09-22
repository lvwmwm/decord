// Module ID: 16867
// Function ID: 16868
// Name: GuildOpenNotificationNudge
// Dependencies: [32, 19, 2109, 2067, 4580, 4939, 12558, 12559, 1078, 21, 558, 568, 504, 1119, 16868, 15746, 12560, 7353, 4598, 7632, 2031, 12561, 4725, 16867, 1984, 2]
// Exports: useGuildOpenNudge

// Module 16867 (GuildOpenNotificationNudge)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 7353 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12561 */;
import NotificationNudgeBottomSheetDefault from "NotificationNudgeBottomSheet" /* 16868 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4580 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4939 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12558 */;

require = fn;
const PermissionPromptType = fn(12558).PermissionPromptType;
const NotificationPermissionConstants = fn(12559);
({ EventActionLocation: closure_11, NotificationNudgeSurface: closure_12 } = NotificationPermissionConstants);
const Constants = fn(1078);
({ UserNotificationSettings: map1, ZERO_STRING_GUILD_ID: closure_14 } = Constants);
const jsx = fn(21).jsx;
let c16 = "guild-open-notification-nudge-key";
let closure_17 = { cooldownDurationMs: 5184000000 };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/GuildOpenNotificationNudge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(568).c(10);
  guildId = guildId.guildId;
  ({ markAsDismissed, onHide } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      guild = GuildStore.getGuild(guildId);
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
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guildId(568);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    const intl = tmp(1119).intl;
    const obj2 = { guildName: stateFromStores };
    const formatToPlainStringResult = intl.formatToPlainString(tmp(1119).t.tyWHMY, obj2);
    cResult[3] = stateFromStores;
    cResult[4] = formatToPlainStringResult;
    let tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1119).intl;
    const stringResult = intl2.string(tmp(1119).t["ehJH+P"]);
    cResult[5] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === markAsDismissed) {
    if (cResult[7] === onHide) {
      if (cResult[8] === tmp8) {
        let tmp12 = cResult[9];
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
}) : ((guildId) => {
  guildId = guildId.guildId;
  ({ markAsDismissed, onHide } = guildId);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => {
    guild = GuildStore.getGuild(guildId);
    let str;
    if (guild != null) {
      str = guild.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  });
  const obj2 = { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null };
  const obj = guildId(504);
  const intl = guildId(1119).intl;
  obj2.title = intl.formatToPlainString(guildId(1119).t.tyWHMY, { guildName: stateFromStores });
  const intl2 = guildId(1119).intl;
  obj2.body = intl2.string(guildId(1119).t["ehJH+P"]);
  obj2.actionLocation = constants.GUILD_OPEN;
  obj2.surface = constants2.GUILD_OPEN_BOTTOM_SHEET;
  obj2.markAsDismissed = markAsDismissed;
  obj2.onHide = onHide;
  return jsx(NotificationNudgeBottomSheetDefault, { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null });
});
export const GUILD_OPEN_NOTIFICATION_NUDGE_KEY = "guild-open-notification-nudge-key";
export const useGuildOpenNudge = function useGuildOpenNudge() {
  const items = [SelectedGuildStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    return guildId;
  });
  let obj = stateFromStores(504);
  let obj2 = stateFromStores3(15746);
  const canSeePushNotificationNudge = stateFromStores(12560).useCanSeePushNotificationNudge();
  let obj3 = stateFromStores(12560);
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => {
    let isMutedResult = null == stateFromStores;
    if (!isMutedResult) {
      isMutedResult = UserGuildSettingsStore.isMuted(tmp);
    }
    return isMutedResult;
  });
  const obj4 = stateFromStores(504);
  const items2 = [UserGuildSettingsStore];
  const stateFromStores2 = stateFromStores(504).useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      let NO_MESSAGES = UserGuildSettingsStore.getMessageNotifications(tmp);
    } else {
      NO_MESSAGES = constants3.NO_MESSAGES;
    }
    return NO_MESSAGES;
  });
  const obj5 = stateFromStores(504);
  const items3 = [GuildStore, markAsDismissed];
  stateFromStores3 = stateFromStores(504).useStateFromStores(items3, () => {
    let result = null != stateFromStores;
    if (result) {
      guild = GuildStore.getGuild(tmp);
      result = GuildOnboardingUtils.isBlockedByOnboarding(guild, GuildMemberStore.getSelfMember(tmp));
    }
    return result;
  });
  dependencyMap = first.useRef(stateFromStores);
  const tmp9 = _slicedToArray(first.useState(stateFromStores3), 2);
  _slicedToArray = tmp9[1];
  const items4 = [stateFromStores, stateFromStores3];
  const effect = first.useEffect(() => {
    ref.current = stateFromStores;
    if (ref.current !== stateFromStores) {
      closure_3(stateFromStores3);
    } else if (stateFromStores3) {
      closure_3(true);
    }
  }, items4);
  const obj6 = stateFromStores(504);
  const obj7 = first;
  const tmp8 = _slicedToArray;
  const items5 = [PushNotificationPermissionStore];
  let tmp12 = null != stateFromStores;
  const stateFromStores4 = stateFromStores(504).useStateFromStores(items5, () => {
    const tmp = state.getState().promptLastSeen[constants.GUILD_OPEN_BOTTOM_SHEET];
    let tmp2 = null == tmp;
    if (!tmp2) {
      const _Date = Date;
      const _Date2 = Date;
      const timestamp = Date.now();
      const date = new Date(tmp);
      tmp2 = timestamp - date.getTime() >= 604800000;
    }
    return tmp2;
  });
  if (tmp12) {
    tmp12 = !tmp(4598).isPseudoGuildId(stateFromStores);
    const tmpResult = tmp(4598);
  }
  if (tmp12) {
    tmp12 = !obj2.useConfig({ location: "useGuildOpenNudge" }).inHoldout;
  }
  if (tmp12) {
    tmp12 = canSeePushNotificationNudge;
  }
  if (tmp12) {
    tmp12 = !tmp9[0];
  }
  if (tmp12) {
    tmp12 = !stateFromStores1;
  }
  if (tmp12) {
    tmp12 = stateFromStores2 !== constants3.NO_MESSAGES;
  }
  if (tmp12) {
    tmp12 = stateFromStores4;
  }
  const obj8 = stateFromStores(504);
  let prop = null;
  if (tmp12) {
    prop = tmp(2031).DismissibleContent.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD;
  }
  let tmp15 = stateFromStores;
  if (stateFromStores == null) {
    tmp15 = closure_14;
  }
  const tmp8Result = tmp8(stateFromStores(7632).useSelectedTimeRecurringGuildDismissibleContent(prop, tmp15, closure_17), 2);
  first = tmp8Result[0];
  markAsDismissed = tmp18;
  const items6 = [stateFromStores, tmp8Result[1], first];
  const effect1 = obj7.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = null != first;
    }
    if (tmp2) {
      const result = PushNotificationActionCreators.setPushPermissionReactivationSeen(PermissionPromptType.GUILD_OPEN_BOTTOM_SHEET);
      const obj3 = { guildId: stateFromStores, markAsDismissed };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16867, dependencyMap.paths), c16, obj3);
    }
  }, items6);
};
