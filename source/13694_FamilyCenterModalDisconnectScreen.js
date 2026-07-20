// Module ID: 13694
// Function ID: 103634
// Name: FamilyCenterModalDisconnectScreen
// Dependencies: []
// Exports: default

// Module 13694 (FamilyCenterModalDisconnectScreen)
function FamilyCenterModalDisconnectScreen(otherUser) {
  let tmp8;
  otherUser = otherUser.otherUser;
  const arg1 = otherUser;
  const tmp = callback4();
  let callback = React.useCallback(() => {
    let arr = callback(closure_2[6]);
    arr = arr.pop();
  }, []);
  let obj = importDefault(dependencyMap[7]);
  const name = obj.useName(otherUser);
  let obj1 = arg1(dependencyMap[8]);
  let requiresParentalConsent = obj1.useRequiresParentalConsent(otherUser.id);
  const tmp5 = callback(React.useState(false), 2);
  const first = tmp5[0];
  const importDefault = tmp5[1];
  [tmp8, closure_2] = callback(React.useState(false), 2);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(callback2[10]).intl;
    otherUser(callback2[9]).presentFailedToast(intl.string(otherUser(callback2[10]).t.R0RpRX));
    callback(false);
    callback2(false);
  }, []);
  let obj2 = arg1(dependencyMap[11]);
  const familyCenterActions = obj2.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const disconnectLinkRequest = familyCenterActions.disconnectLinkRequest;
  callback = disconnectLinkRequest;
  const isDisconnectLoading = familyCenterActions.isDisconnectLoading;
  const React = isDisconnectLoading;
  let obj3 = arg1(dependencyMap[12]);
  const intl = arg1(dependencyMap[10]).intl;
  const tmp7 = callback(React.useState(false), 2);
  const intl2 = arg1(dependencyMap[10]).intl;
  const ageSpecificText = obj3.useAgeSpecificText(intl.format(importDefault(dependencyMap[13]).F2lccv, { username: name }), intl2.string(importDefault(dependencyMap[13]).WH+Gba));
  let obj4 = arg1(dependencyMap[12]);
  const intl3 = arg1(dependencyMap[10]).intl;
  const formatResult = intl.format(importDefault(dependencyMap[13]).F2lccv, { username: name });
  const intl4 = arg1(dependencyMap[10]).intl;
  const ageSpecificText1 = obj4.useAgeSpecificText(intl3.string(importDefault(dependencyMap[13]).hOEHFn), intl4.format(importDefault(dependencyMap[13]).Or6hgl, { username: name }));
  let obj5 = arg1(dependencyMap[12]);
  const intl5 = arg1(dependencyMap[10]).intl;
  const stringResult = intl3.string(importDefault(dependencyMap[13]).hOEHFn);
  const intl6 = arg1(dependencyMap[10]).intl;
  const ageSpecificText2 = obj5.useAgeSpecificText(intl5.format(importDefault(dependencyMap[13]).XyRW4c, { username: name }), intl6.format(importDefault(dependencyMap[13]).PlrZal, { username: name }));
  let obj6 = arg1(dependencyMap[12]);
  const intl7 = arg1(dependencyMap[10]).intl;
  const formatResult1 = intl5.format(importDefault(dependencyMap[13]).XyRW4c, { username: name });
  const intl8 = arg1(dependencyMap[10]).intl;
  const ageSpecificText3 = obj6.useAgeSpecificText(intl7.string(importDefault(dependencyMap[13]).eiABQz), intl8.string(importDefault(dependencyMap[13]).PGQBnk));
  let obj7 = arg1(dependencyMap[12]);
  const intl9 = arg1(dependencyMap[10]).intl;
  const stringResult1 = intl7.string(importDefault(dependencyMap[13]).eiABQz);
  const intl10 = arg1(dependencyMap[10]).intl;
  const items = [disconnectLinkRequest, otherUser.id];
  const ageSpecificText4 = obj7.useAgeSpecificText(intl9.string(importDefault(dependencyMap[13]).sCbKs4), intl10.string(importDefault(dependencyMap[13]).0ki7+P));
  const items1 = [isDisconnectLoading];
  const callback2 = React.useCallback(() => {
    disconnectLinkRequest(otherUser.id);
  }, items);
  const items2 = [isDisconnectLoading];
  const callback3 = React.useCallback((arg0) => {
    if (!isDisconnectLoading) {
      callback(arg0);
    }
  }, items1);
  const callback4 = React.useCallback((arg0) => {
    if (!isDisconnectLoading) {
      callback2(arg0);
    }
  }, items2);
  obj = {};
  obj = {};
  obj1 = { style: tmp.header };
  obj2 = { otherUser };
  const stringResult2 = intl9.string(importDefault(dependencyMap[13]).sCbKs4);
  const tmp24 = callback3;
  const tmp25 = callback3;
  obj2.iconSrc = importDefault(dependencyMap[17]);
  const items3 = [callback2(importDefault(dependencyMap[16]), obj2), , ];
  obj3 = { style: tmp.title, variant: "text-lg/bold" };
  const intl11 = arg1(dependencyMap[10]).intl;
  obj3.children = intl11.format(importDefault(dependencyMap[13]).o0JXuK, { username: name });
  items3[1] = callback2(arg1(dependencyMap[18]).Text, obj3);
  obj4 = { style: tmp.subtitle, children: ageSpecificText };
  items3[2] = callback2(arg1(dependencyMap[18]).Text, obj4);
  obj1.children = items3;
  const items4 = [callback3(View, obj1), , , ];
  if (requiresParentalConsent) {
    obj5 = { style: tmp.warning, text: ageSpecificText1 };
    requiresParentalConsent = callback2(importDefault(dependencyMap[19]), obj5);
  }
  items4[1] = requiresParentalConsent;
  obj6 = { style: tmp.body, children: ageSpecificText2 };
  items4[2] = callback2(arg1(dependencyMap[18]).Text, obj6);
  obj7 = { spacing: importDefault(dependencyMap[5]).space.PX_12 };
  const items5 = [callback2(arg1(dependencyMap[21]).Checkbox, { label: ageSpecificText3, checked: first, onToggle: callback3 }), callback2(arg1(dependencyMap[21]).Checkbox, { label: ageSpecificText4, checked: tmp8, onToggle: callback4 })];
  obj7.children = items5;
  items4[3] = callback3(arg1(dependencyMap[20]).Stack, obj7);
  obj.children = items4;
  const items6 = [tmp25(arg1(dependencyMap[15]).ModalContent, obj), ];
  const obj8 = {};
  const obj9 = {};
  const obj10 = { variant: "destructive" };
  let tmp33 = !first;
  if (!tmp33) {
    tmp33 = !tmp8;
  }
  if (!tmp33) {
    tmp33 = isDisconnectLoading;
  }
  obj10.disabled = tmp33;
  obj10.loading = isDisconnectLoading;
  const intl12 = arg1(dependencyMap[10]).intl;
  obj10.text = intl12.string(importDefault(dependencyMap[13]).c5L+sl);
  obj10.onPress = callback2;
  const items7 = [callback2(arg1(dependencyMap[24]).Button, obj10), ];
  const obj11 = { variant: "tertiary" };
  const intl13 = arg1(dependencyMap[10]).intl;
  obj11.text = intl13.string(arg1(dependencyMap[10]).t.3ilveh);
  obj11.onPress = importDefault(dependencyMap[6]).pop;
  items7[1] = callback2(arg1(dependencyMap[24]).Button, obj11);
  obj9.children = items7;
  obj8.children = callback3(arg1(dependencyMap[23]).ButtonGroup, obj9);
  items6[1] = callback2(arg1(dependencyMap[22]).ModalFooter, obj8);
  obj.children = items6;
  return tmp24(arg1(dependencyMap[14]).ModalScreen, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { y: 0, gatedChannel: 0, y: 0, marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.header = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.title = { marginTop: importDefault(dependencyMap[5]).space.PX_24, textAlign: "center" };
const obj1 = { marginTop: importDefault(dependencyMap[5]).space.PX_24, textAlign: "center" };
obj.subtitle = { marginTop: importDefault(dependencyMap[5]).space.PX_8, textAlign: "center" };
const obj2 = { marginTop: importDefault(dependencyMap[5]).space.PX_8, textAlign: "center" };
obj.warning = { marginBottom: importDefault(dependencyMap[5]).space.PX_12 };
const obj3 = { marginBottom: importDefault(dependencyMap[5]).space.PX_12 };
obj.body = { marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
let closure_8 = obj.createStyles(obj);
const obj4 = { marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDisconnect.tsx");

export default function FamilyCenterModalDisconnect(otherUser) {
  otherUser = otherUser.otherUser;
  const arg1 = otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => function getScreens(otherUser) {
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: otherUser(closure_2[25]).getHeaderCloseButton(callback(closure_2[6]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return callback(closure_9, { otherUser: arg0 });
      }
    };
    obj.DISCONNECT = obj;
    return obj;
  }(otherUser), items);
  const obj = { initialRouteName: "DISCONNECT", screens: memo };
  const intl = arg1(dependencyMap[10]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[10]).t.13/7kX);
  return callback2(arg1(dependencyMap[26]).Modal, obj);
};
