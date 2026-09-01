// Module ID: 12051
// Function ID: 12052
// Name: regionResponseToRegion
// Dependencies: [2]
// Exports: default

// Module 12051 (regionResponseToRegion)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/game_server/utils/regionResponseToRegion.tsx");

export default function regionResponseToRegion(id) {
  return { id: id.id, name: id.name, countryCode: id.country_code, pingUrl: id.ping_url, enabled: id.enabled };
};
