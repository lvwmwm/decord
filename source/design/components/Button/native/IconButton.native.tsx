// Module ID: 7765
// Function ID: 61684
// Name: IconButton
// Dependencies: []

// Module 7765 (IconButton)
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).createStyles((arg0) => {
  let obj = {};
  obj = { paddingBottom: importDefault(dependencyMap[3]).space.PX_4, gap: importDefault(dependencyMap[3]).space.PX_8, alignItems: "center", alignSelf: "center" };
  let num = 0;
  if (arg0) {
    num = 1;
  }
  obj.flexGrow = num;
  obj.labelPressable = obj;
  obj.label = { textAlign: "center" };
  return obj;
});
const obj2 = arg1(dependencyMap[2]);
const forwardRefResult = importAllResult.forwardRef((grow, ref) => {
  let accessibilityHint;
  let accessibilityLabel;
  let label;
  let maxFontSizeMultiplier;
  ({ label, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint } = grow);
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(grow, obj);
  const tmp3 = callback3(grow.grow);
  if (null != label) {
    obj = { style: tmp3.labelPressable };
    const merged1 = Object.assign(merged);
    obj["variant"] = "none";
    obj["accessibilityLabel"] = accessibilityLabel;
    obj["accessibilityHint"] = accessibilityHint;
    obj = { ref };
    const merged2 = Object.assign(merged);
    obj["accessibilityRole"] = "none";
    obj["accessibilityLabel"] = "";
    obj["size"] = "lg";
    obj["maxFontSizeMultiplier"] = maxFontSizeMultiplier;
    const items = [callback(ref(dependencyMap[5]).BaseIconButton, obj), ];
    const obj1 = { delete: 1, dispatch: 22, raw: "exposure_tracking", style: tmp3.label, maxFontSizeMultiplier, children: label };
    items[1] = callback(ref(dependencyMap[6]).Text, obj1);
    obj["children"] = items;
    let tmp10 = callback2(ref(dependencyMap[4]).BaseButton, obj);
  } else {
    const obj2 = { ref };
    const merged3 = Object.assign(merged);
    obj2["accessibilityLabel"] = accessibilityLabel;
    obj2["accessibilityHint"] = accessibilityHint;
    obj2["maxFontSizeMultiplier"] = maxFontSizeMultiplier;
    tmp10 = callback(ref(dependencyMap[5]).BaseIconButton, obj2);
  }
  return tmp10;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Button/native/IconButton.native.tsx");

export const IconButton = forwardRefResult;
