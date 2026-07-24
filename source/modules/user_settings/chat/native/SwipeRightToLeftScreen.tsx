// Module ID: 14356
// Function ID: 109897
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [31, 7751, 33, 10127, 13601, 2]
// Exports: default

// Module 14356 (UserSettingsSwipeRightToLeft)
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
  return jsx(importDefault(13601), { node });
};
