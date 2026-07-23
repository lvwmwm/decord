// Module ID: 15507
// Function ID: 119465
// Name: ChannelPermissionSettingsBasicView
// Dependencies: [57, 5, 31, 27, 15508, 1348, 1917, 1910, 1838, 3758, 3767, 1849, 7485, 653, 33, 4130, 689, 1456, 566, 8413, 8414, 8415, 1212, 4320, 4470, 8421, 3763, 4541, 5503, 5504, 1273, 5165, 11254, 10878, 5093, 4324, 8360, 8760, 15509, 15511, 2]
// Exports: default

// Module 15507 (ChannelPermissionSettingsBasicView)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import TableRowInner from "TableRowInner";
import get_ActivityIndicator from "Stack";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_createForOfIteratorHelperLoose";
import closure_13 from "_createForOfIteratorHelperLoose";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import { SettingMode } from "RowType";
import ME from "ME";
import jsxProd from "openAddMembersActionSheet";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_7;
let closure_8;
const require = arg1;
function ChannelPermissionSettingsBasicView(channel) {
  channel = channel.channel;
  const privateToggleState = channel.privateToggleState;
  const setPrivateToggleState = channel.setPrivateToggleState;
  let guild;
  let React;
  function togglePrivateChannel() {
    return _togglePrivateChannel(...arguments);
  }
  function _togglePrivateChannel() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = sortedGuildRoles(tmp);
    return obj(...arguments);
  }
  function _onPrivateChannelSwitchChange() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = sortedGuildRoles(tmp);
    return obj(...arguments);
  }
  function renderRowItem(id) {
    return outer1_23(privateToggleState(navigation[25]), { item: id, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id }, id.id);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(navigation[17]);
  navigation = obj.useNavigation();
  let obj1 = channel(navigation[18]);
  const items = [closure_13, closure_12];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    const guild = outer1_13.getGuild(channel.getGuildId());
    const obj = { guild };
    let sortedRoles;
    if (null != guild) {
      sortedRoles = outer1_12.getSortedRoles(guild.id);
    }
    obj.sortedGuildRoles = sortedRoles;
    return obj;
  });
  guild = stateFromStoresObject.guild;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  const items1 = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({ headerRight: undefined });
  }, items1);
  const items2 = [guild, sortedGuildRoles, channel];
  const memo = React.useMemo(() => {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        const obj = setPrivateToggleState(navigation[19]);
        const existingRolesRows = obj.getExistingRolesRows(guild, sortedGuildRoles, channel, channel.accessPermissions);
      }
      return [];
    }
  }, items2);
  if (null != guild) {
    if (null != sortedGuildRoles) {
      let id;
      if (null != guild) {
        id = guild.id;
      }
      memberIds = memberIds.getMemberIds(id);
      let obj2 = setPrivateToggleState(navigation[19]);
      const existingMembersRows = obj2.getExistingMembersRows(memberIds, channel, guild, channel.accessPermissions);
      let obj3 = setPrivateToggleState(navigation[19]);
      let result = obj3.isPrivateGuildChannel(channel);
      React = result;
      let obj4 = setPrivateToggleState(navigation[26]);
      const isCategoryResult = channel.isCategory();
      let obj5 = setPrivateToggleState(navigation[26]);
      const canEveryoneRoleResult1 = obj5.canEveryoneRole(constants2.ADMINISTRATOR, guild);
      const type = channel.type;
      const string = channel(navigation[22]).intl.string;
      if (type === constants.GUILD_CATEGORY) {
        const intl2 = channel(navigation[22]).intl;
        let stringResult = intl2.string(channel(navigation[22]).t.RQUk61);
      } else {
        stringResult = tmp19;
        if (type === constants.GUILD_VOICE) {
          const intl = channel(navigation[22]).intl;
          stringResult = intl.string(channel(navigation[22]).t.cLjvKg);
        }
      }
      obj = {};
      obj = { paddingHorizontal: privateToggleState(navigation[16]).space.PX_16 };
      obj.style = obj;
      obj.spacing = privateToggleState(navigation[16]).space.PX_16;
      obj1 = { title: stringResult, hasIcons: false };
      obj2 = {};
      const intl3 = channel(navigation[22]).intl;
      const string2 = intl3.string;
      const t = channel(navigation[22]).t;
      if (isCategoryResult) {
        let string2Result = string2(t.lEPAZ5);
      } else {
        string2Result = string2(t.aUI70g);
      }
      obj2.label = string2Result;
      obj2.value = privateToggleState;
      obj2.onValueChange = function onPrivateChannelSwitchChange() {
        return _onPrivateChannelSwitchChange(...arguments);
      };
      obj1.children = callback2(channel(navigation[29]).TableSwitchRow, obj2);
      const items3 = [callback2(channel(navigation[28]).TableRowGroup, obj1), , , , , ];
      let tmp36 = canEveryoneRoleResult1;
      if (canEveryoneRoleResult1) {
        obj3 = { style: tmp.adminWarning };
        obj4 = { messageType: channel(navigation[30]).HelpMessageTypes.WARNING };
        const intl4 = channel(navigation[22]).intl;
        obj4.children = intl4.string(channel(navigation[22]).t["5f3HIC"]);
        obj3.children = callback2(channel(navigation[30]).HelpMessage, obj4);
        tmp36 = callback2(togglePrivateChannel, obj3);
      }
      items3[1] = tmp36;
      let tmp42 = !canEveryoneRoleResult1 && !obj4.canEveryoneRole(constants2.VIEW_CHANNEL, guild) && !result;
      if (tmp42) {
        obj5 = { style: tmp.adminWarning };
        const obj6 = { messageType: channel(navigation[30]).HelpMessageTypes.WARNING };
        const intl5 = channel(navigation[22]).intl;
        obj6.children = intl5.string(channel(navigation[22]).t.ZAk4Q9);
        obj5.children = callback2(channel(navigation[30]).HelpMessage, obj6);
        tmp42 = callback2(togglePrivateChannel, obj5);
      }
      items3[2] = tmp42;
      const obj7 = { hasIcons: true };
      const obj8 = { arrow: true, icon: callback2(channel(navigation[32]).CirclePlusIcon, {}) };
      const intl6 = channel(navigation[22]).intl;
      obj8.label = intl6.string(channel(navigation[22]).t.dMJ3Y6);
      obj8.onPress = function onPress() {
        if (null != channel) {
          const result = channel(navigation[33]).openAddMembersActionSheet(channel);
          const obj = channel(navigation[33]);
        }
      };
      obj7.children = callback2(channel(navigation[31]).TableRow, obj8);
      items3[3] = callback2(channel(navigation[28]).TableRowGroup, obj7);
      const obj9 = {};
      const intl7 = channel(navigation[22]).intl;
      obj9.title = intl7.string(channel(navigation[22]).t.ES4CC6);
      obj9.hasIcons = true;
      obj9.children = memo.map((arg0) => renderRowItem(arg0));
      items3[4] = callback2(channel(navigation[28]).TableRowGroup, obj9);
      const obj10 = { hasIcons: true, children: existingMembersRows.map((arg0) => renderRowItem(arg0)) };
      items3[5] = callback2(channel(navigation[28]).TableRowGroup, obj10);
      obj.children = items3;
      return closure_24(channel(navigation[27]).Stack, obj);
    }
  }
  return null;
}
function onBack() {
  importDefault(4470).close();
  return false;
}
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ ChannelTypes: closure_18, Permissions: closure_19, AnalyticEvents: closure_20, ChannelSettingsSections: closure_21, SettingsPaneTypes: closure_22 } = ME);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
let closure_25 = { BASIC: 0, [0]: "BASIC", ADVANCED: 1, [1]: "ADVANCED", MODERATORS: 2, [2]: "MODERATORS" };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, paddingTop: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { marginTop: 16, flex: 1 };
_createForOfIteratorHelperLoose.adminWarning = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
let result = require("result").fileFinishedImporting("modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx");

export default function EasyChannelPermissionSettings(arg0) {
  let origin;
  let require;
  ({ channelId: require, origin } = arg0);
  let first;
  let callback;
  let c5;
  let obj = require(first[34]);
  obj.useNavigatorBackPressHandler(onBack);
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj1 = require(first[18]);
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_10.getChannel(closure_0));
  let obj3 = require(first[18]);
  const items1 = [closure_9];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => outer1_9.advancedMode);
  if (null != stateFromStores) {
    if (stateFromStores.isGuildStageVoice()) {
      let MODERATORS = constants3.MODERATORS;
    }
    const tmp9 = callback(tmp5(MODERATORS), 2);
    first = tmp9[0];
    callback = tmp9[1];
    let obj4 = stateFromStores(first[19]);
    const tmp14 = callback(React.useState(obj4.isPrivateGuildChannel(stateFromStores)), 2);
    c5 = tmp15;
    const items2 = [origin];
    const effect = React.useEffect(() => {
      let obj = origin(first[35]);
      obj = { settings_type: "channel" };
      let CHANNEL_SETTINGS = null;
      if (origin === outer1_21.OVERVIEW) {
        CHANNEL_SETTINGS = outer1_22.CHANNEL_SETTINGS;
      }
      obj.origin_pane = CHANNEL_SETTINGS;
      obj.destination_pane = outer1_21.PERMISSIONS;
      obj.trackWithMetadata(outer1_20.SETTINGS_PANE_VIEWED, obj);
    }, items2);
    const items3 = [stateFromStores];
    callback = React.useCallback((arg0) => {
      if (arg0 === outer1_25.ADVANCED) {
        outer1_0(first[20]).setAdvancedMode(true);
        const obj3 = outer1_0(first[20]);
      } else {
        _undefined(stateFromStores(first[19]).isPrivateGuildChannel(stateFromStores));
        const obj = stateFromStores(first[19]);
        outer1_0(first[20]).setAdvancedMode(false);
        const obj2 = outer1_0(first[20]);
      }
      callback(arg0);
    }, items3);
    const intl = require(first[22]).intl;
    const items4 = [intl.string(require(first[22]).t["Mw/UDN"]), ];
    const intl2 = require(first[22]).intl;
    items4[1] = intl2.string(require(first[22]).t["0a6awf"]);
    let isGuildStageVoiceResult;
    if (null != stateFromStores) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    if (true === isGuildStageVoiceResult) {
      const intl3 = require(first[22]).intl;
      items4.push(intl3.string(require(first[22]).t.YIIUJ3));
    }
    let obj5 = require(first[36]);
    obj = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: callback, items: items4.map((id) => ({ id, label: id, page: null })) };
    const items5 = [stateFromStores, first];
    const segmentedControlState = obj5.useSegmentedControlState(obj);
    const effect1 = React.useEffect(() => {
      let obj = origin(first[35]);
      obj = {};
      if (first === outer1_25.BASIC) {
        let ADVANCED = outer1_17.BASIC;
      } else {
        ADVANCED = outer1_17.ADVANCED;
      }
      obj.mode = ADVANCED;
      obj.channel_is_private = stateFromStores(first[19]).isPrivateGuildChannel(stateFromStores);
      obj.trackWithMetadata(outer1_20.CHANNEL_PERMISSIONS_PAGE_VIEWED, obj);
    }, items5);
    if (null == stateFromStores) {
      return null;
    } else {
      obj = { style: tmp2.container };
      obj1 = {};
      let obj2 = { paddingHorizontal: origin(first[16]).space.PX_12 };
      obj1.style = obj2;
      obj3 = { state: segmentedControlState };
      obj1.children = callback2(require(first[37]).SegmentedControl, obj3);
      const items6 = [callback2(closure_7, obj1), ];
      obj4 = { style: tmp2.content };
      if (first === constants3.BASIC) {
        obj5 = { channel: stateFromStores, privateToggleState: tmp14[0], setPrivateToggleState: tmp15 };
        let tmp46 = callback2(ChannelPermissionSettingsBasicView, obj5);
      } else if (first === constants3.MODERATORS) {
        const obj6 = { channel: stateFromStores };
        tmp46 = callback2(origin(first[38]), obj6);
      } else {
        const obj7 = { channelId: stateFromStores.id };
        tmp46 = callback2(origin(first[39]), obj7);
      }
      obj4.children = tmp46;
      obj4 = callback2(closure_8, obj4);
      items6[1] = obj4;
      obj.children = items6;
      closure_24(closure_7, obj);
      const tmp31 = closure_24;
      const tmp32 = closure_7;
      const tmp39 = callback2;
      const tmp40 = closure_8;
    }
  }
  MODERATORS = stateFromStores1 ? tmp6.ADVANCED : tmp6.BASIC;
};
