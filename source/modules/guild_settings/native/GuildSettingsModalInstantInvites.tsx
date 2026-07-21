// Module ID: 16208
// Function ID: 125301
// Name: InvitesDisabledRow
// Dependencies: []
// Exports: default

// Module 16208 (InvitesDisabledRow)
let Platform;
class InvitesDisabledRow {
  constructor(arg0) {
    invitesDisabled = global.invitesDisabled;
    intl = arg1(dependencyMap[11]).intl;
    tmp2 = arg1;
    tmp3 = dependencyMap;
    stringResult = intl.string(arg1(dependencyMap[11]).t.Uwsjn6);
    intl2 = arg1(dependencyMap[11]).intl;
    if (invitesDisabled) {
      stringResult1 = intl2.string(tmp2(tmp3[11]).t.2LLbj9);
    } else {
      obj = {};
      tmp4 = importDefault;
      num = 12;
      obj2 = importDefault(tmp3[12]);
      tmp5 = HelpdeskArticles;
      obj.helpArticleUrl = obj2.getArticleURL(HelpdeskArticles.INVITE_DISABLED);
      stringResult1 = intl2.format(tmp2(tmp3[11]).t.IFBHag, obj);
    }
    tmp7 = jsx;
    obj = { label: stringResult };
    obj1 = { variant: "text-xs/medium" };
    obj1.children = stringResult1;
    obj.subLabel = jsx(arg1(dependencyMap[14]).TextWithIOSLinkWorkaround, obj1);
    tmp8 = null;
    if (invitesDisabled) {
      tmp9 = jsx;
      tmp10 = arg1;
      tmp11 = dependencyMap;
      num2 = 15;
      obj2 = {};
      tmp12 = importDefault;
      num3 = 16;
      obj2.source = importDefault(dependencyMap[16]);
      tmp8 = jsx(arg1(dependencyMap[15]).TableRowIcon, obj2);
    }
    obj.icon = tmp8;
    obj.checked = invitesDisabled;
    obj.onPress = global.onPauseInvites;
    obj.start = true;
    obj.end = true;
    return tmp7(arg1(dependencyMap[13]).TableCheckboxRow, obj);
  }
}
function GuildSettingsModalInstantInvites(invites) {
  invites = invites.invites;
  const arg1 = invites;
  const guild = invites.guild;
  const importDefault = guild;
  let flag = invites.showChannel;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let callback;
  let React;
  let hasItem;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let stateFromStoresArray;
  let callback1;
  const tmp = callback4();
  let obj = arg1(dependencyMap[17]);
  const invitesDisabledPermission = obj.useInvitesDisabledPermission(guild);
  callback = invitesDisabledPermission;
  let obj1 = arg1(dependencyMap[18]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => first.getGuildIncident(guild.id));
  React = stateFromStores;
  const features = guild.features;
  hasItem = features.has(stateFromStoresArray.INVITES_DISABLED);
  if (!hasItem) {
    let invitesDisabledUntil;
    if (null != stateFromStores) {
      invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
    }
    let tmp7 = null != invitesDisabledUntil;
    if (tmp7) {
      const _Date = Date;
      const date = new Date(stateFromStores.invitesDisabledUntil);
      const _Date2 = Date;
      const date1 = new Date();
      tmp7 = date > date1;
    }
    hasItem = tmp7;
  }
  const tmp17 = callback(React.useState(false), 2);
  const first = tmp17[0];
  closure_6 = first;
  closure_7 = tmp17[1];
  const tmp19 = callback(React.useState(21), 2);
  closure_8 = tmp19[1];
  const items1 = [invites, invitesDisabledPermission, flag];
  const memo = React.useMemo(() => {
    const sortByResult = guild(flag[19]).sortBy(invites, (channel) => {
      if (closure_2) {
        channel = channel.channel;
        let formatted;
        if (null != channel) {
          formatted = channel.name.toLowerCase();
          const str3 = channel.name;
        }
        let str2 = formatted;
      } else {
        const inviter = channel.inviter;
        let formatted1;
        if (null != inviter) {
          if (null != inviter.username) {
            formatted1 = str.toLowerCase();
          }
        }
        str2 = "";
        if (null != formatted1) {
          str2 = formatted1;
        }
      }
      return str2;
    });
    if (invitesDisabledPermission) {
      sortByResult.unshift(closure_17);
    }
    return sortByResult;
  }, items1);
  closure_9 = memo;
  let obj2 = arg1(dependencyMap[18]);
  const items2 = [closure_7];
  stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => sortedLinkedChannelsForGuild.getSortedLinkedChannelsForGuild(guild.id));
  const items3 = [memo, stateFromStoresArray];
  const memo1 = React.useMemo(() => {
    const items = [...closure_9.map((data) => ({ type: "invite", data })), ...closure_10.map((data) => ({ type: "channel", data }))];
    return items;
  }, items3);
  const effect = React.useEffect(() => {
    callback(21);
  }, []);
  const items4 = [first, stateFromStores, guild];
  callback = React.useCallback((type) => {
    if ("invite" === type.type) {
      let id = type.data.code;
    } else {
      id = type.data.id;
    }
    return id;
  }, []);
  callback1 = React.useCallback(() => {
    if (!first) {
      sortedLinkedChannelsForGuild(true);
      let obj = { source: invites(true[20]).GuildIncidentActionSources.MESSAGE, alertType: invites(true[21]).getIncidentAlertType(stateFromStores) };
      const obj2 = invites(true[21]);
      obj = { guild };
      obj.analyticsData = obj;
      guild(true[22]).openLazy(invites(true[24])(true[23], true.paths), "GuildIncidentActionsActionSheet", obj);
      sortedLinkedChannelsForGuild(false);
      const obj3 = guild(true[22]);
    }
  }, items4);
  const items5 = [hasItem, callback1, first];
  if (null == invites) {
    let tmp26 = callback2(arg1(dependencyMap[27]).SceneLoadingIndicator, {});
  } else if (0 === memo1.length) {
    obj = {};
    obj = { onPauseInvites: callback1, invitesDisabled: hasItem, invitesDisabledLoading: first };
    const items6 = [callback2(InvitesDisabledRow, obj), ];
    obj1 = { Illustration: arg1(dependencyMap[29]).InviteEmpty };
    const intl = arg1(dependencyMap[11]).intl;
    obj1.title = intl.string(arg1(dependencyMap[11]).t.+nLJkZ);
    const intl2 = arg1(dependencyMap[11]).intl;
    obj1.body = intl2.string(arg1(dependencyMap[11]).t.F53CAc);
    items6[1] = callback2(arg1(dependencyMap[28]).EmptyState, obj1);
    obj.children = items6;
    tmp26 = callback3(closure_13, obj);
  } else {
    obj2 = {};
    const items7 = [invitesDisabledPermission ? tmp.listWithPause : tmp.list];
    obj2.style = items7;
    obj2.data = memo1;
    obj2.keyExtractor = callback;
    obj2.renderItem = tmp25;
    obj2.initialNumToRender = 10;
    obj2.windowSize = tmp19[0];
    const items8 = [invites.contentContainerStyle, tmp.content];
    obj2.contentContainerStyle = items8;
    tmp26 = callback2(hasItem, obj2);
  }
  return tmp26;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Platform, FlatList: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = importDefault(dependencyMap[3]);
let importDefaultResult = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[2]);
({ GuildFeatures: closure_10, HelpdeskArticles: closure_11 } = arg1(dependencyMap[8]));
const tmp4 = arg1(dependencyMap[8]);
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
let closure_15 = obj.createStyles({ list: { paddingTop: 8 }, content: {}, listWithPause: { paddingTop: 0 } });
let closure_16 = "pause_invites";
obj = { code: "pause_invites" };
importDefaultResult = new importDefaultResult(obj);
let closure_18 = {};
const tmp5 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx");

export default function ConnectedGuildSettingsModalInstantInvites(guildId) {
  const arg1 = guildId.guildId;
  let obj = arg1(dependencyMap[18]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  arg1(dependencyMap[18]);
  [][0] = closure_9;
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = {};
    obj = { guild: stateFromStores, invites: tmp3, contentContainerStyle: guildId.contentContainerStyle, showChannel: true };
    const items1 = [callback2(GuildSettingsModalInstantInvites, obj), callback2(arg1(dependencyMap[30]).NavScrim, {})];
    obj.children = items1;
    tmp4 = callback3(closure_13, obj);
  }
  return tmp4;
};
export { InvitesDisabledRow };
