// Module ID: 9780
// Function ID: 76023
// Name: items
// Dependencies: []

// Module 9780 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = ["<string:1548877828>", "<string:1253854013>"];
const items = [{ -44998052: null, -1437179389: "center", -1594110876: "100%" }, {}];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx");

export const SpendEarnOrbsLottie = forwardRefResult;
