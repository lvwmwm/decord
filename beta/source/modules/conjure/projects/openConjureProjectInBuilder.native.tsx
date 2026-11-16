// Module ID: 14926
// Function ID: 14927
// Name: openConjureProjectInBuilder
// Dependencies: [10536, 2]
// Exports: default

// Module 14926 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10536 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
