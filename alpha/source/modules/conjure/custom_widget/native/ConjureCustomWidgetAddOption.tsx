// Module ID: 14458
// Function ID: 14459
// Name: ConjureCustomWidgetAddOption
// Dependencies: [19, 17, 21, 4794, 575, 14451, 9833, 5008, 14453, 7591, 12200, 1112, 4091, 2]
// Exports: default

// Module 14458 (ConjureCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef4091 from "module_4091" /* 4091 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5008 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9833 */;
import MagicWandIcon from "MagicWandIcon" /* 12200 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 14451 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 14453 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4794 */;
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
    ({ icon: null, label: intl.string(_modDef4091["5WHmVU"]), subLabel: intl2.string(_modDef4091.yI85oV), onPress: tmp6 });
    const RowButton = tmp2(7591).RowButton;
    ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const Icon = tmp2(7591).RowButton.Icon;
    intl = tmp2(1112).intl;
    intl2 = tmp2(1112).intl;
    tmp7 = <View style={tmp.container}>{null}</View>;
  }
  return tmp7;
};
