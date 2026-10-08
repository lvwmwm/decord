// Module ID: 18136
// Function ID: 18137
// Name: GuildSettingsRoleEditPermissions
// Dependencies: [32, 19, 17, 2082, 4707, 1389, 1085, 21, 5090, 587, 4712, 38, 5086, 1126, 5054, 18137, 1999, 17316, 18134, 6730, 1264, 1097, 17320, 6882, 6267, 1200, 8606, 2]
// Exports: default

// Module 18136 (GuildSettingsRoleEditPermissions)
import nativeDefault from "native" /* 587 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import GuildRecord from "GuildRecord" /* 2082 */;
import PermissionUtilsAll from "PermissionUtils" /* 4712 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import UserStore_mod from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

let permissions;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
({ View: metroRequire, Keyboard: metroImportDefault, SectionList: metroImportAll } = react_native);
let isGuildOwner = GuildRecord.isGuildOwner;
let UserStore = UserStore_mod;
({ AnalyticEvents: closure_12, Permissions: map1 } = Constants);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { emptyState: { backgroundColor: "transparent", paddingTop: 40 }, sectionSeparator: obj2, emptyStateText: obj3, subLabel: { includeFontPadding: true } };
obj2 = { height: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_17 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx");

export default function GuildSettingsRoleEditPermission(guild) {
  let _undefined;
  let c10;
  let c9;
  let closure_4;
  let closure_8;
  let intl;
  let intl2;
  let obj11;
  let obj4;
  let obj5;
  let obj7;
  let onPermissionsChanged;
  let permissionsEdited;
  let query;
  let ref;
  let tmp19Result4;
  guild = guild.guild;
  const role = guild.role;
  ({ permissions: importAll, onPermissionsChanged: dependencyMap } = guild);
  let closure_6;
  query = undefined;
  closure_8 = undefined;
  isGuildOwner = undefined;
  c10 = undefined;
  UserStore = undefined;
  const contentContainerStyle = guild.contentContainerStyle;
  let tmp = closure_17();
  _slicedToArray = tmp;
  const currentUser = UserStore.getCurrentUser();
  let highestRole;
  if (null != currentUser) {
    let obj = PermissionUtilsAll;
    highestRole = obj.getHighestRole(guild, currentUser.id);
  }
  let id;
  const isRoleHigher = PermissionUtilsAll.isRoleHigher;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const isRoleHigherResult = isRoleHigher(guild, id, highestRole, role);
  closure_6 = tmp11;
  [query, closure_8] = highestRole.useState("");
  [c9, c10] = _slicedToArray(highestRole.useState(false), 2);
  const tmp14 = _slicedToArray(highestRole.useState(false), 2);
  role(38)(null != guild, "Guild cannot be null");
  let obj2 = { permission: constants2.ADMINISTRATOR, user: currentUser, context: guild };
  const tmp17 = isGuildOwner(guild, currentUser);
  const tmp6Result = PermissionUtilsAll;
  const canResult = tmp6Result.can(obj2);
  UserStore = highestRole.useRef(false);
  let tmp19Result = tmp17;
  if (!tmp19Result) {
    let tmp22 = !tmp11;
    if (isRoleHigherResult) {
      tmp22 = canResult;
    }
    tmp19Result = tmp22;
  }
  if (tmp19Result) {
    let obj3 = { variant: "text-sm/medium", color: "text-muted", children: intl.format(guild(1126).t.ZhSOBy, obj4) };
    let Text = guild(5086).Text;
    intl = guild(1126).intl;
    obj4 = { onTemplateOpen: obj5 };
    obj5 = {
      onClick: function handleTemplateOpen() {
          metroImportDefault.dismiss();
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          ActionSheetActionCreatorsDefault;
          const obj = { permissionsEdited, onPermissionsChanged: dependencyMap, guildId: guild.id };
          const tmp3 = asyncRequire(18137, dependencyMap.paths);
          openLazy(tmp3, "role-permission-templates-" + guild.id + "-" + role.id, obj);
        },
      accessibilityRole: "button"
    };
    tmp19Result = tmp19(Text, obj3);
  }
  const tmp19Result3 = closure_14(closure_6, { children: tmp19Result });
  const tmp15Result = role(17316);
  const guildPermissionSpec = tmp15Result.generateGuildPermissionSpec(guild);
  const mapped = guildPermissionSpec.map((permissions) => {
    const obj = {
      permissions: permissions.filter((title) => {
        const str = title.title;
        const formatted = str.toLowerCase();
        const includes = formatted.includes;
        const str2 = query.trimStart();
        return includes(str2.toLowerCase());
      })
    };
    const merged = Object.assign(permissions);
    permissions = permissions.permissions;
    return obj;
  });
  const found = mapped.filter((permissions) => permissions.permissions.length > 0);
  const mapped1 = found.map((title) => ({ title: title.title, data: title.permissions }));
  const children = [, , , ];
  const tmp25 = mapped1.length > 0;
  children[0] = closure_14(role(18134), { role });
  let obj6 = { children: tmp19(guild(6730).SearchField, obj7) };
  obj7 = {
    size: "md",
    onChange: function handleSearchQuery(str) {
      closure_8(str);
      const current = "" === str.trimStart() || ref.current;
      if (!current) {
        const obj = AnalyticsUtilsDefault;
        obj.track(constants.SEARCH_STARTED, { search_type: "Permissions" });
        ref.current = true;
      }
    }
  };
  children[1] = closure_14(closure_6, obj6);
  children[2] = tmp19Result3;
  const tmp26 = closure_16;
  const tmp27 = closure_15;
  if (tmp25) {
    const obj8 = {
      sections: mapped1,
      stickySectionHeadersEnabled: false,
      renderItem(section) {
          let description;
          let index;
          let item;
          let obj3;
          let obj5;
          let obj7;
          let title;
          let tmp21;
          ({ item, index } = section);
          const flag = item.flag;
          let tmp2 = closure_6;
          section = section.section;
          ({ description, title } = item);
          let tmp = closure_6;
          if (tmp) {
            tmp2 = role === highestRole;
          }
          if (!tmp2) {
            tmp2 = tmp;
          }
          if (!tmp2) {
            tmp2 = !_undefined.can(flag, flag);
          }
          if (!tmp2) {
            let obj = {};
            const can = _undefined.can;
            const id = role.id;
            const obj2 = { permissions: obj3.remove(importAll, flag) };
            const merged = Object.assign(role);
            obj[id] = obj2;
            obj3 = BigFlagUtilsAll;
            tmp2 = !can(flag, flag, null, obj);
          }
          const obj4 = { variant: "text-xs/medium", color: "text-subtle", style: closure_4.subLabel, children: obj5.renderDescription(description) };
          const Text = guild(dependencyMap[12]).Text;
          obj5 = guild(dependencyMap[22]);
          const obj6 = {
            start: 0 === index,
            end: index === section.data.length - 1,
            value: obj7.has(importAll, flag),
            disabled: tmp2,
            onValueChange(arg0) {
              let addResult;
              const obj = BigFlagUtilsAll;
              const tmp = dependencyMap;
              const tmp2 = arg0;
              if (tmp2) {
                addResult = obj.add(importAll, flag);
              } else {
                addResult = obj.remove(importAll, flag);
              }
              tmp(addResult);
              c10(true);
            },
            label: title,
            subLabel: tmp21
          };
          tmp21 = closure_1_14(Text, obj4);
          const TableSwitchRow = guild(dependencyMap[23]).TableSwitchRow;
          obj7 = BigFlagUtilsAll;
          return closure_1_14(TableSwitchRow, obj6);
        },
      renderSectionHeader(section) {
          const title = section.section.title;
          const obj = { accessible: true, accessibilityRole: "header", accessibilityLabel: title, children: closure_1_14(guild(dependencyMap[24]).TableRowGroupTitle, { title }) };
          return closure_1_14(closure_6, obj);
        },
      SectionSeparatorComponent: function renderSectionSeparator(leadingItem) {
          let tmp = null;
          if (null != leadingItem.leadingItem) {
            const obj = { style: closure_4.sectionSeparator };
            tmp = authStore2(metroRequire, obj);
          }
          return tmp;
        },
      ItemSeparatorComponent() {
          return null;
        },
      keyExtractor(flag) {
          const str = flag.flag;
          return str.toString();
        },
      keyboardDismissMode: "on-drag",
      contentContainerStyle
    };
    tmp19Result4 = tmp19(closure_8, obj8);
  } else {
    const obj9 = { Illustration: guild(8606).NoResultsAlt, style: null, bodyStyle: null, body: intl2.format(guild(1126).t.Psh5OO, obj11) };
    const EmptyState = tmp28(1200).EmptyState;
    ({ emptyState: obj10.style, emptyStateText: obj10.bodyStyle } = tmp);
    intl2 = tmp28(1126).intl;
    obj11 = { query };
    tmp19Result4 = tmp19(EmptyState, obj9);
  }
  children[3] = tmp19Result4;
  return tmp26(tmp27, { children });
};
