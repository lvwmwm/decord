// Module ID: 8539
// Function ID: 8540
// Name: TwoWayLinkStepHeader
// Dependencies: [19, 21, 8538, 6400, 4832, 1115, 2]
// Exports: TwoWayLinkStepHeader

// Module 8539 (TwoWayLinkStepHeader)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6400 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 8538 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
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
};
