// Module ID: 14490
// Function ID: 14491
// Name: ConjureCustomWidgetAddOption
// Dependencies: [19, 17, 21, 4792, 575, 14483, 9831, 5006, 14485, 7592, 13686, 1113, 4089, 2]
// Exports: default

// Module 14490 (ConjureCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef4089 from "module_4089" /* 4089 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5006 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9831 */;
import MagicWandIcon from "MagicWandIcon" /* 13686 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 14483 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 14485 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
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
    ({ icon: null, label: intl.string(_modDef4089["5WHmVU"]), subLabel: intl2.string(_modDef4089.yI85oV), onPress: tmp6 });
    const RowButton = tmp2(7592).RowButton;
    ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const Icon = tmp2(7592).RowButton.Icon;
    intl = tmp2(1113).intl;
    intl2 = tmp2(1113).intl;
    tmp7 = <View style={tmp.container}>{null}</View>;
  }
  return tmp7;
};
