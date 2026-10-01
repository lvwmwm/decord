// Module ID: 14282
// Function ID: 14283
// Name: DismissiblePremiumNewBadge
// Dependencies: [19, 6852, 21, 4836, 576, 10088, 1364, 1177, 5293, 1094, 2]
// Exports: default

// Module 14282 (DismissiblePremiumNewBadge)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import native from "native" /* 1177 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10088 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const Gradients = ColorConstants.Gradients;
const jsx = Fragment.jsx;
let obj = { newTag: { backgroundColor: "transparent" }, newTagContainer: obj2 };
obj2 = { borderRadius: nativeDefault.radii.sm, marginLeft: nativeDefault.space.PX_4 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DismissiblePremiumNewBadge.tsx");

export default function DismissiblePremiumNewBadge(dismissibleContent) {
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
};
