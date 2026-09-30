// Module ID: 14966
// Function ID: 14967
// Name: LoadingIndicator
// Dependencies: [19, 17, 21, 4866, 2]
// Exports: default

// Module 14966 (LoadingIndicator)
import noop from "module_19" /* 19 */;

const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
let closure_2 = createStyles.createStyles({ indicator: { margin: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LoadingIndicator.tsx");

export default function LoadingIndicator() {
  return <ActivityIndicator style={closure_2().indicator} />;
};
