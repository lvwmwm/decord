// Module ID: 7741
// Function ID: 7742
// Name: MediaModal
// Dependencies: [19, 17, 7742, 1986, 1086, 21, 7712, 7743, 7714, 504, 1370, 7717, 7720, 7748, 7758, 7759, 1882, 7784, 4802, 4803, 4801, 7786, 1987, 12516, 7715, 12534, 12536, 5896, 12538, 2]
// Exports: default

// Module 7741 (MediaModal)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import HapticUtils from "HapticUtils" /* 4802 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4803 */;
import FastImageDefault from "FastImage" /* 5896 */;
import useVideoControls from "useVideoControls" /* 7714 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7717 */;
import NativePortalView from "NativePortalView" /* 7720 */;
import MediaModalTiktok from "MediaModalTiktok" /* 7748 */;
import MediaModalWebVideoFile from "MediaModalWebVideoFile" /* 7758 */;
import common_Video from "common/Video" /* 7759 */;
import MediaModalOverlayDefault from "MediaModalOverlay" /* 12516 */;
import MediaModalYoutubeDefault from "MediaModalYoutube" /* 12534 */;
import MediaModalLoaderDefault from "MediaModalLoader" /* 12536 */;
import react_native from "react-native" /* 17 */;
import AppFreezeStore from "AppFreezeStore" /* 7742 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import Constants from "Constants" /* 1086 */;
import size_mod from "module_2" /* 2 */;

const NativePortalViewDefault = NativePortalView;
const MediaModalTiktokDefault = MediaModalTiktok;
const MediaModalWebVideoFileDefault = MediaModalWebVideoFile;
let closure_1, hasSpoiler;

let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ Image: hasOwnProperty, Modal: metroRequire, StyleSheet: metroImportDefault, View: metroImportAll } = react_native);
({ Base64JPEGPrefix: unpackModuleId, Base64GIFPrefix: closure_12, AppStates: map1 } = Constants);
let jsx = Fragment.jsx;
const createElement = react2.createElement;
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModal.tsx");

export default function MediaModal(initialIndex) {
  let obj6;
  let onEndReached;
  let onEndReachedThreshold;
  let ref;
  let num = initialIndex.initialIndex;
  const originLayout = initialIndex.originLayout;
  if (num === undefined) {
    num = 0;
  }
  const initialIndexVideoStartTime = initialIndex.initialIndexVideoStartTime;
  let flag = initialIndex.isRNModal;
  if (flag === undefined) {
    flag = false;
  }
  let num2 = initialIndex.swipeVelocityThreshold;
  if (num2 === undefined) {
    num2 = 1000;
  }
  const onClose = initialIndex.onClose;
  const onCloseCallback = initialIndex.onCloseCallback;
  let flag2 = initialIndex.shareable;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const disableDownload = initialIndex.disableDownload;
  const disableMediaOverlayButton = initialIndex.disableMediaOverlayButton;
  const disableMediaOverlayFooter = initialIndex.disableMediaOverlayFooter;
  const contextName = initialIndex.contextName;
  const contextIcon = initialIndex.contextIcon;
  const onIndexChange = initialIndex.onIndexChange;
  ({ onEndReached, onEndReachedThreshold } = initialIndex);
  let MediaViewerSourcesStore = num(onCloseCallback[6]).MediaViewerSourcesStore;
  const field = MediaViewerSourcesStore.useField("sources");
  let obj = num(onCloseCallback[7]);
  const mediaViewerSyncer = obj.useMediaViewerSyncer({ sources: field, initialIndex: num, onEndReached, onEndReachedThreshold });
  let obj2 = num(onCloseCallback[8]);
  const videoStateStore = obj2.useVideoStateStore((paused) => paused.paused);
  const items = [onCloseCallback, onClose];
  let callback = flag2.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    if (onCloseCallback != null) {
      tmp3();
    }
  }, items);
  const effect = flag2.useEffect(() => () => {
    const MediaViewerSourcesStore = num(onCloseCallback[6]).MediaViewerSourcesStore;
    MediaViewerSourcesStore.resetState();
  }, []);
  let obj3 = num(onCloseCallback[9]);
  const items1 = [onIndexChange];
  const stateFromStores = obj3.useStateFromStores(items1, () => onIndexChange.getState());
  jsx = flag2.useRef(stateFromStores);
  const ref2 = flag2.useRef(videoStateStore);
  const id = flag2.useId();
  const items2 = [id];
  const effect1 = flag2.useEffect(() => {
    let key;
    let state = AppFreezeStore.getState();
    let obj = { lockEnabled: true, key: id };
    let freezeLock = state.requestFreezeLock(obj);
    return () => {
      const state = contextIcon.getState();
      const obj = { lockEnabled: false, key };
      const freezeLock = state.requestFreezeLock(obj);
    };
  }, items2);
  const items3 = [stateFromStores, videoStateStore];
  const effect2 = flag2.useEffect(() => {
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      if (ref.current !== stateFromStores) {
        if (map1.BACKGROUND === stateFromStores) {
          ref2.current = videoStateStore;
          const tmpResult = useVideoControls;
          tmpResult.setPausedState(true);
        } else if (map1.ACTIVE === stateFromStores) {
          const tmp6 = ref2.current || ref.current !== map1.BACKGROUND;
          if (!tmp6) {
            const tmpResult2 = useVideoControls;
            tmpResult2.setPausedState(false);
          }
        }
        ref2.current = videoStateStore;
        ref.current = stateFromStores;
      }
    }
  }, items3);
  const ref3 = flag2.useRef({});
  const callback1 = flag2.useCallback((arg0, portal) => {
    const obj = MediaSourceUtil;
    const videoSourceType = obj.getVideoSourceType(portal);
    const combined = "" + portal + "_" + arg0;
    if (null != ref3.current[combined]) {
      return ref3.current[combined];
    } else {
      let portalControls;
      if (MediaSourceUtil.VideoSourceType.PORTAL === videoSourceType) {
        const tmpResult = NativePortalView;
        portalControls = tmpResult.createPortalControls(portal.portal);
      } else if (MediaSourceUtil.VideoSourceType.TIKTOK_IFRAME === videoSourceType) {
        const tmpResult4 = MediaModalTiktok;
        portalControls = tmpResult4.createTiktokVideoControls();
      } else if (MediaSourceUtil.VideoSourceType.WEB_FILE_IFRAME === videoSourceType) {
        const tmpResult5 = MediaModalWebVideoFile;
        portalControls = tmpResult5.createWebFileVideoControls();
      } else {
        const tmpResult6 = common_Video;
        portalControls = tmpResult6.createVideoControls(tmp(7714).setPausedState);
      }
      tmp5.current[combined] = portalControls;
      return portalControls;
    }
  }, []);
  const ref4 = flag2.useRef({});
  const items4 = [callback1, num, initialIndexVideoStartTime];
  const callback2 = flag2.useCallback((arg0, arg1, oldOnLoad) => {
    let closure_0 = oldOnLoad;
    if (arg0 === closure_0) {
      const tmp = closure_1;
      if (null != closure_1) {
        const tmp4 = ref4.current[arg0];
        const tmp3 = ref4;
        if (null != tmp4) {
          if (tmp4.oldOnLoad === oldOnLoad) {
            return tmp4.callback;
          }
        }
        function callback() {
          if (null != initialIndexVideoStartTime) {
            closure_1.seek(tmp);
            if (oldOnLoad != null) {
              tmp4();
            }
          }
        }
        closure_1 = callback1(arg0, arg1);
        const obj = { callback, oldOnLoad };
        tmp3.current[arg0] = obj;
        return callback;
      }
    }
    return oldOnLoad;
  }, items4);
  const effect3 = flag2.useEffect(() => {
    let obj = onClose(onCloseCallback[16]);
    const result = obj.clearCurrentFocusAndDismissKeyboard();
    const obj2 = num(onCloseCallback[17]);
    obj2.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    return () => {
      const obj = num(onCloseCallback[17]);
      return obj.lockOrientationForiOS();
    };
  }, []);
  const items5 = [disableDownload, flag2, mediaViewerSyncer];
  const items6 = [mediaViewerSyncer, callback1, flag2, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, contextName, contextIcon, onIndexChange];
  const callback3 = flag2.useCallback(() => {
    if (flag2) {
      const obj = MediaSourceUtil;
      const selectedMediaSource = obj.getSelectedMediaSource(mediaViewerSyncer);
      const tmp3 = dependencyMap;
      if (null != selectedMediaSource) {
        const tmp2Result = HapticUtils;
        const result = tmp2Result.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        const obj2 = { source: selectedMediaSource, disableDownload, shareable: tmp };
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.openLazy(asyncRequire(7786, tmp3.paths), "MediaShareActionSheet", obj2);
      }
    }
  }, items5);
  const callback4 = flag2.useCallback((onClose, overlayEnabled) => jsx(MediaModalOverlayDefault, { syncer: mediaViewerSyncer, getVideoControls: callback1, onClose, shareable: flag2, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, contextName, contextIcon, overlayEnabled, onIndexChange }), items6);
  const obj4 = num(onCloseCallback[24]);
  const mediaPlayerMutedStore = obj4.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items7 = [callback1, callback2, mediaPlayerMutedStore, videoStateStore];
  const callback5 = flag2.useCallback((hasSpoiler) => {
    let index;
    let key;
    let pointerEvents;
    let source;
    let tmp34;
    let visible;
    ({ source, index, key, visible, pointerEvents } = hasSpoiler);
    hasSpoiler = hasSpoiler.hasSpoiler;
    const merged = Object.assign(hasSpoiler, Object.assign({ source: 0, index: 0, key: 0, visible: 0, hasSpoiler: 0, pointerEvents: 0 }));
    let tmp2 = !visible;
    if (visible) {
      tmp2 = hasSpoiler;
    }
    if (!tmp2) {
      tmp2 = videoStateStore;
    }
    const obj = MediaSourceUtil;
    const videoSourceType = obj.getVideoSourceType(source);
    if (videoSourceType === MediaSourceUtil.VideoSourceType.WEB_FILE_IFRAME) {
      if (null != source.videoURI) {
        MediaModalWebVideoFileDefault;
        const merged1 = Object.assign(merged);
        size = { uri: null, width: null, height: null };
        ({ videoURI: obj13.uri, width: obj13.width, height: obj13.height } = source);
        return <tmp52 key={key} visible={visible} style={merged.style} source={size} controls={callback1(index, source)} />;
      }
    }
    if (null != source.portal) {
      const tmp4Result = NativePortalView;
      if (!tmp4Result.isPortalExpired(source.portal)) {
        NativePortalViewDefault;
        const merged2 = Object.assign(merged);
        return <tmp9 key={key} pointerEvents={pointerEvents} portal={source.portal} paused={tmp2} muted={mediaPlayerMutedStore || true === source.isGIFV} />;
      }
    }
    if (null != source.embedURI) {
      if (!source.isGIFV) {
        const embedProviderName = source.embedProviderName;
        if ("TikTok" === embedProviderName) {
          MediaModalTiktokDefault;
          const merged3 = Object.assign(merged);
          const size1 = { uri: null, width: null, height: null };
          ({ embedURI: obj7.uri, width: obj7.width, height: obj7.height } = source);
          return <tmp21 key={key} visible={visible} style={merged.style} source={size1} controls={callback1(index, source)} />;
        } else if ("YouTube" === embedProviderName) {
          MediaModalYoutubeDefault;
          const merged4 = Object.assign(merged);
          const size2 = { uri: null, width: null, height: null };
          ({ embedURI: obj5.uri, width: obj5.width, height: obj5.height } = source);
          return <tmp15 key={key} visible={visible} style={merged.style} source={size2} />;
        } else {
          return null;
        }
      }
    }
    if (null != source.videoURI) {
      MediaModalLoaderDefault;
      const merged5 = Object.assign(merged);
      const size3 = { uri: null, width: null, height: null, videoURI: null, messageId: null, channelId: null, mediaIndex: null, description: null, obscure: null, accessoryType: null, attachmentId: null };
      ({ videoURI: obj11.uri, width: obj11.width, height: obj11.height, videoURI: obj11.videoURI, messageId: obj11.messageId, channelId: obj11.channelId, mediaIndex: obj11.mediaIndex, description: obj11.description, obscure: obj11.obscure, accessoryType: obj11.accessoryType, attachmentId: obj11.attachmentId } = source);
      tmp34 = <tmp44 Component={common_Video.VideoComponent} key={key} pointerEvents={pointerEvents} paused={tmp2} controls={callback1(index, source)} muted={tmp3} index={index} onLoad={callback2(index, source, merged.onLoad)} source={size3} />;
    } else {
      const uri3 = source.uri;
      if (!uri3.startsWith("assets-library://")) {
        const uri = source.uri;
        if (!uri.startsWith(unpackModuleId)) {
          const uri2 = source.uri;
          if (!uri2.startsWith(closure_12)) {
            MediaModalLoaderDefault;
            const merged6 = Object.assign(merged);
            tmp34 = <tmp30 Component={FastImageDefault} key={key} source={source} index={index} pointerEvents={pointerEvents} />;
          }
        }
      }
      MediaModalLoaderDefault;
      const merged7 = Object.assign(merged);
      tmp34 = <tmp37 Component={hasOwnProperty} key={key} source={source} index={index} pointerEvents={pointerEvents} />;
    }
    return tmp34;
  }, items7);
  const tmp18 = jsx(initialIndexVideoStartTime(onCloseCallback[28]), { originLayout, swipeVelocityThreshold: num2, onClose: callback, onLongPress: callback3, syncer: mediaViewerSyncer, renderMedia: callback5, renderOverlay: callback4 });
  let tmp17Result = tmp18;
  if (flag) {
    const obj5 = { transparent: true, animationType: "none", visible: true, onRequestClose: callback, statusBarTranslucent: true, children: tmp17(contextName, obj6) };
    obj6 = { style: disableMediaOverlayFooter.absoluteFill, children: tmp18 };
    tmp17Result = tmp17(disableMediaOverlayButton, obj5);
  }
  return tmp17Result;
};
