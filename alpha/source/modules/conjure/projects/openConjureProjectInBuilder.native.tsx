// Module ID: 13993
// Function ID: 13994
// Name: openConjureProjectInBuilder
// Dependencies: [10932, 2]
// Exports: default

// Module 13993 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10932 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
