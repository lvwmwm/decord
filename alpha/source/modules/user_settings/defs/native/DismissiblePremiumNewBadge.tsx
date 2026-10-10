// Module ID: 14977
// Function ID: 14978
// Name: DismissiblePremiumNewBadge
// Dependencies: [19, 7151, 21, 5092, 587, 558, 576, 1382, 1200, 5391, 1105, 10012, 2]

// Module 14977 (DismissiblePremiumNewBadge)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import native from "native" /* 1200 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import ColorConstants from "ColorConstants" /* 7151 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10012 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const Gradients = ColorConstants.Gradients;
const jsx = Fragment.jsx;
let obj = { newTag: { backgroundColor: "transparent" }, newTagContainer: obj2 };
obj2 = { borderRadius: nativeDefault.radii.sm, marginLeft: nativeDefault.space.PX_4 };
let closure_5 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function DismissiblePremiumNewBadge(dismissibleContent) {
  let noGradient;
  let tmp4;
  let obj = dismissibleContent(noGradient[6]);
  const cResult = obj.c(13);
  dismissibleContent = dismissibleContent.dismissibleContent;
  const containerStyle = dismissibleContent.containerStyle;
  const tmp = noGradient;
  noGradient = dismissibleContent.noGradient;
  const newPremiumStyle = dismissibleContent.newPremiumStyle;
  const colors = dismissibleContent.colors;
  const variantOverride = dismissibleContent.variantOverride;
  let tmp3 = variantOverride();
  let closure_6 = tmp3;
  if (cResult[0] !== dismissibleContent) {
    let items = [dismissibleContent];
    cResult[0] = dismissibleContent;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === colors) {
    if (cResult[3] === containerStyle) {
      if (cResult[4] === dismissibleContent) {
        if (cResult[5] === newPremiumStyle) {
          if (cResult[6] === noGradient) {
            if (cResult[7] === tmp3) {
              let tmp5;
              if (cResult[8] === variantOverride) {
                tmp5 = cResult[9];
              }
              if (cResult[10] === tmp4) {
                let tmp6;
                if (cResult[11] === tmp5) {
                  tmp6 = cResult[12];
                }
                return tmp6;
              }
              const obj2 = { contentTypes: tmp4, children: tmp5 };
              let tmp9 = colors(containerStyle(tmp[11]), obj2);
              cResult[10] = tmp4;
              cResult[11] = tmp5;
              cResult[12] = tmp9;
              tmp6 = tmp9;
            }
          }
        }
      }
    }
  }
  const fn = function c(visibleContent) {
    let tmp15;
    if (visibleContent.visibleContent !== dismissibleContent) {
      return null;
    } else {
      let tmp6Result;
      let tmp3 = variantOverride;
      if (null == variantOverride) {
        let str = "text-xs/bold";
        const obj = PlatformUtils;
        if (obj.isAndroid()) {
          str = "text-xxs/bold";
        }
        tmp3 = str;
      }
      const tmp4 = noGradient;
      if (tmp4) {
        const items = [closure_6.newTagContainer, containerStyle];
        tmp6Result = jsx(native.NewTag, { variant: tmp3, containerStyle: items });
      } else if (newPremiumStyle) {
        const obj3 = { variant: tmp3, containerStyle: closure_6.newTag, gradient: true, colors: Gradients.PREMIUM_TIER_2_TRI_COLOR };
        tmp6Result = tmp6(native.NewTag, obj3);
      } else {
        const obj4 = { style: closure_6.newTagContainer, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: tmp15, children: null };
        tmp15 = colors;
        const tmp9 = LinearGradientDefault;
        if (colors == null) {
          const items1 = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK];
          tmp15 = items1;
        }
        tmp6Result = tmp6(tmp9, obj4);
      }
      return tmp6Result;
    }
  };
  cResult[2] = colors;
  cResult[3] = containerStyle;
  cResult[4] = dismissibleContent;
  cResult[5] = newPremiumStyle;
  cResult[6] = noGradient;
  cResult[7] = tmp3;
  cResult[8] = variantOverride;
  cResult[9] = fn;
  tmp5 = fn;
}) : (function DismissiblePremiumNewBadge(dismissibleContent) {
  dismissibleContent = dismissibleContent.dismissibleContent;
  ({ containerStyle: importDefault, noGradient: dependencyMap, newPremiumStyle: Gradients, colors: jsx, variantOverride: closure_5 } = dismissibleContent);
  let closure_6 = closure_5();
  let items = [dismissibleContent];
  return jsx(SelectedDismissibleContentDefault, {
    contentTypes: items,
    children(visibleContent) {
      let tmp15;
      if (visibleContent.visibleContent !== dismissibleContent) {
        return null;
      } else {
        let tmp6Result;
        let tmp3 = closure_5;
        if (null == closure_5) {
          let str = "text-xs/bold";
          const obj = PlatformUtils;
          if (obj.isAndroid()) {
            str = "text-xxs/bold";
          }
          tmp3 = str;
        }
        const tmp4 = dependencyMap;
        if (tmp4) {
          const items = [closure_6.newTagContainer, importDefault];
          tmp6Result = jsx(native.NewTag, { variant: tmp3, containerStyle: items });
        } else if (Gradients) {
          const obj3 = { variant: tmp3, containerStyle: closure_6.newTag, gradient: true, colors: Gradients.PREMIUM_TIER_2_TRI_COLOR };
          tmp6Result = tmp6(native.NewTag, obj3);
        } else {
          const obj4 = { style: closure_6.newTagContainer, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: tmp15, children: null };
          tmp15 = jsx;
          const tmp9 = LinearGradientDefault;
          if (jsx == null) {
            const items1 = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK];
            tmp15 = items1;
          }
          tmp6Result = tmp6(tmp9, obj4);
        }
        return tmp6Result;
      }
    }
  });
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx");

export default tmp3;
