// Module ID: 16350
// Function ID: 127630
// Name: GuildSettingsModalCommunity
// Dependencies: [31, 1348, 1907, 3758, 3767, 1849, 8439, 15204, 653, 33, 4130, 689, 3834, 1456, 566, 8438, 1212, 5788, 5087, 4320, 4098, 8382, 1934, 7495, 4541, 5503, 5165, 2]
// Exports: default

// Module 16350 (GuildSettingsModalCommunity)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_6 } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { calculateLocaleOptions } from "GuildPrimaryCategory";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
({ ChannelTypes: closure_12, GuildFeatures: closure_13, GuildSettingsSections: closure_14, Permissions: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
_createForOfIteratorHelperLoose = { overview: { flex: 1 } };
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.overviewContent = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx");

export default function GuildSettingsModalCommunity(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let callback1;
  let preferredLocale;
  let closure_11;
  let obj = guildId(navigation[12]);
  const token = obj.useToken(onClose(navigation[11]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = guildId(navigation[13]);
  navigation = obj1.useNavigation();
  let obj2 = guildId(navigation[14]);
  const items = [preferredLocale];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => preferredLocale.getProps());
  const submitting = stateFromStoresObject.submitting;
  const hasChanges = stateFromStoresObject.hasChanges;
  const guild = stateFromStoresObject.guild;
  let obj3 = guildId(navigation[14]);
  const items1 = [rulesChannel];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    const obj = {};
    let canResult = null != guild;
    if (canResult) {
      canResult = rulesChannel.can(outer1_15.MANAGE_GUILD, guild);
    }
    obj.canManage = canResult;
    let canResult1 = null != guild;
    if (canResult1) {
      canResult1 = rulesChannel.can(outer1_15.ADMINISTRATOR, guild);
    }
    obj.isAdmin = canResult1;
    return obj;
  });
  const canManage = stateFromStoresObject1.canManage;
  const isAdmin = stateFromStoresObject1.isAdmin;
  let obj4 = guildId(navigation[14]);
  const items2 = [hasChanges];
  const stateFromStoresObject2 = obj4.useStateFromStoresObject(items2, () => {
    const obj = {};
    let rulesChannelId;
    if (null != guild) {
      rulesChannelId = guild.rulesChannelId;
    }
    obj.rulesChannel = hasChanges.getChannel(rulesChannelId);
    let prop;
    if (null != guild) {
      prop = guild.publicUpdatesChannelId;
    }
    obj.publicUpdatesChannel = hasChanges.getChannel(prop);
    return obj;
  });
  rulesChannel = stateFromStoresObject2.rulesChannel;
  const publicUpdatesChannel = stateFromStoresObject2.publicUpdatesChannel;
  const items3 = [guild, navigation, onClose];
  const effect = submitting.useEffect(() => {
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(outer1_13.COMMUNITY);
    }
    if (!hasItem) {
      let obj = onClose(navigation[15]);
      obj.setSection(outer1_14.COMMUNITY_INTRO);
      obj = { onClose };
      const replaced = navigation.replace(outer1_14.COMMUNITY_INTRO, obj);
    }
  }, items3);
  const items4 = [guild];
  const callback = submitting.useCallback(() => {
    if (null != guild) {
      const _Set = Set;
      const set = new Set(guild.features);
      set.delete(outer1_13.COMMUNITY);
      set.delete(outer1_13.DISCOVERABLE);
      const obj = { features: set, rulesChannelId: null, publicUpdatesChannelId: null, preferredLocale: guild.preferredLocale };
      onClose(navigation[15]).saveGuild(guild.id, obj);
      const obj2 = onClose(navigation[15]);
    }
  }, items4);
  let intl = guildId(navigation[16]).intl;
  const string = intl.string;
  const t = guildId(navigation[16]).t;
  if (null != guild) {
    let stringResult = string(t.aQzVF8);
  } else {
    stringResult = string(t.kQzUNk);
  }
  const items5 = [guild, navigation, submitting, hasChanges, onClose];
  const effect1 = submitting.useEffect(() => {
    function handlePublicCancelChanges() {
      if (null != outer1_5) {
        onClose(navigation[15]).cancelChanges(outer1_5.id);
        const obj = onClose(navigation[15]);
      }
      if (null != handlePublicSaveChanges) {
        handlePublicSaveChanges();
      }
    }
    function handlePublicSaveChanges() {
      let features;
      let id;
      let preferredLocale;
      let publicUpdatesChannelId;
      let rulesChannelId;
      let safetyAlertsChannelId;
      if (null != outer1_5) {
        ({ id, rulesChannelId, publicUpdatesChannelId, preferredLocale, features, safetyAlertsChannelId } = outer1_5);
        let obj = onClose(navigation[15]);
        obj = { rulesChannelId, safetyAlertsChannelId, publicUpdatesChannelId, preferredLocale, features };
        obj.saveGuild(id, obj);
      }
    }
    let obj = {};
    if (submitting) {
      let fn = () => null;
    } else if (hasChanges) {
      fn = () => {
        const obj = { onPress: handlePublicCancelChanges };
        const intl = guildId(navigation[16]).intl;
        obj.text = intl.string(guildId(navigation[16]).t["ETE/oC"]);
        return outer2_16(guildId(navigation[17]).HeaderActionButton, obj);
      };
    }
    obj.headerLeft = fn;
    if (submitting) {
      let fn2 = () => outer2_16(guildId(navigation[18]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: handlePublicSaveChanges };
        const intl = guildId(navigation[16]).intl;
        obj.text = intl.string(guildId(navigation[16]).t["R3BPH+"]);
        return outer2_16(guildId(navigation[17]).HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items5);
  const items6 = [guildId];
  callback1 = submitting.useCallback(() => {
    const channels = guild.getChannels(guildId);
    if (null != channels) {
      const found = channels[canManage].filter((channel) => channel.channel.type === outer2_12.GUILD_TEXT);
      const mapped = found.map((channel) => {
        channel = channel.channel;
        const obj = { value: channel.id, label: guildId(navigation[19]).computeChannelName(channel, callback1, publicUpdatesChannel, true) };
        return obj;
      });
      const arr = channels[canManage];
    }
    return [];
  }, items6);
  const items7 = [callback1, rulesChannel];
  const items8 = [callback1, publicUpdatesChannel];
  const callback2 = submitting.useCallback(() => {
    let obj = onClose(navigation[20]);
    obj = {};
    const intl = guildId(navigation[16]).intl;
    obj.title = intl.string(guildId(navigation[16]).t.Yr6nGx);
    obj.items = callback1();
    obj.onItemSelect = function onItemSelect(rulesChannelId) {
      let obj = onClose(navigation[15]);
      obj = { rulesChannelId };
      obj.updateGuild(obj);
      onClose(navigation[20]).hideActionSheet();
    };
    let id;
    if (null != rulesChannel) {
      id = rulesChannel.id;
    }
    obj.selectedItem = id;
    obj.hasIcons = false;
    obj.openLazy(guildId(navigation[22])(navigation[21], navigation.paths), "SelectRulesChannel", obj);
  }, items7);
  preferredLocale = undefined;
  const callback3 = submitting.useCallback(() => {
    let obj = onClose(navigation[20]);
    obj = {};
    const intl = guildId(navigation[16]).intl;
    obj.title = intl.string(guildId(navigation[16]).t.VqhxxN);
    obj.items = callback1();
    obj.onItemSelect = function onItemSelect(publicUpdatesChannelId) {
      let obj = onClose(navigation[15]);
      obj = { publicUpdatesChannelId };
      obj.updateGuild(obj);
      onClose(navigation[20]).hideActionSheet();
    };
    let id;
    if (null != publicUpdatesChannel) {
      id = publicUpdatesChannel.id;
    }
    obj.selectedItem = id;
    obj.hasIcons = false;
    obj.openLazy(guildId(navigation[22])(navigation[21], navigation.paths), "SelectUpdatesChannel", obj);
  }, items8);
  if (null != guild) {
    preferredLocale = guild.preferredLocale;
  }
  const items9 = [preferredLocale];
  closure_11 = submitting.useCallback(() => {
    let obj = onClose(navigation[20]);
    obj = {};
    const intl = guildId(navigation[16]).intl;
    obj.title = intl.string(guildId(navigation[16]).t["dXE8/D"]);
    obj.items = callback();
    obj.onItemSelect = function onItemSelect(preferredLocale) {
      let obj = onClose(navigation[15]);
      obj = { preferredLocale };
      obj.updateGuild(obj);
      onClose(navigation[20]).hideActionSheet();
    };
    obj.selectedItem = preferredLocale;
    obj.hasIcons = false;
    obj.openLazy(guildId(navigation[22])(navigation[21], navigation.paths), "SelectLocale", obj);
  }, items9);
  let tmp17Result = null;
  if (null != guild) {
    obj = {};
    ({ overview: obj6.style, overviewContent: obj6.contentContainerStyle } = tmp2);
    obj = {};
    obj1 = { paddingHorizontal: token };
    obj.style = obj1;
    obj.spacing = onClose(navigation[11]).space.PX_24;
    let channelName = null;
    if (null != rulesChannel) {
      let obj8 = guildId(navigation[19]);
      channelName = obj8.computeChannelName(rulesChannel, callback1, publicUpdatesChannel, true);
    }
    obj2 = {};
    let intl2 = guildId(navigation[16]).intl;
    obj2.helperText = intl2.string(guildId(navigation[16]).t["3q1TEo"]);
    obj2.hasIcons = false;
    obj3 = {};
    const intl3 = guildId(navigation[16]).intl;
    obj3.label = intl3.string(guildId(navigation[16]).t.U5BW0c);
    obj3.disabled = !canManage;
    obj4 = {};
    let str = "";
    let str2 = "";
    if (null != channelName) {
      str2 = channelName;
    }
    obj4.text = str2;
    obj3.trailing = callback(guildId(navigation[26]).TableRow.TrailingText, obj4);
    obj3.arrow = true;
    obj3.onPress = callback2;
    obj2.children = callback(guildId(navigation[26]).TableRow, obj3);
    const items10 = [callback(guildId(navigation[25]).TableRowGroup, obj2), , , ];
    let channelName1 = null;
    if (null != publicUpdatesChannel) {
      const obj13 = guildId(navigation[19]);
      channelName1 = obj13.computeChannelName(publicUpdatesChannel, callback1, publicUpdatesChannel, true);
    }
    const obj5 = {};
    const intl4 = guildId(navigation[16]).intl;
    obj5.helperText = intl4.string(guildId(navigation[16]).t["Fg6O/5"]);
    obj5.hasIcons = false;
    const obj6 = {};
    const intl5 = guildId(navigation[16]).intl;
    obj6.label = intl5.string(guildId(navigation[16]).t.vAyDGU);
    obj6.disabled = !isAdmin;
    const obj7 = {};
    if (null != channelName1) {
      str = channelName1;
    }
    obj7.text = str;
    obj6.trailing = callback(guildId(navigation[26]).TableRow.TrailingText, obj7);
    obj6.arrow = true;
    obj6.onPress = callback3;
    obj5.children = callback(guildId(navigation[26]).TableRow, obj6);
    items10[1] = callback(guildId(navigation[25]).TableRowGroup, obj5);
    items10[2] = (() => {
      if (null == guild) {
        return null;
      } else {
        const preferredLocale = guild.preferredLocale;
        const found = callback().find((value) => value.value === preferredLocale);
        let label;
        if (null != found) {
          label = found.label;
        }
        let obj = {};
        const intl = guildId(navigation[16]).intl;
        obj.helperText = intl.string(guildId(navigation[16]).t["l2g81/"]);
        obj.hasIcons = false;
        obj = {};
        const intl2 = guildId(navigation[16]).intl;
        obj.label = intl2.string(guildId(navigation[16]).t.VeC8vc);
        obj.disabled = !canManage;
        obj = {};
        let str = "";
        if (null != label) {
          str = label;
        }
        obj.text = str;
        obj.trailing = outer1_16(guildId(navigation[26]).TableRow.TrailingText, obj);
        obj.arrow = true;
        obj.onPress = callback;
        obj.children = outer1_16(guildId(navigation[26]).TableRow, obj);
        return outer1_16(guildId(navigation[25]).TableRowGroup, obj);
      }
    })();
    let tmp42 = null;
    if (isAdmin) {
      obj8 = { helperText: stringResult, hasIcons: false };
      const obj9 = { variant: "danger", onPress: callback };
      const intl6 = guildId(navigation[16]).intl;
      obj9.label = intl6.string(guildId(navigation[16]).t.c1BmbC);
      obj9.disabled = !tmp9;
      obj8.children = callback(guildId(navigation[26]).TableRow, obj9);
      tmp42 = callback(guildId(navigation[25]).TableRowGroup, obj8);
    }
    items10[3] = tmp42;
    obj.children = items10;
    obj.children = closure_17(guildId(navigation[24]).Stack, obj);
    tmp17Result = callback(guildId(navigation[23]).Form, obj);
    const tmp17 = callback;
    const tmp20 = closure_17;
  }
  return tmp17Result;
};
