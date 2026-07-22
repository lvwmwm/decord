// Module ID: 8429
// Function ID: 67152
// Name: _toPropertyKey
// Dependencies: []
// Exports: default

// Module 8429 (_toPropertyKey)
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
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
({ View: closure_7, ScrollView: closure_8, SectionList: closure_9 } = arg1(dependencyMap[3]));
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[3]);
({ RowType: closure_13, MEMBER_REQUEST_COUNT: closure_14 } = arg1(dependencyMap[7]));
const Permissions = arg1(dependencyMap[8]).Permissions;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingTop: importDefault(dependencyMap[11]).space.PX_12 };
obj.inputContainer = obj;
const tmp4 = arg1(dependencyMap[9]);
obj.inputDescContainer = { flexDirection: "row", paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingTop: importDefault(dependencyMap[11]).space.PX_12 };
obj.inputDescText = { ref: "<string:3942646034>", handleDisabled: "<string:3355444267>" };
const obj2 = { hideWhenScrolling: null, autoCapitalize: null, borderRadius: importDefault(dependencyMap[11]).radii.round };
obj.tagRoleColor = obj2;
const obj3 = { "Null": null, "Null": null, borderRadius: importDefault(dependencyMap[11]).radii.sm };
obj.tagAvatar = obj3;
obj.emptyState = {};
const obj1 = { flexDirection: "row", paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingTop: importDefault(dependencyMap[11]).space.PX_12 };
obj.emptyStateText = { color: importDefault(dependencyMap[11]).colors.TEXT_DEFAULT };
const obj4 = { color: importDefault(dependencyMap[11]).colors.TEXT_DEFAULT };
obj.sectionRowWrapper = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW, paddingVertical: importDefault(dependencyMap[11]).space.PX_12 };
obj.adminWarning = {};
let closure_19 = obj.createStyles(obj);
const obj5 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW, paddingVertical: importDefault(dependencyMap[11]).space.PX_12 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/stage_channels/native/create_channel/AddMembersBody.tsx");

export default function AddMembersBody(pendingAdditions) {
  let channel;
  let guild;
  let inActionSheet;
  let inputDesc;
  let permission;
  ({ channel, guild } = pendingAdditions);
  const arg1 = guild;
  pendingAdditions = pendingAdditions.pendingAdditions;
  const importDefault = pendingAdditions;
  ({ setPendingAdditions: closure_2, permission } = pendingAdditions);
  if (permission === undefined) {
    permission = importAll(dependencyMap[12]).NONE;
  }
  ({ inputDesc, inActionSheet } = pendingAdditions);
  let dependencyMap;
  let closure_4;
  let callback;
  let React;
  let closure_7;
  let sum;
  function getQuery(arr) {
    let substr = arr;
    if (arg1) {
      substr = arr.slice(1);
    }
    return substr;
  }
  function filterByQuery(arg0) {
    const tmp = getQuery(str.trim(), first);
    const regExp = new RegExp("" + pendingAdditions(tmp3[15]).escape(tmp), "i");
    return regExp.test(arg0);
  }
  const tmp3 = callback3();
  dependencyMap = tmp3;
  let obj = { isKeyboardAwareOnAndroid: !inActionSheet };
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_11];
  const stateFromStores = obj1.useStateFromStores(items, () => sortedRoles.getSortedRoles(guild.id));
  const tmp4 = callback(React.useState(false), 2);
  const first = tmp4[0];
  closure_4 = first;
  callback = tmp4[1];
  const tmp6 = callback(React.useState(""), 2);
  React = str;
  closure_7 = tmp6[1];
  let obj2 = importAll(dependencyMap[12]);
  let canEveryoneRoleResult = obj2.canEveryoneRole(Permissions.ADMINISTRATOR, guild);
  let obj3 = arg1(dependencyMap[14]);
  const items1 = [closure_10];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => memberIds.getMemberIds(guild.id));
  if (first) {
    let items2 = [];
  } else {
    let obj4 = importAll(dependencyMap[16]);
    const rolesRowsWithPermissionDisabled = obj4.getRolesRowsWithPermissionDisabled(guild, stateFromStores, channel, permission, filterByQuery);
    items2 = rolesRowsWithPermissionDisabled;
    if (tmp17) {
      let obj5 = importAll(dependencyMap[16]);
      items2 = obj5.getNoRolesRow();
    }
    const tmp17 = 0 === rolesRowsWithPermissionDisabled.length && "" === str.trim() && 1 === stateFromStores.length;
  }
  let obj6 = importAll(dependencyMap[16]);
  const membersRows = obj6.getMembersRows(stateFromStoresArray, channel, guild, permission, filterByQuery);
  const items3 = [];
  obj = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj.title = intl.string(arg1(dependencyMap[18]).t.LPJmL/);
  obj.data = items2;
  items3.push(obj);
  obj = {};
  const intl2 = arg1(dependencyMap[18]).intl;
  obj.title = intl2.string(arg1(dependencyMap[18]).t.9Oq93m);
  obj.data = membersRows;
  items3.push(obj);
  const values = Object.values(pendingAdditions);
  sum = items2.length + membersRows.length;
  const items4 = [sum, tmp6[0]];
  const mapped = values.map((display) => {
    const obj = {};
    const merged = Object.assign(display.display);
    obj["id"] = display.row.id;
    return obj;
  });
  const effect = React.useEffect(() => {
    if ("" !== str) {
      const AccessibilityAnnouncer = guild(tmp3[20]).AccessibilityAnnouncer;
      const intl = guild(tmp3[18]).intl;
      const obj = { count: sum };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(guild(sum[18]).t.ZGVL3g, obj), "polite");
    }
  }, items4);
  if (inActionSheet) {
    let BottomSheetScrollView = arg1(dependencyMap[21]).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = sum;
  }
  if (inActionSheet) {
    let BottomSheetSectionList = arg1(dependencyMap[21]).BottomSheetSectionList;
  } else {
    BottomSheetSectionList = getQuery;
  }
  obj1 = {};
  obj2 = { style: tmp3.inputContainer };
  obj3 = {};
  const intl3 = arg1(dependencyMap[18]).intl;
  obj3.placeholder = intl3.string(arg1(dependencyMap[18]).t.TVZdKh);
  obj3.tags = mapped;
  obj3.onChangeText = function onChangeText(str) {
    str = str.trim();
    const tmp = "@" === str.charAt(0);
    const members = pendingAdditions(tmp3[23]).requestMembers(guild.id, getQuery(str, tmp), closure_14);
    const obj = pendingAdditions(tmp3[23]);
    callback2(tmp);
  };
  obj3.onRemove = function onRemove(arg0) {
    let closure_0 = Object.keys(pendingAdditions)[arg0];
    callback((arg0) => {
      const items = [closure_0];
      return callback(arg0, items.map(closure_20));
    });
  };
  obj3.autoFocus = true;
  obj2.children = callback2(importDefault(dependencyMap[22]), obj3);
  const items5 = [callback2(closure_7, obj2), , , ];
  let tmp32 = null;
  if (null != inputDesc) {
    obj4 = { style: tmp3.inputDescContainer };
    obj5 = { "Null": "useCallback", "Null": "marginBottom", alignItems: "createStyles", style: tmp3.inputDescText, children: inputDesc };
    obj4.children = callback2(arg1(dependencyMap[24]).Text, obj5);
    tmp32 = callback2(closure_7, obj4);
  }
  items5[1] = tmp32;
  if (canEveryoneRoleResult) {
    obj6 = { style: tmp3.adminWarning };
    const obj7 = { messageType: arg1(dependencyMap[17]).HelpMessageTypes.WARNING };
    const intl4 = arg1(dependencyMap[18]).intl;
    obj7.children = intl4.string(arg1(dependencyMap[18]).t.5f3HIC);
    obj6.children = callback2(arg1(dependencyMap[17]).HelpMessage, obj7);
    canEveryoneRoleResult = callback2(closure_7, obj6);
  }
  items5[2] = canEveryoneRoleResult;
  if ("" !== tmp6[0]) {
    if (0 === items2.length) {
      if (0 === membersRows.length) {
        const obj8 = {};
        const obj9 = { Illustration: arg1(dependencyMap[25]).NoResultsAlt };
        ({ emptyState: obj20.style, emptyStateText: obj20.bodyStyle } = tmp3);
        const intl5 = arg1(dependencyMap[18]).intl;
        const obj10 = { query: str };
        obj9.body = intl5.format(arg1(dependencyMap[18]).t.ErpIY3, obj10);
        obj8.children = callback2(arg1(dependencyMap[17]).EmptyState, obj9);
        let tmp41 = callback2(BottomSheetScrollView, obj8);
      }
      items5[3] = tmp41;
      obj1.children = items5;
      return tmp29(tmp30, obj1);
    }
  }
  const obj11 = {};
  const tmp29 = closure_18;
  const tmp30 = closure_17;
  const tmp31 = importDefault(dependencyMap[22]);
  obj11.contentContainerStyle = { paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingBottom: importDefault(dependencyMap[11]).space.PX_16 + importDefault(dependencyMap[13])(obj).insets.bottom };
  obj11.renderItem = function renderItem(item) {
    let index;
    let section;
    item = item.item;
    const guild = item;
    ({ index, section } = item);
    let obj = {};
    let tmp = 0 === index;
    if (tmp) {
      const intl = guild(tmp3[18]).intl;
      tmp = section.title === intl.string(guild(tmp3[18]).t.LPJmL/);
    }
    obj.start = tmp;
    obj.end = index === section.data.length - 1;
    obj.guildId = guild.id;
    obj.item = item;
    obj.disabled = item.disabled;
    let stringResult = null;
    if (item.disabled) {
      const intl2 = guild(tmp3[18]).intl;
      stringResult = intl2.string(guild(tmp3[18]).t.MVVOCv);
    }
    obj.subLabel = stringResult;
    obj.onPress = function onPress() {
      function handleUpdatePendingAdditions(item) {
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
                      obj.icon = callback(self(closure_3[17]).Avatar, obj);
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
              obj2.icon = callback(closure_7, obj3);
              tmp6 = obj2;
            }
            return obj;
          });
        }
      }(item);
    };
    if (!item.disabled) {
      if (item.rowType !== constants.EMPTY_STATE) {
        obj = {};
        const merged = Object.assign(obj);
        obj["checked"] = callback5(item) in pendingAdditions;
        let tmp16 = callback4(guild(tmp3[19]).ChannelOverwritesCheckboxItem, obj);
      }
      return tmp16;
    }
    obj = {};
    const merged1 = Object.assign(obj);
    tmp16 = callback4(pendingAdditions(tmp3[19]), obj);
  };
  obj11.renderSectionHeader = function renderSectionHeader(section) {
    let tmp2 = null;
    if (section.section.data.length > 0) {
      const obj = { style: callback4.sectionRowWrapper, children: tmp };
      tmp2 = callback4(guild(tmp3[24]).Text, obj);
    }
    return tmp2;
  };
  obj11.sections = items3;
  obj11.keyboardShouldPersistTaps = "always";
  tmp41 = callback2(BottomSheetSectionList, obj11);
};
