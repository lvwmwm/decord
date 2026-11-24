// Module ID: 15848
// Function ID: 15849
// Name: EditButton
// Dependencies: [19, 17, 21, 7591, 8704, 2]
// Exports: default

// Module 15848 (EditButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import IconButton2 from "IconButton" /* 7591 */;
import AssetRegistryDefault from "AssetRegistry" /* 8704 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/profile_customization/native/EditButton.tsx");

export default function EditButton(variant) {
  let accessibilityLabel;
  let onPress;
  let style;
  let str = variant.variant;
  ({ onPress, accessibilityLabel, style } = variant);
  if (str === undefined) {
    str = "primary-overlay";
  }
  const disabled = variant.disabled;
  ({ icon: AssetRegistryDefault, variant: str, size: "sm", onPress, accessibilityLabel, disabled });
  const IconButton = IconButton2.IconButton;
  return <View style={style}>{null}</View>;
};
