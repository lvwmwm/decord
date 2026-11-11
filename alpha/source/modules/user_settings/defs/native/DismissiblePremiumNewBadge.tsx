// Module ID: 17130
// Function ID: 17131
// Name: DismissiblePremiumNewBadge
// Dependencies: [19, 9368, 21, 5243, 575, 10501, 1377, 1187, 5830, 1092, 2]
// Exports: default

// Module 17130 (DismissiblePremiumNewBadge)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import native from "native" /* 1187 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import ColorConstants from "ColorConstants" /* 9368 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10501 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
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
          let str = "body-xs/semibold";
          const obj = PlatformUtils;
          if (obj.isAndroid()) {
            str = "footnote/semibold";
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
