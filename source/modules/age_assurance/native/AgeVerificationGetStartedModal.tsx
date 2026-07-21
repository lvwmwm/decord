// Module ID: 7553
// Function ID: 60442
// Name: getInitialRouteName
// Dependencies: []
// Exports: default

// Module 7553 (getInitialRouteName)
function getInitialRouteName(isRetry, flag) {
  if (flag) {
    let EXPRESSIVE_INTRO = tmp.EXPRESSIVE_INTRO;
  } else {
    EXPRESSIVE_INTRO = isRetry ? tmp.RETRY : tmp.INTRO;
  }
  return EXPRESSIVE_INTRO;
}
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
obj.headerStyle = obj;
let closure_5 = obj.createStyles(obj);
const obj1 = { INTRO: "INTRO", RETRY: "RETRY", EXPRESSIVE_INTRO: "EXPRESSIVE_INTRO", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION" };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/age_assurance/native/AgeVerificationGetStartedModal.tsx");

export default function AgeVerificationGetStartedModal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const arg1 = entryPoint;
  const isRetry = entryPoint.isRetry;
  const importDefault = isRetry;
  let flag = entryPoint.useEmbeddedMethods;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  const classificationId = entryPoint.classificationId;
  const React = classificationId;
  const onComplete = entryPoint.onComplete;
  const jsx = onComplete;
  let callback;
  let getInitialRouteName;
  const tmp = callback();
  callback = tmp;
  const memo = React.useMemo(() => entryPoint(flag[10]).v4(), []);
  const items = [tmp, memo, classificationId, onComplete, entryPoint];
  const items1 = [flag, isRetry];
  const memo1 = React.useMemo(() => function getScreens(headerStyle, memo, entryPoint, classificationId, onComplete) {
    function closeModal() {
      return arg2(arg3[4]).pop();
    }
    function closeModalWithOnComplete() {
      closeModal();
      if (null != arg4) {
        arg4();
      }
    }
    let obj = {};
    obj = {
      headerStyle: headerStyle.headerStyle,
      headerTitle() {
        return null;
      }
    };
    let obj2 = memo(classificationId[5]);
    obj.headerLeft = obj2.getHeaderCloseButton(closeModal);
    obj.render = function render() {
      return closeModal(arg2(arg3[6]), { onClose: closeModal, modalSessionId: arg1, entryPoint: arg2 });
    };
    obj[constants.INTRO] = obj;
    obj = {
      headerStyle: headerStyle.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: memo(classificationId[5]).getHeaderCloseButton(closeModal),
      render() {
        return closeModal(arg2(arg3[7]), { onClose: closeModal, modalSessionId: arg1 });
      }
    };
    obj[constants.RETRY] = obj;
    const obj1 = {
      headerStyle: headerStyle.headerStyle,
      headerTitle() {
        return null;
      }
    };
    const obj5 = memo(classificationId[5]);
    obj1.headerLeft = memo(classificationId[5]).getHeaderCloseButton(closeModal);
    obj1.render = function render(arg0, navigation) {
      return closeModal(arg2(arg3[8]), { onClose: closeModalWithOnComplete, modalSessionId: navigation, classificationId: arg3, entryPoint: arg2, navigation });
    };
    obj[constants.EXPRESSIVE_INTRO] = obj1;
    obj2 = {
      headerStyle: headerStyle.headerStyle,
      headerTitle() {
        return null;
      }
    };
    const obj7 = memo(classificationId[5]);
    obj2.headerLeft = memo(classificationId[5]).getHeaderBackButton();
    obj2.render = function render() {
      return closeModal(arg2(arg3[9]), { onClose: closeModalWithOnComplete, modalSessionId: arg1 });
    };
    obj[constants.GOOGLE_WALLET_VERIFICATION] = obj2;
    return obj;
  }(tmp, memo, entryPoint, classificationId, onComplete), items);
  const memo2 = React.useMemo(() => {
    if (flag) {
      let EXPRESSIVE_PRIMARY = entryPoint(flag[11]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY;
    } else {
      const AgeVerificationModalVersion = entryPoint(flag[11]).AgeVerificationModalVersion;
      EXPRESSIVE_PRIMARY = isRetry ? AgeVerificationModalVersion.RETRY : AgeVerificationModalVersion.PRIMARY;
    }
    return EXPRESSIVE_PRIMARY;
  }, items1);
  getInitialRouteName = memo2;
  const items2 = [memo, entryPoint, memo2];
  const effect = React.useEffect(() => {
    const result = entryPoint(flag[11]).trackAgeVerificationModalViewed(memo, memo2, entryPoint);
  }, items2);
  const obj = { screens: memo1, initialRouteName: getInitialRouteName(isRetry, flag) };
  const intl = arg1(dependencyMap[13]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[13]).t.13/7kX);
  return jsx(arg1(dependencyMap[12]).Navigator, obj);
};
export const AgeVerificationGetStartedModalScenes = obj1;
