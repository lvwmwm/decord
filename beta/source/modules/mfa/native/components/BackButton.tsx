// Module ID: 15954
// Function ID: 15955
// Name: BackButton
// Dependencies: [21, 558, 568, 1488, 1119, 15951, 15948, 2]

// Module 15954 (BackButton)
import jsxProd from "jsxProd" /* 21 */;
import MfaStepsTypes from "MfaStepsTypes" /* 15948 */;
import buttonDefault from "button" /* 15951 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/components/BackButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((props) => {
  const cResult = props(568).c(4);
  props = props.props;
  const obj = props(568);
  const navigation = props(1488).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.Tot4EC);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === navigation) {
    if (cResult[2] === props) {
      let tmp7 = cResult[3];
    }
    return tmp7;
  }
  const tmp8 = jsx(navigation(15951), {
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
}) : ((props) => {
  props = props.props;
  importDefault = props(1488).useNavigation();
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const obj = props(1488);
  const intl = props(1119).intl;
  obj2.text = intl.string(props(1119).t.Tot4EC);
  obj2.onPress = function onPress() {
    closure_1.push(MfaStepsTypes.MfaScreens.SELECT, props);
  };
  return jsx(buttonDefault, { variant: "secondary", text: null, onPress: null });
});
