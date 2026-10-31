// Module ID: 19809
// Function ID: 19810
// Name: GuildSettingsModalInstantInvites
// Dependencies: [32, 19, 17, 11010, 8201, 4863, 4885, 9075, 1072, 21, 5014, 575, 1113, 2061, 6974, 5624, 6983, 15494, 13914, 504, 12, 8484, 8482, 5258, 13240, 1994, 5712, 10808, 7208, 1187, 19810, 7294, 5606, 2]
// Exports: default

// Module 19809 (GuildSettingsModalInstantInvites)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8482 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 8484 */;
import InstantInvite from "InstantInvite" /* 10808 */;
import AssetRegistryDefault from "AssetRegistry" /* 15494 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11010 */;
import InviteRecord from "InviteRecord" /* 8201 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildStore from "GuildStore" /* 4885 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9075 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let channel;

let Platform;
let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let unpackModuleId;
function InviteSeparator() {
  const obj = { style: closure_15().separator };
  return authStore2(hasOwnProperty, obj);
}
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
      stringResult1 = intl2.string(tmp(1113).t["2LLbj9"]);
    } else {
      const format = intl2.format;
      const obj = { helpArticleUrl: obj2.getArticleURL(unpackModuleId.INVITE_DISABLED) };
      const IFBHag = tmp(1113).t.IFBHag;
      obj2 = HelpdeskUtilsDefault;
      stringResult1 = format(IFBHag, obj);
    }
    const obj3 = { label: stringResult, subLabel: authStore2(Text_Text.Text, { variant: "text-xs/medium", children: stringResult1 }), icon: tmp7Result, checked: invitesDisabled, onPress: onPauseInvites, start: true, end: true };
    const TableCheckboxRow = tmp(6974).TableCheckboxRow;
    tmp7Result = null;
    if (invitesDisabled) {
      const obj4 = { source: AssetRegistryDefault };
      const TableRowIcon = tmp(6983).TableRowIcon;
      tmp7Result = tmp7(TableRowIcon, obj4);
    }
    return authStore2(TableCheckboxRow, obj3);
  }
}
function GuildSettingsModalInstantInvites(invites) {
  let intl;
  let intl2;
  let items6;
  let items7;
  let tmp22Result;
  invites = invites.invites;
  const guild = invites.guild;
  let flag = invites.showChannel;
  if (flag === undefined) {
    flag = false;
  }
  let invitesDisabledLoading;
  let closure_7;
  let memo;
  let stateFromStoresArray;
  let callback1;
  const contentContainerStyle = invites.contentContainerStyle;
  let tmp = closure_15();
  const tmp2 = invites;
  let obj = invites(flag[18]);
  const invitesDisabledPermission = obj.useInvitesDisabledPermission(guild);
  let obj2 = invites(flag[19]);
  let items = [invitesDisabledLoading];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(guild.id));
  const features = guild.features;
  let hasItem = features.has(callback1.INVITES_DISABLED);
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
  const items1 = [invites, invitesDisabledPermission, flag];
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
  const tmp2Result = tmp2(flag[19]);
  stateFromStoresArray = tmp2Result.useStateFromStoresArray(items2, () => ChannelStore.getSortedLinkedChannelsForGuild(guild.id));
  const items3 = [memo, stateFromStoresArray];
  const memo1 = stateFromStores.useMemo(() => {
    const items = [...memo.map((data) => ({ type: "invite", data })), ...stateFromStoresArray.map((data) => ({ type: "channel", data }))];
    return items;
  }, items3);
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
        obj3.openLazy(asyncRequire(13240, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
        closure_7(false);
      } catch (tmp16) {
        closure_7(false);
        throw tmp16;
      }
    }
  }, items4);
  const items5 = [hasItem, callback1, invitesDisabledLoading];
  if (null == invites) {
    tmp22Result = closure_12(tmp2(tmp3[28]).SceneLoadingIndicator, {});
  } else if (0 === memo1.length) {
    let obj3 = { children: items6 };
    let obj4 = { onPauseInvites: callback1, invitesDisabled: hasItem, invitesDisabledLoading };
    items6 = [closure_12(InvitesDisabledRow, obj4), ];
    const obj5 = { Illustration: tmp2(flag[30]).InviteEmpty, title: intl.string(tmp2(flag[12]).t["+nLJkZ"]), body: intl2.string(tmp2(flag[12]).t.F53CAc) };
    const EmptyState = tmp2(tmp3[29]).EmptyState;
    intl = tmp2(tmp3[12]).intl;
    intl2 = tmp2(tmp3[12]).intl;
    items6[1] = closure_12(EmptyState, obj5);
    tmp22Result = closure_14(closure_13, obj3);
  } else {
    const obj6 = {
      data: memo1,
      keyExtractor: callback,
      getItemType(type) {
          let str;
          if ("invite" !== type.type) {
            str = type.type;
          } else {
            str = "pause";
          }
          return str;
        },
      renderItem: tmp21,
      ItemSeparatorComponent: InviteSeparator,
      contentContainerStyle: items7
    };
    items7 = [contentContainerStyle, tmp.content, ];
    let contentWithoutPause = !invitesDisabledPermission;
    const FlashList = tmp2(tmp3[31]).FlashList;
    const tmp22 = closure_12;
    if (!invitesDisabledPermission) {
      contentWithoutPause = tmp.contentWithoutPause;
    }
    items7[2] = contentWithoutPause;
    tmp22Result = tmp22(FlashList, obj6);
  }
  return tmp22Result;
}
({ Platform, View: hasOwnProperty } = react_native);
({ GuildFeatures: c10, HelpdeskArticles: unpackModuleId } = Constants);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { padding: 16 }, contentWithoutPause: obj2, separator: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { height: nativeDefault.space.PX_24 };
let closure_15 = createStyles(obj);
const pause_invites = "pause_invites";
const importDefaultResult1 = new InviteRecord({ code: "pause_invites" });
let closure_19 = {};
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
    items1 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(tmp(5606).NavScrim, {})];
    tmp6 = closure_14(closure_13, obj2);
  }
  return tmp6;
};
export { InvitesDisabledRow };
