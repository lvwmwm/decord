// Module ID: 8255
// Function ID: 8256
// Name: useWideAuthView
// Dependencies: [7534, 1577, 2]
// Exports: default

// Module 8255 (useWideAuthView)
const result = require("set").fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(7534)();
  const obj = require(1577) /* isMetaQuest */;
  return require(1577) /* isMetaQuest */.isMetaQuest() || tmp;
};
