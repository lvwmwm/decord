// Module ID: 8521
// Function ID: 8522
// Name: useWideAuthView
// Dependencies: [7686, 1624, 2]
// Exports: default

// Module 8521 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7686)();
  const obj = require(1624) /* isMetaQuest */;
  return require(1624) /* isMetaQuest */.isMetaQuest() || tmp;
};
