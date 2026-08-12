// Module ID: 10627
// Function ID: 10628
// Name: EXAMPLE_DOMAIN
// Dependencies: [2]
// Exports: getDnsName, getHttpName

// Module 10627 (EXAMPLE_DOMAIN)
const result = require("set").fileFinishedImporting("modules/connections/DomainVerifyUtils.tsx");

export const EXAMPLE_DOMAIN = "example.com";
export const getDnsName = function getDnsName(domain) {
  return "_discord." + domain;
};
export const getHttpName = function getHttpName(domain) {
  return "https://" + domain + "/.well-known/discord";
};
