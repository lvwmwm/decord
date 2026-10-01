// Module ID: 12526
// Function ID: 12527
// Name: MediaModalOverlayFooterAction
// Dependencies: [19, 17, 21, 4836, 576, 6544, 1364, 5269, 12519, 5281, 2]
// Exports: MediaModalOverlayFooterAction

// Module 12526 (MediaModalOverlayFooterAction)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5269 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import MediaViewerThumbnailsDefault from "MediaViewerThumbnails" /* 12519 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonContainer: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayFooterAction.tsx");

export const MediaModalOverlayFooterAction = function MediaModalOverlayFooterAction(arg0) {
  let footerAction;
  let items1;
  let obj5;
  let sliderElement;
  let syncer;
  let tmp3Result;
  ({ footerAction, sliderElement, syncer } = arg0);
  const tmp = closure_8();
  const rect = { bottom: true, left: true, right: true, style: tmp.container, children: items1 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  if (null != sliderElement) {
    const tmp4Result = PlatformUtils;
    let isIOSResult = tmp4Result.isIOS();
    const tmp7 = metroRequire;
    if (isIOSResult) {
      const obj = { blurTheme: "dark", style: absoluteFill.absoluteFill };
      isIOSResult = hasOwnProperty(VisualEffectViewDefault, obj);
    }
    const items = [isIOSResult, sliderElement, ];
    let tmp12 = null;
    if (syncer.sources.length > 1) {
      const obj2 = { syncer };
      tmp12 = hasOwnProperty(MediaViewerThumbnailsDefault, obj2);
    }
    const obj3 = { children: items };
    items[2] = tmp12;
    tmp3Result = tmp3(tmp7, obj3);
  } else {
    tmp3Result = null;
  }
  items1 = [tmp3Result, ];
  const obj4 = { style: tmp.buttonContainer, children: hasOwnProperty(components_Button_Button.Button, obj5) };
  obj5 = { size: "lg", text: footerAction.text, onPress: footerAction.onPress };
  items1[1] = hasOwnProperty(React3, obj4);
  return metroImportDefault(SafeAreaPaddingView, rect);
};
