// Module ID: 16850
// Function ID: 16851
// Name: InviteActivityButton
// Dependencies: [19, 8814, 5591, 21, 4800, 16851, 1981, 504, 11261, 5281, 9491, 1115, 2]

// Module 16850 (InviteActivityButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11261 */;
import react from "react" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 8814 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5591 */;
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
    const Button = tmp(5281).Button;
    const intl = tmp(1115).intl;
    const intl2 = tmp(1115).intl;
    tmp4 = <Button onPress={function onPress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { activity: stateFromStores };
      const tmp2 = asyncRequire(16851, dependencyMap.paths);
      openLazy(tmp2, "ActivityInviteSheet-" + stateFromStores.session_id, obj);
    }} icon={stateFromStores(9491)} text={intl.string(tmp(1115).t["OzOM/q"])} accessibilityLabel={intl2.string(tmp(1115).t["OzOM/q"])} variant="secondary-overlay" size="sm" shrink maxFontSizeMultiplier={1} />;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;
