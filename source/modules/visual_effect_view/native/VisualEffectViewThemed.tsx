// Module ID: 8504
// Function ID: 67859
// Dependencies: []

// Module 8504
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let obj = ref(dependencyMap[3]);
  let str = "dark";
  if (obj.isThemeLight(tmp)) {
    str = "light";
  }
  obj = { ref, blurTheme: str };
  const tmp = importDefault(dependencyMap[2])();
  const merged = Object.assign(arg0);
  return jsx(importDefault(dependencyMap[4]), obj);
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;
