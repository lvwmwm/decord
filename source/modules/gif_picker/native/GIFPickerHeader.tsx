// Module ID: 9580
// Function ID: 74648
// Dependencies: []

// Module 9580
const View = arg1(dependencyMap[1]).View;
arg1(dependencyMap[2]).GIFPickerResultTypes;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { paddingVertical: importDefault(dependencyMap[5]).space.PX_8 };
obj.container = obj;
obj1 = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, height: arg1(dependencyMap[6]).InputHeights.MD + importDefault(dependencyMap[5]).space.PX_4 / 2, gap: importDefault(dependencyMap[5]).space.PX_8 };
obj.header = obj1;
let closure_7 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function GIFPickerHeader(arg0) {
  let categoryType;
  let onQueryChange;
  let onQueryClear;
  let searchInputRef;
  ({ categoryType, onQueryClear } = arg0);
  ({ onQueryChange, searchInputRef } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  const providerForAPIRequest = obj.getProviderForAPIRequest();
  arg1(dependencyMap[8]);
  obj = { style: tmp.container };
  if (categoryType === GIFPickerResultTypes.SEARCH) {
    obj = { size: "md", onChange: onQueryChange, placeholder: tmp4, onClear: onQueryClear, ref: searchInputRef, isRound: true };
    let tmp18Result = callback(arg1(dependencyMap[9]).SearchField, obj);
  } else {
    const obj1 = { style: tmp.header, accessibilityRole: "button", onPress: onQueryClear };
    const intl4 = arg1(dependencyMap[11]).intl;
    const obj2 = {};
    const intl5 = arg1(dependencyMap[11]).intl;
    obj2.destination = intl5.string(arg1(dependencyMap[11]).t.ffgJrs);
    obj1.accessibilityLabel = intl4.formatToPlainString(arg1(dependencyMap[11]).t.UTypEu, obj2);
    const obj3 = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_ACTIVE, size: "sm" };
    const items = [callback(arg1(dependencyMap[12]).ChevronLargeLeftIcon, obj3), ];
    const obj4 = { 0: "explicit_content_friend_dm", -9223372036854775808: "enum", 9223372036854775807: "CVE" };
    if (categoryType === GIFPickerResultTypes.TRENDING_GIFS) {
      const intl3 = arg1(dependencyMap[11]).intl;
      let stringResult = intl3.string(arg1(dependencyMap[11]).t.TsWCdW);
    } else if (categoryType === GIFPickerResultTypes.FAVORITES) {
      const intl2 = arg1(dependencyMap[11]).intl;
      stringResult = intl2.string(arg1(dependencyMap[11]).t.k8fFjp);
    } else {
      const intl = arg1(dependencyMap[11]).intl;
      stringResult = intl.string(arg1(dependencyMap[11]).t.5h0QOP);
    }
    obj4.children = stringResult;
    items[1] = callback(arg1(dependencyMap[13]).Text, obj4);
    obj1.children = items;
    tmp18Result = closure_6(arg1(dependencyMap[10]).PressableOpacity, obj1);
    const tmp18 = closure_6;
    const tmp21 = callback;
  }
  obj.children = tmp18Result;
  return callback(View, obj);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/gif_picker/native/GIFPickerHeader.tsx");

export default memoResult;
