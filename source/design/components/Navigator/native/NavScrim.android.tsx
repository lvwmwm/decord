// Module ID: 5445
// Function ID: 46563
// Name: NavScrim
// Dependencies: []

// Module 5445 (NavScrim)
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["backgroundColor"] = importDefault(dependencyMap[4]).colors.ANDROID_NAVIGATION_SCRIM_BACKGROUND;
obj["top"] = undefined;
obj.androidNavScrim = obj;
let closure_4 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(() => {
  const insets = importDefault(dependencyMap[5])({ includeCustomKeyboardHeight: false }).insets;
  let tmp2 = null;
  if (0 !== insets.bottom) {
    let obj = {};
    const items = [tmp.androidNavScrim, ];
    obj = { height: insets.bottom };
    items[1] = obj;
    obj.style = items;
    obj.pointerEvents = "none";
    tmp2 = <View {...obj} />;
  }
  return tmp2;
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/components/Navigator/native/NavScrim.android.tsx");

export const NavScrim = memoResult;
