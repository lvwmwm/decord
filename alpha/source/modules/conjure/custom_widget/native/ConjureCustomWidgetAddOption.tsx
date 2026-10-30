// Module ID: 14905
// Function ID: 14906
// Name: ConjureCustomWidgetAddOption
// Dependencies: [19, 17, 21, 5009, 575, 14906, 9656, 5253, 14907, 8171, 12429, 1114, 3865, 2]
// Exports: default

// Module 14905 (ConjureCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9656 */;
import MagicWandIcon from "MagicWandIcon" /* 12429 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 14906 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 14907 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const ConjureCustomWidgetAddOption_str = "ConjureCustomWidgetAddOption";
let obj = { container: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx");

export default function ConjureCustomWidgetAddOption() {
  let intl;
  let intl2;
  const tmp = closure_7();
  let obj = ConjureCustomWidget;
  const canConjureCustomWidget = obj.useCanConjureCustomWidget(ConjureCustomWidgetAddOption_str);
  let obj2 = ConjureMobileExperiment;
  const isConjureMobileEnabled = obj2.useIsConjureMobileEnabled(canConjureCustomWidget, ConjureCustomWidgetAddOption_str);
  let tmp7 = null;
  if (isConjureMobileEnabled) {
    ({ icon: null, label: intl.string(_modDef3865["5WHmVU"]), subLabel: intl2.string(_modDef3865.yI85oV), onPress: tmp6 });
    const RowButton = tmp2(8171).RowButton;
    ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const Icon = tmp2(8171).RowButton.Icon;
    intl = tmp2(1114).intl;
    intl2 = tmp2(1114).intl;
    tmp7 = <View style={tmp.container}>{null}</View>;
  }
  return tmp7;
};
