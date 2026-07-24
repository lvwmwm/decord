// Module ID: 13881
// Function ID: 106235
// Name: FamilyCenterModalCancelScreen
// Dependencies: [31, 27, 33, 4130, 689, 7123, 4337, 3830, 1212, 11088, 44, 7613, 7614, 13876, 7696, 4126, 2198, 13846, 11098, 4965, 4543, 5087, 11100, 2]
// Exports: default

// Module 13881 (FamilyCenterModalCancelScreen)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function FamilyCenterModalCancelScreen(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = _createForOfIteratorHelperLoose();
  const callback = React.useCallback(() => {
    let arr = cancelLinkRequest(outer1_2[6]);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(outer1_2[8]).intl;
    otherUser(outer1_2[7]).presentFailedToast(intl.string(otherUser(outer1_2[8]).t.R0RpRX));
  }, []);
  let obj = otherUser(11088);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  const items = [cancelLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  cancelLinkRequest(44)(cancelLinkRequest(7123)(), "FamilyCenterCancelModal should only be rendered for parents.");
  obj = {};
  obj = {};
  const obj1 = { style: tmp.header };
  const obj2 = { otherUser };
  const tmp2 = cancelLinkRequest(7123)();
  obj2.iconSrc = cancelLinkRequest(7696);
  const items1 = [callback(cancelLinkRequest(13876), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold" };
  let intl = otherUser(1212).intl;
  obj3.children = intl.string(cancelLinkRequest(2198).HynllX);
  items1[1] = callback(otherUser(4126).Text, obj3);
  items1[2] = callback(cancelLinkRequest(13846), { user: otherUser });
  obj1.children = items1;
  obj.children = callback2(View, obj1);
  const items2 = [callback(otherUser(7614).ModalContent, obj), ];
  const obj4 = {};
  const obj5 = {};
  const obj6 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading };
  const intl2 = otherUser(1212).intl;
  obj6.text = intl2.string(cancelLinkRequest(2198).mK40bk);
  obj6.onPress = callback2;
  const items3 = [callback(otherUser(4543).Button, obj6), ];
  const obj7 = { variant: "tertiary" };
  const intl3 = otherUser(1212).intl;
  obj7.text = intl3.string(cancelLinkRequest(2198).czincX);
  obj7.onPress = cancelLinkRequest(4337).pop;
  items3[1] = callback(otherUser(4543).Button, obj7);
  obj5.children = items3;
  obj4.children = callback2(otherUser(4965).ButtonGroup, obj5);
  items2[1] = callback(otherUser(11098).ModalFooter, obj4);
  obj.children = items2;
  return callback2(otherUser(7613).ModalScreen, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default function FamilyCenterModalCancel(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => (function getScreens(otherUser) {
    let closure_0 = otherUser;
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: otherUser(outer2_2[21]).getHeaderCloseButton(outer2_1(outer2_2[6]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return outer3_5(outer3_8, { otherUser: closure_0 });
      }
    };
    obj.CANCEL = obj;
    return obj;
  })(otherUser), items);
  let obj = { initialRouteName: "CANCEL", screens: memo };
  const intl = otherUser(1212).intl;
  obj.headerBackTitle = intl.string(otherUser(1212).t["13/7kX"]);
  return callback(otherUser(11100).Modal, obj);
};
