// Module ID: 14412
// Function ID: 110202
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [31, 7733, 33, 10099, 13657, 2]
// Exports: default

// Module 14412 (UserSettingsSwipeRightToLeft)
import result from "result";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [outer1_4.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return outer1_0(outer1_2[3]).createList({ sections });
  }, []);
  return jsx(importDefault(13657), { node });
};
