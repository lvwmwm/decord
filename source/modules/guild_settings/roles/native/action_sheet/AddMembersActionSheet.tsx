// Module ID: 16193
// Function ID: 125056
// Name: _toPropertyKey
// Dependencies: []
// Exports: default

// Module 16193 (_toPropertyKey)
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
  let obj = arg1(dependencyMap[8]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = { start, end, guildId, userId, onPress, disabled, trailing: callback2(arg1(dependencyMap[10]).FormCheckbox, { checked }), accessibilityRole, accessibilityState };
  return callback2(importDefault(dependencyMap[9]), obj);
}
class AddMembersBody {
  constructor(arg0) {
    ({ guild: closure_0, role: closure_1, members } = global);
    dependencyMap = members;
    pendingAdditions = global.pendingAdditions;
    ({ setPendingAdditions: closure_4, inActionSheet, maxCount: closure_5 } = global);
    tmp = closure_11();
    View = tmp;
    tmp2 = setPendingAdditions(importAll.useState(""), 2);
    first = tmp2[0];
    MAX_BULK_ROLE_MEMBERS_ADD = first;
    closure_8 = tmp2[1];
    obj = { isKeyboardAwareOnAndroid: !inActionSheet };
    items = [, ];
    items[0] = members;
    items[1] = first;
    memo = importAll.useMemo(() => {
      function filterByQuery(arg0) {
        const regExp = new RegExp(callback(closure_2[12]).escape(closure_7), "i");
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
    jsxs = length;
    items1 = [, ];
    items1[0] = length;
    items1[1] = first;
    effect = importAll.useEffect(() => {
      if ("" !== first) {
        const AccessibilityAnnouncer = lib(members[14]).AccessibilityAnnouncer;
        const intl = lib(members[15]).intl;
        const obj = { count: length };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(lib(members[15]).t.ZGVL3g, obj), "polite");
      }
    }, items1);
    tmp5 = arg1(dependencyMap[16]);
    obj = {};
    obj1 = { style: tmp.inputContainer };
    tmp6 = inActionSheet ? tmp5.BottomSheetFlashList : tmp5.FlashList;
    tmp7 = jsxs;
    tmp8 = Fragment;
    obj2 = {};
    tmp9 = importDefault(dependencyMap[17]);
    intl = arg1(dependencyMap[15]).intl;
    obj2.placeholder = intl.string(arg1(dependencyMap[15]).t.vMiCaQ);
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
      const members = lib2(members[18]).requestMembers(lib.id, formatted, lib(members[19]).ADD_MEMBER_QUERY_LIMIT);
      callback2(formatted);
    };
    obj2.onRemove = function onRemove(arg0) {
      let closure_0 = lib2(members[20]).keys(pendingAdditions)[arg0];
      callback((arg0) => {
        const items = [closure_0];
        return callback(arg0, items.map(closure_12));
      });
    };
    obj2.autoFocus = global.autoFocusSearch;
    obj2.inActionSheet = inActionSheet;
    obj1.children = closure_8(tmp9, obj2);
    items2 = [, ];
    items2[0] = closure_8(View, obj1);
    if (0 === memo.length) {
      tmp11 = arg1;
      tmp12 = dependencyMap;
      num2 = 13;
      tmp10 = closure_8;
      obj3 = {};
      num3 = 21;
      obj3.Illustration = arg1(dependencyMap[21]).NoResultsAlt;
      obj3.bodyStyle = tmp.emptyStateText;
      if ("" !== first) {
        tmp16 = arg1;
        tmp17 = dependencyMap;
        intl3 = arg1(dependencyMap[15]).intl;
        obj4 = {};
        obj4.query = first;
        formatResult = intl3.format(arg1(dependencyMap[15]).t.ErpIY3, obj4);
      } else {
        tmp13 = arg1;
        tmp14 = dependencyMap;
        intl2 = arg1(dependencyMap[15]).intl;
        formatResult = intl2.string(arg1(dependencyMap[15]).t.oB9grQ);
      }
      obj3.body = formatResult;
      tmp10Result = tmp10(arg1(dependencyMap[13]).EmptyState, obj3);
    } else {
      obj5 = {};
      obj6 = {};
      tmp20 = importDefault;
      tmp21 = dependencyMap;
      num4 = 7;
      tmp19 = closure_8;
      obj6.paddingHorizontal = importDefault(dependencyMap[7]).space.PX_16;
      obj6.paddingTop = importDefault(dependencyMap[7]).space.PX_12;
      num = 0;
      if (inActionSheet) {
        num = importDefault(dependencyMap[11])(obj).insets.bottom;
      }
      obj6.paddingBottom = importDefault(dependencyMap[7]).space.PX_12 + num;
      obj5.contentContainerStyle = obj6;
      obj5.renderItem = function renderItem(item) {
        item = item.item;
        const index = item.index;
        const roles = item.roles;
        let hasItem = roles.includes(lib2.id);
        let tmp3 = null != closure_5;
        if (tmp3) {
          const _Object = Object;
          tmp3 = Object.keys(pendingAdditions).length >= closure_5;
        }
        let tmp7 = hasItem;
        if (!hasItem) {
          tmp7 = item.id in pendingAdditions;
        }
        const obj = {
          start: 0 === index,
          end: index === memo.length - 1,
          guildId: item.id,
          userId: item.id,
          onPress() {
            function updatePendingAdditions(item) {
              const roles = item.roles;
              if (!roles.includes(id.id)) {
                callback((arg0) => {
                  let obj = {};
                  const merged = Object.assign(arg0);
                  if (arg0.id in obj) {
                    const id = tmp2.id;
                    delete r0[r1];
                  } else {
                    obj = { text: tmp2.name };
                    obj = { source: tmp2.avatarSource };
                    ({ tagAvatar: obj3.avatarStyle, tagAvatar: obj3.style } = closure_6);
                    obj.icon = callback(arg0(closure_2[13]).Avatar, obj);
                    if (null != obj) {
                      const obj1 = { display: obj, row: arg0 };
                      obj[arg0.id] = obj1;
                    }
                  }
                  return obj;
                });
              }
            }(item);
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
        return closure_8(closure_13, obj);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
const MAX_BULK_ROLE_MEMBERS_ADD = arg1(dependencyMap[4]).MAX_BULK_ROLE_MEMBERS_ADD;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER, flex: 1 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.inputContainer = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingTop: importDefault(dependencyMap[7]).space.PX_12 };
const obj2 = { "Null": null, "Null": null, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.tagAvatar = obj2;
const obj1 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingTop: importDefault(dependencyMap[7]).space.PX_12 };
obj.emptyStateText = { color: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
const obj3 = { color: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
obj.addMembersDescription = { marginHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
let closure_11 = obj.createStyles(obj);
const obj4 = { marginHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx");

export default function AddMembersActionSheet(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const role = guild.role;
  const importDefault = role;
  const tmp = callback4();
  const tmp2 = callback(React.useState({}), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const items = [role.id];
  const callback = React.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(role.id);
  }, items);
  let obj = arg1(dependencyMap[19]);
  const guildMembers = obj.useGuildMembers(guild.id, callback);
  let obj1 = arg1(dependencyMap[22]);
  obj = { [guild.id]: Object.keys(first) };
  const subscribeGuildMembers = obj1.useSubscribeGuildMembers(obj, "AddMembersActionSheet");
  let tmp7 = 0 === Object.keys(first).length;
  if (!tmp7) {
    const _Object = Object;
    tmp7 = Object.keys(first).length > MAX_BULK_ROLE_MEMBERS_ADD;
  }
  obj = {};
  obj1 = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj1.title = intl.string(arg1(dependencyMap[15]).t.ZYOK46);
  obj1.subtitle = role.name;
  const obj2 = { size: "sm" };
  const intl2 = arg1(dependencyMap[15]).intl;
  obj2.text = intl2.string(arg1(dependencyMap[15]).t.OYkgVk);
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
  obj1.trailing = callback2(arg1(dependencyMap[25]).Button, obj2);
  obj.header = callback2(arg1(dependencyMap[24]).BottomSheetTitleHeader, obj1);
  const obj3 = { style: tmp.container };
  const obj4 = { variant: "text-sm/normal", style: tmp.addMembersDescription };
  const intl3 = arg1(dependencyMap[15]).intl;
  obj4.children = intl3.format(arg1(dependencyMap[15]).t.3OxP4q, { numMembers: MAX_BULK_ROLE_MEMBERS_ADD });
  const items1 = [callback2(arg1(dependencyMap[28]).Text, obj4), callback2(AddMembersBody, { guild, role, members: guildMembers, pendingAdditions: first, setPendingAdditions: tmp2[1], autoFocusSearch: true, maxCount: MAX_BULK_ROLE_MEMBERS_ADD, inActionSheet: true })];
  obj3.children = items1;
  obj.children = callback3(View, obj3);
  return callback2(arg1(dependencyMap[23]).BottomSheet, obj);
};
export { AddMembersBody };
