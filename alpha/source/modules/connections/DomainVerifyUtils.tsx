// Module ID: 7584
// Function ID: 7585
// Name: DomainVerifyUtils
// Dependencies: [2]
// Exports: getDnsName, getHttpName

// Module 7584 (DomainVerifyUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/connections/DomainVerifyUtils.tsx");

export const EXAMPLE_DOMAIN = "example.com";
export function getDnsName(domain) {
  return "_discord." + domain;
}
export function getHttpName(domain) {
  return "https://" + domain + "/.well-known/discord";
}
