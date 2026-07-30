// Module ID: 9189
// Function ID: 9190
// Name: useWideAuthView
// Dependencies: [6558, 1577, 2]
// Exports: default

// Module 9189 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(6558)();
  const obj = require(1577) /* isMetaQuest */;
  return require(1577) /* isMetaQuest */.isMetaQuest() || tmp;
};
