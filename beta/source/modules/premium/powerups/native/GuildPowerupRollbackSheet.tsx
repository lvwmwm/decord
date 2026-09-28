// Module ID: 12011
// Function ID: 12012
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 9691, 5281, 2]
// Exports: default

// Module 12011 (GuildPowerupRollbackSheet)
import jsxProd from "jsxProd" /* 21 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import PromoSheet from "PromoSheet" /* 9691 */;
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
