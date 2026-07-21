// Module ID: 8413
// Function ID: 67021
// Name: _toPropertyKey
// Dependencies: []
// Exports: default

// Module 8413 (_toPropertyKey)
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
function getFullRowId(rowType) {
  return "" + rowType.rowType + ":" + rowType.id;
}
class AddMembersBody {
  constructor(arg0) {
    ({ channel, guild } = global);
    arg1 = guild;
    pendingAdditions = global.pendingAdditions;
    importDefault = pendingAdditions;
    ({ setPendingAdditions: closure_2, permission } = global);
    if (permission === undefined) {
      tmp = importAll;
      tmp2 = closure_3;
      num = 14;
      permission = importAll(closure_3[14]).NONE;
    }
    inActionSheet = global.inActionSheet;
    obj = { position: true, alignSelf: true, opacity: true, position: true, top: true, left: true };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    closure_3 = undefined;
    closure_4 = undefined;
    global = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    View = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    getQuery = function getQuery(arr) {
      let substr = arr;
      if (arg1) {
        substr = arr.slice(1);
      }
      return substr;
    };
    filterByQuery = function filterByQuery(arg0) {
      const tmp = getQuery(str.trim(), first);
      const regExp = new RegExp("" + pendingAdditions(tmp5[16]).escape(tmp), "i");
      return regExp.test(arg0);
    };
    tmp5 = closure_20();
    closure_3 = tmp5;
    tmp6 = closure_6(closure_7.useState(false), 2);
    first = tmp6[0];
    closure_4 = first;
    global = tmp6[1];
    tmp8 = closure_6(closure_7.useState(""), 2);
    str = tmp8[0];
    closure_6 = str;
    closure_7 = tmp8[1];
    obj = { isKeyboardAwareOnAndroid: !inActionSheet };
    obj3 = importAll(closure_3[14]);
    canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.ADMINISTRATOR, guild);
    obj4 = arg1(closure_3[17]);
    items = [];
    items[0] = closure_11;
    stateFromStores = obj4.useStateFromStores(items, () => sum1.getSortedRoles(guild.id));
    obj5 = arg1(closure_3[17]);
    items1 = [];
    items1[0] = closure_10;
    stateFromStoresArray = obj5.useStateFromStoresArray(items1, () => diff.getMemberIds(guild.id));
    if (first) {
      items2 = [];
    } else {
      tmp11 = importAll;
      tmp12 = closure_3;
      num2 = 18;
      obj6 = importAll(closure_3[18]);
      tmp13 = obj6;
      tmp14 = guild;
      tmp15 = stateFromStores;
      tmp16 = channel;
      tmp17 = permission;
      tmp18 = filterByQuery;
      rolesRows = obj6.getRolesRows(guild, stateFromStores, channel, permission, filterByQuery);
      tmp19 = 0 === rolesRows.length && "" === str.trim() && 1 === stateFromStores.length;
      items2 = rolesRows;
      if (tmp19) {
        tmp20 = importAll;
        tmp21 = closure_3;
        obj7 = importAll(closure_3[18]);
        items2 = obj7.getNoRolesRow();
      }
    }
    obj8 = importAll(closure_3[18]);
    membersRows = obj8.getMembersRows(stateFromStoresArray, channel, guild, permission, filterByQuery);
    sum = items2.length + membersRows.length;
    View = sum;
    items3 = [, ];
    items3[0] = sum;
    items3[1] = str;
    effect = closure_7.useEffect(() => {
      if ("" !== str) {
        const AccessibilityAnnouncer = guild(tmp5[19]).AccessibilityAnnouncer;
        const intl = guild(tmp5[20]).intl;
        const obj = { count: sum };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(guild(tmp5[20]).t.ZGVL3g, obj), "polite");
      }
    }, items3);
    items4 = [];
    if (items2.length > 0) {
      tmp24 = arg1;
      tmp25 = closure_3;
      num3 = 20;
      intl = arg1(closure_3[20]).intl;
      items5 = [];
      items5[0] = intl.string(arg1(closure_3[20]).t.LPJmL/);
      items6 = items5;
    } else {
      items6 = [];
    }
    items7 = [...items2];
    if (membersRows.length > 0) {
      tmp27 = arg1;
      tmp28 = closure_3;
      num4 = 20;
      intl2 = arg1(closure_3[20]).intl;
      items8 = [];
      items8[0] = intl2.string(arg1(closure_3[20]).t.9Oq93m);
      items9 = items8;
    } else {
      items9 = [];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(membersRows, HermesBuiltin.arraySpread(items9, tmp26));
    num5 = 0;
    if (items2.length > 0) {
      num5 = 1;
    }
    closure_9 = num5;
    diff = num5 + items2.length - 1;
    closure_10 = diff;
    sum1 = diff;
    if (membersRows.length > 0) {
      sum1 = diff + 2;
    }
    closure_11 = sum1;
    closure_12 = sum1 + membersRows.length - 1;
    obj1 = {};
    intl3 = arg1(closure_3[20]).intl;
    obj1.title = intl3.string(arg1(closure_3[20]).t.LPJmL/);
    obj1.data = items2;
    arr = items4.push(obj1);
    obj2 = {};
    intl4 = arg1(closure_3[20]).intl;
    obj2.title = intl4.string(arg1(closure_3[20]).t.9Oq93m);
    obj2.data = membersRows;
    arr1 = items4.push(obj2);
    values = Object.values(pendingAdditions);
    mapped = values.map((display) => {
      const obj = {};
      const merged = Object.assign(display.display);
      obj["id"] = display.row.id;
      return obj;
    });
    if (inActionSheet) {
      tmp35 = arg1;
      tmp36 = closure_3;
      num6 = 24;
      BottomSheetScrollView = arg1(closure_3[24]).BottomSheetScrollView;
    } else {
      BottomSheetScrollView = closure_9;
    }
    tmp37 = arg1(closure_3[25]);
    obj3 = {};
    obj4 = { style: tmp5.inputContainer };
    tmp38 = inActionSheet ? tmp37.BottomSheetFlashList : tmp37.FlashList;
    tmp39 = jsxs;
    tmp40 = Fragment;
    obj5 = {};
    tmp41 = importDefault(closure_3[26]);
    intl5 = arg1(closure_3[20]).intl;
    obj5.accessibilityLabel = intl5.string(arg1(closure_3[20]).t.5h0QOP);
    intl6 = arg1(closure_3[20]).intl;
    obj5.placeholder = intl6.string(arg1(closure_3[20]).t.TVZdKh);
    obj5.tags = mapped;
    obj5.onChangeText = function onChangeText(str) {
      str = str.trim();
      const tmp = "@" === str.charAt(0);
      const members = pendingAdditions(tmp5[27]).requestMembers(guild.id, getQuery(str, tmp), closure_15);
      callback3(str);
      callback2(tmp);
    };
    obj5.onRemove = function onRemove(arg0) {
      let closure_0 = Object.keys(pendingAdditions)[arg0];
      callback((arg0) => {
        const items = [closure_0];
        return callback(arg0, items.map(closure_21));
      });
    };
    obj4.children = jsx(tmp41, obj5);
    items10 = [, , ];
    items10[0] = jsx(View, obj4);
    if (canEveryoneRoleResult) {
      tmp42 = jsx;
      tmp43 = View;
      obj6 = {};
      obj6.style = tmp5.adminWarning;
      tmp44 = jsx;
      tmp45 = arg1;
      tmp46 = closure_3;
      num7 = 21;
      obj7 = {};
      obj7.messageType = arg1(closure_3[21]).HelpMessageTypes.WARNING;
      intl7 = arg1(closure_3[20]).intl;
      obj7.children = intl7.string(arg1(closure_3[20]).t.5f3HIC);
      obj6.children = jsx(arg1(closure_3[21]).HelpMessage, obj7);
      canEveryoneRoleResult = jsx(View, obj6);
    }
    items10[1] = canEveryoneRoleResult;
    if ("" !== str) {
      if (0 === items2.length) {
        if (0 === membersRows.length) {
          tmp49 = jsx;
          obj8 = {};
          tmp50 = obj8;
          tmp51 = merged;
          merged1 = Object.assign(merged);
          tmp53 = jsx;
          tmp54 = arg1;
          tmp55 = closure_3;
          num8 = 21;
          obj9 = {};
          num9 = 28;
          obj9.Illustration = arg1(closure_3[28]).NoResultsAlt;
          ({ emptyState: obj19.style, emptyStateText: obj19.bodyStyle } = tmp5);
          intl8 = arg1(closure_3[20]).intl;
          obj10 = {};
          obj10.query = str;
          obj9.body = intl8.format(arg1(closure_3[20]).t.ErpIY3, obj10);
          str2 = "children";
          obj8["children"] = jsx(arg1(closure_3[21]).EmptyState, obj9);
          tmp48 = jsx(BottomSheetScrollView, obj8);
        }
        items10[2] = tmp48;
        obj3.children = items10;
        return tmp39(tmp40, obj3);
      }
    }
    obj11 = {};
    merged2 = Object.assign(merged);
    obj11["extraData"] = pendingAdditions;
    obj11["data"] = items7;
    obj12 = { paddingHorizontal: importDefault(closure_3[13]).space.PX_16, paddingBottom: importDefault(closure_3[13]).space.PX_16 + importDefault(closure_3[15])(obj).insets.bottom };
    obj11["contentContainerStyle"] = obj12;
    obj11["renderItem"] = function renderRow(item) {
      item = item.item;
      const guild = item;
      const index = item.index;
      if ("string" === typeof item) {
        let obj = { style: tmp5.sectionRowWrapper, children: item };
        let tmp14Result = callback4(guild(tmp5[22]).Text, obj);
      } else {
        obj = {};
        let tmp2 = num5 === index;
        if (!tmp2) {
          tmp2 = sum1 === index;
        }
        obj.start = tmp2;
        let tmp4 = diff === index;
        if (!tmp4) {
          tmp4 = closure_12 === index;
        }
        obj.end = tmp4;
        obj.item = item;
        obj.guildId = guild.id;
        obj.onPress = function onPress() {
          function updatePendingAdditions(item) {
            if (item.rowType !== constants.EMPTY_STATE) {
              callback((self) => {
                let obj = {};
                const merged = Object.assign(self);
                const tmp2 = callback2(self);
                if (tmp2 in obj) {
                  delete r0[r1];
                } else {
                  const rowType = self.rowType;
                  if (constants.ROLE !== rowType) {
                    if (constants.ADMINISTRATOR !== rowType) {
                      if (constants.MEMBER === rowType) {
                        const user = user.getUser(self.id);
                        if (null != user) {
                          obj = { text: self.name };
                          obj = { user, guildId: self.id, avatarStyle: closure_3.tagAvatar, style: closure_3.tagAvatar };
                          obj.icon = callback(self(closure_3[21]).Avatar, obj);
                          let tmp6 = obj;
                        }
                      }
                    }
                    if (null != tmp6) {
                      const obj1 = { display: tmp6, row: self };
                      obj[tmp2] = obj1;
                    }
                  }
                  const obj2 = { text: self.name };
                  const obj3 = {};
                  const items = [closure_3.tagRoleColor, ];
                  const obj4 = { backgroundColor: self.colorString };
                  items[1] = obj4;
                  obj3.style = items;
                  obj2.icon = callback(closure_8, obj3);
                  tmp6 = obj2;
                }
                return obj;
              });
            }
          }(item);
        };
        obj.checked = callback5(item) in pendingAdditions;
        tmp14Result = callback4(guild(tmp5[23]).ChannelOverwritesCheckboxItem, obj);
        const tmp14 = callback4;
      }
      return tmp14Result;
    };
    obj11["keyboardShouldPersistTaps"] = "handled";
    tmp48 = jsx(tmp38, obj11);
    return;
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importAll(dependencyMap[3]);
({ View: closure_8, ScrollView: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
const tmp2 = arg1(dependencyMap[4]);
({ RowType: closure_14, MEMBER_REQUEST_COUNT: closure_15 } = arg1(dependencyMap[9]));
const Permissions = arg1(dependencyMap[10]).Permissions;
const tmp3 = arg1(dependencyMap[9]);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = arg1(dependencyMap[11]));
let obj = arg1(dependencyMap[12]);
obj = { container: { flex: 1 } };
obj = { alignItems: "stretch", paddingHorizontal: importDefault(dependencyMap[13]).space.PX_16, paddingTop: importDefault(dependencyMap[13]).space.PX_12 };
obj.inputContainer = obj;
obj.tagRoleColor = {};
const tmp4 = arg1(dependencyMap[11]);
obj.tagAvatar = { borderRadius: importDefault(dependencyMap[13]).radii.sm };
const obj1 = { borderRadius: importDefault(dependencyMap[13]).radii.sm };
obj.emptyState = { paddingTop: importDefault(dependencyMap[13]).space.PX_16 };
const obj2 = { paddingTop: importDefault(dependencyMap[13]).space.PX_16 };
obj.emptyStateText = { color: importDefault(dependencyMap[13]).colors.TEXT_DEFAULT };
const obj3 = { color: importDefault(dependencyMap[13]).colors.TEXT_DEFAULT };
obj.sectionRowWrapper = { paddingVertical: importDefault(dependencyMap[13]).space.PX_12 };
obj.adminWarning = {};
let closure_20 = obj.createStyles(obj);
const obj4 = { paddingVertical: importDefault(dependencyMap[13]).space.PX_12 };
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/channel_permissions/native/action_sheets/AddMembersActionSheet.tsx");

export default function AddMembersActionSheet(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  function _handleAddPressed() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handleAddPressed = obj;
    return obj(...arguments);
  }
  const tmp2 = callback(React.useState({}), 2);
  const first = tmp2[0];
  importDefault = first;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    return guild.getGuild(guildId);
  });
  const tmp5 = importDefault(dependencyMap[29])(channel, true);
  let str = "";
  if (null != tmp5) {
    str = tmp5;
  }
  if (null == stateFromStores) {
    return null;
  } else {
    const _Object = Object;
    const tmp15 = 0 === Object.keys(first).length;
    obj = {};
    obj = {};
    const intl3 = arg1(dependencyMap[20]).intl;
    obj.title = intl3.string(arg1(dependencyMap[20]).t.dMJ3Y6);
    obj.subtitle = str;
    if (channel.canSkip) {
      if (tmp15) {
        const obj1 = { size: "sm" };
        const intl2 = arg1(dependencyMap[20]).intl;
        obj1.text = intl2.string(arg1(dependencyMap[20]).t.5Wxrcd);
        obj1.onPress = function onPress() {
          first(closure_3[33]).hideActionSheet();
        };
        obj1.variant = "secondary";
        let obj4 = obj1;
      }
      obj.trailing = tmp20(tmp21, obj4);
      obj.header = tmp19(arg1(dependencyMap[35]).BottomSheetTitleHeader, obj);
      const obj2 = { style: tmp.container };
      const obj3 = { channel, guild: stateFromStores, permission: channel.accessPermissions, pendingAdditions: first, setPendingAdditions: tmp2[1], inActionSheet: true };
      obj2.children = callback2(AddMembersBody, obj3);
      obj.children = callback2(closure_8, obj2);
      return tmp16(arg1(dependencyMap[34]).BottomSheet, obj);
    }
    obj4 = { size: "sm" };
    const intl = arg1(dependencyMap[20]).intl;
    obj4.text = intl.string(arg1(dependencyMap[20]).t.OYkgVk);
    obj4.onPress = function handleAddPressed() {
      return _handleAddPressed(...arguments);
    };
    let str3 = "primary";
    if (tmp15) {
      str3 = "secondary";
    }
    obj4.variant = str3;
    obj4.disabled = tmp15;
    const tmp16 = callback2;
    const tmp19 = callback2;
    const tmp20 = callback2;
  }
};
export { AddMembersBody };
