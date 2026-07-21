// Module ID: 12928
// Function ID: 98551
// Name: items
// Dependencies: []

// Module 12928 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = [];
const items = [{ navigationReplace: "<string:1595228433>", openTextInVoiceIfVoiceChannel: "<string:1107361793>", hideFrame: "f8abc9efddaeaee5956e3c3ac3b829de" }, {}];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export const ServerTabLottie = forwardRefResult;
