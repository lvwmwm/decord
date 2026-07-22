// Module ID: 9190
// Function ID: 72000
// Name: useWideAuthView
// Dependencies: []
// Exports: default

// Module 9190 (useWideAuthView)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = importDefault(dependencyMap[0])();
  const tmp2 = !require(dependencyMap[1]).isMetaQuest();
  let tmp3 = !tmp2;
  if (tmp2) {
    tmp3 = tmp;
  }
  return tmp3;
};
