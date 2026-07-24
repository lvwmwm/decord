// Module ID: 16254
// Function ID: 126168
// Name: trackPaneViewed
// Dependencies: [31, 1907, 1838, 3758, 1849, 16255, 8483, 653, 33, 4324, 4130, 5165, 1212, 4086, 16256, 9193, 3763, 16258, 13908, 7437, 7488, 9991, 8485, 7512, 8466, 16260, 4074, 5501, 13575, 4646, 9066, 3834, 689, 1456, 566, 8482, 16261, 5641, 5648, 3830, 7636, 4541, 15582, 1392, 16262, 5448, 2]
// Exports: default

// Module 16254 (trackPaneViewed)
import map from "map";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "useNavigation";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
function trackPaneViewed(destination_pane, origin_pane) {
  let obj = importDefault(4324);
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
  let importDefault;
  let isGuildAdmin;
  guild = guild.guild;
  ({ isGuildAdmin, canManageGuild, canManageChannels, pushScreen: importDefault } = guild);
  ({ canManageGuildExpressions, canViewAuditLog, canManageWebhooks, canUnlinkChannelLobbies, canConfigureOfficialMessages, categories } = guild);
  let obj = {};
  const intl = guild(1212).intl;
  obj.label = intl.string(guild(1212).t["/dp6yY"]);
  obj.arrow = true;
  obj = { IconComponent: guild(4086).CircleInformationIcon };
  obj.icon = callback(guild(5165).TableRow.Icon, obj);
  obj.onPress = function onPress() {
    return callback(outer1_12.OVERVIEW);
  };
  const items = [callback(guild(5165).TableRow, obj, "overview")];
  currentUser = currentUser.getCurrentUser();
  if (canManageGuild) {
    obj = {};
    const intl2 = guild(1212).intl;
    obj.label = intl2.string(guild(1212).t["5tbTdV"]);
    obj.arrow = true;
    const obj1 = { IconComponent: guild(16256).ModerationIcon };
    obj.icon = callback(guild(5165).TableRow.Icon, obj1);
    obj.onPress = function onPress() {
      return callback(outer1_12.MODERATION);
    };
    pushRow(callback(guild(5165).TableRow, obj, "moderation"), items);
  }
  if (canViewAuditLog) {
    const obj2 = {};
    const intl3 = guild(1212).intl;
    obj2.label = intl3.string(guild(1212).t.SPWLyT);
    obj2.arrow = true;
    const obj3 = { IconComponent: guild(9193).ClipboardListIcon };
    obj2.icon = callback(guild(5165).TableRow.Icon, obj3);
    obj2.onPress = function onPress() {
      return callback(outer1_12.AUDIT_LOG);
    };
    pushRow(callback(guild(5165).TableRow, obj2, "auditlogs"), items);
  }
  if (!canManageChannels) {
    let canManageACategoryResult = null != currentUser;
    if (canManageACategoryResult) {
      let obj6 = importAll(3763);
      canManageACategoryResult = obj6.canManageACategory(currentUser, guild, categories);
    }
    canManageChannels = canManageACategoryResult;
  }
  if (canManageChannels) {
    const obj4 = {};
    const intl4 = guild(1212).intl;
    obj4.label = intl4.string(guild(1212).t.OGiMXJ);
    obj4.arrow = true;
    const obj5 = { IconComponent: guild(16258).ChannelListIcon };
    obj4.icon = callback(guild(5165).TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      guild = outer1_9.initGuild(guild.id);
      callback(outer1_12.CHANNELS);
    };
    pushRow(callback(guild(5165).TableRow, obj4, "channels"), items);
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
    const intl5 = guild(1212).intl;
    obj6.label = intl5.string(guild(1212).t.CIsNZw);
    obj6.arrow = true;
    const obj7 = { IconComponent: guild(13908).PuzzlePieceIcon };
    obj6.icon = callback(guild(5165).TableRow.Icon, obj7);
    obj6.onPress = function onPress() {
      return callback(outer1_12.INTEGRATIONS);
    };
    pushRow(callback(guild(5165).TableRow, obj6, "integrations"), items);
  }
  if (canManageGuildExpressions) {
    const obj8 = {};
    const intl6 = guild(1212).intl;
    obj8.label = intl6.string(guild(1212).t.sMOuuS);
    obj8.arrow = true;
    const obj9 = { IconComponent: guild(7437).ReactionIcon };
    obj8.icon = callback(guild(5165).TableRow.Icon, obj9);
    obj8.onPress = function onPress() {
      return callback(outer1_12.EMOJI);
    };
    pushRow(callback(guild(5165).TableRow, obj8, "emoji"), items);
    const obj10 = {};
    const intl7 = guild(1212).intl;
    obj10.label = intl7.string(guild(1212).t.R5nQkS);
    obj10.arrow = true;
    const obj11 = { IconComponent: guild(7488).StickerIcon };
    obj10.icon = callback(guild(5165).TableRow.Icon, obj11);
    obj10.onPress = function onPress() {
      return callback(outer1_12.STICKERS);
    };
    pushRow(callback(guild(5165).TableRow, obj10, "stickers"), items);
  }
  if (canConfigureOfficialMessages) {
    const obj12 = {};
    const intl8 = guild(1212).intl;
    obj12.label = intl8.string(guild(1212).t.xHEzFh);
    obj12.arrow = true;
    const obj13 = { IconComponent: guild(9991).StampIcon };
    obj12.icon = callback(guild(5165).TableRow.Icon, obj13);
    obj12.onPress = function onPress() {
      return callback(outer1_12.OFFICIAL_MESSAGES);
    };
    pushRow(callback(guild(5165).TableRow, obj12, "official-messages"), items);
  }
  let obj17 = guild(8485);
  if (obj17.canUseMobileServerTagSettings(guild.id)) {
    const obj14 = {};
    const intl9 = guild(1212).intl;
    obj14.label = intl9.string(guild(1212).t["2QmKZ2"]);
    obj14.arrow = true;
    const obj15 = { IconComponent: guild(7512).TagIcon };
    obj14.icon = callback(guild(5165).TableRow.Icon, obj15);
    obj14.onPress = function onPress() {
      return callback(outer1_12.TAG);
    };
    pushRow(callback(guild(5165).TableRow, obj14, "server-tag"), items);
  }
  if (canManageGuild) {
    const obj16 = {};
    const intl10 = guild(1212).intl;
    obj16.label = intl10.string(guild(1212).t.Am9YHi);
    obj16.arrow = true;
    obj17 = { IconComponent: guild(8466).ShieldUserIcon };
    obj16.icon = callback(guild(5165).TableRow.Icon, obj17);
    obj16.onPress = function onPress() {
      return callback(outer1_12.SECURITY);
    };
    pushRow(callback(guild(5165).TableRow, obj16, "security"), items);
  }
  if (isGuildAdmin) {
    isGuildAdmin = guild(16260).canSeeVanityUrlSettings(guild);
    const obj23 = guild(16260);
  }
  if (isGuildAdmin) {
    const obj18 = {};
    const intl11 = guild(1212).intl;
    obj18.label = intl11.string(guild(1212).t["5XZKy/"]);
    obj18.arrow = true;
    const obj19 = { IconComponent: guild(4074).LinkIcon };
    obj18.icon = callback(guild(5165).TableRow.Icon, obj19);
    obj18.onPress = function onPress() {
      return callback(outer1_12.VANITY_URL);
    };
    pushRow(callback(guild(5165).TableRow, obj18, "vanity"), items);
  }
  let tmp66 = null;
  if (0 !== items.length) {
    const obj20 = {};
    const intl12 = guild(1212).intl;
    obj20.title = intl12.string(guild(1212).t["3D5yo/"]);
    obj20.hasIcons = true;
    obj20.children = items;
    tmp66 = callback(guild(5501).TableRowGroup, obj20);
  }
  return tmp66;
}
function CommunitySection(pushScreen) {
  pushScreen = pushScreen.pushScreen;
  const features = pushScreen.guild.features;
  const hasItem = features.has(constants.COMMUNITY);
  let obj = {};
  const intl = pushScreen(1212).intl;
  obj.title = intl.string(pushScreen(1212).t["1g9A/f"]);
  obj.hasIcons = true;
  const TableRow = pushScreen(5165).TableRow;
  obj = {};
  const intl2 = pushScreen(1212).intl;
  const string = intl2.string;
  const t = pushScreen(1212).t;
  if (hasItem) {
    obj.label = string(t.nRtNqn);
    obj.arrow = true;
    obj = { IconComponent: tmp4(13575).TreehouseIcon };
    obj.icon = callback(tmp4(5165).TableRow.Icon, obj);
    obj.onPress = function onPress() {
      return pushScreen(outer1_12.COMMUNITY, {});
    };
    let tmp3Result = tmp3(TableRow, obj, "community-overview");
  } else {
    obj.label = string(t.ElKTeb);
    obj.arrow = true;
    const obj1 = { IconComponent: tmp4(13575).TreehouseIcon };
    obj.icon = callback(tmp4(5165).TableRow.Icon, obj1);
    obj.onPress = function onPress() {
      return pushScreen(outer1_12.COMMUNITY_INTRO, {});
    };
    tmp3Result = tmp3(TableRow, obj, "community-intro");
  }
  obj.children = tmp3Result;
  return callback(pushScreen(5501).TableRowGroup, obj);
}
function UserManagementSection(pushScreen) {
  let canManageBans;
  let canManageGuild;
  let canManageRoles;
  pushScreen = pushScreen.pushScreen;
  ({ canManageGuild, canManageRoles, canManageBans } = pushScreen);
  let obj = {};
  const intl = pushScreen(1212).intl;
  obj.label = intl.string(pushScreen(1212).t["9Oq93m"]);
  obj.arrow = true;
  obj = { IconComponent: pushScreen(4646).GroupIcon };
  obj.icon = callback(pushScreen(5165).TableRow.Icon, obj);
  obj.onPress = function onPress() {
    return pushScreen(outer1_12.MEMBERS);
  };
  const items = [callback(pushScreen(5165).TableRow, obj, "members")];
  if (canManageRoles) {
    obj = {};
    const intl2 = pushScreen(1212).intl;
    obj.label = intl2.string(pushScreen(1212).t["LPJmL/"]);
    obj.arrow = true;
    const obj1 = { IconComponent: pushScreen(8466).ShieldUserIcon };
    obj.icon = callback(pushScreen(5165).TableRow.Icon, obj1);
    obj.onPress = function onPress() {
      return pushScreen(outer1_12.ROLES);
    };
    pushRow(callback(pushScreen(5165).TableRow, obj, "roles"), items);
  }
  if (canManageGuild) {
    const obj2 = {};
    const intl3 = pushScreen(1212).intl;
    obj2.label = intl3.string(pushScreen(1212).t.ngRFjZ);
    obj2.arrow = true;
    const obj3 = { IconComponent: pushScreen(4074).LinkIcon };
    obj2.icon = callback(pushScreen(5165).TableRow.Icon, obj3);
    obj2.onPress = function onPress() {
      return pushScreen(outer1_12.INSTANT_INVITES);
    };
    pushRow(callback(pushScreen(5165).TableRow, obj2, "invites"), items);
  }
  if (canManageBans) {
    const obj4 = {};
    const intl4 = pushScreen(1212).intl;
    obj4.label = intl4.string(pushScreen(1212).t.ZbeITS);
    obj4.arrow = true;
    const obj5 = { IconComponent: pushScreen(9066).HammerIcon };
    obj4.icon = callback(pushScreen(5165).TableRow.Icon, obj5);
    obj4.onPress = function onPress() {
      return pushScreen(outer1_12.BANS);
    };
    pushRow(callback(pushScreen(5165).TableRow, obj4, "bans"), items);
  }
  let tmp19 = null;
  if (0 !== items.length) {
    const obj6 = {};
    const intl5 = pushScreen(1212).intl;
    obj6.title = intl5.string(pushScreen(1212).t["+OecxG"]);
    obj6.hasIcons = true;
    obj6.children = items;
    tmp19 = callback(pushScreen(5501).TableRowGroup, obj6);
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
  const updateErrors = guild.updateErrors;
  let obj = guild(3834);
  const token = obj.useToken(updateErrors(689).modules.mobile.TABLE_ROW_PADDING);
  const tmp2 = callback2();
  let obj1 = guild(1456);
  const navigation = obj1.useNavigation();
  let obj2 = guild(566);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    const channels = outer1_5.getChannels(id);
    let tmp5;
    if (null != channels) {
      tmp5 = channels[outer1_13.GUILD_CATEGORY];
    }
    return tmp5;
  });
  let obj3 = guild(566);
  let items1 = [closure_7];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => outer1_7.getGuildPermissionProps(guild));
  const effect = React.useEffect(() => {
    outer1_19(outer1_12.LANDING);
  }, []);
  const items2 = [navigation];
  const callback = React.useCallback((arg0) => {
    const items = [...arguments];
    const first = items[0];
    updateErrors(outer1_3[35]).setSection(first);
    const items1 = [...items];
    navigation.push.apply(items1);
    outer1_19(first, outer1_12.LANDING);
  }, items2);
  const canManageGuild = stateFromStoresObject.canManageGuild;
  ({ isGuildAdmin, canManageRoles, canManageBans, canManageGuildExpressions, canManageChannels, canViewAuditLog, canManageWebhooks } = stateFromStoresObject);
  let obj4 = guild(16261);
  let obj5 = guild(5641);
  let canManageGuildRoleSubscriptions = obj5.useCanManageGuildRoleSubscriptions(guild);
  let result = canManageGuild;
  if (canManageGuild) {
    let obj6 = guild(5648);
    result = obj6.isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
  }
  const items3 = [updateErrors.message];
  const layoutEffect = React.useLayoutEffect(() => {
    if (null != updateErrors.message) {
      guild(outer1_3[39]).presentError(updateErrors.message);
      const obj = guild(outer1_3[39]);
    }
  }, items3);
  obj = {};
  obj = { style: tmp2.container, contentContainerStyle: items4 };
  items4 = [tmp2.containerContent, guild.contentContainerStyle];
  obj1 = { style: { paddingHorizontal: token }, spacing: updateErrors(689).space.PX_24 };
  obj2 = { iconProps: obj3, text: guild.name, textAccessibilityRole: "header" };
  obj3 = {
    onUpload(base64) {
      updateErrors(outer1_3[35]).updateIcon(guild.id, base64);
    },
    type: "guild",
    icon: guild.icon,
    name: guild.name,
    makeURL(icon) {
      let guildIconURL = icon;
      if (icon) {
        let obj = updateErrors(outer1_3[43]);
        obj = { id: guild.id, icon, canAnimate: true, size: 64 };
        guildIconURL = obj.getGuildIconURL(obj);
      }
      return guildIconURL;
    },
    disabled: !stateFromStoresObject.canManageGuild
  };
  const items5 = [callback(updateErrors(15582), obj2), , , , ];
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
    canManageGuildRoleSubscriptions = callback(updateErrors(16262), obj6);
  }
  items5[3] = canManageGuildRoleSubscriptions;
  items5[4] = callback(UserManagementSection, { canManageGuild, canManageRoles, canManageBans, pushScreen: callback });
  obj1.children = items5;
  obj.children = closure_16(guild(4541).Stack, obj1);
  const items6 = [callback(guild(7636).Form, obj), callback(guild(5448).NavScrim, {})];
  obj.children = items6;
  return closure_16(closure_17, obj);
}
({ GuildFeatures: closure_11, GuildSettingsSections: closure_12, ChannelTypes: closure_13, AnalyticEvents: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let closure_18 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 }, containerContent: { paddingTop: 16 } });
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalLanding.tsx");

export default function GuildSettingsModalLanding(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(guildId));
  guildId(566);
  [][0] = closure_10;
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, contentContainerStyle: guildId.contentContainerStyle, updateErrors: tmp3 };
    tmp4 = callback(GuildSettingsModalLandingInner, obj);
  }
  return tmp4;
};
