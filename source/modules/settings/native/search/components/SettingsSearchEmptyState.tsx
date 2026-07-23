// Module ID: 14582
// Function ID: 111171
// Dependencies: [31, 27, 33, 4130, 3843, 1212, 8430, 4541, 4126, 2]

// Module 14582
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { paddingTop: 24, justifyContent: "center", alignItems: "center" }, textContainer: { marginTop: 24 } });
const memoResult = importAllResult.memo(function SettingsSearchEmptyState() {
  const tmp = callback3();
  const effect = importAllResult.useEffect(() => {
    const AccessibilityAnnouncer = outer1_0(outer1_1[4]).AccessibilityAnnouncer;
    const intl = outer1_0(outer1_1[5]).intl;
    AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_1[5]).t.zihbmv), "polite");
  }, []);
  let obj = { style: tmp.container };
  const items = [callback(require(8430) /* getNoResultsAltSource */.NoResultsAlt, { resizeMode: "contain" }), ];
  obj = { style: tmp.textContainer, align: "center", justify: "center" };
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.zihbmv);
  const items1 = [callback(require(4126) /* Text */.Text, obj), ];
  const obj1 = { variant: "text-xs/medium", color: "text-muted" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.XclvsB);
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  items[1] = callback2(require(4541) /* Stack */.Stack, obj);
  obj.children = items;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/settings/native/search/components/SettingsSearchEmptyState.tsx");

export default memoResult;
