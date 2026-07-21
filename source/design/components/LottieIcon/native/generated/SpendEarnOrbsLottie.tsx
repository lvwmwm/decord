// Module ID: 9785
// Function ID: 76039
// Name: items
// Dependencies: []

// Module 9785 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = [10413550989682148000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003251194631926515];
const items = [{ "Null": "<string:1107296256>", "Null": "*/*", "Null": "audio/*" }, { "Null": "application/msword", "Null": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "Null": "image/*" }];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx");

export const SpendEarnOrbsLottie = forwardRefResult;
