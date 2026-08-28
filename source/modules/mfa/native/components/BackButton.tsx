// Module ID: 15205
// Function ID: 15206
// Name: BackButton
// Dependencies: [21, 1500, 15206, 1236, 15200, 2]
// Exports: default

// Module 15205 (BackButton)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import MFAButtonDefault from "MFAButton" /* 15206 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  importDefault = undefined;
  let obj = props(1500);
  importDefault = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = props(1236).intl;
  obj[1] = intl.string(props(1236).t.Tot4EC);
  obj[2] = function onPress() {

  };
  return jsx(MFAButtonDefault, { variant: "secondary", text: null, onPress: null });
};
