// Module ID: 15301
// Function ID: 15302
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [19, 7893, 21, 11288, 14563, 2]
// Exports: default

// Module 15301 (UserSettingsSwipeRightToLeft)
import _modDef14563 from "module_14563" /* 14563 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7893 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14563, { node });
};
