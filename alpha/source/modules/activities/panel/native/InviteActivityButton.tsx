// Module ID: 19730
// Function ID: 19731
// Name: InviteActivityButton
// Dependencies: [19, 7253, 7252, 21, 5489, 19731, 2118, 504, 12606, 5873, 10919, 1113, 2]

// Module 19730 (InviteActivityButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 12606 */;
import react from "react" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 7253 */;
import SelfPresenceStore from "SelfPresenceStore" /* 7252 */;
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
    const Button = tmp(5873).Button;
    const intl = tmp(1113).intl;
    const intl2 = tmp(1113).intl;
    tmp4 = <Button onPress={function onPress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { activity: stateFromStores };
      const tmp2 = asyncRequire(19731, dependencyMap.paths);
      openLazy(tmp2, "ActivityInviteSheet-" + stateFromStores.session_id, obj);
    }} icon={stateFromStores(10919)} text={intl.string(tmp(1113).t["OzOM/q"])} accessibilityLabel={intl2.string(tmp(1113).t["OzOM/q"])} variant="secondary-overlay" size="sm" shrink maxFontSizeMultiplier={1} />;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;
