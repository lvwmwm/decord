// Module ID: 9125
// Function ID: 71735
// Name: useWideAuthView
// Dependencies: [6504, 1553, 2]
// Exports: default

// Module 9125 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(6504)();
  const tmp2 = !require(1553) /* isMetaQuest */.isMetaQuest();
  let tmp3 = !tmp2;
  if (tmp2) {
    tmp3 = tmp;
  }
  return tmp3;
};
