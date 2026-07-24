// Module ID: 9709
// Function ID: 75539
// Name: MediaKeyboardLimitedPickerNotice
// Dependencies: [31, 27, 33, 4130, 4126, 1212, 4543, 2]
// Exports: default

// Module 9709 (MediaKeyboardLimitedPickerNotice)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", paddingHorizontal: 16, paddingVertical: 16, alignItems: "center" }, absoluteContainer: { position: "absolute" }, text: { flex: 1 }, button: { marginLeft: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx");

export default function MediaKeyboardLimitedPickerNotice(onHeightChange) {
  onHeightChange = onHeightChange.onHeightChange;
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
  const intl = onHeightChange(1212).intl;
  obj.children = intl.string(onHeightChange(1212).t["5g7NcN"]);
  const items2 = [callback(onHeightChange(4126).Text, obj), ];
  obj = { style: tmp.button };
  const obj1 = { size: "sm", variant: "tertiary" };
  const intl2 = onHeightChange(1212).intl;
  obj1.text = intl2.string(onHeightChange(1212).t.JuXTi6);
  obj1.onPress = onHeightChange.onPress;
  obj.children = callback(onHeightChange(4543).Button, obj1);
  items2[1] = callback(View, obj);
  obj.children = items2;
  return closure_5(View, obj);
};
