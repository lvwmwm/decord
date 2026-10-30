// Module ID: 19085
// Function ID: 19086
// Name: InviteActivityButton
// Dependencies: [19, 11490, 6564, 21, 5253, 19086, 1995, 504, 11651, 5629, 10959, 1114, 2]

// Module 19085 (InviteActivityButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11651 */;
import react from "react" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 11490 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6564 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = applicationId;
  let tmp2 = dependencyMap;
  let obj = applicationId(504);
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationId];
  const stateFromStores = obj.useStateFromStores(items, () => getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, applicationId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const Button = tmp(5629).Button;
    const intl = tmp(1114).intl;
    const intl2 = tmp(1114).intl;
    tmp4 = <Button onPress={function onPress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { activity: stateFromStores };
      const tmp2 = asyncRequire(19086, dependencyMap.paths);
      openLazy(tmp2, "ActivityInviteSheet-" + stateFromStores.session_id, obj);
    }} icon={stateFromStores(10959)} text={intl.string(tmp(1114).t["OzOM/q"])} accessibilityLabel={intl2.string(tmp(1114).t["OzOM/q"])} variant="secondary-overlay" size="sm" shrink maxFontSizeMultiplier={1} />;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;
