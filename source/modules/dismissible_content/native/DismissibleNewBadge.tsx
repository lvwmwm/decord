// Module ID: 14231
// Function ID: 107562
// Name: DismissibleNewTag
// Dependencies: []
// Exports: default

// Module 14231 (DismissibleNewTag)
importAll(dependencyMap[0]);
const Gradients = arg1(dependencyMap[1]).Gradients;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = { newTag: { backgroundColor: "transparent" } };
obj = { borderRadius: importDefault(dependencyMap[4]).radii.sm, marginLeft: importDefault(dependencyMap[4]).space.PX_4 };
obj.newTagContainer = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/dismissible_content/native/DismissibleNewBadge.tsx");

export default function DismissibleNewTag(dismissibleContent) {
  dismissibleContent = dismissibleContent.dismissibleContent;
  const arg1 = dismissibleContent;
  ({ containerStyle: closure_1, noGradient: closure_2, newPremiumStyle: closure_3, colors: closure_4, variantOverride: closure_5 } = dismissibleContent);
  let closure_6 = callback();
  const items = [dismissibleContent];
  return jsx(importDefault(dependencyMap[5]), {
    contentTypes: items,
    children(visibleContent) {
      if (visibleContent.visibleContent !== dismissibleContent) {
        return null;
      } else {
        if (null != closure_5) {
          let str = closure_5;
        } else {
          let obj = dismissibleContent(closure_2[6]);
          str = "text-xs/bold";
          if (obj.isAndroid()) {
            str = "text-xxs/bold";
          }
        }
        if (closure_2) {
          obj = { variant: str };
          const items = [closure_6.newTagContainer, callback];
          obj.containerStyle = items;
          let tmp5Result = callback2(dismissibleContent(closure_2[7]).NewTag, obj);
        } else if (obj) {
          obj = { variant: str, containerStyle: closure_6.newTag, gradient: true };
          obj.colors = obj.PREMIUM_TIER_2_TRI_COLOR;
          tmp5Result = tmp5(dismissibleContent(closure_2[7]).NewTag, obj);
        } else {
          const obj1 = { style: closure_6.newTagContainer, start: dismissibleContent(closure_2[9]).HorizontalGradient.START, end: dismissibleContent(closure_2[9]).HorizontalGradient.END };
          if (null != callback2) {
            let items1 = callback2;
          } else {
            items1 = [callback(closure_2[4]).unsafe_rawColors.PREMIUM_TIER_2_PURPLE, callback(closure_2[4]).unsafe_rawColors.PREMIUM_TIER_2_PINK];
          }
          obj1.colors = items1;
          const obj2 = { containerStyle: closure_6.newTag, variant: str };
          obj1.children = callback2(dismissibleContent(closure_2[7]).NewTag, obj2);
          tmp5Result = tmp5(callback(closure_2[8]), obj1);
          const tmp8 = callback(closure_2[8]);
        }
        return tmp5Result;
      }
    }
  });
};
