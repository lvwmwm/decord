// Module ID: 14876
// Function ID: 14877
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [19, 8235, 21, 10516, 14094, 2]
// Exports: default

// Module 14876 (UserSettingsSwipeRightToLeft)
import _modDef14094 from "module_14094" /* 14094 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 8235 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14094, { node });
};
