// Module ID: 8582
// Function ID: 8583
// Name: useWideAuthView
// Dependencies: [7925, 1625, 2]
// Exports: default

// Module 8582 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7925)();
  const obj = require(1625) /* isMetaQuest */;
  return require(1625) /* isMetaQuest */.isMetaQuest() || tmp;
};
