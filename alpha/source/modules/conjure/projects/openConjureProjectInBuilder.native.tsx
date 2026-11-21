// Module ID: 13496
// Function ID: 13497
// Name: openConjureProjectInBuilder
// Dependencies: [12290, 2]
// Exports: default

// Module 13496 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12290 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
