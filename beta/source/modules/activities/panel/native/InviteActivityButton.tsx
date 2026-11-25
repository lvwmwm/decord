// Module ID: 19202
// Function ID: 19203
// Name: InviteActivityButton
// Dependencies: [19, 6921, 6920, 21, 5127, 19203, 2119, 504, 12191, 5511, 11060, 1112, 2]

// Module 19202 (InviteActivityButton)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 12191 */;
import react from "react" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 6921 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6920 */;
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
    const Button = tmp(5511).Button;
    const intl = tmp(1112).intl;
    const intl2 = tmp(1112).intl;
    tmp4 = <Button onPress={function onPress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { activity: stateFromStores };
      const tmp2 = asyncRequire(19203, dependencyMap.paths);
      openLazy(tmp2, "ActivityInviteSheet-" + stateFromStores.session_id, obj);
    }} icon={stateFromStores(11060)} text={intl.string(tmp(1112).t["OzOM/q"])} accessibilityLabel={intl2.string(tmp(1112).t["OzOM/q"])} variant="secondary-overlay" size="sm" shrink maxFontSizeMultiplier={1} />;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;
