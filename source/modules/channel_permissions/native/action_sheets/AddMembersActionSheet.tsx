// Module ID: 8464
// Function ID: 67309
// Name: _toPropertyKey
// Dependencies: [5, 29, 57, 31, 27, 1917, 1910, 1838, 1849, 7565, 482, 33, 4130, 689, 3763, 5160, 4118, 566, 8457, 3843, 1212, 1273, 4126, 8465, 5189, 7527, 8469, 5047, 8474, 4320, 4312, 8458, 3830, 4098, 5187, 5186, 4543, 2]
// Exports: default

// Module 8464 (_toPropertyKey)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import computeDefaultGroupDmNameFromUserIds from "computeDefaultGroupDmNameFromUserIds";
import _slicedToArray from "_slicedToArray";
import _updatePermission from "_updatePermission";
import get_ActivityIndicator from "requestMembersDebounced";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import RowType from "RowType";
import { Permissions } from "sum";
import jsxProd from "showActionSheet";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
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
class AddMembersBody {
  constructor(arg0) {
    ({ channel, guild } = global);
    pendingAdditions = global.pendingAdditions;
    ({ setPendingAdditions, permission } = global);
    if (permission === undefined) {
      tmp = setPendingAdditions;
      tmp2 = c3;
      num = 14;
      permission = require("calculateElevatedPermissions").NONE;
    }
    inActionSheet = global.inActionSheet;
    obj = { channel: 0, guild: 0, pendingAdditions: 0, setPendingAdditions: 0, permission: 0, inActionSheet: 0 };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    c3 = undefined;
    c4 = undefined;
    computeDefaultGroupDmNameFromUserIds = undefined;
    c6 = undefined;
    useState = undefined;
    length = undefined;
    c9 = undefined;
    length = undefined;
    c11 = undefined;
    length = undefined;
    getQuery = function getQuery(arr) {
      let substr = arr;
      if (arg1) {
        substr = arr.slice(1);
      }
      return substr;
    };
    filterByQuery = function filterByQuery(arg0) {
      const tmp = getQuery(str.trim(), first);
      const regExp = new RegExp("" + pendingAdditions(_undefined[16]).escape(tmp), "i");
      return regExp.test(arg0);
    };
    tmp5 = c20();
    c3 = tmp5;
    tmp6 = c6(useState.useState(false), 2);
    first = tmp6[0];
    c4 = first;
    computeDefaultGroupDmNameFromUserIds = tmp6[1];
    tmp8 = c6(useState.useState(""), 2);
    str = tmp8[0];
    c6 = str;
    useState = tmp8[1];
    obj = { isKeyboardAwareOnAndroid: !inActionSheet };
    obj3 = require("calculateElevatedPermissions");
    canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.ADMINISTRATOR, guild);
    obj4 = require("initialize");
    items = [];
    items[0] = c11;
    stateFromStores = obj4.useStateFromStores(items, () => sum1.getSortedRoles(guild.id));
    obj5 = require("initialize");
    items1 = [];
    items1[0] = length;
    stateFromStoresArray = obj5.useStateFromStoresArray(items1, () => _undefined2.getMemberIds(guild.id));
    if (first) {
      items2 = [];
    } else {
      tmp11 = setPendingAdditions;
      tmp12 = c3;
      num2 = 18;
      obj6 = require("isAdmin");
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
        tmp20 = setPendingAdditions;
        tmp21 = c3;
        obj7 = require("isAdmin");
        items2 = obj7.getNoRolesRow();
      }
    }
    obj8 = require("isAdmin");
    membersRows = obj8.getMembersRows(stateFromStoresArray, channel, guild, permission, filterByQuery);
    sum = items2.length + membersRows.length;
    length = sum;
    items3 = [, ];
    items3[0] = sum;
    items3[1] = str;
    effect = useState.useEffect(() => {
      if ("" !== str) {
        const AccessibilityAnnouncer = guild(_undefined[19]).AccessibilityAnnouncer;
        const intl = guild(_undefined[20]).intl;
        const obj = { count: c8 };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(guild(_undefined[20]).t.ZGVL3g, obj), "polite");
      }
    }, items3);
    items4 = [];
    if (items2.length > 0) {
      tmp24 = guild;
      tmp25 = c3;
      num3 = 20;
      intl = require("getSystemLocale").intl;
      items5 = [];
      items5[0] = intl.string(require("getSystemLocale").t["LPJmL/"]);
      items6 = items5;
    } else {
      items6 = [];
    }
    items7 = [...items2];
    if (membersRows.length > 0) {
      tmp27 = guild;
      tmp28 = c3;
      num4 = 20;
      intl2 = require("getSystemLocale").intl;
      items8 = [];
      items8[0] = intl2.string(require("getSystemLocale").t["9Oq93m"]);
      items9 = items8;
    } else {
      items9 = [];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(membersRows, HermesBuiltin.arraySpread(items9, tmp26));
    num5 = 0;
    if (items2.length > 0) {
      num5 = 1;
    }
    c9 = num5;
    diff = num5 + items2.length - 1;
    length = diff;
    sum1 = diff;
    if (membersRows.length > 0) {
      sum1 = diff + 2;
    }
    c11 = sum1;
    length = sum1 + membersRows.length - 1;
    obj1 = {};
    intl3 = require("getSystemLocale").intl;
    obj1.title = intl3.string(require("getSystemLocale").t["LPJmL/"]);
    obj1.data = items2;
    arr = items4.push(obj1);
    obj2 = {};
    intl4 = require("getSystemLocale").intl;
    obj2.title = intl4.string(require("getSystemLocale").t["9Oq93m"]);
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
      tmp35 = guild;
      tmp36 = c3;
      num6 = 24;
      BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
    } else {
      BottomSheetScrollView = c9;
    }
    tmp37 = require("defaultMVCPConfig");
    obj3 = {};
    obj4 = { style: tmp5.inputContainer };
    tmp38 = inActionSheet ? tmp37.BottomSheetFlashList : tmp37.FlashList;
    tmp39 = jsxs;
    tmp40 = Fragment;
    obj5 = {};
    tmp41 = require("module_8469");
    intl5 = require("getSystemLocale").intl;
    obj5.accessibilityLabel = intl5.string(require("getSystemLocale").t["5h0QOP"]);
    intl6 = require("getSystemLocale").intl;
    obj5.placeholder = intl6.string(require("getSystemLocale").t.TVZdKh);
    obj5.tags = mapped;
    obj5.onChangeText = function onChangeText(str) {
      str = str.trim();
      const tmp = "@" === str.charAt(0);
      const members = pendingAdditions(_undefined[27]).requestMembers(guild.id, getQuery(str, tmp), outer1_15);
      callback3(str);
      callback2(tmp);
    };
    obj5.onRemove = function onRemove(arg0) {
      let closure_0 = Object.keys(pendingAdditions)[arg0];
      callback((arg0) => {
        const items = [closure_0];
        return callback(arg0, items.map(outer2_21));
      });
    };
    obj4.children = jsx(tmp41, obj5);
    items10 = [, , ];
    items10[0] = jsx(length, obj4);
    if (canEveryoneRoleResult) {
      tmp42 = jsx;
      tmp43 = length;
      obj6 = {};
      obj6.style = tmp5.adminWarning;
      tmp44 = jsx;
      tmp45 = guild;
      tmp46 = c3;
      num7 = 21;
      obj7 = {};
      obj7.messageType = require("Button").HelpMessageTypes.WARNING;
      intl7 = require("getSystemLocale").intl;
      obj7.children = intl7.string(require("getSystemLocale").t["5f3HIC"]);
      obj6.children = jsx(require("Button").HelpMessage, obj7);
      canEveryoneRoleResult = jsx(length, obj6);
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
          tmp54 = guild;
          tmp55 = c3;
          num8 = 21;
          obj9 = {};
          num9 = 28;
          obj9.Illustration = require("getNoResultsAltSource").NoResultsAlt;
          ({ emptyState: obj19.style, emptyStateText: obj19.bodyStyle } = tmp5);
          intl8 = require("getSystemLocale").intl;
          obj10 = {};
          obj10.query = str;
          obj9.body = intl8.format(require("getSystemLocale").t.ErpIY3, obj10);
          str2 = "children";
          obj8["children"] = jsx(require("Button").EmptyState, obj9);
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
    obj12 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 + require("useSafeAreaInsetsKeyboardAware")(obj).insets.bottom };
    obj11["contentContainerStyle"] = obj12;
    obj11["renderItem"] = function renderRow(item) {
      item = item.item;
      const index = item.index;
      if ("string" === typeof item) {
        let obj = { style: null, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default" };
        let items = [_undefined.sectionRowWrapper, ];
        if (0 === index) {
          obj = { paddingTop: 0 };
        } else {
          obj = {};
        }
        items[1] = obj;
        obj.style = items;
        obj.children = item;
        outer1_17(guild(_undefined[22]).Text, obj);
        const tmp9 = outer1_17;
      } else {
        let obj1 = {};
        let tmp2 = num5 === index;
        if (!tmp2) {
          tmp2 = sum1 === index;
        }
        obj1.start = tmp2;
        let tmp4 = c10 === index;
        if (!tmp4) {
          tmp4 = closure_12 === index;
        }
        obj1.end = tmp4;
        obj1.item = item;
        obj1.guildId = item.id;
        obj1.onPress = function onPress() {
          (function updatePendingAdditions(item) {
            let closure_0 = item;
            if (item.rowType !== outer3_14.EMPTY_STATE) {
              outer2_2((arg0) => {
                let obj = {};
                const merged = Object.assign(arg0);
                const tmp4 = outer4_22(item);
                if (tmp4 in obj) {
                  delete tmp[tmp2];
                } else {
                  const rowType = item.rowType;
                  if (outer4_14.ROLE !== rowType) {
                    if (outer4_14.ADMINISTRATOR !== rowType) {
                      if (outer4_14.MEMBER === rowType) {
                        const user = getQuery.getUser(item.id);
                        if (null != user) {
                          obj = { text: item.name };
                          obj = { user, guildId: item.id, avatarStyle: outer3_3.tagAvatar, style: outer3_3.tagAvatar };
                          obj.icon = outer4_17(guild(table[21]).Avatar, obj);
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
                  obj2.icon = outer4_17(c8, obj3);
                  tmp8 = obj2;
                }
                return obj;
              });
            }
          })(item);
        };
        obj1.checked = outer1_22(item) in pendingAdditions;
        return outer1_17(guild(_undefined[23]).ChannelOverwritesCheckboxItem, obj1);
      }
    };
    obj11["keyboardShouldPersistTaps"] = "handled";
    tmp48 = jsx(tmp38, obj11);
    return;
  }
}
({ View: closure_8, ScrollView: closure_9 } = get_ActivityIndicator);
({ RowType: closure_14, MEMBER_REQUEST_COUNT: closure_15 } = RowType);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1 } };
_createForOfIteratorHelperLoose = { alignItems: "stretch", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.inputContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.tagRoleColor = { height: 12, width: 12, borderRadius: 6 };
let obj1 = { width: 16, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.tagAvatar = obj1;
_createForOfIteratorHelperLoose.emptyState = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.emptyStateText = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.sectionRowWrapper = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.adminWarning = { marginHorizontal: 16, marginVertical: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("_slicedToArray").fileFinishedImporting("modules/channel_permissions/native/action_sheets/AddMembersActionSheet.tsx");

export default function AddMembersActionSheet(channel) {
  channel = channel.channel;
  let first;
  function _handleAddPressed() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_4(tmp);
    return obj(...arguments);
  }
  const tmp2 = callback(React.useState({}), 2);
  first = tmp2[0];
  let obj = channel(566);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    return outer1_12.getGuild(guildId);
  });
  const tmp5 = first(4320)(channel, true);
  let str = "";
  if (null != tmp5) {
    str = tmp5;
  }
  if (null == stateFromStores) {
    return null;
  } else {
    const _Object = Object;
    const tmp15 = 0 === Object.keys(first).length;
    obj = { scrollable: true, header: null, startExpanded: true };
    obj = {};
    const intl3 = channel(1212).intl;
    obj.title = intl3.string(channel(1212).t.dMJ3Y6);
    obj.subtitle = str;
    if (channel.canSkip) {
      if (tmp15) {
        const obj1 = { size: "sm" };
        const intl2 = channel(1212).intl;
        obj1.text = intl2.string(channel(1212).t["5Wxrcd"]);
        obj1.onPress = function onPress() {
          first(outer1_3[33]).hideActionSheet();
        };
        obj1.variant = "secondary";
        let obj4 = obj1;
      }
      obj.trailing = tmp20(tmp21, obj4);
      obj.header = tmp19(channel(5186).BottomSheetTitleHeader, obj);
      const obj2 = { style: tmp.container };
      const obj3 = { channel, guild: stateFromStores, permission: channel.accessPermissions, pendingAdditions: first, setPendingAdditions: tmp2[1], inActionSheet: true };
      obj2.children = callback2(AddMembersBody, obj3);
      obj.children = callback2(closure_8, obj2);
      return tmp16(channel(5187).BottomSheet, obj);
    }
    obj4 = { size: "sm" };
    const intl = channel(1212).intl;
    obj4.text = intl.string(channel(1212).t.OYkgVk);
    obj4.onPress = function handleAddPressed() {
      return _handleAddPressed(...arguments);
    };
    let str3 = "primary";
    if (tmp15) {
      str3 = "secondary";
    }
    obj4.variant = str3;
    obj4.disabled = tmp15;
    tmp16 = callback2;
    tmp19 = callback2;
    tmp20 = callback2;
  }
};
export { AddMembersBody };
