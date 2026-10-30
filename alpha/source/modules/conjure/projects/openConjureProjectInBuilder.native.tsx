// Module ID: 14125
// Function ID: 14126
// Name: openConjureProjectInBuilder
// Dependencies: [10957, 2]
// Exports: default

// Module 14125 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10957 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
