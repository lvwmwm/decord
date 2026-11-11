// Module ID: 7850
// Function ID: 7851
// Name: ConnectionCard
// Dependencies: [19, 7155, 21, 7851, 7867, 2]
// Exports: default

// Module 7850 (ConnectionCard)
import Fragment from "Fragment" /* 21 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 7155 */;
import ApplicationConnectionCardDefault from "ApplicationConnectionCard" /* 7851 */;
import ProviderConnectionCardDefault from "ProviderConnectionCard" /* 7867 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const OnboardingConnectionType = GuildOnboardingPromptsConstants.OnboardingConnectionType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ConnectionCard.tsx");

export default function ConnectionCard(arg0) {
  let _location;
  let connection;
  let guildId;
  ({ connection, guildId, location: _location } = arg0);
  const connection_type = connection.connection_type;
  if (OnboardingConnectionType.APPLICATION === connection_type) {
    return jsx(ApplicationConnectionCardDefault, { connection, guildId, location: _location });
  } else if (tmp.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    return jsx(ProviderConnectionCardDefault, { connection, guildId, location: _location });
  } else {
    const connection_type2 = connection.connection_type;
    return null;
  }
};
