// Module ID: 14977
// Function ID: 14978
// Name: MediaModalOverlayHeader
// Dependencies: [19, 17, 9031, 21, 5170, 14974, 8997, 10330, 5344, 1652, 5400, 9035, 9036, 1113, 7145, 1187, 575, 5781, 14978, 10012, 1377, 14979, 9862, 2]
// Exports: MediaModalOverlayHeader

// Module 14977 (MediaModalOverlayHeader)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _mod1652 from "module_1652" /* 1652 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5344 */;
import timing_timing from "timing/timing" /* 5400 */;
import MediaShareActions from "MediaShareActions" /* 8997 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 9031 */;
import MediaViewerOverlayButtonDefault from "MediaViewerOverlayButton" /* 9036 */;
import useShouldHideMediaOptionsDefault from "useShouldHideMediaOptions" /* 10330 */;
import useOverlayLayoutDriver from "useOverlayLayoutDriver" /* 14974 */;
import MediaViewerOverlayButtonFavoriteGIFDefault from "MediaViewerOverlayButtonFavoriteGIF" /* 14978 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let tmp2;
const intl2 = tmp2(1113);
const native = tmp2(1187);
const Text_Text = tmp2(5781);
const XSmallIcon = tmp2(7145);
const MediaModalOverlayHeaderWrapper2 = tmp2(9035);
const ContextMenu = tmp2(10012);
({ StyleSheet: c3, View: closure_4 } = react_native);
const SHARE_PREPARING_MODAL_KEY = SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ navbarInner: { flex: 1, justifyContent: "space-between" }, navbarLeft: { flexShrink: 1, flexDirection: "row", marginRight: 8 }, navbarRight: { flexShrink: 0, justifyContent: "flex-end", flexDirection: "row", gap: 8 }, navbarName: { flexShrink: 1, alignItems: "center", height: 40, marginLeft: 8 }, navbarNameInner: { borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)", flex: 1, flexDirection: "row", paddingHorizontal: 18 }, navbarNameShrinkWrapper: { flexShrink: 1 }, contextIcon: { width: 18, height: 18, marginRight: 6 } });
let closure_9 = { code: "(function MediaModalOverlayHeaderTsx1(){let[withTiming,isPreparing]=this.__closure;return{opacity:withTiming(isPreparing?0:1)};})" };
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
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj14;
  let obj6;
  let obj7;
  let onClose;
  let shareable;
  let source;
  let str;
  let tmp10;
  let tmp11;
  let tmp12;
  ({ source, contextName, contextIcon } = arg0);
  ({ onClose, disableDownload, disableMediaOverlayButton, shareable, animationDriver, channelId } = arg0);
  let tmp = closure_8();
  const tmp2 = require;
  const tmp3 = dependencyMap;
  let obj = useOverlayLayoutDriver;
  const headerLayoutAnimation = obj.useHeaderLayoutAnimation(animationDriver);
  let obj2 = MediaShareActions;
  const mediaShareActions = obj2.useMediaShareActions({ source, disableDownload, shareable });
  const tmp7 = useShouldHideMediaOptionsDefault(channelId);
  const obj3 = NavigationRouteUtils;
  const isModalOpen = obj3.useIsModalOpen(SHARE_PREPARING_MODAL_KEY);
  const items = [closure_9, , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = timing_timing.withTiming;
  items[2] = isModalOpen;
  let c0;
  let c1;
  [tmp10, tmp11, tmp12] = items;
  class MediaModalOverlayHeaderTsx1 {
    constructor() {
      let num = 1;
      const tmp = c0;
      if (c1) {
        num = 0;
      }
      const obj = { opacity: tmp(num) };
      return obj;
    }
  }
  const items1 = [tmp11, tmp12];
  MediaModalOverlayHeaderTsx1.__closure = items1;
  MediaModalOverlayHeaderTsx1.__workletHash = 9063538094430;
  MediaModalOverlayHeaderTsx1.__initData = tmp10;
  const animatedStyle = useAnimatedStyle(MediaModalOverlayHeaderTsx1);
  const obj4 = { style: items2, children: metroRequire(View2, obj6) };
  const obj5 = { bottom: undefined };
  const View = tmp6(1652).View;
  let merged = Object.assign(absoluteFillObject.absoluteFillObject);
  items2 = [obj5, headerLayoutAnimation];
  obj6 = { style: animatedStyle, pointerEvents: str, children: metroImportDefault(MediaModalOverlayHeaderWrapper, obj7) };
  str = "box-none";
  View2 = tmp6(1652).View;
  if (isModalOpen) {
    str = "none";
  }
  obj7 = { style: tmp.navbarInner, children: items5 };
  const obj8 = { style: tmp.navbarLeft, children: items3 };
  const obj9 = { accessibilityLabel: intl.string(intl2.t.cpT0Cq), icon: metroRequire(XSmallIcon.XSmallIcon, { size: "md", color: "interactive-text-active" }), onPress: onClose };
  MediaModalOverlayHeaderWrapper = MediaModalOverlayHeaderWrapper2.MediaModalOverlayHeaderWrapper;
  const tmp6Result = MediaViewerOverlayButtonDefault;
  intl = intl2.intl;
  items3 = [metroRequire(tmp6Result, obj9), ];
  let tmp14Result3 = null != contextName;
  if (tmp14Result3) {
    const obj10 = { style: tmp.navbarName, children: metroImportDefault(React3, obj11) };
    let tmp14Result = null != contextIcon;
    obj11 = { style: tmp.navbarNameInner, children: items4 };
    if (tmp14Result) {
      const obj12 = { source: contextIcon, color: nativeDefault.unsafe_rawColors.PRIMARY_345, size: native.Icon.Sizes.CUSTOM, style: tmp.contextIcon };
      const Icon = native.Icon;
      tmp14Result = tmp14(Icon, obj12);
    }
    items4 = [tmp14Result, ];
    const obj13 = { style: tmp.navbarNameShrinkWrapper, children: metroRequire(Text_Text.Text, obj14) };
    obj14 = { accessibilityRole: "header", variant: "heading-sm/medium", lineClamp: 1, ellipsizeMode: "tail", color: "text-overlay-light", children: contextName };
    items4[1] = metroRequire(React3, obj13);
    tmp14Result3 = tmp14(tmp17, obj10);
  }
  items3[1] = tmp14Result3;
  items5 = [metroImportDefault(React3, obj8), ];
  let tmp16Result = !tmp7;
  if (tmp16Result) {
    const obj15 = { style: tmp.navbarRight, children: items6 };
    const obj16 = { source };
    items6 = [metroRequire(MediaViewerOverlayButtonFavoriteGIFDefault, obj16), ];
    let tmp14Result4 = null;
    if (!disableMediaOverlayButton) {
      const obj17 = {
        items: mediaShareActions,
        children(ref) {
              let intl;
              let tmp2Result;
              ref = ref.ref;
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = { accessibilityLabel: intl.string(intl2.t.PdRCRg), icon: tmp2Result, ref };
              const tmp4 = MediaViewerOverlayButtonDefault;
              intl = intl2.intl;
              const obj2 = PlatformUtils;
              if (obj2.isAndroid()) {
                tmp2Result = tmp2(tmp5(tmp3[21]).MoreVerticalIcon, { size: "md", color: "interactive-text-active" });
              } else {
                tmp2Result = tmp2(tmp5(tmp3[22]).MoreHorizontalIcon, { size: "md", color: "interactive-text-active" });
              }
              const merged1 = Object.assign(merged);
              return closure_1_6(tmp4, obj);
            }
      };
      tmp14Result4 = tmp14(ContextMenu.ContextMenu, obj17);
    }
    items6[1] = tmp14Result4;
    tmp16Result = tmp16(tmp17, obj15);
  }
  items5[1] = tmp16Result;
  return metroRequire(View, obj4);
}
