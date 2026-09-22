// Module ID: 18151
// Function ID: 18152
// Name: Placeholder
// Dependencies: [19, 17, 21, 4757, 2]
// Exports: default

// Module 18151 (Placeholder)
import noop from "module_19" /* 19 */;

const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_2 = createStyles.createStyles({ spinner: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/Placeholder.tsx");

export default function Placeholder() {
  return <ActivityIndicator style={closure_2().spinner} />;
};
