// Module ID: 17603
// Function ID: 17604
// Name: BackButton
// Dependencies: [21, 1498, 17604, 1114, 17598, 2]
// Exports: default

// Module 17603 (BackButton)
import Fragment from "Fragment" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 17598 */;
import buttonDefault from "button" /* 17604 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default function BackButton(props) {
  let closure_1;
  props = props.props;
  const obj = props(1498);
  importDefault = obj.useNavigation();
  buttonDefault;
  const intl = props(1114).intl;
  return <tmp variant="secondary" text={intl.string(props(1114).t.Tot4EC)} onPress={function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  }} />;
};
