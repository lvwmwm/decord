// Module ID: 14856
// Function ID: 14857
// Name: BackButton
// Dependencies: [21, 1480, 14857, 1236, 14851, 2]
// Exports: default

// Module 14856 (BackButton)
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
  return jsx(importDefault(14857), { variant: "secondary", text: null, onPress: null });
};
