// Module ID: 13829
// Function ID: 105901
// Name: FamilyCenterModalDeclineScreen
// Dependencies: [31, 27, 33, 4130, 689, 7124, 4337, 3830, 1212, 11061, 44, 7572, 7573, 13825, 7607, 4126, 2198, 13795, 11071, 4965, 4543, 5087, 11073, 2]
// Exports: default

// Module 13829 (FamilyCenterModalDeclineScreen)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function FamilyCenterModalDeclineScreen(otherUser) {
  otherUser = otherUser.otherUser;
  const tmp = _createForOfIteratorHelperLoose();
  const callback = React.useCallback(() => {
    let arr = declineLinkRequest(outer1_2[6]);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(outer1_2[8]).intl;
    otherUser(outer1_2[7]).presentFailedToast(intl.string(otherUser(outer1_2[8]).t.R0RpRX));
  }, []);
  let obj = otherUser(11061);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const declineLinkRequest = familyCenterActions.declineLinkRequest;
  const isDeclineLoading = familyCenterActions.isDeclineLoading;
  const items = [declineLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    declineLinkRequest(otherUser.id);
  }, items);
  declineLinkRequest(44)(!declineLinkRequest(7124)(), "FamilyCenterDeclineLinkModal should only be rendered for teens.");
  obj = {};
  obj = {};
  const obj1 = { style: tmp.header };
  const obj2 = { otherUser };
  const tmp2 = declineLinkRequest(7124)();
  obj2.iconSrc = declineLinkRequest(7607);
  const items1 = [callback(declineLinkRequest(13825), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold" };
  let intl = otherUser(1212).intl;
  obj3.children = intl.string(declineLinkRequest(2198).teIRCR);
  items1[1] = callback(otherUser(4126).Text, obj3);
  items1[2] = callback(declineLinkRequest(13795), { user: otherUser });
  obj1.children = items1;
  const items2 = [callback2(View, obj1), ];
  const obj4 = { style: tmp.body };
  const obj5 = { style: tmp.noticeHeader, variant: "eyebrow", color: "mobile-text-heading-primary" };
  const intl2 = otherUser(1212).intl;
  obj5.children = intl2.string(declineLinkRequest(2198).cXgKMD);
  const items3 = [callback(otherUser(4126).Text, obj5), ];
  const obj6 = { variant: "text-sm/normal", color: "text-default" };
  const intl3 = otherUser(1212).intl;
  obj6.children = intl3.string(declineLinkRequest(2198).LcM8BS);
  items3[1] = callback(otherUser(4126).Text, obj6);
  obj4.children = items3;
  items2[1] = callback2(View, obj4);
  obj.children = items2;
  const items4 = [callback2(otherUser(7573).ModalContent, obj), ];
  const obj7 = {};
  const obj8 = {};
  const obj9 = { variant: "destructive", disabled: isDeclineLoading, loading: isDeclineLoading };
  const intl4 = otherUser(1212).intl;
  obj9.text = intl4.string(declineLinkRequest(2198).dKxFcn);
  obj9.onPress = callback2;
  const items5 = [callback(otherUser(4543).Button, obj9), ];
  const obj10 = { variant: "tertiary" };
  const intl5 = otherUser(1212).intl;
  obj10.text = intl5.string(otherUser(1212).t["ETE/oC"]);
  obj10.onPress = declineLinkRequest(4337).pop;
  items5[1] = callback(otherUser(4543).Button, obj10);
  obj8.children = items5;
  obj7.children = callback2(otherUser(4965).ButtonGroup, obj8);
  items4[1] = callback(otherUser(11071).ModalFooter, obj7);
  obj.children = items4;
  return callback2(otherUser(7572).ModalScreen, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.body = { padding: require("_createForOfIteratorHelperLoose").space.PX_24, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let obj2 = { padding: require("_createForOfIteratorHelperLoose").space.PX_24, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.noticeHeader = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDecline.tsx");

export default function FamilyCenterModalDecline(otherUser) {
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
    obj.DECLINE = obj;
    return obj;
  })(otherUser), items);
  let obj = { initialRouteName: "DECLINE", screens: memo };
  const intl = otherUser(1212).intl;
  obj.headerBackTitle = intl.string(otherUser(1212).t["13/7kX"]);
  return callback(otherUser(11073).Modal, obj);
};
