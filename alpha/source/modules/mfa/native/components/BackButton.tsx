// Module ID: 17550
// Function ID: 17551
// Name: BackButton
// Dependencies: [21, 558, 576, 1503, 1125, 17547, 17544, 2]

// Module 17550 (BackButton)
import Fragment from "Fragment" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 17544 */;
import buttonDefault from "button" /* 17547 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, navigation;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function BackButton(props) {
  let first;
  const obj = props(576);
  const cResult = obj.c(4);
  props = props.props;
  const obj2 = props(1503);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(props(1125).t.Tot4EC);
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
  const tmp8 = jsx(navigation(17547), {
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
  const obj = props(1503);
  importDefault = obj.useNavigation();
  buttonDefault;
  const intl = props(1125).intl;
  return <tmp variant="secondary" text={intl.string(props(1125).t.Tot4EC)} onPress={function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  }} />;
});
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default tmp2;
