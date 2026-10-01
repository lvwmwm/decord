// Module ID: 16745
// Function ID: 16746
// Name: MobileSurvey
// Dependencies: [5, 19, 5027, 1074, 21, 4836, 504, 1241, 5028, 5300, 1115, 4525, 1177, 576, 8552, 2]
// Exports: default

// Module 16745 (MobileSurvey)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import LinkingDefault from "Linking" /* 4525 */;
import SurveyActionCreators from "SurveyActionCreators" /* 5028 */;
import AssetRegistryDefault from "AssetRegistry" /* 8552 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import SurveyStore from "SurveyStore" /* 5027 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ confirmIcon: { marginLeft: 4 } });
const result = size.fileFinishedImporting("components_native/MobileSurvey.tsx");

export default function MobileSurvey() {
  let confirmIcon;
  let currentSurvey;
  _require = closure_8();
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("get initialized");
  const items = [SurveyStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    function setSurveySeen() {
      return obj(...arguments);
    }
    if (null != stateFromStores) {
      let obj = function _setSurveySeen() {
        obj = _asyncToGenerator(async (arg0, value) => {
          let obj2;
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else if (null != c1) {
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: obj2.surveySeen(tmp4.key), done: false };
                  obj2 = closure_2_0(closure_2_2[8]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                obj = { value, done: true };
                return obj;
              }
              c0 = 3;
              return { value: "HermesInternal", done: null };
            } catch (tmp8) {
              c0 = 3;
              throw tmp8;
            }
          }
        });
        return obj(...arguments);
      };
      const tmp2 = stateFromStores;
      obj = stateFromStores(dependencyMap[7]);
      const tmp4 = constants;
      let obj2 = { type: "survey", promotion_id: tmp.id };
      obj.track(constants.OPEN_MODAL, obj2);
      setSurveySeen();
    }
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    ({ prompt: obj2.body, cta: obj2.confirmText } = stateFromStores);
    const tmp8 = stateFromStores(5300);
    const intl = tmp(1115).intl;
    tmp5 = <tmp8 body={null} confirmText={null} cancelText={intl.string(tmp(1115).t.f3Pet9)} onConfirm={function onConfirm() {
      const obj = LinkingDefault;
      obj.openURL(stateFromStores.url);
      const obj2 = SurveyActionCreators;
      obj2.surveyHide(stateFromStores.key, false);
    }} onCancel={function onCancel() {
      const obj = SurveyActionCreators;
      return obj.surveyHide(stateFromStores.key, true);
    }} renderConfirmRightIcon={function renderConfirmRightIcon() {
      const Icon = native.Icon;
      return <Icon style={confirmIcon.confirmIcon} color={nativeDefault.unsafe_rawColors.WHITE} size={native.Icon.Sizes.SMALL} source={AssetRegistryDefault} />;
    }} />;
  }
  return tmp5;
};
