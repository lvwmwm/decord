// Module ID: 19409
// Function ID: 19410
// Name: InviteActivityButton
// Dependencies: [19, 7655, 7654, 21, 5257, 19410, 2120, 504, 12287, 5641, 10548, 1112, 2]

// Module 19409 (InviteActivityButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 12287 */;
import react from "react" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 7655 */;
import SelfPresenceStore from "SelfPresenceStore" /* 7654 */;
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
    const Button = tmp(5641).Button;
    const intl = tmp(1112).intl;
    const intl2 = tmp(1112).intl;
    tmp4 = <Button onPress={function onPress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { activity: stateFromStores };
      const tmp2 = asyncRequire(19410, dependencyMap.paths);
      openLazy(tmp2, "ActivityInviteSheet-" + stateFromStores.session_id, obj);
    }} icon={stateFromStores(10548)} text={intl.string(tmp(1112).t["OzOM/q"])} accessibilityLabel={intl2.string(tmp(1112).t["OzOM/q"])} variant="secondary-overlay" size="sm" shrink maxFontSizeMultiplier={1} />;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;
