// Module ID: 14406
// Function ID: 110116
// Name: DismissibleNewTag
// Dependencies: [31, 6671, 33, 4130, 689, 9678, 477, 1273, 4554, 668, 2]
// Exports: default

// Module 14406 (DismissibleNewTag)
import "result";
import { Gradients } from "items";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { newTag: { backgroundColor: "transparent" } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.newTagContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/dismissible_content/native/DismissibleNewBadge.tsx");

export default function DismissibleNewTag(dismissibleContent) {
  let Gradients;
  let _createForOfIteratorHelperLoose;
  let dependencyMap;
  let importDefault;
  let jsx;
  dismissibleContent = dismissibleContent.dismissibleContent;
  ({ containerStyle: importDefault, noGradient: dependencyMap, newPremiumStyle: Gradients, colors: jsx, variantOverride: _createForOfIteratorHelperLoose } = dismissibleContent);
  let closure_6 = _createForOfIteratorHelperLoose();
  let items = [dismissibleContent];
  return jsx(importDefault(9678), {
    contentTypes: items,
    children(visibleContent) {
      if (visibleContent.visibleContent !== dismissibleContent) {
        return null;
      } else {
        if (null != closure_5) {
          let str = closure_5;
        } else {
          let obj = dismissibleContent(outer1_2[6]);
          str = "text-xs/bold";
          if (obj.isAndroid()) {
            str = "text-xxs/bold";
          }
        }
        if (closure_2) {
          obj = { variant: str };
          const items = [closure_6.newTagContainer, closure_1];
          obj.containerStyle = items;
          let tmp5Result = outer1_4(dismissibleContent(outer1_2[7]).NewTag, obj);
        } else if (closure_3) {
          obj = { variant: str, containerStyle: closure_6.newTag, gradient: true, colors: outer1_3.PREMIUM_TIER_2_TRI_COLOR };
          tmp5Result = tmp5(dismissibleContent(outer1_2[7]).NewTag, obj);
        } else {
          const obj1 = { style: closure_6.newTagContainer, start: dismissibleContent(outer1_2[9]).HorizontalGradient.START, end: dismissibleContent(outer1_2[9]).HorizontalGradient.END };
          if (null != closure_4) {
            let items1 = closure_4;
          } else {
            items1 = [outer1_1(outer1_2[4]).unsafe_rawColors.PREMIUM_TIER_2_PURPLE, outer1_1(outer1_2[4]).unsafe_rawColors.PREMIUM_TIER_2_PINK];
          }
          obj1.colors = items1;
          const obj2 = { containerStyle: closure_6.newTag, variant: str };
          obj1.children = outer1_4(dismissibleContent(outer1_2[7]).NewTag, obj2);
          tmp5Result = tmp5(outer1_1(outer1_2[8]), obj1);
          const tmp8 = outer1_1(outer1_2[8]);
        }
        return tmp5Result;
      }
    }
  });
};
