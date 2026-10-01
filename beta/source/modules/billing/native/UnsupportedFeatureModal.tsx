// Module ID: 10285
// Function ID: 10286
// Name: UnsupportedFeatureModal
// Dependencies: [19, 17, 21, 6421, 5936, 5039, 4832, 1115, 2]
// Exports: default

// Module 10285 (UnsupportedFeatureModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default function UnsupportedFeatureModal(onDismiss) {
  let obj3;
  let obj4;
  onDismiss = onDismiss.onDismiss;
  const obj2 = { Unsupported: obj3 };
  obj3 = {
    title: onDismiss.title,
    headerLeft: obj4.getHeaderCloseButton(() => {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      let intl;
      ({ variant: "text-lg/normal", color: "text-default", children: intl.string(onDismiss(dependencyMap[7]).t.I22zuX) });
      const Text = onDismiss(dependencyMap[6]).Text;
      intl = onDismiss(dependencyMap[7]).intl;
      return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>{null}</View>;
    }
  };
  const Navigator = onDismiss(6421).Navigator;
  obj4 = onDismiss(5936);
  return <Navigator initialRouteName="Unsupported" screens={obj2} />;
};
