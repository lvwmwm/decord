// Module ID: 18072
// Function ID: 18073
// Name: GuildSettingsRoleEditPermissions
// Dependencies: [32, 19, 17, 2063, 4399, 1376, 1078, 21, 4758, 580, 4404, 38, 4754, 1119, 4725, 18073, 1984, 17302, 18070, 7297, 1245, 1090, 17306, 7446, 5903, 1181, 9826, 2]
// Exports: default

// Module 18072 (GuildSettingsRoleEditPermissions)
import nativeDefault from "native" /* 580 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1090 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import PermissionUtilsAll from "PermissionUtils" /* 4404 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Keyboard: closure_7, SectionList: closure_8 } = get_ActivityIndicator);
let isGuildOwner = fn(2063).isGuildOwner;
const Constants = fn(1078);
({ AnalyticEvents: closure_12, Permissions: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { emptyState: { backgroundColor: "transparent", paddingTop: 40 }, sectionSeparator: { height: nativeDefault.space.PX_24 }, emptyStateText: null, subLabel: null };
let obj3 = { height: nativeDefault.space.PX_24 };
obj2.emptyStateText = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.subLabel = { includeFontPadding: true };
let closure_17 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx");

export default function GuildSettingsRoleEditPermission(guild) {
  guild = guild.guild;
  const role = guild.role;
  ({ permissions: importAll, onPermissionsChanged: dependencyMap } = guild);
  closure_6 = undefined;
  query = undefined;
  closure_8 = undefined;
  isGuildOwner = undefined;
  c10 = undefined;
  UserStore = undefined;
  let tmp = closure_17();
  _slicedToArray = tmp;
  const currentUser = UserStore.getCurrentUser();
  let highestRole;
  if (null != currentUser) {
    highestRole = PermissionUtilsAll.getHighestRole(guild, currentUser.id);
  }
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const isRoleHigherResult = PermissionUtilsAll.isRoleHigher(guild, id, highestRole, role);
  closure_6 = tmp10;
  [query, closure_8] = highestRole.useState("");
  [c9, c10] = highestRole.useState(false);
  role(38)(null != guild, "Guild cannot be null");
  const tmp16 = isGuildOwner(guild, currentUser);
  const tmp13 = _slicedToArray(highestRole.useState(false), 2);
  let obj3 = { permission: constants2.ADMINISTRATOR, user: currentUser, context: guild };
  const tmp6Result = PermissionUtilsAll;
  UserStore = highestRole.useRef(false);
  let tmp18Result = tmp16;
  if (!tmp16) {
    let tmp21 = !tmp10;
    if (isRoleHigherResult) {
      tmp21 = canResult;
    }
    tmp18Result = tmp21;
  }
  if (tmp18Result) {
    let obj4 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl = guild(1119).intl;
    let obj5 = { onTemplateOpen: null };
    let obj6 = {
      onClick() {
          React5.dismiss();
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequireImpl(18073, dependencyMap.paths), "role-permission-templates-" + guild.id + "-" + role.id, { permissionsEdited, onPermissionsChanged, guildId: guild.id });
        },
      accessibilityRole: "button"
    };
    obj5.onTemplateOpen = obj6;
    obj4.children = intl.format(guild(1119).t.ZhSOBy, obj5);
    tmp18Result = tmp18(guild(4754).Text, obj4);
  }
  canResult = PermissionUtilsAll.can({ permission: constants2.ADMINISTRATOR, user: currentUser, context: guild });
  const tmp18Result3 = closure_14(closure_6, { children: tmp18Result });
  const guildPermissionSpec = role(17302).generateGuildPermissionSpec(guild);
  const mapped = guildPermissionSpec.map((permissions) => {
    const obj = {};
    const merged = Object.assign(permissions);
    permissions = permissions.permissions;
    obj.permissions = permissions.filter((title) => {
      const formatted = title.title.toLowerCase();
      return formatted.includes(query.trimStart().toLowerCase());
    });
    return obj;
  });
  const found = mapped.filter((permissions) => permissions.permissions.length > 0);
  const mapped1 = found.map((title) => ({ title: title.title, data: title.permissions }));
  const children = [closure_14(role(18070), { role }), , , ];
  const obj7 = {
    children: closure_14(guild(7297).SearchField, {
      size: "md",
      onChange(str) {
        closure_8(str);
        let current = "" === str.trimStart();
        if (!current) {
          current = ref.current;
        }
        if (!current) {
          AnalyticsUtilsDefault.track(constants.SEARCH_STARTED, { search_type: "Permissions" });
          ref.current = true;
        }
      }
    })
  };
  children[1] = closure_14(closure_6, obj7);
  children[2] = tmp18Result3;
  if (tmp24) {
    const obj9 = {
      sections: mapped1,
      stickySectionHeadersEnabled: false,
      renderItem(section) {
          ({ item, index } = section);
          const flag = item.flag;
          let tmp2 = closure_6;
          ({ description, title } = item);
          if (closure_6) {
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
            const obj2 = {};
            const merged = Object.assign(role);
            obj2.permissions = require("BigFlagUtils").remove(closure_2, flag);
            obj[role.id] = obj2;
            tmp2 = !_undefined.can(flag, flag, null, obj);
            const obj3 = require("BigFlagUtils");
          }
          const obj4 = { variant: "text-xs/medium", color: "text-subtle", style: closure_4.subLabel, children: guild(onPermissionsChanged[22]).renderDescription(description) };
          const obj5 = guild(onPermissionsChanged[22]);
          tmp = closure_6;
          const obj6 = { start: 0 === index, end: index === section.section.data.length - 1, value: null, disabled: null, onValueChange: null, label: null, subLabel: null };
          const tmp21 = closure_1_14(guild(onPermissionsChanged[12]).Text, obj4);
          obj6.value = require("BigFlagUtils").has(closure_2, flag);
          obj6.disabled = tmp2;
          obj6.onValueChange = function onValueChange(arg0) {
            const obj = BigFlagUtilsAll;
            if (arg0) {
              let addResult = obj.add(closure_2_2, flag);
            } else {
              addResult = obj.remove(closure_2_2, flag);
            }
            onPermissionsChanged(addResult);
            c10(true);
          };
          obj6.label = title;
          obj6.subLabel = tmp21;
          return closure_1_14(guild(onPermissionsChanged[23]).TableSwitchRow, obj6);
        },
      renderSectionHeader(section) {
          const title = section.section.title;
          return closure_1_14(closure_6, { accessible: true, accessibilityRole: "header", accessibilityLabel: title, children: closure_1_14(guild(onPermissionsChanged[24]).TableRowGroupTitle, { title }) });
        },
      SectionSeparatorComponent(leadingItem) {
          let tmp = null;
          if (null != leadingItem.leadingItem) {
            const obj = { style: closure_4.sectionSeparator };
            tmp = state(timestampProducer, obj);
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
    let tmp18Result4 = tmp18(closure_8, obj9);
  } else {
    const obj10 = { Illustration: tmp27(9826).NoResultsAlt, style: null, bodyStyle: null, body: null };
    ({ emptyState: obj11.style, emptyStateText: obj11.bodyStyle } = tmp);
    const intl2 = tmp27(1119).intl;
    const obj12 = { query };
    obj10.body = intl2.format(tmp27(1119).t.Psh5OO, obj12);
    tmp18Result4 = tmp18(tmp27(1181).EmptyState, obj10);
  }
  children[3] = tmp18Result4;
  return closure_16(closure_15, { children });
};
