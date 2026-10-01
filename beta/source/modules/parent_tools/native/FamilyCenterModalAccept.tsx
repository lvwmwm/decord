// Module ID: 14461
// Function ID: 14462
// Name: FamilyCenterModalAccept
// Dependencies: [19, 17, 21, 4836, 576, 5039, 4527, 1115, 11395, 7870, 7871, 14458, 4776, 4832, 2487, 14428, 11397, 11405, 5745, 5281, 5936, 10769, 2]
// Exports: default

// Module 14461 (FamilyCenterModalAccept)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let items;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function FamilyCenterModalAcceptScreen(otherUser) {
  let ButtonGroup;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj8;
  otherUser = otherUser.otherUser;
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const arr = acceptLinkRequest(dependencyMap[5]);
    arr.pop();
  }, []);
  const callback1 = react.useCallback(() => {
    const presentFailedToast = otherUser(dependencyMap[6]).presentFailedToast;
    otherUser(dependencyMap[6]);
    const intl = otherUser(dependencyMap[7]).intl;
    presentFailedToast(intl.string(otherUser(dependencyMap[7]).t.R0RpRX));
  }, []);
  const obj = otherUser(11395);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  const items = [acceptLinkRequest, otherUser.id];
  const callback2 = react.useCallback(() => {
    acceptLinkRequest(otherUser.id);
  }, items);
  const obj2 = { children: items3 };
  const ModalScreen = otherUser(7870).ModalScreen;
  const obj3 = { children: items2 };
  const obj4 = { style: tmp.header, children: items1 };
  const ModalContent = otherUser(7871).ModalContent;
  const obj5 = { otherUser, iconSrc: acceptLinkRequest(4776), iconStyles: tmp.icon };
  const tmp6 = acceptLinkRequest(14458);
  items1 = [closure_5(tmp6, obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: intl.string(acceptLinkRequest(2487).rlNJwZ) };
  const Text = otherUser(4832).Text;
  intl = otherUser(1115).intl;
  items1[1] = closure_5(Text, obj6);
  items1[2] = closure_5(acceptLinkRequest(14428), { user: otherUser });
  items2 = [closure_6(View, obj4), closure_5(acceptLinkRequest(11397), {}), ];
  const obj7 = { style: tmp.disclaimer, variant: "text-xs/normal", color: "text-default", children: intl2.format(acceptLinkRequest(2487).snlFqR, obj8) };
  const Text2 = otherUser(4832).Text;
  intl2 = otherUser(1115).intl;
  obj8 = { username: otherUser.username };
  items2[2] = closure_5(Text2, obj7);
  items3 = [closure_6(ModalContent, obj3), ];
  const obj9 = { children: closure_6(ButtonGroup, obj10) };
  const ModalFooter = otherUser(11405).ModalFooter;
  obj10 = { children: items4 };
  ButtonGroup = otherUser(5745).ButtonGroup;
  const obj11 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading, text: intl3.string(acceptLinkRequest(2487)["wI/jo3"]), onPress: callback2 };
  const Button = otherUser(5281).Button;
  intl3 = otherUser(1115).intl;
  items4 = [closure_5(Button, obj11), ];
  const obj12 = { variant: "tertiary", text: intl4.string(otherUser(1115).t["ETE/oC"]), onPress: acceptLinkRequest(5039).pop };
  const Button2 = otherUser(5281).Button;
  intl4 = otherUser(1115).intl;
  items4[1] = closure_5(Button2, obj12);
  items3[1] = closure_5(ModalFooter, obj9);
  return closure_6(ModalScreen, obj2);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerText: obj3, icon: obj4, disclaimer: obj5 };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj4 = { transform: items, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
items = [{ rotate: "45deg" }];
obj5 = { marginTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalAccept.tsx");

export default function FamilyCenterModalAccept(otherUser) {
  let intl;
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    let closure_0 = otherUser;
    let obj = { ACCEPT: obj2 };
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
  let obj = { initialRouteName: "ACCEPT", screens: memo, headerBackTitle: intl.string(otherUser(1115).t["13/7kX"]) };
  const Modal = otherUser(10769).Modal;
  intl = otherUser(1115).intl;
  return closure_5(Modal, obj);
};
