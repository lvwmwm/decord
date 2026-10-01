// Module ID: 14462
// Function ID: 14463
// Name: FamilyCenterModalDecline
// Dependencies: [19, 17, 21, 4836, 576, 8106, 5039, 4527, 1115, 11395, 38, 7870, 7871, 14458, 6413, 4832, 2487, 14428, 11405, 5745, 5281, 5936, 10769, 2]
// Exports: default

// Module 14462 (FamilyCenterModalDecline)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function FamilyCenterModalDeclineScreen(otherUser) {
  let ButtonGroup;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj11;
  otherUser = otherUser.otherUser;
  let declineLinkRequest;
  const tmp = closure_7();
  const tmp2 = declineLinkRequest(8106)();
  const callback = react.useCallback(() => {
    const arr = declineLinkRequest(dependencyMap[6]);
    arr.pop();
  }, []);
  const callback1 = react.useCallback(() => {
    const presentFailedToast = otherUser(dependencyMap[7]).presentFailedToast;
    otherUser(dependencyMap[7]);
    const intl = otherUser(dependencyMap[8]).intl;
    presentFailedToast(intl.string(otherUser(dependencyMap[8]).t.R0RpRX));
  }, []);
  const obj = otherUser(11395);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  declineLinkRequest = familyCenterActions.declineLinkRequest;
  const isDeclineLoading = familyCenterActions.isDeclineLoading;
  const items = [declineLinkRequest, otherUser.id];
  const callback2 = react.useCallback(() => {
    declineLinkRequest(otherUser.id);
  }, items);
  declineLinkRequest(38)(!tmp2, "FamilyCenterDeclineLinkModal should only be rendered for teens.");
  const obj2 = { children: items4 };
  const ModalScreen = otherUser(7870).ModalScreen;
  const obj3 = { children: items2 };
  const obj4 = { style: tmp.header, children: items1 };
  const ModalContent = otherUser(7871).ModalContent;
  const obj5 = { otherUser, iconSrc: declineLinkRequest(6413) };
  const tmp8 = declineLinkRequest(14458);
  items1 = [closure_5(tmp8, obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: intl.string(declineLinkRequest(2487).teIRCR) };
  const Text = otherUser(4832).Text;
  intl = otherUser(1115).intl;
  items1[1] = closure_5(Text, obj6);
  items1[2] = closure_5(declineLinkRequest(14428), { user: otherUser });
  items2 = [closure_6(View, obj4), ];
  const obj7 = { style: tmp.body, children: items3 };
  const obj8 = { style: tmp.noticeHeader, variant: "eyebrow", color: "mobile-text-heading-primary", children: intl2.string(declineLinkRequest(2487).cXgKMD) };
  const Text2 = otherUser(4832).Text;
  intl2 = otherUser(1115).intl;
  items3 = [closure_5(Text2, obj8), ];
  const obj9 = { variant: "text-sm/normal", color: "text-default", children: intl3.string(declineLinkRequest(2487).LcM8BS) };
  const Text3 = otherUser(4832).Text;
  intl3 = otherUser(1115).intl;
  items3[1] = closure_5(Text3, obj9);
  items2[1] = closure_6(View, obj7);
  items4 = [closure_6(ModalContent, obj3), ];
  const obj10 = { children: closure_6(ButtonGroup, obj11) };
  const ModalFooter = otherUser(11405).ModalFooter;
  obj11 = { children: items5 };
  ButtonGroup = otherUser(5745).ButtonGroup;
  const obj12 = { variant: "destructive", disabled: isDeclineLoading, loading: isDeclineLoading, text: intl4.string(declineLinkRequest(2487).dKxFcn), onPress: callback2 };
  const Button = otherUser(5281).Button;
  intl4 = otherUser(1115).intl;
  items5 = [closure_5(Button, obj12), ];
  const obj13 = { variant: "tertiary", text: intl5.string(otherUser(1115).t["ETE/oC"]), onPress: declineLinkRequest(5039).pop };
  const Button2 = otherUser(5281).Button;
  intl5 = otherUser(1115).intl;
  items5[1] = closure_5(Button2, obj13);
  items4[1] = closure_5(ModalFooter, obj10);
  return closure_6(ModalScreen, obj2);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerText: obj3, body: obj4, noticeHeader: obj5 };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj4 = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5 = { marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDecline.tsx");

export default function FamilyCenterModalDecline(otherUser) {
  let intl;
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    let closure_0 = otherUser;
    let obj = { DECLINE: obj2 };
    obj2 = {
      headerShown: true,
      headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        const obj = { otherUser };
        return closure_2_5(closure_2_8, obj);
      }
    };
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { initialRouteName: "DECLINE", screens: memo, headerBackTitle: intl.string(otherUser(1115).t["13/7kX"]) };
  const Modal = otherUser(10769).Modal;
  intl = otherUser(1115).intl;
  return closure_5(Modal, obj);
};
