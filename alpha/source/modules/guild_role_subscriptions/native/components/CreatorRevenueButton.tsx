// Module ID: 9927
// Function ID: 9928
// Name: CreatorRevenueButton
// Dependencies: [19, 21, 4836, 9928, 2]
// Exports: CreatorRevenueButton

// Module 9927 (CreatorRevenueButton)
import ShinyButtonDefault from "ShinyButton" /* 9928 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_3 = createStyles.createStyles({ container: { borderRadius: 3 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx");

export const CreatorRevenueButton = function CreatorRevenueButton(arg0) {
  ({ disabled, text, onPress, style, loading } = arg0);
  const obj = { style: null, loading, disabled, onPress, text };
  const items = [closure_3().container, style];
  obj.style = items;
  return jsx(ShinyButtonDefault, { style: null, loading, disabled, onPress, text });
};
