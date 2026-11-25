// Module ID: 14574
// Function ID: 14575
// Name: UserProfileApplicationWidgetPreview
// Dependencies: [32, 19, 17, 502, 21, 575, 4913, 504, 10335, 10322, 10281, 10283, 10327, 10330, 5600, 2]
// Exports: default

// Module 14574 (UserProfileApplicationWidgetPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useApplicationWidgetLayoutRendererPropsDefault from "useApplicationWidgetLayoutRendererProps" /* 10335 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
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
let closure_10 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetPreview.tsx");

export default function UserProfileApplicationWidgetPreview(applicationId) {
  let _undefined;
  let _undefined2;
  let c0;
  let c1;
  let contained_image;
  let id;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj21;
  let obj4;
  let resolutionContext;
  let surfaceConfigs;
  let tmp23Result6;
  let tmp23Result7;
  let tmp3;
  let tmp5;
  _require = undefined;
  importDefault = undefined;
  applicationId = applicationId.applicationId;
  const tmp = closure_10();
  [tmp3, c0] = _slicedToArray(react.useState(), 2);
  const tmp2 = _slicedToArray(react.useState(), 2);
  [tmp5, c1] = react.useState();
  let tmp23Result4 = null != tmp3;
  _slicedToArray(react.useState(), 2);
  const callback = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    _undefined(layout.width);
    _undefined2(layout.height);
  }, []);
  if (tmp23Result4) {
    tmp23Result4 = tmp3 > 0;
  }
  if (tmp23Result4) {
    tmp23Result4 = null != tmp5;
  }
  if (tmp23Result4) {
    tmp23Result4 = tmp5 > 0;
  }
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  ({ surfaceConfigs, resolutionContext } = useApplicationWidgetLayoutRendererPropsDefault(stateFromStores, applicationId));
  useApplicationWidgetLayoutRendererPropsDefault(stateFromStores, applicationId);
  const tmp13 = surfaceConfigs[require("ApplicationWidgetConfigSurface").ApplicationWidgetConfigSurface.ADD_WIDGET_PREVIEW];
  let layout;
  if (tmp13 != null) {
    layout = tmp13.layout;
  }
  const tmp15 = layout === require("ApplicationWidgetLayoutName").ApplicationWidgetLayoutName.ADD_WIDGET_PREVIEW_HERO;
  const tmp8Result = require("module_10283");
  const result = tmp8Result.bindResolveFieldValue(resolutionContext);
  if (tmp15) {
    let hero_image;
    if (tmp13 != null) {
      hero_image = tmp13.components.hero_image;
    }
    contained_image = hero_image;
  } else if (tmp13 != null) {
    contained_image = tmp13.components.contained_image;
  }
  let image;
  if (contained_image != null) {
    image = contained_image.fields.image;
  }
  const items1 = [require("module_10283").ResolvedValueType.MEDIA];
  const resultResult = result(image, items1);
  const obj2 = { style: tmp.preview, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: items6 };
  const obj3 = { style: tmp.contentColumn, children: closure_8(View, obj4) };
  obj4 = { style: tmp.content, children: items2 };
  items2 = [closure_7(require("UserProfileApplicationWidgetSkeletons").TextSkeleton, { variant: "body-lg/medium", widthChars: 8 }), , ];
  const obj5 = { style: tmp.divider };
  items2[1] = closure_7(View, obj5);
  const obj7 = { style: tmp.statRow, children: items3 };
  items3 = [, , ];
  const obj6 = { style: tmp.stats, children: items4 };
  const obj8 = { style: tmp.stat };
  items3[0] = closure_7(View, obj8);
  const obj9 = { style: tmp.stat };
  items3[1] = closure_7(View, obj9);
  const obj10 = { style: tmp.stat };
  items3[2] = closure_7(View, obj10);
  items4 = [closure_8(View, obj7), ];
  const obj11 = { style: tmp.statRow, children: items5 };
  items5 = [, , ];
  const obj12 = { style: tmp.stat };
  items5[0] = closure_7(View, obj12);
  const obj13 = { style: tmp.stat };
  items5[1] = closure_7(View, obj13);
  const obj14 = { style: tmp.stat };
  items5[2] = closure_7(View, obj14);
  items4[1] = closure_8(View, obj11);
  items2[2] = closure_8(View, obj6);
  items6 = [closure_7(View, obj3), ];
  const obj15 = { style: tmp.image, children: tmp23Result7 };
  if (tmp15) {
    let tmp23Result = null == resultResult;
    const tmp26 = closure_9;
    if (!tmp23Result) {
      tmp23Result = !tmp23Result4;
    }
    if (tmp23Result) {
      const obj16 = { style: tmp.imageSkeleton };
      tmp23Result = tmp23(tmp8(10327).ImageSkeleton, obj16);
    }
    const items7 = [tmp23Result, ];
    let tmp23Result5 = null != resultResult;
    if (tmp23Result5) {
      const obj17 = { style: tmp.heroImage, onLayout: callback, children: tmp23Result4 };
      if (tmp23Result4) {
        size = { media: resultResult.media, width: tmp3, height: tmp5, fillContainer: true };
        tmp23Result4 = tmp23(tmp11(10330), size);
      }
      tmp23Result5 = tmp23(tmp22, obj17);
    }
    const obj18 = { children: items7 };
    items7[1] = tmp23Result5;
    tmp23Result7 = tmp21(tmp26, obj18);
  } else {
    const obj19 = { style: tmp.containedImageContainer, children: tmp23Result6 };
    if (null != resultResult) {
      const obj20 = { source: obj21, style: tmp.containedImage, resizeMode: "contain" };
      obj21 = { uri: resultResult.media.url };
      tmp23Result6 = tmp23(tmp11(5600), obj20);
    } else {
      const obj22 = { style: tmp.containedImageSkeleton };
      tmp23Result6 = tmp23(tmp8(10327).ImageSkeleton, obj22);
    }
    tmp23Result7 = tmp23(tmp22, obj19);
  }
  items6[1] = closure_7(View, obj15);
  return closure_8(View, obj2);
};
