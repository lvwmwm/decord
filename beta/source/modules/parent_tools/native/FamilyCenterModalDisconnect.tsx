// Module ID: 14457
// Function ID: 14458
// Name: FamilyCenterModalDisconnect
// Dependencies: [32, 19, 17, 21, 4836, 576, 5039, 4678, 8105, 4527, 1115, 11395, 11398, 2487, 7870, 7871, 14458, 6413, 4832, 14410, 5279, 8732, 11405, 5745, 5281, 5936, 10769, 2]
// Exports: default

// Module 14457 (FamilyCenterModalDisconnect)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl14 from "intl" /* 1115 */;
import _modDef2487 from "module_2487" /* 2487 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import AssetRegistryDefault from "AssetRegistry" /* 6413 */;
import FamilyCenterAvatarPairDefault from "FamilyCenterAvatarPair" /* 14458 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function FamilyCenterModalDisconnectScreen(otherUser) {
  let _undefined;
  let _undefined2;
  let c1;
  let c2;
  let intl11;
  let intl12;
  let intl13;
  let items3;
  let items5;
  let items7;
  let obj14;
  let tmp11;
  let tmp9;
  otherUser = otherUser.otherUser;
  importDefault = undefined;
  dependencyMap = undefined;
  let disconnectLinkRequest;
  let isDisconnectLoading;
  let tmp = closure_8();
  const callback = isDisconnectLoading.useCallback(() => {
    const arr = _undefined(c2[6]);
    arr.pop();
  }, []);
  const obj = UserUtilsDefault;
  const name = obj.useName(otherUser);
  const obj2 = otherUser(8105);
  const requiresParentalConsent = obj2.useRequiresParentalConsent(otherUser.id);
  [tmp9, c1] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  [tmp11, c2] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const callback1 = isDisconnectLoading.useCallback(() => {
    const presentFailedToast = ToastUtils.presentFailedToast;
    ToastUtils;
    const intl = intl14.intl;
    presentFailedToast(intl.string(intl14.t.R0RpRX));
    _undefined(false);
    c2(false);
  }, []);
  const obj3 = otherUser(11395);
  const familyCenterActions = obj3.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  const useAgeSpecificText = otherUser(11398).useAgeSpecificText;
  otherUser(11398);
  let intl = otherUser(1115).intl;
  const formatResult = intl.format(_modDef2487.F2lccv, { username: name });
  const intl2 = otherUser(1115).intl;
  const ageSpecificText = useAgeSpecificText(formatResult, intl2.string(_modDef2487["WH+Gba"]));
  const useAgeSpecificText2 = otherUser(11398).useAgeSpecificText;
  otherUser(11398);
  const intl3 = otherUser(1115).intl;
  const stringResult = intl3.string(_modDef2487.hOEHFn);
  const intl4 = otherUser(1115).intl;
  const ageSpecificText2 = useAgeSpecificText2(stringResult, intl4.format(_modDef2487.Or6hgl, { username: name }));
  const useAgeSpecificText3 = otherUser(11398).useAgeSpecificText;
  otherUser(11398);
  const intl5 = otherUser(1115).intl;
  const formatResult1 = intl5.format(_modDef2487.XyRW4c, { username: name });
  const intl6 = otherUser(1115).intl;
  const ageSpecificText3 = useAgeSpecificText3(formatResult1, intl6.format(_modDef2487.PlrZal, { username: name }));
  const useAgeSpecificText4 = otherUser(11398).useAgeSpecificText;
  otherUser(11398);
  const intl7 = otherUser(1115).intl;
  const stringResult1 = intl7.string(_modDef2487.eiABQz);
  const intl8 = otherUser(1115).intl;
  const ageSpecificText4 = useAgeSpecificText4(stringResult1, intl8.string(_modDef2487.PGQBnk));
  const useAgeSpecificText5 = otherUser(11398).useAgeSpecificText;
  otherUser(11398);
  const intl9 = otherUser(1115).intl;
  const stringResult2 = intl9.string(_modDef2487.sCbKs4);
  const intl10 = otherUser(1115).intl;
  const items = [disconnectLinkRequest, otherUser.id];
  const ageSpecificText5 = useAgeSpecificText5(stringResult2, intl10.string(_modDef2487["0ki7+P"]));
  const items1 = [isDisconnectLoading];
  const callback2 = isDisconnectLoading.useCallback(() => {
    disconnectLinkRequest(otherUser.id);
  }, items);
  const items2 = [isDisconnectLoading];
  const callback3 = isDisconnectLoading.useCallback((arg0) => {
    const tmp = isDisconnectLoading;
    if (!tmp) {
      _undefined(arg0);
    }
  }, items1);
  const callback4 = isDisconnectLoading.useCallback((arg0) => {
    const tmp = isDisconnectLoading;
    if (!tmp) {
      c2(arg0);
    }
  }, items2);
  const ModalScreen = otherUser(7870).ModalScreen;
  const obj4 = { style: tmp.header, children: items3 };
  const ModalContent = otherUser(7871).ModalContent;
  const obj5 = { otherUser, iconSrc: AssetRegistryDefault };
  const tmp34 = FamilyCenterAvatarPairDefault;
  items3 = [closure_6(tmp34, obj5), , ];
  const obj6 = { style: tmp.title, variant: "text-lg/bold", children: intl11.format(_modDef2487.o0JXuK, { username: name }) };
  const Text = otherUser(4832).Text;
  intl11 = otherUser(1115).intl;
  items3[1] = closure_6(Text, obj6);
  const obj7 = { style: tmp.subtitle, variant: "text-sm/bold", color: "text-default", children: ageSpecificText };
  items3[2] = closure_6(otherUser(4832).Text, obj7);
  const items4 = [closure_7(View, obj4), , , ];
  let tmp33Result = requiresParentalConsent;
  if (tmp33Result) {
    const obj8 = { style: tmp.warning, text: ageSpecificText2 };
    tmp33Result = tmp33(tmp3(14410), obj8);
  }
  const obj9 = { children: items4 };
  items4[1] = tmp33Result;
  const obj10 = { style: tmp.body, variant: "text-md/normal", color: "text-default", children: ageSpecificText3 };
  items4[2] = closure_6(otherUser(4832).Text, obj10);
  const obj11 = { spacing: nativeDefault.space.PX_12, children: items5 };
  const Stack = tmp6(5279).Stack;
  items5 = [closure_6(otherUser(8732).Checkbox, { label: ageSpecificText4, checked: tmp9, onToggle: callback3 }), closure_6(otherUser(8732).Checkbox, { label: ageSpecificText5, checked: tmp11, onToggle: callback4 })];
  items4[3] = closure_7(Stack, obj11);
  const items6 = [closure_7(ModalContent, obj9), ];
  const ModalFooter = tmp6(11405).ModalFooter;
  const ButtonGroup = tmp6(5745).ButtonGroup;
  let tmp36 = !tmp9;
  const Button = tmp6(5281).Button;
  if (tmp9) {
    tmp36 = !tmp11;
  }
  if (!tmp36) {
    tmp36 = isDisconnectLoading;
  }
  const obj12 = { children: items6 };
  const obj13 = { children: closure_7(ButtonGroup, obj14) };
  obj14 = { children: items7 };
  const obj15 = { variant: "destructive", disabled: tmp36, loading: isDisconnectLoading, text: intl12.string(_modDef2487["c5L+sl"]), onPress: callback2 };
  intl12 = tmp6(1115).intl;
  items7 = [closure_6(Button, obj15), ];
  const obj16 = { variant: "tertiary", text: intl13.string(otherUser(1115).t["3ilveh"]), onPress: ModalActionCreatorsDefault.pop };
  const Button2 = tmp6(5281).Button;
  intl13 = tmp6(1115).intl;
  items7[1] = closure_6(Button2, obj16);
  items6[1] = closure_6(ModalFooter, obj13);
  return closure_7(ModalScreen, obj12);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, title: obj3, subtitle: obj4, warning: obj5, body: obj6 };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj4 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj5 = { marginBottom: nativeDefault.space.PX_12 };
obj6 = { marginBottom: nativeDefault.space.PX_24 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDisconnect.tsx");

export default function FamilyCenterModalDisconnect(otherUser) {
  let intl;
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    let closure_0 = otherUser;
    let obj = { DISCONNECT: obj2 };
    obj2 = {
      headerShown: true,
      headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        const obj = { otherUser };
        return closure_2_6(closure_2_9, obj);
      }
    };
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { initialRouteName: "DISCONNECT", screens: memo, headerBackTitle: intl.string(otherUser(1115).t["13/7kX"]) };
  const Modal = otherUser(10769).Modal;
  intl = otherUser(1115).intl;
  return closure_6(Modal, obj);
};
