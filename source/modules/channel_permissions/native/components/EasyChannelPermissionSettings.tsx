// Module ID: 15390
// Function ID: 117291
// Name: ChannelPermissionSettingsBasicView
// Dependencies: []
// Exports: default

// Module 15390 (ChannelPermissionSettingsBasicView)
function ChannelPermissionSettingsBasicView(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const privateToggleState = channel.privateToggleState;
  const importDefault = privateToggleState;
  const importAll = channel.setPrivateToggleState;
  let closure_4;
  let React;
  function togglePrivateChannel() {
    return _togglePrivateChannel(...arguments);
  }
  function _togglePrivateChannel() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = sortedGuildRoles(tmp);
    const _togglePrivateChannel = obj;
    return obj(...arguments);
  }
  function _onPrivateChannelSwitchChange() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = sortedGuildRoles(tmp);
    const _onPrivateChannelSwitchChange = obj;
    return obj(...arguments);
  }
  function renderRowItem(id) {
    return callback(privateToggleState(navigation[25]), { item: id, channelId: channel.id, showType: true, showRemove: true, guildId: channel.guild_id }, id.id);
  }
  const tmp = callback3();
  let obj = arg1(dependencyMap[17]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  let obj1 = arg1(dependencyMap[18]);
  const items = [closure_13, closure_12];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    const guild = guild.getGuild(channel.getGuildId());
    const obj = { guild };
    let sortedRoles;
    if (null != guild) {
      sortedRoles = sortedRoles.getSortedRoles(guild.id);
    }
    obj.sortedGuildRoles = sortedRoles;
    return obj;
  });
  const guild = stateFromStoresObject.guild;
  closure_4 = guild;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  let closure_5 = sortedGuildRoles;
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
      const memberIds = memberIds.getMemberIds(id);
      let obj2 = importAll(dependencyMap[19]);
      const existingMembersRows = obj2.getExistingMembersRows(memberIds, channel, guild, channel.accessPermissions);
      let obj3 = importAll(dependencyMap[19]);
      const result = obj3.isPrivateGuildChannel(channel);
      React = result;
      let obj4 = importAll(dependencyMap[26]);
      const isCategoryResult = channel.isCategory();
      let obj5 = importAll(dependencyMap[26]);
      const canEveryoneRoleResult1 = obj5.canEveryoneRole(constants2.ADMINISTRATOR, guild);
      const type = channel.type;
      const string = arg1(dependencyMap[22]).intl.string;
      if (type === constants.GUILD_CATEGORY) {
        const intl2 = arg1(dependencyMap[22]).intl;
        let stringResult = intl2.string(arg1(dependencyMap[22]).t.RQUk61);
      } else {
        stringResult = tmp19;
        if (type === constants.GUILD_VOICE) {
          const intl = arg1(dependencyMap[22]).intl;
          stringResult = intl.string(arg1(dependencyMap[22]).t.cLjvKg);
        }
      }
      obj = {};
      obj = { paddingHorizontal: importDefault(dependencyMap[16]).space.PX_16 };
      obj.style = obj;
      obj.spacing = importDefault(dependencyMap[16]).space.PX_16;
      obj1 = { title: stringResult, hasIcons: false };
      obj2 = {};
      const intl3 = arg1(dependencyMap[22]).intl;
      const string2 = intl3.string;
      const t = arg1(dependencyMap[22]).t;
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
      obj1.children = callback2(arg1(dependencyMap[29]).TableSwitchRow, obj2);
      const items3 = [callback2(arg1(dependencyMap[28]).TableRowGroup, obj1), , , , , ];
      let tmp36 = canEveryoneRoleResult1;
      if (canEveryoneRoleResult1) {
        obj3 = { style: tmp.adminWarning };
        obj4 = { messageType: arg1(dependencyMap[30]).HelpMessageTypes.WARNING };
        const intl4 = arg1(dependencyMap[22]).intl;
        obj4.children = intl4.string(arg1(dependencyMap[22]).t.5f3HIC);
        obj3.children = callback2(arg1(dependencyMap[30]).HelpMessage, obj4);
        tmp36 = callback2(togglePrivateChannel, obj3);
      }
      items3[1] = tmp36;
      let tmp42 = !canEveryoneRoleResult1 && !obj4.canEveryoneRole(constants2.VIEW_CHANNEL, guild) && !result;
      if (tmp42) {
        obj5 = { style: tmp.adminWarning };
        const obj6 = { messageType: arg1(dependencyMap[30]).HelpMessageTypes.WARNING };
        const intl5 = arg1(dependencyMap[22]).intl;
        obj6.children = intl5.string(arg1(dependencyMap[22]).t.ZAk4Q9);
        obj5.children = callback2(arg1(dependencyMap[30]).HelpMessage, obj6);
        tmp42 = callback2(togglePrivateChannel, obj5);
      }
      items3[2] = tmp42;
      const obj7 = { hasIcons: true };
      const obj8 = { arrow: true, icon: callback2(arg1(dependencyMap[32]).CirclePlusIcon, {}) };
      const intl6 = arg1(dependencyMap[22]).intl;
      obj8.label = intl6.string(arg1(dependencyMap[22]).t.dMJ3Y6);
      obj8.onPress = function onPress() {
        if (null != channel) {
          const result = channel(navigation[33]).openAddMembersActionSheet(channel);
          const obj = channel(navigation[33]);
        }
      };
      obj7.children = callback2(arg1(dependencyMap[31]).TableRow, obj8);
      items3[3] = callback2(arg1(dependencyMap[28]).TableRowGroup, obj7);
      const obj9 = {};
      const intl7 = arg1(dependencyMap[22]).intl;
      obj9.title = intl7.string(arg1(dependencyMap[22]).t.ES4CC6);
      obj9.hasIcons = true;
      obj9.children = memo.map((arg0) => renderRowItem(arg0));
      items3[4] = callback2(arg1(dependencyMap[28]).TableRowGroup, obj9);
      const obj10 = { hasIcons: true, children: existingMembersRows.map((arg0) => renderRowItem(arg0)) };
      items3[5] = callback2(arg1(dependencyMap[28]).TableRowGroup, obj10);
      obj.children = items3;
      return closure_24(arg1(dependencyMap[27]).Stack, obj);
    }
  }
  return null;
}
function onBack() {
  importDefault(dependencyMap[24]).close();
  return false;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
({ View: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
let closure_15 = importDefault(dependencyMap[10]);
let closure_16 = importDefault(dependencyMap[11]);
const SettingMode = arg1(dependencyMap[12]).SettingMode;
const tmp2 = arg1(dependencyMap[3]);
({ ChannelTypes: closure_18, Permissions: closure_19, AnalyticEvents: closure_20, ChannelSettingsSections: closure_21, SettingsPaneTypes: closure_22 } = arg1(dependencyMap[13]));
const tmp3 = arg1(dependencyMap[13]);
({ jsx: closure_23, jsxs: closure_24 } = arg1(dependencyMap[14]));
let closure_25 = { BASIC: 0, [0]: "BASIC", ADVANCED: 1, [1]: "ADVANCED", MODERATORS: 2, [2]: "MODERATORS" };
let obj = arg1(dependencyMap[15]);
obj = {};
obj = { "Null": "vertical", "Null": false, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.content = { __workletHash: null, messageId: "Group 11" };
const tmp4 = arg1(dependencyMap[14]);
obj.adminWarning = { marginTop: importDefault(dependencyMap[16]).space.PX_12 };
let closure_26 = obj.createStyles(obj);
const obj1 = { marginTop: importDefault(dependencyMap[16]).space.PX_12 };
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx");

export default function EasyChannelPermissionSettings(arg0) {
  let origin;
  ({ channelId: closure_0, origin } = arg0);
  const importDefault = origin;
  let dependencyMap;
  let callback;
  let closure_5;
  let obj = arg1(dependencyMap[34]);
  obj.useNavigatorBackPressHandler(onBack);
  const tmp2 = callback3();
  let obj1 = arg1(dependencyMap[18]);
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => channel.getChannel(closure_0));
  const importAll = stateFromStores;
  let obj3 = arg1(dependencyMap[18]);
  const items1 = [closure_9];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => advancedMode.advancedMode);
  if (null != stateFromStores) {
    if (stateFromStores.isGuildStageVoice()) {
      let MODERATORS = constants3.MODERATORS;
    }
    const tmp9 = callback(tmp5(MODERATORS), 2);
    const first = tmp9[0];
    dependencyMap = first;
    callback = tmp9[1];
    let obj4 = importAll(dependencyMap[19]);
    const tmp14 = callback(React.useState(obj4.isPrivateGuildChannel(stateFromStores)), 2);
    closure_5 = tmp15;
    const items2 = [origin];
    const effect = React.useEffect(() => {
      let obj = origin(first[35]);
      obj = { settings_type: "channel" };
      let CHANNEL_SETTINGS = null;
      if (origin === constants3.OVERVIEW) {
        CHANNEL_SETTINGS = constants4.CHANNEL_SETTINGS;
      }
      obj.origin_pane = CHANNEL_SETTINGS;
      obj.destination_pane = constants3.PERMISSIONS;
      obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj);
    }, items2);
    const items3 = [stateFromStores];
    callback = React.useCallback((arg0) => {
      if (arg0 === constants5.ADVANCED) {
        callback(first[20]).setAdvancedMode(true);
        const obj3 = callback(first[20]);
      } else {
        tmp15(stateFromStores(first[19]).isPrivateGuildChannel(stateFromStores));
        const obj = stateFromStores(first[19]);
        callback(first[20]).setAdvancedMode(false);
        const obj2 = callback(first[20]);
      }
      callback2(arg0);
    }, items3);
    const intl = arg1(dependencyMap[22]).intl;
    const items4 = [intl.string(arg1(dependencyMap[22]).t.Mw/UDN), ];
    const intl2 = arg1(dependencyMap[22]).intl;
    items4[1] = intl2.string(arg1(dependencyMap[22]).t.0a6awf);
    let isGuildStageVoiceResult;
    if (null != stateFromStores) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    if (true === isGuildStageVoiceResult) {
      const intl3 = arg1(dependencyMap[22]).intl;
      items4.push(intl3.string(arg1(dependencyMap[22]).t.YIIUJ3));
    }
    let obj5 = arg1(dependencyMap[36]);
    obj = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: callback, items: items4.map((id) => ({ id, label: id, page: null })) };
    const items5 = [stateFromStores, first];
    const segmentedControlState = obj5.useSegmentedControlState(obj);
    const effect1 = React.useEffect(() => {
      let obj = origin(first[35]);
      obj = {};
      if (first === constants5.BASIC) {
        let ADVANCED = constants.BASIC;
      } else {
        ADVANCED = constants.ADVANCED;
      }
      obj.mode = ADVANCED;
      obj.channel_is_private = stateFromStores(first[19]).isPrivateGuildChannel(stateFromStores);
      obj.trackWithMetadata(constants2.CHANNEL_PERMISSIONS_PAGE_VIEWED, obj);
    }, items5);
    if (null == stateFromStores) {
      return null;
    } else {
      obj = { style: tmp2.container };
      obj1 = {};
      const obj2 = { paddingHorizontal: importDefault(dependencyMap[16]).space.PX_12 };
      obj1.style = obj2;
      obj3 = { state: segmentedControlState };
      obj1.children = callback2(arg1(dependencyMap[37]).SegmentedControl, obj3);
      const items6 = [callback2(closure_7, obj1), ];
      obj4 = { style: tmp2.content };
      if (first === constants3.BASIC) {
        obj5 = { channel: stateFromStores, privateToggleState: tmp14[0], setPrivateToggleState: tmp15 };
        let tmp46 = callback2(ChannelPermissionSettingsBasicView, obj5);
      } else if (first === constants3.MODERATORS) {
        const obj6 = { channel: stateFromStores };
        tmp46 = callback2(importDefault(dependencyMap[38]), obj6);
      } else {
        const obj7 = { channelId: stateFromStores.id };
        tmp46 = callback2(importDefault(dependencyMap[39]), obj7);
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
