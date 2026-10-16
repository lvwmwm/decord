// Module ID: 16661
// Function ID: 16662
// Name: BackButton
// Dependencies: [21, 558, 576, 1505, 1128, 16658, 16655, 2]

// Module 16661 (BackButton)
import Fragment from "Fragment" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 16655 */;
import buttonDefault from "button" /* 16658 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, navigation;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function BackButton(props) {
  let first;
  const obj = props(576);
  const cResult = obj.c(4);
  props = props.props;
  const obj2 = props(1505);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(props(1128).t.Tot4EC);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === navigation) {
    let tmp7;
    if (cResult[2] === props) {
      tmp7 = cResult[3];
    }
    return tmp7;
  }
  const tmp8 = jsx(navigation(16658), {
    variant: "secondary",
    text: first,
    onPress() {
      navigation.push(MfaStepsTypes.MfaScreens.SELECT, props);
    }
  });
  cResult[1] = navigation;
  cResult[2] = props;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function BackButton(props) {
  let closure_1;
  props = props.props;
  const obj = props(1505);
  importDefault = obj.useNavigation();
  buttonDefault;
  const intl = props(1128).intl;
  return <tmp variant="secondary" text={intl.string(props(1128).t.Tot4EC)} onPress={function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  }} />;
});
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default tmp2;
