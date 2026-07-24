// Module ID: 9087
// Function ID: 71282
// Name: TransferFooter
// Dependencies: [5, 57, 31, 27, 4144, 653, 33, 4130, 689, 5121, 4543, 1212, 9088, 4126, 9089, 566, 9079, 44, 9086, 4098, 1207, 1273, 8258, 5187, 5186, 5189, 2]
// Exports: default

// Module 9087 (TransferFooter)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ComponentActions } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function TransferFooter(arg0) {
  let onPress;
  let transferring;
  ({ onPress, transferring } = arg0);
  let obj = { bottom: true, style: _createForOfIteratorHelperLoose().footerContainer };
  obj = { loading: transferring };
  if (!transferring) {
    transferring = null == onPress;
  }
  obj.disabled = transferring;
  obj.onPress = onPress;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.FYi3ry);
  obj.grow = true;
  obj.children = closure_12(require(4543) /* Button */.Button, obj);
  return closure_12(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
}
function DeviceOption(name) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.deviceOption };
  obj = { style: tmp.deviceIcon, source: importDefault(9088) };
  const items = [callback(closure_8, obj), ];
  obj = { style: tmp.deviceText, color: "mobile-text-heading-primary", variant: "text-md/bold", children: name.name };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(closure_7, obj);
}
function EmptyState() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.emptyContainer };
  obj = { source: importDefault(9089), style: tmp.emptyArt };
  const items = [callback(closure_8, obj), , ];
  obj = { style: tmp.emptyHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.OkJf1e);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = { style: tmp.emptyBody, variant: "text-md/normal", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t["of/l5Z"]);
  items[2] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  return callback2(closure_7, obj);
}
({ Pressable: closure_6, View: closure_7, Image: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 16, justifyContent: "center", paddingBottom: 90 }, loading: { minHeight: 56 } };
_createForOfIteratorHelperLoose = { padding: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, paddingBottom: 16 };
_createForOfIteratorHelperLoose.footerContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.radioItem = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, padding: 16 };
let obj2 = { marginRight: 16, width: 32, height: 32, tintColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.deviceIcon = obj2;
_createForOfIteratorHelperLoose.deviceOption = { flexDirection: "row", alignItems: "center", marginRight: 24 };
_createForOfIteratorHelperLoose.deviceText = { flexShrink: 1 };
_createForOfIteratorHelperLoose.emptyContainer = { alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.emptyArt = { marginBottom: 16 };
_createForOfIteratorHelperLoose.emptyHeader = { marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.emptyBody = { textAlign: "center" };
_createForOfIteratorHelperLoose.infoBox = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, padding: 16 };
let result = require("result").fileFinishedImporting("modules/game_console/native/GameConsoleDeviceListActionSheet.tsx");

export default function GameConsoleListActionSheet(arg0) {
  let c6;
  let importDefault;
  let require;
  let tmp8;
  ({ platform: require, channel: importDefault } = arg0);
  let stateFromStores;
  let first;
  c6 = undefined;
  function _handleTransferVoice() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = stateFromStores2(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(stateFromStores[15]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_10.getDevicesForPlatform(closure_0));
  let obj1 = require(stateFromStores[15]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_10.getFetchingDevices(closure_0));
  let obj2 = require(stateFromStores[15]);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_10.getLastSelectedDeviceByPlatform(closure_0));
  const tmp5 = first(React.useState(null), 2);
  first = tmp5[0];
  React = tmp5[1];
  [tmp8, c6] = first(React.useState(false), 2);
  const items3 = [stateFromStores, stateFromStores2];
  const effect = React.useEffect(() => {
    const values = Object.values(stateFromStores);
    if (1 === values.length) {
      callback(values[0].id);
    } else if (null != stateFromStores2) {
      callback(stateFromStores2);
    }
  }, items3);
  const items4 = [stateFromStores];
  const memo = React.useMemo(() => {
    const values = Object.values(null != stateFromStores ? stateFromStores : []);
    return values.map((id) => {
      obj = { value: id.id, name: outer2_12(outer2_17, obj) };
      obj = { name: id.name, platform: id.platform };
      return obj;
    });
  }, items4);
  if (memo.length > 0) {
    obj = {};
    obj = {
      style: tmp.radioItem,
      options: memo,
      value: first,
      withDividers: false,
      withSpacing: true,
      disabled: tmp8,
      onChange(value) {
          value = value.value;
          callback(value);
          const result = outer1_0(stateFromStores[16]).persistSelectedDeviceId(closure_0, value);
        }
    };
    const items5 = [callback(require(stateFromStores[21]).RadioGroup, obj), ];
    obj1 = { style: tmp.infoBox };
    const intl = require(stateFromStores[11]).intl;
    obj1.children = intl.string(require(stateFromStores[11]).t.dI4HFq);
    items5[1] = callback(importDefault(stateFromStores[22]), obj1);
    obj.children = items5;
    let tmp12 = callback2(closure_14, obj);
    const tmp20 = importDefault(stateFromStores[22]);
  } else {
    tmp12 = callback(EmptyState, {});
  }
  obj2 = {};
  const obj3 = { transferring: tmp8 };
  let handleTransferVoice;
  if (null != first) {
    handleTransferVoice = function handleTransferVoice() {
      return _handleTransferVoice(...arguments);
    };
  }
  obj3.onPress = handleTransferVoice;
  obj2.footer = callback(TransferFooter, obj3);
  const obj4 = {};
  const intl2 = require(stateFromStores[11]).intl;
  obj4.title = intl2.string(require(stateFromStores[11]).t.aUuz7W);
  const obj5 = {};
  let tmp27 = stateFromStores1;
  if (!stateFromStores1) {
    tmp27 = tmp8;
  }
  obj5.disabled = tmp27;
  obj5.onPress = function onPress() {
    return outer1_0(stateFromStores[16]).fetchDevices(closure_0);
  };
  const obj6 = { variant: "text-md/semibold", color: "text-brand" };
  const intl3 = require(stateFromStores[11]).intl;
  obj6.children = intl3.string(require(stateFromStores[11]).t.hb12iG);
  obj5.children = callback(require(stateFromStores[13]).Text, obj6);
  obj4.trailing = callback(c6, obj5);
  obj2.header = callback(require(stateFromStores[24]).BottomSheetTitleHeader, obj4);
  obj2.scrollable = true;
  const obj7 = { contentContainerStyle: tmp.container };
  if (stateFromStores1) {
    const obj8 = { style: tmp.loading };
    tmp12 = callback(closure_9, obj8);
  }
  obj7.children = tmp12;
  obj2.children = callback(require(stateFromStores[25]).BottomSheetScrollView, obj7);
  return callback(require(stateFromStores[23]).BottomSheet, obj2);
};
