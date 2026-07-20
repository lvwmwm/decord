// Module ID: 12917
// Function ID: 98503
// Name: items
// Dependencies: []

// Module 12917 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = ["Y"];
const items = [{ -44998052: null, -1437179389: null, -1594110876: null }];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/MessagesTabLottie.tsx");

export const MessagesTabLottie = forwardRefResult;
