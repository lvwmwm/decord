// Module ID: 14451
// Function ID: 14452
// Name: openConjureProjectInBuilder
// Dependencies: [11136, 2]
// Exports: default

// Module 14451 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11136 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
