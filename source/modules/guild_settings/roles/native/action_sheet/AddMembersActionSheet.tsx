// Module ID: 16357
// Function ID: 127553
// Name: _toPropertyKey
// Dependencies: [29, 57, 31, 27, 16351, 33, 4130, 689, 3848, 10209, 7638, 5160, 4118, 1273, 3843, 1212, 7527, 8469, 5047, 16356, 21, 8474, 5687, 5187, 5186, 4543, 8482, 4098, 4126, 2]
// Exports: default

// Module 16357 (_toPropertyKey)
import set from "set";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "showActionSheet";
import { MAX_BULK_ROLE_MEMBERS_ADD } from "title";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function _toPropertyKey(arg0) {
  let StringResult = arg0;
  if ("object" === typeof arg0) {
    StringResult = arg0;
    if (arg0) {
      const _Symbol = Symbol;
      if (undefined !== arg0[Symbol.toPrimitive]) {
        const callResult = obj.call(arg0, "string");
        StringResult = callResult;
        if ("object" === typeof callResult) {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(arg0);
      }
    }
  }
  let text = StringResult;
  if ("symbol" !== typeof StringResult) {
    text = `${tmp}`;
  }
  return text;
}
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
  let obj = require(3848) /* useCheckboxA11yNative */;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = { start, end, guildId, userId, onPress, disabled, trailing: callback2(require(7638) /* FormCheckbox */.FormCheckbox, { checked }), accessibilityRole, accessibilityState };
  return callback2(importDefault(10209), obj);
}
class AddMembersBody {
  constructor(arg0) {
    ({ guild, role, members } = global);
    pendingAdditions = global.pendingAdditions;
    ({ setPendingAdditions, inActionSheet, maxCount } = global);
    tmp = c11();
    View = tmp;
    tmp2 = setPendingAdditions(maxCount.useState(""), 2);
    first = tmp2[0];
    MAX_BULK_ROLE_MEMBERS_ADD = first;
    c8 = tmp2[1];
    obj = { isKeyboardAwareOnAndroid: !inActionSheet };
    items = [, ];
    items[0] = members;
    items[1] = first;
    memo = maxCount.useMemo(() => {
      function filterByQuery(arg0) {
        const regExp = new RegExp(outer2_1(members[12]).escape(outer1_7), "i");
        return regExp.test(arg0);
      }
      return members.filter((name) => {
        let tmp = filterByQuery(name.name);
        if (!tmp) {
          tmp = filterByQuery(name.userTag);
        }
        return tmp;
      });
    }, items);
    Fragment = memo;
    length = memo.length;
    items1 = [, ];
    items1[0] = length;
    items1[1] = first;
    effect = maxCount.useEffect(() => {
      if ("" !== first) {
        const AccessibilityAnnouncer = outer1_0(members[14]).AccessibilityAnnouncer;
        const intl = outer1_0(members[15]).intl;
        const obj = { count: length };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(outer1_0(members[15]).t.ZGVL3g, obj), "polite");
      }
    }, items1);
    tmp5 = require("defaultMVCPConfig");
    obj = {};
    obj1 = { style: tmp.inputContainer };
    tmp6 = inActionSheet ? tmp5.BottomSheetFlashList : tmp5.FlashList;
    tmp7 = length;
    tmp8 = Fragment;
    obj2 = {};
    tmp9 = require("module_8469");
    intl = require("getSystemLocale").intl;
    obj2.placeholder = intl.string(require("getSystemLocale").t.vMiCaQ);
    values = Object.values(pendingAdditions);
    obj2.tags = values.map((display) => {
      const obj = {};
      const merged = Object.assign(display.display);
      obj["id"] = display.row.id;
      return obj;
    });
    obj2.onChangeText = function onChangeText(str) {
      const formatted = str.trim().toLowerCase();
      str = str.trim();
      members = outer1_1(members[18]).requestMembers(id.id, formatted, outer1_0(members[19]).ADD_MEMBER_QUERY_LIMIT);
      callback2(formatted);
    };
    obj2.onRemove = function onRemove(arg0) {
      let closure_0 = outer1_1(members[20]).keys(pendingAdditions)[arg0];
      callback((arg0) => {
        const items = [closure_0];
        return pendingAdditions(arg0, items.map(outer2_12));
      });
    };
    obj2.autoFocus = global.autoFocusSearch;
    obj2.inActionSheet = inActionSheet;
    obj1.children = c8(tmp9, obj2);
    items2 = [, ];
    items2[0] = c8(View, obj1);
    if (0 === memo.length) {
      tmp11 = guild;
      tmp12 = members;
      num2 = 13;
      tmp10 = c8;
      obj3 = {};
      num3 = 21;
      obj3.Illustration = require("getNoResultsAltSource").NoResultsAlt;
      obj3.bodyStyle = tmp.emptyStateText;
      if ("" !== first) {
        tmp16 = guild;
        tmp17 = members;
        intl3 = require("getSystemLocale").intl;
        obj4 = {};
        obj4.query = first;
        formatResult = intl3.format(require("getSystemLocale").t.ErpIY3, obj4);
      } else {
        tmp13 = guild;
        tmp14 = members;
        intl2 = require("getSystemLocale").intl;
        formatResult = intl2.string(require("getSystemLocale").t.oB9grQ);
      }
      obj3.body = formatResult;
      tmp10Result = tmp10(require("Button").EmptyState, obj3);
    } else {
      obj5 = {};
      obj6 = {};
      tmp20 = role;
      tmp21 = members;
      num4 = 7;
      tmp19 = c8;
      obj6.paddingHorizontal = require("_createForOfIteratorHelperLoose").space.PX_16;
      obj6.paddingTop = require("_createForOfIteratorHelperLoose").space.PX_12;
      num = 0;
      if (inActionSheet) {
        num = require("useSafeAreaInsetsKeyboardAware")(obj).insets.bottom;
      }
      obj6.paddingBottom = require("_createForOfIteratorHelperLoose").space.PX_12 + num;
      obj5.contentContainerStyle = obj6;
      obj5.renderItem = function renderItem(item) {
        item = item.item;
        const index = item.index;
        let roles = item.roles;
        let hasItem = roles.includes(id2.id);
        let tmp3 = null != result;
        if (tmp3) {
          const _Object = Object;
          tmp3 = Object.keys(pendingAdditions).length >= result;
        }
        let tmp7 = hasItem;
        if (!hasItem) {
          tmp7 = item.id in pendingAdditions;
        }
        let obj = {
          start: 0 === index,
          end: index === memo.length - 1,
          guildId: item.id,
          userId: item.id,
          onPress() {
            (function updatePendingAdditions(item) {
              let closure_0 = item;
              const roles = item.roles;
              if (!roles.includes(outer2_1.id)) {
                outer2_4((arg0) => {
                  let obj = {};
                  const merged = Object.assign(arg0);
                  if (item.id in obj) {
                    const id = tmp4.id;
                    delete tmp[tmp2];
                  } else {
                    obj = { text: tmp4.name };
                    obj = { source: tmp4.avatarSource };
                    ({ tagAvatar: obj3.avatarStyle, tagAvatar: obj3.style } = outer3_6);
                    obj.icon = callback(outer4_0(members[13]).Avatar, obj);
                    if (null != obj) {
                      const obj1 = { display: obj, row: item };
                      obj[item.id] = obj1;
                    }
                  }
                  return obj;
                });
              }
            })(item);
          }
        };
        if (!hasItem) {
          if (tmp3) {
            tmp3 = !tmp2;
          }
          hasItem = tmp3;
        }
        obj.disabled = hasItem;
        obj.checked = tmp7;
        return closure_8(outer1_13, obj);
      };
      obj5.data = memo;
      obj5.extraData = pendingAdditions;
      str = "always";
      obj5.keyboardShouldPersistTaps = "always";
      items2[1] = tmp19(tmp6, obj5);
      obj.children = items2;
      return tmp7(tmp8, obj);
    }
    return;
  }
}
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.inputContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj2 = { width: 16, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.tagAvatar = obj2;
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.emptyStateText = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.addMembersDescription = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("result").fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx");

export default function AddMembersActionSheet(guild) {
  guild = guild.guild;
  const role = guild.role;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState({}), 2);
  const first = tmp2[0];
  const items = [role.id];
  callback = React.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(role.id);
  }, items);
  let obj = guild(first[19]);
  const guildMembers = obj.useGuildMembers(guild.id, callback);
  let obj1 = guild(first[22]);
  obj = { [guild.id]: Object.keys(first) };
  const subscribeGuildMembers = obj1.useSubscribeGuildMembers(obj, "AddMembersActionSheet");
  let tmp7 = 0 === Object.keys(first).length;
  if (!tmp7) {
    const _Object = Object;
    tmp7 = Object.keys(first).length > MAX_BULK_ROLE_MEMBERS_ADD;
  }
  obj = { scrollable: true, header: null, startExpanded: true };
  obj1 = {};
  const intl = guild(first[15]).intl;
  obj1.title = intl.string(guild(first[15]).t.ZYOK46);
  obj1.subtitle = role.name;
  let obj2 = { size: "sm" };
  const intl2 = guild(first[15]).intl;
  obj2.text = intl2.string(guild(first[15]).t.OYkgVk);
  obj2.onPress = function onPress() {
    const obj = role(first[26]);
    obj.bulkAddMemberRoles(guild.id, role.id, role(first[20]).keys(first));
    const obj2 = role(first[20]);
    role(first[27]).hideActionSheet();
  };
  let str = "primary";
  if (tmp7) {
    str = "secondary";
  }
  obj2.variant = str;
  obj2.disabled = tmp7;
  obj1.trailing = callback2(guild(first[25]).Button, obj2);
  obj.header = callback2(guild(first[24]).BottomSheetTitleHeader, obj1);
  const obj3 = { style: tmp.container };
  const obj4 = { variant: "text-sm/normal", style: tmp.addMembersDescription };
  const intl3 = guild(first[15]).intl;
  obj4.children = intl3.format(guild(first[15]).t["3OxP4q"], { numMembers: MAX_BULK_ROLE_MEMBERS_ADD });
  const items1 = [callback2(guild(first[28]).Text, obj4), callback2(AddMembersBody, { guild, role, members: guildMembers, pendingAdditions: first, setPendingAdditions: tmp2[1], autoFocusSearch: true, maxCount: MAX_BULK_ROLE_MEMBERS_ADD, inActionSheet: true })];
  obj3.children = items1;
  obj.children = callback3(View, obj3);
  return callback2(guild(first[23]).BottomSheet, obj);
};
export { AddMembersBody };
