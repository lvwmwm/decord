// Module ID: 10676
// Function ID: 83236
// Name: items
// Dependencies: []

// Module 10676 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = ["<string:3644014606>"];
const items = [{ DeeplinkSource: "isArray", ModalFloatingActionProps: "accessibilityRole", blacklist: "useStateFromStores" }, { DeeplinkSource: 24, ModalFloatingActionProps: 24, blacklist: null }];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = forwardRefResult;
