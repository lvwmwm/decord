// Module ID: 8372
// Function ID: 8373
// Name: TwinButtons
// Dependencies: [19, 17, 21, 4836, 576, 5288, 5281, 2]
// Exports: TwinButtons

// Module 8372 (TwinButtons)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0) => {
  let space;
  let str = "row";
  if (arg0) {
    str = "column";
  }
  const container = { flexDirection: str, gap: arg0 ? space.PX_8 : space.PX_12 };
  space = nativeDefault.space;
  return { container, button: { flex: 1 } };
});
const result = size.fileFinishedImporting("design/components/experimental/Button/native/TwinButtons.native.tsx");

export const TwinButtons = function TwinButtons(children) {
  let button;
  _require = undefined;
  children = children.children;
  const obj = require("useFontScale");
  let tmp = closure_6(obj.useFontScale() > 1.2);
  _require = tmp;
  const Children = react.Children;
  return <View style={tmp.container}>{Children.map(children, (type) => {
    let tmp = null;
    if (react.isValidElement(type)) {
      tmp = null;
      if (type.type === components_Button_Button.Button) {
        tmp = <View style={button.button}>{arg0}</View>;
      }
    }
    return tmp;
  })}</View>;
};
