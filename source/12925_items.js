// Module ID: 12925
// Function ID: 98515
// Name: items
// Dependencies: []

// Module 12925 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = ["Y"];
const items = [{ -44998052: "Array", -1437179389: "onSelectUser", -1594110876: "SU" }, { -44998052: 24, -1437179389: 24, -1594110876: null }];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export const MicrophoneLottie = forwardRefResult;
