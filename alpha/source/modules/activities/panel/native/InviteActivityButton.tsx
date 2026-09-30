// Module ID: 17072
// Function ID: 17073
// Name: InviteActivityButton
// Dependencies: [19, 9013, 5788, 21, 4830, 17073, 1981, 504, 11466, 5477, 9692, 1115, 2]

// Module 17072 (InviteActivityButton)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11466 */;
import noop from "module_19" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 9013 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5788 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default noop.memo(function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationId];
  const stateFromStores = applicationId(504).useStateFromStores(items, () => getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, applicationId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequireImpl(17073, dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, { activity: stateFromStores });
        },
      icon: stateFromStores(9692),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1
    };
    const intl = tmp(1115).intl;
    obj2.text = intl.string(tmp(1115).t["OzOM/q"]);
    const intl2 = tmp(1115).intl;
    obj2.accessibilityLabel = intl2.string(tmp(1115).t["OzOM/q"]);
    tmp4 = jsx(tmp(5477).Button, {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequireImpl(17073, dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, { activity: stateFromStores });
        },
      icon: stateFromStores(9692),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1
    });
  }
  return tmp4;
});
