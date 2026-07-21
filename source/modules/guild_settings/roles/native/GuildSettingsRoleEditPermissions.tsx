// Module ID: 16195
// Function ID: 125129
// Name: GuildSettingsRoleEditPermission
// Dependencies: []
// Exports: default

// Module 16195 (GuildSettingsRoleEditPermission)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ View: closure_6, Keyboard: closure_7, SectionList: closure_8 } = arg1(dependencyMap[2]));
const isGuildOwner = arg1(dependencyMap[3]).isGuildOwner;
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_12, Permissions: closure_13 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { emptyState: {} };
obj = { height: importDefault(dependencyMap[9]).space.PX_24 };
obj.sectionSeparator = obj;
const tmp4 = arg1(dependencyMap[7]);
obj.emptyStateText = { color: importDefault(dependencyMap[9]).colors.TEXT_DEFAULT };
obj.subLabel = { includeFontPadding: true };
let closure_17 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[9]).colors.TEXT_DEFAULT };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx");

export default function GuildSettingsRoleEditPermission(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const role = guild.role;
  const importDefault = role;
  ({ permissions: closure_2, onPermissionsChanged: closure_3 } = guild);
  let React;
  let tmp7;
  let first;
  let closure_8;
  let isGuildOwner;
  let closure_10;
  let currentUser;
  const tmp = callback3();
  const callback = tmp;
  currentUser = currentUser.getCurrentUser();
  let highestRole;
  if (null != currentUser) {
    let obj = importAll(dependencyMap[10]);
    highestRole = obj.getHighestRole(guild, currentUser.id);
  }
  React = highestRole;
  let obj1 = importAll(dependencyMap[10]);
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  tmp7 = !obj1.isRoleHigher(guild, id, highestRole, role);
  const tmp8 = callback(React.useState(""), 2);
  first = tmp8[0];
  closure_8 = tmp8[1];
  [closure_9, closure_10] = callback(React.useState(false), 2);
  importDefault(dependencyMap[11])(null != guild, "Guild cannot be null");
  let tmp12 = isGuildOwner(guild, currentUser);
  let obj2 = importAll(dependencyMap[10]);
  obj = { permission: constants.ADMINISTRATOR, user: currentUser, context: guild };
  const tmp10 = callback(React.useState(false), 2);
  currentUser = React.useRef(false);
  obj = {};
  if (!tmp12) {
    let tmp16 = !tmp7;
    if (!tmp7) {
      tmp16 = canResult;
    }
    tmp12 = tmp16;
  }
  if (tmp12) {
    obj1 = {};
    const intl = arg1(dependencyMap[13]).intl;
    obj2 = {
      onTemplateOpen() {
          first.dismiss();
          let obj = role(paths[14]);
          obj = { permissionsEdited: closure_9, onPermissionsChanged: paths, guildId: guild.id };
          obj.openLazy(guild(paths[16])(paths[15], paths.paths), "role-permission-templates-" + guild.id + "-" + role.id, obj);
        }
    };
    obj1.children = intl.format(arg1(dependencyMap[13]).t.ZhSOBy, obj2);
    tmp12 = callback2(arg1(dependencyMap[12]).TextWithIOSLinkWorkaround, obj1);
  }
  obj.children = tmp12;
  const canResult = obj2.can(obj);
  const tmp14 = callback2;
  const tmp15 = tmp7;
  let obj7 = importDefault(dependencyMap[17]);
  const guildPermissionSpec = obj7.generateGuildPermissionSpec(guild);
  const mapped = guildPermissionSpec.map((permissions) => {
    const obj = {};
    const merged = Object.assign(permissions);
    permissions = permissions.permissions;
    obj["permissions"] = permissions.filter((title) => {
      const formatted = title.title.toLowerCase();
      return formatted.includes(closure_7.trimStart().toLowerCase());
    });
    return obj;
  });
  const found = mapped.filter((permissions) => permissions.permissions.length > 0);
  const mapped1 = found.map((title) => ({ title: title.title, data: title.permissions }));
  const obj3 = {};
  const items = [callback2(importDefault(dependencyMap[18]), { role }), , , ];
  const tmp14Result = callback2(tmp7, obj);
  const tmp21 = mapped1.length > 0;
  const tmp22 = closure_16;
  const tmp23 = closure_15;
  items[1] = callback2(tmp7, { children: callback2(arg1(dependencyMap[19]).SearchField, obj5) });
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
          const guild = flag;
          let tmp = tmp7;
          ({ description, title } = item);
          if (tmp7) {
            tmp = role === highestRole;
          }
          if (!tmp) {
            tmp = tmp7;
          }
          if (!tmp) {
            tmp = !_undefined.can(flag, guild);
          }
          if (!tmp) {
            let obj = {};
            obj = {};
            const merged = Object.assign(role);
            obj["permissions"] = callback(closure_3[21]).remove(callback, flag);
            obj[role.id] = obj;
            tmp = !_undefined.can(flag, guild, null, obj);
            const obj3 = callback(closure_3[21]);
          }
          obj = { style: tmp.subLabel, children: guild(closure_3[23]).renderDescription(description) };
          const obj5 = guild(closure_3[23]);
          const obj1 = { start: 0 === index, end: index === section.section.data.length - 1 };
          const tmp20 = callback3(guild(closure_3[22]).Text, obj);
          obj1.value = callback(closure_3[21]).has(callback, item.flag);
          obj1.disabled = tmp;
          obj1.onValueChange = function onValueChange(arg0) {
            const obj = callback(closure_3[21]);
            if (arg0) {
              let addResult = obj.add(callback, flag);
            } else {
              addResult = obj.remove(callback, flag);
            }
            closure_3(addResult);
            callback2(true);
          };
          obj1.label = title;
          obj1.subLabel = tmp20;
          return callback3(guild(closure_3[24]).TableSwitchRow, obj1);
        },
      renderSectionHeader(section) {
          const title = section.section.title;
          return callback3(tmp7, { accessibilityLabel: title, children: callback3(guild(closure_3[25]).TableRowGroupTitle, { title }) });
        },
      SectionSeparatorComponent(leadingItem) {
          let tmp = null;
          if (null != leadingItem.leadingItem) {
            const obj = { style: tmp.sectionSeparator };
            tmp = callback3(tmp7, obj);
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
    obj7 = { Illustration: arg1(dependencyMap[27]).NoResultsAlt };
    ({ emptyState: obj12.style, emptyStateText: obj12.bodyStyle } = tmp);
    const intl2 = arg1(dependencyMap[13]).intl;
    const obj8 = { query: first };
    obj7.body = intl2.format(arg1(dependencyMap[13]).t.Psh5OO, obj8);
    tmp24Result = tmp24(arg1(dependencyMap[26]).EmptyState, obj7);
  }
  items[3] = tmp24Result;
  obj3.children = items;
  return tmp22(tmp23, obj3);
};
