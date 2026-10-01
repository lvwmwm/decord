// Module ID: 17415
// Function ID: 17416
// Name: AddMembersActionSheet
// Dependencies: [32, 19, 17, 17409, 21, 4836, 576, 4548, 10404, 5929, 6402, 4820, 1177, 4541, 1115, 8179, 9036, 5831, 17414, 11, 9041, 6729, 6571, 6570, 5281, 9048, 4800, 4832, 2]
// Exports: default

// Module 17415 (AddMembersActionSheet)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import react_native2 from "react-native" /* 4548 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import RegexUtilsDefault from "RegexUtils" /* 4820 */;
import GuildUtilsDefault from "GuildUtils" /* 5831 */;
import FormCheckbox from "FormCheckbox" /* 5929 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import DetailedGuildIdentityUserRowDefault from "DetailedGuildIdentityUserRow" /* 10404 */;
import GuildSettingsRoleConstants from "GuildSettingsRoleConstants" /* 17409 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 17414 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function MemberRow(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let checked;
  let disabled;
  let end;
  let guildId;
  let onPress;
  let start;
  let userId;
  ({ disabled, checked } = arg0);
  ({ start, end, guildId, userId, onPress } = arg0);
  const obj = react_native2;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj2 = { start, end, guildId, userId, onPress, disabled, trailing: metroImportDefault(FormCheckbox.FormCheckbox, { checked }), accessibilityRole, accessibilityState };
  const tmp2 = DetailedGuildIdentityUserRowDefault;
  return metroImportDefault(tmp2, obj2);
}
class AddMembersBody {
  constructor(pendingAdditions) {
    let FlashList;
    let PX_12;
    let formatResult;
    let inActionSheet;
    let intl;
    let maxCount;
    let members;
    let num;
    let obj4;
    let tmp11;
    let tmp14Result;
    let tmp4Result;
    let user;
    let values;
    ({ guild: require, role: importDefault, members } = pendingAdditions);
    pendingAdditions = pendingAdditions.pendingAdditions;
    ({ setPendingAdditions: react, inActionSheet, maxCount } = pendingAdditions);
    let closure_9;
    let length;
    const autoFocusSearch = pendingAdditions.autoFocusSearch;
    let tmp = length();
    let closure_5 = tmp;
    let obj = react;
    let tmp2 = pendingAdditions(react.useState(""), 2);
    const query = tmp2[0];
    let closure_7 = tmp2[1];
    let tmp4 = importDefault;
    let tmp5 = members;
    let obj2 = { isKeyboardAwareOnAndroid: !inActionSheet };
    const items = [members, query];
    const insets = require("useSafeAreaInsetsKeyboardAware")(obj2).insets;
    const memo = react.useMemo(() => {
      const obj = RegexUtilsDefault;
      const regExp = new RegExp(obj.escape(first), "i");
      return members.filter((name) => {
        const tmp = regExp.test(name.name) || regExp.test(name.userTag);
        return tmp;
      });
    }, items);
    let tmp6 = null != maxCount;
    if (tmp6) {
      const _Object = Object;
      tmp6 = Object.keys(pendingAdditions).length >= maxCount;
    }
    closure_9 = tmp6;
    length = memo.length;
    const items1 = [length, query];
    const effect = obj.useEffect(() => {
      if ("" !== first) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl4.intl;
        const obj = { count: length };
        announce(intl.formatToPlainString(intl4.t.ZGVL3g, obj), "polite");
      }
    }, items1);
    const tmp10 = require("defaultMVCPConfig");
    if (inActionSheet) {
      FlashList = tmp10.BottomSheetFlashList;
      tmp11 = tmp9;
    } else {
      FlashList = tmp10.FlashList;
      tmp11 = tmp9;
    }
    const obj3 = { style: tmp.inputContainer, children: closure_7(tmp4Result, obj4) };
    obj4 = {
      placeholder: intl.string(tmp11(tmp5[14]).t.vMiCaQ),
      tags: values.map((row) => {
        const obj = { id };
        id = row.row.id;
        const merged = Object.assign(row.display);
        return obj;
      }),
      onChangeText(str) {
        str = str.trim();
        const formatted = str.toLowerCase();
        const obj = GuildUtilsDefault;
        members = obj.requestMembers(require.id, formatted, GuildSettingsRolesUtils.ADD_MEMBER_QUERY_LIMIT);
        closure_7(formatted);
      },
      onRemove(arg0) {
        let obj = SnowflakeUtilsDefault;
        const tmp2 = obj.keys(pendingAdditions)[arg0];
        let closure_0 = tmp2;
        if (null != pendingAdditions[tmp2]) {
          react((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            delete obj[closure_0];
            return obj;
          });
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const announce = AccessibilityAnnouncer.announce;
          const intl = intl4.intl;
          const obj2 = { text: pendingAdditions[tmp2].display.text };
          announce(intl.formatToPlainString(intl4.t.srlxB8, obj2), "polite");
        }
      },
      autoFocus: autoFocusSearch,
      inActionSheet
    };
    tmp4Result = tmp4(tmp5[16]);
    intl = tmp11(tmp5[14]).intl;
    values = Object.values(pendingAdditions);
    const children = [closure_7(closure_5, obj3), ];
    const tmp12 = closure_9;
    const tmp13 = memo;
    if (0 === memo.length) {
      const obj5 = { Illustration: tmp11(tmp5[20]).NoResultsAlt, bodyStyle: tmp.emptyStateText, body: formatResult };
      const EmptyState = tmp11(tmp5[12]).EmptyState;
      if ("" !== query) {
        const intl3 = tmp11(tmp5[14]).intl;
        const obj6 = { query };
        formatResult = intl3.format(tmp11(tmp5[14]).t.ErpIY3, obj6);
      } else {
        const intl2 = tmp11(tmp5[14]).intl;
        formatResult = intl2.string(tmp11(tmp5[14]).t.oB9grQ);
      }
      tmp14Result = tmp14(EmptyState, obj5);
    } else {
      let obj7 = { paddingHorizontal: tmp4(tmp5[6]).space.PX_16, paddingTop: tmp4(tmp5[6]).space.PX_12, paddingBottom: PX_12 + num };
      num = 0;
      PX_12 = tmp4(tmp5[6]).space.PX_12;
      if (inActionSheet) {
        num = insets.bottom;
      }
      const obj8 = {
        contentContainerStyle: obj7,
        renderItem(item) {
            let tmp5;
            item = item.item;
            const index = item.index;
            let roles = item.roles;
            let hasItem = roles.includes(user.id);
            const tmp2 = item.id in pendingAdditions;
            let obj = {
              start: 0 === index,
              end: index === memo.length - 1,
              guildId: item.id,
              userId: item.id,
              onPress() {
                let closure_0 = item;
                const roles = item.roles;
                if (!roles.includes(importDefault.id)) {
                  react((arg0) => {
                    let obj4;
                    const obj = {};
                    const merged = Object.assign(arg0);
                    if (id.id in obj) {
                      delete obj[id.id];
                    } else {
                      const obj2 = { text: id.name, icon: closure_3_7(item(members[12]).Avatar, obj4) };
                      obj4 = { source: id.avatarSource, avatarStyle: null, style: null };
                      ({ tagAvatar: obj3.avatarStyle, tagAvatar: obj3.style } = closure_2_5);
                      const obj7 = { display: obj2, row: id };
                      obj[id.id] = obj7;
                    }
                    return obj;
                  });
                }
              },
              disabled: tmp5,
              checked: hasItem
            };
            tmp5 = hasItem;
            const tmp3 = closure_7;
            const tmp4 = MemberRow;
            if (!hasItem) {
              tmp5 = closure_9 && !tmp2;
              const tmp6 = closure_9 && !tmp2;
            }
            if (!hasItem) {
              hasItem = tmp2;
            }
            return tmp3(tmp4, obj);
          },
        data: memo,
        extraData: pendingAdditions,
        keyboardShouldPersistTaps: "always"
      };
      tmp14Result = tmp14(FlashList, obj8);
    }
    children[1] = tmp14Result;
    return tmp12(tmp13, { children });
  }
}
const View = react_native.View;
const MAX_BULK_ROLE_MEMBERS_ADD = GuildSettingsRoleConstants.MAX_BULK_ROLE_MEMBERS_ADD;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, inputContainer: obj3, tagAvatar: size, emptyStateText: obj4, addMembersDescription: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm };
obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj5 = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx");

export default function AddMembersActionSheet(guild) {
  let Button;
  let id;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj5;
  let obj7;
  let obj9;
  let pendingAdditions;
  let str;
  let tmp4;
  guild = guild.guild;
  const role = guild.role;
  pendingAdditions = undefined;
  const tmp = closure_10();
  [pendingAdditions, tmp4] = react.useState({});
  const items = [role.id];
  const callback = react.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(role.id);
  }, items);
  let obj = guild(pendingAdditions[18]);
  const guildMembers = obj.useGuildMembers(guild.id, callback);
  let obj2 = guild(pendingAdditions[21]);
  const obj3 = { [id]: Object.keys(pendingAdditions) };
  id = guild.id;
  const subscribeGuildMembers = obj2.useSubscribeGuildMembers(obj3, "AddMembersActionSheet");
  let tmp10 = 0 === Object.keys(pendingAdditions).length;
  if (!tmp10) {
    const _Object = Object;
    tmp10 = Object.keys(pendingAdditions).length > MAX_BULK_ROLE_MEMBERS_ADD;
  }
  BottomSheet = tmp6(tmp7[22]).BottomSheet;
  const obj4 = { title: intl.string(guild(pendingAdditions[14]).t.ZYOK46), subtitle: role.name, trailing: closure_7(Button, obj5) };
  const BottomSheetTitleHeader = tmp6(tmp7[23]).BottomSheetTitleHeader;
  intl = tmp6(tmp7[14]).intl;
  obj5 = {
    size: "sm",
    text: intl2.string(guild(pendingAdditions[14]).t.OYkgVk),
    onPress() {
      const bulkAddMemberRoles = GuildSettingsActionCreatorsDefault.bulkAddMemberRoles;
      const id = guild.id;
      const id2 = role.id;
      GuildSettingsActionCreatorsDefault;
      const obj = SnowflakeUtilsDefault;
      bulkAddMemberRoles(id, id2, obj.keys(first));
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    },
    variant: str,
    disabled: tmp10
  };
  Button = tmp6(tmp7[24]).Button;
  intl2 = tmp6(tmp7[14]).intl;
  str = "primary";
  if (tmp10) {
    str = "secondary";
  }
  const obj6 = { scrollable: true, header: closure_7(BottomSheetTitleHeader, obj4), startExpanded: true, children: closure_9(View, obj7) };
  obj7 = { style: tmp.container, children: items1 };
  const obj8 = { variant: "text-sm/normal", style: tmp.addMembersDescription, children: intl3.format(guild(pendingAdditions[14]).t["3OxP4q"], obj9) };
  const Text = tmp6(tmp7[27]).Text;
  intl3 = tmp6(tmp7[14]).intl;
  obj9 = { numMembers: MAX_BULK_ROLE_MEMBERS_ADD };
  items1 = [closure_7(Text, obj8), ];
  const obj10 = { guild, role, members: guildMembers, pendingAdditions, setPendingAdditions: tmp4, autoFocusSearch: true, maxCount: MAX_BULK_ROLE_MEMBERS_ADD, inActionSheet: true };
  items1[1] = closure_7(AddMembersBody, obj10);
  return closure_7(BottomSheet, obj6);
};
export { AddMembersBody };
