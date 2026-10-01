// Module ID: 10120
// Function ID: 10121
// Name: MediaKeyboardLimitedPickerNotice
// Dependencies: [19, 17, 21, 4836, 4832, 1115, 5281, 2]
// Exports: default

// Module 10120 (MediaKeyboardLimitedPickerNotice)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { flexDirection: "row", paddingHorizontal: 16, paddingVertical: 16, alignItems: "center" }, absoluteContainer: { position: "absolute" }, text: { flex: 1 }, button: { marginLeft: 16 } });
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx");

export default function MediaKeyboardLimitedPickerNotice(onHeightChange) {
  let Button;
  let intl;
  let intl2;
  let items2;
  let obj4;
  onHeightChange = onHeightChange.onHeightChange;
  const onPress = onHeightChange.onPress;
  const tmp = closure_6();
  const items = [onHeightChange];
  const items1 = [tmp.container, ];
  let absoluteContainer;
  const callback = react.useCallback((nativeEvent) => {
    if (onHeightChange != null) {
      tmp(nativeEvent.nativeEvent.layout.height);
    }
  }, items);
  const tmp3 = hasOwnProperty;
  if (null != onHeightChange) {
    absoluteContainer = tmp.absoluteContainer;
  }
  const obj = { style: items1, onLayout: callback, children: items2 };
  items1[1] = absoluteContainer;
  const obj2 = { style: tmp.text, variant: "text-sm/normal", children: intl.string(intl3.t["5g7NcN"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items2 = [React3(Text, obj2), ];
  const obj3 = { style: tmp.button, children: React3(Button, obj4) };
  obj4 = { size: "sm", variant: "tertiary", text: intl2.string(intl3.t.JuXTi6), onPress };
  Button = components_Button_Button.Button;
  intl2 = intl3.intl;
  items2[1] = React3(View, obj3);
  return tmp3(View, obj);
};
