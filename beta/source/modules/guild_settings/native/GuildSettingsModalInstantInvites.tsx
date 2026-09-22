// Module ID: 18086
// Function ID: 18087
// Name: GuildSettingsModalInstantInvites
// Dependencies: [32, 19, 17, 11663, 8656, 2045, 2067, 9834, 1078, 21, 4758, 558, 568, 1119, 2112, 4754, 5828, 5812, 5819, 12519, 504, 12, 8280, 8278, 4725, 11958, 1984, 4458, 11237, 7285, 1181, 18087, 7286, 2]

// Module 18086 (GuildSettingsModalInstantInvites)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import Text_Text from "Text/Text" /* 4754 */;
import _modDef5812 from "module_5812" /* 5812 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5819 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8278 */;
import GuildAntiRaidTypes from "GuildAntiRaidTypes" /* 8280 */;
import InstantInvite from "InstantInvite" /* 11237 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11663 */;
import InviteRecord from "InviteRecord" /* 8656 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9834 */;

require = fn;
function GuildSettingsModalInstantInvites(invites) {
  invites = invites.invites;
  guild = invites.guild;
  let flag = invites.showChannel;
  if (flag === undefined) {
    flag = false;
  }
  let invitesDisabledLoading;
  closure_7 = undefined;
  closure_8 = undefined;
  let memo;
  let stateFromStoresArray;
  let callback1;
  const tmp = closure_15();
  const invitesDisabledPermission = invites(flag[19]).useInvitesDisabledPermission(guild);
  let obj = invites(flag[19]);
  let items = [invitesDisabledLoading];
  const stateFromStores = invites(flag[20]).useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(guild.id));
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
      const date = new Date(stateFromStores.invitesDisabledUntil);
      const _Date2 = Date;
      const date1 = new Date();
      BooleanResult = Boolean(date > date1);
    }
    hasItem = BooleanResult;
  }
  const tmp19 = invitesDisabledPermission(stateFromStores.useState(false), 2);
  invitesDisabledLoading = tmp19[0];
  closure_7 = tmp19[1];
  const tmp21 = invitesDisabledPermission(stateFromStores.useState(21), 2);
  closure_8 = tmp21[1];
  const items1 = [invites, invitesDisabledPermission, flag];
  memo = stateFromStores.useMemo(() => {
    const sortByResult = _modDef12.sortBy(invites, (channel) => {
      if (flag) {
        channel = channel.channel;
        let formatted;
        if (channel != null) {
          formatted = channel.name.toLowerCase();
        }
        let str = formatted;
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
    if (invitesDisabledPermission) {
      sortByResult.unshift(importDefaultResult1);
    }
    return sortByResult;
  }, items1);
  let obj2 = invites(flag[20]);
  const items2 = [closure_7];
  stateFromStoresArray = invites(flag[20]).useStateFromStoresArray(items2, () => ChannelStore.getSortedLinkedChannelsForGuild(guild.id));
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
    if ("invite" === type.type) {
      let id = type.data.code;
    } else {
      id = type.data.id;
    }
    return id;
  }, []);
  callback1 = stateFromStores.useCallback(() => {
    if (!first) {
      closure_7(true);
      try {
        const obj = { source: GuildAntiRaidTypes.GuildIncidentActionSources.MESSAGE, alertType: GuildAntiRaidUtils.getIncidentAlertType(stateFromStores) };
        const obj4 = { guild, analyticsData: obj };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11958, dependencyMap.paths), "GuildIncidentActionsActionSheet", obj4);
        tmp3(false);
      } catch (tmp17) {
        tmp2(false);
        throw tmp17;
      }
      tmp3 = closure_7;
    }
  }, items4);
  const items5 = [hasItem, callback1, invitesDisabledLoading];
  if (null == invites) {
    let tmp28 = closure_12(tmp2(tmp3[29]).SceneLoadingIndicator, {});
  } else if (0 === memo1.length) {
    let obj3 = { children: null };
    let obj4 = { onPauseInvites: callback1, invitesDisabled: hasItem, invitesDisabledLoading };
    const items6 = [closure_12(closure_19, obj4), ];
    const obj5 = { Illustration: tmp2(tmp3[31]).InviteEmpty, title: null, body: null };
    const intl = tmp2(tmp3[13]).intl;
    obj5.title = intl.string(tmp2(tmp3[13]).t["+nLJkZ"]);
    const intl2 = tmp2(tmp3[13]).intl;
    obj5.body = intl2.string(tmp2(tmp3[13]).t.F53CAc);
    items6[1] = closure_12(tmp2(tmp3[30]).EmptyState, obj5);
    obj3.children = items6;
    tmp28 = closure_14(closure_13, obj3);
  } else {
    const obj6 = { style: null, data: null, keyExtractor: null, renderItem: null, initialNumToRender: 10, windowSize: null, contentContainerStyle: null };
    const items7 = [invitesDisabledPermission ? tmp.listWithPause : tmp.list];
    obj6.style = items7;
    obj6.data = memo1;
    obj6.keyExtractor = callback;
    obj6.renderItem = tmp27;
    obj6.windowSize = tmp21[0];
    const items8 = [invites.contentContainerStyle, tmp.content];
    obj6.contentContainerStyle = items8;
    tmp28 = closure_12(hasItem, obj6);
  }
  return tmp28;
}
get_ActivityIndicator = fn(17);
({ Platform, FlatList: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1078);
({ GuildFeatures: c10, HelpdeskArticles: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4758);
let closure_15 = createStyles.createStyles({ list: { paddingTop: 8 }, content: { padding: 16, gap: 24 }, listWithPause: { paddingTop: 0 } });
const pause_invites = "pause_invites";
const importDefaultResult1 = new InviteRecord({ code: "pause_invites" });
let closure_18 = {};
let ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ onPauseInvites, invitesDisabled } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.Uwsjn6);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== invitesDisabled) {
    const intl2 = tmp(1119).intl;
    if (invitesDisabled) {
      let stringResult1 = intl2.string(tmp(1119).t["2LLbj9"]);
    } else {
      const obj2 = { helpArticleUrl: HelpdeskUtilsDefault.getArticleURL(constants.INVITE_DISABLED) };
      stringResult1 = intl2.format(tmp(1119).t.IFBHag, obj2);
    }
    cResult[1] = invitesDisabled;
    cResult[2] = stringResult1;
  } else {
    if (cResult[3] !== cResult[2]) {
      const obj4 = { variant: "text-xs/medium", children: tmp6 };
      const tmp13 = __initData(tmp(4754).Text, obj4);
      cResult[3] = tmp6;
      cResult[4] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== invitesDisabled) {
      let tmp15 = null;
      if (invitesDisabled) {
        const obj5 = { source: _modDef5812 };
        tmp15 = __initData(tmp(5828).TableRowIcon, obj5);
      }
      cResult[5] = invitesDisabled;
      cResult[6] = tmp15;
      let tmp14 = tmp15;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] === invitesDisabled) {
      if (cResult[8] === onPauseInvites) {
        if (cResult[9] === tmp11) {
          if (cResult[10] === tmp14) {
            let tmp18 = cResult[11];
          }
          return tmp18;
        }
      }
    }
    const obj6 = { label: first, subLabel: tmp11, icon: tmp14, checked: invitesDisabled, onPress: onPauseInvites, start: true, end: true };
    const tmp20 = __initData(tmp(5819).TableCheckboxRow, obj6);
    cResult[7] = invitesDisabled;
    cResult[8] = onPauseInvites;
    cResult[9] = tmp11;
    cResult[10] = tmp14;
    cResult[11] = tmp20;
    tmp18 = tmp20;
  }
}) : ((invitesDisabled) => {
  invitesDisabled = invitesDisabled.invitesDisabled;
  const intl = util.intl;
  const intl2 = util.intl;
  if (invitesDisabled) {
    let stringResult1 = intl2.string(tmp(1119).t["2LLbj9"]);
  } else {
    const obj = { helpArticleUrl: HelpdeskUtilsDefault.getArticleURL(constants.INVITE_DISABLED) };
    stringResult1 = intl2.format(tmp(1119).t.IFBHag, obj);
  }
  const obj3 = { label: intl.string(util.t.Uwsjn6), subLabel: __initData(Text_Text.Text, { variant: "text-xs/medium", children: stringResult1 }), icon: null, checked: null, onPress: null, start: true, end: true };
  let tmp7Result = null;
  if (invitesDisabled) {
    const obj4 = { source: _modDef5812 };
    tmp7Result = tmp7(tmp(5828).TableRowIcon, obj4);
  }
  obj3.icon = tmp7Result;
  obj3.checked = invitesDisabled;
  obj3.onPress = invitesDisabled.onPauseInvites;
  return __initData(TableCheckboxRow.TableCheckboxRow, obj3);
});
let closure_19 = tmp7;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalInstantInvites.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(568).c(9);
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function n() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guildId(568);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildSettingsStore];
    class S {
      constructor() {
        invites = closure_1_9.getProps().invites;
        if (invites == null) {
          invites = closure_1_18;
        }
        return invites;
      }
    }
    cResult[3] = items1;
    cResult[4] = S;
    let tmp9 = S;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult = guildId(504);
  const stateFromStores1 = guildId(504).useStateFromStores(tmp8, tmp9);
  if (cResult[5] === contentContainerStyle) {
    if (cResult[6] === stateFromStores) {
      if (cResult[7] === stateFromStores1) {
        let tmp12 = cResult[8];
      }
      return tmp12;
    }
  }
  let tmp13 = null;
  if (null != stateFromStores) {
    const obj2 = { children: null };
    class S {
      constructor() {
        invites = closure_1_9.getProps().invites;
        if (invites == null) {
          invites = closure_1_18;
        }
        return invites;
      }
    }
    const obj3 = { guild: stateFromStores, invites: stateFromStores1, contentContainerStyle, showChannel: true };
    const items2 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(tmp(7286).NavScrim, {})];
    obj2.children = items2;
    tmp13 = closure_14(closure_13, obj2);
  }
  cResult[5] = contentContainerStyle;
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = tmp13;
  tmp12 = tmp13;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  guildId(504);
  [][0] = GuildSettingsStore;
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj2 = { children: null };
    const obj3 = { guild: stateFromStores, invites: tmp5, contentContainerStyle: guildId.contentContainerStyle, showChannel: true };
    const items1 = [closure_12(GuildSettingsModalInstantInvites, obj3), closure_12(guildId(7286).NavScrim, {})];
    obj2.children = items1;
    tmp6 = closure_14(closure_13, obj2);
  }
  return tmp6;
});
export const InvitesDisabledRow = tmp7;
