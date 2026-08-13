// Module ID: 11939
// Function ID: 11940
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 7778, 4755, 2]
// Exports: default

// Module 11939 (GuildPowerupRollbackSheet)
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
  obj[3] = jsx(require(4755) /* Button */.Button, { variant: "primary", text: ctaText, onPress: onCtaPress });
  return jsx(require(7778) /* PromoSheet */.PromoSheet, { title: header, description: body, onDismiss, actions: null });
};
