// Module ID: 11879
// Function ID: 11880
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 7735, 4714, 2]
// Exports: default

// Module 11879 (GuildPowerupRollbackSheet)
import { jsx } from "jsxProd";

const result = require("Button").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  let body;
  let ctaText;
  let header;
  let onCtaPress;
  let onDismiss;
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  const obj = { title: header, description: body, onDismiss, actions: null };
  obj[3] = jsx(require(4714) /* Button */.Button, { variant: "primary", text: ctaText, onPress: onCtaPress });
  return jsx(require(7735) /* PromoSheet */.PromoSheet, { title: header, description: body, onDismiss, actions: null });
};
