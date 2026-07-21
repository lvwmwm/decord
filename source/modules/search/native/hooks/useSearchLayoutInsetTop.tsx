// Module ID: 15422
// Function ID: 117681
// Name: useSearchLayoutInsetTop
// Dependencies: []
// Exports: default

// Module 15422 (useSearchLayoutInsetTop)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return importDefault(dependencyMap[0])().top + 8;
};
