// Module ID: 10870
// Function ID: 10871
// Name: UnsupportedFeatureModal
// Dependencies: [19, 17, 21, 7306, 7139, 6879, 5761, 1113, 2]
// Exports: default

// Module 10870 (UnsupportedFeatureModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
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
    headerLeft: obj4.getHeaderCloseButton(function handleClose() {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      let intl;
      ({ variant: "body-lg/normal", color: "text-default", children: intl.string(onDismiss(dependencyMap[7]).t.I22zuX) });
      const Text = onDismiss(dependencyMap[6]).Text;
      intl = onDismiss(dependencyMap[7]).intl;
      return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>{null}</View>;
    }
  };
  const Navigator = onDismiss(7306).Navigator;
  obj4 = onDismiss(7139);
  return <Navigator initialRouteName="Unsupported" screens={obj2} />;
};
