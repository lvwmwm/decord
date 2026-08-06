// Module ID: 8395
// Function ID: 8396
// Name: useWideAuthView
// Dependencies: [7562, 1605, 2]
// Exports: default

// Module 8395 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7562)();
  const obj = require(1605) /* isMetaQuest */;
  return require(1605) /* isMetaQuest */.isMetaQuest() || tmp;
};
