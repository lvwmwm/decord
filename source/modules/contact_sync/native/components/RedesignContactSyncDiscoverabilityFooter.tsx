// Module ID: 11742
// Function ID: 91236
// Name: RedesignContactSyncDiscoverabilityFooter
// Dependencies: [653, 33, 5501, 1212, 1920, 5502, 2]
// Exports: default

// Module 11742 (RedesignContactSyncDiscoverabilityFooter)
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";

const result = require("TableRowGroupTitle").fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

export default function RedesignContactSyncDiscoverabilityFooter(arg0) {
  let discoverabilityEnabled;
  let onValueChanged;
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  let obj = { hasIcons: false };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { helpdeskUrl: importDefault(1920).getArticleURL(HelpdeskArticles.CONTACT_SYNC) };
  obj.helperText = intl.format(require(1212) /* getSystemLocale */.t.zopgpe, obj);
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t.a5QL24);
  obj.onValueChange = onValueChanged;
  obj.value = discoverabilityEnabled;
  obj.children = jsx(require(5502) /* TableSwitchRow */.TableSwitchRow, {});
  return jsx(require(5501) /* TableRowGroupTitle */.TableRowGroup, {});
};
