// Module ID: 15300
// Function ID: 116677
// Name: MembersFilterActionSheet
// Dependencies: [31, 27, 4122, 1910, 8439, 33, 4130, 689, 566, 8438, 4098, 7518, 1273, 4126, 5500, 5186, 1212, 5189, 2]
// Exports: default

// Module 15300 (MembersFilterActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginVertical: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden" };
_createForOfIteratorHelperLoose.listView = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.roleDot = { marginEnd: 4 };
_createForOfIteratorHelperLoose.labelContainer = { flexDirection: "row" };
_createForOfIteratorHelperLoose.label = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/native/MembersFilterActionSheet.tsx");

export default function MembersFilterActionSheet(onFilterRoleId) {
  let require;
  let selectedRoleId;
  ({ guild: require, selectedRoleId } = onFilterRoleId);
  if (selectedRoleId === undefined) {
    selectedRoleId = props.getProps().selectedRoleId;
  }
  onFilterRoleId = onFilterRoleId.onFilterRoleId;
  let React;
  let callback;
  let stateFromStores1;
  const tmp2 = _createForOfIteratorHelperLoose();
  React = tmp2;
  let obj = require(onFilterRoleId[8]);
  let items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getSortedRoles(id.id));
  const mapped = stateFromStores.map((id) => {
    const merged = Object.assign(id);
    return { value: id.id };
  });
  mapped.unshift(mapped.splice(mapped.length - 1, 1)[0]);
  let items1 = [onFilterRoleId, selectedRoleId];
  callback = React.useCallback((roleId) => {
    let obj = roleId;
    if (roleId !== selectedRoleId) {
      if (null != onFilterRoleId) {
        onFilterRoleId(obj);
      } else {
        const role = selectedRoleId(onFilterRoleId[9]).selectRole(obj);
        const obj2 = selectedRoleId(onFilterRoleId[9]);
      }
      obj = selectedRoleId(onFilterRoleId[10]);
      obj.hideActionSheet("MembersFilter");
    }
  }, items1);
  let obj1 = require(onFilterRoleId[8]);
  const items2 = [stateFromStores1];
  stateFromStores1 = obj1.useStateFromStores(items2, () => stateFromStores1.roleStyle);
  const items3 = [callback, stateFromStores1, selectedRoleId, tmp2];
  const callback1 = React.useCallback((item) => {
    item = item.item;
    let obj = { value: item.id };
    obj = { style: _undefined.labelContainer };
    let tmp4 = "dot" === stateFromStores1;
    if (tmp4) {
      tmp4 = null != item.colorString;
    }
    if (tmp4) {
      obj = { containerStyles: _undefined.roleDot };
      ({ colorString: obj3.color, colorStrings: obj3.colors } = item);
      tmp4 = outer1_8(outer1_0(onFilterRoleId[12]).RoleDot, obj);
    }
    const items = [tmp4, ];
    const obj1 = { variant: "text-md/medium" };
    const items1 = [_undefined.label, ];
    let tmp11 = null;
    if (null != item.colorString) {
      tmp11 = null;
      if ("username" === stateFromStores1) {
        const obj2 = { color: item.colorString };
        tmp11 = obj2;
      }
    }
    items1[1] = tmp11;
    obj1.style = items1;
    obj1.children = item.name;
    items[1] = outer1_8(outer1_0(onFilterRoleId[13]).Text, obj1);
    obj.children = items;
    obj.label = outer1_9(callback, obj);
    obj.legacyCompat_onPress = function legacyCompat_onPress() {
      return outer1_4(item.id);
    };
    obj.legacyCompat_selected = item.id === selectedRoleId;
    return outer1_8(outer1_0(onFilterRoleId[11]).TableRadioRow, obj);
  }, items3);
  obj = { scrollable: true };
  obj = {};
  const intl = require(onFilterRoleId[16]).intl;
  obj.title = intl.string(require(onFilterRoleId[16]).t.pEasFX);
  obj.header = callback(require(onFilterRoleId[15]).BottomSheetTitleHeader, obj);
  obj1 = {
    data: mapped,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: callback1,
    contentContainerStyle: tmp2.listView,
    initialNumToRender: 10,
    removeClippedSubviews: false
  };
  obj.children = callback(require(onFilterRoleId[17]).BottomSheetFlatList, obj1);
  return callback(require(onFilterRoleId[14]).ActionSheet, obj);
};
