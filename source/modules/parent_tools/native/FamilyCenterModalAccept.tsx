// Module ID: 13698
// Function ID: 103657
// Name: FamilyCenterModalAcceptScreen
// Dependencies: []
// Exports: default

// Module 13698 (FamilyCenterModalAcceptScreen)
function FamilyCenterModalAcceptScreen(otherUser) {
  otherUser = otherUser.otherUser;
  const arg1 = otherUser;
  const tmp = callback3();
  const callback = React.useCallback(() => {
    let arr = acceptLinkRequest(closure_2[5]);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(closure_2[7]).intl;
    otherUser(closure_2[6]).presentFailedToast(intl.string(otherUser(closure_2[7]).t.R0RpRX));
  }, []);
  let obj = arg1(dependencyMap[8]);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const importDefault = acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  const items = [acceptLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    acceptLinkRequest(otherUser.id);
  }, items);
  obj = {};
  obj = {};
  const obj1 = { style: tmp.header };
  const obj2 = { otherUser, iconSrc: importDefault(dependencyMap[12]), iconStyles: tmp.icon };
  const items1 = [callback(importDefault(dependencyMap[11]), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold" };
  const intl = arg1(dependencyMap[7]).intl;
  obj3.children = intl.string(importDefault(dependencyMap[14]).rlNJwZ);
  items1[1] = callback(arg1(dependencyMap[13]).Text, obj3);
  items1[2] = callback(importDefault(dependencyMap[15]), { user: otherUser });
  obj1.children = items1;
  const items2 = [callback2(View, obj1), callback(importDefault(dependencyMap[16]), {}), ];
  const obj4 = { Promise: 24, marginTop: 24, flags: null, style: tmp.disclaimer };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj4.children = intl2.format(importDefault(dependencyMap[14]).snlFqR, { username: otherUser.username });
  items2[2] = callback(arg1(dependencyMap[13]).Text, obj4);
  obj.children = items2;
  const items3 = [callback2(arg1(dependencyMap[10]).ModalContent, obj), ];
  const obj6 = {};
  const obj7 = {};
  const obj8 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj8.text = intl3.string(importDefault(dependencyMap[14]).wI/jo3);
  obj8.onPress = callback2;
  const items4 = [callback(arg1(dependencyMap[19]).Button, obj8), ];
  const obj9 = { variant: "tertiary" };
  const intl4 = arg1(dependencyMap[7]).intl;
  obj9.text = intl4.string(arg1(dependencyMap[7]).t.ETE/oC);
  obj9.onPress = importDefault(dependencyMap[5]).pop;
  items4[1] = callback(arg1(dependencyMap[19]).Button, obj9);
  obj7.children = items4;
  obj6.children = callback2(arg1(dependencyMap[18]).ButtonGroup, obj7);
  items3[1] = callback(arg1(dependencyMap[17]).ModalFooter, obj6);
  obj.children = items3;
  return callback2(arg1(dependencyMap[9]).ModalScreen, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { y: 0, gatedChannel: 0, y: 0, marginBottom: importDefault(dependencyMap[4]).space.PX_16 };
obj.header = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.headerText = { marginTop: importDefault(dependencyMap[4]).space.PX_16, marginBottom: importDefault(dependencyMap[4]).space.PX_4 };
const obj1 = { marginTop: importDefault(dependencyMap[4]).space.PX_16, marginBottom: importDefault(dependencyMap[4]).space.PX_4 };
const items = [{ rotate: "45deg" }];
obj.icon = { transform: items, tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj2 = { transform: items, tintColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.disclaimer = { marginTop: importDefault(dependencyMap[4]).space.PX_12 };
let closure_7 = obj.createStyles(obj);
const obj3 = { marginTop: importDefault(dependencyMap[4]).space.PX_12 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalAccept.tsx");

export default function FamilyCenterModalAccept(otherUser) {
  otherUser = otherUser.otherUser;
  const arg1 = otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => function getScreens(otherUser) {
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: otherUser(closure_2[20]).getHeaderCloseButton(callback(closure_2[5]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return callback(closure_8, { otherUser: arg0 });
      }
    };
    obj.ACCEPT = obj;
    return obj;
  }(otherUser), items);
  const obj = { initialRouteName: "ACCEPT", screens: memo };
  const intl = arg1(dependencyMap[7]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[7]).t.13/7kX);
  return callback(arg1(dependencyMap[21]).Modal, obj);
};
