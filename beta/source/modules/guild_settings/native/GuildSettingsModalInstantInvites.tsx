// Module ID: 17448
// Function ID: 17449
// Name: GuildSettingsModalInstantInvites
// Dependencies: [32, 19, 17, 9540, 7828, 2045, 2067, 9049, 1074, 21, 4836, 1115, 2111, 5916, 4832, 5923, 5909, 11860, 504, 12, 7460, 7458, 4800, 11307, 1981, 4528, 10393, 6460, 1177, 17449, 6461, 2]
// Exports: default

// Module 17448 (GuildSettingsModalInstantInvites)
import _modDef12 from "module_12" /* 12 */;
import intl3 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import AssetRegistryDefault from "AssetRegistry" /* 5909 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 7458 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 7460 */;
import InstantInvite from "InstantInvite" /* 10393 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 9540 */;
import InviteRecord from "InviteRecord" /* 7828 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let channel;

let Platform;
let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let unpackModuleId;
class InvitesDisabledRow {
  constructor(invitesDisabled) {
    let obj2;
    let stringResult1;
    let tmp7Result;
    invitesDisabled = invitesDisabled.invitesDisabled;
    const onPauseInvites = invitesDisabled.onPauseInvites;
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.Uwsjn6);
    const intl2 = intl3.intl;
    if (invitesDisabled) {
      stringResult1 = intl2.string(tmp(1115).t["2LLbj9"]);
    } else {
      const format = intl2.format;
      const obj = { helpArticleUrl: obj2.getArticleURL(unpackModuleId.INVITE_DISABLED) };
      const IFBHag = tmp(1115).t.IFBHag;
      obj2 = HelpdeskUtilsDefault;
      stringResult1 = format(IFBHag, obj);
    }
    const obj3 = { label: stringResult, subLabel: closure_12(Text_Text.Text, { variant: "text-xs/medium", children: stringResult1 }), icon: tmp7Result, checked: invitesDisabled, onPress: onPauseInvites, start: true, end: true };
    const TableCheckboxRow = tmp(5916).TableCheckboxRow;
    tmp7Result = null;
    if (invitesDisabled) {
      const obj4 = { source: AssetRegistryDefault };
      const TableRowIcon = tmp(5923).TableRowIcon;
      tmp7Result = tmp7(TableRowIcon, obj4);
    }
    return closure_12(TableCheckboxRow, obj3);
  }
}
function GuildSettingsModalInstantInvites(invites) {
  let intl;
  let intl2;
  let items6;
  let items7;
  let items8;
  let tmp25;
  invites = invites.invites;
  const guild = invites.guild;
  let flag = invites.showChannel;
  if (flag === undefined) {
    flag = false;
  }
  let invitesDisabledLoading;
  let closure_7;
  let closure_8;
  let memo;
  let stateFromStoresArray;
  let callback1;
  const contentContainerStyle = invites.contentContainerStyle;
  let tmp = closure_15();
  const tmp2 = invites;
  let obj = invites(flag[17]);
  const invitesDisabledPermission = obj.useInvitesDisabledPermission(guild);
  let obj2 = invites(flag[18]);
  let items = [invitesDisabledLoading];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(guild.id));
  const features = guild.features;
  let hasItem = features.has(stateFromStoresArray.INVITES_DISABLED);
  if (!hasItem) {
    let invitesDisabledUntil;
    if (stateFromStores != null) {
      invitesDisabledUntil = stateFromStores.invitesDisabledUntil;
    }
    let BooleanResult = null != invitesDisabledUntil;
    if (BooleanResult) {
      const _Boolean = Boolean;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(stateFromStores.invitesDisabledUntil);
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date1 = new Date();
      BooleanResult = Boolean(date > date1);
    }
    hasItem = BooleanResult;
  }
  const tmp15 = invitesDisabledPermission(stateFromStores.useState(false), 2);
  invitesDisabledLoading = tmp15[0];
  closure_7 = tmp15[1];
  const tmp17 = invitesDisabledPermission(stateFromStores.useState(21), 2);
  closure_8 = tmp17[1];
  const items1 = [invites, invitesDisabledPermission, flag];
  const first1 = tmp17[0];
  memo = stateFromStores.useMemo(() => {
    const obj = _modDef12;
    const sortByResult = obj.sortBy(invites, (channel) => {
      let str;
      const tmp = flag;
      if (tmp) {
        channel = channel.channel;
        let formatted;
        if (channel != null) {
          const str3 = channel.name;
          formatted = str3.toLowerCase();
        }
        str = formatted;
      } else {
        const inviter = channel.inviter;
        str = undefined;
        if (inviter != null) {
          if (inviter.username != null) {
            str = str2.toLowerCase();
          }
        }
        if (str == null) {
          str = "";
        }
      }
      return str;
    });
    let tmp = invitesDisabledPermission;
    if (tmp) {
      sortByResult.unshift(importDefaultResult1);
    }
    return sortByResult;
  }, items1);
  const items2 = [closure_7];
  const tmp2Result = tmp2(flag[18]);
  stateFromStoresArray = tmp2Result.useStateFromStoresArray(items2, () => ChannelStore.getSortedLinkedChannelsForGuild(guild.id));
  const items3 = [memo, stateFromStoresArray];
  const memo1 = stateFromStores.useMemo(() => {
    const items = [...memo.map((data) => ({ type: "invite", data })), ...stateFromStoresArray.map((data) => ({ type: "channel", data }))];
    return items;
  }, items3);
  const effect = stateFromStores.useEffect(() => {
    closure_8(21);
  }, []);
  const items4 = [invitesDisabledLoading, stateFromStores, guild];
  const callback = stateFromStores.useCallback((type) => {
    let id;
    if ("invite" === type.type) {
      id = type.data.code;
    } else {
      id = type.data.id;
    }
    return id;
  }, []);
  callback1 = stateFromStores.useCallback(() => {
    let obj2;
    const tmp = first;
    if (!tmp) {
      closure_7(true);
      try {
        const obj = { source: GuildAntiRaidTypes.GuildIncidentActionSources.MESSAGE, alertType: obj2.getIncidentAlertType(stateFromStores) };
        obj2 = GuildAntiRaidUtils;
        const obj4 = { guild, analyticsData: obj };
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.openLazy(asyncRequire(11307, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
        closure_7(false);
      } catch (tmp16) {
        closure_7(false);
        throw tmp16;
      }
    }
  }, items4);
  const items5 = [hasItem, callback1, invitesDisabledLoading];
  if (null == invites) {
    tmp25 = closure_12(tmp2(tmp3[27]).SceneLoadingIndicator, {});
  } else if (0 === memo1.length) {
    let obj3 = { children: items6 };
    let obj4 = { onPauseInvites: callback1, invitesDisabled: hasItem, invitesDisabledLoading };
    items6 = [closure_12(InvitesDisabledRow, obj4), ];
    const obj5 = { Illustration: tmp2(flag[29]).InviteEmpty, title: intl.string(tmp2(flag[11]).t["+nLJkZ"]), body: intl2.string(tmp2(flag[11]).t.F53CAc) };
    const EmptyState = tmp2(tmp3[28]).EmptyState;
    intl = tmp2(tmp3[11]).intl;
    intl2 = tmp2(tmp3[11]).intl;
    items6[1] = closure_12(EmptyState, obj5);
    tmp25 = closure_14(closure_13, obj3);
  } else {
    const obj6 = { style: items7, data: memo1, keyExtractor: callback, renderItem: tmp24, initialNumToRender: 10, windowSize: first1, contentContainerStyle: items8 };
    items7 = [invitesDisabledPermission ? tmp.listWithPause : tmp.list];
    items8 = [contentContainerStyle, tmp.content];
    tmp25 = closure_12(hasItem, obj6);
  }
  return tmp25;
}
({ Platform, FlatList: hasOwnProperty } = react_native);
({ GuildFeatures: c10, HelpdeskArticles: unpackModuleId } = Constants);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ list: { paddingTop: 8 }, content: { padding: 16, gap: 24 }, listWithPause: { paddingTop: 0 } });
const pause_invites = "pause_invites";
const importDefaultResult1 = new InviteRecord({ code: "pause_invites" });
let closure_18 = {};
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx");

export default function ConnectedGuildSettingsModalInstantInvites(guildId) {
  let items1;
  let props;
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  const items = [GuildStore];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  guildId(504);
  [][0] = GuildSettingsStore;
  let tmp6 = null;
  const tmp = guildId;
  if (null != stateFromStores) {
    const obj2 = { children: items1 };
    const obj3 = { guild: stateFromStores, invites: tmp5, contentContainerStyle, showChannel: true };
    items1 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(tmp(6461).NavScrim, {})];
    tmp6 = closure_14(closure_13, obj2);
  }
  return tmp6;
};
export { InvitesDisabledRow };
