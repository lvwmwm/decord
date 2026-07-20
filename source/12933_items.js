// Module ID: 12933
// Function ID: 98527
// Name: items
// Dependencies: []

// Module 12933 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = ["Y"];
const items = [{ -44998052: 2.5, -1437179389: "relative", -1594110876: -16 }];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem6Lottie.tsx");

export const NitroGem6Lottie = forwardRefResult;
