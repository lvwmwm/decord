// Module ID: 11703
// Function ID: 90915
// Name: ContactSyncLandingOnboardingRedesign
// Dependencies: []
// Exports: default

// Module 11703 (ContactSyncLandingOnboardingRedesign)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6 } = arg1(dependencyMap[2]));
const NativePermissionTypes = arg1(dependencyMap[3]).NativePermissionTypes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { "Null": 1102668032, "Null": 65717, "Null": 3962113, "Null": 131072 };
const tmp3 = arg1(dependencyMap[4]);
obj.marginTop = -importDefault(dependencyMap[6]).space.PX_32 - arg1(dependencyMap[7]).NAV_BAR_HEIGHT;
obj.content = obj;
const obj1 = { <string:1140607356>: null, <string:1751293292>: null, marginBottom: importDefault(dependencyMap[6]).space.PX_24 };
obj.headerImage = obj1;
const tmp4 = -importDefault(dependencyMap[6]).space.PX_32;
obj.title = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
const obj2 = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
obj.subtitle = { marginBottom: importDefault(dependencyMap[6]).space.PX_24 };
const obj4 = { <string:1140607356>: false, <string:1751293292>: false, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.buttonContainer = obj4;
const obj3 = { marginBottom: importDefault(dependencyMap[6]).space.PX_24 };
obj.trailing = { paddingBottom: importDefault(dependencyMap[6]).space.PX_4, justifyContent: "flex-end", paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
let closure_11 = obj.createStyles(obj);
const obj5 = { paddingBottom: importDefault(dependencyMap[6]).space.PX_4, justifyContent: "flex-end", paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx");

export default function ContactSyncLandingOnboardingRedesign(onNext) {
  let discoverabilityEnabled;
  let error;
  let loading;
  let setDiscoverabilityEnabled;
  onNext = onNext.onNext;
  const arg1 = onNext;
  ({ loading, error, discoverabilityEnabled, setDiscoverabilityEnabled } = onNext);
  const tmp2 = callback4();
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [onNext];
  let obj = {};
  obj = { style: tmp2.content };
  obj = { resizeMode: "contain", style: tmp2.headerImage };
  const callback = React.useCallback(callback(tmp), items);
  obj.source = importDefault(dependencyMap[9]);
  const items1 = [callback2(closure_6, obj), , , , ];
  const obj1 = { style: tmp2.title, variant: "heading-xl/bold" };
  const intl = arg1(dependencyMap[11]).intl;
  obj1.children = intl.string(arg1(dependencyMap[11]).t./G+nci);
  items1[1] = callback2(arg1(dependencyMap[10]).Text, obj1);
  const obj2 = { style: tmp2.subtitle, variant: "text-sm/medium" };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[11]).t.G8zcHt);
  items1[2] = callback2(arg1(dependencyMap[10]).Text, obj2);
  const obj3 = { style: tmp2.buttonContainer };
  const obj4 = { <string:1522289750>: null, <string:570601313>: null };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[11]).t.LhlgY9);
  obj4.onPress = callback;
  obj4.loading = loading;
  obj3.children = callback2(arg1(dependencyMap[12]).Button, obj4);
  items1[3] = callback2(closure_5, obj3);
  items1[4] = callback2(importDefault(dependencyMap[13]), { error });
  obj.children = items1;
  const items2 = [callback3(closure_5, obj), callback2(closure_5, { style: tmp2.trailing, children: callback2(importDefault(dependencyMap[14]), { discoverabilityEnabled, onValueChanged: setDiscoverabilityEnabled }) })];
  obj.children = items2;
  return callback3(closure_10, obj);
};
