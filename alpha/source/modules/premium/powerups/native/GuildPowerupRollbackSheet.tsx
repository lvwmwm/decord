// Module ID: 14297
// Function ID: 14298
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 10973, 5788, 2]
// Exports: default

// Module 14297 (GuildPowerupRollbackSheet)
import Fragment from "Fragment" /* 21 */;
import PromoSheet2 from "PromoSheet" /* 10973 */;
import size from "module_2" /* 2 */;

let tmp2;
const components_Button_Button = tmp2(5788);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(ctaText) {
  let body;
  let header;
  let onCtaPress;
  let onDismiss;
  ctaText = ctaText.ctaText;
  ({ header, body, onCtaPress, onDismiss } = ctaText);
  let tmpResult;
  const PromoSheet = PromoSheet2.PromoSheet;
  if (null != ctaText) {
    const obj2 = { variant: "primary", text: ctaText, onPress: onCtaPress };
    tmpResult = tmp(components_Button_Button.Button, obj2);
  }
  return <PromoSheet title={header} description={body} onDismiss={onDismiss} actions={tmpResult} />;
};
