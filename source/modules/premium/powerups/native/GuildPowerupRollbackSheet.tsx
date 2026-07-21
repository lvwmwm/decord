// Module ID: 11536
// Function ID: 89842
// Name: GuildPowerupRollbackSheet
// Dependencies: []
// Exports: default

// Module 11536 (GuildPowerupRollbackSheet)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  let body;
  let ctaText;
  let header;
  let onCtaPress;
  let onDismiss;
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  const obj = { title: header, description: body, onDismiss, actions: jsx(require(dependencyMap[2]).Button, { variant: "primary", text: ctaText, onPress: onCtaPress }) };
  return jsx(require(dependencyMap[1]).PromoSheet, obj);
};
