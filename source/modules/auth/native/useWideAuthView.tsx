// Module ID: 9189
// Function ID: 71976
// Name: useWideAuthView
// Dependencies: []
// Exports: default

// Module 9189 (useWideAuthView)
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
