// Module ID: 16375
// Function ID: 127729
// Name: GuildSettingsRoleEditPermission
// Dependencies: [57, 31, 27, 1391, 3758, 1849, 653, 33, 4130, 689, 3763, 44, 4126, 1212, 4098, 16376, 1934, 15561, 16373, 5772, 675, 483, 15565, 5502, 5501, 1273, 8474, 2]
// Exports: default

// Module 16375 (GuildSettingsRoleEditPermission)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "set";
import { isGuildOwner } from "isGuildOwner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_6, Keyboard: closure_7, SectionList: closure_8 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, Permissions: closure_13 } = ME);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = { emptyState: { backgroundColor: "transparent", paddingTop: 40 } };
_createForOfIteratorHelperLoose = { height: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.sectionSeparator = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.emptyStateText = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.subLabel = { includeFontPadding: true };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx");

export default function GuildSettingsRoleEditPermission(guild) {
  let c10;
  let c9;
  let dependencyMap;
  let importAll;
  guild = guild.guild;
  const role = guild.role;
  ({ permissions: importAll, onPermissionsChanged: dependencyMap } = guild);
  let highestRole;
  let c6;
  let first;
  let closure_8;
  let isGuildOwner;
  c10 = undefined;
  let currentUser;
  let tmp = _createForOfIteratorHelperLoose();
  const callback = tmp;
  currentUser = currentUser.getCurrentUser();
  highestRole = undefined;
  if (null != currentUser) {
    let obj = importAll(3763);
    highestRole = obj.getHighestRole(guild, currentUser.id);
  }
  let obj1 = importAll(3763);
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  const tmp7 = !obj1.isRoleHigher(guild, id, highestRole, role);
  c6 = tmp7;
  const tmp8 = callback(highestRole.useState(""), 2);
  first = tmp8[0];
  closure_8 = tmp8[1];
  [c9, c10] = callback(highestRole.useState(false), 2);
  role(44)(null != guild, "Guild cannot be null");
  let tmp12 = isGuildOwner(guild, currentUser);
  let obj2 = importAll(3763);
  obj = { permission: constants.ADMINISTRATOR, user: currentUser, context: guild };
  const tmp10 = callback(highestRole.useState(false), 2);
  currentUser = highestRole.useRef(false);
  obj = {};
  if (!tmp12) {
    let tmp16 = !tmp7;
    if (!tmp7) {
      tmp16 = canResult;
    }
    tmp12 = tmp16;
  }
  if (tmp12) {
    obj1 = { variant: "text-sm/medium", color: "text-muted" };
    const intl = guild(1212).intl;
    obj2 = {
      onTemplateOpen() {
          first.dismiss();
          let obj = role(outer1_3[14]);
          obj = { permissionsEdited: c9, onPermissionsChanged: closure_3, guildId: guild.id };
          obj.openLazy(guild(outer1_3[16])(outer1_3[15], outer1_3.paths), "role-permission-templates-" + guild.id + "-" + role.id, obj);
        }
    };
    obj1.children = intl.format(guild(1212).t.ZhSOBy, obj2);
    tmp12 = callback2(guild(4126).Text, obj1);
  }
  obj.children = tmp12;
  canResult = obj2.can(obj);
  const tmp14 = callback2;
  const tmp15 = c6;
  let obj7 = role(15561);
  const guildPermissionSpec = obj7.generateGuildPermissionSpec(guild);
  const mapped = guildPermissionSpec.map((permissions) => {
    const obj = {};
    const merged = Object.assign(permissions);
    permissions = permissions.permissions;
    obj["permissions"] = permissions.filter((title) => {
      const formatted = title.title.toLowerCase();
      return formatted.includes(outer1_7.trimStart().toLowerCase());
    });
    return obj;
  });
  const found = mapped.filter((permissions) => permissions.permissions.length > 0);
  const mapped1 = found.map((title) => ({ title: title.title, data: title.permissions }));
  let obj3 = {};
  const items = [callback2(role(16373), { role }), , , ];
  const tmp14Result = callback2(c6, obj);
  const tmp21 = mapped1.length > 0;
  const tmp22 = closure_16;
  const tmp23 = closure_15;
  items[1] = callback2(c6, { children: callback2(guild(5772).SearchField, obj5) });
  items[2] = tmp14Result;
  if (tmp21) {
    const obj6 = {
      sections: mapped1,
      stickySectionHeadersEnabled: false,
      renderItem(section) {
          let description;
          let index;
          let item;
          let title;
          ({ item, index } = section);
          const flag = item.flag;
          let tmp = c6;
          ({ description, title } = item);
          if (c6) {
            tmp = role === highestRole;
          }
          if (!tmp) {
            tmp = c6;
          }
          if (!tmp) {
            tmp = !_undefined.can(flag, flag);
          }
          if (!tmp) {
            let obj = {};
            obj = {};
            const merged = Object.assign(role);
            obj["permissions"] = outer1_2(outer1_3[21]).remove(closure_2, flag);
            obj[role.id] = obj;
            tmp = !_undefined.can(flag, flag, null, obj);
            const obj3 = outer1_2(outer1_3[21]);
          }
          obj = { variant: "text-xs/medium", color: "text-subtle", style: tmp.subLabel, children: guild(outer1_3[22]).renderDescription(description) };
          const obj5 = guild(outer1_3[22]);
          const obj1 = { start: 0 === index, end: index === section.section.data.length - 1 };
          const tmp20 = outer1_14(guild(outer1_3[12]).Text, obj);
          obj1.value = outer1_2(outer1_3[21]).has(closure_2, flag);
          obj1.disabled = tmp;
          obj1.onValueChange = function onValueChange(arg0) {
            const obj = outer2_2(outer2_3[21]);
            if (arg0) {
              let addResult = obj.add(outer1_2, flag);
            } else {
              addResult = obj.remove(outer1_2, flag);
            }
            outer1_3(addResult);
            outer1_10(true);
          };
          obj1.label = title;
          obj1.subLabel = tmp20;
          return outer1_14(guild(outer1_3[23]).TableSwitchRow, obj1);
        },
      renderSectionHeader(section) {
          const title = section.section.title;
          const obj = { accessible: true, accessibilityRole: "header", accessibilityLabel: title, children: outer1_14(guild(outer1_3[24]).TableRowGroupTitle, { title }) };
          return outer1_14(c6, obj);
        },
      SectionSeparatorComponent(leadingItem) {
          let tmp = null;
          if (null != leadingItem.leadingItem) {
            const obj = { style: tmp.sectionSeparator };
            tmp = outer1_14(c6, obj);
          }
          return tmp;
        },
      ItemSeparatorComponent() {
          return null;
        },
      keyExtractor(flag) {
          return flag.flag.toString();
        },
      keyboardDismissMode: "on-drag",
      contentContainerStyle: guild.contentContainerStyle
    };
    let tmp24Result = tmp24(closure_8, obj6);
  } else {
    obj7 = { Illustration: guild(8474).NoResultsAlt };
    ({ emptyState: obj12.style, emptyStateText: obj12.bodyStyle } = tmp);
    const intl2 = guild(1212).intl;
    const obj8 = { query: first };
    obj7.body = intl2.format(guild(1212).t.Psh5OO, obj8);
    tmp24Result = tmp24(guild(1273).EmptyState, obj7);
  }
  items[3] = tmp24Result;
  obj3.children = items;
  return tmp22(tmp23, obj3);
};
