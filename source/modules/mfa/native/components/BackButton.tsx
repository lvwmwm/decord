// Module ID: 14691
// Function ID: 111890
// Name: BackButton
// Dependencies: [33, 1456, 14692, 1212, 14686, 2]
// Exports: default

// Module 14691 (BackButton)
import { jsx } from "jsxProd";

const result = require("MFAButton").fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  let obj = props(1456);
  const importDefault = obj.useNavigation();
  obj = { variant: "secondary" };
  const intl = props(1212).intl;
  obj.text = intl.string(props(1212).t.Tot4EC);
  obj.onPress = function onPress() {

  };
  return jsx(importDefault(14692), { variant: "secondary" });
};
