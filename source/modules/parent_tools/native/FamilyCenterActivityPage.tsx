// Module ID: 14797
// Function ID: 14798
// Name: FamilyCenterActivityPage
// Dependencies: [19, 17, 21, 4481, 709, 8575, 7063, 14798, 14800, 14810, 11850, 14814, 2]
// Exports: default

// Module 14797 (FamilyCenterActivityPage)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 7063 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 8575 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 14798 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { scrollView: { flex: 1 }, dataConfirmation: null, container: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPage.tsx");

export default function FamilyCenterActivityPage() {
  const tmp = callback2();
  let obj = useUserIdsForLinkStatus;
  obj = { style: tmp.scrollView, children: null };
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = { style: tmp.container, children: null };
  const items = [callback(FamilyCenterParentalConsentNoticeDefault, {}), ];
  if (0 === activeLinkUserIds.length) {
    obj1 = { children: null };
    const items1 = [tmp3(tmp7(14800), {}), tmp3(tmp7(14810), {}), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.dataConfirmation;
    obj2[1] = tmp3(tmp7(11850), {});
    items1[2] = tmp3(tmp6, obj2);
    obj1[0] = items1;
    let tmp3Result = tmp5(closure_6, obj1);
  } else {
    tmp3Result = tmp3(tmp7(14814), {});
  }
  items[1] = tmp3Result;
  obj[1] = items;
  obj[1] = callback(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, children: closure_7(closure_3, obj) });
  return callback(closure_4, obj);
};
