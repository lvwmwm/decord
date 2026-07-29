// Module ID: 9193
// Function ID: 9194
// Name: useWideAuthView
// Dependencies: [6561, 1577, 2]
// Exports: default

// Module 9193 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(6561)();
  const obj = require(1577) /* isMetaQuest */;
  return require(1577) /* isMetaQuest */.isMetaQuest() || tmp;
};
