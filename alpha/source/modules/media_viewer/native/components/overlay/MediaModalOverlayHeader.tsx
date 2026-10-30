// Module ID: 14733
// Function ID: 14734
// Name: MediaModalOverlayHeader
// Dependencies: [19, 17, 8925, 21, 5009, 14730, 8896, 10174, 5193, 5090, 5249, 8929, 8930, 1114, 7048, 1188, 575, 5619, 14734, 9853, 1376, 14735, 9736, 2]
// Exports: MediaModalOverlayHeader

// Module 14733 (MediaModalOverlayHeader)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8925 */;
import MediaViewerOverlayButtonDefault from "MediaViewerOverlayButton" /* 8930 */;
import useShouldHideMediaOptionsDefault from "useShouldHideMediaOptions" /* 10174 */;
import MediaViewerOverlayButtonFavoriteGIFDefault from "MediaViewerOverlayButtonFavoriteGIF" /* 14734 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
const SHARE_PREPARING_MODAL_KEY = SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ navbarInner: { flex: 1, justifyContent: "space-between" }, navbarLeft: { flexShrink: 1, flexDirection: "row", marginRight: 8 }, navbarRight: { flexShrink: 0, justifyContent: "flex-end", flexDirection: "row", gap: 8 }, navbarName: { flexShrink: 1, alignItems: "center", height: 40, marginLeft: 8 }, navbarNameInner: { borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)", flex: 1, flexDirection: "row", paddingHorizontal: 18 }, navbarNameShrinkWrapper: { flexShrink: 1 }, contextIcon: { width: 18, height: 18, marginRight: 6 } });
const __initData = { code: "function MediaModalOverlayHeaderTsx1(){const{withTiming,isPreparing}=this.__closure;return{opacity:withTiming(isPreparing?0:1)};}" };
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx");

export function MediaModalOverlayHeader(arg0) {
  let MediaModalOverlayHeaderWrapper;
  let View2;
  let animationDriver;
  let channelId;
  let contextIcon;
  let contextName;
  let disableDownload;
  let disableMediaOverlayButton;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj16;
  let obj8;
  let obj9;
  let onClose;
  let shareable;
  let source;
  let str;
  ({ source, contextName, contextIcon } = arg0);
  let isModalOpen;
  ({ onClose, disableDownload, disableMediaOverlayButton, shareable, animationDriver, channelId } = arg0);
  const tmp = closure_8();
  const tmp2 = isModalOpen;
  const tmp3 = dependencyMap;
  let obj = isModalOpen(14730);
  const headerLayoutAnimation = obj.useHeaderLayoutAnimation(animationDriver);
  let obj2 = isModalOpen(8896);
  const mediaShareActions = obj2.useMediaShareActions({ source, disableDownload, shareable });
  const tmp7 = useShouldHideMediaOptionsDefault(channelId);
  const obj3 = isModalOpen(5193);
  isModalOpen = obj3.useIsModalOpen(SHARE_PREPARING_MODAL_KEY);
  const fn = function w() {
    let num = 1;
    const withTiming = timing.withTiming;
    timing;
    if (isModalOpen) {
      num = 0;
    }
    const obj = { opacity: withTiming(num) };
    return obj;
  };
  const obj4 = isModalOpen(5090);
  fn.__closure = { withTiming: isModalOpen(5249).withTiming, isPreparing: isModalOpen };
  fn.__workletHash = 13276839935975;
  fn.__initData = __initData;
  ({ withTiming: isModalOpen(5249).withTiming, isPreparing: isModalOpen });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj6 = { style: items, children: closure_6(View2, obj8) };
  const obj7 = { bottom: undefined };
  const View = ReanimatedRexportDefault.View;
  let merged = Object.assign(absoluteFillObject.absoluteFillObject);
  items = [obj7, headerLayoutAnimation];
  obj8 = { style: animatedStyle, pointerEvents: str, children: closure_7(MediaModalOverlayHeaderWrapper, obj9) };
  str = "box-none";
  View2 = ReanimatedRexportDefault.View;
  if (isModalOpen) {
    str = "none";
  }
  const obj10 = { style: tmp.navbarLeft, children: items1 };
  obj9 = { style: tmp.navbarInner, children: items3 };
  const obj11 = { accessibilityLabel: intl.string(tmp2(1114).t.cpT0Cq), icon: closure_6(tmp2(7048).XSmallIcon, { size: "md", color: "interactive-text-active" }), onPress: onClose };
  MediaModalOverlayHeaderWrapper = tmp2(8929).MediaModalOverlayHeaderWrapper;
  const tmp6Result = MediaViewerOverlayButtonDefault;
  intl = tmp2(1114).intl;
  items1 = [closure_6(tmp6Result, obj11), ];
  let tmp10Result3 = null != contextName;
  if (tmp10Result3) {
    const obj12 = { style: tmp.navbarName, children: closure_7(closure_4, obj13) };
    let tmp10Result = null != contextIcon;
    obj13 = { style: tmp.navbarNameInner, children: items2 };
    if (tmp10Result) {
      const obj14 = { source: contextIcon, color: nativeDefault.unsafe_rawColors.PRIMARY_345, size: tmp2(1188).Icon.Sizes.CUSTOM, style: tmp.contextIcon };
      const Icon = tmp2(1188).Icon;
      tmp10Result = tmp10(Icon, obj14);
    }
    items2 = [tmp10Result, ];
    const obj15 = { style: tmp.navbarNameShrinkWrapper, children: closure_6(tmp2(5619).Text, obj16) };
    obj16 = { accessibilityRole: "header", variant: "heading-md/medium", lineClamp: 1, ellipsizeMode: "tail", color: "text-overlay-light", children: contextName };
    items2[1] = closure_6(closure_4, obj15);
    tmp10Result3 = tmp10(tmp13, obj12);
  }
  items1[1] = tmp10Result3;
  items3 = [closure_7(closure_4, obj10), ];
  let tmp12Result = !tmp7;
  if (tmp12Result) {
    const obj17 = { style: tmp.navbarRight, children: items4 };
    const obj18 = { source };
    items4 = [closure_6(MediaViewerOverlayButtonFavoriteGIFDefault, obj18), ];
    let tmp10Result4 = null;
    if (!disableMediaOverlayButton) {
      const obj19 = {
        items: mediaShareActions,
        children(ref) {
              let intl;
              let tmp2Result;
              ref = ref.ref;
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = { accessibilityLabel: intl.string(isModalOpen(dependencyMap[13]).t.PdRCRg), icon: tmp2Result, ref };
              const tmp4 = MediaViewerOverlayButtonDefault;
              intl = isModalOpen(dependencyMap[13]).intl;
              const obj2 = isModalOpen(dependencyMap[20]);
              if (obj2.isAndroid()) {
                tmp2Result = tmp2(tmp5(tmp3[21]).MoreVerticalIcon, { size: "md", color: "interactive-text-active" });
              } else {
                tmp2Result = tmp2(tmp5(tmp3[22]).MoreHorizontalIcon, { size: "md", color: "interactive-text-active" });
              }
              const merged1 = Object.assign(merged);
              return closure_1_6(tmp4, obj);
            }
      };
      tmp10Result4 = tmp10(tmp2(9853).ContextMenu, obj19);
    }
    items4[1] = tmp10Result4;
    tmp12Result = tmp12(tmp13, obj17);
  }
  items3[1] = tmp12Result;
  return closure_6(View, obj6);
}
