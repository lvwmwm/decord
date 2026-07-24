// Module ID: 13879
// Function ID: 106215
// Name: FamilyCenterModalAcceptScreen
// Dependencies: [31, 27, 33, 4130, 689, 4337, 3830, 1212, 11088, 7613, 7614, 13876, 4075, 4126, 2198, 13846, 11090, 11098, 4965, 4543, 5087, 11100, 2]
// Exports: default

// Module 13879 (FamilyCenterModalAcceptScreen)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function FamilyCenterModalAcceptScreen(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = _createForOfIteratorHelperLoose();
  const callback = React.useCallback(() => {
    let arr = acceptLinkRequest(outer1_2[5]);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(outer1_2[7]).intl;
    otherUser(outer1_2[6]).presentFailedToast(intl.string(otherUser(outer1_2[7]).t.R0RpRX));
  }, []);
  let obj = otherUser(11088);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  const items = [acceptLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    acceptLinkRequest(otherUser.id);
  }, items);
  obj = {};
  obj = {};
  const obj1 = { style: tmp.header };
  const obj2 = { otherUser, iconSrc: acceptLinkRequest(4075), iconStyles: tmp.icon };
  const items1 = [callback(acceptLinkRequest(13876), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold" };
  let intl = otherUser(1212).intl;
  obj3.children = intl.string(acceptLinkRequest(2198).rlNJwZ);
  items1[1] = callback(otherUser(4126).Text, obj3);
  items1[2] = callback(acceptLinkRequest(13846), { user: otherUser });
  obj1.children = items1;
  const items2 = [callback2(View, obj1), callback(acceptLinkRequest(11090), {}), ];
  const obj4 = { style: tmp.disclaimer, variant: "text-xs/normal", color: "text-default" };
  const intl2 = otherUser(1212).intl;
  obj4.children = intl2.format(acceptLinkRequest(2198).snlFqR, { username: otherUser.username });
  items2[2] = callback(otherUser(4126).Text, obj4);
  obj.children = items2;
  const items3 = [callback2(otherUser(7614).ModalContent, obj), ];
  const obj6 = {};
  const obj7 = {};
  const obj8 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading };
  const intl3 = otherUser(1212).intl;
  obj8.text = intl3.string(acceptLinkRequest(2198)["wI/jo3"]);
  obj8.onPress = callback2;
  const items4 = [callback(otherUser(4543).Button, obj8), ];
  const obj9 = { variant: "tertiary" };
  const intl4 = otherUser(1212).intl;
  obj9.text = intl4.string(otherUser(1212).t["ETE/oC"]);
  obj9.onPress = acceptLinkRequest(4337).pop;
  items4[1] = callback(otherUser(4543).Button, obj9);
  obj7.children = items4;
  obj6.children = callback2(otherUser(4965).ButtonGroup, obj7);
  items3[1] = callback(otherUser(11098).ModalFooter, obj6);
  obj.children = items3;
  return callback2(otherUser(7613).ModalScreen, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let items = [{ rotate: "45deg" }];
_createForOfIteratorHelperLoose.icon = { transform: items, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
let obj2 = { transform: items, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.disclaimer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalAccept.tsx");

export default function FamilyCenterModalAccept(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => (function getScreens(otherUser) {
    let closure_0 = otherUser;
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: otherUser(outer2_2[20]).getHeaderCloseButton(outer2_1(outer2_2[5]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return outer3_5(outer3_8, { otherUser: closure_0 });
      }
    };
    obj.ACCEPT = obj;
    return obj;
  })(otherUser), items);
  let obj = { initialRouteName: "ACCEPT", screens: memo };
  const intl = otherUser(1212).intl;
  obj.headerBackTitle = intl.string(otherUser(1212).t["13/7kX"]);
  return callback(otherUser(11100).Modal, obj);
};
