// Module ID: 18560
// Function ID: 18561
// Name: useConjurePreviewProfileWidgets
// Dependencies: [19, 6132, 6903, 6278, 504, 6143, 2]
// Exports: default

// Module 18560 (useConjurePreviewProfileWidgets)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 6143 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 6278 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 6132 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/conjure/preview/useConjurePreviewProfileWidgets.tsx");

export default function useConjurePreviewProfileWidgets(arg0, arg1, applicationId) {
  let closure_0;
  let stateFromStores;
  let stateFromStoresArray;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = applicationId;
  let items = [arg0];
  const effect = stateFromStoresArray.useEffect(() => {
    maybeFetchUserProfileDefault(closure_0);
  }, items);
  let obj = require("get initialized");
  const items1 = [stateFromStores];
  const items2 = [arg0];
  stateFromStoresArray = obj.useStateFromStoresArray(items1, () => {
    const userProfile = UserProfileStore.getUserProfile(closure_0);
    let widgets;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
    return widgets;
  }, items2);
  const items3 = [ConjureProjectStore];
  const items4 = [arg1];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items3, () => {
    let tmp2 = null;
    if (null != closure_1) {
      const project = ConjureProjectStore.getProject(tmp);
      let application_id;
      if (project != null) {
        application_id = project.application_id;
      }
      if (application_id == null) {
        application_id = null;
      }
      tmp2 = application_id;
    }
    return tmp2;
  }, items4);
  const items5 = [stateFromStoresArray, applicationId, stateFromStores];
  return stateFromStoresArray.useMemo(() => {
    const obj = { applicationId };
    const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj);
    const items = [
      applicationWidget,
      ...stateFromStoresArray.filter((applicationId) => {
        let tmp = applicationId instanceof closure_0(closure_2[5]).ApplicationWidget;
        if (tmp) {
          tmp = applicationId.applicationId === closure_1_2 || applicationId.applicationId === stateFromStores;
          const tmp3 = applicationId.applicationId === closure_1_2 || applicationId.applicationId === stateFromStores;
        }
        return !tmp;
      })
    ];
    return items;
  }, items5);
};
