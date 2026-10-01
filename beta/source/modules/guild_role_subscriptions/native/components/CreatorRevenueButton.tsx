// Module ID: 9760
// Function ID: 9761
// Name: CreatorRevenueButton
// Dependencies: [19, 21, 4836, 9761, 2]
// Exports: CreatorRevenueButton

// Module 9760 (CreatorRevenueButton)
import Fragment from "Fragment" /* 21 */;
import ShinyButtonDefault from "ShinyButton" /* 9761 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ container: { borderRadius: 3 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx");

export const CreatorRevenueButton = function CreatorRevenueButton(arg0) {
  let disabled;
  let loading;
  let onPress;
  let style;
  let text;
  ({ disabled, text, onPress, style, loading } = arg0);
  const items = [closure_3().container, style];
  closure_3();
  return jsx(ShinyButtonDefault, { style: items, loading, disabled, onPress, text });
};
