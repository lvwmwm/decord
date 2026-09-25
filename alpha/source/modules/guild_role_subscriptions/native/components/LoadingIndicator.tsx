// Module ID: 14734
// Function ID: 14735
// Name: LoadingIndicator
// Dependencies: [19, 17, 21, 4829, 2]
// Exports: default

// Module 14734 (LoadingIndicator)
import noop from "module_19" /* 19 */;

const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_2 = createStyles.createStyles({ indicator: { margin: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LoadingIndicator.tsx");

export default function LoadingIndicator() {
  return <ActivityIndicator style={closure_2().indicator} />;
};
