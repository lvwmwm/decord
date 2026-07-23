// Module ID: 8435
// Function ID: 67189
// Name: _toPropertyKey
// Dependencies: [29, 57, 31, 27, 1917, 1910, 1849, 7485, 482, 33, 4130, 689, 3763, 5160, 566, 4118, 8413, 1273, 1212, 8421, 3843, 5189, 8425, 5047, 4126, 8430, 2]
// Exports: default

// Module 8435 (_toPropertyKey)
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import RowType from "RowType";
import { Permissions } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_7;
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
function getFullRowId(rowType) {
  return "" + rowType.rowType + ":" + rowType.id;
}
({ View: closure_7, ScrollView: closure_8, SectionList: closure_9 } = get_ActivityIndicator);
({ RowType: closure_13, MEMBER_REQUEST_COUNT: closure_14 } = RowType);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.inputContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.inputDescContainer = { flexDirection: "row", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.inputDescText = { flex: 1, textAlign: "center" };
let obj2 = { height: 12, width: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.tagRoleColor = obj2;
let obj3 = { width: 16, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.tagAvatar = obj3;
_createForOfIteratorHelperLoose.emptyState = { backgroundColor: "transparent", paddingTop: 40 };
let obj1 = { flexDirection: "row", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.emptyStateText = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let obj4 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.sectionRowWrapper = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.adminWarning = { marginHorizontal: 16, marginVertical: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("result").fileFinishedImporting("modules/stage_channels/native/create_channel/AddMembersBody.tsx");

export default function AddMembersBody(pendingAdditions) {
  let channel;
  let guild;
  let importAll;
  let inActionSheet;
  let inputDesc;
  let permission;
  ({ channel, guild } = pendingAdditions);
  pendingAdditions = pendingAdditions.pendingAdditions;
  ({ setPendingAdditions: importAll, permission } = pendingAdditions);
  if (permission === undefined) {
    permission = importAll(3763).NONE;
  }
  ({ inputDesc, inActionSheet } = pendingAdditions);
  let dependencyMap;
  let first;
  let callback;
  let str;
  let closure_7;
  let c8;
  function getQuery(arr) {
    let substr = arr;
    if (arg1) {
      substr = arr.slice(1);
    }
    return substr;
  }
  function filterByQuery(arg0) {
    const tmp = getQuery(str.trim(), first);
    const regExp = new RegExp("" + pendingAdditions(_undefined[15]).escape(tmp), "i");
    return regExp.test(arg0);
  }
  const tmp3 = _createForOfIteratorHelperLoose();
  dependencyMap = tmp3;
  let obj = { isKeyboardAwareOnAndroid: !inActionSheet };
  let obj1 = guild(566);
  let items = [closure_11];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_11.getSortedRoles(guild.id));
  let tmp4 = callback(str.useState(false), 2);
  first = tmp4[0];
  callback = tmp4[1];
  const tmp6 = callback(str.useState(""), 2);
  str = tmp6[0];
  closure_7 = tmp6[1];
  let obj2 = importAll(3763);
  let canEveryoneRoleResult = obj2.canEveryoneRole(Permissions.ADMINISTRATOR, guild);
  let obj3 = guild(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => outer1_10.getMemberIds(guild.id));
  if (first) {
    let items2 = [];
  } else {
    let obj4 = importAll(8413);
    const rolesRowsWithPermissionDisabled = obj4.getRolesRowsWithPermissionDisabled(guild, stateFromStores, channel, permission, filterByQuery);
    items2 = rolesRowsWithPermissionDisabled;
    if (tmp17) {
      let obj5 = importAll(8413);
      items2 = obj5.getNoRolesRow();
    }
    tmp17 = 0 === rolesRowsWithPermissionDisabled.length && "" === str.trim() && 1 === stateFromStores.length;
  }
  let obj6 = importAll(8413);
  const membersRows = obj6.getMembersRows(stateFromStoresArray, channel, guild, permission, filterByQuery);
  const items3 = [];
  obj = {};
  let intl = guild(1212).intl;
  obj.title = intl.string(guild(1212).t["LPJmL/"]);
  obj.data = items2;
  items3.push(obj);
  obj = {};
  let intl2 = guild(1212).intl;
  obj.title = intl2.string(guild(1212).t["9Oq93m"]);
  obj.data = membersRows;
  items3.push(obj);
  const values = Object.values(pendingAdditions);
  const sum = items2.length + membersRows.length;
  c8 = sum;
  const items4 = [sum, str];
  const mapped = values.map((display) => {
    const obj = {};
    const merged = Object.assign(display.display);
    obj["id"] = display.row.id;
    return obj;
  });
  const effect = str.useEffect(() => {
    if ("" !== str) {
      const AccessibilityAnnouncer = guild(_undefined[20]).AccessibilityAnnouncer;
      const intl = guild(_undefined[18]).intl;
      const obj = { count: c8 };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(guild(_undefined[18]).t.ZGVL3g, obj), "polite");
    }
  }, items4);
  if (inActionSheet) {
    let BottomSheetScrollView = guild(5189).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = c8;
  }
  if (inActionSheet) {
    let BottomSheetSectionList = guild(5189).BottomSheetSectionList;
  } else {
    BottomSheetSectionList = getQuery;
  }
  obj1 = {};
  obj2 = { style: tmp3.inputContainer };
  obj3 = {};
  const intl3 = guild(1212).intl;
  obj3.placeholder = intl3.string(guild(1212).t.TVZdKh);
  obj3.tags = mapped;
  obj3.onChangeText = function onChangeText(str) {
    str = str.trim();
    const tmp = "@" === str.charAt(0);
    const members = pendingAdditions(_undefined[23]).requestMembers(guild.id, getQuery(str, tmp), outer1_14);
    callback3(str);
    callback2(tmp);
  };
  obj3.onRemove = function onRemove(arg0) {
    let closure_0 = Object.keys(pendingAdditions)[arg0];
    callback((arg0) => {
      const items = [closure_0];
      return first(arg0, items.map(outer2_20));
    });
  };
  obj3.autoFocus = true;
  obj2.children = callback2(pendingAdditions(8425), obj3);
  const items5 = [callback2(closure_7, obj2), , , ];
  let tmp32 = null;
  if (null != inputDesc) {
    obj4 = { style: tmp3.inputDescContainer };
    obj5 = { style: tmp3.inputDescText, variant: "text-xs/medium", color: "text-default", children: inputDesc };
    obj4.children = callback2(guild(4126).Text, obj5);
    tmp32 = callback2(closure_7, obj4);
  }
  items5[1] = tmp32;
  if (canEveryoneRoleResult) {
    obj6 = { style: tmp3.adminWarning };
    const obj7 = { messageType: guild(1273).HelpMessageTypes.WARNING };
    const intl4 = guild(1212).intl;
    obj7.children = intl4.string(guild(1212).t["5f3HIC"]);
    obj6.children = callback2(guild(1273).HelpMessage, obj7);
    canEveryoneRoleResult = callback2(closure_7, obj6);
  }
  items5[2] = canEveryoneRoleResult;
  if ("" !== str) {
    if (0 === items2.length) {
      if (0 === membersRows.length) {
        const obj8 = {};
        const obj9 = { Illustration: guild(8430).NoResultsAlt };
        ({ emptyState: obj20.style, emptyStateText: obj20.bodyStyle } = tmp3);
        const intl5 = guild(1212).intl;
        const obj10 = { query: str };
        obj9.body = intl5.format(guild(1212).t.ErpIY3, obj10);
        obj8.children = callback2(guild(1273).EmptyState, obj9);
        let tmp41 = callback2(BottomSheetScrollView, obj8);
      }
      items5[3] = tmp41;
      obj1.children = items5;
      return tmp29(tmp30, obj1);
    }
  }
  const obj11 = {};
  tmp29 = closure_18;
  tmp30 = closure_17;
  const tmp31 = pendingAdditions(8425);
  obj11.contentContainerStyle = { paddingHorizontal: pendingAdditions(689).space.PX_16, paddingBottom: pendingAdditions(689).space.PX_16 + pendingAdditions(5160)(obj).insets.bottom };
  obj11.renderItem = function renderItem(item) {
    let index;
    let section;
    item = item.item;
    ({ index, section } = item);
    let obj = {};
    let tmp = 0 === index;
    if (tmp) {
      const intl = guild(_undefined[18]).intl;
      tmp = section.title === intl.string(guild(_undefined[18]).t["LPJmL/"]);
    }
    obj.start = tmp;
    obj.end = index === section.data.length - 1;
    obj.guildId = item.id;
    obj.item = item;
    obj.disabled = item.disabled;
    let stringResult = null;
    if (item.disabled) {
      const intl2 = guild(_undefined[18]).intl;
      stringResult = intl2.string(guild(_undefined[18]).t.MVVOCv);
    }
    obj.subLabel = stringResult;
    obj.onPress = function onPress() {
      (function handleUpdatePendingAdditions(item) {
        let closure_0 = item;
        if (item.rowType !== outer3_13.EMPTY_STATE) {
          outer2_2((arg0) => {
            let obj = {};
            const merged = Object.assign(arg0);
            const tmp4 = outer4_21(item);
            if (tmp4 in obj) {
              delete tmp[tmp2];
            } else {
              const rowType = item.rowType;
              if (outer4_13.ROLE !== rowType) {
                if (outer4_13.ADMINISTRATOR !== rowType) {
                  if (outer4_13.MEMBER === rowType) {
                    const user = outer4_12.getUser(item.id);
                    if (null != user) {
                      obj = { text: item.name };
                      obj = { user, guildId: item.id, avatarStyle: outer3_3.tagAvatar, style: outer3_3.tagAvatar };
                      obj.icon = outer4_16(guild(table[17]).Avatar, obj);
                      let tmp8 = obj;
                    }
                  }
                }
                if (null != tmp8) {
                  const obj1 = { display: tmp8, row: item };
                  obj[tmp4] = obj1;
                }
              }
              const obj2 = { text: item.name };
              const obj3 = {};
              const items = [outer3_3.tagRoleColor, ];
              const obj4 = { backgroundColor: item.colorString };
              items[1] = obj4;
              obj3.style = items;
              obj2.icon = outer4_16(closure_7, obj3);
              tmp8 = obj2;
            }
            return obj;
          });
        }
      })(item);
    };
    if (!item.disabled) {
      if (item.rowType !== outer1_13.EMPTY_STATE) {
        obj = {};
        let merged = Object.assign(obj);
        obj["checked"] = outer1_21(item) in pendingAdditions;
        let tmp16 = outer1_16(guild(_undefined[19]).ChannelOverwritesCheckboxItem, obj);
      }
      return tmp16;
    }
    obj = {};
    const merged1 = Object.assign(obj);
    tmp16 = outer1_16(pendingAdditions(_undefined[19]), obj);
  };
  obj11.renderSectionHeader = function renderSectionHeader(section) {
    let tmp2 = null;
    if (section.section.data.length > 0) {
      const obj = { style: _undefined.sectionRowWrapper, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: tmp };
      tmp2 = outer1_16(guild(_undefined[24]).Text, obj);
    }
    return tmp2;
  };
  obj11.sections = items3;
  obj11.keyboardShouldPersistTaps = "always";
  tmp41 = callback2(BottomSheetSectionList, obj11);
};
