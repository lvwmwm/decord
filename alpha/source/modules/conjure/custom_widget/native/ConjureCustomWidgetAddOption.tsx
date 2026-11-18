// Module ID: 14503
// Function ID: 14504
// Name: ConjureCustomWidgetAddOption
// Dependencies: [19, 17, 21, 4823, 575, 14496, 9852, 5037, 14498, 7622, 13704, 1113, 4121, 2]
// Exports: default

// Module 14503 (ConjureCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef4121 from "module_4121" /* 4121 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5037 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9852 */;
import MagicWandIcon from "MagicWandIcon" /* 13704 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 14496 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 14498 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4823 */;
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
    ({ icon: null, label: intl.string(_modDef4121["5WHmVU"]), subLabel: intl2.string(_modDef4121.yI85oV), onPress: tmp6 });
    const RowButton = tmp2(7622).RowButton;
    ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const Icon = tmp2(7622).RowButton.Icon;
    intl = tmp2(1113).intl;
    intl2 = tmp2(1113).intl;
    tmp7 = <View style={tmp.container}>{null}</View>;
  }
  return tmp7;
};
