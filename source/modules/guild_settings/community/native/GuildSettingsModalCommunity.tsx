// Module ID: 16233
// Function ID: 125457
// Name: GuildSettingsModalCommunity
// Dependencies: []
// Exports: default

// Module 16233 (GuildSettingsModalCommunity)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[2]).GUILD_SELECTABLE_CHANNELS_KEY;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const calculateLocaleOptions = arg1(dependencyMap[7]).calculateLocaleOptions;
({ ChannelTypes: closure_12, GuildFeatures: closure_13, GuildSettingsSections: closure_14, Permissions: closure_15 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = { overview: { flex: 1 } };
obj = { paddingTop: importDefault(dependencyMap[11]).space.PX_16 };
obj.overviewContent = obj;
let closure_18 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunity.tsx");

export default function GuildSettingsModalCommunity(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const onClose = guildId.onClose;
  const importDefault = onClose;
  let closure_9;
  let closure_10;
  let closure_11;
  let obj = arg1(dependencyMap[12]);
  const token = obj.useToken(importDefault(dependencyMap[11]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = arg1(dependencyMap[13]);
  const navigation = obj1.useNavigation();
  const dependencyMap = navigation;
  let obj2 = arg1(dependencyMap[14]);
  const items = [closure_10];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => preferredLocale.getProps());
  const submitting = stateFromStoresObject.submitting;
  const React = submitting;
  const hasChanges = stateFromStoresObject.hasChanges;
  let closure_4 = hasChanges;
  const guild = stateFromStoresObject.guild;
  let closure_5 = guild;
  let obj3 = arg1(dependencyMap[14]);
  const items1 = [closure_7];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
    const obj = {};
    let canResult = null != guild;
    if (canResult) {
      canResult = rulesChannel.can(constants3.MANAGE_GUILD, guild);
    }
    obj.canManage = canResult;
    let canResult1 = null != guild;
    if (canResult1) {
      canResult1 = rulesChannel.can(constants3.ADMINISTRATOR, guild);
    }
    obj.isAdmin = canResult1;
    return obj;
  });
  const canManage = stateFromStoresObject1.canManage;
  let closure_6 = canManage;
  const isAdmin = stateFromStoresObject1.isAdmin;
  let obj4 = arg1(dependencyMap[14]);
  const items2 = [closure_4];
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
  const rulesChannel = stateFromStoresObject2.rulesChannel;
  closure_7 = rulesChannel;
  const publicUpdatesChannel = stateFromStoresObject2.publicUpdatesChannel;
  let closure_8 = publicUpdatesChannel;
  const items3 = [guild, navigation, onClose];
  const effect = React.useEffect(() => {
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(constants.COMMUNITY);
    }
    if (!hasItem) {
      let obj = onClose(navigation[15]);
      obj.setSection(constants2.COMMUNITY_INTRO);
      obj = { onClose };
      const replaced = navigation.replace(constants2.COMMUNITY_INTRO, obj);
    }
  }, items3);
  const items4 = [guild];
  const callback = React.useCallback(() => {
    if (null != guild) {
      const _Set = Set;
      const set = new Set(guild.features);
      set.delete(constants.COMMUNITY);
      set.delete(constants.DISCOVERABLE);
      const obj = { "Null": "mn", "Null": "description", "Null": "Array", features: set, preferredLocale: guild.preferredLocale };
      onClose(navigation[15]).saveGuild(guild.id, obj);
      const obj2 = onClose(navigation[15]);
    }
  }, items4);
  const intl = arg1(dependencyMap[16]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[16]).t;
  if (null != guild) {
    let stringResult = string(t.aQzVF8);
  } else {
    stringResult = string(t.kQzUNk);
  }
  const items5 = [guild, navigation, submitting, hasChanges, onClose];
  const effect1 = React.useEffect(() => {
    function handlePublicCancelChanges(arg0) {
      if (null != id) {
        handlePublicSaveChanges(closure_2[15]).cancelChanges(id.id);
        const obj = handlePublicSaveChanges(closure_2[15]);
      }
      if (null != handlePublicSaveChanges) {
        handlePublicSaveChanges();
      }
    }
    function handlePublicSaveChanges(arg0) {
      let features;
      let id;
      let preferredLocale;
      let publicUpdatesChannelId;
      let rulesChannelId;
      let safetyAlertsChannelId;
      if (null != closure_5) {
        ({ id, rulesChannelId, publicUpdatesChannelId, preferredLocale, features, safetyAlertsChannelId } = closure_5);
        let obj = handlePublicSaveChanges(closure_2[15]);
        obj = { rulesChannelId, safetyAlertsChannelId, publicUpdatesChannelId, preferredLocale, features };
        obj.saveGuild(id, obj);
      }
    }
    const obj = {};
    if (submitting) {
      let fn = () => null;
    } else if (hasChanges) {
      fn = () => {
        const obj = { onPress: handlePublicCancelChanges };
        const intl = handlePublicCancelChanges(closure_2[16]).intl;
        obj.text = intl.string(handlePublicCancelChanges(closure_2[16]).t.ETE/oC);
        return callback(handlePublicCancelChanges(closure_2[17]).HeaderActionButton, obj);
      };
    }
    obj.headerLeft = fn;
    if (submitting) {
      let fn2 = () => callback(handlePublicCancelChanges(closure_2[18]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: handlePublicSaveChanges };
        const intl = handlePublicCancelChanges(closure_2[16]).intl;
        obj.text = intl.string(handlePublicCancelChanges(closure_2[16]).t.R3BPH+);
        return callback(handlePublicCancelChanges(closure_2[17]).HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items5);
  const items6 = [guildId];
  const callback1 = React.useCallback(() => {
    const channels = guild.getChannels(guildId);
    if (null != channels) {
      const found = channels[closure_6].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
      const mapped = found.map((channel) => {
        channel = channel.channel;
        const obj = { value: channel.id, label: callback(closure_2[19]).computeChannelName(channel, closure_9, closure_8, true) };
        return obj;
      });
      const arr = channels[closure_6];
    }
    return [];
  }, items6);
  closure_9 = callback1;
  const items7 = [callback1, rulesChannel];
  const items8 = [callback1, publicUpdatesChannel];
  const callback2 = React.useCallback(() => {
    let obj = onClose(navigation[20]);
    obj = {};
    const intl = guildId(navigation[16]).intl;
    obj.title = intl.string(guildId(navigation[16]).t.Yr6nGx);
    obj.items = callback1();
    obj.onItemSelect = function onItemSelect(rulesChannelId) {
      let obj = callback(closure_2[15]);
      obj = { rulesChannelId };
      obj.updateGuild(obj);
      callback(closure_2[20]).hideActionSheet();
    };
    let id;
    if (null != rulesChannel) {
      id = rulesChannel.id;
    }
    obj.selectedItem = id;
    obj.hasIcons = false;
    obj.openLazy(guildId(navigation[22])(navigation[21], navigation.paths), "SelectRulesChannel", obj);
  }, items7);
  let preferredLocale;
  const callback3 = React.useCallback(() => {
    let obj = onClose(navigation[20]);
    obj = {};
    const intl = guildId(navigation[16]).intl;
    obj.title = intl.string(guildId(navigation[16]).t.VqhxxN);
    obj.items = callback1();
    obj.onItemSelect = function onItemSelect(publicUpdatesChannelId) {
      let obj = callback(closure_2[15]);
      obj = { publicUpdatesChannelId };
      obj.updateGuild(obj);
      callback(closure_2[20]).hideActionSheet();
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
  closure_10 = preferredLocale;
  const items9 = [preferredLocale];
  closure_11 = React.useCallback(() => {
    let obj = onClose(navigation[20]);
    obj = {};
    const intl = guildId(navigation[16]).intl;
    obj.title = intl.string(guildId(navigation[16]).t.dXE8/D);
    obj.items = callback();
    obj.onItemSelect = function onItemSelect(preferredLocale) {
      let obj = callback(closure_2[15]);
      obj = { preferredLocale };
      obj.updateGuild(obj);
      callback(closure_2[20]).hideActionSheet();
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
    obj.spacing = importDefault(dependencyMap[11]).space.PX_24;
    let channelName = null;
    if (null != rulesChannel) {
      let obj8 = arg1(dependencyMap[19]);
      channelName = obj8.computeChannelName(rulesChannel, closure_9, closure_8, true);
    }
    obj2 = {};
    const intl2 = arg1(dependencyMap[16]).intl;
    obj2.helperText = intl2.string(arg1(dependencyMap[16]).t.3q1TEo);
    obj2.hasIcons = false;
    obj3 = {};
    const intl3 = arg1(dependencyMap[16]).intl;
    obj3.label = intl3.string(arg1(dependencyMap[16]).t.U5BW0c);
    obj3.disabled = !canManage;
    obj4 = {};
    let str = "";
    let str2 = "";
    if (null != channelName) {
      str2 = channelName;
    }
    obj4.text = str2;
    obj3.trailing = callback(arg1(dependencyMap[26]).TableRow.TrailingText, obj4);
    obj3.arrow = true;
    obj3.onPress = callback2;
    obj2.children = callback(arg1(dependencyMap[26]).TableRow, obj3);
    const items10 = [callback(arg1(dependencyMap[25]).TableRowGroup, obj2), , , ];
    let channelName1 = null;
    if (null != publicUpdatesChannel) {
      const obj13 = arg1(dependencyMap[19]);
      channelName1 = obj13.computeChannelName(publicUpdatesChannel, closure_9, closure_8, true);
    }
    const obj5 = {};
    const intl4 = arg1(dependencyMap[16]).intl;
    obj5.helperText = intl4.string(arg1(dependencyMap[16]).t.Fg6O/5);
    obj5.hasIcons = false;
    const obj6 = {};
    const intl5 = arg1(dependencyMap[16]).intl;
    obj6.label = intl5.string(arg1(dependencyMap[16]).t.vAyDGU);
    obj6.disabled = !isAdmin;
    const obj7 = {};
    if (null != channelName1) {
      str = channelName1;
    }
    obj7.text = str;
    obj6.trailing = callback(arg1(dependencyMap[26]).TableRow.TrailingText, obj7);
    obj6.arrow = true;
    obj6.onPress = callback3;
    obj5.children = callback(arg1(dependencyMap[26]).TableRow, obj6);
    items10[1] = callback(arg1(dependencyMap[25]).TableRowGroup, obj5);
    items10[2] = () => {
      if (null == guild) {
        return null;
      } else {
        const guildId = guild.preferredLocale;
        const found = callback().find((value) => value.value === preferredLocale);
        let label;
        if (null != found) {
          label = found.label;
        }
        let obj = {};
        const intl = guildId(navigation[16]).intl;
        obj.helperText = intl.string(guildId(navigation[16]).t.l2g81/);
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
        obj.trailing = closure_16(guildId(navigation[26]).TableRow.TrailingText, obj);
        obj.arrow = true;
        obj.onPress = callback;
        obj.children = closure_16(guildId(navigation[26]).TableRow, obj);
        return closure_16(guildId(navigation[25]).TableRowGroup, obj);
      }
    }();
    let tmp42 = null;
    if (isAdmin) {
      obj8 = { helperText: stringResult, hasIcons: false };
      const obj9 = { variant: "danger", onPress: callback };
      const intl6 = arg1(dependencyMap[16]).intl;
      obj9.label = intl6.string(arg1(dependencyMap[16]).t.c1BmbC);
      obj9.disabled = !tmp9;
      obj8.children = callback(arg1(dependencyMap[26]).TableRow, obj9);
      tmp42 = callback(arg1(dependencyMap[25]).TableRowGroup, obj8);
    }
    items10[3] = tmp42;
    obj.children = items10;
    obj.children = closure_17(arg1(dependencyMap[24]).Stack, obj);
    tmp17Result = callback(arg1(dependencyMap[23]).Form, obj);
    const tmp17 = callback;
    const tmp20 = closure_17;
  }
  return tmp17Result;
};
