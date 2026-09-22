// Module ID: 15496
// Function ID: 15497
// Name: LoadingIndicator
// Dependencies: [19, 17, 21, 4757, 2]
// Exports: default

// Module 15496 (LoadingIndicator)
import noop from "module_19" /* 19 */;

const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_2 = createStyles.createStyles({ indicator: { margin: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LoadingIndicator.tsx");

export default function LoadingIndicator() {
  return <ActivityIndicator style={closure_2().indicator} />;
};
