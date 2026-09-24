// Module ID: 15189
// Function ID: 15190
// Name: FamilyCenterRequestsPage
// Dependencies: [19, 17, 7817, 10394, 21, 4790, 580, 558, 568, 8953, 8954, 1119, 2486, 12086, 4786, 10435, 15150, 15190, 15192, 15201, 7403, 2]

// Module 15189 (FamilyCenterRequestsPage)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7403 */;
import useUserLinks from "useUserLinks" /* 8953 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8954 */;
import useHelpLineVisibility from "useHelpLineVisibility" /* 10435 */;
import useAgeSpecificText from "useAgeSpecificText" /* 12086 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 15150 */;
import FamilyCenterLinkingBannerDefault from "FamilyCenterLinkingBanner" /* 15190 */;
import FamilyCenterAcceptedLinksDefault from "FamilyCenterAcceptedLinks" /* 15192 */;
import FamilyCenterPendingLinksDefault from "FamilyCenterPendingLinks" /* 15201 */;
import noop from "module_19" /* 19 */;

const _modDef2486 = tmp5(2486);
require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const FamilyCenterConstants = fn(7817);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: hasOwnProperty, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: metroRequire } = FamilyCenterConstants);
const THROUGHLINE_URL = fn(10394).THROUGHLINE_URL;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(4790);
let obj2 = { container: { display: "flex", paddingTop: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_12, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 } };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(9);
  let container = closure_10();
  const hasMaxConnections = useUserLinks.useHasMaxConnections();
  const tmp6 = useIsInAdultAgeGroupDefault() ? hasOwnProperty : timestampProducer;
  if (cResult[0] !== tmp6) {
    const intl = tmp(1119).intl;
    const obj3 = { maxConnections: tmp6 };
    const formatToPlainStringResult = intl.formatToPlainString(tmp5(2486)["1/PzIj"], obj3);
    cResult[0] = tmp6;
    cResult[1] = formatToPlainStringResult;
    let tmp7 = formatToPlainStringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const intl2 = tmp(1119).intl;
    const obj4 = { maxConnections: tmp6 };
    const formatToPlainStringResult1 = intl2.formatToPlainString(tmp5(2486).RcTgiE, obj4);
    cResult[2] = tmp6;
    cResult[3] = formatToPlainStringResult1;
    let tmp9 = formatToPlainStringResult1;
  } else {
    tmp9 = cResult[3];
  }
  const ageSpecificText = useAgeSpecificText.useAgeSpecificText(tmp7, tmp9);
  if (!hasMaxConnections) {
    return null;
  } else {
    if (cResult[4] !== ageSpecificText) {
      const obj5 = { variant: "text-xxs/medium", color: "text-muted", children: ageSpecificText };
      const tmp14 = closure_1_8(tmp(4786).Text, obj5);
      cResult[4] = ageSpecificText;
      cResult[5] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === container.container) {
    }
    const obj6 = { style: container.container, children: tmp12 };
    const tmp18 = closure_1_8(React3, obj6);
    container = container.container;
    cResult[6] = container;
    cResult[7] = tmp12;
    cResult[8] = tmp18;
  }
}) : (() => {
  const tmp = closure_10();
  const hasMaxConnections = useUserLinks.useHasMaxConnections();
  useAgeSpecificText;
  const intl = tmp2(1119).intl;
  intl.formatToPlainString(_modDef2486["1/PzIj"], { maxConnections: useIsInAdultAgeGroupDefault() ? hasOwnProperty : timestampProducer });
  const intl2 = tmp2(1119).intl;
  let tmp10 = null;
  if (hasMaxConnections) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { variant: "text-xxs/medium", color: "text-muted", children: tmp9 };
    obj2.children = closure_1_8(tmp2(4786).Text, obj3);
    tmp10 = closure_1_8(React3, obj2);
  }
  return tmp10;
});
createStyles = fn(4790);
let obj6 = { container: null, supportHeader: null };
let obj3 = { display: "flex", paddingTop: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_12, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 };
obj6.container = { display: "flex", marginTop: nativeDefault.space.PX_16 };
let obj7 = { display: "flex", marginTop: nativeDefault.space.PX_16 };
obj6.supportHeader = { marginBottom: nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(obj6);
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(12);
  const tmp4 = closure_12();
  const shouldShowHelplineLink = useHelpLineVisibility.useShouldShowHelplineLink();
  const shouldShowThroughlineLink = useHelpLineVisibility.useShouldShowThroughlineLink();
  if (cResult[0] === shouldShowHelplineLink) {
    if (cResult[1] === shouldShowThroughlineLink) {
      if (null == cResult[2]) {
        return null;
      } else {
        const _Symbol = Symbol;
        ({ container, supportHeader } = tmp4);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1119).intl;
          const stringResult = intl3.string(_modDef2486["7/tVhv"]);
          cResult[3] = stringResult;
          let tmp13 = stringResult;
        } else {
          tmp13 = cResult[3];
        }
        if (cResult[4] !== tmp4.supportHeader) {
          const obj4 = { style: supportHeader, variant: "heading-sm/semibold", children: tmp13 };
          const tmp18 = closure_1_8(tmp(4786).Text, obj4);
          cResult[4] = tmp4.supportHeader;
          cResult[5] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[5];
        }
        if (cResult[6] !== tmp7) {
          const obj5 = { variant: "text-xs/medium", color: "text-muted", children: tmp7 };
          const tmp21 = closure_1_8(tmp(4786).Text, obj5);
          cResult[6] = tmp7;
          cResult[7] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[7];
        }
        if (cResult[8] === tmp4.container) {
          if (cResult[9] === tmp16) {
            if (cResult[10] === tmp19) {
              let tmp22 = cResult[11];
            }
            return tmp22;
          }
        }
        const obj6 = { style: container, children: null };
        const items = [tmp16, tmp19];
        obj6.children = items;
        const tmp25 = options(React3, obj6);
        cResult[8] = tmp4.container;
        cResult[9] = tmp16;
        cResult[10] = tmp19;
        cResult[11] = tmp25;
        tmp22 = tmp25;
      }
    }
  }
  if (shouldShowHelplineLink) {
    const intl2 = tmp(1119).intl;
    let formatResult = intl2.format(_modDef2486["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (shouldShowThroughlineLink) {
      const intl = tmp(1119).intl;
      const obj7 = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(_modDef2486["6tsC8u"], obj7);
    }
  }
  cResult[0] = shouldShowHelplineLink;
  cResult[1] = shouldShowThroughlineLink;
  cResult[2] = formatResult;
}) : (() => {
  const tmp = closure_12();
  const shouldShowHelplineLink = useHelpLineVisibility.useShouldShowHelplineLink();
  useHelpLineVisibility;
  if (shouldShowHelplineLink) {
    const intl2 = tmp2(1119).intl;
    let formatResult = intl2.format(_modDef2486["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (tmp6) {
      const intl = tmp2(1119).intl;
      const obj2 = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(_modDef2486["6tsC8u"], obj2);
    }
  }
  let tmp11 = null;
  if (null != formatResult) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.supportHeader, variant: "heading-sm/semibold", children: null };
    const intl3 = tmp2(1119).intl;
    obj4.children = intl3.string(_modDef2486["7/tVhv"]);
    const items = [closure_1_8(tmp2(4786).Text, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: formatResult };
    items[1] = closure_1_8(tmp2(4786).Text, obj5);
    obj3.children = items;
    tmp11 = options(React3, obj3);
  }
  return tmp11;
});
createStyles = fn(4790);
const obj11 = { scrollView: { flex: 1 }, container: null };
const obj8 = { marginBottom: nativeDefault.space.PX_4 };
obj11.container = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj11);
ReactCompilerGating = fn(558);
const obj12 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestsPage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(11);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = closure_1_8(FamilyCenterParentalConsentNoticeDefault, {});
    const tmp14 = closure_1_8(FamilyCenterLinkingBannerDefault, {});
    const tmp15 = closure_1_8(FamilyCenterAcceptedLinksDefault, {});
    const tmp16 = closure_1_8(FamilyCenterPendingLinksDefault, {});
    const tmp18 = closure_1_8(closure_11, {});
    const tmp20 = closure_1_8(closure_13, {});
    cResult[0] = tmp13;
    cResult[1] = tmp14;
    cResult[2] = tmp15;
    cResult[3] = tmp16;
    cResult[4] = tmp18;
    cResult[5] = tmp20;
    tmp10 = tmp20;
    tmp5 = tmp13;
    tmp6 = tmp14;
    tmp7 = tmp15;
    tmp8 = tmp16;
    tmp9 = tmp18;
  } else {
    [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = cResult;
  }
  if (cResult[6] !== tmp4.container) {
    const obj2 = { bottom: true, children: null };
    const obj3 = { style: tmp4.container, children: null };
    const items = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
    obj3.children = items;
    obj2.children = options(React3, obj3);
    const tmp25 = closure_1_8(common_SafeAreaView.SafeAreaPaddingView, obj2);
    cResult[6] = tmp4.container;
    cResult[7] = tmp25;
    let tmp21 = tmp25;
  } else {
    tmp21 = cResult[7];
  }
  if (cResult[8] === tmp4.scrollView) {
    if (cResult[9] === tmp21) {
      let tmp26 = cResult[10];
    }
    return tmp26;
  }
  const tmp27 = closure_1_8(React4, { style: tmp4.scrollView, children: tmp21 });
  cResult[8] = tmp4.scrollView;
  cResult[9] = tmp21;
  cResult[10] = tmp27;
  tmp26 = tmp27;
}) : (() => {
  const tmp = closure_14();
  const obj = { style: tmp.scrollView, children: null };
  const obj2 = { bottom: true, children: null };
  const obj3 = { style: tmp.container, children: null };
  const items = [closure_1_8(FamilyCenterParentalConsentNoticeDefault, {}), closure_1_8(FamilyCenterLinkingBannerDefault, {}), closure_1_8(FamilyCenterAcceptedLinksDefault, {}), closure_1_8(FamilyCenterPendingLinksDefault, {}), closure_1_8(closure_11, {}), closure_1_8(closure_13, {})];
  obj3.children = items;
  obj2.children = options(React3, obj3);
  obj.children = closure_1_8(common_SafeAreaView.SafeAreaPaddingView, obj2);
  return closure_1_8(React4, obj);
});
