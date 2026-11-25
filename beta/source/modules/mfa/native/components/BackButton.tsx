// Module ID: 17104
// Function ID: 17105
// Name: BackButton
// Dependencies: [21, 1500, 17105, 1112, 17099, 2]
// Exports: default

// Module 17104 (BackButton)
import Fragment from "Fragment" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 17099 */;
import buttonDefault from "button" /* 17105 */;
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
