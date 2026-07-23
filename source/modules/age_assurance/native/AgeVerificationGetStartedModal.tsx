// Module ID: 7559
// Function ID: 60490
// Name: getInitialRouteName
// Dependencies: [31, 33, 4130, 689, 4337, 5087, 7560, 7565, 7566, 7575, 491, 7538, 5519, 1212, 2]
// Exports: default

// Module 7559 (getInitialRouteName)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function getInitialRouteName(arg0, arg1) {
  if (arg1) {
    let EXPRESSIVE_INTRO = tmp.EXPRESSIVE_INTRO;
  } else {
    EXPRESSIVE_INTRO = arg0 ? tmp.RETRY : tmp.INTRO;
  }
  return EXPRESSIVE_INTRO;
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
_createForOfIteratorHelperLoose.headerStyle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { INTRO: "INTRO", RETRY: "RETRY", EXPRESSIVE_INTRO: "EXPRESSIVE_INTRO", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION" };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/age_assurance/native/AgeVerificationGetStartedModal.tsx");

export default function AgeVerificationGetStartedModal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const isRetry = entryPoint.isRetry;
  let flag = entryPoint.useEmbeddedMethods;
  if (flag === undefined) {
    flag = false;
  }
  const classificationId = entryPoint.classificationId;
  const onComplete = entryPoint.onComplete;
  let _createForOfIteratorHelperLoose;
  let memo;
  let memo2;
  const tmp = _createForOfIteratorHelperLoose();
  _createForOfIteratorHelperLoose = tmp;
  memo = classificationId.useMemo(() => entryPoint(flag[10]).v4(), []);
  const items = [tmp, memo, classificationId, onComplete, entryPoint];
  const items1 = [flag, isRetry];
  const memo1 = classificationId.useMemo(() => (function getScreens(c5, memo, entryPoint, classificationId, onComplete) {
    let closure_0 = memo;
    let closure_1 = entryPoint;
    let closure_2 = classificationId;
    let result = onComplete;
    function closeModal() {
      return isRetry(flag[4]).pop();
    }
    function closeModalWithOnComplete() {
      closeModal();
      if (null != onComplete) {
        onComplete();
      }
    }
    let obj = {};
    obj = {
      headerStyle: c5.headerStyle,
      headerTitle() {
        return null;
      }
    };
    let obj2 = entryPoint(flag[5]);
    obj.headerLeft = obj2.getHeaderCloseButton(closeModal);
    obj.render = function render() {
      return onComplete(isRetry(flag[6]), { onClose: closeModal, modalSessionId: closure_0, entryPoint: closure_1 });
    };
    obj[memo.INTRO] = obj;
    obj = {
      headerStyle: c5.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: entryPoint(flag[5]).getHeaderCloseButton(closeModal),
      render() {
        return onComplete(isRetry(flag[7]), { onClose: closeModal, modalSessionId: closure_0 });
      }
    };
    obj[memo.RETRY] = obj;
    const obj1 = {
      headerStyle: c5.headerStyle,
      headerTitle() {
        return null;
      }
    };
    const obj5 = entryPoint(flag[5]);
    obj1.headerLeft = entryPoint(flag[5]).getHeaderCloseButton(closeModal);
    obj1.render = function render(arg0, navigation) {
      return onComplete(isRetry(flag[8]), { onClose: closeModalWithOnComplete, modalSessionId: closure_0, classificationId: closure_2, entryPoint: closure_1, navigation });
    };
    obj[memo.EXPRESSIVE_INTRO] = obj1;
    obj2 = {
      headerStyle: c5.headerStyle,
      headerTitle() {
        return null;
      }
    };
    const obj7 = entryPoint(flag[5]);
    obj2.headerLeft = entryPoint(flag[5]).getHeaderBackButton();
    obj2.render = function render() {
      return onComplete(isRetry(flag[9]), { onClose: closeModalWithOnComplete, modalSessionId: closure_0 });
    };
    obj[memo.GOOGLE_WALLET_VERIFICATION] = obj2;
    return obj;
  })(c5, memo, entryPoint, classificationId, onComplete), items);
  memo2 = classificationId.useMemo(() => {
    if (flag) {
      let EXPRESSIVE_PRIMARY = entryPoint(flag[11]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY;
    } else {
      const AgeVerificationModalVersion = entryPoint(flag[11]).AgeVerificationModalVersion;
      EXPRESSIVE_PRIMARY = isRetry ? AgeVerificationModalVersion.RETRY : AgeVerificationModalVersion.PRIMARY;
    }
    return EXPRESSIVE_PRIMARY;
  }, items1);
  const items2 = [memo, entryPoint, memo2];
  const effect = classificationId.useEffect(() => {
    const result = entryPoint(flag[11]).trackAgeVerificationModalViewed(memo, memo2, entryPoint);
  }, items2);
  let obj = { screens: memo1, initialRouteName: memo2(isRetry, flag) };
  const intl = entryPoint(flag[13]).intl;
  obj.headerBackTitle = intl.string(entryPoint(flag[13]).t["13/7kX"]);
  return onComplete(entryPoint(flag[12]).Navigator, obj);
};
export const AgeVerificationGetStartedModalScenes = obj1;
