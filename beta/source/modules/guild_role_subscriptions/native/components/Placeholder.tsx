// Module ID: 17508
// Function ID: 17509
// Name: Placeholder
// Dependencies: [19, 17, 21, 4836, 2]
// Exports: default

// Module 17508 (Placeholder)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ActivityIndicator = react_native.ActivityIndicator;
const jsx = Fragment.jsx;
let closure_2 = createStyles.createStyles({ spinner: { marginTop: 12 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/Placeholder.tsx");

export default function Placeholder() {
  return <ActivityIndicator style={closure_2().spinner} />;
};
