// Module ID: 15126
// Function ID: 15127
// Name: BackButton
// Dependencies: [21, 1500, 15127, 1236, 15121, 2]
// Exports: default

// Module 15126 (BackButton)
import { jsx } from "jsxProd";

const result = require("MFAButton").fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  let importDefault;
  let obj = props(1500);
  importDefault = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = props(1236).intl;
  obj[1] = intl.string(props(1236).t.Tot4EC);
  obj[2] = function onPress() {

  };
  return jsx(importDefault(15127), { variant: "secondary", text: null, onPress: null });
};
