// Module ID: 13497
// Function ID: 13498
// Name: openConjureProjectInBuilder
// Dependencies: [12293, 2]
// Exports: default

// Module 13497 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12293 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
