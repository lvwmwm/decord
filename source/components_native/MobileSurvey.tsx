// Module ID: 15478
// Function ID: 118054
// Name: MobileSurvey
// Dependencies: []
// Exports: default

// Module 15478 (MobileSurvey)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_8 = arg1(dependencyMap[5]).createStyles({ confirmIcon: { marginLeft: 4 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("components_native/MobileSurvey.tsx");

export default function MobileSurvey() {
  const callback = callback2();
  let obj = callback(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const importDefault = stateFromStores;
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    function _setSurveySeen() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _setSurveySeen = obj;
      return obj(...arguments);
    }
    if (null != stateFromStores) {
      let obj = stateFromStores(closure_2[7]);
      obj = { type: "survey", promotion_id: stateFromStores.id };
      obj.track(constants.OPEN_MODAL, obj);
      function setSurveySeen() {
        return _setSurveySeen(...arguments);
      }();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = {};
    ({ prompt: obj2.body, cta: obj2.confirmText } = stateFromStores);
    const intl = callback(dependencyMap[10]).intl;
    obj.cancelText = intl.string(callback(dependencyMap[10]).t.f3Pet9);
    obj.onConfirm = function onConfirm() {
      stateFromStores(closure_2[11]).openURL(stateFromStores.url);
      const obj = stateFromStores(closure_2[11]);
      lib(closure_2[8]).surveyHide(stateFromStores.key, false);
    };
    obj.onCancel = function onCancel() {
      return lib(closure_2[8]).surveyHide(stateFromStores.key, true);
    };
    obj.renderConfirmRightIcon = function renderConfirmRightIcon() {
      const obj = { style: lib.confirmIcon, color: stateFromStores(closure_2[13]).unsafe_rawColors.WHITE, size: lib(closure_2[12]).Icon.Sizes.SMALL, source: stateFromStores(closure_2[14]) };
      return callback(lib(closure_2[12]).Icon, obj);
    };
    tmp3 = jsx(importDefault(dependencyMap[9]), obj);
    const tmp7 = importDefault(dependencyMap[9]);
  }
  return tmp3;
};
