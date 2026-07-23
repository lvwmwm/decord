// Module ID: 14306
// Function ID: 109574
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [31, 7662, 33, 10095, 13550, 2]
// Exports: default

// Module 14306 (UserSettingsSwipeRightToLeft)
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
  return jsx(importDefault(13550), { node });
};
