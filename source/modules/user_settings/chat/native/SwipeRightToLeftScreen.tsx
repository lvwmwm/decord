// Module ID: 15398
// Function ID: 15399
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [19, 7906, 21, 11400, 14614, 2]
// Exports: default

// Module 15398 (UserSettingsSwipeRightToLeft)
import _modDef14614 from "module_14614" /* 14614 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7906 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14614, { node });
};
