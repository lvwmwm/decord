// Module ID: 15774
// Function ID: 15775
// Name: IndicatorDot
// Dependencies: [17, 21, 587, 5005, 558, 576, 15775, 2]

// Module 15774 (IndicatorDot)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import IndicatorDotShared from "IndicatorDotShared" /* 15775 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { xs: nativeDefault.space.PX_4, sm: nativeDefault.space.PX_6, md: nativeDefault.space.PX_8, lg: nativeDefault.space.PX_10 };
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj2 = { dot: { borderRadius: nativeDefault.radii.round }, primary: { backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND }, notification: { backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND }, neutral: { backgroundColor: nativeDefault.colors.ICON_STRONG }, active: { backgroundColor: nativeDefault.colors.STATUS_POSITIVE }, "cutout-base-lower": { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
({ borderRadius: nativeDefault.radii.round });
({ backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND });
({ backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND });
({ backgroundColor: nativeDefault.colors.ICON_STRONG });
({ backgroundColor: nativeDefault.colors.STATUS_POSITIVE });
({ borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER });
let closure_5 = createStyles(obj2);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function IndicatorDot(arg0) {
  let cutout;
  let size2;
  let tmp4;
  let variant;
  obj = react;
  const cResult = obj.c(15);
  ({ variant, size, cutout, "aria-label": tmp4 } = arg0);
  if (undefined === variant) {
    variant = tmp(15775).DEFAULT_INDICATOR_DOT_VARIANT;
  }
  if (undefined === size) {
    size = tmp(15775).DEFAULT_INDICATOR_DOT_SIZE;
  }
  const tmp5 = closure_5();
  if (cResult[0] === size) {
    let tmp10;
    if (cResult[1] === null != cutout) {
      tmp10 = cResult[2];
    }
    let tmp12 = null != cutout;
    if (tmp12) {
      const _HermesInternal = HermesInternal;
      tmp12 = tmp5["cutout-" + cutout];
    }
    if (cResult[3] === tmp5.dot) {
      if (cResult[4] === tmp5[variant]) {
        if (cResult[5] === tmp10) {
          let tmp14;
          if (cResult[6] === tmp12) {
            tmp14 = cResult[7];
          }
          let str2;
          if (null != tmp4) {
            str2 = "image";
          }
          let str3 = "no-hide-descendants";
          if (null != tmp4) {
            str3 = "yes";
          }
          if (cResult[8] === tmp4) {
            if (cResult[9] === null != tmp4) {
              if (cResult[10] === null == tmp4) {
                if (cResult[11] === str3) {
                  if (cResult[12] === tmp14) {
                    let tmp16;
                    if (cResult[13] === str2) {
                      tmp16 = cResult[14];
                    }
                    return tmp16;
                  }
                }
              }
            }
          }
          const tmp19 = <View style={tmp14} accessible={null != tmp4} accessibilityRole={str2} accessibilityLabel={tmp4} accessibilityElementsHidden={null == tmp4} importantForAccessibility={str3} />;
          cResult[8] = tmp4;
          cResult[9] = null != tmp4;
          cResult[10] = null == tmp4;
          cResult[11] = str3;
          cResult[12] = tmp14;
          cResult[13] = str2;
          cResult[14] = tmp19;
          tmp16 = tmp19;
        }
      }
    }
    const items = [tmp7, tmp5[variant], tmp10, tmp12];
    cResult[3] = tmp5.dot;
    cResult[4] = tmp5[variant];
    cResult[5] = tmp10;
    cResult[6] = tmp12;
    cResult[7] = items;
    tmp14 = items;
  }
  if (null != cutout) {
    const size1 = { width: obj[size] + 4, height: obj[size] + 4, borderWidth: 2, margin: -2 };
    size2 = size1;
  } else {
    size2 = { width: obj[size], height: obj[size] };
  }
  cResult[0] = size;
  cResult[1] = null != cutout;
  cResult[2] = size2;
  tmp10 = size2;
}) : (function IndicatorDot(variant) {
  let cutout;
  let size1;
  let str2;
  let str3;
  let tmp5;
  let DEFAULT_INDICATOR_DOT_VARIANT = variant.variant;
  if (DEFAULT_INDICATOR_DOT_VARIANT === undefined) {
    DEFAULT_INDICATOR_DOT_VARIANT = IndicatorDotShared.DEFAULT_INDICATOR_DOT_VARIANT;
  }
  let DEFAULT_INDICATOR_DOT_SIZE = variant.size;
  if (DEFAULT_INDICATOR_DOT_SIZE === undefined) {
    DEFAULT_INDICATOR_DOT_SIZE = IndicatorDotShared.DEFAULT_INDICATOR_DOT_SIZE;
  }
  ({ cutout, "aria-label": tmp5 } = variant);
  const tmp6 = closure_5();
  const items = [tmp6.dot, tmp6[DEFAULT_INDICATOR_DOT_VARIANT], , ];
  const tmp8 = jsx;
  const tmp9 = View;
  if (null != cutout) {
    size = { width: obj[DEFAULT_INDICATOR_DOT_SIZE] + 4, height: obj[DEFAULT_INDICATOR_DOT_SIZE] + 4, borderWidth: 2, margin: -2 };
    size1 = size;
  } else {
    size1 = { width: obj[DEFAULT_INDICATOR_DOT_SIZE], height: obj[DEFAULT_INDICATOR_DOT_SIZE] };
  }
  items[2] = size1;
  let tmp11 = null != cutout;
  if (tmp11) {
    const _HermesInternal = HermesInternal;
    tmp11 = tmp6["cutout-" + cutout];
  }
  obj = { style: items, accessible: null != tmp5, accessibilityRole: str2, accessibilityLabel: tmp5, accessibilityElementsHidden: null == tmp5, importantForAccessibility: str3 };
  items[3] = tmp11;
  str2 = undefined;
  if (null != tmp5) {
    str2 = "image";
  }
  str3 = "no-hide-descendants";
  if (null != tmp5) {
    str3 = "yes";
  }
  return tmp8(tmp9, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/IndicatorDot/native/IndicatorDot.native.tsx");

export const IndicatorDot = tmp3;
