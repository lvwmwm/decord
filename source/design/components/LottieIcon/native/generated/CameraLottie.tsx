// Module ID: 10675
// Function ID: 83223
// Name: items
// Dependencies: []

// Module 10675 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = ["<string:1070994974>"];
const items = [{ navigationReplace: "<string:2018574337>", openTextInVoiceIfVoiceChannel: "<string:2252411347>", hideFrame: "<string:1912603184>" }, { navigationReplace: 24, openTextInVoiceIfVoiceChannel: 24, hideFrame: null }];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = forwardRefResult;
