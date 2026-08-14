// Module ID: 5787
// Function ID: 5788
// Name: ConnectionCard
// Dependencies: [19, 5304, 21, 5788, 5805, 2]
// Exports: default

// Module 5787 (ConnectionCard)
import "noop";
import { OnboardingConnectionType } from "serverPromptToClientPrompt";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("modules/guild_onboarding/native/ConnectionCard.tsx");

export default function ConnectionCard(arg0) {
  let _location;
  let connection;
  let guildId;
  ({ connection, guildId, location: _location } = arg0);
  const connection_type = connection.connection_type;
  if (OnboardingConnectionType.APPLICATION === connection_type) {
    let obj = { connection: null, guildId: null, location: null };
    obj[0] = connection;
    obj[1] = guildId;
    obj[2] = _location;
    return jsx(importDefault(5788), { connection: null, guildId: null, location: null });
  } else if (tmp.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    obj = { connection: null, guildId: null, location: null };
    obj[0] = connection;
    obj[1] = guildId;
    obj[2] = _location;
    return jsx(importDefault(5805), { connection: null, guildId: null, location: null });
  } else {
    const connection_type2 = connection.connection_type;
    return null;
  }
};
