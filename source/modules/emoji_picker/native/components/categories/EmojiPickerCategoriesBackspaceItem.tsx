// Module ID: 9416
// Function ID: 73286
// Name: EmojiPickerCategoriesBackspaceItem
// Dependencies: []
// Exports: default

// Module 9416 (EmojiPickerCategoriesBackspaceItem)
let closure_2 = importAll(dependencyMap[0]);
const Pressable = arg1(dependencyMap[1]).Pressable;
const NODE_MARGIN = arg1(dependencyMap[2]).NODE_MARGIN;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesBackspaceItem.tsx");

export default function EmojiPickerCategoriesBackspaceItem(onBackspace) {
  let iconStyle;
  let style;
  onBackspace = onBackspace.onBackspace;
  const arg1 = onBackspace;
  let React;
  ({ style, iconStyle } = onBackspace);
  const interval = new arg1(closure_1[4]).Interval();
  closure_1 = React.useRef(interval);
  const delayedCall = new arg1(closure_1[4]).DelayedCall(500, () => {
    const current = closure_2.current;
    current.cancel();
    const current2 = ref.current;
    current2.start(50, onBackspace);
  });
  React = React.useRef(delayedCall);
  const items = [onBackspace];
  const items1 = [onBackspace];
  const callback = React.useCallback(() => {
    onBackspace();
    const current = closure_2.current;
    current.delay();
  }, items);
  const callback1 = React.useCallback(() => {
    const current = closure_2.current;
    current.cancel();
    const current2 = ref.current;
    current2.stop();
    onBackspace();
  }, items1);
  const effect = React.useEffect(() => {
    const onBackspace = ref.current;
    return () => {
      current.stop();
      current.cancel();
    };
  });
  let obj = { hitSlop: obj, style, accessibilityRole: "keyboardkey" };
  obj = { top: NODE_MARGIN, bottom: NODE_MARGIN, right: NODE_MARGIN, left: NODE_MARGIN };
  const intl = arg1(closure_1[5]).intl;
  obj.accessibilityLabel = intl.string(arg1(closure_1[5]).t.4SnBzF);
  obj.delayLongPress = 500;
  obj.onPressOut = callback1;
  obj.onLongPress = callback;
  const items2 = [iconStyle, { opacity: 0.5 }];
  obj.children = jsx(arg1(closure_1[6]).BackspaceIcon, { style: items2 });
  return <Pressable {...obj} />;
};
