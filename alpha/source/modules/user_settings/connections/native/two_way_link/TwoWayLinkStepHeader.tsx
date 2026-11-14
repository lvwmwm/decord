// Module ID: 7462
// Function ID: 7463
// Name: TwoWayLinkStepHeader
// Dependencies: [19, 21, 5929, 1113, 2]
// Exports: TwoWayLinkStepHeader

// Module 7462 (TwoWayLinkStepHeader)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5929 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export function TwoWayLinkStepHeader(arg0) {
  let idx;
  let total;
  ({ idx, total } = arg0);
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  return <Text variant="body-sm/medium" color="text-default">{intl.format(intl2.t.fHz6eR, { number: idx, total })}</Text>;
}
