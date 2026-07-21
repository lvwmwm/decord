// Module ID: 11704
// Function ID: 90924
// Name: RedesignContactSyncDiscoverabilityFooter
// Dependencies: [31, 33, 4126, 689, 1212, 9114, 2]
// Exports: default

// Module 11704 (RedesignContactSyncDiscoverabilityFooter)
import { HelpdeskArticles } from "module_31";
import { jsx } from "module_33";
import result2 from "result2";

const result = result2.fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

export default function RedesignContactSyncDiscoverabilityFooter(arg0) {
  let discoverabilityEnabled;
  let onValueChanged;
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  let obj = { hasIcons: false };
  const intl = require(dependencyMap[3]).intl;
  obj = { helpdeskUrl: importDefault(dependencyMap[4]).getArticleURL(HelpdeskArticles.CONTACT_SYNC) };
  obj.helperText = intl.format(require(dependencyMap[3]).t.zopgpe, obj);
  obj = {};
  const intl2 = require(dependencyMap[3]).intl;
  obj.label = intl2.string(require(dependencyMap[3]).t.a5QL24);
  obj.onValueChange = onValueChanged;
  obj.value = discoverabilityEnabled;
  obj.children = jsx(require(dependencyMap[5]).TableSwitchRow, obj);
  return jsx(require(dependencyMap[2]).TableRowGroup, obj);
};
