// Module ID: 15072
// Function ID: 15073
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [19, 7884, 21, 11068, 14340, 2]
// Exports: default

// Module 15072 (UserSettingsSwipeRightToLeft)
import _modDef14340 from "module_14340" /* 14340 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7884 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14340, { node });
};
