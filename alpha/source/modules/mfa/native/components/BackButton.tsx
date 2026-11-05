// Module ID: 17955
// Function ID: 17956
// Name: BackButton
// Dependencies: [21, 1499, 17956, 1113, 17950, 2]
// Exports: default

// Module 17955 (BackButton)
import Fragment from "Fragment" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 17950 */;
import buttonDefault from "button" /* 17956 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  let closure_1;
  props = props.props;
  const obj = props(1499);
  importDefault = obj.useNavigation();
  buttonDefault;
  const intl = props(1113).intl;
  return <tmp variant="secondary" text={intl.string(props(1113).t.Tot4EC)} onPress={function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  }} />;
};
