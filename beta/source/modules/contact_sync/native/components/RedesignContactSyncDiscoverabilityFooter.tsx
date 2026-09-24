// Module ID: 12869
// Function ID: 12870
// Name: RedesignContactSyncDiscoverabilityFooter
// Dependencies: [1078, 21, 558, 568, 1119, 2112, 5935, 7478, 2]

// Module 12869 (RedesignContactSyncDiscoverabilityFooter)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import TableRowGroup from "TableRowGroup" /* 5935 */;
import TableSwitchRow from "TableSwitchRow" /* 7478 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const obj2 = { helpdeskUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CONTACT_SYNC) };
    const formatResult = intl.format(tmp(1119).t.zopgpe, obj2);
    cResult[0] = formatResult;
    let first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1119).intl;
    const stringResult = intl2.string(tmp(1119).t.a5QL24);
    cResult[1] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === discoverabilityEnabled) {
    if (cResult[3] === onValueChanged) {
      let tmp10 = cResult[4];
    }
    return tmp10;
  }
  const tmp11 = jsx(TableRowGroup.TableRowGroup, { hasIcons: false, helperText: first, children: jsx(TableSwitchRow.TableSwitchRow, { label: tmp8, onValueChange: onValueChanged, value: discoverabilityEnabled }) });
  cResult[2] = discoverabilityEnabled;
  cResult[3] = onValueChanged;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((arg0) => {
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
});
