// Module ID: 13404
// Function ID: 13405
// Name: openConjureProjectInBuilder
// Dependencies: [12226, 2]
// Exports: default

// Module 13404 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
