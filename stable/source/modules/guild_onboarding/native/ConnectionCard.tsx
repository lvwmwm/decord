// Module ID: 7437
// Function ID: 7438
// Name: ConnectionCard
// Dependencies: [19, 7378, 21, 7438, 7455, 2]
// Exports: default

// Module 7437 (ConnectionCard)
import ApplicationConnectionCardDefault from "ApplicationConnectionCard" /* 7438 */;
import ProviderConnectionCardDefault from "ProviderConnectionCard" /* 7455 */;
import noop from "module_19" /* 19 */;

const OnboardingConnectionType = fn(7378).OnboardingConnectionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ConnectionCard.tsx");

export default function ConnectionCard(arg0) {
  ({ connection, guildId, location: _location } = arg0);
  const connection_type = connection.connection_type;
  if (OnboardingConnectionType.APPLICATION === connection_type) {
    const obj2 = { connection, guildId, location: _location };
    return jsx(ApplicationConnectionCardDefault, { connection, guildId, location: _location });
  } else if (tmp.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    const obj = { connection, guildId, location: _location };
    return jsx(ProviderConnectionCardDefault, { connection, guildId, location: _location });
  } else {
    const connection_type2 = connection.connection_type;
    return null;
  }
};
