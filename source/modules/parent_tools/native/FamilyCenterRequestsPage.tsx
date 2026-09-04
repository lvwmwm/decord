// Module ID: 14837
// Function ID: 14838
// Name: FamilyCenterMaxConnectionsBlurb
// Dependencies: [19, 17, 7471, 11295, 21, 4481, 709, 8575, 8576, 11851, 1233, 2368, 4477, 11325, 7063, 14798, 14838, 14840, 14849, 2]
// Exports: default

// Module 14837 (FamilyCenterMaxConnectionsBlurb)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import messagesProxyDefault from "messagesProxy" /* 2368 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 7063 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 8575 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8576 */;
import set from "set" /* 11325 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11851 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 14798 */;
import FamilyCenterLinkingBannerParentContentDefault from "FamilyCenterLinkingBannerParentContent" /* 14838 */;
import FamilyCenterAcceptedLinkRowDefault from "FamilyCenterAcceptedLinkRow" /* 14840 */;
import FamilyCenterPendingLinkRowDefault from "FamilyCenterPendingLinkRow" /* 14849 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import items from "items" /* 7471 */;
import { THROUGHLINE_URL } from "LOCATION_CONTEXT_MOBILE" /* 11295 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
function FamilyCenterMaxConnectionsBlurb() {
  let obj = useUserIdsForLinkStatus;
  const hasMaxConnections = obj.useHasMaxConnections();
  const tmp = callback3();
  const tmp5 = importDefault;
  useAgeSpecificText;
  const intl = tmp2(1233).intl;
  intl.formatToPlainString(messagesProxyDefault["1/PzIj"], { maxConnections: useIsInAdultAgeGroupDefault() ? closure_5 : closure_6 });
  const intl2 = tmp2(1233).intl;
  let tmp10 = null;
  if (hasMaxConnections) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "text-xxs/medium", color: "text-muted", children: null };
    obj[2] = tmp9;
    obj[1] = callback(tmp2(4477).Text, obj);
    tmp10 = callback(closure_3, obj);
  }
  return tmp10;
}
function FamilyCenterHelpLineInfo() {
  const tmp = callback4();
  let obj = set;
  const shouldShowHelplineLink = obj.useShouldShowHelplineLink();
  set;
  if (shouldShowHelplineLink) {
    const intl2 = tmp2(1233).intl;
    let formatResult = intl2.format(messagesProxyDefault["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (tmp6) {
      const intl = tmp2(1233).intl;
      obj = { helpLink: null };
      obj[0] = THROUGHLINE_URL;
      formatResult = intl.format(messagesProxyDefault["6tsC8u"], obj);
    }
  }
  let tmp11 = null;
  if (null != formatResult) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, variant: "heading-sm/semibold", children: null };
    obj1[0] = tmp.supportHeader;
    const intl3 = tmp2(1233).intl;
    obj1[2] = intl3.string(messagesProxyDefault["7/tVhv"]);
    const items = [callback(tmp2(4477).Text, obj1), ];
    const obj2 = { variant: "text-xs/medium", color: "text-muted", children: null };
    obj2[2] = formatResult;
    items[1] = callback(tmp2(4477).Text, obj2);
    obj[1] = items;
    tmp11 = callback2(closure_3, obj);
  }
  return tmp11;
}
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: c5, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_6 } = items);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { display: "flex", paddingTop: ThemesDefault.space.PX_12, marginTop: ThemesDefault.space.PX_12, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { container: { display: "flex", marginTop: ThemesDefault.space.PX_16 }, supportHeader: null };
createCacheKey = { marginBottom: ThemesDefault.space.PX_4 };
obj1[1] = createCacheKey;
let closure_12 = createCacheKey.createStyles(obj1);
const obj4 = { scrollView: { flex: 1 }, container: null };
let obj2 = { display: "flex", marginTop: ThemesDefault.space.PX_16 };
obj4[1] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
let closure_14 = createCacheKey.createStyles(obj4);
const obj5 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestsPage.tsx");

export default function FamilyCenterRequestsPage() {
  const tmp = callback5();
  let obj = { style: tmp.scrollView, children: null };
  obj = { bottom: true, children: null };
  obj = { style: tmp.container, children: null };
  const items = [callback(FamilyCenterParentalConsentNoticeDefault, {}), callback(FamilyCenterLinkingBannerParentContentDefault, {}), callback(FamilyCenterAcceptedLinkRowDefault, {}), callback(FamilyCenterPendingLinkRowDefault, {}), callback(FamilyCenterMaxConnectionsBlurb, {}), callback(FamilyCenterHelpLineInfo, {})];
  obj[1] = items;
  obj[1] = callback2(closure_3, obj);
  obj[1] = callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
  return callback(closure_4, obj);
};
