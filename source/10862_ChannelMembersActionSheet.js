// Module ID: 10862
// Function ID: 84501
// Name: ChannelMembersActionSheet
// Dependencies: []
// Exports: default

// Module 10862 (ChannelMembersActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
({ ChannelSettingsSections: closure_9, Permissions: closure_10 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = { container: { "Bool(false)": "Group 11", "Bool(false)": 2 } };
obj = { paddingVertical: importDefault(dependencyMap[10]).space.PX_12 };
obj.sectionRowWrapper = obj;
obj.warning = { 0: null, 9223372036854775807: null };
let closure_13 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx");

export default function ChannelMembersActionSheet(arg0) {
  let guild;
  let sortedGuildRoles;
  ({ channelId: closure_0, guildId: closure_1 } = arg0);
  let closure_5;
  const tmp = callback2();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_0));
  const View = stateFromStores;
  let obj1 = arg1(dependencyMap[12]);
  const items1 = [closure_7, closure_6];
  const items2 = [stateFromStores];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    let guildId;
    if (null != stateFromStores) {
      guildId = stateFromStores.getGuildId();
    }
    const guild = guild.getGuild(guildId);
    const obj = { guild };
    let sortedRoles;
    if (null != guild) {
      sortedRoles = sortedRoles.getSortedRoles(guild.id);
    }
    obj.sortedGuildRoles = sortedRoles;
    return obj;
  }, items2);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  let obj2 = arg1(dependencyMap[12]);
  const items3 = [closure_5];
  const items4 = [stateFromStores];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items3, () => {
    let guildId;
    if (null != stateFromStores) {
      guildId = stateFromStores.getGuildId();
    }
    return canResult.getMemberIds(guildId);
  }, items4);
  let obj3 = arg1(dependencyMap[13]);
  closure_4 = obj3.useNavigation();
  if (null != stateFromStores) {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        const canResult = closure_8.can(constants.MANAGE_ROLES, stateFromStores);
        closure_5 = canResult;
        const obj12 = arg1(dependencyMap[15]);
        const existingRolesRows = obj12.getExistingRolesRows(guild, sortedGuildRoles, stateFromStores, stateFromStores.accessPermissions);
        const obj13 = arg1(dependencyMap[15]);
        const items5 = [];
        obj = {};
        const existingMembersRows = obj13.getExistingMembersRows(stateFromStoresArray, stateFromStores, guild, stateFromStores.accessPermissions);
        const intl4 = arg1(dependencyMap[16]).intl;
        obj.title = intl4.string(arg1(dependencyMap[16]).t.LPJmL/);
        obj.data = existingRolesRows;
        items5.push(obj);
        obj = {};
        const intl5 = arg1(dependencyMap[16]).intl;
        obj.title = intl5.string(arg1(dependencyMap[16]).t.9Oq93m);
        obj.data = existingMembersRows;
        items5.push(obj);
        obj1 = { -1383050488: 24, -1600148191: 24, -1353556895: null };
        obj2 = {};
        const intl6 = arg1(dependencyMap[16]).intl;
        obj2.title = intl6.string(arg1(dependencyMap[16]).t.ES4CC6);
        const _HermesInternal = HermesInternal;
        obj2.subtitle = "#" + tmp6;
        let tmp10 = canResult;
        if (canResult) {
          obj3 = {
            onPress() {
                      callback2(tmp[20]).hideActionSheet();
                      const obj = callback2(tmp[20]);
                      callback2(tmp[21]).init(callback);
                      const obj2 = callback2(tmp[21]);
                      const result = callback(tmp[22]).navigateToChannelDetailsScreen(closure_4, constants.PERMISSIONS, callback, "channel-members-action-sheet");
                    },
            accessibilityRole: "button"
          };
          const intl = arg1(dependencyMap[16]).intl;
          obj3.accessibilityLabel = intl.string(arg1(dependencyMap[16]).t.XPDhcc);
          obj3.children = callback(arg1(dependencyMap[23]).SettingsIcon, {});
          tmp10 = callback(arg1(dependencyMap[19]).PressableOpacity, obj3);
        }
        obj2.trailing = tmp10;
        obj1.header = callback(arg1(dependencyMap[18]).BottomSheetTitleHeader, obj2);
        const obj4 = { style: tmp.container };
        if (canResult) {
          const obj5 = {};
          const intl3 = arg1(dependencyMap[16]).intl;
          obj5.label = intl3.string(arg1(dependencyMap[16]).t.dMJ3Y6);
          obj5.onPress = function onPress() {
            return callback(tmp[25]).openAddMembersActionSheet(stateFromStores);
          };
          obj5.icon = tmp13(arg1(dependencyMap[26]).GroupPlusIcon, {});
          let tmp13Result = tmp13(arg1(dependencyMap[24]).RowButton, obj5);
        } else {
          const obj6 = { style: tmp.warning };
          const obj7 = { messageType: arg1(dependencyMap[27]).HelpMessageTypes.INFO };
          const intl2 = arg1(dependencyMap[16]).intl;
          obj7.children = intl2.string(arg1(dependencyMap[16]).t.VOuiSj);
          obj6.children = tmp13(arg1(dependencyMap[27]).HelpMessage, obj7);
          tmp13Result = tmp13(View, obj6);
        }
        const items6 = [tmp13Result, ];
        const obj8 = {};
        const obj9 = { paddingBottom: tmp2.bottom + importDefault(dependencyMap[10]).space.PX_16 };
        obj8.contentContainerStyle = obj9;
        obj8.renderItem = function renderItem(index) {
          let item;
          let section;
          index = index.index;
          ({ item, section } = index);
          return callback3(callback2(tmp[29]), { start: 0 === index, end: index === section.data.length - 1, guildId: callback2, item, channelId: closure_0, showType: true, showRemove: canResult });
        };
        obj8.renderSectionHeader = function renderSectionHeader(section) {
          let data;
          let title;
          ({ title, data } = section.section);
          let obj = { style: tmp.sectionRowWrapper };
          const intl = callback(tmp[16]).intl;
          obj = { numberOfItems: data.length, sectionTitle: title };
          obj.children = intl.format(callback(tmp[16]).t.u8CWLl, obj);
          return callback3(callback(tmp[30]).Text, obj);
        };
        obj8.sections = items5;
        obj8.stickySectionHeadersEnabled = false;
        items6[1] = callback(arg1(dependencyMap[28]).BottomSheetSectionList, obj8);
        obj4.children = items6;
        obj1.children = closure_12(View, obj4);
        return callback(arg1(dependencyMap[17]).BottomSheet, obj1);
      }
    }
  }
  return null;
};
