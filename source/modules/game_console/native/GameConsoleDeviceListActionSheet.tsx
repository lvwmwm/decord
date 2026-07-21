// Module ID: 9040
// Function ID: 71002
// Name: TransferFooter
// Dependencies: []
// Exports: default

// Module 9040 (TransferFooter)
function TransferFooter(arg0) {
  let onPress;
  let transferring;
  ({ onPress, transferring } = arg0);
  let obj = { bottom: true, style: callback4().footerContainer };
  obj = { loading: transferring };
  if (!transferring) {
    transferring = null == onPress;
  }
  obj.disabled = transferring;
  obj.onPress = onPress;
  const intl = arg1(dependencyMap[11]).intl;
  obj.text = intl.string(arg1(dependencyMap[11]).t.FYi3ry);
  obj.grow = true;
  obj.children = closure_12(arg1(dependencyMap[10]).Button, obj);
  return closure_12(arg1(dependencyMap[9]).SafeAreaPaddingView, obj);
}
function DeviceOption(children) {
  const tmp = callback4();
  let obj = { style: tmp.deviceOption };
  obj = { style: tmp.deviceIcon, source: importDefault(dependencyMap[12]) };
  const items = [callback2(closure_8, obj), ];
  obj = { style: tmp.deviceText, children: children.name };
  items[1] = callback2(arg1(dependencyMap[13]).Text, obj);
  obj.children = items;
  return callback3(closure_7, obj);
}
function EmptyState() {
  const tmp = callback4();
  let obj = { style: tmp.emptyContainer };
  obj = { source: importDefault(dependencyMap[14]), style: tmp.emptyArt };
  const items = [callback2(closure_8, obj), , ];
  obj = { "Null": "781324642736144424", "Null": null, "Null": "Cheerful Choco preens against window", style: tmp.emptyHeader };
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = intl.string(arg1(dependencyMap[11]).t.OkJf1e);
  items[1] = callback2(arg1(dependencyMap[13]).Text, obj);
  const obj1 = { "Null": "absolute", "Null": 0, "Null": "center", style: tmp.emptyBody };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[11]).t.of/l5Z);
  items[2] = callback2(arg1(dependencyMap[13]).Text, obj1);
  obj.children = items;
  return callback3(closure_7, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ Pressable: closure_6, View: closure_7, Image: closure_8, ActivityIndicator: closure_9 } = arg1(dependencyMap[3]));
let closure_10 = importDefault(dependencyMap[4]);
const ComponentActions = arg1(dependencyMap[5]).ComponentActions;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { container: { "Null": "RTC_CONNECTION_LOSS_RATE", "Null": "handleJoinThreadVoice", "Null": "toString" }, loading: { minHeight: 56 } };
obj = { "Bool(false)": "\u{1F469}\u{1F3FD}\u200D\u{1F9B1}", "Bool(false)": true, "Bool(false)": null, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.footerContainer = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.radioItem = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.xs, padding: 16 };
const obj2 = { fontSize: true, marginBottom: true, fontFamily: true, tintColor: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.deviceIcon = obj2;
obj.deviceOption = { "Bool(true)": "2bprXx", "Bool(true)": "isArray", "Bool(true)": "PurchaseTypeToAnalyticsPaymentType" };
obj.deviceText = { flexShrink: 1 };
obj.emptyContainer = {};
obj.emptyArt = { marginBottom: 16 };
obj.emptyHeader = { "Null": null, "Null": null };
obj.emptyBody = { textAlign: "center" };
obj.infoBox = { marginTop: 8 };
let closure_15 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.xs, padding: 16 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/game_console/native/GameConsoleDeviceListActionSheet.tsx");

export default function GameConsoleListActionSheet(arg0) {
  let tmp8;
  ({ platform: closure_0, channel: closure_1 } = arg0);
  let dependencyMap;
  let callback;
  let closure_6;
  function _handleTransferVoice() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = stateFromStores2(tmp);
    const _handleTransferVoice = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  let obj = arg1(dependencyMap[15]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => store.getDevicesForPlatform(closure_0));
  dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[15]);
  const items1 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => store.getFetchingDevices(closure_0));
  let obj2 = arg1(dependencyMap[15]);
  const items2 = [closure_10];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => store.getLastSelectedDeviceByPlatform(closure_0));
  let closure_3 = stateFromStores2;
  const tmp5 = callback(React.useState(null), 2);
  const first = tmp5[0];
  callback = first;
  const React = tmp5[1];
  [tmp8, closure_6] = callback(React.useState(false), 2);
  const items3 = [stateFromStores, stateFromStores2];
  const effect = React.useEffect(() => {
    const values = Object.values(stateFromStores);
    if (1 === values.length) {
      callback2(values[0].id);
    } else if (null != stateFromStores2) {
      callback2(stateFromStores2);
    }
  }, items3);
  const items4 = [stateFromStores];
  const memo = React.useMemo(() => {
    const values = Object.values(null != stateFromStores ? stateFromStores : []);
    return values.map((id) => {
      let obj = { value: id.id, name: callback(closure_17, obj) };
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
          callback2(value);
          const result = callback(stateFromStores[16]).persistSelectedDeviceId(callback, value);
        }
    };
    const items5 = [callback2(arg1(dependencyMap[21]).RadioGroup, obj), ];
    obj1 = { style: tmp.infoBox };
    const intl = arg1(dependencyMap[11]).intl;
    obj1.children = intl.string(arg1(dependencyMap[11]).t.dI4HFq);
    items5[1] = callback2(importDefault(dependencyMap[22]), obj1);
    obj.children = items5;
    let tmp12 = callback3(closure_14, obj);
    const tmp20 = importDefault(dependencyMap[22]);
  } else {
    tmp12 = callback2(EmptyState, {});
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
  obj2.footer = callback2(TransferFooter, obj3);
  const obj4 = {};
  const intl2 = arg1(dependencyMap[11]).intl;
  obj4.title = intl2.string(arg1(dependencyMap[11]).t.aUuz7W);
  const obj5 = {};
  let tmp27 = stateFromStores1;
  if (!stateFromStores1) {
    tmp27 = tmp8;
  }
  obj5.disabled = tmp27;
  obj5.onPress = function onPress() {
    return callback(stateFromStores[16]).fetchDevices(callback);
  };
  const obj6 = {};
  const intl3 = arg1(dependencyMap[11]).intl;
  obj6.children = intl3.string(arg1(dependencyMap[11]).t.hb12iG);
  obj5.children = callback2(arg1(dependencyMap[13]).Text, obj6);
  obj4.trailing = callback2(closure_6, obj5);
  obj2.header = callback2(arg1(dependencyMap[24]).BottomSheetTitleHeader, obj4);
  obj2.scrollable = true;
  const obj7 = { contentContainerStyle: tmp.container };
  if (stateFromStores1) {
    const obj8 = { style: tmp.loading };
    tmp12 = callback2(closure_9, obj8);
  }
  obj7.children = tmp12;
  obj2.children = callback2(arg1(dependencyMap[25]).BottomSheetScrollView, obj7);
  return callback2(arg1(dependencyMap[23]).BottomSheet, obj2);
};
