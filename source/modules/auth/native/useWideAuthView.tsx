// Module ID: 8478
// Function ID: 8479
// Name: useWideAuthView
// Dependencies: [7643, 1624, 2]
// Exports: default

// Module 8478 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7643)();
  const obj = require(1624) /* isMetaQuest */;
  return require(1624) /* isMetaQuest */.isMetaQuest() || tmp;
};
