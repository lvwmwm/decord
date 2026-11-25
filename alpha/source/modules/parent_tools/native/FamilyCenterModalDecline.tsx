// Module ID: 16385
// Function ID: 16386
// Name: FamilyCenterModalDecline
// Dependencies: [19, 17, 21, 5012, 575, 8174, 6099, 5693, 1112, 12542, 38, 7854, 7856, 16381, 7718, 5603, 2846, 16348, 11567, 6832, 5610, 7160, 11570, 2]
// Exports: default

// Module 16385 (FamilyCenterModalDecline)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import NavigatorHeader from "NavigatorHeader" /* 7160 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
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
  const tmp2 = declineLinkRequest(8174)();
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
  const obj = otherUser(12542);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  declineLinkRequest = familyCenterActions.declineLinkRequest;
  const isDeclineLoading = familyCenterActions.isDeclineLoading;
  const items = [declineLinkRequest, otherUser.id];
  const callback2 = react.useCallback(() => {
    declineLinkRequest(otherUser.id);
  }, items);
  declineLinkRequest(38)(!tmp2, "FamilyCenterDeclineLinkModal should only be rendered for teens.");
  const obj2 = { children: items4 };
  const ModalScreen = otherUser(7854).ModalScreen;
  const obj3 = { children: items2 };
  const obj4 = { style: tmp.header, children: items1 };
  const ModalContent = otherUser(7856).ModalContent;
  const obj5 = { otherUser, iconSrc: declineLinkRequest(7718) };
  const tmp8 = declineLinkRequest(16381);
  items1 = [closure_5(tmp8, obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "body-lg/semibold", children: intl.string(declineLinkRequest(2846).teIRCR) };
  const Text = otherUser(5603).Text;
  intl = otherUser(1112).intl;
  items1[1] = closure_5(Text, obj6);
  items1[2] = closure_5(declineLinkRequest(16348), { user: otherUser });
  items2 = [closure_6(View, obj4), ];
  const obj7 = { style: tmp.body, children: items3 };
  const obj8 = { style: tmp.noticeHeader, variant: "body-sm/medium", color: "mobile-text-heading-primary", children: intl2.string(declineLinkRequest(2846).cXgKMD) };
  const Text2 = otherUser(5603).Text;
  intl2 = otherUser(1112).intl;
  items3 = [closure_5(Text2, obj8), ];
  const obj9 = { variant: "body-sm/normal", color: "text-default", children: intl3.string(declineLinkRequest(2846).LcM8BS) };
  const Text3 = otherUser(5603).Text;
  intl3 = otherUser(1112).intl;
  items3[1] = closure_5(Text3, obj9);
  items2[1] = closure_6(View, obj7);
  items4 = [closure_6(ModalContent, obj3), ];
  const obj10 = { children: closure_6(ButtonGroup, obj11) };
  const ModalFooter = otherUser(11567).ModalFooter;
  obj11 = { children: items5 };
  ButtonGroup = otherUser(6832).ButtonGroup;
  const obj12 = { variant: "destructive", disabled: isDeclineLoading, loading: isDeclineLoading, text: intl4.string(declineLinkRequest(2846).dKxFcn), onPress: callback2 };
  const Button = otherUser(5610).Button;
  intl4 = otherUser(1112).intl;
  items5 = [closure_5(Button, obj12), ];
  const obj13 = { variant: "tertiary", text: intl5.string(otherUser(1112).t["ETE/oC"]), onPress: declineLinkRequest(6099).pop };
  const Button2 = otherUser(5610).Button;
  intl5 = otherUser(1112).intl;
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
  let obj = { initialRouteName: "DECLINE", screens: memo, headerBackTitle: intl.string(otherUser(1112).t["13/7kX"]) };
  const Modal = otherUser(11570).Modal;
  intl = otherUser(1112).intl;
  return closure_5(Modal, obj);
};
