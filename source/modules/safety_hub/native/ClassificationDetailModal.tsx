// Module ID: 11810
// Function ID: 11811
// Name: ClassificationDetailModal
// Dependencies: [19, 21, 4481, 709, 4731, 5579, 11811, 11841, 11842, 11813, 1499, 6940, 1233, 2]
// Exports: default

// Module 11810 (ClassificationDetailModal)
import ThemesDefault from "Themes" /* 709 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
let closure_6 = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
createCacheKey = { headerStyle: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/safety_hub/native/ClassificationDetailModal.tsx");

export default function ClassificationDetailModal(classificationId) {
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  let flag = classificationId.shouldRedirectToAccountStanding;
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  let safetyHubInitialized;
  const tmp = callback();
  dependencyMap = tmp;
  let obj = classificationId(11842);
  safetyHubInitialized = obj.useSafetyHubInitialized();
  const items = [safetyHubInitialized];
  const effect = safetyHubInitialized.useEffect(() => {
    if (!safetyHubInitialized) {
      const safetyHubData = flag(headerStyle[9]).getSafetyHubData();
      const obj = flag(headerStyle[9]);
    }
  }, items);
  const isFocused = classificationId(1499).useIsFocused();
  const items1 = [classificationId, flag, tmp, source];
  const memo = safetyHubInitialized.useMemo(() => {
    closure_1 = closure_2;
    closure_2 = closure_1;
    let obj = {};
    obj = {
      headerStyle: headerStyle.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: classificationId(headerStyle[5]).getHeaderCloseButton(function closeModal() {
        return callback(table[4]).pop();
      }),
      render() {
        return closure_1_5(callback(closure_1_3[6]), {
          classificationId: closure_0,
          source: closure_2,
          onClose() {
            let arr = closure_1_1(closure_1_3[4]);
            arr = arr.pop();
            if (closure_1) {
              closure_1_0(closure_1_3[7]).openAccountStanding();
              const obj = closure_1_0(closure_1_3[7]);
            }
          },
          onError() {
            let arr = callback2(4731);
            arr = arr.pop();
            callback(11841).openAccountStanding();
          }
        });
      }
    };
    obj[closure_1_6.CLASSIFICATION_DETAIL] = obj;
    return obj;
  }, items1);
  obj = { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null };
  const intl = classificationId(1233).intl;
  obj[2] = intl.string(classificationId(1233).t["13/7kX"]);
  return jsx(classificationId(6940).Navigator, { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null });
};
