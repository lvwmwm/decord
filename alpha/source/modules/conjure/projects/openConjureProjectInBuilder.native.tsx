// Module ID: 13494
// Function ID: 13495
// Name: openConjureProjectInBuilder
// Dependencies: [12297, 2]
// Exports: default

// Module 13494 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12297 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
