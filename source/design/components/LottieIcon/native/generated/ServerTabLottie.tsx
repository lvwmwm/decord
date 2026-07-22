// Module ID: 12935
// Function ID: 98584
// Name: items
// Dependencies: []

// Module 12935 (items)
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = [false, false];
const items = [{ DeeplinkSource: "SETTINGS_PREMIUM_MANAGE_PLAN", ModalFloatingActionProps: "GUILD_SETTINGS_TAG", blacklist: "Array" }, {}];
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  const obj = { dotLottie: ref(dependencyMap[3]), animation: "all", ref, layers: closure_3, markers: items };
  const merged = Object.assign(arg0);
  return jsx(ref(dependencyMap[2]).LottieIcon, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export const ServerTabLottie = forwardRefResult;
