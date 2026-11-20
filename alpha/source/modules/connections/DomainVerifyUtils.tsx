// Module ID: 7132
// Function ID: 7133
// Name: DomainVerifyUtils
// Dependencies: [2]
// Exports: getDnsName, getHttpName

// Module 7132 (DomainVerifyUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/connections/DomainVerifyUtils.tsx");

export const EXAMPLE_DOMAIN = "example.com";
export function getDnsName(domain) {
  return "_discord." + domain;
}
export function getHttpName(domain) {
  return "https://" + domain + "/.well-known/discord";
}
