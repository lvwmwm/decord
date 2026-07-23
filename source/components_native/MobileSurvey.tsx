// Module ID: 15606
// Function ID: 120310
// Name: MobileSurvey
// Dependencies: [5, 31, 9277, 653, 33, 4130, 566, 675, 9278, 4561, 1212, 3827, 1273, 689, 9036, 2]
// Exports: default

// Module 15606 (MobileSurvey)
import closure_3 from "_createForOfIteratorHelperLoose";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ confirmIcon: { marginLeft: 4 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/MobileSurvey.tsx");

export default function MobileSurvey() {
  const _require = callback();
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentSurvey());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    function _setSurveySeen() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer2_3(tmp);
      return obj(...arguments);
    }
    if (null != stateFromStores) {
      let obj = stateFromStores(outer1_2[7]);
      obj = { type: "survey", promotion_id: stateFromStores.id };
      obj.track(outer1_6.OPEN_MODAL, obj);
      (function setSurveySeen() {
        return _setSurveySeen(...arguments);
      })();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = {};
    ({ prompt: obj2.body, cta: obj2.confirmText } = stateFromStores);
    const intl = _require(1212).intl;
    obj.cancelText = intl.string(_require(1212).t.f3Pet9);
    obj.onConfirm = function onConfirm() {
      stateFromStores(outer1_2[11]).openURL(stateFromStores.url);
      const obj = stateFromStores(outer1_2[11]);
      lib(outer1_2[8]).surveyHide(stateFromStores.key, false);
    };
    obj.onCancel = function onCancel() {
      return lib(outer1_2[8]).surveyHide(stateFromStores.key, true);
    };
    obj.renderConfirmRightIcon = function renderConfirmRightIcon() {
      const obj = { style: lib.confirmIcon, color: stateFromStores(outer1_2[13]).unsafe_rawColors.WHITE, size: lib(outer1_2[12]).Icon.Sizes.SMALL, source: stateFromStores(outer1_2[14]) };
      return outer1_7(lib(outer1_2[12]).Icon, obj);
    };
    tmp3 = jsx(stateFromStores(4561), {});
    const tmp7 = stateFromStores(4561);
  }
  return tmp3;
};
