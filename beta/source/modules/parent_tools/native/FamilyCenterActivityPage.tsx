// Module ID: 15149
// Function ID: 15150
// Name: FamilyCenterActivityPage
// Dependencies: [19, 17, 21, 4790, 580, 558, 568, 8953, 15150, 15152, 15162, 12085, 15166, 7403, 2]

// Module 15149 (FamilyCenterActivityPage)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useUserLinks from "useUserLinks" /* 8953 */;
import FamilyCenterDataConfirmationDefault from "FamilyCenterDataConfirmation" /* 12085 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 15150 */;
import FamilyCenterActivityBannerDefault from "FamilyCenterActivityBanner" /* 15152 */;
import FamilyCenterFeatureRowDefault from "FamilyCenterFeatureRow" /* 15162 */;
import FamilyCenterActivityCardDefault from "FamilyCenterActivityCard" /* 15166 */;
import noop from "module_19" /* 19 */;

const common_SafeAreaView = tmp(7403);
require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { scrollView: { flex: 1 }, dataConfirmation: { marginTop: nativeDefault.space.PX_8 }, container: null };
let obj3 = { marginTop: nativeDefault.space.PX_8 };
obj2.container = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(10);
  const tmp4 = closure_8();
  let activeLinkUserIds = useUserLinks.useActiveLinkUserIds();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = hasOwnProperty(FamilyCenterParentalConsentNoticeDefault, {});
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === activeLinkUserIds.length) {
    if (cResult[2] === tmp4.dataConfirmation) {
      if (cResult[4] === tmp4.container) {
        if (cResult[5] === tmp9) {
          let tmp18 = cResult[6];
        }
        if (cResult[7] === tmp4.scrollView) {
          if (cResult[8] === tmp18) {
            let tmp23 = cResult[9];
          }
          return tmp23;
        }
        const obj3 = { style: tmp4.scrollView, children: tmp18 };
        const tmp26 = hasOwnProperty(React4, obj3);
        cResult[7] = tmp4.scrollView;
        cResult[8] = tmp18;
        cResult[9] = tmp26;
        tmp23 = tmp26;
      }
      const obj4 = { bottom: true, children: null };
      const obj5 = { style: tmp4.container, children: null };
      const items = [first, cResult[3]];
      obj5.children = items;
      obj4.children = React5(React3, obj5);
      const tmp22 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj4);
      cResult[4] = tmp4.container;
      cResult[5] = cResult[3];
      cResult[6] = tmp22;
      tmp18 = tmp22;
    }
  }
  if (0 === activeLinkUserIds.length) {
    const obj6 = { children: null };
    const items1 = [hasOwnProperty(FamilyCenterActivityBannerDefault, {}), hasOwnProperty(FamilyCenterFeatureRowDefault, {}), ];
    const obj7 = { style: tmp4.dataConfirmation, children: hasOwnProperty(FamilyCenterDataConfirmationDefault, {}) };
    items1[2] = hasOwnProperty(React3, obj7);
    obj6.children = items1;
    let tmp12 = React5(timestampProducer, obj6);
  } else {
    tmp12 = hasOwnProperty(FamilyCenterActivityCardDefault, {});
  }
  cResult[1] = activeLinkUserIds.length;
  activeLinkUserIds = tmp4.dataConfirmation;
  cResult[2] = activeLinkUserIds;
  cResult[3] = tmp12;
}) : (() => {
  const tmp = closure_8();
  const obj2 = { style: tmp.scrollView, children: null };
  const activeLinkUserIds = useUserLinks.useActiveLinkUserIds();
  const obj3 = { style: tmp.container, children: null };
  const items = [hasOwnProperty(FamilyCenterParentalConsentNoticeDefault, {}), ];
  if (0 === activeLinkUserIds.length) {
    const obj4 = { children: null };
    const items1 = [tmp3(tmp7(15152), {}), tmp3(tmp7(15162), {}), ];
    const obj5 = { style: tmp.dataConfirmation, children: tmp3(tmp7(12085), {}) };
    items1[2] = tmp3(tmp6, obj5);
    obj4.children = items1;
    let tmp3Result = tmp5(timestampProducer, obj4);
  } else {
    tmp3Result = tmp3(tmp7(15166), {});
  }
  const tmp4 = React4;
  items[1] = tmp3Result;
  obj3.children = items;
  obj2.children = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, children: React5(React3, obj3) });
  return hasOwnProperty(tmp4, obj2);
});
