// Module ID: 9233
// Function ID: 72250
// Name: useWideAuthView
// Dependencies: [7423, 1553, 2]
// Exports: default

// Module 9233 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7423)();
  const tmp2 = !require(1553) /* isMetaQuest */.isMetaQuest();
  let tmp3 = !tmp2;
  if (tmp2) {
    tmp3 = tmp;
  }
  return tmp3;
};
