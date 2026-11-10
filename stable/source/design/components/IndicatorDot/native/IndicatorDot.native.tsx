// Module ID: 9491
// Function ID: 9492
// Name: IndicatorDot
// Dependencies: [17, 21, 575, 5014, 9492, 2]
// Exports: IndicatorDot

// Module 9491 (IndicatorDot)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import IndicatorDotShared from "IndicatorDotShared" /* 9492 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
let size = size_mod;
const result = size.fileFinishedImporting("design/components/IndicatorDot/native/IndicatorDot.native.tsx");

export function IndicatorDot(variant) {
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
}
