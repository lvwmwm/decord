// Module ID: 11356
// Function ID: 88308
// Name: ChatInputAccessibilityDivider
// Dependencies: []

// Module 11356 (ChatInputAccessibilityDivider)
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_2, View: closure_3 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
const memoResult = importAllResult.memo(() => {
  let obj = arg1(dependencyMap[3]);
  let tmp = null;
  if (obj.useIsScreenReaderEnabled()) {
    tmp = null;
    if (!obj2.isAndroid()) {
      obj = {};
      const intl = arg1(dependencyMap[5]).intl;
      obj.accessibilityLabel = intl.string(arg1(dependencyMap[5]).t.uKZtC/);
      const items = [absoluteFill.absoluteFill, ];
      obj = { height: 1 };
      items[1] = obj;
      obj.style = items;
      tmp = <closure_3 {...obj} />;
    }
    const obj2 = arg1(dependencyMap[4]);
  }
  return tmp;
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/chat_input/native/accessories/ChatInputAccessibilityDivider.tsx");

export const ChatInputAccessibilityDivider = memoResult;
