// Module ID: 8543
// Function ID: 8544
// Name: useWideAuthView
// Dependencies: [7707, 1624, 2]
// Exports: default

// Module 8543 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7707)();
  const obj = require(1624) /* isMetaQuest */;
  return require(1624) /* isMetaQuest */.isMetaQuest() || tmp;
};
