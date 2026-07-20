// Module ID: 14174
// Function ID: 107320
// Name: UserSettingsSwipeRightToLeft
// Dependencies: []
// Exports: default

// Module 14174 (UserSettingsSwipeRightToLeft)
let closure_3 = importAll(dependencyMap[0]);
const MobileSetting = arg1(dependencyMap[1]).MobileSetting;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(closure_2[3]).createList({ sections });
  }, []);
  return jsx(importDefault(dependencyMap[4]), { node });
};
