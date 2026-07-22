// Module ID: 15441
// Function ID: 117825
// Dependencies: []

// Module 15441
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = { REQUEST: "REQUEST", SPAM: "SPAM" };
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.messageRequestContent = { flex: 1 };
obj1 = { minHeight: 32, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.tabContainer = obj1;
let closure_9 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((navigation) => {
  navigation = navigation.navigation;
  const arg1 = navigation;
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(0), 2);
  const importDefault = tmp2[1];
  const items = [navigation];
  const callback = importAllResult.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = arg1(dependencyMap[6]);
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.label = intl.string(arg1(dependencyMap[7]).t.7RFcXZ);
  obj.id = constants.REQUEST;
  obj.page = callback2(importDefault(dependencyMap[8]), { goToMessageRequestPreview: callback });
  const items1 = [obj, ];
  const obj1 = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj1.label = intl2.string(arg1(dependencyMap[7]).t.ulKXHp);
  obj1.id = constants.SPAM;
  obj1.page = callback2(importDefault(dependencyMap[9]), { goToMessageRequestPreview: callback });
  items1[1] = obj1;
  obj.items = items1;
  obj.pageWidth = tmp2[0];
  obj.defaultIndex = 0;
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const obj2 = { style: tmp.container };
  const items2 = [callback2(View, { style: tmp.tabContainer, onLayout: callback1, children: callback2(arg1(dependencyMap[10]).SegmentedControl, { state: segmentedControlState }) }), , ];
  const obj3 = { style: tmp.tabContainer, onLayout: callback1, children: callback2(arg1(dependencyMap[10]).SegmentedControl, { state: segmentedControlState }) };
  items2[1] = callback2(View, { style: tmp.messageRequestContent, children: callback2(arg1(dependencyMap[11]).SegmentedControlPages, { state: segmentedControlState }) });
  items2[2] = callback2(arg1(dependencyMap[12]).TTIFirstContentfulPaint, { label: "message_requests" });
  obj2.children = items2;
  return callback3(View, obj2);
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx");

export default memoResult;
