// Module ID: 16973
// Function ID: 16974
// Name: BackButton
// Dependencies: [21, 1500, 16974, 1112, 16968, 2]
// Exports: default

// Module 16973 (BackButton)
import Fragment from "Fragment" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 16968 */;
import buttonDefault from "button" /* 16974 */;
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
