// Module ID: 9785
// Function ID: 76050
// Name: items
// Dependencies: []

// Module 9785 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = ["capnproto", "capnp"];
const items = [{ navigationReplace: 0, openTextInVoiceIfVoiceChannel: null, hideFrame: "center" }, { navigationReplace: null, openTextInVoiceIfVoiceChannel: "url(#grad)", hideFrame: 26 }];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx");

export const SpendEarnOrbsLottie = forwardRefResult;
