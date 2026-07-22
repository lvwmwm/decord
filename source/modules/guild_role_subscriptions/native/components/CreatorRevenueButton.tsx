// Module ID: 9347
// Function ID: 73012
// Name: CreatorRevenueButton
// Dependencies: []
// Exports: CreatorRevenueButton

// Module 9347 (CreatorRevenueButton)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = arg1(dependencyMap[2]).createStyles({ container: { borderRadius: 3 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx");

export const CreatorRevenueButton = function CreatorRevenueButton(arg0) {
  let disabled;
  let loading;
  let onPress;
  let style;
  let text;
  ({ disabled, text, onPress, style, loading } = arg0);
  style = [callback().container, ];
  style[1] = style;
  return jsx(importDefault(dependencyMap[3]), { style, loading, disabled, onPress, text });
};
