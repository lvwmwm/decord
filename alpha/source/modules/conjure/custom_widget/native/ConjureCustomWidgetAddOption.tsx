// Module ID: 14943
// Function ID: 14944
// Name: ConjureCustomWidgetAddOption
// Dependencies: [19, 17, 21, 5014, 575, 14944, 9676, 5258, 14945, 8179, 12464, 1113, 3868, 2]
// Exports: default

// Module 14943 (ConjureCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9676 */;
import MagicWandIcon from "MagicWandIcon" /* 12464 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 14944 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 14945 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
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
    ({ icon: null, label: intl.string(_modDef3868["5WHmVU"]), subLabel: intl2.string(_modDef3868.yI85oV), onPress: tmp6 });
    const RowButton = tmp2(8179).RowButton;
    ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const Icon = tmp2(8179).RowButton.Icon;
    intl = tmp2(1113).intl;
    intl2 = tmp2(1113).intl;
    tmp7 = <View style={tmp.container}>{null}</View>;
  }
  return tmp7;
};
