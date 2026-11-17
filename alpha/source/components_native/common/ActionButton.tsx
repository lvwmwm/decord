// Module ID: 15124
// Function ID: 15125
// Name: ActionButton
// Dependencies: [19, 17, 21, 5937, 7999, 2]
// Exports: default

// Module 15124 (ActionButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ButtonHooks from "ButtonHooks" /* 5937 */;
import IconButton2 from "IconButton" /* 7999 */;
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
