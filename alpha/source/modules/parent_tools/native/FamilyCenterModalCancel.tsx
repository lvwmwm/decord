// Module ID: 16820
// Function ID: 16821
// Name: FamilyCenterModalCancel
// Dependencies: [19, 17, 21, 5014, 575, 8370, 6744, 5711, 1113, 13344, 38, 7972, 7973, 16815, 8359, 5624, 2538, 16783, 13193, 6767, 5634, 6998, 11481, 2]
// Exports: default

// Module 16820 (FamilyCenterModalCancel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function FamilyCenterModalCancelScreen(otherUser) {
  let ButtonGroup;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let obj4;
  let obj8;
  otherUser = otherUser.otherUser;
  let cancelLinkRequest;
  const tmp = closure_7();
  const tmp2 = cancelLinkRequest(8370)();
  const callback = react.useCallback(() => {
    const arr = cancelLinkRequest(dependencyMap[6]);
    arr.pop();
  }, []);
  const callback1 = react.useCallback(() => {
    const presentFailedToast = otherUser(dependencyMap[7]).presentFailedToast;
    otherUser(dependencyMap[7]);
    const intl = otherUser(dependencyMap[8]).intl;
    presentFailedToast(intl.string(otherUser(dependencyMap[8]).t.R0RpRX));
  }, []);
  const obj = otherUser(13344);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  const items = [cancelLinkRequest, otherUser.id];
  const callback2 = react.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  cancelLinkRequest(38)(tmp2, "FamilyCenterCancelModal should only be rendered for parents.");
  const obj2 = { children: items2 };
  const ModalScreen = otherUser(7972).ModalScreen;
  const obj3 = { children: closure_6(View, obj4) };
  obj4 = { style: tmp.header, children: items1 };
  const ModalContent = otherUser(7973).ModalContent;
  const obj5 = { otherUser, iconSrc: cancelLinkRequest(8359) };
  const tmp8 = cancelLinkRequest(16815);
  items1 = [closure_5(tmp8, obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: intl.string(cancelLinkRequest(2538).HynllX) };
  const Text = otherUser(5624).Text;
  intl = otherUser(1113).intl;
  items1[1] = closure_5(Text, obj6);
  items1[2] = closure_5(cancelLinkRequest(16783), { user: otherUser });
  items2 = [closure_5(ModalContent, obj3), ];
  const obj7 = { children: closure_6(ButtonGroup, obj8) };
  const ModalFooter = otherUser(13193).ModalFooter;
  obj8 = { children: items3 };
  ButtonGroup = otherUser(6767).ButtonGroup;
  const obj9 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading, text: intl2.string(cancelLinkRequest(2538).mK40bk), onPress: callback2 };
  const Button = otherUser(5634).Button;
  intl2 = otherUser(1113).intl;
  items3 = [closure_5(Button, obj9), ];
  const obj10 = { variant: "tertiary", text: intl3.string(cancelLinkRequest(2538).czincX), onPress: cancelLinkRequest(6744).pop };
  const Button2 = otherUser(5634).Button;
  intl3 = otherUser(1113).intl;
  items3[1] = closure_5(Button2, obj10);
  items2[1] = closure_5(ModalFooter, obj7);
  return closure_6(ModalScreen, obj2);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerText: obj3 };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default function FamilyCenterModalCancel(otherUser) {
  let intl;
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    let closure_0 = otherUser;
    let obj = { CANCEL: obj2 };
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
  let obj = { initialRouteName: "CANCEL", screens: memo, headerBackTitle: intl.string(otherUser(1113).t["13/7kX"]) };
  const Modal = otherUser(11481).Modal;
  intl = otherUser(1113).intl;
  return closure_5(Modal, obj);
};
