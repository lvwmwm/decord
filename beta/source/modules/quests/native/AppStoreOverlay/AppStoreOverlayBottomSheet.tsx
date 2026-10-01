// Module ID: 10724
// Function ID: 10725
// Name: AppStoreOverlayBottomSheet
// Dependencies: [32, 19, 21, 4836, 1479, 7615, 5298, 7131, 4519, 10721, 10725, 6571, 6575, 6045, 2]
// Exports: default

// Module 10724 (AppStoreOverlayBottomSheet)
import openURLDefault from "openURL" /* 4519 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import AppStoreOverlayContent from "AppStoreOverlayContent" /* 10721 */;
import AppStoreOverlayBody from "AppStoreOverlayBody" /* 10725 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ headerBar: { zIndex: 1 }, bodyContainer: { flex: 1, minHeight: 0 } });
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBottomSheet.tsx");

export default function AppStoreOverlayBottomSheet(metadata) {
  let bottomSheetClose;
  let bottomSheetRef;
  let items5;
  let onOverlaySurfaceClick;
  let trackOverlayCarouselScroll;
  metadata = metadata.metadata;
  const onOpen = metadata.onOpen;
  const onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  let first;
  let ref2;
  ({ trackOverlayCarouselScroll, onOverlaySurfaceClick } = metadata);
  const tmp = ref2();
  const height = onOpen(onDismiss[4])().height;
  const tmp2 = onInstallPress(first.useState(0), 2);
  first = tmp2[0];
  let closure_5 = tmp2[1];
  let obj = metadata(onDismiss[5]);
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const ref = first.useRef(null);
  const items = [onOpen];
  const effect = first.useEffect(() => {
    ref.current = Date.now();
    onOpen();
  }, items);
  ref2 = first.useRef(false);
  const items1 = [onDismiss];
  const callback = first.useCallback(() => {
    if (!ref2.current) {
      tmp.current = true;
      const current = ref.current;
      let num = 0;
      const tmp3 = onDismiss;
      if (null != current) {
        const _Date = Date;
        num = Date.now() - current;
      }
      tmp3(num);
    }
  }, items1);
  const obj2 = metadata(onDismiss[6]);
  const unmountEffect = obj2.useUnmountEffect(callback);
  const items2 = [metadata.storeUrl, onInstallPress];
  const callback1 = first.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA);
    openURLDefault(metadata.storeUrl);
  }, items2);
  const items3 = [, , , ];
  ({ appId: arr4[0], platform: arr4[1], storeUrl: arr4[2] } = metadata);
  items3[3] = onInstallPress;
  const callback2 = first.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT);
    const obj = AppStoreOverlayContent;
    obj.openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
  }, items3);
  const items4 = [first];
  const callback3 = first.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo = first.useMemo(() => {
    const obj = { paddingBottom: first + AppStoreOverlayBody.APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT };
    return obj;
  }, items4);
  const obj3 = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, startHeight: height * metadata(onDismiss[10]).APP_STORE_OVERLAY_HEIGHT_RATIO, onDismiss: callback, footer: closure_5(metadata(onDismiss[10]).AppStoreOverlayFooter, { onInstallPress: callback1, onLayout: callback3 }), children: items5 };
  BottomSheet = metadata(onDismiss[11]).BottomSheet;
  items5 = [, ];
  const obj4 = { variant: "overlay", style: tmp.headerBar, onPress: bottomSheetClose };
  items5[0] = closure_5(metadata(onDismiss[12]).ActionSheetHeaderBar, obj4);
  const obj5 = { style: tmp.bodyContainer, contentContainerStyle: memo, children: closure_5(metadata(onDismiss[10]).AppStoreOverlayBody, { metadata, onOpenReviews: callback2, onMediaGetGamePress: callback1, onCarouselScroll: trackOverlayCarouselScroll, onOverlaySurfaceClick }) };
  const BottomSheetScrollView = metadata(onDismiss[13]).BottomSheetScrollView;
  items5[1] = closure_5(BottomSheetScrollView, obj5);
  return ref(BottomSheet, obj3);
};
