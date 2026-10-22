// Module ID: 19046
// Function ID: 19047
// Name: GuildSettingsModalInstantInvites
// Dependencies: [32, 19, 17, 11202, 8836, 4821, 4843, 8975, 1087, 21, 4969, 587, 558, 576, 1128, 2067, 5220, 6897, 14855, 6886, 13185, 504, 12, 8372, 8370, 5196, 12693, 2002, 5649, 10786, 7120, 1202, 19047, 7206, 5578, 2]

// Module 19046 (GuildSettingsModalInstantInvites)
import _modDef12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2067 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import Text_Text from "Text/Text" /* 5220 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 6886 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8370 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 8372 */;
import InstantInvite from "InstantInvite" /* 10786 */;
import AssetRegistryDefault from "AssetRegistry" /* 14855 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11202 */;
import InviteRecord from "InviteRecord" /* 8836 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import GuildStore from "GuildStore" /* 4843 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8975 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
  let obj = invites(flag[20]);
  const invitesDisabledPermission = obj.useInvitesDisabledPermission(guild);
  let obj2 = invites(flag[21]);
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
  const tmp2Result = tmp2(flag[21]);
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
        obj3.openLazy(asyncRequire(12693, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
        closure_7(false);
      } catch (tmp16) {
        closure_7(false);
        throw tmp16;
      }
    }
  }, items4);
  const items5 = [hasItem, callback1, invitesDisabledLoading];
  if (null == invites) {
    tmp22Result = closure_12(tmp2(tmp3[30]).SceneLoadingIndicator, {});
  } else if (0 === memo1.length) {
    let obj3 = { children: items6 };
    let obj4 = { onPauseInvites: callback1, invitesDisabled: hasItem, invitesDisabledLoading };
    items6 = [closure_12(closure_20, obj4), ];
    const obj5 = { Illustration: tmp2(flag[32]).InviteEmpty, title: intl.string(tmp2(flag[14]).t["+nLJkZ"]), body: intl2.string(tmp2(flag[14]).t.F53CAc) };
    const EmptyState = tmp2(tmp3[31]).EmptyState;
    intl = tmp2(tmp3[14]).intl;
    intl2 = tmp2(tmp3[14]).intl;
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
      ItemSeparatorComponent,
      contentContainerStyle: items7
    };
    items7 = [contentContainerStyle, tmp.content, ];
    let contentWithoutPause = !invitesDisabledPermission;
    const FlashList = tmp2(tmp3[33]).FlashList;
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
let ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteSeparator() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = authStore2(hasOwnProperty, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function InviteSeparator() {
  const obj = { style: closure_15().separator };
  return authStore2(hasOwnProperty, obj);
});
const pause_invites = "pause_invites";
const importDefaultResult1 = new InviteRecord({ code: "pause_invites" });
let closure_19 = {};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function InvitesDisabledRow(arg0) {
  let first;
  let invitesDisabled;
  let obj3;
  let onPauseInvites;
  let tmp10;
  let tmp13;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(12);
  ({ onPauseInvites, invitesDisabled } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl3.t.Uwsjn6);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== invitesDisabled) {
    let stringResult1;
    const intl2 = tmp(1128).intl;
    if (invitesDisabled) {
      stringResult1 = intl2.string(tmp(1128).t["2LLbj9"]);
    } else {
      const format = intl2.format;
      const obj2 = { helpArticleUrl: obj3.getArticleURL(unpackModuleId.INVITE_DISABLED) };
      const IFBHag = tmp(1128).t.IFBHag;
      obj3 = HelpdeskUtilsDefault;
      stringResult1 = format(IFBHag, obj2);
    }
    cResult[1] = invitesDisabled;
    cResult[2] = stringResult1;
    tmp6 = stringResult1;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp6) {
    const obj4 = { variant: "text-xs/medium", children: tmp6 };
    const tmp12 = authStore2(Text_Text.Text, obj4);
    cResult[3] = tmp6;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== invitesDisabled) {
    let tmp14 = null;
    if (invitesDisabled) {
      const obj5 = { source: AssetRegistryDefault };
      const TableRowIcon = tmp(6897).TableRowIcon;
      tmp14 = authStore2(TableRowIcon, obj5);
    }
    cResult[5] = invitesDisabled;
    cResult[6] = tmp14;
    tmp13 = tmp14;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === invitesDisabled) {
    if (cResult[8] === onPauseInvites) {
      if (cResult[9] === tmp10) {
        let tmp17;
        if (cResult[10] === tmp13) {
          tmp17 = cResult[11];
        }
        return tmp17;
      }
    }
  }
  const tmp18 = authStore2(TableCheckboxRow2.TableCheckboxRow, { label: first, subLabel: tmp10, icon: tmp13, checked: invitesDisabled, onPress: onPauseInvites, start: true, end: true });
  cResult[7] = invitesDisabled;
  cResult[8] = onPauseInvites;
  cResult[9] = tmp10;
  cResult[10] = tmp13;
  cResult[11] = tmp18;
  tmp17 = tmp18;
}) : (function InvitesDisabledRow(invitesDisabled) {
  let obj2;
  let stringResult1;
  let tmp7Result;
  invitesDisabled = invitesDisabled.invitesDisabled;
  const onPauseInvites = invitesDisabled.onPauseInvites;
  const intl = intl3.intl;
  const stringResult = intl.string(intl3.t.Uwsjn6);
  const intl2 = intl3.intl;
  if (invitesDisabled) {
    stringResult1 = intl2.string(tmp(1128).t["2LLbj9"]);
  } else {
    const format = intl2.format;
    const obj = { helpArticleUrl: obj2.getArticleURL(unpackModuleId.INVITE_DISABLED) };
    const IFBHag = tmp(1128).t.IFBHag;
    obj2 = HelpdeskUtilsDefault;
    stringResult1 = format(IFBHag, obj);
  }
  const obj3 = { label: stringResult, subLabel: authStore2(Text_Text.Text, { variant: "text-xs/medium", children: stringResult1 }), icon: tmp7Result, checked: invitesDisabled, onPress: onPauseInvites, start: true, end: true };
  const TableCheckboxRow = tmp(6886).TableCheckboxRow;
  tmp7Result = null;
  if (invitesDisabled) {
    const obj4 = { source: AssetRegistryDefault };
    const TableRowIcon = tmp(6897).TableRowIcon;
    tmp7Result = tmp7(TableRowIcon, obj4);
  }
  return authStore2(TableCheckboxRow, obj3);
});
let closure_20 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedGuildSettingsModalInstantInvites(guildId) {
  let first;
  let items2;
  let props;
  let tmp6;
  let tmp8;
  let tmp9;
  const obj = guildId(576);
  const cResult = obj.c(9);
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function n() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildSettingsStore];
    class I {
      constructor() {
        invites = props.getProps().invites;
        if (invites == null) {
          invites = closure_1_19;
        }
        return invites;
      }
    }
    cResult[3] = items1;
    cResult[4] = I;
    tmp9 = I;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult2 = guildId(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (cResult[5] === contentContainerStyle) {
    if (cResult[6] === stateFromStores) {
      let tmp12;
      if (cResult[7] === stateFromStores1) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
  }
  let tmp13 = null;
  if (null != stateFromStores) {
    const obj2 = { children: items2 };
    class I {
      constructor() {
        invites = props.getProps().invites;
        if (invites == null) {
          invites = closure_1_19;
        }
        return invites;
      }
    }
    const obj3 = { guild: stateFromStores, invites: stateFromStores1, contentContainerStyle, showChannel: true };
    items2 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(guildId(5578).NavScrim, {})];
    tmp13 = closure_14(closure_13, obj2);
  }
  cResult[5] = contentContainerStyle;
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = tmp13;
  tmp12 = tmp13;
}) : (function ConnectedGuildSettingsModalInstantInvites(guildId) {
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
    items1 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(tmp(5578).NavScrim, {})];
    tmp6 = closure_14(closure_13, obj2);
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx");

export default tmp9;
export const InvitesDisabledRow = tmp8;
