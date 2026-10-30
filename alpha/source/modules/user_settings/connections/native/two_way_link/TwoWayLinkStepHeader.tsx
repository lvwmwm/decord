// Module ID: 9711
// Function ID: 9712
// Name: TwoWayLinkStepHeader
// Dependencies: [19, 21, 9710, 7142, 5619, 1114, 2]
// Exports: TwoWayLinkStepHeader

// Module 9711 (TwoWayLinkStepHeader)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7142 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9710 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export function TwoWayLinkStepHeader(arg0) {
  let idx;
  let total;
  ({ idx, total } = arg0);
  const obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj2 = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("TwoWayLinkStepHeader", "text-xs/bold");
  const items = [twoWayLinkStyles.stepHeader, typeConsolidationEyebrow.style];
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  return <Text variant={typeConsolidationEyebrow.variant} color="text-default" style={items}>{intl.format(intl2.t.fHz6eR, { number: idx, total })}</Text>;
}
