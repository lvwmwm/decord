// Module ID: 9731
// Function ID: 9732
// Name: TwoWayLinkStepHeader
// Dependencies: [19, 21, 9730, 7148, 5624, 1113, 2]
// Exports: TwoWayLinkStepHeader

// Module 9731 (TwoWayLinkStepHeader)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7148 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9730 */;
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
