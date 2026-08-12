// Module ID: 8517
// Function ID: 8518
// Name: useWideAuthView
// Dependencies: [7682, 1624, 2]
// Exports: default

// Module 8517 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7682)();
  const obj = require(1624) /* isMetaQuest */;
  return require(1624) /* isMetaQuest */.isMetaQuest() || tmp;
};
