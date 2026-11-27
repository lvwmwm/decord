// Module ID: 17307
// Function ID: 17308
// Name: BackButton
// Dependencies: [21, 1501, 17308, 1112, 17302, 2]
// Exports: default

// Module 17307 (BackButton)
import Fragment from "Fragment" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 17302 */;
import buttonDefault from "button" /* 17308 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  let closure_1;
  props = props.props;
  const obj = props(1501);
  importDefault = obj.useNavigation();
  buttonDefault;
  const intl = props(1112).intl;
  return <tmp variant="secondary" text={intl.string(props(1112).t.Tot4EC)} onPress={function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  }} />;
};
