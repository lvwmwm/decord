// Module ID: 9169
// Function ID: 71887
// Name: useWideAuthView
// Dependencies: [6540, 1553, 2]
// Exports: default

// Module 9169 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(6540)();
  const tmp2 = !require(1553) /* isMetaQuest */.isMetaQuest();
  let tmp3 = !tmp2;
  if (tmp2) {
    tmp3 = tmp;
  }
  return tmp3;
};
