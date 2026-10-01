// Module ID: 15231
// Function ID: 15232
// Name: BackButton
// Dependencies: [21, 1485, 15232, 1115, 15226, 2]
// Exports: default

// Module 15231 (BackButton)
import Fragment from "Fragment" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 15226 */;
import buttonDefault from "button" /* 15232 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  let closure_1;
  props = props.props;
  const obj = props(1485);
  importDefault = obj.useNavigation();
  buttonDefault;
  const intl = props(1115).intl;
  return <tmp variant="secondary" text={intl.string(props(1115).t.Tot4EC)} onPress={function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  }} />;
};
