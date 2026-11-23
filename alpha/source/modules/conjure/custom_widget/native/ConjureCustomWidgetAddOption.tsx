// Module ID: 14580
// Function ID: 14581
// Name: ConjureCustomWidgetAddOption
// Dependencies: [19, 17, 21, 4913, 575, 14573, 9953, 5127, 14575, 7711, 12329, 1112, 4190, 2]
// Exports: default

// Module 14580 (ConjureCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5127 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9953 */;
import MagicWandIcon from "MagicWandIcon" /* 12329 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 14573 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 14575 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
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
    ({ icon: null, label: intl.string(_modDef4190["5WHmVU"]), subLabel: intl2.string(_modDef4190.yI85oV), onPress: tmp6 });
    const RowButton = tmp2(7711).RowButton;
    ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const Icon = tmp2(7711).RowButton.Icon;
    intl = tmp2(1112).intl;
    intl2 = tmp2(1112).intl;
    tmp7 = <View style={tmp.container}>{null}</View>;
  }
  return tmp7;
};
