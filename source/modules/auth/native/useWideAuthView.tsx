// Module ID: 9197
// Function ID: 72041
// Name: useWideAuthView
// Dependencies: [8133, 1553, 2]
// Exports: default

// Module 9197 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(8133)();
  const tmp2 = !require(1553) /* isMetaQuest */.isMetaQuest();
  let tmp3 = !tmp2;
  if (tmp2) {
    tmp3 = tmp;
  }
  return tmp3;
};
