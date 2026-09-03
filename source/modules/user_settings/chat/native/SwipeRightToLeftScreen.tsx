// Module ID: 15316
// Function ID: 15317
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [19, 7896, 21, 11292, 14578, 2]
// Exports: default

// Module 15316 (UserSettingsSwipeRightToLeft)
import _modDef14578 from "module_14578" /* 14578 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7896 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14578, { node });
};
