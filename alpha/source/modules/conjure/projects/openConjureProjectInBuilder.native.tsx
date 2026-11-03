// Module ID: 14306
// Function ID: 14307
// Name: openConjureProjectInBuilder
// Dependencies: [11109, 2]
// Exports: default

// Module 14306 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11109 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
