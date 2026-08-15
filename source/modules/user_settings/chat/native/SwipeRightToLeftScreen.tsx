// Module ID: 14782
// Function ID: 14783
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [19, 8198, 21, 10669, 13991, 2]
// Exports: default

// Module 14782 (UserSettingsSwipeRightToLeft)
import noop from "noop";
import { MobileUserSettings } from "MobileUserSettings";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(importDefault(13991), { node });
};
