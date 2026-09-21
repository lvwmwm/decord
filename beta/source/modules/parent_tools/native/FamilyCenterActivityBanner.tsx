// Module ID: 15142
// Function ID: 15143
// Name: FamilyCenterActivityBanner
// Dependencies: [19, 17, 21, 4758, 558, 568, 8921, 8922, 15143, 580, 1119, 2486, 12050, 15150, 15151, 4754, 2]

// Module 15142 (FamilyCenterActivityBanner)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import _modDef2486 from "module_2486" /* 2486 */;
import Text_Text from "Text/Text" /* 4754 */;
import useUserLinks from "useUserLinks" /* 8921 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8922 */;
import useAgeSpecificText from "useAgeSpecificText" /* 12050 */;
import noop from "module_19" /* 19 */;

const FamilyCenterBannerButton = tmp(15143);
require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let createStyles = fn(4758);
let closure_7 = createStyles.createStyles({ container: { width: "100%" } });
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  let container = closure_7();
  const hasActiveLinks = useUserLinks.useHasActiveLinks();
  const tmp5 = useIsInAdultAgeGroupDefault();
  let tmp6 = null;
  if (!obj3.useHasMaxConnections()) {
    if (tmp5) {
      tmp6 = null;
    }
    if (cResult[0] !== tmp5) {
      let tmp8Result = FamilyCenterBannerButton;
      tmp8Result = hasOwnProperty(tmp5 ? tmp8Result.FamilyCenterParentQRCodeButton : tmp8Result.FamilyCenterTeenQRCodeButton, {});
      cResult[0] = tmp5;
      cResult[1] = tmp8Result;
    } else {
      if (cResult[2] === container.container) {
      }
      const obj4 = { style: container.container, children: cResult[1] };
      const tmp14 = hasOwnProperty(React3, obj4);
      container = container.container;
      cResult[2] = container;
      cResult[3] = cResult[1];
      cResult[4] = tmp14;
    }
  }
  return tmp6;
}) : (() => {
  const tmp = closure_7();
  const hasActiveLinks = useUserLinks.useHasActiveLinks();
  const tmp5 = useIsInAdultAgeGroupDefault();
  let tmp6 = null;
  if (!obj2.useHasMaxConnections()) {
    if (tmp5) {
      tmp6 = null;
    }
    const obj3 = { style: tmp.container, children: null };
    let tmp7Result1 = FamilyCenterBannerButton;
    tmp7Result1 = tmp7(tmp5 ? tmp7Result1.FamilyCenterParentQRCodeButton : tmp7Result1.FamilyCenterTeenQRCodeButton, {});
    obj3.children = tmp7Result1;
    hasOwnProperty(React3, obj3);
  }
  return tmp6;
});
createStyles = fn(4758);
let obj4 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: 16, padding: 24, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2 }, art: null, header: null, description: null };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: 16, padding: 24, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2 };
obj4.art = { maxWidth: 243, maxHeight: 119, marginBottom: nativeDefault.space.PX_8 };
const obj6 = { maxWidth: 243, maxHeight: 119, marginBottom: nativeDefault.space.PX_8 };
obj4.header = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj4.description = { textAlign: "center" };
let closure_9 = createStyles.createStyles(obj4);
ReactCompilerGating = fn(558);
const obj7 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(21);
  const tmp6 = closure_9();
  const tmp5 = useIsInAdultAgeGroupDefault();
  const hasMaxConnections = useUserLinks.useHasMaxConnections();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp4(2486)["T7GyW+"]);
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp4(2486).goKE2b);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp8 = stringResult;
    tmp9 = stringResult1;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const ageSpecificText = useAgeSpecificText.useAgeSpecificText(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1119).intl;
    const formatResult = intl3.format(tmp4(2486).MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" });
    const intl4 = tmp(1119).intl;
    const formatResult1 = intl4.format(tmp4(2486).EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" });
    cResult[2] = formatResult;
    cResult[3] = formatResult1;
    let tmp14 = formatResult1;
    let tmp13 = formatResult;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const tmpResult = useAgeSpecificText;
  const ageSpecificText1 = useAgeSpecificText.useAgeSpecificText(tmp13, tmp14);
  const tmp4Result = importDefault(tmp5 ? 15150 : 15151);
  if (cResult[4] === tmp6.art) {
    if (cResult[5] === tmp4Result) {
      let tmp19 = cResult[6];
    }
    if (cResult[7] === ageSpecificText) {
      if (cResult[8] === tmp6.header) {
        let tmp21 = cResult[9];
      }
      if (cResult[10] === ageSpecificText1) {
        if (cResult[11] === tmp6.description) {
          let tmp24 = cResult[12];
        }
        if (cResult[13] !== hasMaxConnections) {
          let tmp28 = null;
          if (!hasMaxConnections) {
            tmp28 = hasOwnProperty(closure_8, {});
          }
          cResult[13] = hasMaxConnections;
          cResult[14] = tmp28;
          let tmp27 = tmp28;
        } else {
          tmp27 = cResult[14];
        }
        if (cResult[15] === tmp6.container) {
          if (cResult[16] === tmp19) {
            if (cResult[17] === tmp21) {
              if (cResult[18] === tmp24) {
                if (cResult[19] === tmp27) {
                  let tmp31 = cResult[20];
                }
                return tmp31;
              }
            }
          }
        }
        const obj3 = { style: tmp6.container, children: null };
        const items = [tmp19, tmp21, tmp24, tmp27];
        obj3.children = items;
        const tmp34 = timestampProducer(React3, obj3);
        cResult[15] = tmp6.container;
        cResult[16] = tmp19;
        cResult[17] = tmp21;
        cResult[18] = tmp24;
        cResult[19] = tmp27;
        cResult[20] = tmp34;
        tmp31 = tmp34;
      }
      const obj4 = { style: tmp6.description, variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 };
      const tmp26 = hasOwnProperty(tmp(4754).Text, obj4);
      cResult[10] = ageSpecificText1;
      cResult[11] = tmp6.description;
      cResult[12] = tmp26;
      tmp24 = tmp26;
    }
    const obj5 = { style: tmp6.header, variant: "heading-lg/semibold", children: ageSpecificText };
    const tmp23 = hasOwnProperty(tmp(4754).Text, obj5);
    cResult[7] = ageSpecificText;
    cResult[8] = tmp6.header;
    cResult[9] = tmp23;
    tmp21 = tmp23;
  }
  const tmp20 = hasOwnProperty(React4, { source: tmp4Result, style: tmp6.art });
  cResult[4] = tmp6.art;
  cResult[5] = tmp4Result;
  cResult[6] = tmp20;
  tmp19 = tmp20;
}) : (() => {
  const tmp4 = closure_9();
  const tmp = importDefault;
  const tmp3 = useIsInAdultAgeGroupDefault();
  const hasMaxConnections = useUserLinks.useHasMaxConnections();
  const intl = util.intl;
  const obj2 = useAgeSpecificText;
  const intl2 = util.intl;
  const ageSpecificText = obj2.useAgeSpecificText(intl.string(_modDef2486["T7GyW+"]), intl2.string(_modDef2486.goKE2b));
  const stringResult = intl.string(_modDef2486["T7GyW+"]);
  const intl3 = util.intl;
  const obj3 = useAgeSpecificText;
  const intl4 = util.intl;
  const obj4 = { style: tmp4.container, children: null };
  const obj5 = { source: null, style: null };
  const ageSpecificText1 = obj3.useAgeSpecificText(intl3.format(_modDef2486.MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" }), intl4.format(_modDef2486.EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" }));
  obj5.source = tmp(tmp3 ? 15150 : 15151);
  obj5.style = tmp4.art;
  const items = [hasOwnProperty(React4, obj5), hasOwnProperty(Text_Text.Text, { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText }), hasOwnProperty(Text_Text.Text, { style: tmp4.description, variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 }), ];
  let tmp13Result = null;
  if (!hasMaxConnections) {
    tmp13Result = tmp13(closure_8, {});
  }
  items[3] = tmp13Result;
  obj4.children = items;
  return timestampProducer(React3, obj4);
});
