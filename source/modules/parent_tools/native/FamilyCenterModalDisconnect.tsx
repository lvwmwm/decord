// Module ID: 13824
// Function ID: 105868
// Name: FamilyCenterModalDisconnectScreen
// Dependencies: [57, 31, 27, 33, 4130, 689, 4337, 3969, 7123, 3830, 1212, 11061, 11064, 2198, 7572, 7573, 13825, 7607, 4126, 13777, 4541, 9021, 11071, 4965, 4543, 5087, 11073, 2]
// Exports: default

// Module 13824 (FamilyCenterModalDisconnectScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function FamilyCenterModalDisconnectScreen(otherUser) {
  let dependencyMap;
  let tmp8;
  otherUser = otherUser.otherUser;
  const tmp = _createForOfIteratorHelperLoose();
  const callback = isDisconnectLoading.useCallback(() => {
    let arr = callback(outer1_2[6]);
    arr = arr.pop();
  }, []);
  let obj = importDefault(3969);
  const name = obj.useName(otherUser);
  let obj1 = otherUser(7123);
  let requiresParentalConsent = obj1.useRequiresParentalConsent(otherUser.id);
  const tmp5 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const first = tmp5[0];
  importDefault = tmp5[1];
  [tmp8, dependencyMap] = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const callback1 = isDisconnectLoading.useCallback(() => {
    const intl = otherUser(outer1_2[10]).intl;
    otherUser(outer1_2[9]).presentFailedToast(intl.string(otherUser(outer1_2[10]).t.R0RpRX));
    callback(false);
    callback2(false);
  }, []);
  let obj2 = otherUser(11061);
  const familyCenterActions = obj2.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  let obj3 = otherUser(11064);
  let intl = otherUser(1212).intl;
  const tmp7 = disconnectLinkRequest(isDisconnectLoading.useState(false), 2);
  const intl2 = otherUser(1212).intl;
  const ageSpecificText = obj3.useAgeSpecificText(intl.format(importDefault(2198).F2lccv, { username: name }), intl2.string(importDefault(2198)["WH+Gba"]));
  let obj4 = otherUser(11064);
  const intl3 = otherUser(1212).intl;
  const formatResult = intl.format(importDefault(2198).F2lccv, { username: name });
  const intl4 = otherUser(1212).intl;
  const ageSpecificText1 = obj4.useAgeSpecificText(intl3.string(importDefault(2198).hOEHFn), intl4.format(importDefault(2198).Or6hgl, { username: name }));
  let obj5 = otherUser(11064);
  const intl5 = otherUser(1212).intl;
  const stringResult = intl3.string(importDefault(2198).hOEHFn);
  const intl6 = otherUser(1212).intl;
  const ageSpecificText2 = obj5.useAgeSpecificText(intl5.format(importDefault(2198).XyRW4c, { username: name }), intl6.format(importDefault(2198).PlrZal, { username: name }));
  let obj6 = otherUser(11064);
  const intl7 = otherUser(1212).intl;
  const formatResult1 = intl5.format(importDefault(2198).XyRW4c, { username: name });
  const intl8 = otherUser(1212).intl;
  const ageSpecificText3 = obj6.useAgeSpecificText(intl7.string(importDefault(2198).eiABQz), intl8.string(importDefault(2198).PGQBnk));
  let obj7 = otherUser(11064);
  const intl9 = otherUser(1212).intl;
  const stringResult1 = intl7.string(importDefault(2198).eiABQz);
  const intl10 = otherUser(1212).intl;
  const items = [disconnectLinkRequest, otherUser.id];
  const ageSpecificText4 = obj7.useAgeSpecificText(intl9.string(importDefault(2198).sCbKs4), intl10.string(importDefault(2198)["0ki7+P"]));
  const items1 = [isDisconnectLoading];
  const callback2 = isDisconnectLoading.useCallback(() => {
    disconnectLinkRequest(otherUser.id);
  }, items);
  const items2 = [isDisconnectLoading];
  const callback3 = isDisconnectLoading.useCallback((arg0) => {
    if (!isDisconnectLoading) {
      callback(arg0);
    }
  }, items1);
  const callback4 = isDisconnectLoading.useCallback((arg0) => {
    if (!isDisconnectLoading) {
      callback2(arg0);
    }
  }, items2);
  obj = {};
  obj = {};
  obj1 = { style: tmp.header };
  obj2 = { otherUser };
  const stringResult2 = intl9.string(importDefault(2198).sCbKs4);
  const tmp24 = callback2;
  const tmp25 = callback2;
  obj2.iconSrc = importDefault(7607);
  const items3 = [callback(importDefault(13825), obj2), , ];
  obj3 = { style: tmp.title, variant: "text-lg/bold" };
  const intl11 = otherUser(1212).intl;
  obj3.children = intl11.format(importDefault(2198).o0JXuK, { username: name });
  items3[1] = callback(otherUser(4126).Text, obj3);
  obj4 = { style: tmp.subtitle, variant: "text-sm/bold", color: "text-default", children: ageSpecificText };
  items3[2] = callback(otherUser(4126).Text, obj4);
  obj1.children = items3;
  const items4 = [callback2(View, obj1), , , ];
  if (requiresParentalConsent) {
    obj5 = { style: tmp.warning, text: ageSpecificText1 };
    requiresParentalConsent = callback(importDefault(13777), obj5);
  }
  items4[1] = requiresParentalConsent;
  obj6 = { style: tmp.body, variant: "text-md/normal", color: "text-default", children: ageSpecificText2 };
  items4[2] = callback(otherUser(4126).Text, obj6);
  obj7 = { spacing: importDefault(689).space.PX_12 };
  const items5 = [callback(otherUser(9021).Checkbox, { label: ageSpecificText3, checked: first, onToggle: callback3 }), callback(otherUser(9021).Checkbox, { label: ageSpecificText4, checked: tmp8, onToggle: callback4 })];
  obj7.children = items5;
  items4[3] = callback2(otherUser(4541).Stack, obj7);
  obj.children = items4;
  const items6 = [tmp25(otherUser(7573).ModalContent, obj), ];
  const obj8 = {};
  const obj9 = {};
  const obj10 = { variant: "destructive" };
  let tmp33 = !first;
  if (!tmp33) {
    tmp33 = !tmp8;
  }
  if (!tmp33) {
    tmp33 = isDisconnectLoading;
  }
  obj10.disabled = tmp33;
  obj10.loading = isDisconnectLoading;
  const intl12 = otherUser(1212).intl;
  obj10.text = intl12.string(importDefault(2198)["c5L+sl"]);
  obj10.onPress = callback2;
  const items7 = [callback(otherUser(4543).Button, obj10), ];
  const obj11 = { variant: "tertiary" };
  const intl13 = otherUser(1212).intl;
  obj11.text = intl13.string(otherUser(1212).t["3ilveh"]);
  obj11.onPress = importDefault(4337).pop;
  items7[1] = callback(otherUser(4543).Button, obj11);
  obj9.children = items7;
  obj8.children = callback2(otherUser(4965).ButtonGroup, obj9);
  items6[1] = callback(otherUser(11071).ModalFooter, obj8);
  obj.children = items6;
  return tmp24(otherUser(7572).ModalScreen, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
_createForOfIteratorHelperLoose.subtitle = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose.warning = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.body = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDisconnect.tsx");

export default function FamilyCenterModalDisconnect(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => (function getScreens(otherUser) {
    let closure_0 = otherUser;
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: otherUser(outer2_2[25]).getHeaderCloseButton(outer2_1(outer2_2[6]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return outer3_6(outer3_9, { otherUser: closure_0 });
      }
    };
    obj.DISCONNECT = obj;
    return obj;
  })(otherUser), items);
  let obj = { initialRouteName: "DISCONNECT", screens: memo };
  const intl = otherUser(1212).intl;
  obj.headerBackTitle = intl.string(otherUser(1212).t["13/7kX"]);
  return callback(otherUser(11073).Modal, obj);
};
