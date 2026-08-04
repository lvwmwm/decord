// Module ID: 8283
// Function ID: 8284
// Name: useWideAuthView
// Dependencies: [7562, 1577, 2]
// Exports: default

// Module 8283 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7562)();
  const obj = require(1577) /* isMetaQuest */;
  return require(1577) /* isMetaQuest */.isMetaQuest() || tmp;
};
