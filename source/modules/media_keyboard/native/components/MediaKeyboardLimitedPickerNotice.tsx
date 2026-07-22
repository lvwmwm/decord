// Module ID: 9668
// Function ID: 75286
// Name: MediaKeyboardLimitedPickerNotice
// Dependencies: []
// Exports: default

// Module 9668 (MediaKeyboardLimitedPickerNotice)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: {}, absoluteContainer: { position: "absolute" }, text: { flex: 1 }, button: { marginLeft: 16 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx");

export default function MediaKeyboardLimitedPickerNotice(onHeightChange) {
  onHeightChange = onHeightChange.onHeightChange;
  const arg1 = onHeightChange;
  const tmp = callback2();
  const items = [onHeightChange];
  let obj = {};
  const items1 = [tmp.container, ];
  let absoluteContainer;
  const callback = React.useCallback((nativeEvent) => {
    if (null != onHeightChange) {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }
  }, items);
  if (null != onHeightChange) {
    absoluteContainer = tmp.absoluteContainer;
  }
  items1[1] = absoluteContainer;
  obj.style = items1;
  obj.onLayout = callback;
  obj = { style: tmp.text, variant: "text-sm/normal" };
  const intl = arg1(dependencyMap[5]).intl;
  obj.children = intl.string(arg1(dependencyMap[5]).t.5g7NcN);
  const items2 = [callback(arg1(dependencyMap[4]).Text, obj), ];
  obj = { style: tmp.button };
  const obj1 = { <string:1986169986>: "<string:141706475>", <string:2487833047>: "<string:570425344>" };
  const intl2 = arg1(dependencyMap[5]).intl;
  obj1.text = intl2.string(arg1(dependencyMap[5]).t.JuXTi6);
  obj1.onPress = onHeightChange.onPress;
  obj.children = callback(arg1(dependencyMap[6]).Button, obj1);
  items2[1] = callback(View, obj);
  obj.children = items2;
  return closure_5(View, obj);
};
