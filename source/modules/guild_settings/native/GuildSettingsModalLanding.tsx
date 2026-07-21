// Module ID: 16074
// Function ID: 123568
// Name: trackPaneViewed
// Dependencies: [1053622272, 131072, 527826944, 553648128, 2969567232, 4143972354, 3472883726, 33554494, 1962934272, 1907, 3756, 10160, 566, 2, 8063, 356096, 473344, 167168, 8448, 144896, 1408256, 310272, 1389568, 4117248, 4117504, 4117760, 4118016, 1443072, 512, 104132608, 117440512, 251658240, 285212672, 301989888, 520093696, 1862270976, 1140850693, 1929379845, 3506438151, 2885681167, 3036676110, 956301326, 4026531847, 2365587488, 553648130, 503316480, 2969567248]
// Exports: default

// Module 16074 (trackPaneViewed)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function trackPaneViewed(destination_pane, origin_pane) {
  let obj = importDefault(dependencyMap[9]);
  obj = { settings_type: "guild", origin_pane, destination_pane };
  obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj);
}
function pushRow(arg0, items) {
  items.push(arg0);
}
function SettingsSection(guild) {
  let canConfigureOfficialMessages;
  let canManageChannels;
  let canManageGuild;
  let canManageGuildExpressions;
  let canManageWebhooks;
  let canUnlinkChannelLobbies;
  let canViewAuditLog;
  let categories;
  let isGuildAdmin;
  guild = guild.guild;
  const arg1 = guild;
  ({ isGuildAdmin, canManageGuild, canManageChannels, pushScreen: closure_1 } = guild);
  ({ canManageGuildExpressions, canViewAuditLog, canManageWebhooks, canUnlinkChannelLobbies, canConfigureOfficialMessages, categories } = guild);
  let obj = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj.label = intl.string(arg1(dependencyMap[12]).t./dp6yY);
  obj.arrow = true;
  obj = { IconComponent: arg1(dependencyMap[13]).CircleInformationIcon };
  obj.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj);
  obj.onPress = function onPress() {
    return callback(constants.OVERVIEW);
  };
  const items = [callback(arg1(dependencyMap[11]).TableRow, obj, "overview")];
  const currentUser = currentUser.getCurrentUser();
  if (canManageGuild) {
    obj = {};
    const intl2 = arg1(dependencyMap[12]).intl;
    obj.label = intl2.string(arg1(dependencyMap[12]).t.5tbTdV);
    obj.arrow = true;
    const obj1 = { IconComponent: arg1(dependencyMap[14]).ModerationIcon };
    obj.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj1);
    obj.onPress = function onPress() {
      return callback(constants.MODERATION);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj, "moderation"), items);
  }
  if (canViewAuditLog) {
    const obj2 = {};
    const intl3 = arg1(dependencyMap[12]).intl;
    obj2.label = intl3.string(arg1(dependencyMap[12]).t.SPWLyT);
    obj2.arrow = true;
    const obj3 = { IconComponent: arg1(dependencyMap[15]).ClipboardListIcon };
    obj2.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj3);
    obj2.onPress = function onPress() {
      return callback(constants.AUDIT_LOG);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj2, "auditlogs"), items);
  }
  if (!canManageChannels) {
    let canManageACategoryResult = null != currentUser;
    if (canManageACategoryResult) {
      let obj6 = importAll(dependencyMap[16]);
      canManageACategoryResult = obj6.canManageACategory(currentUser, guild, categories);
    }
    canManageChannels = canManageACategoryResult;
  }
  if (canManageChannels) {
    const obj4 = {};
    const intl4 = arg1(dependencyMap[12]).intl;
    obj4.label = intl4.string(arg1(dependencyMap[12]).t.OGiMXJ);
    obj4.arrow = true;
    const obj5 = { IconComponent: arg1(dependencyMap[17]).ChannelListIcon };
    obj4.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      const guild = closure_9.initGuild(guild.id);
      callback(constants.CHANNELS);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj4, "channels"), items);
  }
  let tmp24 = canManageGuild;
  if (!canManageGuild) {
    tmp24 = canManageWebhooks;
  }
  if (!tmp24) {
    tmp24 = canUnlinkChannelLobbies;
  }
  if (tmp24) {
    obj6 = {};
    const intl5 = arg1(dependencyMap[12]).intl;
    obj6.label = intl5.string(arg1(dependencyMap[12]).t.CIsNZw);
    obj6.arrow = true;
    const obj7 = { IconComponent: arg1(dependencyMap[18]).PuzzlePieceIcon };
    obj6.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj7);
    obj6.onPress = function onPress() {
      return callback(constants.INTEGRATIONS);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj6, "integrations"), items);
  }
  if (canManageGuildExpressions) {
    const obj8 = {};
    const intl6 = arg1(dependencyMap[12]).intl;
    obj8.label = intl6.string(arg1(dependencyMap[12]).t.sMOuuS);
    obj8.arrow = true;
    const obj9 = { IconComponent: arg1(dependencyMap[19]).ReactionIcon };
    obj8.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj9);
    obj8.onPress = function onPress() {
      return callback(constants.EMOJI);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj8, "emoji"), items);
    const obj10 = {};
    const intl7 = arg1(dependencyMap[12]).intl;
    obj10.label = intl7.string(arg1(dependencyMap[12]).t.R5nQkS);
    obj10.arrow = true;
    const obj11 = { IconComponent: arg1(dependencyMap[20]).StickerIcon };
    obj10.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj11);
    obj10.onPress = function onPress() {
      return callback(constants.STICKERS);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj10, "stickers"), items);
  }
  if (canConfigureOfficialMessages) {
    const obj12 = {};
    const intl8 = arg1(dependencyMap[12]).intl;
    obj12.label = intl8.string(arg1(dependencyMap[12]).t.xHEzFh);
    obj12.arrow = true;
    const obj13 = { IconComponent: arg1(dependencyMap[21]).StampIcon };
    obj12.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj13);
    obj12.onPress = function onPress() {
      return callback(constants.OFFICIAL_MESSAGES);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj12, "official-messages"), items);
  }
  let obj17 = arg1(dependencyMap[22]);
  if (obj17.canUseMobileServerTagSettings(guild.id)) {
    const obj14 = {};
    const intl9 = arg1(dependencyMap[12]).intl;
    obj14.label = intl9.string(arg1(dependencyMap[12]).t.2QmKZ2);
    obj14.arrow = true;
    const obj15 = { IconComponent: arg1(dependencyMap[23]).TagIcon };
    obj14.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj15);
    obj14.onPress = function onPress() {
      return callback(constants.TAG);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj14, "server-tag"), items);
  }
  if (canManageGuild) {
    const obj16 = {};
    const intl10 = arg1(dependencyMap[12]).intl;
    obj16.label = intl10.string(arg1(dependencyMap[12]).t.Am9YHi);
    obj16.arrow = true;
    obj17 = { IconComponent: arg1(dependencyMap[24]).ShieldUserIcon };
    obj16.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj17);
    obj16.onPress = function onPress() {
      return callback(constants.SECURITY);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj16, "security"), items);
  }
  if (isGuildAdmin) {
    isGuildAdmin = arg1(dependencyMap[25]).canSeeVanityUrlSettings(guild);
    const obj23 = arg1(dependencyMap[25]);
  }
  if (isGuildAdmin) {
    const obj18 = {};
    const intl11 = arg1(dependencyMap[12]).intl;
    obj18.label = intl11.string(arg1(dependencyMap[12]).t.5XZKy/);
    obj18.arrow = true;
    const obj19 = { IconComponent: arg1(dependencyMap[26]).LinkIcon };
    obj18.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj19);
    obj18.onPress = function onPress() {
      return callback(constants.VANITY_URL);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj18, "vanity"), items);
  }
  let tmp66 = null;
  if (0 !== items.length) {
    const obj20 = {};
    const intl12 = arg1(dependencyMap[12]).intl;
    obj20.title = intl12.string(arg1(dependencyMap[12]).t.3D5yo/);
    obj20.hasIcons = true;
    obj20.children = items;
    tmp66 = callback(arg1(dependencyMap[27]).TableRowGroup, obj20);
  }
  return tmp66;
}
function CommunitySection(pushScreen) {
  const arg1 = pushScreen.pushScreen;
  const features = pushScreen.guild.features;
  const hasItem = features.has(constants.COMMUNITY);
  let obj = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj.title = intl.string(arg1(dependencyMap[12]).t.1g9A/f);
  obj.hasIcons = true;
  const TableRow = arg1(dependencyMap[11]).TableRow;
  obj = {};
  const intl2 = arg1(dependencyMap[12]).intl;
  const string = intl2.string;
  const t = arg1(dependencyMap[12]).t;
  if (hasItem) {
    obj.label = string(t.nRtNqn);
    obj.arrow = true;
    obj = { IconComponent: tmp4(tmp5[28]).TreehouseIcon };
    obj.icon = callback(tmp4(tmp5[11]).TableRow.Icon, obj);
    obj.onPress = function onPress() {
      return pushScreen(constants.COMMUNITY, {});
    };
    let tmp3Result = tmp3(TableRow, obj, "community-overview");
  } else {
    obj.label = string(t.ElKTeb);
    obj.arrow = true;
    const obj1 = { IconComponent: tmp4(tmp5[28]).TreehouseIcon };
    obj.icon = callback(tmp4(tmp5[11]).TableRow.Icon, obj1);
    obj.onPress = function onPress() {
      return pushScreen(constants.COMMUNITY_INTRO, {});
    };
    tmp3Result = tmp3(TableRow, obj, "community-intro");
  }
  obj.children = tmp3Result;
  return callback(arg1(dependencyMap[27]).TableRowGroup, obj);
}
function UserManagementSection(pushScreen) {
  let canManageBans;
  let canManageGuild;
  let canManageRoles;
  const arg1 = pushScreen.pushScreen;
  ({ canManageGuild, canManageRoles, canManageBans } = pushScreen);
  let obj = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj.label = intl.string(arg1(dependencyMap[12]).t.9Oq93m);
  obj.arrow = true;
  obj = { IconComponent: arg1(dependencyMap[29]).GroupIcon };
  obj.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj);
  obj.onPress = function onPress() {
    return pushScreen(constants.MEMBERS);
  };
  const items = [callback(arg1(dependencyMap[11]).TableRow, obj, "members")];
  if (canManageRoles) {
    obj = {};
    const intl2 = arg1(dependencyMap[12]).intl;
    obj.label = intl2.string(arg1(dependencyMap[12]).t.LPJmL/);
    obj.arrow = true;
    const obj1 = { IconComponent: arg1(dependencyMap[24]).ShieldUserIcon };
    obj.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj1);
    obj.onPress = function onPress() {
      return pushScreen(constants.ROLES);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj, "roles"), items);
  }
  if (canManageGuild) {
    const obj2 = {};
    const intl3 = arg1(dependencyMap[12]).intl;
    obj2.label = intl3.string(arg1(dependencyMap[12]).t.ngRFjZ);
    obj2.arrow = true;
    const obj3 = { IconComponent: arg1(dependencyMap[26]).LinkIcon };
    obj2.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj3);
    obj2.onPress = function onPress() {
      return pushScreen(constants.INSTANT_INVITES);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj2, "invites"), items);
  }
  if (canManageBans) {
    const obj4 = {};
    const intl4 = arg1(dependencyMap[12]).intl;
    obj4.label = intl4.string(arg1(dependencyMap[12]).t.ZbeITS);
    obj4.arrow = true;
    const obj5 = { IconComponent: arg1(dependencyMap[30]).HammerIcon };
    obj4.icon = callback(arg1(dependencyMap[11]).TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      return pushScreen(constants.BANS);
    };
    pushRow(callback(arg1(dependencyMap[11]).TableRow, obj4, "bans"), items);
  }
  let tmp19 = null;
  if (0 !== items.length) {
    const obj6 = {};
    const intl5 = arg1(dependencyMap[12]).intl;
    obj6.title = intl5.string(arg1(dependencyMap[12]).t.+OecxG);
    obj6.hasIcons = true;
    obj6.children = items;
    tmp19 = callback(arg1(dependencyMap[27]).TableRowGroup, obj6);
  }
  return tmp19;
}
function GuildSettingsModalLandingInner(guild) {
  let canManageBans;
  let canManageChannels;
  let canManageGuildExpressions;
  let canManageRoles;
  let canManageWebhooks;
  let canViewAuditLog;
  let isGuildAdmin;
  guild = guild.guild;
  const arg1 = guild;
  const updateErrors = guild.updateErrors;
  const importDefault = updateErrors;
  let obj = arg1(dependencyMap[31]);
  const token = obj.useToken(importDefault(dependencyMap[32]).modules.mobile.TABLE_ROW_PADDING);
  const tmp2 = callback2();
  let obj1 = arg1(dependencyMap[33]);
  const navigation = obj1.useNavigation();
  const importAll = navigation;
  let obj2 = arg1(dependencyMap[34]);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    const channels = channels.getChannels(id);
    let tmp5;
    if (null != channels) {
      tmp5 = channels[closure_13.GUILD_CATEGORY];
    }
    return tmp5;
  });
  let obj3 = arg1(dependencyMap[34]);
  const items1 = [closure_7];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => guildPermissionProps.getGuildPermissionProps(guild));
  const effect = React.useEffect(() => {
    callback(constants.LANDING);
  }, []);
  const items2 = [navigation];
  const callback = React.useCallback((arg0) => {
    const items = [...arguments];
    const first = items[0];
    updateErrors(closure_3[35]).setSection(first);
    const items1 = [...items];
    navigation.push.apply(items1);
    callback(first, constants.LANDING);
  }, items2);
  const canManageGuild = stateFromStoresObject.canManageGuild;
  ({ isGuildAdmin, canManageRoles, canManageBans, canManageGuildExpressions, canManageChannels, canViewAuditLog, canManageWebhooks } = stateFromStoresObject);
  let obj4 = arg1(dependencyMap[36]);
  let obj5 = arg1(dependencyMap[37]);
  let canManageGuildRoleSubscriptions = obj5.useCanManageGuildRoleSubscriptions(guild);
  let result = canManageGuild;
  if (canManageGuild) {
    let obj6 = arg1(dependencyMap[38]);
    result = obj6.isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
  }
  const items3 = [updateErrors.message];
  const layoutEffect = React.useLayoutEffect(() => {
    if (null != updateErrors.message) {
      guild(closure_3[39]).presentError(updateErrors.message);
      const obj = guild(closure_3[39]);
    }
  }, items3);
  obj = {};
  obj = { style: tmp2.container, contentContainerStyle: items4 };
  const items4 = [tmp2.containerContent, guild.contentContainerStyle];
  obj1 = { style: { paddingHorizontal: token }, spacing: importDefault(dependencyMap[32]).space.PX_24 };
  obj2 = { iconProps: obj3, text: guild.name, textAccessibilityRole: "header" };
  obj3 = {
    onUpload(base64) {
      updateErrors(closure_3[35]).updateIcon(guild.id, base64);
    },
    type: "guild",
    icon: guild.icon,
    name: guild.name,
    makeURL(icon) {
      let guildIconURL = icon;
      if (icon) {
        let obj = updateErrors(closure_3[43]);
        obj = { id: guild.id, icon, canAnimate: true, size: 64 };
        guildIconURL = obj.getGuildIconURL(obj);
      }
      return guildIconURL;
    },
    disabled: !stateFromStoresObject.canManageGuild
  };
  const items5 = [callback(importDefault(dependencyMap[42]), obj2), , , , ];
  obj4 = { guild, categories: stateFromStores, isGuildAdmin, canManageGuild, canManageGuildExpressions, canManageChannels, canUnlinkChannelLobbies: obj4.useChannelsAllowedToUnlink(guild.id).length > 0, canViewAuditLog, canManageWebhooks, canConfigureOfficialMessages: result, pushScreen: callback };
  items5[1] = callback(SettingsSection, obj4);
  let tmp18 = canManageGuild;
  if (canManageGuild) {
    obj5 = { guild, pushScreen: callback };
    tmp18 = callback(CommunitySection, obj5);
  }
  items5[2] = tmp18;
  if (canManageGuildRoleSubscriptions) {
    obj6 = { guild, pushScreen: callback };
    canManageGuildRoleSubscriptions = callback(importDefault(dependencyMap[44]), obj6);
  }
  items5[3] = canManageGuildRoleSubscriptions;
  items5[4] = callback(UserManagementSection, { canManageGuild, canManageRoles, canManageBans, pushScreen: callback });
  obj1.children = items5;
  obj.children = closure_16(arg1(dependencyMap[41]).Stack, obj1);
  const items6 = [callback(arg1(dependencyMap[40]).Form, obj), callback(arg1(dependencyMap[45]).NavScrim, {})];
  obj.children = items6;
  return closure_16(closure_17, obj);
}
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
({ GuildFeatures: closure_11, GuildSettingsSections: closure_12, ChannelTypes: closure_13, AnalyticEvents: closure_14 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = arg1(dependencyMap[8]));
let closure_18 = _isNativeReflectConstruct.createStyles({ container: { flex: 1 }, containerContent: { paddingTop: 16 } });
const tmp3 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[46]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalLanding.tsx");

export default function GuildSettingsModalLanding(guildId) {
  const arg1 = guildId.guildId;
  let obj = arg1(dependencyMap[34]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  arg1(dependencyMap[34]);
  [][0] = closure_10;
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, contentContainerStyle: guildId.contentContainerStyle, updateErrors: tmp3 };
    tmp4 = callback(GuildSettingsModalLandingInner, obj);
  }
  return tmp4;
};
