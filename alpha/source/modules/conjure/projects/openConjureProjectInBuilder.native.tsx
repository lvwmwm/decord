// Module ID: 13760
// Function ID: 13761
// Name: openConjureProjectInBuilder
// Dependencies: [10856, 2]
// Exports: default

// Module 13760 (openConjureProjectInBuilder)
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10856 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProjectInBuilder.native.tsx");

export default function openConjureProjectInBuilder(id) {
  openConjureHomeScreenDefault(id.id);
  return true;
};
