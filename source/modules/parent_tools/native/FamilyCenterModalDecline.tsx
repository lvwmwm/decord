// Module ID: 13715
// Function ID: 103745
// Name: FamilyCenterModalDeclineScreen
// Dependencies: []
// Exports: default

// Module 13715 (FamilyCenterModalDeclineScreen)
function FamilyCenterModalDeclineScreen(otherUser) {
  otherUser = otherUser.otherUser;
  const arg1 = otherUser;
  const tmp = callback3();
  const callback = React.useCallback(() => {
    let arr = declineLinkRequest(closure_2[6]);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(closure_2[8]).intl;
    otherUser(closure_2[7]).presentFailedToast(intl.string(otherUser(closure_2[8]).t.R0RpRX));
  }, []);
  let obj = arg1(dependencyMap[9]);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const declineLinkRequest = familyCenterActions.declineLinkRequest;
  const importDefault = declineLinkRequest;
  const isDeclineLoading = familyCenterActions.isDeclineLoading;
  const items = [declineLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    declineLinkRequest(otherUser.id);
  }, items);
  importDefault(dependencyMap[10])(!importDefault(dependencyMap[5])(), "FamilyCenterDeclineLinkModal should only be rendered for teens.");
  obj = {};
  obj = {};
  const obj1 = { style: tmp.header };
  const obj2 = { otherUser };
  const tmp2 = importDefault(dependencyMap[5])();
  obj2.iconSrc = importDefault(dependencyMap[14]);
  const items1 = [callback(importDefault(dependencyMap[13]), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold" };
  const intl = arg1(dependencyMap[8]).intl;
  obj3.children = intl.string(importDefault(dependencyMap[16]).teIRCR);
  items1[1] = callback(arg1(dependencyMap[15]).Text, obj3);
  items1[2] = callback(importDefault(dependencyMap[17]), { user: otherUser });
  obj1.children = items1;
  const items2 = [callback2(View, obj1), ];
  const obj4 = { style: tmp.body };
  const obj5 = { style: tmp.noticeHeader };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj5.children = intl2.string(importDefault(dependencyMap[16]).cXgKMD);
  const items3 = [callback(arg1(dependencyMap[15]).Text, obj5), ];
  const obj6 = {};
  const intl3 = arg1(dependencyMap[8]).intl;
  obj6.children = intl3.string(importDefault(dependencyMap[16]).LcM8BS);
  items3[1] = callback(arg1(dependencyMap[15]).Text, obj6);
  obj4.children = items3;
  items2[1] = callback2(View, obj4);
  obj.children = items2;
  const items4 = [callback2(arg1(dependencyMap[12]).ModalContent, obj), ];
  const obj7 = {};
  const obj8 = {};
  const obj9 = { variant: "destructive", disabled: isDeclineLoading, loading: isDeclineLoading };
  const intl4 = arg1(dependencyMap[8]).intl;
  obj9.text = intl4.string(importDefault(dependencyMap[16]).dKxFcn);
  obj9.onPress = callback2;
  const items5 = [callback(arg1(dependencyMap[20]).Button, obj9), ];
  const obj10 = { variant: "tertiary" };
  const intl5 = arg1(dependencyMap[8]).intl;
  obj10.text = intl5.string(arg1(dependencyMap[8]).t.ETE/oC);
  obj10.onPress = importDefault(dependencyMap[6]).pop;
  items5[1] = callback(arg1(dependencyMap[20]).Button, obj10);
  obj8.children = items5;
  obj7.children = callback2(arg1(dependencyMap[19]).ButtonGroup, obj8);
  items4[1] = callback(arg1(dependencyMap[18]).ModalFooter, obj7);
  obj.children = items4;
  return callback2(arg1(dependencyMap[11]).ModalScreen, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginBottom: importDefault(dependencyMap[4]).space.PX_16 };
obj.header = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.headerText = { marginTop: importDefault(dependencyMap[4]).space.PX_16, marginBottom: importDefault(dependencyMap[4]).space.PX_4 };
const obj1 = { marginTop: importDefault(dependencyMap[4]).space.PX_16, marginBottom: importDefault(dependencyMap[4]).space.PX_4 };
obj.body = { padding: importDefault(dependencyMap[4]).space.PX_24, borderRadius: importDefault(dependencyMap[4]).radii.md, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
const obj2 = { padding: importDefault(dependencyMap[4]).space.PX_24, borderRadius: importDefault(dependencyMap[4]).radii.md, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.noticeHeader = { marginBottom: importDefault(dependencyMap[4]).space.PX_4 };
let closure_7 = obj.createStyles(obj);
const obj3 = { marginBottom: importDefault(dependencyMap[4]).space.PX_4 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDecline.tsx");

export default function FamilyCenterModalDecline(otherUser) {
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
    obj.DECLINE = obj;
    return obj;
  }(otherUser), items);
  const obj = { initialRouteName: "DECLINE", screens: memo };
  const intl = arg1(dependencyMap[8]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[8]).t.13/7kX);
  return callback(arg1(dependencyMap[22]).Modal, obj);
};
