// Module ID: 15202
// Function ID: 15203
// Name: FamilyCenterModalDisconnect
// Dependencies: [32, 19, 17, 21, 4788, 576, 4991, 4632, 8955, 4485, 1115, 12200, 12203, 2482, 8725, 8726, 15203, 7269, 4784, 15155, 5216, 9575, 12210, 5682, 5218, 5873, 11494, 2]
// Exports: default

// Module 15202 (FamilyCenterModalDisconnect)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2482 from "module_2482" /* 2482 */;
import ToastUtils from "ToastUtils" /* 4485 */;
import UserUtilsDefault from "UserUtils" /* 4632 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import NavigatorHeader from "NavigatorHeader" /* 5873 */;
import _modDef7269 from "module_7269" /* 7269 */;
import FamilyCenterAvatarPairDefault from "FamilyCenterAvatarPair" /* 15203 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterModalDisconnectScreen(otherUser) {
  otherUser = otherUser.otherUser;
  importDefault = undefined;
  dependencyMap = undefined;
  let disconnectLinkRequest;
  let isDisconnectLoading;
  const tmp = closure_8();
  const callback = isDisconnectLoading.useCallback(() => {
    _undefined(_undefined2[6]).pop();
  }, []);
  const name = UserUtilsDefault.useName(otherUser);
  const requiresParentalConsent = otherUser(8955).useRequiresParentalConsent(otherUser.id);
  const obj2 = otherUser(8955);
  [tmp9, c1] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const tmp8 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  [tmp11, c2] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const callback1 = isDisconnectLoading.useCallback(() => {
    const intl = util.intl;
    ToastUtils.presentFailedToast(intl.string(util.t.R0RpRX));
    _undefined(false);
    _undefined2(false);
  }, []);
  const tmp10 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const familyCenterActions = otherUser(12200).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  const obj3 = otherUser(12200);
  let intl = otherUser(1115).intl;
  const obj4 = otherUser(12203);
  const intl2 = otherUser(1115).intl;
  const ageSpecificText = obj4.useAgeSpecificText(intl.format(_modDef2482.F2lccv, { username: name }), intl2.string(_modDef2482["WH+Gba"]));
  const formatResult = intl.format(_modDef2482.F2lccv, { username: name });
  const intl3 = otherUser(1115).intl;
  const obj5 = otherUser(12203);
  const intl4 = otherUser(1115).intl;
  const ageSpecificText1 = obj5.useAgeSpecificText(intl3.string(_modDef2482.hOEHFn), intl4.format(_modDef2482.Or6hgl, { username: name }));
  const stringResult = intl3.string(_modDef2482.hOEHFn);
  const intl5 = otherUser(1115).intl;
  const obj6 = otherUser(12203);
  const intl6 = otherUser(1115).intl;
  const ageSpecificText2 = obj6.useAgeSpecificText(intl5.format(_modDef2482.XyRW4c, { username: name }), intl6.format(_modDef2482.PlrZal, { username: name }));
  const formatResult1 = intl5.format(_modDef2482.XyRW4c, { username: name });
  const intl7 = otherUser(1115).intl;
  const obj7 = otherUser(12203);
  const intl8 = otherUser(1115).intl;
  const ageSpecificText3 = obj7.useAgeSpecificText(intl7.string(_modDef2482.eiABQz), intl8.string(_modDef2482.PGQBnk));
  const stringResult1 = intl7.string(_modDef2482.eiABQz);
  const intl9 = otherUser(1115).intl;
  const obj8 = otherUser(12203);
  const intl10 = otherUser(1115).intl;
  const items = [disconnectLinkRequest, otherUser.id];
  const ageSpecificText4 = obj8.useAgeSpecificText(intl9.string(_modDef2482.sCbKs4), intl10.string(_modDef2482["0ki7+P"]));
  const items1 = [isDisconnectLoading];
  const callback2 = isDisconnectLoading.useCallback(() => {
    disconnectLinkRequest(otherUser.id);
  }, items);
  const items2 = [isDisconnectLoading];
  const callback3 = isDisconnectLoading.useCallback((arg0) => {
    if (!isDisconnectLoading) {
      _undefined(arg0);
    }
  }, items1);
  const callback4 = isDisconnectLoading.useCallback((arg0) => {
    if (!isDisconnectLoading) {
      _undefined2(arg0);
    }
  }, items2);
  const obj9 = { style: tmp.header, children: null };
  const obj10 = { otherUser, iconSrc: null };
  const stringResult2 = intl9.string(_modDef2482.sCbKs4);
  obj10.iconSrc = _modDef7269;
  const items3 = [closure_6(FamilyCenterAvatarPairDefault, obj10), , ];
  const obj11 = { style: tmp.title, variant: "text-lg/bold", children: null };
  const intl11 = otherUser(1115).intl;
  obj11.children = intl11.format(_modDef2482.o0JXuK, { username: name });
  items3[1] = closure_6(otherUser(4784).Text, obj11);
  items3[2] = closure_6(otherUser(4784).Text, { style: tmp.subtitle, variant: "text-sm/bold", color: "text-default", children: ageSpecificText });
  obj9.children = items3;
  const items4 = [closure_7(View, obj9), , , ];
  let tmp28Result = requiresParentalConsent;
  if (requiresParentalConsent) {
    const obj13 = { style: tmp.warning, text: ageSpecificText1 };
    tmp28Result = tmp28(tmp3(15155), obj13);
  }
  const obj14 = { children: null };
  items4[1] = tmp28Result;
  items4[2] = closure_6(otherUser(4784).Text, { style: tmp.body, variant: "text-md/normal", color: "text-default", children: ageSpecificText2 });
  const obj16 = { spacing: nativeDefault.space.PX_12, children: null };
  const items5 = [closure_6(otherUser(9575).Checkbox, { label: ageSpecificText3, checked: tmp9, onToggle: callback3 }), closure_6(otherUser(9575).Checkbox, { label: ageSpecificText4, checked: tmp11, onToggle: callback4 })];
  obj16.children = items5;
  items4[3] = closure_7(otherUser(5216).Stack, obj16);
  obj14.children = items4;
  const items6 = [closure_7(otherUser(8726).ModalContent, obj14), ];
  let tmp31 = !tmp9;
  if (tmp9) {
    tmp31 = !tmp11;
  }
  if (!tmp31) {
    tmp31 = isDisconnectLoading;
  }
  const obj17 = { children: null };
  const obj18 = { children: null };
  const obj19 = { children: null };
  const obj20 = { variant: "destructive", disabled: tmp31, loading: isDisconnectLoading, text: null, onPress: null };
  const intl12 = tmp6(1115).intl;
  obj20.text = intl12.string(_modDef2482["c5L+sl"]);
  obj20.onPress = callback2;
  const items7 = [closure_6(otherUser(5218).Button, obj20), ];
  const obj21 = { variant: "tertiary", text: null, onPress: null };
  const intl13 = tmp6(1115).intl;
  obj21.text = intl13.string(otherUser(1115).t["3ilveh"]);
  obj21.onPress = ModalActionCreatorsDefault.pop;
  items7[1] = closure_6(otherUser(5218).Button, obj21);
  obj19.children = items7;
  obj18.children = closure_7(otherUser(5682).ButtonGroup, obj19);
  items6[1] = closure_6(otherUser(12210).ModalFooter, obj18);
  obj17.children = items6;
  return closure_7(otherUser(8725).ModalScreen, obj17);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4788);
let obj2 = { header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 }, title: null, subtitle: null, warning: null, body: null };
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.title = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj2.subtitle = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj5 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj2.warning = { marginBottom: nativeDefault.space.PX_12 };
let obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj2.body = { marginBottom: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDisconnect.tsx");

export default function FamilyCenterModalDisconnect(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    const obj = { DISCONNECT: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_6(FamilyCenterModalDisconnectScreen, { otherUser });
      }
    };
    obj.DISCONNECT = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "DISCONNECT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1115).intl;
  obj.headerBackTitle = intl.string(otherUser(1115).t["13/7kX"]);
  return closure_6(otherUser(11494).Modal, obj);
};
