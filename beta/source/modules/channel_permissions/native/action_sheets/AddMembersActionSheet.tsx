// Module ID: 9008
// Function ID: 9009
// Name: AddMembersActionSheet
// Dependencies: [5, 109, 32, 19, 17, 2111, 2105, 2073, 1378, 7853, 1097, 21, 4837, 588, 4477, 6399, 4821, 504, 8993, 4545, 1127, 1189, 4833, 9009, 6038, 8176, 9013, 5832, 9018, 4990, 4982, 8994, 4530, 4801, 6572, 6571, 5282, 2]
// Exports: default

// Module 9008 (AddMembersActionSheet)
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1097 */;
import intl9 from "intl" /* 1127 */;
import PermissionUtilsAll from "PermissionUtils" /* 4477 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4545 */;
import RegexUtilsDefault from "RegexUtils" /* 4821 */;
import GuildUtilsDefault from "GuildUtils" /* 5832 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 2111 */;
import GuildRoleStore from "GuildRoleStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2073 */;
import UserStore from "UserStore" /* 1378 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 7853 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, c4, c5, closure_1, closure_12, dependencyMap, row, user;

let c9;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let tmp10;
const ChannelPermissionsUtilsAll = tmp10(8993);
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (StringResult) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const callResult = obj[Symbol.toPrimitive].call(obj, "string");
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(obj);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "symbol") {
    text = `${tmp}`;
  }
  return text;
}
class AddMembersBody {
  constructor(pendingAdditions) {
    let BottomSheetScrollView;
    let EmptyState;
    let HelpMessage;
    let channel;
    let closure_7;
    let count;
    let guild;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let items2;
    let items8;
    let obj10;
    let obj12;
    let obj14;
    let obj15;
    let permission;
    let sectionRowWrapper;
    let tmp8Result;
    ({ channel, guild } = pendingAdditions);
    pendingAdditions = pendingAdditions.pendingAdditions;
    ({ setPendingAdditions: importAll, permission } = pendingAdditions);
    if (permission === undefined) {
      let tmp = importAll;
      let tmp2 = dependencyMap;
      permission = PermissionUtilsAll.NONE;
    }
    const inActionSheet = pendingAdditions.inActionSheet;
    let merged = Object.assign(pendingAdditions, Object.assign({ channel: 0, guild: 0, pendingAdditions: 0, setPendingAdditions: 0, permission: 0, inActionSheet: 0 }));
    let str;
    react = undefined;
    let c8;
    let num3;
    let c10;
    let sum1;
    closure_12 = undefined;
    function filterByQuery(arg0) {
      const trimmed = str.trim();
      let substr = trimmed;
      if (first) {
        substr = trimmed.slice(1);
      }
      const obj = RegexUtilsDefault;
      const regExp = new RegExp("" + obj.escape(substr), "i");
      return regExp.test(arg0);
    }
    let tmp4 = closure_21();
    dependencyMap = tmp4;
    let obj = react;
    let tmp5 = str(react.useState(false), 2);
    const first = tmp5[0];
    let closure_5 = tmp5[1];
    const tmp7 = str(react.useState(""), 2);
    str = tmp7[0];
    react = tmp7[1];
    const tmp8 = pendingAdditions;
    let obj2 = { isKeyboardAwareOnAndroid: !inActionSheet };
    let tmp10 = importAll;
    const insets = pendingAdditions(6399)(obj2).insets;
    let obj3 = PermissionUtilsAll;
    let canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.ADMINISTRATOR, guild);
    const tmp12 = guild;
    let obj4 = guild(504);
    let items = [sum1];
    const stateFromStores = obj4.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
    let obj5 = guild(504);
    const items1 = [c10];
    const stateFromStoresArray = obj5.useStateFromStoresArray(items1, () => GuildMemberStore.getMemberIds(guild.id));
    if (first) {
      items2 = [];
    } else {
      const tmp10Result = ChannelPermissionsUtilsAll;
      let tmp14 = tmp10Result;
      const rolesRows = tmp10Result.getRolesRows(guild, stateFromStores, channel, permission, filterByQuery);
      items2 = rolesRows;
      const tmp20 = 0 === rolesRows.length && "" === str.trim() && 1 === stateFromStores.length;
      if (tmp20) {
        const tmp10Result3 = ChannelPermissionsUtilsAll;
        items2 = tmp10Result3.getNoRolesRow();
      }
    }
    let obj6 = { filter: filterByQuery };
    const tmp10Result4 = ChannelPermissionsUtilsAll;
    const membersRows = tmp10Result4.getMembersRows(stateFromStoresArray, channel, guild, permission, obj6);
    const sum = items2.length + membersRows.length;
    c8 = sum;
    const items3 = [sum, str];
    const effect = obj.useEffect(() => {
      if ("" !== str) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl9.intl;
        const obj = { count };
        announce(intl.formatToPlainString(intl9.t.ZGVL3g, obj), "polite");
      }
    }, items3);
    if (items2.length > 0) {
      let intl = tmp12(1127).intl;
      const items4 = [intl.string(tmp12(1127).t["LPJmL/"])];
      let items5 = items4;
    } else {
      items5 = [];
    }
    const items6 = [...items2];
    if (membersRows.length > 0) {
      const intl2 = tmp12(1127).intl;
      const items7 = [intl2.string(tmp12(1127).t["9Oq93m"])];
      items8 = items7;
    } else {
      items8 = [];
    }
    HermesBuiltin.arraySpread(items6, membersRows, HermesBuiltin.arraySpread(items6, items8, tmp23));
    num3 = 0;
    if (items2.length > 0) {
      num3 = 1;
    }
    const diff = num3 + items2.length - 1;
    c10 = diff;
    sum1 = diff;
    if (membersRows.length > 0) {
      sum1 = diff + 2;
    }
    const items9 = [];
    closure_12 = sum1 + membersRows.length - 1;
    let obj7 = { title: intl3.string(tmp12(1127).t["LPJmL/"]), data: items2 };
    const push = items9.push;
    intl3 = tmp12(1127).intl;
    push(obj7);
    const push2 = items9.push;
    const obj8 = { title: intl4.string(tmp12(1127).t["9Oq93m"]), data: membersRows };
    intl4 = tmp12(1127).intl;
    push2(obj8);
    const values = Object.values(pendingAdditions);
    const mapped = values.map((row) => {
      const obj = { id: row.id };
      row = row.row;
      const merged = Object.assign(row.display);
      return obj;
    });
    if (inActionSheet) {
      BottomSheetScrollView = tmp12(6038).BottomSheetScrollView;
    } else {
      BottomSheetScrollView = num3;
    }
    const tmp12Result = tmp12(8176);
    const obj9 = { style: tmp4.inputContainer, children: closure_17(tmp8Result, obj10) };
    obj10 = {
      accessibilityLabel: intl5.string(tmp12(1127).t["5h0QOP"]),
      placeholder: intl6.string(tmp12(1127).t.TVZdKh),
      tags: mapped,
      onChangeText(str) {
        str = str.trim();
        const tmp = "@" === str.charAt(0);
        let substr = str;
        const requestMembers = GuildUtilsDefault.requestMembers;
        const id = guild.id;
        GuildUtilsDefault;
        if (tmp) {
          substr = str.slice(1);
        }
        const members = requestMembers(id, substr, closure_15);
        closure_7(str);
        closure_5(tmp);
      },
      onRemove(arg0) {
        let closure_0 = Object.keys(pendingAdditions)[arg0];
        importAll((arg0) => {
          const items = [closure_0];
          return closure_2_5(arg0, items.map(closure_2_20));
        });
      }
    };
    const tmp31 = inActionSheet ? tmp12Result.BottomSheetFlashList : tmp12Result.FlashList;
    tmp8Result = tmp8(9013);
    intl5 = tmp12(1127).intl;
    intl6 = tmp12(1127).intl;
    const items10 = [closure_17(c8, obj9), , ];
    const tmp32 = closure_19;
    const tmp33 = closure_18;
    const tmp35 = c8;
    if (canEveryoneRoleResult) {
      const obj11 = { style: tmp4.adminWarning, children: closure_17(HelpMessage, obj12) };
      obj12 = { messageType: tmp12(1189).HelpMessageTypes.WARNING, children: intl7.string(tmp12(1127).t["5f3HIC"]) };
      HelpMessage = tmp12(1189).HelpMessage;
      intl7 = tmp12(1127).intl;
      canEveryoneRoleResult = tmp34(tmp35, obj11);
    }
    items10[1] = canEveryoneRoleResult;
    if ("" !== str) {
      if (0 === items2.length) {
        let tmp34Result;
        if (0 === membersRows.length) {
          const obj13 = { children: closure_17(EmptyState, obj14) };
          const merged1 = Object.assign(merged);
          obj14 = { Illustration: tmp12(9018).NoResultsAlt, style: null, bodyStyle: null, body: intl8.format(tmp12(1127).t.ErpIY3, obj15) };
          EmptyState = tmp12(1189).EmptyState;
          ({ emptyState: obj19.style, emptyStateText: obj19.bodyStyle } = tmp4);
          intl8 = tmp12(1127).intl;
          obj15 = { query: str };
          tmp34Result = tmp34(BottomSheetScrollView, obj13);
        }
        const obj16 = { children: items10 };
        items10[2] = tmp34Result;
        return tmp32(tmp33, obj16);
      }
    }
    const obj17 = {
      extraData: pendingAdditions,
      data: items6,
      contentContainerStyle: { paddingHorizontal: tmp8(588).space.PX_16, paddingBottom: tmp8(588).space.PX_16 + insets.bottom },
      renderItem: function renderRow(item) {
        let tmp14Result;
        let tmp4;
        item = item.item;
        const index = item.index;
        if (typeof item === "string") {
          let items = [sectionRowWrapper.sectionRowWrapper, ];
          let obj2 = { style: items, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: item };
          items[1] = 0 === index ? { paddingTop: 0 } : {};
          tmp14Result = closure_1_17(guild(sectionRowWrapper[22]).Text, obj2);
        } else {
          let tmp2 = num3 === index;
          const ChannelOverwritesCheckboxItem = guild(sectionRowWrapper[23]).ChannelOverwritesCheckboxItem;
          const tmp14 = closure_1_17;
          if (!tmp2) {
            tmp2 = sum1 === index;
          }
          let obj = {
            start: tmp2,
            end: tmp4,
            item,
            guildId: item.id,
            onPress() {
                const id = item;
                if (item.rowType !== constants.EMPTY_STATE) {
                  const tmp2 = importAll((arg0) => {
                    let items;
                    let obj3;
                    let obj6;
                    const obj = {};
                    const merged = Object.assign(arg0);
                    const combined = "" + row.rowType + ":" + row.id;
                    if (combined in obj) {
                      delete obj[tmp3];
                    } else {
                      const rowType = tmp2.rowType;
                      if (constants.ROLE !== rowType) {
                        let tmp5;
                        if (constants.ADMINISTRATOR !== rowType) {
                          user = user.getUser(tmp2.id);
                          if (null != user) {
                            const obj2 = { text: row.name, icon: closure_3_17(item(sectionRowWrapper[21]).Avatar, obj3) };
                            tmp5 = obj2;
                            obj3 = { user, guildId: id.id, avatarStyle: closure_2_3.tagAvatar, style: closure_2_3.tagAvatar };
                          }
                        }
                        if (null != tmp5) {
                          const obj4 = { display: tmp5, row };
                          obj[combined] = obj4;
                        }
                      }
                      const obj5 = { text: row.name, icon: closure_3_17(count, obj6) };
                      obj6 = { style: items };
                      items = [closure_2_3.tagRoleColor, ];
                      const obj7 = { backgroundColor: row.colorString };
                      items[1] = obj7;
                      tmp5 = obj5;
                    }
                    return obj;
                  });
                }
              },
            checked: "" + item.rowType + ":" + item.id in pendingAdditions
          };
          const tmp3 = c10;
          tmp4 = c10 === index;
          if (!tmp4) {
            let tmp5 = closure_12;
            tmp4 = closure_12 === index;
          }
          const _HermesInternal = HermesInternal;
          tmp14Result = tmp14(ChannelOverwritesCheckboxItem, obj);
        }
        return tmp14Result;
      },
      keyboardShouldPersistTaps: "handled"
    };
    const merged2 = Object.assign(merged);
    ({ paddingHorizontal: tmp8(588).space.PX_16, paddingBottom: tmp8(588).space.PX_16 + insets.bottom });
    tmp34Result = tmp34(tmp31, obj17);
  }
}
let react = react_mod;
({ View: metroImportAll, ScrollView: c9 } = react_native);
({ RowType: closure_14, MEMBER_REQUEST_COUNT: closure_15 } = ChannelPermissionsConstants);
const Permissions = Constants.Permissions;
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, inputContainer: obj2, tagRoleColor: { height: 12, width: 12, borderRadius: 6 }, tagAvatar: size, emptyState: obj3, emptyStateText: obj4, sectionRowWrapper: obj5, adminWarning: { marginHorizontal: 16, marginVertical: 8 } };
obj2 = { alignItems: "stretch", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm };
obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj5 = { paddingVertical: nativeDefault.space.PX_12 };
let closure_21 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/channel_permissions/native/action_sheets/AddMembersActionSheet.tsx");

export default function AddMembersActionSheet(channel) {
  let intl;
  let intl2;
  let intl3;
  let obj5;
  let obj6;
  let pendingAdditions;
  let str2;
  let tmp13;
  let tmp4;
  channel = channel.channel;
  pendingAdditions = undefined;
  let obj = function _handleAddPressed() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj7;
      let tmp;
      if (c5 === 2) {
        c5 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let c1;
          let c2;
          c5 = 2;
          const tmp4 = c4;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              id = tmp4;
              const items = [];
              c1 = 0;
              c2 = 0;
              const _Object = Object;
              const values = Object.values(pendingAdditions);
              const item = values.forEach((row) => {
                row = row.row;
                const tmp = null != row.id && "" !== row.id;
                if (tmp) {
                  if (row.rowType === constants.ROLE) {
                    closure_2 = closure_2 + 1;
                    const push = closure_1_0.push;
                    obj = closure_0(c3[30]);
                    push(obj.permissionOverwriteForRole(row.id, closure_2_0.type));
                  } else if (row.rowType === tmp2.MEMBER) {
                    closure_1 = closure_1 + 1;
                    const push2 = closure_1_0.push;
                    const obj2 = closure_0(c3[30]);
                    push2(obj2.permissionOverwriteForUser(row.id, closure_2_0.type));
                  }
                }
              });
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj7.savePermissionUpdates(id.id, items), done: false };
              obj7 = id(c3[31]);
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              obj = id(c3[32]);
              const result = obj.memberOrRoleAddedToast(c2, c1);
              let obj2 = tmp(c3[33]);
              obj2.hideActionSheet();
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          let closure_2 = tmp16;
          if (0 === c3) {
            c5 = 3;
            throw tmp16;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const canSkip = channel.canSkip;
  let tmp = closure_21();
  [pendingAdditions, tmp4] = react.useState({});
  let tmp5 = channel;
  let tmp6 = dependencyMap;
  obj = channel(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildId;
    const getGuild = GuildStore.getGuild;
    obj = channel;
    if (channel != null) {
      guildId = obj.getGuildId();
    }
    return getGuild(guildId);
  });
  let str = pendingAdditions(4990)(channel, true);
  if (str == null) {
    str = "";
  }
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp10 = globalThis;
    let _Object = Object;
    let num = 0;
    const tmp11 = 0 === Object.keys(pendingAdditions).length;
    let tmp12 = closure_17;
    BottomSheet = tmp5(6572).BottomSheet;
    let obj2 = { title: intl3.string(tmp5(1127).t.dMJ3Y6), subtitle: str, trailing: null };
    const BottomSheetTitleHeader = tmp5(6571).BottomSheetTitleHeader;
    intl3 = tmp5(1127).intl;
    if (canSkip) {
      let obj7;
      if (tmp11) {
        let obj3 = {
          size: "sm",
          text: intl2.string(tmp5(1127).t["5Wxrcd"]),
          onPress() {
                  obj = first(dependencyMap[33]);
                  obj.hideActionSheet();
                },
          variant: "secondary"
        };
        intl2 = tmp5(1127).intl;
        obj7 = obj3;
      }
      let obj4 = { scrollable: true, header: tmp12(BottomSheetTitleHeader, obj2), startExpanded: true, children: tmp12(closure_8, obj5) };
      obj2.trailing = tmp12(tmp13, obj7);
      obj5 = { style: tmp.container, children: tmp12(AddMembersBody, obj6) };
      let tmp9 = AddMembersBody;
      obj6 = { channel, guild: stateFromStores, permission: channel.accessPermissions, pendingAdditions, setPendingAdditions: tmp4, inActionSheet: true };
      return tmp12(BottomSheet, obj4);
    }
    obj7 = {
      size: "sm",
      text: intl.string(tmp5(1127).t.OYkgVk),
      onPress: function handleAddPressed() {
          return obj(...arguments);
        },
      variant: str2,
      disabled: tmp11
    };
    intl = tmp5(1127).intl;
    str2 = "primary";
    if (tmp11) {
      str2 = "secondary";
    }
  }
};
export { AddMembersBody };
