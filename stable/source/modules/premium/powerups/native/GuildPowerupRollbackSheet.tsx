// Module ID: 12172
// Function ID: 12173
// Name: GuildPowerupRollbackSheet
// Dependencies: [21, 558, 576, 5594, 10045, 2]

// Module 12172 (GuildPowerupRollbackSheet)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import PromoSheet2 from "PromoSheet" /* 10045 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2;
const components_Button_Button = tmp2(5594);
const jsx = Fragment.jsx;
tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let body;
  let ctaText;
  let header;
  let onCtaPress;
  let onDismiss;
  const obj = react;
  const cResult = obj.c(8);
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  if (cResult[0] === ctaText) {
    let tmp4;
    if (cResult[1] === onCtaPress) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === body) {
      if (cResult[4] === header) {
        if (cResult[5] === onDismiss) {
          let tmp7;
          if (cResult[6] === tmp4) {
            tmp7 = cResult[7];
          }
          return tmp7;
        }
      }
    }
    const tmp9 = jsx(PromoSheet2.PromoSheet, { title: header, description: body, onDismiss, actions: tmp4 });
    cResult[3] = body;
    cResult[4] = header;
    cResult[5] = onDismiss;
    cResult[6] = tmp4;
    cResult[7] = tmp9;
    tmp7 = tmp9;
  }
  let tmp5;
  if (null != ctaText) {
    tmp5 = jsx(tmp(5594).Button, { variant: "primary", text: ctaText, onPress: onCtaPress });
  }
  cResult[0] = ctaText;
  cResult[1] = onCtaPress;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((ctaText) => {
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
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default tmp2;
