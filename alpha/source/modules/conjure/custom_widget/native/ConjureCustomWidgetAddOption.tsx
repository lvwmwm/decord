// Module ID: 14869
// Function ID: 14870
// Name: ConjureCustomWidgetAddOption
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 14870, 9631, 5247, 14871, 8990, 12266, 1125, 3864, 2]

// Module 14869 (ConjureCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5247 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9631 */;
import MagicWandIcon from "MagicWandIcon" /* 12266 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 14870 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 14871 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureCustomWidgetSheetDefault = ConjureCustomWidgetSheet;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const ConjureCustomWidgetAddOption_str = "ConjureCustomWidgetAddOption";
let obj = { container: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureCustomWidgetAddOption() {
  let first;
  let obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_7();
  let obj2 = ConjureCustomWidget;
  const canConjureCustomWidget = obj2.useCanConjureCustomWidget(ConjureCustomWidgetAddOption_str);
  const obj3 = ConjureMobileExperiment;
  const isConjureMobileEnabled = obj3.useIsConjureMobileEnabled(canConjureCustomWidget, ConjureCustomWidgetAddOption_str);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = ActionSheetActionCreators;
      const obj2 = { content: jsx(ConjureCustomWidgetSheetDefault, {}), key: ConjureCustomWidgetSheet.CONJURE_CUSTOM_WIDGET_SHEET_KEY, stackingBehavior: "stack" };
      obj.showActionSheet(obj2);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let tmp8 = null;
  if (isConjureMobileEnabled) {
    let tmp9;
    let tmp13;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const RowButton = tmp(8990).RowButton;
      ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
      const Icon = tmp(8990).RowButton.Icon;
      const intl = tmp(1125).intl;
      const intl2 = tmp(1125).intl;
      const tmp12 = <RowButton icon={null} label={intl.string(_modDef3864["5WHmVU"])} subLabel={intl2.string(_modDef3864.yI85oV)} onPress={first} />;
      cResult[1] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[1];
    }
    if (cResult[2] !== tmp4.container) {
      const tmp16 = <View style={tmp4.container}>{tmp9}</View>;
      cResult[2] = tmp4.container;
      cResult[3] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[3];
    }
    tmp8 = tmp13;
  }
  return tmp8;
}) : (function ConjureCustomWidgetAddOption() {
  let intl;
  let intl2;
  const tmp = closure_7();
  let obj = ConjureCustomWidget;
  const canConjureCustomWidget = obj.useCanConjureCustomWidget(ConjureCustomWidgetAddOption_str);
  let obj2 = ConjureMobileExperiment;
  const isConjureMobileEnabled = obj2.useIsConjureMobileEnabled(canConjureCustomWidget, ConjureCustomWidgetAddOption_str);
  let tmp7 = null;
  if (isConjureMobileEnabled) {
    ({ icon: null, label: intl.string(_modDef3864["5WHmVU"]), subLabel: intl2.string(_modDef3864.yI85oV), onPress: tmp6 });
    const RowButton = tmp2(8990).RowButton;
    ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const Icon = tmp2(8990).RowButton.Icon;
    intl = tmp2(1125).intl;
    intl2 = tmp2(1125).intl;
    tmp7 = <View style={tmp.container}>{null}</View>;
  }
  return tmp7;
});
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx");

export default tmp2;
