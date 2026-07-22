// Module ID: 5459
// Function ID: 46648
// Name: ConnectionCard
// Dependencies: []
// Exports: default

// Module 5459 (ConnectionCard)
importAll(dependencyMap[0]);
const OnboardingConnectionType = arg1(dependencyMap[1]).OnboardingConnectionType;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_onboarding/native/ConnectionCard.tsx");

export default function ConnectionCard(arg0) {
  let _location;
  let connection;
  let guildId;
  ({ connection, guildId, location: _location } = arg0);
  const connection_type = connection.connection_type;
  if (OnboardingConnectionType.APPLICATION === connection_type) {
    let obj = { connection, guildId, location: _location };
    return jsx(importDefault(dependencyMap[3]), obj);
  } else if (OnboardingConnectionType.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    obj = { connection, guildId, location: _location };
    return jsx(importDefault(dependencyMap[4]), obj);
  } else {
    const connection_type2 = connection.connection_type;
    return null;
  }
};
