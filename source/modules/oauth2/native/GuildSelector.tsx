// Module ID: 9018
// Function ID: 70944
// Name: styles
// Dependencies: [31, 27, 653, 33, 4130, 689, 4098, 8382, 1934, 1212, 483, 4126, 1273, 7495, 2]
// Exports: default

// Module 9018 (styles)
import result from "result";
import { View } from "get ActivityIndicator";
import { Permissions } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { selectorGroup: { display: "flex", flexDirection: "column", gap: 8 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.select = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.label = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontWeight: "500" };
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontWeight: "500" };
_createForOfIteratorHelperLoose.error = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
const result = require("ME").fileFinishedImporting("modules/oauth2/native/GuildSelector.tsx");

export default function GuildSelector(onGuildChange) {
  let error;
  let selectedGuildId;
  ({ error, selectedGuildId } = onGuildChange);
  onGuildChange = onGuildChange.onGuildChange;
  const guilds = onGuildChange.guilds;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [guilds, onGuildChange, selectedGuildId];
  const callback = React.useCallback(() => {
    let obj = onGuildChange(outer1_3[6]);
    obj = {};
    const intl = selectedGuildId(outer1_3[9]).intl;
    obj.title = intl.string(selectedGuildId(outer1_3[9]).t.oM4E1A);
    const found = guilds.filter((permissions) => guilds(outer2_3[10]).has(permissions.permissions, outer2_6.MANAGE_GUILD));
    obj.items = found.map((label) => ({ label: label.name, value: label.id }));
    obj.onItemSelect = function onItemSelect(arg0) {
      outer1_1(arg0);
      onGuildChange(outer2_3[6]).hideActionSheet("GuildSelector");
    };
    let tmp2;
    if (null != selectedGuildId) {
      tmp2 = selectedGuildId;
    }
    obj.selectedItem = tmp2;
    obj.hasIcons = false;
    obj.openLazy(selectedGuildId(outer1_3[8])(outer1_3[7], outer1_3.paths), "GuildSelector", obj);
  }, items);
  let found = guilds.find((id) => id.id === selectedGuildId);
  let obj = { style: tmp.selectorGroup };
  obj = { variant: "eyebrow", color: "text-default" };
  let intl = selectedGuildId(1212).intl;
  obj.children = intl.string(selectedGuildId(1212).t["1DXFFd"]);
  const items1 = [callback(selectedGuildId(4126).Text, obj), , , ];
  let tmp6 = null;
  if (null != error) {
    tmp6 = null;
    if ("" !== error) {
      obj = { style: tmp.error, children: error };
      tmp6 = callback(selectedGuildId(1273).LegacyText, obj);
    }
  }
  items1[1] = tmp6;
  const obj1 = {};
  let name;
  if (null != found) {
    name = found.name;
  }
  if (null == name) {
    const intl2 = selectedGuildId(1212).intl;
    name = intl2.string(selectedGuildId(1212).t.oM4E1A);
  }
  obj1.label = name;
  obj1.disabled = onGuildChange.disabled;
  obj1.trailing = callback(selectedGuildId(7495).FormRow.Arrow, {});
  obj1.DEPRECATED_style = tmp.select;
  obj1.onPress = callback;
  items1[2] = callback(selectedGuildId(7495).FormRow, obj1);
  const obj2 = { style: tmp.label };
  const intl3 = selectedGuildId(1212).intl;
  obj2.children = intl3.format(selectedGuildId(1212).t.t9Jm9o, {});
  items1[3] = callback(selectedGuildId(1273).LegacyText, obj2);
  obj.children = items1;
  return closure_8(View, obj);
};
export const useStyles = _createForOfIteratorHelperLoose;
