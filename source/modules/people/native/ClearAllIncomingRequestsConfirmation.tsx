// Module ID: 8922
// Function ID: 70384
// Name: ClearAllIncomingRequestsConfirmationModal
// Dependencies: []
// Exports: default

// Module 8922 (ClearAllIncomingRequestsConfirmationModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, paddingTop: importDefault(dependencyMap[5]).space.PX_24 };
obj.root = obj;
obj.closeButton = { 1449338582: null, -865846725: null };
const tmp3 = arg1(dependencyMap[3]);
obj.content = { flexGrow: 1, padding: importDefault(dependencyMap[5]).space.PX_16 };
const obj2 = { -2036989357: "<string:354549762>", 996371416: "<string:3477209090>", 5330602: "<string:587203104>", marginTop: importDefault(dependencyMap[5]).space.PX_24 };
obj.container = obj2;
const obj3 = { isArray: null, diversity: null, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, paddingVertical: importDefault(dependencyMap[5]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.footer = obj3;
const obj1 = { flexGrow: 1, padding: importDefault(dependencyMap[5]).space.PX_16 };
obj.header = { marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
const obj4 = { marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.headerText = { marginTop: importDefault(dependencyMap[5]).space.PX_16, marginBottom: importDefault(dependencyMap[5]).space.PX_4 };
const obj5 = { marginTop: importDefault(dependencyMap[5]).space.PX_16, marginBottom: importDefault(dependencyMap[5]).space.PX_4 };
obj.body = { padding: importDefault(dependencyMap[5]).space.PX_24, borderRadius: importDefault(dependencyMap[5]).radii.md, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
const obj6 = { padding: importDefault(dependencyMap[5]).space.PX_24, borderRadius: importDefault(dependencyMap[5]).radii.md, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.noticeHeader = { marginBottom: importDefault(dependencyMap[5]).space.PX_4 };
const obj7 = { marginBottom: importDefault(dependencyMap[5]).space.PX_4 };
obj.buttonWrapper = { marginBottom: importDefault(dependencyMap[5]).space.PX_4 };
let closure_10 = obj.createStyles(obj);
const obj8 = { marginBottom: importDefault(dependencyMap[5]).space.PX_4 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmation.tsx");

export default function ClearAllIncomingRequestsConfirmationModal(incomingRequestCount) {
  const tmp = callback5();
  const tmp2 = callback2(React.useState(false), 2);
  const first = tmp2[0];
  let callback = tmp2[1];
  callback = React.useCallback(() => {
    callback(false);
    let arr = callback(callback1[6]);
    arr = arr.pop();
  }, []);
  const importDefault = callback;
  const callback1 = React.useCallback(() => {
    callback(false);
    const intl = callback(callback1[8]).intl;
    callback(callback1[7]).presentFailedToast(intl.string(callback(callback1[8]).t.R0RpRX));
  }, []);
  const dependencyMap = callback1;
  const items = [callback, callback1];
  const callback2 = React.useCallback(() => {
    callback(true);
    const result = callback(callback1[9]).clearPendingRelationships();
    const obj = callback(callback1[9]);
    result.then(callback).catch(callback1);
  }, items);
  let obj = { top: true };
  obj = { style: tmp.root };
  obj = { accessibilityRole: "button" };
  const intl = callback(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(callback(dependencyMap[8]).t.cpT0Cq);
  obj.source = importDefault(dependencyMap[12]);
  const items1 = [tmp.closeButton];
  obj.style = items1;
  obj.onPress = function onPress() {
    return callback(callback1[6]).pop();
  };
  const items2 = [callback3(importDefault(dependencyMap[11]), obj), ];
  const obj1 = { style: tmp.container };
  const obj2 = { style: tmp.content };
  const obj3 = {};
  const obj4 = { style: tmp.header };
  const obj5 = { style: tmp.headerText, variant: "text-lg/bold" };
  const intl2 = callback(dependencyMap[8]).intl;
  obj5.children = intl2.string(callback(dependencyMap[8]).t.eVjfAu);
  obj4.children = callback3(callback(dependencyMap[13]).Text, obj5);
  const items3 = [callback3(closure_5, obj4), ];
  const obj6 = { style: tmp.body };
  const obj7 = { style: tmp.noticeHeader };
  const intl3 = callback(dependencyMap[8]).intl;
  obj7.children = intl3.format(callback(dependencyMap[8]).t.jaXsA3, { incomingRequestCount: incomingRequestCount.incomingPendingRequestCount });
  obj6.children = callback3(callback(dependencyMap[13]).Text, obj7);
  items3[1] = callback3(closure_5, obj6);
  obj3.children = items3;
  obj2.children = callback4(closure_8, obj3);
  const items4 = [callback3(closure_6, obj2), ];
  const obj8 = { style: tmp.footer };
  const obj9 = { bottom: true };
  const obj10 = {};
  const obj11 = { style: tmp.buttonWrapper };
  const obj12 = { disabled: first, loading: first, variant: "destructive", size: "md" };
  const intl4 = callback(dependencyMap[8]).intl;
  obj12.text = intl4.string(callback(dependencyMap[8]).t.Eq9seb);
  obj12.onPress = callback2;
  obj12.grow = true;
  obj11.children = callback3(callback(dependencyMap[14]).Button, obj12);
  const items5 = [callback3(closure_5, obj11), ];
  const obj13 = { style: tmp.buttonWrapper };
  const obj14 = {};
  const intl5 = callback(dependencyMap[8]).intl;
  obj14.text = intl5.string(callback(dependencyMap[8]).t.ETE/oC);
  obj14.onPress = importDefault(dependencyMap[6]).pop;
  obj13.children = callback3(callback(dependencyMap[14]).Button, obj14);
  items5[1] = callback3(closure_5, obj13);
  obj10.children = items5;
  obj9.children = callback4(closure_8, obj10);
  obj8.children = callback3(callback(dependencyMap[10]).SafeAreaPaddingView, obj9);
  items4[1] = callback3(closure_5, obj8);
  obj1.children = items4;
  items2[1] = callback4(closure_5, obj1);
  obj.children = items2;
  obj.children = callback4(closure_5, obj);
  return callback3(callback(dependencyMap[10]).SafeAreaPaddingView, obj);
};
