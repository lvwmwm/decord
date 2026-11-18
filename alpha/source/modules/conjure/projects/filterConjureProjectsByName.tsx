// Module ID: 13711
// Function ID: 13712
// Name: filterConjureProjectsByName
// Dependencies: [2]
// Exports: filterConjureProjectsByName

// Module 13711 (filterConjureProjectsByName)
import size from "module_2" /* 2 */;

let name;

const result = size.fileFinishedImporting("modules/conjure/projects/filterConjureProjectsByName.tsx");

export function filterConjureProjectsByName(conjureProjectsByActivity, str) {
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  let found = conjureProjectsByActivity;
  if ("" !== toLocaleLowerCaseResult) {
    found = conjureProjectsByActivity.filter((name) => {
      name = name.name;
      toLocaleLowerCaseResult = name.toLocaleLowerCase();
      return toLocaleLowerCaseResult.includes(toLocaleLowerCaseResult);
    });
  }
  return found;
}
