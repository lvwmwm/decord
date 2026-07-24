// Module ID: 15298
// Function ID: 116698
// Name: GuildOpenNotificationNudge
// Dependencies: [57, 31, 1917, 1838, 3947, 4325, 11478, 11479, 653, 33, 566, 15299, 1212, 14363, 11480, 5065, 3965, 5802, 1334, 11481, 4098, 15298, 1934, 2]
// Exports: default, useGuildOpenNudge

// Module 15298 (GuildOpenNotificationNudge)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { PermissionPromptType } from "_isNativeReflectConstruct";
import EventActionType from "EventActionType";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
({ EventActionLocation: closure_11, NotificationNudgeSurface: closure_12 } = EventActionType);
({ UserNotificationSettings: closure_13, ZERO_STRING_GUILD_ID: closure_14 } = ME);
let closure_16 = { cooldownDurationMs: 5184000000 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/nuf/native/components/notification/GuildOpenNotificationNudge.tsx");

export default function GuildOpenNotificationNudge(guildId) {
  let markAsDismissed;
  let onHide;
  guildId = guildId.guildId;
  ({ markAsDismissed, onHide } = guildId);
  let obj = guildId(566);
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = outer1_6.getGuild(guildId);
    let name;
    if (null != guild) {
      name = guild.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    return str;
  });
  obj = {};
  const intl = guildId(1212).intl;
  obj.title = intl.formatToPlainString(guildId(1212).t.tyWHMY, { guildName: stateFromStores });
  const intl2 = guildId(1212).intl;
  obj.body = intl2.string(guildId(1212).t["ehJH+P"]);
  obj.actionLocation = constants.GUILD_OPEN;
  obj.surface = constants2.GUILD_OPEN_BOTTOM_SHEET;
  obj.markAsDismissed = markAsDismissed;
  obj.onHide = onHide;
  return jsx(importDefault(15299), {});
};
export const GUILD_OPEN_NOTIFICATION_NUDGE_KEY = "guild-open-notification-nudge-key";
export const useGuildOpenNudge = function useGuildOpenNudge() {
  const items = [closure_7];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => {
    const guildId = outer1_7.getGuildId();
    let tmp2 = null;
    if (null != guildId) {
      tmp2 = guildId;
    }
    return tmp2;
  });
  let obj = stateFromStores(566);
  let obj2 = stateFromStores3(14363);
  const canSeePushNotificationNudge = stateFromStores(11480).useCanSeePushNotificationNudge();
  const obj3 = stateFromStores(11480);
  const items1 = [closure_8];
  const stateFromStores1 = stateFromStores(566).useStateFromStores(items1, () => {
    let isMutedResult = null == stateFromStores;
    if (!isMutedResult) {
      isMutedResult = outer1_8.isMuted(stateFromStores);
    }
    return isMutedResult;
  });
  const obj4 = stateFromStores(566);
  const items2 = [closure_8];
  const stateFromStores2 = stateFromStores(566).useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      let NO_MESSAGES = outer1_8.getMessageNotifications(stateFromStores);
    } else {
      NO_MESSAGES = outer1_13.NO_MESSAGES;
    }
    return NO_MESSAGES;
  });
  const obj5 = stateFromStores(566);
  const items3 = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  stateFromStores3 = stateFromStores(566).useStateFromStores(items3, () => {
    let result = null != stateFromStores;
    if (result) {
      const guild = outer1_6.getGuild(stateFromStores);
      result = stateFromStores(ref[15]).isBlockedByOnboarding(guild, tmp19.getSelfMember(stateFromStores));
      const obj = stateFromStores(ref[15]);
    }
    return result;
  });
  const dependencyMap = first.useRef(stateFromStores);
  const tmp6 = callback(first.useState(stateFromStores3), 2);
  callback = tmp6[1];
  const items4 = [stateFromStores, stateFromStores3];
  const effect = first.useEffect(() => {
    ref.current = stateFromStores;
    if (ref.current !== stateFromStores) {
      callback(stateFromStores3);
    } else if (stateFromStores3) {
      callback(true);
    }
  }, items4);
  const obj6 = stateFromStores(566);
  const items5 = [closure_9];
  let tmp9 = null != stateFromStores;
  const stateFromStores4 = stateFromStores(566).useStateFromStores(items5, () => {
    const tmp = outer1_9.getState().promptLastSeen[outer1_10.GUILD_OPEN_BOTTOM_SHEET];
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
  if (tmp9) {
    tmp9 = !stateFromStores(3965).isPseudoGuildId(stateFromStores);
    const obj8 = stateFromStores(3965);
  }
  if (tmp9) {
    tmp9 = !obj2.useConfig({ location: "useGuildOpenNudge" }).inHoldout;
  }
  if (tmp9) {
    tmp9 = canSeePushNotificationNudge;
  }
  if (tmp9) {
    tmp9 = !tmp6[0];
  }
  if (tmp9) {
    tmp9 = !stateFromStores1;
  }
  if (tmp9) {
    tmp9 = stateFromStores2 !== constants3.NO_MESSAGES;
  }
  if (tmp9) {
    tmp9 = stateFromStores4;
  }
  const obj7 = stateFromStores(566);
  let prop = null;
  if (tmp9) {
    prop = stateFromStores(1334).DismissibleContent.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD;
  }
  let tmp16 = stateFromStores;
  if (null == stateFromStores) {
    tmp16 = closure_14;
  }
  const tmp17 = callback(stateFromStores(5802).useSelectedTimeRecurringGuildDismissibleContent(prop, tmp16, closure_16), 2);
  first = tmp17[0];
  _isNativeReflectConstruct = tmp19;
  const items6 = [stateFromStores, tmp17[1], first];
  const effect1 = first.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != first;
    }
    if (tmp) {
      let obj = stateFromStores(ref[19]);
      const result = obj.setPushPermissionReactivationSeen(outer1_10.GUILD_OPEN_BOTTOM_SHEET);
      obj = { guildId: stateFromStores, markAsDismissed: _isNativeReflectConstruct };
      stateFromStores3(ref[20]).openLazy(stateFromStores(ref[22])(ref[21], ref.paths), "guild-open-notification-nudge-key", obj);
      const obj2 = stateFromStores3(ref[20]);
    }
  }, items6);
};
