// Module ID: 8993
// Function ID: 70812
// Name: EXAMPLE_DOMAIN
// Dependencies: []
// Exports: getDnsName, getHttpName

// Module 8993 (EXAMPLE_DOMAIN)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/connections/DomainVerifyUtils.tsx");

export const EXAMPLE_DOMAIN = "example.com";
export const getDnsName = function getDnsName(domain) {
  return "_discord." + domain;
};
export const getHttpName = function getHttpName(domain) {
  return "https://" + domain + "/.well-known/discord";
};
