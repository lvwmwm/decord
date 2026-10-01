// Module ID: 12183
// Function ID: 12184
// Name: RedesignContactSyncDiscoverabilityFooter
// Dependencies: [1074, 21, 5999, 1115, 2111, 6621, 2]
// Exports: default

// Module 12183 (RedesignContactSyncDiscoverabilityFooter)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6621 */;
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
