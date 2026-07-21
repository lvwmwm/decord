// Module ID: 12944
// Function ID: 98575
// Name: items
// Dependencies: []

// Module 12944 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = ["e"];
const items = [{ navigationReplace: 2.5, openTextInVoiceIfVoiceChannel: "relative", hideFrame: -16 }];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem9Lottie.tsx");

export const NitroGem9Lottie = forwardRefResult;
