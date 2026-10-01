// Module ID: 17288
// Function ID: 17289
// Name: GuildSettingsModalLanding
// Dependencies: [19, 4467, 2067, 4469, 1372, 15775, 9049, 1074, 21, 5016, 4836, 5917, 1115, 4787, 4474, 17289, 14490, 9051, 8327, 17291, 4775, 12792, 5999, 8219, 9573, 11240, 5403, 9033, 17292, 8738, 5850, 8736, 15147, 9845, 4531, 576, 1485, 504, 9048, 17294, 6678, 6685, 4527, 8053, 5279, 16673, 1397, 17295, 6461, 2]
// Exports: default

// Module 17288 (GuildSettingsModalLanding)
import intl8 from "intl" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import ClipboardListIcon from "ClipboardListIcon" /* 5850 */;
import TableRow7 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import HammerIcon from "HammerIcon" /* 8736 */;
import RobotIcon from "RobotIcon" /* 8738 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9033 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import AssetRegistryDefault from "AssetRegistry" /* 12792 */;
import ModerationIcon from "ModerationIcon" /* 17292 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 15775 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let navigation;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let unpackModuleId;
function SettingsSection(guild) {
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let Icon5;
  let Icon6;
  let canManageChannels;
  let canManageGuild;
  let canManageWebhooks;
  let canUnlinkChannelLobbies;
  let categories;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let isGuildAdmin;
  let obj11;
  let obj13;
  let obj2;
  let obj5;
  let obj7;
  let obj9;
  guild = guild.guild;
  ({ isGuildAdmin, canManageGuild, canManageChannels, pushScreen: importDefault } = guild);
  ({ canManageWebhooks, canUnlinkChannelLobbies, categories } = guild);
  const obj = {
    label: intl.string(guild(1115).t["/dp6yY"]),
    arrow: true,
    icon: closure_15(Icon, obj2),
    onPress() {
      return importDefault(constants.OVERVIEW);
    }
  };
  const TableRow = guild(5917).TableRow;
  intl = guild(1115).intl;
  obj2 = { IconComponent: guild(4787).CircleInformationIcon };
  Icon = guild(5917).TableRow.Icon;
  const items = [closure_15(TableRow, obj, "overview")];
  const currentUser = UserStore.getCurrentUser();
  if (!canManageChannels) {
    let canManageACategoryResult = null != currentUser;
    if (canManageACategoryResult) {
      const obj3 = PermissionUtilsAll;
      canManageACategoryResult = obj3.canManageACategory(currentUser, guild, categories);
    }
    canManageChannels = canManageACategoryResult;
  }
  if (canManageChannels) {
    const obj4 = {
      label: intl2.string(guild(1115).t.OGiMXJ),
      arrow: true,
      icon: closure_15(Icon2, obj5),
      onPress() {
          guild = GuildSettingsModalChannelsStore.initGuild(guild.id);
          importDefault(constants.CHANNELS);
        }
    };
    const TableRow2 = tmp2(5917).TableRow;
    intl2 = tmp2(1115).intl;
    obj5 = { IconComponent: guild(17289).ChannelListIcon };
    Icon2 = tmp2(5917).TableRow.Icon;
    items.push(closure_15(TableRow2, obj4, "channels"));
  }
  const tmp9 = canManageGuild || canManageWebhooks || canUnlinkChannelLobbies;
  if (tmp9) {
    const obj6 = {
      label: intl3.string(guild(1115).t.CIsNZw),
      arrow: true,
      icon: closure_15(Icon3, obj7),
      onPress() {
          return importDefault(constants.INTEGRATIONS);
        }
    };
    const TableRow3 = tmp2(5917).TableRow;
    intl3 = tmp2(1115).intl;
    obj7 = { IconComponent: guild(14490).PuzzlePieceIcon };
    Icon3 = tmp2(5917).TableRow.Icon;
    items.push(closure_15(TableRow3, obj6, "integrations"));
  }
  const tmp2Result = guild(9051);
  if (tmp2Result.canUseMobileServerTagSettings(guild.id)) {
    const obj8 = {
      label: intl4.string(guild(1115).t["2QmKZ2"]),
      arrow: true,
      icon: closure_15(Icon4, obj9),
      onPress() {
          return importDefault(constants.TAG);
        }
    };
    const TableRow4 = tmp2(5917).TableRow;
    intl4 = tmp2(1115).intl;
    obj9 = { IconComponent: guild(8327).TagIcon };
    Icon4 = tmp2(5917).TableRow.Icon;
    items.push(closure_15(TableRow4, obj8, "server-tag"));
  }
  if (isGuildAdmin) {
    const tmp2Result2 = guild(17291);
    isGuildAdmin = tmp2Result2.canSeeVanityUrlSettings(guild);
  }
  if (isGuildAdmin) {
    const obj10 = {
      label: intl5.string(guild(1115).t["5XZKy/"]),
      arrow: true,
      icon: closure_15(Icon5, obj11),
      onPress() {
          return importDefault(constants.VANITY_URL);
        }
    };
    const TableRow5 = tmp2(5917).TableRow;
    intl5 = tmp2(1115).intl;
    obj11 = { IconComponent: guild(4775).LinkIcon };
    Icon5 = tmp2(5917).TableRow.Icon;
    items.push(closure_15(TableRow5, obj10, "vanity"));
  }
  if (canManageGuild) {
    const obj12 = {
      label: intl6.string(guild(1115).t.KUw7Ss),
      arrow: true,
      icon: closure_15(Icon6, obj13),
      onPress() {
          return importDefault(constants.GUILD_TEMPLATES);
        }
    };
    const TableRow6 = tmp2(5917).TableRow;
    intl6 = tmp2(1115).intl;
    obj13 = { source: AssetRegistryDefault };
    Icon6 = tmp2(5917).TableRow.Icon;
    items.push(closure_15(TableRow6, obj12, "guild-template"));
  }
  let tmpResult = null;
  if (0 !== items.length) {
    const obj14 = { title: intl7.string(guild(1115).t["3D5yo/"]), hasIcons: true, children: items };
    const TableRowGroup = tmp2(5999).TableRowGroup;
    intl7 = tmp2(1115).intl;
    tmpResult = tmp(TableRowGroup, obj14);
  }
  return tmpResult;
}
function ExpressionSection(pushScreen) {
  let Icon;
  let Icon2;
  let Icon3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj2;
  let obj4;
  let obj6;
  pushScreen = pushScreen.pushScreen;
  const items = [];
  const canConfigureOfficialMessages = pushScreen.canConfigureOfficialMessages;
  if (pushScreen.canManageGuildExpressions) {
    const obj = {
      label: intl.string(pushScreen(1115).t.sMOuuS),
      arrow: true,
      icon: closure_15(Icon, obj2),
      onPress() {
          return pushScreen(constants.EMOJI);
        }
    };
    const TableRow = pushScreen(5917).TableRow;
    intl = pushScreen(1115).intl;
    obj2 = { IconComponent: pushScreen(8219).ReactionIcon };
    Icon = pushScreen(5917).TableRow.Icon;
    items.push(closure_15(TableRow, obj, "emoji"));
    const obj3 = {
      label: intl2.string(pushScreen(1115).t.R5nQkS),
      arrow: true,
      icon: closure_15(Icon2, obj4),
      onPress() {
          return pushScreen(constants.STICKERS);
        }
    };
    const TableRow2 = pushScreen(5917).TableRow;
    intl2 = pushScreen(1115).intl;
    obj4 = { IconComponent: pushScreen(9573).StickerIcon };
    Icon2 = pushScreen(5917).TableRow.Icon;
    items.push(closure_15(TableRow2, obj3, "stickers"));
  }
  if (canConfigureOfficialMessages) {
    const obj5 = {
      label: intl3.string(pushScreen(1115).t.xHEzFh),
      arrow: true,
      icon: closure_15(Icon3, obj6),
      onPress() {
          return pushScreen(constants.OFFICIAL_MESSAGES);
        }
    };
    const TableRow3 = pushScreen(5917).TableRow;
    intl3 = pushScreen(1115).intl;
    obj6 = { IconComponent: pushScreen(11240).StampIcon };
    Icon3 = pushScreen(5917).TableRow.Icon;
    items.push(closure_15(TableRow3, obj5, "official-messages"));
  }
  let tmp10 = null;
  if (0 !== items.length) {
    const obj7 = { title: intl4.string(pushScreen(1115).t.m6lkGy), hasIcons: true, children: items };
    const TableRowGroup = pushScreen(5999).TableRowGroup;
    intl4 = pushScreen(1115).intl;
    tmp10 = closure_15(TableRowGroup, obj7);
  }
  return tmp10;
}
function PeopleSection(pushScreen) {
  let Icon;
  let Icon2;
  let Icon3;
  let canManageGuild;
  let canManageRoles;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj2;
  let obj4;
  let obj6;
  pushScreen = pushScreen.pushScreen;
  ({ canManageGuild, canManageRoles } = pushScreen);
  const obj = {
    label: intl.string(pushScreen(1115).t["9Oq93m"]),
    arrow: true,
    icon: closure_15(Icon, obj2),
    onPress() {
      return pushScreen(constants.MEMBERS);
    }
  };
  const TableRow = pushScreen(5917).TableRow;
  intl = pushScreen(1115).intl;
  obj2 = { IconComponent: pushScreen(5403).GroupIcon };
  Icon = pushScreen(5917).TableRow.Icon;
  const items = [closure_15(TableRow, obj, "members")];
  if (canManageRoles) {
    const obj3 = {
      label: intl2.string(pushScreen(1115).t["LPJmL/"]),
      arrow: true,
      icon: closure_15(Icon2, obj4),
      onPress() {
          return pushScreen(constants.ROLES);
        }
    };
    const TableRow2 = tmp2(5917).TableRow;
    intl2 = tmp2(1115).intl;
    obj4 = { IconComponent: pushScreen(9033).ShieldUserIcon };
    Icon2 = tmp2(5917).TableRow.Icon;
    items.push(closure_15(TableRow2, obj3, "roles"));
  }
  if (canManageGuild) {
    const obj5 = {
      label: intl3.string(pushScreen(1115).t.ngRFjZ),
      arrow: true,
      icon: closure_15(Icon3, obj6),
      onPress() {
          return pushScreen(constants.INSTANT_INVITES);
        }
    };
    const TableRow3 = tmp2(5917).TableRow;
    intl3 = tmp2(1115).intl;
    obj6 = { IconComponent: pushScreen(4775).LinkIcon };
    Icon3 = tmp2(5917).TableRow.Icon;
    items.push(closure_15(TableRow3, obj5, "invites"));
  }
  const obj7 = { title: intl4.string(pushScreen(1115).t.bMAKMK), hasIcons: true, children: items };
  const TableRowGroup = tmp2(5999).TableRowGroup;
  intl4 = tmp2(1115).intl;
  return closure_15(TableRowGroup, obj7);
}
function ModerationSection(arg0) {
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let Icon5;
  let canManageBans;
  let canManageGuild;
  let canViewAuditLog;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj10;
  let obj2;
  let obj4;
  let obj6;
  let obj8;
  ({ canManageGuild, pushScreen: require } = arg0);
  const items = [];
  ({ canViewAuditLog, canManageBans } = arg0);
  if (canManageGuild) {
    const obj = {
      label: intl.string(intl8.t["5tbTdV"]),
      arrow: true,
      icon: closure_15(Icon, obj2),
      onPress() {
          return require(constants.MODERATION);
        }
    };
    const TableRow = TableRow7.TableRow;
    intl = intl8.intl;
    obj2 = { IconComponent: ModerationIcon.ModerationIcon };
    Icon = TableRow7.TableRow.Icon;
    items.push(closure_15(TableRow, obj, "moderation"));
    const obj3 = {
      label: intl2.string(intl8.t.uRelgx),
      arrow: true,
      icon: closure_15(Icon2, obj4),
      onPress() {
          return require(constants.GUILD_AUTOMOD);
        }
    };
    const TableRow2 = TableRow7.TableRow;
    intl2 = intl8.intl;
    obj4 = { IconComponent: RobotIcon.RobotIcon };
    Icon2 = TableRow7.TableRow.Icon;
    items.push(closure_15(TableRow2, obj3, "automod"));
  }
  if (canViewAuditLog) {
    const obj5 = {
      label: intl3.string(intl8.t.SPWLyT),
      arrow: true,
      icon: closure_15(Icon3, obj6),
      onPress() {
          return require(constants.AUDIT_LOG);
        }
    };
    const TableRow3 = TableRow7.TableRow;
    intl3 = intl8.intl;
    obj6 = { IconComponent: ClipboardListIcon.ClipboardListIcon };
    Icon3 = TableRow7.TableRow.Icon;
    items.push(closure_15(TableRow3, obj5, "auditlogs"));
  }
  if (canManageBans) {
    const obj7 = {
      label: intl4.string(intl8.t.ZbeITS),
      arrow: true,
      icon: closure_15(Icon4, obj8),
      onPress() {
          return require(constants.BANS);
        }
    };
    const TableRow4 = TableRow7.TableRow;
    intl4 = intl8.intl;
    obj8 = { IconComponent: HammerIcon.HammerIcon };
    Icon4 = TableRow7.TableRow.Icon;
    items.push(closure_15(TableRow4, obj7, "bans"));
  }
  if (canManageGuild) {
    const obj9 = {
      label: intl5.string(intl8.t.Am9YHi),
      arrow: true,
      icon: closure_15(Icon5, obj10),
      onPress() {
          return require(constants.SECURITY);
        }
    };
    const TableRow5 = TableRow7.TableRow;
    intl5 = intl8.intl;
    obj10 = { IconComponent: ShieldUserIcon.ShieldUserIcon };
    Icon5 = TableRow7.TableRow.Icon;
    items.push(closure_15(TableRow5, obj9, "security"));
  }
  let tmp18 = null;
  if (0 !== items.length) {
    const obj11 = { title: intl6.string(intl8.t["5tbTdV"]), hasIcons: true, children: items };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    intl6 = intl8.intl;
    tmp18 = closure_15(TableRowGroup, obj11);
  }
  return tmp18;
}
function CommunitySection(pushScreen) {
  let Icon3;
  let canManageGuild;
  let canViewGuildAnalytics;
  let intl2;
  let intl3;
  let obj5;
  pushScreen = pushScreen.pushScreen;
  const features = pushScreen.guild.features;
  ({ canManageGuild, canViewGuildAnalytics } = pushScreen);
  let hasItem = features.has(constants.COMMUNITY);
  const items = [];
  if (canManageGuild) {
    let tmp2Result;
    const TableRow = pushScreen(5917).TableRow;
    const obj = { label: null, arrow: true, icon: null, onPress: null };
    const intl = pushScreen(1115).intl;
    const string = intl.string;
    const t = pushScreen(1115).t;
    if (hasItem) {
      obj.label = string(t.nRtNqn);
      const obj2 = { IconComponent: pushScreen(15147).TreehouseIcon };
      const Icon2 = tmp3(5917).TableRow.Icon;
      obj.icon = closure_15(Icon2, obj2);
      obj.onPress = function onPress() {
        return pushScreen(constants.COMMUNITY, {});
      };
      tmp2Result = tmp2(TableRow, obj, "community-overview");
    } else {
      obj.label = string(t.ElKTeb);
      const obj3 = { IconComponent: pushScreen(15147).TreehouseIcon };
      const Icon = tmp3(5917).TableRow.Icon;
      obj.icon = closure_15(Icon, obj3);
      obj.onPress = function onPress() {
        return pushScreen(constants.COMMUNITY_INTRO, {});
      };
      tmp2Result = tmp2(TableRow, obj, "community-intro");
    }
    items.push(tmp2Result);
  }
  if (hasItem) {
    hasItem = canViewGuildAnalytics;
  }
  if (hasItem) {
    const obj4 = {
      label: intl2.string(pushScreen(1115).t["0wWfUG"]),
      arrow: true,
      icon: closure_15(Icon3, obj5),
      onPress() {
          return pushScreen(constants.ANALYTICS);
        }
    };
    const TableRow2 = pushScreen(5917).TableRow;
    intl2 = pushScreen(1115).intl;
    obj5 = { IconComponent: pushScreen(9845).AnalyticsIcon };
    Icon3 = pushScreen(5917).TableRow.Icon;
    items.push(closure_15(TableRow2, obj4, "analytics"));
  }
  let tmp11 = null;
  if (0 !== items.length) {
    const obj6 = { title: intl3.string(pushScreen(1115).t["1g9A/f"]), hasIcons: true, children: items };
    const TableRowGroup = pushScreen(5999).TableRowGroup;
    intl3 = pushScreen(1115).intl;
    tmp11 = closure_15(TableRowGroup, obj6);
  }
  return tmp11;
}
function GuildSettingsModalLandingInner(guild) {
  let Stack;
  let canManageBans;
  let canManageChannels;
  let canManageGuild;
  let canManageGuildExpressions;
  let canManageRoles;
  let canManageWebhooks;
  let canViewAuditLog;
  let canViewGuildAnalytics;
  let isGuildAdmin;
  let items4;
  let items5;
  let items6;
  let obj9;
  guild = guild.guild;
  const updateErrors = guild.updateErrors;
  const tmp = guild;
  const contentContainerStyle = guild.contentContainerStyle;
  let obj = guild(4531);
  const tmp3 = updateErrors;
  const token = obj.useToken(updateErrors(576).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_18();
  let obj2 = guild(1485);
  navigation = obj2.useNavigation();
  let obj3 = guild(504);
  let items = [GuildChannelStore];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let id;
    const getChannels = GuildChannelStore.getChannels;
    if (guild != null) {
      id = guild.id;
    }
    const channels = getChannels(id);
    let tmp4;
    if (channels != null) {
      tmp4 = channels[map1.GUILD_CATEGORY];
    }
    return tmp4;
  });
  let items1 = [PermissionStore];
  const obj4 = guild(504);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items1, () => PermissionStore.getGuildPermissionProps(guild));
  const effect = react.useEffect(() => {
    const LANDING = constants.LANDING;
    const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
    const obj = updateErrors(dependencyMap[9]);
    obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
  }, []);
  const items2 = [navigation];
  const callback = react.useCallback(() => {
    const items = [...arguments];
    const first = items[0];
    const state = navigation.getState();
    let name;
    if (state.routes[state.index] != null) {
      name = tmp5.name;
    }
    if (name !== first) {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.setSection(first);
      const navigate = tmp3.navigate;
      const items1 = [];
      HermesBuiltin.arraySpread(items1, items, 0);
      HermesBuiltin.apply(navigate, items1, navigation);
      const LANDING = constants.LANDING;
      const obj3 = { settings_type: "guild", origin_pane: LANDING, destination_pane: first };
      const obj2 = AppAnalyticsUtilsDefault;
      obj2.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj3);
    }
  }, items2);
  ({ canManageGuild, isGuildAdmin, canManageRoles, canManageBans, canManageGuildExpressions, canManageChannels, canViewAuditLog, canManageWebhooks, canViewGuildAnalytics } = stateFromStoresObject);
  const obj6 = guild(17294);
  const tmp11 = obj6.useChannelsAllowedToUnlink(guild.id).length > 0;
  const obj7 = guild(6678);
  const canManageGuildRoleSubscriptions = obj7.useCanManageGuildRoleSubscriptions(guild);
  let result = canManageGuild;
  const obj5 = react;
  if (result) {
    const tmpResult = tmp(6685);
    result = tmpResult.isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
  }
  const items3 = [updateErrors.message];
  const layoutEffect = obj5.useLayoutEffect(() => {
    if (null != updateErrors.message) {
      const obj = ToastUtils;
      obj.presentError(tmp.message);
    }
  }, items3);
  const obj8 = { style: tmp5.container, contentContainerStyle: items4, children: closure_16(Stack, obj9) };
  items4 = [tmp5.containerContent, contentContainerStyle];
  const Form = tmp(8053).Form;
  obj9 = { style: { paddingHorizontal: token }, spacing: tmp3(576).space.PX_24, children: items5 };
  Stack = tmp(5279).Stack;
  items5 = [, , , , , , ];
  const obj10 = {
    iconProps: {
      onUpload(base64) {
        const obj = GuildSettingsActionCreatorsDefault;
        obj.updateIcon(guild.id, base64);
      },
      type: "guild",
      icon: guild.icon,
      name: guild.name,
      makeURL(icon) {
        let guildIconURL = icon;
        if (guildIconURL) {
          const obj2 = { id: guild.id, icon, canAnimate: true, size: 64 };
          const obj = AvatarUtilsDefault;
          guildIconURL = obj.getGuildIconURL(obj2);
        }
        return guildIconURL;
      },
      disabled: !stateFromStoresObject.canManageGuild
    },
    text: guild.name,
    textAccessibilityRole: "header"
  };
  items5[0] = closure_15(tmp3(16673), obj10);
  items5[1] = closure_15(SettingsSection, { guild, categories: stateFromStores, isGuildAdmin, canManageGuild, canManageChannels, canUnlinkChannelLobbies: tmp11, canManageWebhooks, pushScreen: callback });
  items5[2] = closure_15(ExpressionSection, { canManageGuildExpressions, canConfigureOfficialMessages: result, pushScreen: callback });
  items5[3] = closure_15(PeopleSection, { canManageGuild, canManageRoles, pushScreen: callback });
  items5[4] = closure_15(ModerationSection, { canManageGuild, canViewAuditLog, canManageBans, pushScreen: callback });
  items5[5] = closure_15(CommunitySection, { guild, canManageGuild, canViewGuildAnalytics, pushScreen: callback });
  let tmp17Result = canManageGuildRoleSubscriptions;
  const tmp16 = closure_17;
  if (tmp17Result) {
    const obj11 = { guild, pushScreen: callback };
    tmp17Result = tmp17(tmp3(17295), obj11);
  }
  const obj12 = { children: items6 };
  items5[6] = tmp17Result;
  items6 = [tmp17(Form, obj8), tmp17(tmp(6461).NavScrim, {})];
  return closure_16(tmp16, obj12);
}
({ GuildFeatures: unpackModuleId, GuildSettingsSections: closure_12, ChannelTypes: map1, AnalyticEvents: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles({ container: { flex: 1 }, containerContent: { paddingTop: 16 } });
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalLanding.tsx");

export default function GuildSettingsModalLanding(guildId) {
  let errors;
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  guildId(504);
  [][0] = GuildSettingsStore;
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = { guild: stateFromStores, contentContainerStyle, updateErrors: tmp3 };
    tmp4 = closure_15(GuildSettingsModalLandingInner, obj2);
  }
  return tmp4;
};
