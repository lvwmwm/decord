// Module ID: 8033
// Function ID: 8034
// Name: AgeVerificationGetStartedModal
// Dependencies: [19, 21, 4836, 576, 5039, 5936, 8034, 8039, 8040, 8022, 1255, 7861, 6421, 1115, 2]
// Exports: default

// Module 8033 (AgeVerificationGetStartedModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { headerStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
let closure_5 = createStyles.createStyles(obj);
let obj3 = { INTRO: "INTRO", RETRY: "RETRY", EXPRESSIVE_INTRO: "EXPRESSIVE_INTRO", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION" };
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationGetStartedModal.tsx");

export default function AgeVerificationGetStartedModal(entryPoint) {
  let EXPRESSIVE_INTRO;
  let intl;
  entryPoint = entryPoint.entryPoint;
  const isRetry = entryPoint.isRetry;
  let flag = entryPoint.useEmbeddedMethods;
  if (flag === undefined) {
    flag = false;
  }
  const classificationId = entryPoint.classificationId;
  const onComplete = entryPoint.onComplete;
  closure_5 = undefined;
  let tmp = closure_5();
  closure_5 = tmp;
  const memo = classificationId.useMemo(() => {
    const obj = entryPoint(flag[10]);
    return obj.v4();
  }, []);
  const items = [tmp, memo, classificationId, onComplete, entryPoint];
  const items1 = [flag, isRetry];
  const memo1 = classificationId.useMemo(() => {
    let obj5;
    let obj7;
    let obj9;
    let closure_0 = memo;
    let closure_3 = onComplete;
    function closeModal() {
      const arr = entryPoint(classificationId[4]);
      return arr.pop();
    }
    function closeModalWithOnComplete() {
      const arr = entryPoint(classificationId[4]);
      arr.pop();
      if (closure_3 != null) {
        closure_3();
      }
    }
    let obj = {};
    const INTRO = obj3.INTRO;
    const obj2 = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: obj3.getHeaderCloseButton(closeModal),
      render() {
        const obj = { onClose: closeModal, modalSessionId, entryPoint };
        return onComplete(entryPoint(classificationId[6]), obj);
      }
    };
    obj3 = NavigatorHeader;
    obj[INTRO] = obj2;
    const RETRY = obj3.RETRY;
    const obj4 = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: obj5.getHeaderCloseButton(closeModal),
      render() {
        const obj = { onClose: closeModal, modalSessionId };
        return onComplete(entryPoint(classificationId[7]), obj);
      }
    };
    obj[RETRY] = obj4;
    obj5 = NavigatorHeader;
    const EXPRESSIVE_INTRO = obj3.EXPRESSIVE_INTRO;
    const obj6 = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: obj7.getHeaderCloseButton(closeModal),
      render(arg0, navigation) {
        const obj = { onClose: closeModalWithOnComplete, modalSessionId, classificationId, entryPoint, navigation };
        return onComplete(entryPoint(classificationId[8]), obj);
      }
    };
    obj[EXPRESSIVE_INTRO] = obj6;
    obj7 = NavigatorHeader;
    const GOOGLE_WALLET_VERIFICATION = obj3.GOOGLE_WALLET_VERIFICATION;
    const obj8 = {
      headerStyle: closure_5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: obj9.getHeaderBackButton(),
      render() {
        const obj = { onClose: closeModalWithOnComplete, modalSessionId };
        return onComplete(entryPoint(classificationId[9]), obj);
      }
    };
    obj[GOOGLE_WALLET_VERIFICATION] = obj8;
    obj9 = NavigatorHeader;
    return obj;
  }, items);
  const memo2 = classificationId.useMemo(() => {
    let EXPRESSIVE_PRIMARY;
    const tmp = flag;
    if (tmp) {
      EXPRESSIVE_PRIMARY = AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY;
    } else {
      const AgeVerificationModalVersion = AgeVerificationAnalyticsUtils.AgeVerificationModalVersion;
      EXPRESSIVE_PRIMARY = isRetry ? AgeVerificationModalVersion.RETRY : AgeVerificationModalVersion.PRIMARY;
    }
    return EXPRESSIVE_PRIMARY;
  }, items1);
  const items2 = [memo, entryPoint, memo2];
  const effect = classificationId.useEffect(() => {
    const obj = AgeVerificationAnalyticsUtils;
    const result = obj.trackAgeVerificationModalViewed(memo, memo2, entryPoint);
  }, items2);
  let obj = { screens: memo1, initialRouteName: EXPRESSIVE_INTRO, headerBackTitle: intl.string(entryPoint(flag[13]).t["13/7kX"]) };
  const Navigator = entryPoint(flag[12]).Navigator;
  const tmp6 = onComplete;
  if (flag) {
    EXPRESSIVE_INTRO = tmp9.EXPRESSIVE_INTRO;
  } else {
    EXPRESSIVE_INTRO = isRetry ? tmp9.RETRY : tmp9.INTRO;
  }
  intl = tmp7(tmp8[13]).intl;
  return tmp6(Navigator, obj);
};
export const AgeVerificationGetStartedModalScenes = obj3;
