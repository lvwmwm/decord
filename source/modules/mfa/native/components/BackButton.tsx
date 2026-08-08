// Module ID: 14993
// Function ID: 14994
// Name: BackButton
// Dependencies: [21, 1480, 14994, 1236, 14988, 2]
// Exports: default

// Module 14993 (BackButton)
import { jsx } from "jsxProd";

const result = require("MFAButton").fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  let importDefault;
  let obj = props(1480);
  importDefault = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = props(1236).intl;
  obj[1] = intl.string(props(1236).t.Tot4EC);
  obj[2] = function onPress() {

  };
  return jsx(importDefault(14994), { variant: "secondary", text: null, onPress: null });
};
