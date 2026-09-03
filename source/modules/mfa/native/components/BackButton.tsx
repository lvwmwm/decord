// Module ID: 15514
// Function ID: 15515
// Name: BackButton
// Dependencies: [21, 1498, 15515, 1233, 15509, 2]
// Exports: default

// Module 15514 (BackButton)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import MFAButtonDefault from "MFAButton" /* 15515 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  importDefault = undefined;
  let obj = props(1498);
  importDefault = obj.useNavigation();
  obj = { variant: "secondary", text: null, onPress: null };
  const intl = props(1233).intl;
  obj[1] = intl.string(props(1233).t.Tot4EC);
  obj[2] = function onPress() {

  };
  return jsx(MFAButtonDefault, { variant: "secondary", text: null, onPress: null });
};
