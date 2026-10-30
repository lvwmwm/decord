// Module ID: 19764
// Function ID: 19765
// Name: GuildSettingsModalCommunity
// Dependencies: [19, 4858, 4939, 4941, 4951, 1384, 9056, 18499, 1072, 21, 5009, 575, 5591, 1498, 504, 9055, 1114, 7552, 6992, 5647, 5253, 8993, 1995, 8169, 6022, 7054, 6969, 2]
// Exports: default

// Module 19764 (GuildSettingsModalCommunity)
import nativeDefault from "native" /* 575 */;
import intl15 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4939 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7552 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import GuildSettingsDiscoveryConstants from "GuildSettingsDiscoveryConstants" /* 18499 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;
let channel, navigation, set;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let obj2;
let closure_6 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const calculateLocaleOptions = GuildSettingsDiscoveryConstants.calculateLocaleOptions;
({ ChannelTypes: closure_12, GuildFeatures: map1, GuildSettingsSections: closure_14, Permissions: closure_15 } = Constants);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let obj = { overview: { flex: 1 }, overviewContent: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_19 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx");

export default function GuildSettingsModalCommunity(guildId) {
  let Stack;
  let TableRow;
  let TableRow2;
  let TableRow3;
  let TableRow4;
  let TableRow5;
  let TrailingText;
  let TrailingText2;
  let TrailingText3;
  let TrailingText4;
  let canManage;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl2;
  let intl3;
  let intl7;
  let intl8;
  let isAdmin;
  let items10;
  let items12;
  let obj10;
  let obj12;
  let obj13;
  let obj16;
  let obj17;
  let obj18;
  let obj20;
  let obj21;
  let obj23;
  let obj24;
  let obj26;
  let obj9;
  let stringResult;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  navigation = undefined;
  let publicUpdatesChannel;
  let callback1;
  let preferredLocale;
  let tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[12]);
  let tmp3 = onClose;
  const token = obj.useToken(onClose(navigation[11]).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_19();
  let obj2 = guildId(navigation[13]);
  navigation = obj2.useNavigation();
  let obj3 = guildId(navigation[14]);
  let items = [preferredLocale];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => preferredLocale.getProps());
  const submitting = stateFromStoresObject.submitting;
  const hasChanges = stateFromStoresObject.hasChanges;
  const guild = stateFromStoresObject.guild;
  const items1 = [publicUpdatesChannel];
  const obj4 = guildId(navigation[14]);
  const stateFromStoresObject1 = obj4.useStateFromStoresObject(items1, () => {
    let canResult1;
    const obj = { canManage: null != guild && PermissionStore.can(constants2.MANAGE_GUILD, tmp), isAdmin: canResult1 };
    canResult1 = null != tmp && PermissionStore.can(constants2.ADMINISTRATOR, tmp);
    return obj;
  });
  ({ canManage, isAdmin } = stateFromStoresObject1);
  const items2 = [hasChanges];
  const obj5 = guildId(navigation[14]);
  const stateFromStoresObject2 = obj5.useStateFromStoresObject(items2, () => {
    let getChannel2;
    let getChannel3;
    let prop;
    let prop1;
    let rulesChannelId;
    const getChannel = ChannelStore.getChannel;
    if (guild != null) {
      rulesChannelId = tmp2.rulesChannelId;
    }
    const obj = { rulesChannel: getChannel(rulesChannelId), publicUpdatesChannel: getChannel2(prop), safetyAlertsChannel: getChannel3(prop1) };
    prop = undefined;
    getChannel2 = tmp.getChannel;
    if (guild != null) {
      prop = tmp2.publicUpdatesChannelId;
    }
    prop1 = undefined;
    getChannel3 = tmp.getChannel;
    if (guild != null) {
      prop1 = tmp2.safetyAlertsChannelId;
    }
    return obj;
  });
  const rulesChannel = stateFromStoresObject2.rulesChannel;
  publicUpdatesChannel = stateFromStoresObject2.publicUpdatesChannel;
  const safetyAlertsChannel = stateFromStoresObject2.safetyAlertsChannel;
  const items3 = [guild, navigation, onClose];
  const effect = submitting.useEffect(() => {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(map1.COMMUNITY);
    }
    if (!hasItem) {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.setSection(constants.COMMUNITY_INTRO);
      const obj2 = { onClose };
      const replaced = navigation.replace(constants.COMMUNITY_INTRO, obj2);
    }
  }, items3);
  const items4 = [guild];
  const callback = submitting.useCallback(function() {
    if (null != guild) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(guild.features);
      set.delete(map1.COMMUNITY);
      set.delete(map1.DISCOVERABLE);
      const obj = { features: set, rulesChannelId: null, publicUpdatesChannelId: null, safetyAlertsChannelId: null, preferredLocale: guild.preferredLocale };
      const obj2 = GuildSettingsActionCreatorsDefault;
      obj2.saveGuild(guild.id, obj);
    }
  }, items4);
  let intl = guildId(navigation[16]).intl;
  const string = intl.string;
  const t = guildId(navigation[16]).t;
  if (null != guild) {
    stringResult = string(t.aQzVF8);
  } else {
    stringResult = string(t.kQzUNk);
  }
  const items5 = [guild, navigation, submitting, hasChanges, onClose];
  const effect1 = obj6.useEffect(() => {
    let fn;
    let fn2;
    function handlePublicCancelChanges() {
      if (null != guild) {
        const obj = onClose(navigation[15]);
        obj.cancelChanges(tmp.id);
      }
      if (handlePublicSaveChanges != null) {
        tmp5();
      }
    }
    function handlePublicSaveChanges() {
      let features;
      let id;
      let publicUpdatesChannelId;
      let rulesChannelId;
      let safetyAlertsChannelId;
      const tmp = guild;
      if (null != guild) {
        ({ id, rulesChannelId, publicUpdatesChannelId, preferredLocale, features, safetyAlertsChannelId } = tmp);
        const obj2 = { rulesChannelId, safetyAlertsChannelId, publicUpdatesChannelId, preferredLocale, features };
        const obj = onClose(navigation[15]);
        obj.saveGuild(id, obj2);
      }
    }
    let tmp = navigation;
    const setOptions = navigation.setOptions;
    if (submitting) {
      fn = () => null;
    } else {
      const tmp3 = hasChanges;
      if (tmp3) {
        fn = () => {
          let intl;
          const obj = { onPress: handlePublicCancelChanges, text: intl.string(intl15.t["ETE/oC"]) };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl15.intl;
          return authStore4(HeaderActionButton, obj);
        };
      }
    }
    let obj = { headerLeft: fn, headerRight: fn2 };
    if (submitting) {
      fn2 = () => closure_1_16(handlePublicCancelChanges(navigation[18]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        let intl;
        const obj = { onPress: handlePublicSaveChanges, text: intl.string(intl15.t["R3BPH+"]) };
        const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
        intl = intl15.intl;
        return authStore4(HeaderActionButton, obj);
      };
    }
    setOptions(obj);
  }, items5);
  const items6 = [guildId];
  callback1 = obj6.useCallback(() => {
    const channels = GuildChannelStore.getChannels(guildId);
    if (null != channels) {
      const arr = channels[closure_6];
      const found = arr.filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      const mapped = found.map((channel) => {
        let obj2;
        channel = channel.channel;
        const obj = { value: channel.id, label: obj2.computeChannelName(channel, callback1, safetyAlertsChannel, true) };
        obj2 = guildId(navigation[19]);
        return obj;
      });
    }
    return [];
  }, items6);
  const items7 = [callback1, rulesChannel];
  const items8 = [callback1, publicUpdatesChannel];
  const callback2 = obj6.useCallback(() => {
    let id;
    let intl;
    let intl2;
    let items;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl15.t.Yr6nGx),
      items,
      onItemSelect(rulesChannelId) {
        const obj = onClose(navigation[15]);
        const obj2 = { rulesChannelId };
        obj.updateGuild(obj2);
        const obj3 = onClose(navigation[20]);
        obj3.hideActionSheet();
      },
      selectedItem: id,
      hasIcons: false
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8993, dependencyMap.paths);
    intl = intl15.intl;
    let obj2 = { value: null, label: intl2.string(intl15.t.PoWNfe) };
    intl2 = intl15.intl;
    items = [obj2, ...callback1()];
    id = undefined;
    if (rulesChannel != null) {
      id = rulesChannel.id;
    }
    if (id == null) {
      id = null;
    }
    openLazy(tmp2, "SelectRulesChannel", obj);
  }, items7);
  const items9 = [callback1, safetyAlertsChannel];
  const callback3 = obj6.useCallback(() => {
    let id;
    let intl;
    let intl2;
    let items;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl15.t.VqhxxN),
      items,
      onItemSelect(publicUpdatesChannelId) {
        const obj = onClose(navigation[15]);
        const obj2 = { publicUpdatesChannelId };
        obj.updateGuild(obj2);
        const obj3 = onClose(navigation[20]);
        obj3.hideActionSheet();
      },
      selectedItem: id,
      hasIcons: false
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8993, dependencyMap.paths);
    intl = intl15.intl;
    let obj2 = { value: null, label: intl2.string(intl15.t.PoWNfe) };
    intl2 = intl15.intl;
    items = [obj2, ...callback1()];
    id = undefined;
    if (publicUpdatesChannel != null) {
      id = publicUpdatesChannel.id;
    }
    if (id == null) {
      id = null;
    }
    openLazy(tmp2, "SelectUpdatesChannel", obj);
  }, items8);
  preferredLocale = undefined;
  const callback4 = obj6.useCallback(() => {
    let id;
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      title: intl.string(intl15.t.wSD7jV),
      items: callback1(),
      onItemSelect(safetyAlertsChannelId) {
        const obj = onClose(navigation[15]);
        const obj2 = { safetyAlertsChannelId };
        obj.updateGuild(obj2);
        const obj3 = onClose(navigation[20]);
        obj3.hideActionSheet();
      },
      selectedItem: id,
      hasIcons: false
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(8993, dependencyMap.paths);
    intl = intl15.intl;
    id = undefined;
    if (safetyAlertsChannel != null) {
      id = safetyAlertsChannel.id;
    }
    openLazy(tmp2, "SelectSafetyAlertsChannel", obj);
  }, items9);
  if (guild != null) {
    preferredLocale = guild.preferredLocale;
  }
  [][0] = preferredLocale;
  let tmp22Result4 = null;
  if (null != guild) {
    ({ overview: obj7.style, overviewContent: obj7.contentContainerStyle } = tmp5);
    const obj8 = { style: null, contentContainerStyle: null, children: closure_18(Stack, obj9) };
    const Form = tmp(tmp2[23]).Form;
    obj9 = { style: obj10, spacing: tmp3(tmp2[11]).space.PX_24, children: items10 };
    obj10 = { paddingHorizontal: token };
    Stack = tmp(tmp2[24]).Stack;
    let channelName = null;
    if (null != rulesChannel) {
      const tmpResult = tmp(tmp2[19]);
      channelName = tmpResult.computeChannelName(rulesChannel, callback1, safetyAlertsChannel, true);
    }
    const obj11 = { helperText: intl2.string(tmp(tmp2[16]).t.BtwmYB), hasIcons: false, children: closure_16(TableRow, obj12) };
    const TableRowGroup = tmp(tmp2[25]).TableRowGroup;
    intl2 = tmp(tmp2[16]).intl;
    obj12 = { label: intl3.string(tmp(tmp2[16]).t.U5BW0c), disabled: !canManage, trailing: closure_16(TrailingText, obj13), arrow: true, onPress: callback2 };
    TableRow = tmp(tmp2[26]).TableRow;
    intl3 = tmp(tmp2[16]).intl;
    TrailingText = tmp(tmp2[26]).TableRow.TrailingText;
    if (channelName == null) {
      const intl4 = tmp(tmp2[16]).intl;
      channelName = intl4.string(tmp(tmp2[16]).t.PoWNfe);
    }
    obj13 = { text: channelName };
    items10 = [closure_16(TableRowGroup, obj11), , , , ];
    let channelName1 = null;
    if (null != publicUpdatesChannel) {
      const tmpResult3 = tmp(tmp2[19]);
      channelName1 = tmpResult3.computeChannelName(publicUpdatesChannel, callback1, safetyAlertsChannel, true);
    }
    const TableRowGroup2 = tmp(tmp2[25]).TableRowGroup;
    const intl5 = tmp(tmp2[16]).intl;
    const items11 = [intl5.string(tmp(tmp2[16]).t.ZFeonu), ];
    let prop;
    if (guild != null) {
      prop = guild.publicUpdatesChannelId;
    }
    let tmp23Result = null;
    if (null == prop) {
      let prop1;
      if (guild != null) {
        prop1 = guild.safetyAlertsChannelId;
      }
      tmp23Result = null;
      if (null == prop1) {
        const obj14 = { children: items12 };
        const intl6 = tmp(tmp2[16]).intl;
        items12 = [" ", intl6.string(tmp(tmp2[16]).t["0H6Cdy"])];
        tmp23Result = tmp23(tmp34, obj14);
      }
    }
    const obj15 = { helperText: closure_18(closure_17, obj16), hasIcons: false, children: closure_16(TableRow2, obj17) };
    obj16 = { children: items11 };
    items11[1] = tmp23Result;
    obj17 = { label: intl7.string(tmp(tmp2[16]).t.vAyDGU), subLabel: intl8.string(tmp(tmp2[16]).t.zdWNET), disabled: !isAdmin, trailing: closure_16(TrailingText2, obj18), arrow: true, onPress: callback3 };
    TableRow2 = tmp(tmp2[26]).TableRow;
    intl7 = tmp(tmp2[16]).intl;
    intl8 = tmp(tmp2[16]).intl;
    TrailingText2 = tmp(tmp2[26]).TableRow.TrailingText;
    if (channelName1 == null) {
      const intl9 = tmp(tmp2[16]).intl;
      channelName1 = intl9.string(tmp(tmp2[16]).t.PoWNfe);
    }
    obj18 = { text: channelName1 };
    items10[1] = closure_16(TableRowGroup2, obj15);
    let str = null;
    if (null != safetyAlertsChannel) {
      const tmpResult4 = tmp(tmp2[19]);
      str = tmpResult4.computeChannelName(safetyAlertsChannel, callback1, safetyAlertsChannel, true);
    }
    const obj19 = { helperText: intl10.string(tmp(tmp2[16]).t.htioQo), hasIcons: false, children: closure_16(TableRow3, obj20) };
    const TableRowGroup3 = tmp(tmp2[25]).TableRowGroup;
    intl10 = tmp(tmp2[16]).intl;
    obj20 = { label: intl11.string(tmp(tmp2[16]).t.sMkYE8), disabled: !canManage, trailing: closure_16(TrailingText3, obj21), arrow: true, onPress: callback4 };
    TableRow3 = tmp(tmp2[26]).TableRow;
    intl11 = tmp(tmp2[16]).intl;
    TrailingText3 = tmp(tmp2[26]).TableRow.TrailingText;
    if (str == null) {
      str = "";
    }
    obj21 = { text: str };
    items10[2] = closure_16(TableRowGroup3, obj19);
    let preferredLocale2;
    let tmp22Result = null;
    if (null != guild) {
      preferredLocale2 = guild.preferredLocale;
      const arr14 = calculateLocaleOptions();
      let found = arr14.find((value) => value.value === preferredLocale2);
      let str2;
      if (found != null) {
        str2 = found.label;
      }
      const obj22 = { helperText: intl12.string(tmp(tmp2[16]).t["l2g81/"]), hasIcons: false, children: closure_16(TableRow4, obj23) };
      const TableRowGroup4 = tmp(tmp2[25]).TableRowGroup;
      intl12 = tmp(tmp2[16]).intl;
      obj23 = { label: intl13.string(tmp(tmp2[16]).t.VeC8vc), disabled: !canManage, trailing: closure_16(TrailingText4, obj24), arrow: true, onPress: tmp20 };
      TableRow4 = tmp(tmp2[26]).TableRow;
      intl13 = tmp(tmp2[16]).intl;
      TrailingText4 = tmp(tmp2[26]).TableRow.TrailingText;
      if (str2 == null) {
        str2 = "";
      }
      obj24 = { text: str2 };
      tmp22Result = tmp22(TableRowGroup4, obj22);
    }
    items10[3] = tmp22Result;
    let tmp22Result3 = null;
    if (isAdmin) {
      const obj25 = { helperText: stringResult, hasIcons: false, children: closure_16(TableRow5, obj26) };
      const TableRowGroup5 = tmp(tmp2[25]).TableRowGroup;
      obj26 = { variant: "danger", onPress: callback, label: intl14.string(tmp(tmp2[16]).t.c1BmbC), disabled: null == guild };
      TableRow5 = tmp(tmp2[26]).TableRow;
      intl14 = tmp(tmp2[16]).intl;
      tmp22Result3 = tmp22(TableRowGroup5, obj25);
    }
    items10[4] = tmp22Result3;
    tmp22Result4 = tmp22(Form, obj8);
  }
  return tmp22Result4;
};
