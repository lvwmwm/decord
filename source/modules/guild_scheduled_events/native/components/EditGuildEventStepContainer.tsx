// Module ID: 8413
// Function ID: 66937
// Dependencies: [57, 31, 27, 33, 4130, 689, 5160, 2]

// Module 8413
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" };
obj.container = obj;
obj.flex = { flex: 1 };
obj.scroller = { paddingHorizontal: 16 };
_createForOfIteratorHelperLoose = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.buttonContainer = _createForOfIteratorHelperLoose;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let action;
  let children;
  ({ children, action } = arg0);
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(32), 2);
  const importDefault = tmp2[1];
  const insets = importDefault(5160)().insets;
  let obj = { style: tmp.container };
  obj = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled" };
  const items = [tmp.flex, { marginBottom: tmp2[0] + insets.bottom }];
  obj.style = items;
  obj.contentContainerStyle = tmp.scroller;
  obj.children = children;
  callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items1 = [callback2(closure_5, obj), ];
  const items2 = [tmp.buttonContainer, { paddingBottom: insets.bottom }];
  items1[1] = callback2(closure_4, { style: items2, onLayout: callback, children: action });
  obj.children = items1;
  return callback3(closure_4, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx");

export default forwardRefResult;
