// Module ID: 9777
// Function ID: 76010
// Name: items
// Dependencies: []

// Module 9777 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = [false, false];
const items = [{ -44998052: null, -1437179389: "center", -1594110876: "100%" }, {}];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx");

export const SpendEarnOrbsLightThemeLottie = forwardRefResult;
