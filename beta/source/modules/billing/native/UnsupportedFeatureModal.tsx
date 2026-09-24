// Module ID: 11160
// Function ID: 11161
// Name: UnsupportedFeatureModal
// Dependencies: [19, 17, 21, 558, 568, 4993, 5871, 7278, 4786, 1119, 2]

// Module 11160 (UnsupportedFeatureModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onDismiss(568).c(7);
  ({ title, onDismiss } = arg0);
  if (cResult[0] !== onDismiss) {
    const fn = function o() {
      ModalActionCreatorsDefault.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    };
    cResult[0] = onDismiss;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const headerCloseButton = tmp(5871).getHeaderCloseButton(tmp4);
    cResult[2] = tmp4;
    cResult[3] = headerCloseButton;
    let tmp5 = headerCloseButton;
    const tmpResult = tmp(5871);
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === title) {
      let tmp7 = cResult[6];
    }
    return tmp7;
  }
  let obj2 = {
    initialRouteName: "Unsupported",
    screens: {
      Unsupported: {
        title,
        headerLeft: tmp5,
        render() {
          const obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }, children: null };
          const obj2 = { variant: "text-lg/normal", color: "text-default", children: null };
          const intl = onDismiss(1119).intl;
          obj2.children = intl.string(onDismiss(1119).t.I22zuX);
          obj.children = jsx(onDismiss(4786).Text, { variant: "text-lg/normal", color: "text-default", children: null });
          return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>{null}</View>;
        }
      }
    }
  };
  const tmp8 = jsx(onDismiss(7278).Navigator, {
    initialRouteName: "Unsupported",
    screens: {
      Unsupported: {
        title,
        headerLeft: tmp5,
        render() {
          const obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }, children: null };
          const obj2 = { variant: "text-lg/normal", color: "text-default", children: null };
          const intl = onDismiss(1119).intl;
          obj2.children = intl.string(onDismiss(1119).t.I22zuX);
          obj.children = jsx(onDismiss(4786).Text, { variant: "text-lg/normal", color: "text-default", children: null });
          return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>{null}</View>;
        }
      }
    }
  });
  cResult[4] = tmp5;
  cResult[5] = title;
  cResult[6] = tmp8;
  tmp7 = tmp8;
}) : ((onDismiss) => {
  onDismiss = onDismiss.onDismiss;
  let obj = { initialRouteName: "Unsupported", screens: null };
  let obj2 = { Unsupported: null };
  const obj3 = {
    title: onDismiss.title,
    headerLeft: onDismiss(5871).getHeaderCloseButton(() => {
      ModalActionCreatorsDefault.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      const obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }, children: null };
      const obj2 = { variant: "text-lg/normal", color: "text-default", children: null };
      const intl = onDismiss(1119).intl;
      obj2.children = intl.string(onDismiss(1119).t.I22zuX);
      obj.children = jsx(onDismiss(4786).Text, { variant: "text-lg/normal", color: "text-default", children: null });
      return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>{null}</View>;
    }
  };
  obj2.Unsupported = obj3;
  obj.screens = obj2;
  return jsx(onDismiss(7278).Navigator, { initialRouteName: "Unsupported", screens: null });
});
