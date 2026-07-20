// Module ID: 13700
// Function ID: 103677
// Name: FamilyCenterModalCancelScreen
// Dependencies: []
// Exports: default

// Module 13700 (FamilyCenterModalCancelScreen)
function FamilyCenterModalCancelScreen(otherUser) {
  otherUser = otherUser.otherUser;
  const arg1 = otherUser;
  const tmp = callback3();
  const callback = React.useCallback(() => {
    let arr = cancelLinkRequest(closure_2[6]);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(closure_2[8]).intl;
    otherUser(closure_2[7]).presentFailedToast(intl.string(otherUser(closure_2[8]).t.R0RpRX));
  }, []);
  let obj = arg1(dependencyMap[9]);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const importDefault = cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  const items = [cancelLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  importDefault(dependencyMap[10])(importDefault(dependencyMap[5])(), "FamilyCenterCancelModal should only be rendered for parents.");
  obj = {};
  obj = {};
  const obj1 = { style: tmp.header };
  const obj2 = { otherUser };
  const tmp2 = importDefault(dependencyMap[5])();
  obj2.iconSrc = importDefault(dependencyMap[14]);
  const items1 = [callback(importDefault(dependencyMap[13]), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold" };
  const intl = arg1(dependencyMap[8]).intl;
  obj3.children = intl.string(importDefault(dependencyMap[16]).HynllX);
  items1[1] = callback(arg1(dependencyMap[15]).Text, obj3);
  items1[2] = callback(importDefault(dependencyMap[17]), { user: otherUser });
  obj1.children = items1;
  obj.children = callback2(View, obj1);
  const items2 = [callback(arg1(dependencyMap[12]).ModalContent, obj), ];
  const obj4 = {};
  const obj5 = {};
  const obj6 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj6.text = intl2.string(importDefault(dependencyMap[16]).mK40bk);
  obj6.onPress = callback2;
  const items3 = [callback(arg1(dependencyMap[20]).Button, obj6), ];
  const obj7 = { variant: "tertiary" };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj7.text = intl3.string(importDefault(dependencyMap[16]).czincX);
  obj7.onPress = importDefault(dependencyMap[6]).pop;
  items3[1] = callback(arg1(dependencyMap[20]).Button, obj7);
  obj5.children = items3;
  obj4.children = callback2(arg1(dependencyMap[19]).ButtonGroup, obj5);
  items2[1] = callback(arg1(dependencyMap[18]).ModalFooter, obj4);
  obj.children = items2;
  return callback2(arg1(dependencyMap[11]).ModalScreen, obj);
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
let closure_7 = obj.createStyles(obj);
const obj1 = { marginTop: importDefault(dependencyMap[4]).space.PX_16, marginBottom: importDefault(dependencyMap[4]).space.PX_4 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default function FamilyCenterModalCancel(otherUser) {
  otherUser = otherUser.otherUser;
  const arg1 = otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => function getScreens(otherUser) {
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: otherUser(closure_2[21]).getHeaderCloseButton(callback(closure_2[6]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return callback(closure_8, { otherUser: arg0 });
      }
    };
    obj.CANCEL = obj;
    return obj;
  }(otherUser), items);
  const obj = { initialRouteName: "CANCEL", screens: memo };
  const intl = arg1(dependencyMap[8]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[8]).t.13/7kX);
  return callback(arg1(dependencyMap[22]).Modal, obj);
};
