// Module ID: 8472
// Function ID: 8473
// Name: useWideAuthView
// Dependencies: [7641, 1605, 2]
// Exports: default

// Module 8472 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7641)();
  const obj = require(1605) /* isMetaQuest */;
  return require(1605) /* isMetaQuest */.isMetaQuest() || tmp;
};
