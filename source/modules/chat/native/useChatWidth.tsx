// Module ID: 10838
// Function ID: 84112
// Name: useChatWidth
// Dependencies: []
// Exports: default, getChatWidth

// Module 10838 (useChatWidth)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/chat/native/useChatWidth.tsx");

export default function useChatWidth(arg0) {
  let context = React.useContext(importDefault(dependencyMap[4]));
  const width = importDefault(dependencyMap[2])().width;
  arg1(dependencyMap[3]);
  if (null == context) {
    if (null == arg0) {
      let diff = width;
      if (importDefault(dependencyMap[1])().isChatLockedOpen) {
        diff = width - tmp3;
      }
      let tmp4 = diff;
    } else {
      tmp4 = width;
    }
    context = tmp4;
  }
  return context;
};
export const getChatWidth = function getChatWidth(arg0) {
  const obj = arg1(dependencyMap[1]);
  const width = arg1(dependencyMap[2]).getBaseAppContainerDimensions().width;
  if (null == arg0) {
    let diff = width;
    if (obj.getChatLayout().isChatLockedOpen) {
      diff = width - arg1(dependencyMap[3]).getDrawerWidth();
      const obj3 = arg1(dependencyMap[3]);
    }
    let tmp = diff;
  } else {
    tmp = width;
  }
  return tmp;
};
