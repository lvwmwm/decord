// Module ID: 11577
// Function ID: 90149
// Name: GuildPowerupRollbackSheet
// Dependencies: [33, 7515, 4543, 2]
// Exports: default

// Module 11577 (GuildPowerupRollbackSheet)
import { jsx } from "jsxProd";

const result = require("Button").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  let body;
  let ctaText;
  let header;
  let onCtaPress;
  let onDismiss;
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  const obj = { title: header, description: body, onDismiss, actions: jsx(require(4543) /* Button */.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }) };
  return jsx(require(7515) /* PromoSheet */.PromoSheet, { title: header, description: body, onDismiss, actions: jsx(require(4543) /* Button */.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }) });
};
