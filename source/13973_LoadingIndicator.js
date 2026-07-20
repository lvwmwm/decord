// Module ID: 13973
// Function ID: 106261
// Name: LoadingIndicator
// Dependencies: []
// Exports: default

// Module 13973 (LoadingIndicator)
importAll(dependencyMap[0]);
const ActivityIndicator = arg1(dependencyMap[1]).ActivityIndicator;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_2 = arg1(dependencyMap[3]).createStyles({ indicator: { margin: 16 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/LoadingIndicator.tsx");

export default function LoadingIndicator() {
  return <ActivityIndicator style={callback().indicator} />;
};
