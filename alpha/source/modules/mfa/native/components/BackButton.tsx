// Module ID: 15231
// Function ID: 15232
// Name: BackButton
// Dependencies: [21, 1485, 15232, 1115, 15226, 2]
// Exports: default

// Module 15231 (BackButton)
import jsxProd from "jsxProd" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 15226 */;
import buttonDefault from "button" /* 15232 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  props = props.props;
  importDefault = props(1485).useNavigation();
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const obj = props(1485);
  const intl = props(1115).intl;
  obj2.text = intl.string(props(1115).t.Tot4EC);
  obj2.onPress = function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  };
  return jsx(buttonDefault, { variant: "secondary", text: null, onPress: null });
};
