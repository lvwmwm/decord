// Module ID: 14846
// Function ID: 111854
// Name: MessagesEmptyState
// Dependencies: []
// Exports: default

// Module 14846 (MessagesEmptyState)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_10 = arg1(dependencyMap[4]).createStyles({ container: { "Null": "<string:3942646034>", "Null": "<string:3355444267>" }, scrollViewContentContainer: { flexGrow: 2 }, innerContainer: { <string:3596066964>: null, <string:3638417373>: null }, imageContainer: {}, textWrapper: { paddingHorizontal: 48 }, body: { value: true, on: null }, title: {}, buttonWrapper: { getMessageAuthorWithProcessedColor: null, UPLOAD_FAIL: null } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default function MessagesEmptyState() {
  const tmp = callback5();
  let width = importDefault(dependencyMap[5])().width;
  const tmp2 = callback2(React.useState(0), 2);
  const first = tmp2[0];
  let callback = tmp2[1];
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = callback(dependencyMap[6]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const items = [navigation];
  const callback1 = React.useCallback(() => {
    navigation.navigate("friends", { screen: "add-friends", params: { height: false, flexDirection: false } });
  }, items);
  obj = { type: callback(dependencyMap[8]).ImpressionTypes.VIEW, name: callback(dependencyMap[8]).ImpressionNames.MESSAGES_EMPTY_NUX };
  importDefault(dependencyMap[7])(obj);
  if (first > 0) {
    width = first;
  }
  const result = 0.9 * width;
  let obj2 = callback(dependencyMap[9]);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  callback(dependencyMap[10]);
  obj = { url: true, y: true };
  const items1 = [tmp.scrollViewContentContainer, ];
  let tmp15;
  if (isScreenLandscape) {
    const obj1 = { paddingBottom: tmp12 };
    tmp15 = obj1;
  }
  items1[1] = tmp15;
  obj.contentContainerStyle = items1;
  obj2 = { style: tmp.container, onLayout: callback };
  const obj3 = { style: tmp.innerContainer };
  const obj4 = { style: tmp.imageContainer };
  const obj5 = { resizeMode: "contain", source: importDefault(dependencyMap[11]) };
  const obj6 = {};
  let num = 350;
  if (result < 622) {
    num = result / 622 * 350;
  }
  obj6.height = num;
  obj6.width = Math.min(result, 622);
  obj5.style = obj6;
  obj4.children = callback3(closure_6, obj5);
  const items2 = [callback3(closure_5, obj4), ];
  const obj7 = { style: tmp.textWrapper };
  const obj8 = { style: tmp.title };
  const intl = callback(dependencyMap[13]).intl;
  obj8.children = intl.string(callback(dependencyMap[13]).t.8JZof8);
  const items3 = [callback3(callback(dependencyMap[12]).Heading, obj8), ];
  const obj9 = { "Null": "row", "Null": "center", style: tmp.body };
  const intl2 = callback(dependencyMap[13]).intl;
  obj9.children = intl2.string(callback(dependencyMap[13]).t.qm+H7x);
  items3[1] = callback3(callback(dependencyMap[12]).Text, obj9);
  obj7.children = items3;
  items2[1] = callback4(closure_5, obj7);
  obj3.children = items2;
  const items4 = [callback4(closure_5, obj3), ];
  const obj10 = { style: tmp.buttonWrapper };
  const obj11 = {};
  const intl3 = callback(dependencyMap[13]).intl;
  obj11.text = intl3.string(callback(dependencyMap[13]).t.zIJnA6);
  obj11.onPress = callback1;
  obj11.size = "lg";
  obj10.children = callback3(callback(dependencyMap[14]).Button, obj11);
  items4[1] = callback3(closure_5, obj10);
  obj2.children = items4;
  obj.children = callback4(closure_5, obj2);
  return callback3(closure_7, obj);
};
