// Module ID: 16643
// Function ID: 16644
// Name: EasyChannelPermissionSettings
// Dependencies: [32, 5, 19, 17, 16644, 2045, 2108, 2102, 2067, 4469, 4479, 1372, 7849, 1074, 21, 4836, 576, 1485, 11105, 504, 9016, 9017, 9018, 1115, 4989, 5203, 9032, 4474, 5279, 5999, 6621, 1177, 5917, 10774, 11103, 5942, 5016, 9083, 9084, 16645, 16647, 2]
// Exports: default

// Module 16643 (EasyChannelPermissionSettings)
import nativeDefault from "native" /* 576 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 7849 */;
import ChannelPermissionsUtilsAll from "ChannelPermissionsUtils" /* 9016 */;
import ChannelSettingsPermissionsActionCreators from "ChannelSettingsPermissionsActionCreators" /* 9017 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9032 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11103 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelSettingsPermissionsStore from "ChannelSettingsPermissionsStore" /* 16644 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let accessPermissions, body, c2, c3, navigation;

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function ChannelPermissionSettingsBasicView(channel) {
  let HelpMessage;
  let HelpMessage2;
  let TableRow;
  let TableSwitchRow;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items3;
  let obj10;
  let obj12;
  let obj14;
  let obj16;
  let obj18;
  channel = channel.channel;
  const privateToggleState = channel.privateToggleState;
  const setPrivateToggleState = channel.setPrivateToggleState;
  navigation = undefined;
  let c9;
  function togglePrivateChannel() {
    return obj(...arguments);
  }
  let obj = function _togglePrivateChannel() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let currentUser;
      let v2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp4;
              accessPermissions = accessPermissions.accessPermissions;
              const obj9 = c2(c3[20]);
              const result = obj9.isPrivateGuildChannel(accessPermissions);
              const obj10 = c2(c3[20]);
              tmp = obj10.flipEveryonePermission(accessPermissions, accessPermissions, result);
              currentUser = currentUser.getCurrentUser();
              let tmp6 = closure_2_9;
              const canResult = closure_1_14.can(constants.ADMINISTRATOR, guild);
              const tmp19 = c2;
              if (!closure_2_9) {
                tmp6 = null == currentUser;
              }
              if (!tmp6) {
                tmp6 = canResult;
              }
              if (!tmp6) {
                c2 = 1;
                const tmp19Result = tmp19(c3[20]);
                c3 = 1;
                const obj4 = { value: tmp19Result.grantUserChannelAccess(accessPermissions, accessPermissions), done: false };
                return obj4;
              }
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
          const items = [tmp];
          c2 = 2;
          const obj5 = tmp(c3[21]);
          c3 = 1;
          const obj7 = { value: obj5.savePermissionUpdates(closure_129_0.id, items), done: false };
          return obj7;
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _onPrivateChannelSwitchChange() {
    let guild_id;
    obj = _asyncToGenerator(async (arg0, value) => {
      let intl3;
      let intl4;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let title;
          let channelName;
          let stringResult;
          let formatResult;
          c3 = 2;
          if (0 === body) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              title = undefined;
              channelName = undefined;
              body = undefined;
              if (null != guild_id.guild_id) {
                const tmp5 = privateToggleState;
                if (!tmp5) {
                  body = 1;
                  const obj2 = title(c3[22]);
                  c3 = 1;
                  const obj6 = { value: obj2.checkChattableChannelThresholdMetAfterChannelPermissionDeny(guild_id, constants.VIEW_CHANNEL), done: false };
                  return obj6;
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else if (!value) {
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
          const intl = title(c3[23]).intl;
          const string = intl.string;
          const t = title(c3[23]).t;
          if (closure_129_1) {
            stringResult = string(t.vw48TT);
          } else {
            stringResult = string(t["47gQYL"]);
          }
          title = stringResult;
          const obj4 = title(c3[24]);
          channelName = obj4.computeChannelName(closure_129_0, closure_1_16, closure_1_15);
          const intl2 = title(c3[23]).intl;
          const format = intl2.format;
          const t2 = title(c3[23]).t;
          if (closure_129_1) {
            const obj7 = { channelName };
            formatResult = format(t2.hGzPnx, obj7);
          } else {
            const obj8 = { channelName };
            formatResult = format(t2.rKzX1E, obj8);
          }
          body = formatResult;
          closure_129_2(!closure_129_1);
          const obj9 = {
            title,
            body,
            cancelText: intl3.string(title(c3[23]).t["ETE/oC"]),
            confirmText: intl4.string(title(c3[23]).t.p89ACt),
            onConfirm: closure_129_6,
            hideActionSheet: false,
            onCancel() {
                  obj = c2(c3[20]);
                  body(obj.isPrivateGuildChannel(title));
                },
            isDismissable: false
          };
          const show = channelName(c3[25]).show;
          const tmp41 = channelName(c3[25]);
          intl3 = title(c3[23]).intl;
          intl4 = title(c3[23]).intl;
          show(obj9);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp54) {
          c3 = 3;
          throw tmp54;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_26();
  const tmp2 = channel;
  const tmp3 = navigation;
  obj = channel(navigation[17]);
  navigation = obj.useNavigation();
  let obj2 = channel(navigation[18]);
  const appChannelBotUserId = obj2.useAppChannelBotUserId(channel);
  let obj3 = channel(navigation[19]);
  let items = [GuildStore, GuildRoleStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    let sortedRoles;
    guild = GuildStore.getGuild(channel.getGuildId());
    obj = { guild, sortedGuildRoles: sortedRoles };
    sortedRoles = undefined;
    if (null != guild) {
      sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
    }
    return obj;
  });
  let guild = stateFromStoresObject.guild;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  const items1 = [navigation];
  const layoutEffect = togglePrivateChannel.useLayoutEffect(() => {
    navigation.setOptions({ headerRight: "Path" });
  }, items1);
  const items2 = [guild, sortedGuildRoles, channel];
  const memo = togglePrivateChannel.useMemo(() => {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        obj = ChannelPermissionsUtilsAll;
        const existingRolesRows = obj.getExistingRolesRows(tmp, tmp2, channel, channel.accessPermissions);
      }
      return [];
    }
  }, items2);
  if (null != guild) {
    if (null != sortedGuildRoles) {
      let stringResult;
      let string2Result;
      let id;
      const getMemberIds = GuildMemberStore.getMemberIds;
      const isCategoryResult = channel.isCategory();
      if (guild != null) {
        id = guild.id;
      }
      const memberIds = getMemberIds(id);
      let obj4 = setPrivateToggleState(tmp3[20]);
      let obj5 = { appChannelBotUserId };
      const tmp15 = obj5;
      const existingMembersRows = obj4.getExistingMembersRows(memberIds, channel, guild, channel.accessPermissions, obj5);
      let obj6 = setPrivateToggleState(tmp3[20]);
      let result = obj6.isPrivateGuildChannel(channel);
      c9 = result;
      let obj7 = setPrivateToggleState(tmp3[27]);
      const canEveryoneRoleResult = obj7.canEveryoneRole(constants2.VIEW_CHANNEL, guild);
      let obj8 = setPrivateToggleState(tmp3[27]);
      const canEveryoneRoleResult1 = obj8.canEveryoneRole(constants2.ADMINISTRATOR, guild);
      const type = channel.type;
      let string = tmp2(tmp3[23]).intl.string;
      if (type === constants.GUILD_CATEGORY) {
        let intl2 = tmp2(tmp3[23]).intl;
        stringResult = intl2.string(tmp2(tmp3[23]).t.RQUk61);
      } else {
        stringResult = tmp20;
        if (type === tmp21.GUILD_VOICE) {
          let intl = tmp2(tmp3[23]).intl;
          stringResult = intl.string(tmp2(tmp3[23]).t.cLjvKg);
        }
      }
      let obj9 = { style: obj10, spacing: privateToggleState(tmp3[16]).space.PX_16, children: items3 };
      obj10 = { paddingHorizontal: privateToggleState(tmp3[16]).space.PX_16 };
      const Stack = tmp2(tmp3[28]).Stack;
      const obj11 = { title: stringResult, hasIcons: false, children: closure_23(TableSwitchRow, obj12) };
      const TableRowGroup = tmp2(tmp3[29]).TableRowGroup;
      TableSwitchRow = tmp2(tmp3[30]).TableSwitchRow;
      let intl3 = tmp2(tmp3[23]).intl;
      const string2 = intl3.string;
      let t = tmp2(tmp3[23]).t;
      const tmp23 = closure_24;
      if (isCategoryResult) {
        string2Result = string2(t.lEPAZ5);
      } else {
        string2Result = string2(t.aUI70g);
      }
      obj12 = {
        label: string2Result,
        value: privateToggleState,
        onValueChange: function onPrivateChannelSwitchChange() {
              return obj(...arguments);
            }
      };
      items3 = [tmp25(TableRowGroup, obj11), , , , , ];
      let tmp25Result = canEveryoneRoleResult1;
      if (tmp25Result) {
        const obj13 = { style: tmp.adminWarning, children: closure_23(HelpMessage, obj14) };
        obj14 = { messageType: tmp2(tmp3[31]).HelpMessageTypes.WARNING, children: intl4.string(tmp2(tmp3[23]).t["5f3HIC"]) };
        HelpMessage = tmp2(tmp3[31]).HelpMessage;
        intl4 = tmp2(tmp3[23]).intl;
        tmp25Result = tmp25(obj, obj13);
      }
      items3[1] = tmp25Result;
      let tmp25Result2 = !canEveryoneRoleResult1 && !canEveryoneRoleResult && !result;
      if (tmp25Result2) {
        const obj15 = { style: tmp.adminWarning, children: closure_23(HelpMessage2, obj16) };
        obj16 = { messageType: tmp2(tmp3[31]).HelpMessageTypes.WARNING, children: intl5.string(tmp2(tmp3[23]).t.ZAk4Q9) };
        HelpMessage2 = tmp2(tmp3[31]).HelpMessage;
        intl5 = tmp2(tmp3[23]).intl;
        tmp25Result2 = tmp25(obj, obj15);
      }
      items3[2] = tmp25Result2;
      const obj17 = { hasIcons: true, children: closure_23(TableRow, obj18) };
      const TableRowGroup2 = tmp2(tmp3[29]).TableRowGroup;
      obj18 = {
        arrow: true,
        icon: closure_23(tmp2(tmp3[33]).CirclePlusIcon, {}),
        label: intl6.string(tmp2(tmp3[23]).t.dMJ3Y6),
        onPress() {
              if (null != channel) {
                obj = channel_permissions_ChannelPermissionsUtils;
                const result = obj.openAddMembersActionSheet(tmp);
              }
            }
      };
      TableRow = tmp2(tmp3[32]).TableRow;
      intl6 = tmp2(tmp3[23]).intl;
      items3[3] = closure_23(TableRowGroup2, obj17);
      const obj19 = {
        title: intl7.string(tmp2(tmp3[23]).t.ES4CC6),
        hasIcons: true,
        children: memo.map((item) => {
              obj = { item, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id };
              return closure_23(ChannelOverwritesItemDefault, obj, item.id);
            })
      };
      const TableRowGroup3 = tmp2(tmp3[29]).TableRowGroup;
      intl7 = tmp2(tmp3[23]).intl;
      items3[4] = closure_23(TableRowGroup3, obj19);
      const obj20 = {
        hasIcons: true,
        children: existingMembersRows.map((item) => {
              obj = { item, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id };
              return closure_23(ChannelOverwritesItemDefault, obj, item.id);
            })
      };
      const TableRowGroup4 = tmp2(tmp3[29]).TableRowGroup;
      items3[5] = closure_23(TableRowGroup4, obj20);
      return tmp23(Stack, obj9);
    }
  }
  return null;
}
function onBack() {
  const obj = AlertActionCreatorsDefault;
  obj.close();
  return false;
}
let _slicedToArray = _slicedToArray_mod;
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
const SettingMode = ChannelPermissionsConstants.SettingMode;
({ ChannelTypes: closure_18, Permissions: closure_19, AnalyticEvents: closure_20, ChannelSettingsSections: closure_21, SettingsPaneTypes: closure_22 } = Constants);
({ jsx: closure_23, jsxs: closure_24 } = Fragment);
let closure_25 = { BASIC: 0, [0]: "BASIC", ADVANCED: 1, [1]: "ADVANCED", MODERATORS: 2, [2]: "MODERATORS" };
let createStyles = createStyles_mod;
let obj = { container: obj2, content: { marginTop: 16, flex: 1 }, adminWarning: obj3 };
obj2 = { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_12 };
let closure_26 = createStyles(obj);
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx");

export default function EasyChannelPermissionSettings(arg0) {
  let BASIC;
  let advancedMode;
  let closure_4;
  let defaultIndex;
  let items6;
  let obj10;
  let obj9;
  let origin;
  let tmp23Result;
  let tmp8;
  ({ channelId: require, origin } = arg0);
  defaultIndex = undefined;
  _slicedToArray = undefined;
  let closure_5;
  let tmp = require;
  const tmp2 = defaultIndex;
  let obj = require("useNavigatorBackPressHandler");
  obj.useNavigatorBackPressHandler(onBack);
  const tmp4 = closure_26();
  let obj2 = require("get initialized");
  const items = [ChannelStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [ChannelSettingsPermissionsStore];
  let isGuildStageVoiceResult;
  const obj4 = require("get initialized");
  const stateFromStores1 = obj4.useStateFromStores(items1, () => advancedMode.advancedMode);
  const useState = react.useState;
  if (stateFromStores != null) {
    isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
  }
  if (isGuildStageVoiceResult) {
    BASIC = tmp7.MODERATORS;
    tmp8 = tmp7;
  } else if (stateFromStores1) {
    BASIC = tmp7.ADVANCED;
    tmp8 = tmp7;
  } else {
    BASIC = tmp7.BASIC;
    tmp8 = tmp7;
  }
  [defaultIndex, _slicedToArray] = useState(BASIC);
  const useState2 = obj5.useState;
  const obj6 = stateFromStores(tmp2[20]);
  const tmp11 = _slicedToArray(useState2(obj6.isPrivateGuildChannel(stateFromStores)), 2);
  closure_5 = tmp13;
  const items2 = [origin];
  const first1 = tmp11[0];
  const effect = obj5.useEffect(() => {
    const OVERVIEW = constants2.OVERVIEW;
    let CHANNEL_SETTINGS = null;
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const SETTINGS_PANE_VIEWED = constants.SETTINGS_PANE_VIEWED;
    AppAnalyticsUtilsDefault;
    const tmp = constants2;
    if (origin === OVERVIEW) {
      CHANNEL_SETTINGS = constants3.CHANNEL_SETTINGS;
    }
    const obj = { settings_type: "channel", origin_pane: CHANNEL_SETTINGS, destination_pane: tmp.PERMISSIONS };
    trackWithMetadata(SETTINGS_PANE_VIEWED, obj);
  }, items2);
  const items3 = [stateFromStores];
  const callback = obj5.useCallback((arg0) => {
    if (arg0 === constants.ADVANCED) {
      const obj3 = ChannelSettingsPermissionsActionCreators;
      obj3.setAdvancedMode(true);
    } else {
      const obj = ChannelPermissionsUtilsAll;
      closure_5(obj.isPrivateGuildChannel(stateFromStores));
      const obj2 = ChannelSettingsPermissionsActionCreators;
      obj2.setAdvancedMode(false);
    }
    closure_4(arg0);
  }, items3);
  const intl = tmp(tmp2[23]).intl;
  const items4 = [intl.string(tmp(tmp2[23]).t["Mw/UDN"]), ];
  const intl2 = tmp(tmp2[23]).intl;
  items4[1] = intl2.string(tmp(tmp2[23]).t["0a6awf"]);
  let isGuildStageVoiceResult1;
  if (stateFromStores != null) {
    isGuildStageVoiceResult1 = stateFromStores.isGuildStageVoice();
  }
  if (true === isGuildStageVoiceResult1) {
    const push = items4.push;
    const intl3 = tmp(tmp2[23]).intl;
    push(intl3.string(tmp(tmp2[23]).t.YIIUJ3));
  }
  const tmpResult = tmp(tmp2[37]);
  let obj3 = { pageWidth: 0, defaultIndex, onSetActiveIndex: callback, items: items4.map((id) => ({ id, label: id, page: null })) };
  const items5 = [stateFromStores, defaultIndex];
  const segmentedControlState = tmpResult.useSegmentedControlState(obj3);
  const effect1 = obj5.useEffect(() => {
    let ADVANCED;
    let obj2;
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const CHANNEL_PERMISSIONS_PAGE_VIEWED = constants.CHANNEL_PERMISSIONS_PAGE_VIEWED;
    AppAnalyticsUtilsDefault;
    if (first === constants.BASIC) {
      ADVANCED = SettingMode.BASIC;
    } else {
      ADVANCED = SettingMode.ADVANCED;
    }
    const obj = { mode: ADVANCED, channel_is_private: obj2.isPrivateGuildChannel(stateFromStores) };
    obj2 = ChannelPermissionsUtilsAll;
    trackWithMetadata(CHANNEL_PERMISSIONS_PAGE_VIEWED, obj);
  }, items5);
  let tmp21Result = null;
  if (null != stateFromStores) {
    const obj7 = { style: tmp4.container, children: items6 };
    const obj8 = { style: obj9, children: closure_23(tmp(tmp2[38]).SegmentedControl, obj10) };
    obj10 = { state: segmentedControlState };
    obj9 = { paddingHorizontal: origin(tmp2[16]).space.PX_12 };
    items6 = [closure_23(closure_7, obj8), ];
    const obj11 = { style: tmp4.content, children: tmp23Result };
    const tmp21 = closure_24;
    const tmp22 = closure_7;
    const tmp25 = closure_8;
    if (defaultIndex === tmp8.BASIC) {
      const obj12 = { channel: stateFromStores, privateToggleState: first1, setPrivateToggleState: tmp11[1] };
      tmp23Result = tmp23(ChannelPermissionSettingsBasicView, obj12);
    } else if (defaultIndex === tmp8.MODERATORS) {
      const obj13 = { channel: stateFromStores };
      tmp23Result = tmp23(tmp24(tmp2[39]), obj13);
    } else {
      const obj14 = { channelId: stateFromStores.id };
      tmp23Result = tmp23(tmp24(tmp2[40]), obj14);
    }
    items6[1] = closure_23(tmp25, obj11);
    tmp21Result = tmp21(tmp22, obj7);
  }
  return tmp21Result;
};
