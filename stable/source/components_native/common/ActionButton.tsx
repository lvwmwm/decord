// Module ID: 10767
// Function ID: 10768
// Name: ActionButton
// Dependencies: [19, 17, 21, 5641, 8028, 2]
// Exports: default

// Module 10767 (ActionButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ButtonHooks from "ButtonHooks" /* 5641 */;
import IconButton2 from "IconButton" /* 8028 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("components_native/common/ActionButton.tsx");

export default function ActionButton(IconComponent) {
  let str = "tertiary";
  IconComponent = IconComponent.IconComponent;
  if ("positive" === IconComponent.type) {
    str = "active";
  }
  const obj = ButtonHooks;
  const color = obj.useButtonTextColorStyles(str).color;
  const IconButton = IconButton2.IconButton;
  ({ onPress: obj3.onPress, accessibilityLabel: obj3.accessibilityLabel } = IconComponent);
  return <View style={arg0.styles}>{null}</View>;
};
