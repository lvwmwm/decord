// Module ID: 13823
// Function ID: 13824
// Name: ActionButton
// Dependencies: [19, 17, 21, 5518, 7591, 2]
// Exports: default

// Module 13823 (ActionButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ButtonHooks from "ButtonHooks" /* 5518 */;
import IconButton2 from "IconButton" /* 7591 */;
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
