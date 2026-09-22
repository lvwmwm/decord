// Module ID: 15299
// Function ID: 15300
// Name: LoadingIndicator
// Dependencies: [19, 17, 21, 4636, 2]
// Exports: default

// Module 15299 (LoadingIndicator)
import noop from "module_19" /* 19 */;

const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_2 = createStyles.createStyles({ indicator: { margin: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LoadingIndicator.tsx");

export default function LoadingIndicator() {
  return <ActivityIndicator style={closure_2().indicator} />;
};
