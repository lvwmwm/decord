// Module ID: 12773
// Function ID: 12774
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 10494, 5187, 2]
// Exports: default

// Module 12773 (GuildPowerupRollbackSheet)
import jsxProd from "jsxProd" /* 21 */;
import components_Button_Button from "components/Button/Button" /* 5187 */;
import PromoSheet from "PromoSheet" /* 10494 */;
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
