// Module ID: 15476
// Function ID: 118123
// Name: GiftingPromotionCoachmarkActionSheet
// Dependencies: []
// Exports: default

// Module 15476 (GiftingPromotionCoachmarkActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ AnalyticsSections: closure_6, AnalyticsObjects: closure_7, AnalyticsPages: closure_8 } = arg1(dependencyMap[3]));
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { alignItems: "center", padding: importDefault(dependencyMap[7]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.textContainer = { gap: importDefault(dependencyMap[7]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingVertical: importDefault(dependencyMap[7]).space.PX_24 };
obj.text = { textAlign: "center" };
const obj2 = { <string:1140607356>: false, <string:1751293292>: false, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.imageShared = obj2;
obj.imageWrapperAndroid = { overflow: "hidden" };
let closure_12 = obj.createStyles(obj);
const obj1 = { gap: importDefault(dependencyMap[7]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingVertical: importDefault(dependencyMap[7]).space.PX_24 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx");

export default function GiftingPromotionCoachmarkActionSheet(arg0) {
  let coachmarkComponent;
  let markAsDismissed;
  ({ coachmarkComponent, markAsDismissed } = arg0);
  const arg1 = markAsDismissed;
  let importDefault;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = arg1(dependencyMap[9]);
  let asset;
  if (null != coachmarkComponent) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj1.useThemeAndReducedMotionAwareAssetUrl(asset);
  const analyticsLocations = importDefault(dependencyMap[10])(importDefault(dependencyMap[11]).GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  importDefault = analyticsLocations;
  const items1 = [analyticsLocations, markAsDismissed];
  let tmp8Result = null;
  if (null != coachmarkComponent) {
    obj = {
      startExpanded: true,
      onDismiss() {
          return markAsDismissed(constants4.USER_DISMISS);
        }
    };
    obj = { style: tmp.container };
    if (null == themeAndReducedMotionAwareAssetUrl) {
      const items2 = [tmp14, , ];
      obj1 = { style: tmp.textContainer };
      const obj2 = { style: tmp.text, children: coachmarkComponent.header };
      const items3 = [callback(arg1(dependencyMap[18]).Text, obj2), ];
      const obj3 = { style: tmp.text, children: coachmarkComponent.body };
      items3[1] = callback(arg1(dependencyMap[18]).Text, obj3);
      obj1.children = items3;
      items2[1] = callback2(View, obj1);
      let obj4 = { grow: true };
      const intl = arg1(dependencyMap[20]).intl;
      obj4.text = intl.string(arg1(dependencyMap[20]).t.RzWDqY);
      obj4.onPress = tmp6;
      items2[2] = callback(arg1(dependencyMap[19]).Button, obj4);
      obj.children = items2;
      obj.children = tmp12(tmp13, obj);
      tmp8Result = tmp8(tmp11, obj);
    } else {
      obj4 = arg1(dependencyMap[15]);
      if (obj4.isAndroid()) {
        if (!stateFromStores) {
          const obj5 = {};
          const items4 = [, ];
          ({ imageShared: arr3[0], imageWrapperAndroid: arr3[1] } = tmp);
          obj5.style = items4;
          const obj6 = { url: themeAndReducedMotionAwareAssetUrl, style: tmp.imageShared };
          obj5.children = callback(importDefault(dependencyMap[16]), obj6);
          let tmp21 = callback(View, obj5);
        }
      }
      const obj7 = {};
      const obj8 = { uri: themeAndReducedMotionAwareAssetUrl };
      obj7.source = obj8;
      obj7.style = tmp.imageShared;
      tmp21 = callback(importDefault(dependencyMap[17]), obj7);
    }
    const tmp8 = callback;
  }
  return tmp8Result;
};
