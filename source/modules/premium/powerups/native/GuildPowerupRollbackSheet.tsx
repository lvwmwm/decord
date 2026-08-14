// Module ID: 11955
// Function ID: 11956
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 7799, 4777, 2]
// Exports: default

// Module 11955 (GuildPowerupRollbackSheet)
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
  obj[3] = jsx(require(4777) /* Button */.Button, { variant: "primary", text: ctaText, onPress: onCtaPress });
  return jsx(require(7799) /* PromoSheet */.PromoSheet, { title: header, description: body, onDismiss, actions: null });
};
