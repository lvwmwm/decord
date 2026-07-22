// Module ID: 12941
// Function ID: 98593
// Name: items
// Dependencies: []

// Module 12941 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = ["BACKGROUND_SYNC"];
const items = [{ DeeplinkSource: "isArray", ModalFloatingActionProps: "accessibilityRole", blacklist: "useStateFromStores" }, { DeeplinkSource: 24, ModalFloatingActionProps: 24, blacklist: null }];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export const MicrophoneLottie = forwardRefResult;
