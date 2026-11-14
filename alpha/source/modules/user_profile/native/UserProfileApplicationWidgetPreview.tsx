// Module ID: 15822
// Function ID: 15823
// Name: UserProfileApplicationWidgetPreview
// Dependencies: [19, 17, 502, 21, 575, 5306, 504, 12264, 12251, 12147, 12149, 12256, 12259, 6020, 2]
// Exports: default

// Module 15822 (UserProfileApplicationWidgetPreview)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import ApplicationWidgetLayoutName from "ApplicationWidgetLayoutName" /* 12147 */;
import _mod12149 from "module_12149" /* 12149 */;
import ApplicationWidgetConfigSurface from "ApplicationWidgetConfigSurface" /* 12251 */;
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons" /* 12256 */;
import UserProfileApplicationWidgetHeroImageDefault from "UserProfileApplicationWidgetHeroImage" /* 12259 */;
import useApplicationWidgetLayoutRendererPropsDefault from "useApplicationWidgetLayoutRendererProps" /* 12264 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const sum = nativeDefault.space.PX_128 + nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = { preview: obj2, contentColumn: { flex: 3 }, content: obj3, divider: obj4, stats: obj5, statRow: obj6, stat: obj7, image: { flex: 2, overflow: "hidden" }, containedImageContainer: obj8, heroImage: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, opacity: 0.2 }, containedImage: obj9, containedImageSkeleton: { width: "100%", aspectRatio: 1 }, imageSkeleton: { flex: 1 } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_16, minHeight: sum };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, justifyContent: "center", minHeight: sum };
obj4 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { gap: nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj7 = { flex: 1, height: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj8 = { padding: nativeDefault.space.PX_16 };
obj9 = { width: "100%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, opacity: 0.2 };
let closure_7 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetPreview.tsx");

export default function UserProfileApplicationWidgetPreview(applicationId) {
  let contained_image;
  let id;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj17;
  let obj21;
  let obj4;
  let resolutionContext;
  let surfaceConfigs;
  let tmp17Result3;
  let tmp17Result4;
  applicationId = applicationId.applicationId;
  const tmp = closure_7();
  const items = [AuthenticationStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  ({ surfaceConfigs, resolutionContext } = useApplicationWidgetLayoutRendererPropsDefault(stateFromStores, applicationId));
  useApplicationWidgetLayoutRendererPropsDefault(stateFromStores, applicationId);
  const tmp7 = surfaceConfigs[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.ADD_WIDGET_PREVIEW];
  let layout;
  if (tmp7 != null) {
    layout = tmp7.layout;
  }
  const tmp9 = layout === ApplicationWidgetLayoutName.ApplicationWidgetLayoutName.ADD_WIDGET_PREVIEW_HERO;
  const tmp2Result = _mod12149;
  const result = tmp2Result.bindResolveFieldValue(resolutionContext);
  if (tmp9) {
    let hero_image;
    if (tmp7 != null) {
      hero_image = tmp7.components.hero_image;
    }
    contained_image = hero_image;
  } else if (tmp7 != null) {
    contained_image = tmp7.components.contained_image;
  }
  let image;
  if (contained_image != null) {
    image = contained_image.fields.image;
  }
  const items1 = [_mod12149.ResolvedValueType.MEDIA];
  const resultResult = result(image, items1);
  const obj2 = { style: tmp.preview, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: items6 };
  const obj3 = { style: tmp.contentColumn, children: metroRequire(View, obj4) };
  obj4 = { style: tmp.content, children: items2 };
  items2 = [hasOwnProperty(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "body-lg/medium", widthChars: 8 }), , ];
  const obj5 = { style: tmp.divider };
  items2[1] = hasOwnProperty(View, obj5);
  const obj7 = { style: tmp.statRow, children: items3 };
  items3 = [, , ];
  const obj6 = { style: tmp.stats, children: items4 };
  const obj8 = { style: tmp.stat };
  items3[0] = hasOwnProperty(View, obj8);
  const obj9 = { style: tmp.stat };
  items3[1] = hasOwnProperty(View, obj9);
  const obj10 = { style: tmp.stat };
  items3[2] = hasOwnProperty(View, obj10);
  items4 = [metroRequire(View, obj7), ];
  const obj11 = { style: tmp.statRow, children: items5 };
  items5 = [, , ];
  const obj12 = { style: tmp.stat };
  items5[0] = hasOwnProperty(View, obj12);
  const obj13 = { style: tmp.stat };
  items5[1] = hasOwnProperty(View, obj13);
  const obj14 = { style: tmp.stat };
  items5[2] = hasOwnProperty(View, obj14);
  items4[1] = metroRequire(View, obj11);
  items2[2] = metroRequire(View, obj6);
  items6 = [hasOwnProperty(View, obj3), ];
  const obj15 = { style: tmp.image, children: tmp17Result4 };
  const tmp15 = metroRequire;
  if (tmp9) {
    let tmp17Result;
    if (null != resultResult) {
      const obj16 = { style: tmp.heroImage, children: hasOwnProperty(UserProfileApplicationWidgetHeroImageDefault, obj17) };
      obj17 = { media: resultResult.media };
      tmp17Result = tmp17(tmp16, obj16);
    } else {
      const obj18 = { style: tmp.imageSkeleton };
      tmp17Result = tmp17(tmp2(12256).ImageSkeleton, obj18);
    }
    tmp17Result4 = tmp17Result;
  } else {
    const obj19 = { style: tmp.containedImageContainer, children: tmp17Result3 };
    if (null != resultResult) {
      const obj20 = { source: obj21, style: tmp.containedImage, resizeMode: "contain" };
      obj21 = { uri: resultResult.media.url };
      tmp17Result3 = tmp17(tmp5(6020), obj20);
    } else {
      const obj22 = { style: tmp.containedImageSkeleton };
      tmp17Result3 = tmp17(tmp2(12256).ImageSkeleton, obj22);
    }
    tmp17Result4 = tmp17(tmp16, obj19);
  }
  items6[1] = hasOwnProperty(View, obj15);
  return tmp15(View, obj2);
};
