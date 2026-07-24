// Module ID: 10906
// Function ID: 84786
// Name: ChannelMembersActionSheet
// Dependencies: [31, 27, 1348, 1917, 1910, 1838, 3758, 653, 33, 4130, 689, 1557, 566, 1456, 4320, 8457, 1212, 5187, 5186, 4660, 4098, 7685, 10907, 5791, 7639, 10905, 10225, 1273, 5189, 8465, 4126, 2]
// Exports: default

// Module 10906 (ChannelMembersActionSheet)
import "set";
import { View } from "Button";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_9;
const require = arg1;
({ ChannelSettingsSections: closure_9, Permissions: closure_10 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingHorizontal: 16, flex: 1 } };
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.sectionRowWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.warning = { margin: 16, marginBottom: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx");

export default function ChannelMembersActionSheet(arg0) {
  let guild;
  let importDefault;
  let require;
  let sortedGuildRoles;
  ({ channelId: require, guildId: importDefault } = arg0);
  let c5;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_0));
  let obj1 = require(566) /* initialize */;
  const items1 = [closure_7, closure_6];
  const items2 = [stateFromStores];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    let guildId;
    if (null != stateFromStores) {
      guildId = stateFromStores.getGuildId();
    }
    const guild = outer1_7.getGuild(guildId);
    const obj = { guild };
    let sortedRoles;
    if (null != guild) {
      sortedRoles = outer1_6.getSortedRoles(guild.id);
    }
    obj.sortedGuildRoles = sortedRoles;
    return obj;
  }, items2);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  let obj2 = require(566) /* initialize */;
  const items3 = [c5];
  const items4 = [stateFromStores];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items3, () => {
    let guildId;
    if (null != stateFromStores) {
      guildId = stateFromStores.getGuildId();
    }
    return _undefined.getMemberIds(guildId);
  }, items4);
  let obj3 = require(1456) /* useNavigation */;
  _isNativeReflectConstruct = obj3.useNavigation();
  if (null != stateFromStores) {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        const canResult = closure_8.can(constants.MANAGE_ROLES, stateFromStores);
        c5 = canResult;
        const obj12 = require(8457) /* isAdmin */;
        const existingRolesRows = obj12.getExistingRolesRows(guild, sortedGuildRoles, stateFromStores, stateFromStores.accessPermissions);
        const obj13 = require(8457) /* isAdmin */;
        const items5 = [];
        obj = {};
        const existingMembersRows = obj13.getExistingMembersRows(stateFromStoresArray, stateFromStores, guild, stateFromStores.accessPermissions);
        const intl4 = require(1212) /* getSystemLocale */.intl;
        obj.title = intl4.string(require(1212) /* getSystemLocale */.t["LPJmL/"]);
        obj.data = existingRolesRows;
        items5.push(obj);
        obj = {};
        const intl5 = require(1212) /* getSystemLocale */.intl;
        obj.title = intl5.string(require(1212) /* getSystemLocale */.t["9Oq93m"]);
        obj.data = existingMembersRows;
        items5.push(obj);
        obj1 = { scrollable: true, header: null, startExpanded: true };
        obj2 = {};
        const intl6 = require(1212) /* getSystemLocale */.intl;
        obj2.title = intl6.string(require(1212) /* getSystemLocale */.t.ES4CC6);
        const _HermesInternal = HermesInternal;
        obj2.subtitle = "#" + tmp6;
        let tmp10 = canResult;
        if (canResult) {
          obj3 = {
            onPress() {
                      outer1_1(tmp[20]).hideActionSheet();
                      const obj = outer1_1(tmp[20]);
                      outer1_1(tmp[21]).init(closure_0);
                      const obj2 = outer1_1(tmp[21]);
                      const result = outer1_0(tmp[22]).navigateToChannelDetailsScreen(_isNativeReflectConstruct, outer1_9.PERMISSIONS, closure_0, "channel-members-action-sheet");
                    },
            accessibilityRole: "button"
          };
          let intl = require(1212) /* getSystemLocale */.intl;
          obj3.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.XPDhcc);
          obj3.children = callback(require(5791) /* SettingsIcon */.SettingsIcon, {});
          tmp10 = callback(require(4660) /* PressableBase */.PressableOpacity, obj3);
        }
        obj2.trailing = tmp10;
        obj1.header = callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj2);
        const obj4 = { style: tmp.container };
        if (canResult) {
          const obj5 = {};
          const intl3 = require(1212) /* getSystemLocale */.intl;
          obj5.label = intl3.string(require(1212) /* getSystemLocale */.t.dMJ3Y6);
          obj5.onPress = function onPress() {
            return outer1_0(tmp[25]).openAddMembersActionSheet(stateFromStores);
          };
          obj5.icon = tmp13(require(10225) /* GroupPlusIcon */.GroupPlusIcon, {});
          let tmp13Result = tmp13(require(7639) /* RowButtonWrapper */.RowButton, obj5);
        } else {
          const obj6 = { style: tmp.warning };
          const obj7 = { messageType: require(1273) /* Button */.HelpMessageTypes.INFO };
          const intl2 = require(1212) /* getSystemLocale */.intl;
          obj7.children = intl2.string(require(1212) /* getSystemLocale */.t.VOuiSj);
          obj6.children = tmp13(require(1273) /* Button */.HelpMessage, obj7);
          tmp13Result = tmp13(stateFromStores, obj6);
        }
        const items6 = [tmp13Result, ];
        const obj8 = {};
        const obj9 = { paddingBottom: tmp2.bottom + importDefault(689).space.PX_16 };
        obj8.contentContainerStyle = obj9;
        obj8.renderItem = function renderItem(index) {
          let item;
          let section;
          index = index.index;
          ({ item, section } = index);
          return outer1_11(outer1_1(tmp[29]), { start: 0 === index, end: index === section.data.length - 1, guildId: closure_1, item, channelId: closure_0, showType: true, showRemove: c5 });
        };
        obj8.renderSectionHeader = function renderSectionHeader(section) {
          let data;
          let title;
          ({ title, data } = section.section);
          let obj = { style: tmp.sectionRowWrapper, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default" };
          const intl = outer1_0(tmp[16]).intl;
          obj = { numberOfItems: data.length, sectionTitle: title };
          obj.children = intl.format(outer1_0(tmp[16]).t.u8CWLl, obj);
          return outer1_11(outer1_0(tmp[30]).Text, obj);
        };
        obj8.sections = items5;
        obj8.stickySectionHeadersEnabled = false;
        items6[1] = callback(require(5189) /* BottomSheetModal */.BottomSheetSectionList, obj8);
        obj4.children = items6;
        obj1.children = closure_12(stateFromStores, obj4);
        return callback(require(5187) /* Background */.BottomSheet, obj1);
      }
    }
  }
  return null;
};
