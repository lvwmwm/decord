// Module ID: 14368
// Function ID: 110029
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [31, 7697, 33, 10059, 13613, 2]
// Exports: default

// Module 14368 (UserSettingsSwipeRightToLeft)
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
  return jsx(importDefault(13613), { node });
};
