// Module ID: 8292
// Function ID: 65433
// Name: MediaModal
// Dependencies: [31, 27, 8293, 6651, 653, 33, 8275, 8294, 8282, 8298, 566, 477, 8276, 8279, 8299, 8301, 8302, 1820, 8303, 4099, 4100, 4098, 8305, 1934, 12228, 8283, 12246, 12248, 5085, 12250, 2]
// Exports: default

// Module 8292 (MediaModal)
import result from "result";
import get_ActivityIndicator from "module_12248";
import module_8293 from "module_8293";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import { createElement } from "result";

let closure_11;
let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ Image: closure_5, Modal: closure_6, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
({ Base64JPEGPrefix: closure_11, Base64GIFPrefix: closure_12, AppStates: closure_13 } = ME);
let result = require("module_8293").fileFinishedImporting("modules/media_viewer/native/components/MediaModal.tsx");

export default function MediaModal(initialIndex) {
  let onEndReached;
  let onEndReachedThreshold;
  let num = initialIndex.initialIndex;
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
  let mediaViewerSyncer;
  let videoStateStore;
  let rnvHttpEngine;
  let stateFromStores;
  let closure_15;
  let closure_16;
  let id;
  let closure_18;
  let callback1;
  let closure_20;
  let callback2;
  let mediaPlayerMutedStore;
  ({ onEndReached, onEndReachedThreshold } = initialIndex);
  let MediaViewerSourcesStore = num(onCloseCallback[6]).MediaViewerSourcesStore;
  const field = MediaViewerSourcesStore.useField("sources");
  let obj = num(onCloseCallback[7]);
  obj = { sources: field, initialIndex: num, onEndReached, onEndReachedThreshold };
  mediaViewerSyncer = obj.useMediaViewerSyncer(obj);
  let obj2 = num(onCloseCallback[8]);
  videoStateStore = obj2.useVideoStateStore((paused) => paused.paused);
  rnvHttpEngine = num(onCloseCallback[9]).useRnvHttpEngine();
  const items = [onCloseCallback, onClose];
  let callback = flag2.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
    if (null != onCloseCallback) {
      onCloseCallback();
    }
  }, items);
  const effect = flag2.useEffect(() => () => {
    const MediaViewerSourcesStore = num(onCloseCallback[6]).MediaViewerSourcesStore;
    MediaViewerSourcesStore.resetState();
  }, []);
  let obj4 = num(onCloseCallback[9]);
  const items1 = [onIndexChange];
  stateFromStores = num(onCloseCallback[10]).useStateFromStores(items1, () => onIndexChange.getState());
  closure_15 = flag2.useRef(stateFromStores);
  closure_16 = flag2.useRef(videoStateStore);
  id = flag2.useId();
  const items2 = [id];
  const effect1 = flag2.useEffect(() => {
    let state = contextIcon.getState();
    let freezeLock = state.requestFreezeLock({ lockEnabled: true, key: id });
    return () => {
      const state = contextIcon.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: outer1_17 });
    };
  }, items2);
  const items3 = [stateFromStores, videoStateStore];
  const effect2 = flag2.useEffect(() => {
    if (obj.isIOS()) {
      if (ref.current !== stateFromStores) {
        if (rnvHttpEngine.BACKGROUND === stateFromStores) {
          ref2.current = videoStateStore;
          num(onCloseCallback[8]).setPausedState(true);
          const obj3 = num(onCloseCallback[8]);
        } else if (rnvHttpEngine.ACTIVE === tmp20) {
          let current = ref2.current;
          if (!current) {
            current = ref.current !== rnvHttpEngine.BACKGROUND;
          }
          if (!current) {
            8(onCloseCallback[8]).setPausedState(false);
            const obj2 = 8(onCloseCallback[8]);
          }
        }
        ref2.current = videoStateStore;
        ref.current = stateFromStores;
      }
    }
  }, items3);
  closure_18 = flag2.useRef({});
  callback1 = flag2.useCallback((arg0, portal) => {
    const videoSourceType = num(onCloseCallback[12]).getVideoSourceType(portal);
    const combined = "" + portal + "_" + arg0;
    if (null != ref3.current[combined]) {
      return tmp3;
    } else {
      if (num(onCloseCallback[12]).VideoSourceType.PORTAL === videoSourceType) {
        let portalControls = num(onCloseCallback[13]).createPortalControls(portal.portal);
        const obj5 = num(onCloseCallback[13]);
      } else if (num(onCloseCallback[12]).VideoSourceType.TIKTOK_IFRAME === videoSourceType) {
        portalControls = num(onCloseCallback[14]).createTiktokVideoControls();
        const obj4 = num(onCloseCallback[14]);
      } else if (num(onCloseCallback[12]).VideoSourceType.WEB_FILE_IFRAME === videoSourceType) {
        portalControls = num(onCloseCallback[15]).createWebFileVideoControls();
        const obj3 = num(onCloseCallback[15]);
      } else {
        portalControls = 16(onCloseCallback[16]).createVideoControls(num(onCloseCallback[8]).setPausedState);
        const obj2 = 16(onCloseCallback[16]);
      }
      ref3.current[combined] = portalControls;
      return portalControls;
    }
    const obj = num(onCloseCallback[12]);
  }, []);
  closure_20 = flag2.useRef({});
  const items4 = [callback1, num, initialIndexVideoStartTime];
  callback2 = flag2.useCallback((arg0, arg1, oldOnLoad) => {
    let closure_0 = oldOnLoad;
    function callback() {
      if (null != closure_1) {
        closure_1.seek(closure_1);
        if (null != oldOnLoad) {
          oldOnLoad();
        }
      }
    }
    if (arg0 === closure_0) {
      if (null != closure_1) {
        if (null != ref4.current[arg0]) {
          if (tmp4.oldOnLoad === oldOnLoad) {
            return tmp4.callback;
          }
        }
        closure_1 = callback1(arg0, arg1);
        const obj = { callback, oldOnLoad };
        ref4.current[arg0] = obj;
        return callback;
      }
    }
    return oldOnLoad;
  }, items4);
  const effect3 = flag2.useEffect(() => {
    const result = onClose(onCloseCallback[17]).clearCurrentFocusAndDismissKeyboard();
    const obj = onClose(onCloseCallback[17]);
    num(onCloseCallback[18]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    return () => num(onCloseCallback[18]).lockOrientationForiOS();
  }, []);
  const items5 = [disableDownload, flag2, mediaViewerSyncer];
  const items6 = [mediaViewerSyncer, callback1, flag2, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, contextName, contextIcon, onIndexChange];
  const callback3 = flag2.useCallback(() => {
    if (flag2) {
      let obj = num(onCloseCallback[12]);
      const selectedMediaSource = obj.getSelectedMediaSource(mediaViewerSyncer);
      if (null != selectedMediaSource) {
        const result = num(onCloseCallback[19]).triggerHapticFeedback(initialIndexVideoStartTime(onCloseCallback[20]).IMPACT_LIGHT);
        const obj2 = num(onCloseCallback[19]);
        obj = { source: selectedMediaSource, disableDownload, shareable: flag2 };
        initialIndexVideoStartTime(onCloseCallback[21]).openLazy(num(onCloseCallback[23])(onCloseCallback[22], onCloseCallback.paths), "MediaShareActionSheet", obj);
        const obj3 = initialIndexVideoStartTime(onCloseCallback[21]);
      }
    }
  }, items5);
  const callback4 = flag2.useCallback((onClose, overlayEnabled) => stateFromStores(initialIndexVideoStartTime(onCloseCallback[24]), { syncer: mediaViewerSyncer, getVideoControls: callback1, onClose, shareable: flag2, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, contextName, contextIcon, overlayEnabled, onIndexChange }), items6);
  let obj5 = num(onCloseCallback[10]);
  mediaPlayerMutedStore = num(onCloseCallback[25]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items7 = [callback1, callback2, mediaPlayerMutedStore, videoStateStore, rnvHttpEngine];
  const callback5 = flag2.useCallback((hasSpoiler) => {
    let index;
    let key;
    let pointerEvents;
    let source;
    let visible;
    ({ source, index, key, visible, pointerEvents } = hasSpoiler);
    let obj = { source: 0, index: 0, key: 0, visible: 0, hasSpoiler: 0, pointerEvents: 0 };
    Object.setPrototypeOf(null);
    const merged = Object.assign(hasSpoiler, obj);
    let tmp4 = mediaPlayerMutedStore;
    if (!mediaPlayerMutedStore) {
      tmp4 = true === source.isGIFV;
    }
    let obj1 = num(onCloseCallback[12]);
    const videoSourceType = obj1.getVideoSourceType(source);
    if (videoSourceType === num(onCloseCallback[12]).VideoSourceType.WEB_FILE_IFRAME) {
      if (null != source.videoURI) {
        obj = {};
        const merged1 = Object.assign(merged);
        obj["key"] = key;
        obj["visible"] = visible;
        obj["style"] = merged.style;
        obj = {};
        ({ videoURI: obj13.uri, width: obj13.width, height: obj13.height } = source);
        obj["source"] = obj;
        obj["controls"] = callback1(index, source);
        return ref(initialIndexVideoStartTime(onCloseCallback[15]), obj);
      }
    }
    if (null != source.portal) {
      if (!obj14.isPortalExpired(source.portal)) {
        obj1 = {};
        const merged2 = Object.assign(merged);
        obj1["key"] = key;
        obj1["pointerEvents"] = pointerEvents;
        obj1["portal"] = source.portal;
        obj1["paused"] = tmp3;
        obj1["muted"] = tmp4;
        return ref(initialIndexVideoStartTime(onCloseCallback[13]), obj1);
      }
      obj14 = num(onCloseCallback[13]);
    }
    if (null != source.embedURI) {
      if (!source.isGIFV) {
        const embedProviderName = source.embedProviderName;
        if ("TikTok" === embedProviderName) {
          const obj2 = {};
          const merged3 = Object.assign(merged);
          obj2["key"] = key;
          obj2["visible"] = visible;
          obj2["style"] = merged.style;
          ({ embedURI: obj7.uri, width: obj7.width, height: obj7.height } = source);
          obj2["source"] = {};
          obj2["controls"] = callback1(index, source);
          return ref(initialIndexVideoStartTime(onCloseCallback[14]), obj2);
        } else if ("YouTube" === embedProviderName) {
          const obj4 = {};
          const merged4 = Object.assign(merged);
          obj4["key"] = key;
          obj4["visible"] = visible;
          obj4["style"] = merged.style;
          const obj5 = {};
          ({ embedURI: obj5.uri, width: obj5.width, height: obj5.height } = source);
          obj4["source"] = obj5;
          return ref(initialIndexVideoStartTime(onCloseCallback[26]), obj4);
        } else {
          return null;
        }
      }
    }
    if (null != source.videoURI) {
      const obj6 = { Component: num(onCloseCallback[16]).VideoComponent };
      const merged5 = Object.assign(merged);
      obj6["key"] = key;
      obj6["pointerEvents"] = pointerEvents;
      obj6["paused"] = tmp3;
      obj6["controls"] = callback1(index, source);
      obj6["muted"] = tmp4;
      obj6["httpEngine"] = rnvHttpEngine;
      obj6["index"] = index;
      obj6["onLoad"] = callback2(index, source, merged.onLoad);
      const obj7 = {};
      ({ videoURI: obj11.uri, width: obj11.width, height: obj11.height, videoURI: obj11.videoURI, messageId: obj11.messageId, channelId: obj11.channelId, mediaIndex: obj11.mediaIndex, description: obj11.description, obscure: obj11.obscure, accessoryType: obj11.accessoryType, attachmentId: obj11.attachmentId } = source);
      obj6["source"] = obj7;
      let tmp37 = ref(initialIndexVideoStartTime(onCloseCallback[27]), obj6);
      const tmp49 = initialIndexVideoStartTime(onCloseCallback[27]);
    } else {
      const uri3 = source.uri;
      if (!uri3.startsWith("assets-library://")) {
        const uri = source.uri;
        if (!uri.startsWith(mediaViewerSyncer)) {
          const uri2 = source.uri;
          if (!uri2.startsWith(videoStateStore)) {
            const obj8 = { Component: initialIndexVideoStartTime(onCloseCallback[28]) };
            const merged6 = Object.assign(merged);
            obj8["key"] = key;
            obj8["source"] = source;
            obj8["index"] = index;
            obj8["pointerEvents"] = pointerEvents;
            tmp37 = ref(initialIndexVideoStartTime(onCloseCallback[27]), obj8);
            const tmp33 = initialIndexVideoStartTime(onCloseCallback[27]);
          }
        }
      }
      const obj9 = { Component: disableDownload };
      const merged7 = Object.assign(merged);
      obj9["key"] = key;
      obj9["source"] = source;
      obj9["index"] = index;
      obj9["pointerEvents"] = pointerEvents;
      tmp37 = ref(initialIndexVideoStartTime(onCloseCallback[27]), obj9);
      const tmp41 = initialIndexVideoStartTime(onCloseCallback[27]);
    }
    return tmp37;
  }, items7);
  obj = { originLayout: initialIndex.originLayout, swipeVelocityThreshold: num2, onClose: callback, onLongPress: callback3, syncer: mediaViewerSyncer, renderMedia: callback5, renderOverlay: callback4 };
  const tmp18 = stateFromStores(initialIndexVideoStartTime(onCloseCallback[29]), obj);
  let tmp19 = tmp18;
  if (flag) {
    let obj1 = { transparent: true, animationType: "none", visible: true, onRequestClose: callback, statusBarTranslucent: true };
    obj2 = { style: disableMediaOverlayFooter.absoluteFill, children: tmp18 };
    obj1.children = stateFromStores(contextName, obj2);
    tmp19 = stateFromStores(disableMediaOverlayButton, obj1);
  }
  return tmp19;
};
