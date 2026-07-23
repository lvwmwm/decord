// Module ID: 14992
// Function ID: 114217
// Name: GuildThemeNuxActionSheet
// Dependencies: [5, 57, 31, 27, 3947, 4016, 1345, 33, 3, 4130, 689, 14993, 4062, 566, 4098, 1212, 5187, 14994, 4126, 7519, 7518, 1273, 4543, 2]
// Exports: default

// Module 14992 (GuildThemeNuxActionSheet)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import importDefaultResult from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
importDefaultResult = new importDefaultResult("GuildThemeNuxActionSheet");
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: 0 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.description = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.options = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.warning = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj4 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.footer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("result").fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxActionSheet.tsx");

export default function GuildThemeNuxActionSheet(guildId) {
  let _isNativeReflectConstruct;
  let _slicedToArray;
  let tmp5;
  let tmp7;
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = callback2(React.useState(guildId(14993).getInitialGuildThemeNuxSelection), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  [tmp5, _isNativeReflectConstruct] = callback2(React.useState(null), 2);
  const tmp4 = callback2(React.useState(null), 2);
  [tmp7, _slicedToArray] = callback2(React.useState(false), 2);
  React = React.useRef(false);
  const tmp8 = first === guildId(4062).GuildThemeSourcePreference.PERSONAL;
  const View = tmp8;
  let obj = guildId(566);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getGuildId());
  let obj1 = guildId(566);
  const items1 = [callback1];
  const items2 = [guildId];
  const items3 = [guildId, stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const guildThemeSnapshot = callback1.getGuildThemeSnapshot(guildId);
    let tmp2 = null;
    if (null != guildThemeSnapshot) {
      tmp2 = null;
      if (guildThemeSnapshot.enabled) {
        const themeSettings = guildThemeSnapshot.themeSettings;
        tmp2 = null;
        if (null != themeSettings) {
          tmp2 = themeSettings;
        }
      }
    }
    return tmp2;
  }, items2);
  const effect = React.useEffect(() => {
    if (stateFromStores !== guildId) {
      markAsDismissed(4098).hideActionSheet("GuildThemeNuxActionSheet");
      const obj = markAsDismissed(4098);
    }
  }, items3);
  const items4 = [markAsDismissed];
  const fn = (arg0) => {
    if (!ref.current) {
      ref.current = true;
      markAsDismissed(arg0);
    }
  };
  const callback = React.useCallback((arg0) => {
    callback(null);
    dependencyMap(arg0);
  }, []);
  callback1 = React.useCallback(fn, items4);
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [guildId, tmp8, markAsDismissed, stateFromStores];
  const items6 = [callback1];
  callback2 = React.useCallback(callback(fn), items5);
  const callback3 = React.useCallback(() => {
    callback1(outer1_9.USER_DISMISS);
  }, items6);
  const intl = guildId(1212).intl;
  const string = intl.string;
  const t = guildId(1212).t;
  if (tmp8) {
    let stringResult = string(t.cvoikF);
  } else {
    stringResult = string(t["cY+Oob"]);
  }
  obj = { startExpanded: true };
  const intl2 = guildId(1212).intl;
  obj.dismissAccessibilityLabel = intl2.string(guildId(1212).t.cpT0Cq);
  obj.onDismiss = callback3;
  obj.contentStyles = tmp.container;
  const items7 = [callback3(markAsDismissed(14994), { themeSettings: stateFromStores1, isPersonal: tmp8 }), , , , , , ];
  obj = { accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title };
  const intl3 = guildId(1212).intl;
  obj.children = intl3.string(guildId(1212).t.Q9zFy9);
  items7[1] = callback3(guildId(4126).Text, obj);
  obj1 = { variant: "text-md/normal", color: "text-default", style: tmp.description };
  const intl4 = guildId(1212).intl;
  obj1.children = intl4.string(guildId(1212).t.XLpBLj);
  items7[2] = callback3(guildId(4126).Text, obj1);
  const obj2 = { style: tmp.options };
  const obj3 = { hasIcons: false, value: first, onChange: callback };
  const obj4 = {};
  const intl5 = guildId(1212).intl;
  obj4.label = intl5.string(guildId(1212).t.aN3RNQ);
  obj4.value = guildId(4062).GuildThemeSourcePreference.GUILD;
  const items8 = [callback3(guildId(7518).TableRadioRow, obj4), ];
  const obj5 = {};
  const intl6 = guildId(1212).intl;
  obj5.label = intl6.string(guildId(1212).t.js8y7t);
  obj5.value = guildId(4062).GuildThemeSourcePreference.PERSONAL;
  items8[1] = callback3(guildId(7518).TableRadioRow, obj5);
  obj3.children = items8;
  obj2.children = callback4(guildId(7519).TableRadioGroup, obj3);
  items7[3] = callback3(View, obj2);
  let tmp18 = null;
  if (tmp8) {
    const obj6 = { style: tmp.warning };
    const obj7 = { messageType: guildId(1273).HelpMessageTypes.WARNING, borderRadius: markAsDismissed(689).radii.md };
    const intl7 = guildId(1212).intl;
    obj7.children = intl7.string(guildId(1212).t.tTHQAy);
    obj6.children = callback3(guildId(1273).HelpMessage, obj7);
    tmp18 = callback3(View, obj6);
  }
  items7[4] = tmp18;
  let tmp24 = null;
  if (null != tmp5) {
    const obj8 = { style: tmp.warning };
    const obj9 = { messageType: guildId(1273).HelpMessageTypes.ERROR, borderRadius: markAsDismissed(689).radii.md, children: tmp5 };
    obj8.children = callback3(guildId(1273).HelpMessage, obj9);
    tmp24 = callback3(View, obj8);
  }
  items7[5] = tmp24;
  const obj10 = { style: tmp.footer };
  const obj11 = { text: stringResult };
  let str = "primary";
  if (tmp8) {
    str = "secondary";
  }
  obj11.variant = str;
  obj11.loading = tmp7;
  obj11.disabled = tmp7;
  obj11.onPress = callback2;
  obj10.children = callback3(guildId(4543).Button, obj11);
  items7[6] = callback3(View, obj10);
  obj.children = items7;
  return callback4(guildId(5187).BottomSheet, obj);
};
export const GUILD_THEME_NUX_ACTION_SHEET_KEY = "GuildThemeNuxActionSheet";
