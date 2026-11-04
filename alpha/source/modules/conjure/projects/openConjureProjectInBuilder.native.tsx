// Module ID: 14393
// Function ID: 14394
// Name: openConjureProjectInBuilder
// Dependencies: [11157, 2]
// Exports: default

// Module 14393 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11157 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
