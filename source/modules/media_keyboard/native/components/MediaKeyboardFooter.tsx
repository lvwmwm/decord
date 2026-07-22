// Module ID: 9666
// Function ID: 75283
// Name: FOOTER_HEIGHT
// Dependencies: []

// Module 9666 (FOOTER_HEIGHT)
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4, ActivityIndicator: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { padding: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
obj.label = { memo: 52881784.83212474, accessibilityRole: 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059 };
obj1 = { marginBottom: importDefault(dependencyMap[4]).space.PX_32, height: importDefault(dependencyMap[4]).space.PX_48 };
obj.buttonWrapper = obj1;
const tmp3 = arg1(dependencyMap[2]);
obj.loadingSpinner = { color: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGHEST, margin: importDefault(dependencyMap[4]).space.PX_16 };
let closure_8 = obj1.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGHEST, margin: importDefault(dependencyMap[4]).space.PX_16 };
const memoResult = importAllResult.memo(function MediaKeyboardFooter(arg0) {
  let disabled;
  let onViewAll;
  ({ disabled, onViewAll } = arg0);
  const tmp = callback3();
  let obj = importDefault(dependencyMap[5]);
  if (obj.useHasReachedEnd()) {
    obj = { style: tmp.container };
    obj = { variant: "text-sm/normal", style: tmp.label };
    const intl = arg1(dependencyMap[7]).intl;
    obj.children = intl.string(arg1(dependencyMap[7]).t.mKSwAW);
    const items = [callback(arg1(dependencyMap[6]).Text, obj), , ];
    const obj1 = { style: tmp.buttonWrapper };
    const obj2 = { onPress: onViewAll };
    const intl2 = arg1(dependencyMap[7]).intl;
    obj2.text = intl2.string(arg1(dependencyMap[7]).t.ZT24In);
    obj2.disabled = disabled;
    obj1.children = callback(arg1(dependencyMap[8]).Button, obj2);
    items[1] = callback(closure_3, obj1);
    const obj3 = { source: importDefault(dependencyMap[9]) };
    items[2] = callback(closure_4, obj3);
    obj.children = items;
    let tmp4 = callback2(closure_3, obj);
  } else {
    const obj4 = { style: tmp.loadingSpinner, size: "large", color: tmp.loadingSpinner.color };
    tmp4 = callback(closure_5, obj4);
  }
  return tmp4;
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFooter.tsx");

export default memoResult;
export const FOOTER_HEIGHT = 280;
