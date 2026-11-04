// Module ID: 14469
// Function ID: 14470
// Name: RedesignContactSyncDiscoverabilityFooter
// Dependencies: [1072, 21, 7201, 1113, 2190, 7505, 2]
// Exports: default

// Module 14469 (RedesignContactSyncDiscoverabilityFooter)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2190 */;
import TableRowGroup2 from "TableRowGroup" /* 7201 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7505 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

export default function RedesignContactSyncDiscoverabilityFooter(arg0) {
  let discoverabilityEnabled;
  let intl2;
  let obj3;
  let onValueChanged;
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  const intl = intl3.intl;
  const format = intl.format;
  const obj2 = { helpdeskUrl: obj3.getArticleURL(HelpdeskArticles.CONTACT_SYNC) };
  const zopgpe = intl3.t.zopgpe;
  obj3 = HelpdeskUtilsDefault;
  ({ label: intl2.string(intl3.t.a5QL24), onValueChange: onValueChanged, value: discoverabilityEnabled });
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  intl2 = intl3.intl;
  return <TableRowGroup hasIcons={false} helperText={format(zopgpe, obj2)}>{null}</TableRowGroup>;
};
