// Module ID: 16388
// Function ID: 127901
// Name: InvitesDisabledRow
// Dependencies: [57, 31, 27, 10249, 7544, 1348, 1838, 8483, 653, 33, 4130, 1212, 1920, 9132, 4126, 5170, 9212, 11444, 566, 22, 7793, 7791, 4098, 11001, 1934, 3831, 10198, 5583, 1273, 16389, 5448, 2]
// Exports: default

// Module 16388 (InvitesDisabledRow)
import _slicedToArray from "_slicedToArray";
import set from "set";
import get_ActivityIndicator from "SceneLoadingIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Platform;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_5;
const require = arg1;
class InvitesDisabledRow {
  constructor(arg0) {
    invitesDisabled = global.invitesDisabled;
    intl = require("getSystemLocale").intl;
    tmp2 = closure_0;
    tmp3 = closure_2;
    stringResult = intl.string(require("getSystemLocale").t.Uwsjn6);
    intl2 = require("getSystemLocale").intl;
    if (invitesDisabled) {
      stringResult1 = intl2.string(require("getSystemLocale").t["2LLbj9"]);
    } else {
      obj = {};
      tmp4 = closure_1;
      num = 12;
      obj2 = require("wrapURL");
      tmp5 = HelpdeskArticles;
      obj.helpArticleUrl = obj2.getArticleURL(HelpdeskArticles.INVITE_DISABLED);
      stringResult1 = intl2.format(require("getSystemLocale").t.IFBHag, obj);
    }
    tmp7 = jsx;
    obj = { label: stringResult };
    obj1 = { variant: "text-xs/medium" };
    obj1.children = stringResult1;
    obj.subLabel = jsx(require("Text").Text, obj1);
    tmp8 = null;
    if (invitesDisabled) {
      tmp9 = jsx;
      tmp10 = closure_0;
      tmp11 = closure_2;
      num2 = 15;
      obj2 = {};
      tmp12 = closure_1;
      num3 = 16;
      obj2.source = require("registerAsset");
      tmp8 = jsx(require("TableRowIcon").TableRowIcon, obj2);
    }
    obj.icon = tmp8;
    obj.checked = invitesDisabled;
    obj.onPress = global.onPauseInvites;
    obj.start = true;
    obj.end = true;
    return tmp7(require("TableCheckboxRow").TableCheckboxRow, obj);
  }
}
function GuildSettingsModalInstantInvites(invites) {
  invites = invites.invites;
  const guild = invites.guild;
  let flag = invites.showChannel;
  if (flag === undefined) {
    flag = false;
  }
  let invitesDisabledPermission;
  let stateFromStores;
  let hasItem;
  let first;
  let closure_7;
  let closure_8;
  let memo;
  let stateFromStoresArray;
  let callback1;
  const tmp = callback3();
  let obj = invites(flag[17]);
  invitesDisabledPermission = obj.useInvitesDisabledPermission(guild);
  let obj1 = invites(flag[18]);
  let items = [first];
  stateFromStores = obj1.useStateFromStores(items, () => first.getGuildIncident(guild.id));
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
  const tmp17 = invitesDisabledPermission(stateFromStores.useState(false), 2);
  first = tmp17[0];
  closure_7 = tmp17[1];
  const tmp19 = invitesDisabledPermission(stateFromStores.useState(21), 2);
  closure_8 = tmp19[1];
  const items1 = [invites, invitesDisabledPermission, flag];
  memo = stateFromStores.useMemo(() => {
    const sortByResult = guild(flag[19]).sortBy(invites, (channel) => {
      if (outer1_2) {
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
      sortByResult.unshift(outer1_17);
    }
    return sortByResult;
  }, items1);
  let obj2 = invites(flag[18]);
  const items2 = [closure_7];
  stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => sortedLinkedChannelsForGuild.getSortedLinkedChannelsForGuild(guild.id));
  const items3 = [memo, stateFromStoresArray];
  const memo1 = stateFromStores.useMemo(() => {
    const items = [...memo.map((data) => ({ type: "invite", data })), ...stateFromStoresArray.map((data) => ({ type: "channel", data }))];
    return items;
  }, items3);
  const effect = stateFromStores.useEffect(() => {
    callback(21);
  }, []);
  const items4 = [first, stateFromStores, guild];
  const callback = stateFromStores.useCallback((type) => {
    if ("invite" === type.type) {
      let id = type.data.code;
    } else {
      id = type.data.id;
    }
    return id;
  }, []);
  callback1 = stateFromStores.useCallback(() => {
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
    let tmp26 = callback(invites(flag[27]).SceneLoadingIndicator, {});
  } else if (0 === memo1.length) {
    obj = {};
    obj = { onPauseInvites: callback1, invitesDisabled: hasItem, invitesDisabledLoading: first };
    const items6 = [callback(InvitesDisabledRow, obj), ];
    obj1 = { Illustration: invites(flag[29]).InviteEmpty };
    const intl = invites(flag[11]).intl;
    obj1.title = intl.string(invites(flag[11]).t["+nLJkZ"]);
    const intl2 = invites(flag[11]).intl;
    obj1.body = intl2.string(invites(flag[11]).t.F53CAc);
    items6[1] = callback(invites(flag[28]).EmptyState, obj1);
    obj.children = items6;
    tmp26 = callback2(closure_13, obj);
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
    tmp26 = callback(hasItem, obj2);
  }
  return tmp26;
}
({ Platform, FlatList: closure_5 } = get_ActivityIndicator);
({ GuildFeatures: closure_10, HelpdeskArticles: closure_11 } = ME);
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = jsxProd);
let closure_15 = _createForOfIteratorHelperLoose.createStyles({ list: { paddingTop: 8 }, content: { padding: 16, gap: 24 }, listWithPause: { paddingTop: 0 } });
const pause_invites = "pause_invites";
_createForOfIteratorHelperLoose = { code: "pause_invites" };
importDefaultResult = new importDefaultResult(_createForOfIteratorHelperLoose);
let closure_18 = {};
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx");

export default function ConnectedGuildSettingsModalInstantInvites(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(566);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(guildId));
  guildId(566);
  [][0] = closure_9;
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = {};
    obj = { guild: stateFromStores, invites: tmp3, contentContainerStyle: guildId.contentContainerStyle, showChannel: true };
    const items1 = [callback(GuildSettingsModalInstantInvites, obj), callback(guildId(5448).NavScrim, {})];
    obj.children = items1;
    tmp4 = callback2(closure_13, obj);
  }
  return tmp4;
};
export { InvitesDisabledRow };
