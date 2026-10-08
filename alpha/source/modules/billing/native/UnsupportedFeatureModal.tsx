// Module ID: 10164
// Function ID: 10165
// Name: UnsupportedFeatureModal
// Dependencies: [19, 17, 21, 558, 576, 5940, 6203, 6679, 5086, 1126, 2]

// Module 10164 (UnsupportedFeatureModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UnsupportedFeatureModal(arg0) {
  let onDismiss;
  let title;
  let tmp4;
  let tmp5;
  const obj = onDismiss(576);
  const cResult = obj.c(7);
  ({ title, onDismiss } = arg0);
  if (cResult[0] !== onDismiss) {
    function handleClose() {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }
    cResult[0] = onDismiss;
    cResult[1] = handleClose;
    tmp4 = handleClose;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const tmpResult = onDismiss(6203);
    const headerCloseButton = tmpResult.getHeaderCloseButton(tmp4);
    cResult[2] = tmp4;
    cResult[3] = headerCloseButton;
    tmp5 = headerCloseButton;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    let tmp7;
    if (cResult[5] === title) {
      tmp7 = cResult[6];
    }
    return tmp7;
  }
  const obj3 = {
    Unsupported: {
      title,
      headerLeft: tmp5,
      render() {
        let intl;
        ({ variant: "text-lg/normal", color: "text-default", children: intl.string(onDismiss(dependencyMap[9]).t.I22zuX) });
        const Text = onDismiss(dependencyMap[8]).Text;
        intl = onDismiss(dependencyMap[9]).intl;
        return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>{null}</View>;
      }
    }
  };
  const tmp8 = jsx(onDismiss(6679).Navigator, { initialRouteName: "Unsupported", screens: obj3 });
  cResult[4] = tmp5;
  cResult[5] = title;
  cResult[6] = tmp8;
  tmp7 = tmp8;
}) : (function UnsupportedFeatureModal(onDismiss) {
  let obj3;
  let obj4;
  onDismiss = onDismiss.onDismiss;
  const obj2 = { Unsupported: obj3 };
  obj3 = {
    title: onDismiss.title,
    headerLeft: obj4.getHeaderCloseButton(function handleClose() {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      let intl;
      ({ variant: "text-lg/normal", color: "text-default", children: intl.string(onDismiss(dependencyMap[9]).t.I22zuX) });
      const Text = onDismiss(dependencyMap[8]).Text;
      intl = onDismiss(dependencyMap[9]).intl;
      return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>{null}</View>;
    }
  };
  const Navigator = onDismiss(6679).Navigator;
  obj4 = onDismiss(6203);
  return <Navigator initialRouteName="Unsupported" screens={obj2} />;
});
const result = size.fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default tmp3;
