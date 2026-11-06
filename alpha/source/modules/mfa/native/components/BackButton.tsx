// Module ID: 17943
// Function ID: 17944
// Name: BackButton
// Dependencies: [21, 1499, 17944, 1113, 17938, 2]
// Exports: default

// Module 17943 (BackButton)
import Fragment from "Fragment" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 17938 */;
import buttonDefault from "button" /* 17944 */;
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
