// Module ID: 15433
// Function ID: 117763
// Name: useSearchLayoutInsetTop
// Dependencies: []
// Exports: default

// Module 15433 (useSearchLayoutInsetTop)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return importDefault(dependencyMap[0])().top + 8;
};
