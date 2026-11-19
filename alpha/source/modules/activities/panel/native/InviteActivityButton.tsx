// Module ID: 19245
// Function ID: 19246
// Name: InviteActivityButton
// Dependencies: [19, 6802, 6801, 21, 5006, 19246, 2121, 504, 12124, 5390, 10993, 1113, 2]

// Module 19245 (InviteActivityButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 12124 */;
import react from "react" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 6802 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6801 */;
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
    const Button = tmp(5390).Button;
    const intl = tmp(1113).intl;
    const intl2 = tmp(1113).intl;
    tmp4 = <Button onPress={function onPress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { activity: stateFromStores };
      const tmp2 = asyncRequire(19246, dependencyMap.paths);
      openLazy(tmp2, "ActivityInviteSheet-" + stateFromStores.session_id, obj);
    }} icon={stateFromStores(10993)} text={intl.string(tmp(1113).t["OzOM/q"])} accessibilityLabel={intl2.string(tmp(1113).t["OzOM/q"])} variant="secondary-overlay" size="sm" shrink maxFontSizeMultiplier={1} />;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;
