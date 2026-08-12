// Module ID: 15063
// Function ID: 15064
// Name: BackButton
// Dependencies: [21, 1499, 15064, 1236, 15058, 2]
// Exports: default

// Module 15063 (BackButton)
import { jsx } from "jsxProd";

const result = require("MFAButton").fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  let importDefault;
  let obj = props(1499);
  importDefault = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = props(1236).intl;
  obj[1] = intl.string(props(1236).t.Tot4EC);
  obj[2] = function onPress() {

  };
  return jsx(importDefault(15064), { variant: "secondary", text: null, onPress: null });
};
