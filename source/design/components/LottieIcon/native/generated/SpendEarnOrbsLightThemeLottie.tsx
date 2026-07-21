// Module ID: 9782
// Function ID: 76026
// Name: items
// Dependencies: []

// Module 9782 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = [true, true];
const items = [{ "Null": "<string:1107296256>", "Null": "*/*", "Null": "audio/*" }, { "Null": "application/msword", "Null": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "Null": "image/*" }];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx");

export const SpendEarnOrbsLightThemeLottie = forwardRefResult;
