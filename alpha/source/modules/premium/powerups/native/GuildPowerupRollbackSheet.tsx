// Module ID: 12864
// Function ID: 12865
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 10578, 5273, 2]
// Exports: default

// Module 12864 (GuildPowerupRollbackSheet)
import jsxProd from "jsxProd" /* 21 */;
import components_Button_Button from "components/Button/Button" /* 5273 */;
import PromoSheet from "PromoSheet" /* 10578 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(ctaText) {
  ctaText = ctaText.ctaText;
  ({ header, body, onCtaPress, onDismiss } = ctaText);
  const obj = { title: header, description: body, onDismiss, actions: null };
  let tmpResult;
  if (null != ctaText) {
    const obj2 = { variant: "primary", text: ctaText, onPress: onCtaPress };
    tmpResult = tmp(components_Button_Button.Button, obj2);
  }
  obj.actions = tmpResult;
  return jsx(PromoSheet.PromoSheet, { title: header, description: body, onDismiss, actions: null });
};
