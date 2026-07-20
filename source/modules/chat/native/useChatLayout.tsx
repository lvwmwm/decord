// Module ID: 3982
// Function ID: 33070
// Name: useChatLayout
// Dependencies: []
// Exports: default, getChatLayout

// Module 3982 (useChatLayout)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/chat/native/useChatLayout.tsx");

export default function useChatLayout() {
  const tmp = importDefault(dependencyMap[1])();
  const arg1 = tmp;
  const items = [tmp];
  return React.useMemo(() => ({ isChatBesideChannelList: tmp >= tmp(closure_2[1]).WindowSizeClassifier.LARGE, isChatLockedOpen: tmp >= tmp(closure_2[1]).WindowSizeClassifier.XLARGE }), items);
};
export const getChatLayout = function getChatLayout() {
  let obj = arg1(dependencyMap[1]);
  const windowSizeClassifier = obj.getWindowSizeClassifier();
  obj = { isChatBesideChannelList: windowSizeClassifier >= arg1(dependencyMap[1]).WindowSizeClassifier.LARGE, isChatLockedOpen: windowSizeClassifier >= arg1(dependencyMap[1]).WindowSizeClassifier.XLARGE };
  return obj;
};
