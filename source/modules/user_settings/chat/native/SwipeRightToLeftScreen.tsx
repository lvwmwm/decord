// Module ID: 14670
// Function ID: 14671
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [19, 8084, 21, 10452, 13895, 2]
// Exports: default

// Module 14670 (UserSettingsSwipeRightToLeft)
import noop from "noop";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(importDefault(13895), { node });
};
