// Module ID: 15077
// Function ID: 15078
// Name: BackButton
// Dependencies: [21, 1499, 15078, 1236, 15072, 2]
// Exports: default

// Module 15077 (BackButton)
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
  return jsx(importDefault(15078), { variant: "secondary", text: null, onPress: null });
};
