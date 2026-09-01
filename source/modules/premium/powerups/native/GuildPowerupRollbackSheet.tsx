// Module ID: 12079
// Function ID: 12080
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 10313, 4928, 2]
// Exports: default

// Module 12079 (GuildPowerupRollbackSheet)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import Button from "Button" /* 4928 */;
import PromoSheet from "PromoSheet" /* 10313 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  return jsx(PromoSheet.PromoSheet, { title: header, description: body, onDismiss, actions: jsx(Button.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }) });
};
