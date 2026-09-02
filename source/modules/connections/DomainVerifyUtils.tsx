// Module ID: 9364
// Function ID: 9365
// Name: EXAMPLE_DOMAIN
// Dependencies: [2]
// Exports: getDnsName, getHttpName

// Module 9364 (EXAMPLE_DOMAIN)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/connections/DomainVerifyUtils.tsx");

export const EXAMPLE_DOMAIN = "example.com";
export const getDnsName = function getDnsName(domain) {
  return "_discord." + domain;
};
export const getHttpName = function getHttpName(domain) {
  return "https://" + domain + "/.well-known/discord";
};
