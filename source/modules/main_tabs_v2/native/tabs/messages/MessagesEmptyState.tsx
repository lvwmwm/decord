// Module ID: 14962
// Function ID: 114022
// Name: MessagesEmptyState
// Dependencies: [57, 31, 27, 33, 4130, 1450, 1456, 8559, 480, 4663, 13999, 14959, 4126, 1212, 4543, 2]
// Exports: default

// Module 14962 (MessagesEmptyState)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_5, Image: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, justifyContent: "center" }, scrollViewContentContainer: { flexGrow: 2 }, innerContainer: { alignItems: "center", justifyContent: "center" }, imageContainer: { alignItems: "center", marginBottom: 24 }, textWrapper: { paddingHorizontal: 48 }, body: { marginBottom: 24, textAlign: "center" }, title: { textAlign: "center", fontSize: 18, marginBottom: 8 }, buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default function MessagesEmptyState() {
  const tmp = callback4();
  let width = navigation(1450)().width;
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  const _require = tmp2[1];
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = _require(1456);
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback1 = React.useCallback(() => {
    navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
  }, items);
  obj = { type: _require(480).ImpressionTypes.VIEW, name: _require(480).ImpressionNames.MESSAGES_EMPTY_NUX };
  navigation(8559)(obj);
  if (first > 0) {
    width = first;
  }
  const result = 0.9 * width;
  let obj2 = _require(4663);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  _require(13999);
  obj = { alwaysBounceVertical: false, bounces: false };
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
  const obj5 = { resizeMode: "contain", source: navigation(14959) };
  const obj6 = {};
  let num = 350;
  if (result < 622) {
    num = result / 622 * 350;
  }
  obj6.height = num;
  obj6.width = Math.min(result, 622);
  obj5.style = obj6;
  obj4.children = callback2(closure_6, obj5);
  const items2 = [callback2(closure_5, obj4), ];
  const obj7 = { style: tmp.textWrapper };
  const obj8 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp.title };
  const intl = _require(1212).intl;
  obj8.children = intl.string(_require(1212).t["8JZof8"]);
  const items3 = [callback2(_require(4126).Heading, obj8), ];
  const obj9 = { color: "text-default", variant: "text-md/medium", style: tmp.body };
  const intl2 = _require(1212).intl;
  obj9.children = intl2.string(_require(1212).t["qm+H7x"]);
  items3[1] = callback2(_require(4126).Text, obj9);
  obj7.children = items3;
  items2[1] = callback3(closure_5, obj7);
  obj3.children = items2;
  const items4 = [callback3(closure_5, obj3), ];
  const obj10 = { style: tmp.buttonWrapper };
  const obj11 = {};
  const intl3 = _require(1212).intl;
  obj11.text = intl3.string(_require(1212).t.zIJnA6);
  obj11.onPress = callback1;
  obj11.size = "lg";
  obj10.children = callback2(_require(4543).Button, obj11);
  items4[1] = callback2(closure_5, obj10);
  obj2.children = items4;
  obj.children = callback3(closure_5, obj2);
  return callback2(closure_7, obj);
};
