// Module ID: 17108
// Function ID: 17109
// Name: BackButton
// Dependencies: [21, 1500, 17109, 1112, 17103, 2]
// Exports: default

// Module 17108 (BackButton)
import Fragment from "Fragment" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 17103 */;
import buttonDefault from "button" /* 17109 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  let closure_1;
  props = props.props;
  const obj = props(1500);
  importDefault = obj.useNavigation();
  buttonDefault;
  const intl = props(1112).intl;
  return <tmp variant="secondary" text={intl.string(props(1112).t.Tot4EC)} onPress={function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  }} />;
};
