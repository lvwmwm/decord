// Module ID: 15128
// Function ID: 114164
// Name: GuildOpenNotificationNudge
// Dependencies: []
// Exports: default, useGuildOpenNudge

// Module 15128 (GuildOpenNotificationNudge)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const PermissionPromptType = arg1(dependencyMap[6]).PermissionPromptType;
({ EventActionLocation: closure_11, NotificationNudgeSurface: closure_12 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ UserNotificationSettings: closure_13, ZERO_STRING_GUILD_ID: closure_14 } = arg1(dependencyMap[8]));
const jsx = arg1(dependencyMap[9]).jsx;
let closure_16 = { cooldownDurationMs: 5184000000 };
const tmp3 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/nuf/native/components/notification/GuildOpenNotificationNudge.tsx");

export default function GuildOpenNotificationNudge(guildId) {
  let markAsDismissed;
  let onHide;
  const arg1 = guildId.guildId;
  ({ markAsDismissed, onHide } = guildId);
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = guild.getGuild(guildId);
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
  const intl = arg1(dependencyMap[12]).intl;
  obj.title = intl.formatToPlainString(arg1(dependencyMap[12]).t.tyWHMY, { guildName: stateFromStores });
  const intl2 = arg1(dependencyMap[12]).intl;
  obj.body = intl2.string(arg1(dependencyMap[12]).t.ehJH+P);
  obj.actionLocation = constants.GUILD_OPEN;
  obj.surface = constants2.GUILD_OPEN_BOTTOM_SHEET;
  obj.markAsDismissed = markAsDismissed;
  obj.onHide = onHide;
  return jsx(importDefault(dependencyMap[11]), obj);
};
export const GUILD_OPEN_NOTIFICATION_NUDGE_KEY = "guild-open-notification-nudge-key";
export const useGuildOpenNudge = function useGuildOpenNudge() {
  const items = [closure_7];
  const stateFromStores = arg1(closure_2[10]).useStateFromStores(items, () => {
    const guildId = guildId.getGuildId();
    let tmp2 = null;
    if (null != guildId) {
      tmp2 = guildId;
    }
    return tmp2;
  });
  const arg1 = stateFromStores;
  const obj = arg1(closure_2[10]);
  const obj2 = importDefault(closure_2[13]);
  const canSeePushNotificationNudge = arg1(closure_2[14]).useCanSeePushNotificationNudge();
  const obj3 = arg1(closure_2[14]);
  const items1 = [closure_8];
  const stateFromStores1 = arg1(closure_2[10]).useStateFromStores(items1, () => {
    let isMutedResult = null == stateFromStores;
    if (!isMutedResult) {
      isMutedResult = closure_8.isMuted(stateFromStores);
    }
    return isMutedResult;
  });
  const obj4 = arg1(closure_2[10]);
  const items2 = [closure_8];
  const stateFromStores2 = arg1(closure_2[10]).useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      let NO_MESSAGES = closure_8.getMessageNotifications(stateFromStores);
    } else {
      NO_MESSAGES = constants2.NO_MESSAGES;
    }
    return NO_MESSAGES;
  });
  const obj5 = arg1(closure_2[10]);
  const items3 = [closure_6, closure_5];
  const stateFromStores3 = arg1(closure_2[10]).useStateFromStores(items3, () => {
    let result = null != stateFromStores;
    if (result) {
      const guild = guild.getGuild(stateFromStores);
      result = stateFromStores(closure_2[15]).isBlockedByOnboarding(guild, tmp19.getSelfMember(stateFromStores));
      const obj = stateFromStores(closure_2[15]);
    }
    return result;
  });
  const importDefault = stateFromStores3;
  closure_2 = React.useRef(stateFromStores);
  const tmp6 = callback(React.useState(stateFromStores3), 2);
  const callback = tmp6[1];
  const items4 = [stateFromStores, stateFromStores3];
  const effect = React.useEffect(() => {
    ref.current = stateFromStores;
    if (ref.current !== stateFromStores) {
      callback(stateFromStores3);
    } else if (stateFromStores3) {
      callback(true);
    }
  }, items4);
  const obj6 = arg1(closure_2[10]);
  const items5 = [closure_9];
  let tmp9 = null != stateFromStores;
  const stateFromStores4 = arg1(closure_2[10]).useStateFromStores(items5, () => {
    const tmp = state.getState().promptLastSeen[closure_10.GUILD_OPEN_BOTTOM_SHEET];
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
    tmp9 = !arg1(closure_2[16]).isPseudoGuildId(stateFromStores);
    const obj8 = arg1(closure_2[16]);
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
  const obj7 = arg1(closure_2[10]);
  let prop = null;
  if (tmp9) {
    prop = arg1(closure_2[18]).DismissibleContent.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD;
  }
  let tmp16 = stateFromStores;
  if (null == stateFromStores) {
    tmp16 = closure_14;
  }
  const tmp17 = callback(arg1(closure_2[17]).useSelectedTimeRecurringGuildDismissibleContent(prop, tmp16, closure_16), 2);
  const first = tmp17[0];
  const React = first;
  closure_5 = tmp19;
  const items6 = [stateFromStores, tmp17[1], first];
  const effect1 = React.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != first;
    }
    if (tmp) {
      let obj = stateFromStores(ref[19]);
      const result = obj.setPushPermissionReactivationSeen(constants.GUILD_OPEN_BOTTOM_SHEET);
      obj = { guildId: stateFromStores, markAsDismissed: tmp19 };
      stateFromStores3(ref[20]).openLazy(stateFromStores(ref[22])(ref[21], ref.paths), "guild-open-notification-nudge-key", obj);
      const obj2 = stateFromStores3(ref[20]);
    }
  }, items6);
};
