// Module ID: 16447
// Function ID: 16448
// Name: EditButton
// Dependencies: [19, 17, 21, 8028, 8424, 2]
// Exports: default

// Module 16447 (EditButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import IconButton2 from "IconButton" /* 8028 */;
import AssetRegistryDefault from "AssetRegistry" /* 8424 */;
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
