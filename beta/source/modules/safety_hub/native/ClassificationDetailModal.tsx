// Module ID: 12045
// Function ID: 12046
// Name: ClassificationDetailModal
// Dependencies: [19, 21, 4790, 580, 4993, 5871, 12046, 12076, 558, 568, 12077, 12048, 1489, 1119, 7278, 2]

// Module 12045 (ClassificationDetailModal)
import nativeDefault from "native" /* 580 */;
import NavigatorHeader from "NavigatorHeader" /* 5871 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 12048 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const constants = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
const createStyles = fn(4790);
let obj2 = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationDetailModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = safetyHubInitialized(568).c(11);
  ({ classificationId, source, shouldRedirectToAccountStanding } = arg0);
  const tmp5 = closure_7();
  let obj = safetyHubInitialized(568);
  safetyHubInitialized = safetyHubInitialized(12077).useSafetyHubInitialized();
  if (cResult[0] !== safetyHubInitialized) {
    const fn = function l() {
      if (!safetyHubInitialized) {
        const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
      }
    };
    const items = [safetyHubInitialized];
    cResult[0] = safetyHubInitialized;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = noop.useEffect(tmp7, tmp8);
  const tmpResult = safetyHubInitialized(12077);
  const isFocused = safetyHubInitialized(1489).useIsFocused();
  if (cResult[3] === classificationId) {
    if (cResult[4] === tmp4) {
      if (cResult[5] === source) {
        if (cResult[6] === tmp5) {
          let tmp11 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1119).intl;
          const stringResult = intl.string(tmp(1119).t["13/7kX"]);
          cResult[8] = stringResult;
          let tmp13 = stringResult;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] !== tmp11) {
          const obj2 = { screens: tmp11, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: tmp13 };
          const tmp18 = jsx(tmp(7278).Navigator, { screens: tmp11, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: tmp13 });
          cResult[9] = tmp11;
          cResult[10] = tmp18;
          let tmp15 = tmp18;
        } else {
          tmp15 = cResult[10];
        }
        return tmp15;
      }
    }
  }
  closure_129_0 = classificationId;
  closure_129_1 = tmp4;
  closure_129_2 = source;
  const obj3 = {};
  const obj4 = {
    headerStyle: tmp5.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: null,
    render: null
  };
  const tmpResult3 = safetyHubInitialized(1489);
  obj4.headerLeft = safetyHubInitialized(5871).getHeaderCloseButton(function closeModal() {
    return closure_1(4993).pop();
  });
  obj4.render = function render() {
    return jsx(source(12046), {
      classificationId,
      source,
      onClose() {
        closure_1(4993).pop();
        if (closure_1_1) {
          closure_0(12076).openAccountStanding();
          const obj = closure_0(12076);
        }
      },
      onError() {
        closure_1_1(4993).pop();
        const arr = closure_1_1(4993);
        classificationId(12076).openAccountStanding();
      }
    });
  };
  obj3[constants.CLASSIFICATION_DETAIL] = obj4;
  cResult[3] = classificationId;
  cResult[4] = undefined !== shouldRedirectToAccountStanding && shouldRedirectToAccountStanding;
  cResult[5] = source;
  cResult[6] = tmp5;
  cResult[7] = obj3;
  tmp11 = obj3;
}) : ((classificationId) => {
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  let flag = classificationId.shouldRedirectToAccountStanding;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  dependencyMap = tmp;
  const safetyHubInitialized = classificationId(12077).useSafetyHubInitialized();
  const items = [safetyHubInitialized];
  const effect = safetyHubInitialized.useEffect(() => {
    if (!safetyHubInitialized) {
      const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    }
  }, items);
  let obj = classificationId(12077);
  const isFocused = classificationId(1489).useIsFocused();
  const items1 = [classificationId, flag, tmp, source];
  const memo = safetyHubInitialized.useMemo(() => {
    closure_1 = flag;
    let obj = {};
    const obj2 = {
      headerStyle: headerStyle.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(function closeModal() {
        return closure_1(4993).pop();
      }),
      render() {
        return jsx(source(12046), {
          classificationId,
          source,
          onClose() {
            closure_1(4993).pop();
            if (closure_1_1) {
              closure_0(12076).openAccountStanding();
              const obj = closure_0(12076);
            }
          },
          onError() {
            closure_1_1(4993).pop();
            const arr = closure_1_1(4993);
            classificationId(12076).openAccountStanding();
          }
        });
      }
    };
    obj[constants.CLASSIFICATION_DETAIL] = obj2;
    return obj;
  }, items1);
  const obj3 = { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null };
  const intl = classificationId(1119).intl;
  obj3.headerBackTitle = intl.string(classificationId(1119).t["13/7kX"]);
  return jsx(classificationId(7278).Navigator, { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null });
});
