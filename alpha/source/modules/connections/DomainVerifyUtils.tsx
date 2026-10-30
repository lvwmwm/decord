// Module ID: 14607
// Function ID: 14608
// Name: DomainVerifyUtils
// Dependencies: [2]
// Exports: getDnsName, getHttpName

// Module 14607 (DomainVerifyUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/connections/DomainVerifyUtils.tsx");

export const EXAMPLE_DOMAIN = "example.com";
export function getDnsName(domain) {
  return "_discord." + domain;
}
export function getHttpName(domain) {
  return "https://" + domain + "/.well-known/discord";
}
