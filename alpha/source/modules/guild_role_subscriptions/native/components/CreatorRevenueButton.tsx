// Module ID: 10155
// Function ID: 10156
// Name: CreatorRevenueButton
// Dependencies: [19, 21, 5141, 10156, 2]
// Exports: CreatorRevenueButton

// Module 10155 (CreatorRevenueButton)
import Fragment from "Fragment" /* 21 */;
import ShinyButtonDefault from "ShinyButton" /* 10156 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ container: { borderRadius: 3 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx");

export function CreatorRevenueButton(arg0) {
  let disabled;
  let loading;
  let onPress;
  let style;
  let text;
  ({ disabled, text, onPress, style, loading } = arg0);
  const items = [closure_3().container, style];
  closure_3();
  return jsx(ShinyButtonDefault, { style: items, loading, disabled, onPress, text });
}
