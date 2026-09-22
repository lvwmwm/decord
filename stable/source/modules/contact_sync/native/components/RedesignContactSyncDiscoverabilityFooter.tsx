// Module ID: 12819
// Function ID: 12820
// Name: RedesignContactSyncDiscoverabilityFooter
// Dependencies: [1074, 21, 5768, 1114, 2024, 7303, 2]
// Exports: default

// Module 12819 (RedesignContactSyncDiscoverabilityFooter)
import jsxProd from "jsxProd" /* 21 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import TableRowGroup from "TableRowGroup" /* 5768 */;
import TableSwitchRow from "TableSwitchRow" /* 7303 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

export default function RedesignContactSyncDiscoverabilityFooter(arg0) {
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  const obj = { hasIcons: false, helperText: null, children: null };
  const intl = util.intl;
  const obj2 = { helpdeskUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CONTACT_SYNC) };
  obj.helperText = intl.format(util.t.zopgpe, obj2);
  const obj4 = { label: null, onValueChange: null, value: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.a5QL24);
  obj4.onValueChange = onValueChanged;
  obj4.value = discoverabilityEnabled;
  obj.children = jsx(TableSwitchRow.TableSwitchRow, { label: null, onValueChange: null, value: null });
  return jsx(TableRowGroup.TableRowGroup, { hasIcons: false, helperText: null, children: null });
};
