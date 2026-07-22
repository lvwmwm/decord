// Module ID: 9652
// Function ID: 75194
// Dependencies: []

// Module 9652
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[3]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = { height: arg1(dependencyMap[2]).HEADER_HANDLE_HEIGHT, paddingBottom: importDefault(dependencyMap[5]).space.PX_4 };
obj.headerHandleOnlyWrap = obj;
let closure_4 = arg1(dependencyMap[4]).createStyles(obj);
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheetHeaderSimple(arg0) {
  let animatedIndex;
  let onPress;
  ({ animatedIndex, onPress } = arg0);
  return <View style={callback().headerHandleOnlyWrap}>{jsx(importDefault(dependencyMap[6]), { animatedIndex, onPress })}</View>;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default memoResult;
