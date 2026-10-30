// Module ID: 17135
// Function ID: 17136
// Name: LoadingIndicator
// Dependencies: [19, 17, 21, 5009, 2]
// Exports: default

// Module 17135 (LoadingIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const ActivityIndicator = react_native.ActivityIndicator;
const jsx = Fragment.jsx;
let closure_2 = createStyles.createStyles({ indicator: { margin: 16 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LoadingIndicator.tsx");

export default function LoadingIndicator() {
  return <ActivityIndicator style={closure_2().indicator} />;
};
