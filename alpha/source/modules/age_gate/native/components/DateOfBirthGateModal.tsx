// Module ID: 19331
// Function ID: 19332
// Name: DateOfBirthGateModal
// Dependencies: [19, 1098, 19328, 21, 1376, 5707, 1114, 6733, 7710, 19329, 1261, 6992, 19332, 19334, 17975, 7381, 7163, 2]
// Exports: default

// Module 19331 (DateOfBirthGateModal)
import Fragment from "Fragment" /* 21 */;
import AgeGateConstants from "AgeGateConstants" /* 1098 */;
import ExistingUserAgeGateConstants from "ExistingUserAgeGateConstants" /* 19328 */;
import ageGateNavigationCallbacks from "ageGateNavigationCallbacks" /* 19329 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const discord_common_AnalyticsUtils = tmp(1261);
const NavigatorHeader = tmp(6992);
const AgeGateSource = AgeGateConstants.AgeGateSource;
let AgeGate = ExistingUserAgeGateConstants.ExistingUserAgeGateScreens;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/age_gate/native/components/DateOfBirthGateModal.tsx");

export default function DateOfBirthGateModal(source) {
  source = source.source;
  const items = [source];
  const Navigator = source(7163).Navigator;
  let intl = source(1114).intl;
  return <Navigator screens={react.useMemo(() => {
    let tmpResult;
    let tmpResult2;
    function render(arg0) {
      const obj = { source };
      const tmp = closure_2_1(closure_2_2[13]);
      const merged = Object.assign(arg0);
      return closure_2_6(tmp, obj);
    }
    const render2 = function render(arg0) {
      const obj = {};
      const tmp = closure_1_1(closure_1_2[14]);
      const merged = Object.assign(arg0);
      return closure_1_6(tmp, obj);
    };
    let tmp = require;
    let tmp2 = dependencyMap;
    let obj = ageGateNavigationCallbacks;
    let fn = obj.generateOnBack(source);
    if (fn == null) {
      fn = () => {

      };
    }
    let obj2 = {};
    AgeGate = closure_5.AgeGate;
    const obj3 = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE,
      impressionProperties: { existing_user: true },
      headerLeft: tmpResult.getHeaderBackButton(fn),
      headerTitle: ageGateNavigationCallbacks.renderHeaderTitle,
      render(arg0, arg1) {
        let NSFWGateGuild;
        let tmp;
        let closure_1 = arg1;
        if (closure_0 === constants.NSFW_SERVER_INVITE) {
          let fn;
          let tmp3 = closure_2_2;
          let obj = source(closure_2_2[4]);
          if (obj.isIOS()) {
            fn = () => {
              let intl;
              closure_1.push(NSFWGateGuild.NSFWGateGuild);
              const obj = { text: intl.string(source(closure_2_2[6]).t.gUiIGZ), variant: "success" };
              const open = closure_2_1(closure_2_2[5]).open;
              closure_2_1(closure_2_2[5]);
              intl = source(closure_2_2[6]).intl;
              open("AGE_GATE_AGE_VERIFIED", obj);
            };
          }
          let obj2 = { onSuccess: fn, onClose: source(closure_2_2[9]).onGateClose, source: tmp };
          const tmp7 = closure_2_1(closure_2_2[12]);
          return closure_2_6(tmp7, obj2);
        }
        fn = () => {
          let intl;
          const obj = source(closure_2_2[7]);
          const result = obj.closeAgeGateModalAfterSubmit();
          const obj2 = { text: intl.string(source(closure_2_2[6]).t.gUiIGZ), variant: "success" };
          const open = closure_2_1(closure_2_2[5]).open;
          closure_2_1(closure_2_2[5]);
          intl = source(closure_2_2[6]).intl;
          open("AGE_GATE_AGE_VERIFIED", obj2);
          const tmp = closure_2_2;
          const tmp3 = closure_2_1;
          if (closure_0 === constants.FAMILY_CENTER) {
            const tmp3Result = tmp3(tmp[8]);
            tmp3Result.initialPageLoad();
          }
        };
      }
    };
    obj2[AgeGate] = obj3;
    tmpResult = NavigatorHeader;
    obj2[closure_5.AgeGateConfirm] = { fullscreen: true, headerTitle: ageGateNavigationCallbacks.renderHeaderTitle, render };
    ({ fullscreen: true, headerTitle: ageGateNavigationCallbacks.renderHeaderTitle, render });
    obj2[closure_5.Blocked] = { fullscreen: true, headerTitle: ageGateNavigationCallbacks.renderHeaderTitle, impressionProperties: { existing_user: true }, render: render2 };
    ({ fullscreen: true, headerTitle: ageGateNavigationCallbacks.renderHeaderTitle, impressionProperties: { existing_user: true }, render: render2 });
    const NSFWGateGuild = closure_5.NSFWGateGuild;
    const obj6 = {
      headerTitle: ageGateNavigationCallbacks.renderHeaderTitle,
      headerLeft: tmpResult2.getHeaderBackButton(fn),
      render() {
        const obj = { onClose: source(closure_1_2[9]).onGateClose };
        const tmp = closure_1_1(closure_1_2[15]);
        return closure_1_6(tmp, obj);
      }
    };
    obj2[NSFWGateGuild] = obj6;
    tmpResult2 = NavigatorHeader;
    return obj2;
  }, items)} initialRouteName={AgeGate.AgeGate} headerBackTitle={intl.string(source(1114).t["13/7kX"])} />;
};
