// Module ID: 15716
// Function ID: 15717
// Name: ConjureCustomWidgetAddOption
// Dependencies: [19, 17, 21, 5243, 575, 15709, 10449, 5489, 15711, 8043, 10461, 1113, 4079, 2]
// Exports: default

// Module 15716 (ConjureCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef4079 from "module_4079" /* 4079 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5489 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 10449 */;
import MagicWandIcon from "MagicWandIcon" /* 10461 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 15709 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 15711 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
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
    ({ icon: null, label: intl.string(_modDef4079["5WHmVU"]), subLabel: intl2.string(_modDef4079.yI85oV), onPress: tmp6 });
    const RowButton = tmp2(8043).RowButton;
    ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const Icon = tmp2(8043).RowButton.Icon;
    intl = tmp2(1113).intl;
    intl2 = tmp2(1113).intl;
    tmp7 = <View style={tmp.container}>{null}</View>;
  }
  return tmp7;
};
