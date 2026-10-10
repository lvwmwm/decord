// Module ID: 15131
// Function ID: 15132
// Name: FamilyCenterActivityBanner
// Dependencies: [19, 17, 21, 5092, 558, 576, 7738, 7739, 15132, 587, 1126, 2568, 11533, 15139, 15140, 6156, 5088, 2]

// Module 15131 (FamilyCenterActivityBanner)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import _modDef2568 from "module_2568" /* 2568 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import useUserLinks from "useUserLinks" /* 7738 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7739 */;
import useAgeSpecificText3 from "useAgeSpecificText" /* 11533 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let tmp;
const FamilyCenterBannerButton = tmp(15132);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let closure_6 = createStyles.createStyles({ container: { width: "100%" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterActivityBannerButton() {
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_6();
  const obj2 = useUserLinks;
  const hasActiveLinks = obj2.useHasActiveLinks();
  const tmp6 = useIsInAdultAgeGroupDefault();
  let tmp7 = null;
  const obj3 = useUserLinks;
  if (!obj3.useHasMaxConnections()) {
    if (!tmp6) {
      let tmp8;
      if (cResult[0] !== tmp6) {
        const tmpResult = FamilyCenterBannerButton;
        const tmp9Result = React3(tmp6 ? tmpResult.FamilyCenterParentQRCodeButton : tmpResult.FamilyCenterTeenQRCodeButton, {});
        cResult[0] = tmp6;
        cResult[1] = tmp9Result;
        tmp8 = tmp9Result;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === tmp4.container) {
        let tmp12;
        if (cResult[3] === tmp8) {
          tmp12 = cResult[4];
        }
        tmp7 = tmp12;
      }
      const obj4 = { style: tmp4.container, children: tmp8 };
      const tmp15 = React3(View, obj4);
      cResult[2] = tmp4.container;
      cResult[3] = tmp8;
      cResult[4] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp7 = null;
    }
  }
  return tmp7;
}) : (function FamilyCenterActivityBannerButton() {
  let tmp2Result;
  const tmp = closure_6();
  const obj = useUserLinks;
  const hasActiveLinks = obj.useHasActiveLinks();
  const tmp5 = useIsInAdultAgeGroupDefault();
  let tmp7Result = null;
  const obj2 = useUserLinks;
  if (!obj2.useHasMaxConnections()) {
    if (!tmp5) {
      const obj3 = { style: tmp.container, children: React3(tmp5 ? tmp2Result.FamilyCenterParentQRCodeButton : tmp2Result.FamilyCenterTeenQRCodeButton, {}) };
      tmp2Result = FamilyCenterBannerButton;
      tmp7Result = tmp7(View, obj3);
    } else {
      tmp7Result = null;
    }
  }
  return tmp7Result;
});
createStyles = createStyles_mod;
let obj = { container: obj2, art: obj3, header: obj4, description: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: 16, padding: 24, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2 };
createStyles = createStyles.createStyles;
obj3 = { maxWidth: 243, maxHeight: 119, marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
let closure_8 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterActivityBanner() {
  let items;
  let tmp13;
  let tmp14;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(21);
  const tmp5 = useIsInAdultAgeGroupDefault();
  const tmp6 = closure_8();
  const obj2 = useUserLinks;
  const hasMaxConnections = obj2.useHasMaxConnections();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef2568["T7GyW+"]);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(_modDef2568.goKE2b);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp8 = stringResult;
    tmp9 = stringResult1;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = useAgeSpecificText3;
  const ageSpecificText = tmpResult.useAgeSpecificText(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const formatResult = intl3.format(_modDef2568.MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" });
    const intl4 = tmp(1126).intl;
    const formatResult1 = intl4.format(_modDef2568.EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" });
    cResult[2] = formatResult;
    cResult[3] = formatResult1;
    tmp14 = formatResult1;
    tmp13 = formatResult;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const tmpResult2 = useAgeSpecificText3;
  const ageSpecificText1 = tmpResult2.useAgeSpecificText(tmp13, tmp14);
  const tmp4Result = importDefault(tmp5 ? 15139 : 15140);
  if (cResult[4] === tmp6.art) {
    let tmp19;
    if (cResult[5] === tmp4Result) {
      tmp19 = cResult[6];
    }
    if (cResult[7] === ageSpecificText) {
      let tmp21;
      if (cResult[8] === tmp6.header) {
        tmp21 = cResult[9];
      }
      if (cResult[10] === ageSpecificText1) {
        let tmp24;
        let tmp27;
        if (cResult[11] === tmp6.description) {
          tmp24 = cResult[12];
        }
        if (cResult[13] !== hasMaxConnections) {
          let tmp28 = null;
          if (!hasMaxConnections) {
            tmp28 = React3(closure_7, {});
          }
          cResult[13] = hasMaxConnections;
          cResult[14] = tmp28;
          tmp27 = tmp28;
        } else {
          tmp27 = cResult[14];
        }
        if (cResult[15] === tmp6.container) {
          if (cResult[16] === tmp19) {
            if (cResult[17] === tmp21) {
              if (cResult[18] === tmp24) {
                let tmp31;
                if (cResult[19] === tmp27) {
                  tmp31 = cResult[20];
                }
                return tmp31;
              }
            }
          }
        }
        const obj3 = { style: tmp6.container, children: items };
        items = [tmp19, tmp21, tmp24, tmp27];
        const tmp34 = hasOwnProperty(View, obj3);
        cResult[15] = tmp6.container;
        cResult[16] = tmp19;
        cResult[17] = tmp21;
        cResult[18] = tmp24;
        cResult[19] = tmp27;
        cResult[20] = tmp34;
        tmp31 = tmp34;
      }
      const obj4 = { style: tmp6.description, variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 };
      const tmp26 = React3(Text_Text.Text, obj4);
      cResult[10] = ageSpecificText1;
      cResult[11] = tmp6.description;
      cResult[12] = tmp26;
      tmp24 = tmp26;
    }
    const obj5 = { style: tmp6.header, variant: "heading-lg/semibold", children: ageSpecificText };
    const tmp23 = React3(Text_Text.Text, obj5);
    cResult[7] = ageSpecificText;
    cResult[8] = tmp6.header;
    cResult[9] = tmp23;
    tmp21 = tmp23;
  }
  const obj6 = { source: tmp4Result, style: tmp6.art };
  const tmp20 = React3(FastImageDefault, obj6);
  cResult[4] = tmp6.art;
  cResult[5] = tmp4Result;
  cResult[6] = tmp20;
  tmp19 = tmp20;
}) : (function FamilyCenterActivityBanner() {
  let items;
  const tmp3 = useIsInAdultAgeGroupDefault();
  const tmp4 = closure_8();
  const obj = useUserLinks;
  const hasMaxConnections = obj.useHasMaxConnections();
  const useAgeSpecificText = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl = intl5.intl;
  const stringResult = intl.string(_modDef2568["T7GyW+"]);
  const intl2 = intl5.intl;
  const ageSpecificText = useAgeSpecificText(stringResult, intl2.string(_modDef2568.goKE2b));
  const useAgeSpecificText2 = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl3 = intl5.intl;
  const formatResult = intl3.format(_modDef2568.MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" });
  const intl4 = intl5.intl;
  const obj2 = { style: tmp4.container, children: items };
  const ageSpecificText2 = useAgeSpecificText2(formatResult, intl4.format(_modDef2568.EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" }));
  const obj3 = { source: importDefault(tmp3 ? 15139 : 15140), style: tmp4.art };
  const tmp16 = FastImageDefault;
  items = [React3(tmp16, obj3), , , ];
  const obj4 = { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText };
  items[1] = React3(Text_Text.Text, obj4);
  const obj5 = { style: tmp4.description, variant: "text-sm/medium", color: "text-muted", children: ageSpecificText2 };
  items[2] = React3(Text_Text.Text, obj5);
  let tmp15Result = null;
  const tmp13 = hasOwnProperty;
  const tmp14 = View;
  if (!hasMaxConnections) {
    tmp15Result = tmp15(closure_7, {});
  }
  items[3] = tmp15Result;
  return tmp13(tmp14, obj2);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityBanner.tsx");

export default tmp5;
