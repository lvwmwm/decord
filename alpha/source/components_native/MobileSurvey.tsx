// Module ID: 19795
// Function ID: 19796
// Name: MobileSurvey
// Dependencies: [19, 6890, 1072, 21, 504, 1256, 18356, 6270, 6274, 15195, 575, 6012, 1113, 2]
// Exports: default

// Module 19795 (MobileSurvey)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import LinkingDefault from "Linking" /* 6012 */;
import useAlertStore from "useAlertStore" /* 6270 */;
import react from "react" /* 19 */;
import SurveyStore from "SurveyStore" /* 6890 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("components_native/MobileSurvey.tsx");

export default function MobileSurvey() {
  let currentSurvey;
  let stateFromStores;
  let obj = stateFromStores(504);
  let items = [SurveyStore];
  stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    let WindowLaunchIcon;
    let body;
    let combined;
    let obj7;
    if (null != combined) {
      let obj = AnalyticsUtilsDefault;
      let obj2 = { type: "survey", promotion_id: combined.id };
      obj.track(constants.OPEN_MODAL, obj2);
      const obj3 = stateFromStores(dependencyMap[6]);
      obj3.surveySeen(combined.key);
      const _HermesInternal = HermesInternal;
      combined = "mobile-survey-" + tmp.key;
      const openAlert = stateFromStores(dependencyMap[7]).openAlert;
      const obj5 = { title: null, content: body, actions: null };
      ({ prompt: obj4.title, body } = combined);
      const tmp10 = stateFromStores(dependencyMap[7]);
      const AlertModal = stateFromStores(dependencyMap[8]).AlertModal;
      const obj6 = {
        variant: "primary",
        text: combined.cta,
        icon: closure_1_6(WindowLaunchIcon, obj7),
        iconPosition: "end",
        onPress() {
            const obj = LinkingDefault;
            obj.openURL(combined.url);
            const obj2 = stateFromStores(dependencyMap[6]);
            obj2.surveyHide(combined.key, false);
          }
      };
      const AlertActionButton = tmp6(tmp3[8]).AlertActionButton;
      obj7 = { size: "sm", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
      WindowLaunchIcon = tmp6(tmp3[9]).WindowLaunchIcon;
      const items = [closure_1_6(AlertActionButton, obj6), ];
      const tmp12 = closure_1_8;
      const tmp13 = closure_1_7;
      if (null != combined.secondary_cta) {
        let secondary_cta;
        if ("" !== combined.secondary_cta) {
          secondary_cta = tmp.secondary_cta;
        }
        const obj14 = {
          variant: "secondary",
          text: secondary_cta,
          onPress() {
                const obj = stateFromStores(dependencyMap[6]);
                return obj.surveyHide(combined.key, true);
              }
        };
        const obj8 = { children: items };
        items[1] = closure_1_6(tmp14, obj14);
        obj5.actions = tmp12(tmp13, obj8);
        openAlert(combined, closure_1_6(AlertModal, obj5), undefined, { dismissable: false });
        return () => {
          const obj = useAlertStore;
          return obj.dismissAlert(combined);
        };
      }
      const intl = tmp6(tmp3[12]).intl;
      secondary_cta = intl.string(tmp6(tmp3[12]).t.f3Pet9);
    }
  }, items1);
  return null;
};
