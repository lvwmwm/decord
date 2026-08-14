// Module ID: 14742
// Function ID: 14743
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [19, 8148, 21, 10421, 13959, 2]
// Exports: default

// Module 14742 (UserSettingsSwipeRightToLeft)
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
  return jsx(importDefault(13959), { node });
};
