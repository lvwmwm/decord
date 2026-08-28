// Module ID: 9290
// Function ID: 9291
// Name: EXAMPLE_DOMAIN
// Dependencies: [2]
// Exports: getDnsName, getHttpName

// Module 9290 (EXAMPLE_DOMAIN)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/connections/DomainVerifyUtils.tsx");

export const EXAMPLE_DOMAIN = "example.com";
export const getDnsName = function getDnsName(domain) {
  return "_discord." + domain;
};
export const getHttpName = function getHttpName(domain) {
  return "https://" + domain + "/.well-known/discord";
};
