// Module ID: 14407
// Function ID: 14408
// Name: openConjureProjectInBuilder
// Dependencies: [11165, 2]
// Exports: default

// Module 14407 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11165 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
