// Module ID: 6777
// Function ID: 6778
// Name: ConnectionCard
// Dependencies: [19, 6718, 21, 6778, 6795, 2]
// Exports: default

// Module 6777 (ConnectionCard)
import ApplicationConnectionCardDefault from "ApplicationConnectionCard" /* 6778 */;
import ProviderConnectionCardDefault from "ProviderConnectionCard" /* 6795 */;
import noop from "module_19" /* 19 */;

const OnboardingConnectionType = fn(6718).OnboardingConnectionType;
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
