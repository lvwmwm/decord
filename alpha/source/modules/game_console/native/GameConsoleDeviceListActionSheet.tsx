// Module ID: 11987
// Function ID: 11988
// Name: GameConsoleDeviceListActionSheet
// Dependencies: [5, 32, 19, 17, 5765, 1072, 21, 5014, 575, 7292, 5634, 1113, 11988, 5717, 5624, 11989, 504, 11978, 38, 11980, 5258, 1108, 1187, 11390, 5272, 7321, 5275, 2]
// Exports: default

// Module 11987 (GameConsoleDeviceListActionSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import FastImageDefault from "FastImage" /* 5717 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7292 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 11978 */;
import AssetRegistryDefault from "AssetRegistry" /* 11988 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11989 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameConsoleStore from "GameConsoleStore" /* 5765 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, c1, c2;

let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let unpackModuleId;
function TransferFooter(arg0) {
  let Button;
  let intl;
  let obj2;
  let onPress;
  let transferring;
  ({ onPress, transferring } = arg0);
  const obj = { bottom: true, style: closure_14().footerContainer, children: unpackModuleId(Button, obj2) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj2 = { loading: transferring, disabled: transferring, onPress, text: intl.string(intl4.t.FYi3ry), grow: true };
  Button = components_Button_Button.Button;
  if (!transferring) {
    transferring = null == onPress;
  }
  intl = tmp3(1113).intl;
  return unpackModuleId(SafeAreaPaddingView, obj);
}
function DeviceOption(name) {
  let items;
  name = name.name;
  const tmp = closure_14();
  const obj = { style: tmp.deviceOption, children: items };
  const obj2 = { style: tmp.deviceIcon, source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items = [unpackModuleId(tmp2, obj2), ];
  const obj3 = { style: tmp.deviceText, color: "mobile-text-heading-primary", variant: "text-md/bold", children: name };
  items[1] = unpackModuleId(Text_Text.Text, obj3);
  return authStore2(metroImportDefault, obj);
}
function EmptyState() {
  let intl;
  let intl2;
  let items;
  const tmp = closure_14();
  const obj = { style: tmp.emptyContainer, children: items };
  const obj2 = { source: AssetRegistryDefault2, style: tmp.emptyArt };
  const tmp2 = FastImageDefault;
  items = [unpackModuleId(tmp2, obj2), , ];
  const obj3 = { style: tmp.emptyHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.OkJf1e) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = unpackModuleId(Text, obj3);
  const obj4 = { style: tmp.emptyBody, variant: "text-md/normal", color: "text-default", children: intl2.string(intl4.t["of/l5Z"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = unpackModuleId(Text2, obj4);
  return authStore2(metroImportDefault, obj);
}
let react = react_mod;
({ Pressable: metroRequire, View: metroImportDefault, ActivityIndicator: metroImportAll } = react_native);
const ComponentActions = Constants.ComponentActions;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 16, justifyContent: "center", paddingBottom: 90 }, loading: { minHeight: 56 }, footerContainer: obj2, radioItem: obj3, deviceIcon: size, deviceOption: { flexDirection: "row", alignItems: "center", marginRight: 24 }, deviceText: { flexShrink: 1 }, emptyContainer: { alignItems: "center", justifyContent: "center" }, emptyArt: { marginBottom: 16 }, emptyHeader: { marginBottom: 8, textAlign: "center" }, emptyBody: { textAlign: "center" }, infoBox: { marginTop: 8 } };
obj2 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xs, padding: 16 };
size = { marginRight: 16, width: 32, height: 32, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_14 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/game_console/native/GameConsoleDeviceListActionSheet.tsx");

export default function GameConsoleListActionSheet(arg0) {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let Text;
  let _undefined;
  let c6;
  let closure_5;
  let handleTransferVoice;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let obj10;
  let obj11;
  let obj12;
  let obj9;
  let tmp10;
  let tmp12;
  let tmp12Result;
  let tmp21;
  ({ platform: require, channel: importDefault } = arg0);
  let stateFromStores;
  let value;
  react = undefined;
  c6 = undefined;
  let obj = function _handleTransferVoice() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1(c2[18])(null != _slicedToArray, "selectedDeviceId cannot be null");
              _undefined(true);
              const tmp24 = stateFromStores[_slicedToArray];
              c1 = 1;
              const obj6 = tmp3(c2[19]);
              c2 = 1;
              const obj4 = { value: obj6.transferToPlaystationWithAlert(require, tmp24, importDefault), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            obj = c1(c2[20]);
            obj.hideActionSheet();
            const ComponentDispatch = tmp3(c2[21]).ComponentDispatch;
            ComponentDispatch.dispatch(constants.TOGGLE_CALL_CONTROL_DRAWER);
            c2 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp12) {
          c2 = 3;
          throw tmp12;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_14();
  const tmp2 = require;
  const tmp3 = stateFromStores;
  obj = require("get initialized");
  let items = [GameConsoleStore];
  stateFromStores = obj.useStateFromStores(items, () => GameConsoleStore.getDevicesForPlatform(require));
  let obj2 = require("get initialized");
  const items1 = [GameConsoleStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GameConsoleStore.getFetchingDevices(require));
  let obj3 = require("get initialized");
  const items2 = [GameConsoleStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => GameConsoleStore.getLastSelectedDeviceByPlatform(require));
  const tmp7 = value(react.useState(null), 2);
  value = tmp7[0];
  react = tmp7[1];
  [tmp10, c6] = value(react.useState(false), 2);
  const items3 = [stateFromStores, stateFromStores2];
  const tmp9 = value(react.useState(false), 2);
  const effect = react.useEffect(() => {
    const values = Object.values(stateFromStores);
    if (1 === values.length) {
      closure_5(values[0].id);
    } else if (null != stateFromStores2) {
      closure_5(tmp);
    }
  }, items3);
  const items4 = [stateFromStores];
  const memo = react.useMemo(() => {
    let items = stateFromStores;
    const _Object = Object;
    if (stateFromStores == null) {
      items = [];
    }
    const values2 = values(items);
    return values2.map((id) => {
      obj = { value: id.id, name: closure_1_11(closure_1_16, obj2) };
      return obj;
    });
  }, items4);
  if (memo.length > 0) {
    let obj4 = { children: items5 };
    let obj5 = {
      style: tmp.radioItem,
      options: memo,
      value,
      withDividers: false,
      withSpacing: true,
      disabled: tmp10,
      onChange(value) {
          value = value.value;
          closure_5(value);
          obj = GameConsoleActionCreators;
          const result = obj.persistSelectedDeviceId(require, value);
        }
    };
    items5 = [closure_11(tmp2(tmp3[22]).RadioGroup, obj5), ];
    let obj6 = { style: tmp.infoBox, children: intl.string(tmp2(tmp3[11]).t.dI4HFq) };
    const tmp19 = require("InfoBox");
    intl = tmp2(tmp3[11]).intl;
    items5[1] = closure_11(tmp19, obj6);
    tmp12Result = closure_12(closure_13, obj4);
    tmp12 = closure_11;
  } else {
    tmp12 = closure_11;
    tmp12Result = closure_11(EmptyState, {});
  }
  const obj7 = { transferring: tmp10, onPress: handleTransferVoice };
  handleTransferVoice = undefined;
  BottomSheet = tmp2(tmp3[24]).BottomSheet;
  const tmp20 = TransferFooter;
  if (null != value) {
    handleTransferVoice = function handleTransferVoice() {
      return obj(...arguments);
    };
  }
  const obj8 = { footer: tmp12(tmp20, obj7), header: tmp12(BottomSheetTitleHeader, obj9), scrollable: true, children: tmp12(BottomSheetScrollView, obj12) };
  obj9 = { title: intl2.string(tmp2(tmp3[11]).t.aUuz7W), trailing: tmp12(tmp21, obj10) };
  BottomSheetTitleHeader = tmp2(tmp3[25]).BottomSheetTitleHeader;
  intl2 = tmp2(tmp3[11]).intl;
  let tmp22 = stateFromStores1;
  tmp21 = c6;
  if (!stateFromStores1) {
    tmp22 = tmp10;
  }
  obj10 = {
    disabled: tmp22,
    onPress() {
      obj = GameConsoleActionCreators;
      return obj.fetchDevices(require);
    },
    children: tmp12(Text, obj11)
  };
  obj11 = { variant: "text-md/semibold", color: "text-brand", children: intl3.string(tmp2(tmp3[11]).t.hb12iG) };
  Text = tmp2(tmp3[14]).Text;
  intl3 = tmp2(tmp3[11]).intl;
  obj12 = { contentContainerStyle: tmp.container, children: tmp12Result };
  BottomSheetScrollView = tmp2(tmp3[26]).BottomSheetScrollView;
  if (stateFromStores1) {
    const obj13 = { style: tmp.loading };
    tmp12Result = tmp12(closure_8, obj13);
  }
  return tmp12(BottomSheet, obj8);
};
