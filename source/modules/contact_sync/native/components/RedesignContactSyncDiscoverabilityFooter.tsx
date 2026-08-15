// Module ID: 11859
// Function ID: 11860
// Name: RedesignContactSyncDiscoverabilityFooter
// Dependencies: [676, 21, 6286, 1236, 1993, 7178, 2]
// Exports: default

// Module 11859 (RedesignContactSyncDiscoverabilityFooter)
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";

const result = require("TableRowGroupTitle").fileFinishedImporting("modules/contact_sync/native/components/RedesignContactSyncDiscoverabilityFooter.tsx");

export default function RedesignContactSyncDiscoverabilityFooter(arg0) {
  let discoverabilityEnabled;
  let onValueChanged;
  ({ discoverabilityEnabled, onValueChanged } = arg0);
  let obj = { hasIcons: false, helperText: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = { helpdeskUrl: null };
  obj[0] = importDefault(1993).getArticleURL(HelpdeskArticles.CONTACT_SYNC);
  obj[1] = intl.format(require(1236) /* getSystemLocale */.t.zopgpe, obj);
  obj = { label: null, onValueChange: null, value: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.a5QL24);
  obj[1] = onValueChanged;
  obj[2] = discoverabilityEnabled;
  obj[2] = jsx(require(7178) /* TableSwitchRow */.TableSwitchRow, { label: null, onValueChange: null, value: null });
  return jsx(require(6286) /* TableRowGroupTitle */.TableRowGroup, { label: null, onValueChange: null, value: null });
};
