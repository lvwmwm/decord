// Module ID: 14031
// Function ID: 14032
// Name: ConjureCustomWidgetAddOption
// Dependencies: [19, 17, 21, 5151, 587, 558, 576, 14032, 5115, 14033, 8802, 12058, 1126, 3862, 2]

// Module 14031 (ConjureCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3862 from "module_3862" /* 3862 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5115 */;
import MagicWandIcon from "MagicWandIcon" /* 12058 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 14032 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 14033 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5151 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureCustomWidgetSheetDefault = ConjureCustomWidgetSheet;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const VibegrationsCustomWidgetAddOption = "VibegrationsCustomWidgetAddOption";
let obj = { container: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureCustomWidgetAddOption() {
  let first;
  let obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_7();
  let obj2 = ConjureCustomWidget;
  const canConjureCustomWidget = obj2.useCanConjureCustomWidget(VibegrationsCustomWidgetAddOption);
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
  let tmp7 = null;
  if (canConjureCustomWidget) {
    let tmp8;
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const RowButton = tmp(8802).RowButton;
      ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
      const Icon = tmp(8802).RowButton.Icon;
      const intl = tmp(1126).intl;
      const intl2 = tmp(1126).intl;
      const tmp11 = <RowButton icon={null} label={intl.string(_modDef3862["5WHmVU"])} subLabel={intl2.string(_modDef3862.yI85oV)} onPress={first} />;
      cResult[1] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[1];
    }
    if (cResult[2] !== tmp4.container) {
      const tmp15 = <View style={tmp4.container}>{tmp8}</View>;
      cResult[2] = tmp4.container;
      cResult[3] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[3];
    }
    tmp7 = tmp12;
  }
  return tmp7;
}) : (function ConjureCustomWidgetAddOption() {
  let intl;
  let intl2;
  const tmp = closure_7();
  let obj = ConjureCustomWidget;
  const canConjureCustomWidget = obj.useCanConjureCustomWidget(VibegrationsCustomWidgetAddOption);
  let tmp6 = null;
  if (canConjureCustomWidget) {
    ({ icon: null, label: intl.string(_modDef3862["5WHmVU"]), subLabel: intl2.string(_modDef3862.yI85oV), onPress: tmp5 });
    const RowButton = tmp2(8802).RowButton;
    ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const Icon = tmp2(8802).RowButton.Icon;
    intl = tmp2(1126).intl;
    intl2 = tmp2(1126).intl;
    tmp6 = <View style={tmp.container}>{null}</View>;
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx");

export default tmp2;
