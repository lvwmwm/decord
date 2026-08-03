// Module ID: 9375
// Function ID: 9376
// Name: useWideAuthView
// Dependencies: [7550, 1577, 2]
// Exports: default

// Module 9375 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7550)();
  const obj = require(1577) /* isMetaQuest */;
  return require(1577) /* isMetaQuest */.isMetaQuest() || tmp;
};
