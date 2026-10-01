// Module ID: 11357
// Function ID: 11358
// Name: ClassificationDetailModal
// Dependencies: [19, 21, 4836, 576, 5039, 5936, 11358, 11388, 11389, 11360, 1486, 6421, 1115, 2]
// Exports: default

// Module 11357 (ClassificationDetailModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11360 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let obj2;
const jsx = Fragment.jsx;
const constants = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
let obj = { headerStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationDetailModal.tsx");

export default function ClassificationDetailModal(classificationId) {
  let headerStyle;
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  let flag = classificationId.shouldRedirectToAccountStanding;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_7();
  dependencyMap = tmp;
  let obj = classificationId(11389);
  const safetyHubInitialized = obj.useSafetyHubInitialized();
  const items = [safetyHubInitialized];
  const effect = safetyHubInitialized.useEffect(() => {
    const tmp = safetyHubInitialized;
    if (!tmp) {
      const obj = SafetyHubActionCreatorsAll;
      const safetyHubData = obj.getSafetyHubData();
    }
  }, items);
  let obj2 = classificationId(1486);
  const isFocused = obj2.useIsFocused();
  const items1 = [classificationId, flag, tmp, source];
  const memo = safetyHubInitialized.useMemo(() => {
    let obj3;
    let closure_0 = classificationId;
    let closure_1 = flag;
    let closure_2 = source;
    let obj = {};
    const CLASSIFICATION_DETAIL = constants.CLASSIFICATION_DETAIL;
    const obj2 = {
      headerStyle: headerStyle.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: obj3.getHeaderCloseButton(function closeModal() {
        const arr = flag(headerStyle[4]);
        return arr.pop();
      }),
      render() {
        let obj = {
          classificationId,
          source,
          onClose() {
            const arr = closure_1(closure_2_3[4]);
            arr.pop();
            const tmp = closure_2_3;
            const tmp3 = closure_1_1;
            if (tmp3) {
              const obj = classificationId(tmp[7]);
              obj.openAccountStanding();
            }
          },
          onError() {
            const arr = closure_1_1(closure_1_3[4]);
            arr.pop();
            const obj = classificationId(closure_1_3[7]);
            obj.openAccountStanding();
          }
        };
        return closure_2_5(flag(headerStyle[6]), obj);
      }
    };
    obj[CLASSIFICATION_DETAIL] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items1);
  const Navigator = classificationId(6421).Navigator;
  const intl = classificationId(1115).intl;
  return <Navigator screens={memo} initialRouteName={constants.CLASSIFICATION_DETAIL} headerBackTitle={intl.string(classificationId(1115).t["13/7kX"])} />;
};
