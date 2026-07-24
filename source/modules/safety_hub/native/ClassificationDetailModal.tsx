// Module ID: 11050
// Function ID: 85931
// Name: ClassificationDetailModal
// Dependencies: [31, 653, 11051, 33, 4130, 689, 4337, 5087, 11052, 5796, 11082, 11059, 1457, 5517, 1212, 2]
// Exports: default

// Module 11050 (ClassificationDetailModal)
import result from "result";
import { UserSettingsSections } from "ME";
import { AccountSettingsTabs } from "AccountSettingsTabs";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_8 = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.headerStyle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("AccountSettingsTabs").fileFinishedImporting("modules/safety_hub/native/ClassificationDetailModal.tsx");

export default function ClassificationDetailModal(classificationId) {
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  let flag = classificationId.shouldRedirectToAccountStanding;
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  let safetyHubInitialized;
  const tmp = _createForOfIteratorHelperLoose();
  dependencyMap = tmp;
  let obj = classificationId(11082);
  safetyHubInitialized = obj.useSafetyHubInitialized();
  const items = [safetyHubInitialized];
  const effect = safetyHubInitialized.useEffect(() => {
    if (!safetyHubInitialized) {
      const safetyHubData = flag(_undefined[11]).getSafetyHubData();
      const obj = flag(_undefined[11]);
    }
  }, items);
  const isFocused = classificationId(1457).useIsFocused();
  const items1 = [classificationId, flag, tmp, source];
  const memo = safetyHubInitialized.useMemo(() => (function getScreens(classificationId, flag, c3, source) {
    let closure_0 = classificationId;
    let closure_1 = flag;
    let closure_2 = source;
    function closeModal() {
      return source(4337).pop();
    }
    let obj = {};
    obj = {
      headerStyle: c3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: classificationId(table[7]).getHeaderCloseButton(closeModal),
      render() {
        return outer3_7(source(11052), {
          classificationId: closure_0,
          source: closure_2,
          onClose() {
            outer1_3();
            if (outer1_1) {
              let obj = classificationId(5796);
              obj = { screen: outer4_5.ACCOUNT };
              obj = { initialTab: outer4_6.STANDING };
              obj.params = obj;
              obj.openUserSettings(obj);
            }
          },
          onError() {
            outer1_3();
            let obj = classificationId(5796);
            obj = { screen: outer4_5.ACCOUNT, params: obj };
            obj = { initialTab: outer4_6.STANDING };
            obj.openUserSettings(obj);
          }
        });
      }
    };
    obj[outer2_8.CLASSIFICATION_DETAIL] = obj;
    return obj;
  })(classificationId, flag, c3, source), items1);
  obj = { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL };
  const intl = classificationId(1212).intl;
  obj.headerBackTitle = intl.string(classificationId(1212).t["13/7kX"]);
  return jsx(classificationId(5517).Navigator, { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL });
};
