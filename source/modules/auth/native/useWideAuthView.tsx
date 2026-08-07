// Module ID: 8412
// Function ID: 8413
// Name: useWideAuthView
// Dependencies: [7581, 1605, 2]
// Exports: default

// Module 8412 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7581)();
  const obj = require(1605) /* isMetaQuest */;
  return require(1605) /* isMetaQuest */.isMetaQuest() || tmp;
};
