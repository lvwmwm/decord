// Module ID: 11794
// Function ID: 11795
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 7654, 4695, 2]
// Exports: default

// Module 11794 (GuildPowerupRollbackSheet)
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
  obj[3] = jsx(require(4695) /* Button */.Button, { variant: "primary", text: ctaText, onPress: onCtaPress });
  return jsx(require(7654) /* PromoSheet */.PromoSheet, { title: header, description: body, onDismiss, actions: null });
};
