// Module ID: 14553
// Function ID: 14554
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [19, 7892, 21, 10361, 13793, 2]
// Exports: default

// Module 14553 (UserSettingsSwipeRightToLeft)
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
  return jsx(importDefault(13793), { node });
};
