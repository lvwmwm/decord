// Module ID: 11012
// Function ID: 85668
// Name: ClassificationDetailModal
// Dependencies: []
// Exports: default

// Module 11012 (ClassificationDetailModal)
let closure_4 = importAll(dependencyMap[0]);
const UserSettingsSections = arg1(dependencyMap[1]).UserSettingsSections;
const AccountSettingsTabs = arg1(dependencyMap[2]).AccountSettingsTabs;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_8 = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER };
obj.headerStyle = obj;
let closure_9 = obj.createStyles(obj);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/safety_hub/native/ClassificationDetailModal.tsx");

export default function ClassificationDetailModal(classificationId) {
  classificationId = classificationId.classificationId;
  const arg1 = classificationId;
  const source = classificationId.source;
  const importDefault = source;
  let flag = classificationId.shouldRedirectToAccountStanding;
  if (flag === undefined) {
    flag = false;
  }
  const importAll = flag;
  let dependencyMap;
  let React;
  const tmp = callback();
  dependencyMap = tmp;
  let obj = arg1(dependencyMap[10]);
  const safetyHubInitialized = obj.useSafetyHubInitialized();
  React = safetyHubInitialized;
  const items = [safetyHubInitialized];
  const effect = React.useEffect(() => {
    if (!safetyHubInitialized) {
      const safetyHubData = flag(flag[11]).getSafetyHubData();
      const obj = flag(flag[11]);
    }
  }, items);
  const isFocused = arg1(dependencyMap[12]).useIsFocused();
  const items1 = [classificationId, flag, tmp, source];
  const memo = React.useMemo(() => function getScreens(classificationId, flag, headerStyle, source) {
    function closeModal() {
      return arg1(closeModal[6]).pop();
    }
    let obj = {};
    obj = {
      headerStyle: headerStyle.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: classificationId(closeModal[7]).getHeaderCloseButton(closeModal),
      render() {
        return callback(arg1(closeModal[8]), {
          classificationId: arg0,
          source: arg3,
          onClose() {
            callback2();
            if (closure_1) {
              let obj = callback(callback2[9]);
              obj = { screen: constants.ACCOUNT };
              obj = { initialTab: constants2.STANDING };
              obj.params = obj;
              obj.openUserSettings(obj);
            }
          },
          onError() {
            callback2();
            let obj = callback(callback2[9]);
            obj = { screen: constants.ACCOUNT, params: obj };
            obj = { initialTab: constants2.STANDING };
            obj.openUserSettings(obj);
          }
        });
      }
    };
    obj[constants.CLASSIFICATION_DETAIL] = obj;
    return obj;
  }(classificationId, flag, tmp, source), items1);
  obj = { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL };
  const intl = arg1(dependencyMap[14]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[14]).t.13/7kX);
  return jsx(arg1(dependencyMap[13]).Navigator, obj);
};
