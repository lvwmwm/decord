// Module ID: 9202
// Function ID: 9203
// Name: useWideAuthView
// Dependencies: [6564, 1577, 2]
// Exports: default

// Module 9202 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(6564)();
  const obj = require(1577) /* isMetaQuest */;
  return require(1577) /* isMetaQuest */.isMetaQuest() || tmp;
};
