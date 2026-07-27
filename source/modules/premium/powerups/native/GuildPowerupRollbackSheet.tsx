// Module ID: 11544
// Function ID: 89871
// Name: GuildPowerupRollbackSheet
// Dependencies: [33, 6599, 4544, 2]
// Exports: default

// Module 11544 (GuildPowerupRollbackSheet)
import { jsx } from "jsxProd";

const result = require("Button").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  let body;
  let ctaText;
  let header;
  let onCtaPress;
  let onDismiss;
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  const obj = { title: header, description: body, onDismiss, actions: jsx(require(4544) /* Button */.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }) };
  return jsx(require(6599) /* PromoSheet */.PromoSheet, { title: header, description: body, onDismiss, actions: jsx(require(4544) /* Button */.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }) });
};
