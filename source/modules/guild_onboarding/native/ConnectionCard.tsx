// Module ID: 5495
// Function ID: 46797
// Name: ConnectionCard
// Dependencies: [31, 5094, 33, 5496, 5513, 2]
// Exports: default

// Module 5495 (ConnectionCard)
import "result";
import { OnboardingConnectionType } from "_createForOfIteratorHelperLoose";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("modules/guild_onboarding/native/ConnectionCard.tsx");

export default function ConnectionCard(arg0) {
  let _location;
  let connection;
  let guildId;
  ({ connection, guildId, location: _location } = arg0);
  const connection_type = connection.connection_type;
  if (OnboardingConnectionType.APPLICATION === connection_type) {
    let obj = { connection, guildId, location: _location };
    return jsx(importDefault(5496), { connection, guildId, location: _location });
  } else if (OnboardingConnectionType.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    obj = { connection, guildId, location: _location };
    return jsx(importDefault(5513), { connection, guildId, location: _location });
  } else {
    const connection_type2 = connection.connection_type;
    return null;
  }
};
