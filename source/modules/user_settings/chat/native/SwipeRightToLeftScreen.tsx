// Module ID: 15039
// Function ID: 15040
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [19, 7852, 21, 11031, 14307, 2]
// Exports: default

// Module 15039 (UserSettingsSwipeRightToLeft)
import _modDef14307 from "module_14307" /* 14307 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7852 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14307, { node });
};
