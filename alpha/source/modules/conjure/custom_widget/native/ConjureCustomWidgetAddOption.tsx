// Module ID: 14271
// Function ID: 14272
// Name: ConjureCustomWidgetAddOption
// Dependencies: [19, 17, 21, 4966, 587, 558, 576, 14272, 5192, 14273, 8912, 12264, 1128, 3830, 2]

// Module 14271 (ConjureCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5192 */;
import MagicWandIcon from "MagicWandIcon" /* 12264 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 14272 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 14273 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4966 */;
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
      const RowButton = tmp(8912).RowButton;
      ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
      const Icon = tmp(8912).RowButton.Icon;
      const intl = tmp(1128).intl;
      const intl2 = tmp(1128).intl;
      const tmp11 = <RowButton icon={null} label={intl.string(_modDef3830["5WHmVU"])} subLabel={intl2.string(_modDef3830.yI85oV)} onPress={first} />;
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
  const canConjureCustomWidget = obj.useCanConjureCustomWidget(ConjureCustomWidgetAddOption_str);
  let tmp6 = null;
  if (canConjureCustomWidget) {
    ({ icon: null, label: intl.string(_modDef3830["5WHmVU"]), subLabel: intl2.string(_modDef3830.yI85oV), onPress: tmp5 });
    const RowButton = tmp2(8912).RowButton;
    ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const Icon = tmp2(8912).RowButton.Icon;
    intl = tmp2(1128).intl;
    intl2 = tmp2(1128).intl;
    tmp6 = <View style={tmp.container}>{null}</View>;
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx");

export default tmp2;
