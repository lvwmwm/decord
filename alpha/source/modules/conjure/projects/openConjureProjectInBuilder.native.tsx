// Module ID: 14816
// Function ID: 14817
// Name: openConjureProjectInBuilder
// Dependencies: [10469, 2]
// Exports: default

// Module 14816 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10469 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
