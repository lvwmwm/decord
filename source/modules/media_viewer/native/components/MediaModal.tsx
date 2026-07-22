// Module ID: 8286
// Function ID: 65396
// Name: MediaModal
// Dependencies: []
// Exports: default

// Module 8286 (MediaModal)
let closure_4 = importAll(dependencyMap[0]);
({ Image: closure_5, Modal: closure_6, StyleSheet: closure_7, View: closure_8 } = arg1(dependencyMap[1]));
let closure_9 = importDefault(dependencyMap[2]);
let closure_10 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ Base64JPEGPrefix: closure_11, Base64GIFPrefix: closure_12, AppStates: closure_13 } = arg1(dependencyMap[4]));
const jsx = arg1(dependencyMap[5]).jsx;
const createElement = arg1(dependencyMap[0]).createElement;
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/media_viewer/native/components/MediaModal.tsx");

export default function MediaModal(initialIndex) {
  let onEndReached;
  let onEndReachedThreshold;
  let num = initialIndex.initialIndex;
  if (num === undefined) {
    num = 0;
  }
  const arg1 = num;
  const initialIndexVideoStartTime = initialIndex.initialIndexVideoStartTime;
  const importDefault = initialIndexVideoStartTime;
  let flag = initialIndex.isRNModal;
  if (flag === undefined) {
    flag = false;
  }
  let num2 = initialIndex.swipeVelocityThreshold;
  if (num2 === undefined) {
    num2 = 1000;
  }
  const onClose = initialIndex.onClose;
  const importAll = onClose;
  const dependencyMap = onCloseCallback;
  let flag2 = initialIndex.shareable;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const React = flag2;
  const disableDownload = initialIndex.disableDownload;
  const disableMediaOverlayButton = initialIndex.disableMediaOverlayButton;
  const disableMediaOverlayFooter = initialIndex.disableMediaOverlayFooter;
  const contextName = initialIndex.contextName;
  const contextIcon = initialIndex.contextIcon;
  let closure_9 = contextIcon;
  const onIndexChange = initialIndex.onIndexChange;
  let closure_10 = onIndexChange;
  let mediaViewerSyncer;
  let videoStateStore;
  let rnvHttpEngine;
  let jsx;
  let closure_15;
  let closure_16;
  let id;
  let closure_18;
  let callback1;
  let closure_20;
  let callback2;
  let mediaPlayerMutedStore;
  ({ onEndReached, onEndReachedThreshold } = initialIndex);
  const MediaViewerSourcesStore = arg1(dependencyMap[6]).MediaViewerSourcesStore;
  const field = MediaViewerSourcesStore.useField("sources");
  let obj = arg1(dependencyMap[7]);
  obj = { sources: field, initialIndex: num, onEndReached, onEndReachedThreshold };
  mediaViewerSyncer = obj.useMediaViewerSyncer(obj);
  let obj2 = arg1(dependencyMap[8]);
  videoStateStore = obj2.useVideoStateStore((paused) => paused.paused);
  rnvHttpEngine = arg1(dependencyMap[9]).useRnvHttpEngine();
  const items = [initialIndex.onCloseCallback, onClose];
  const callback = React.useCallback(() => {
    if (null != onClose) {
      onClose();
    }
    if (null != onCloseCallback) {
      onCloseCallback();
    }
  }, items);
  const effect = React.useEffect(() => () => {
    const MediaViewerSourcesStore = callback(closure_3[6]).MediaViewerSourcesStore;
    MediaViewerSourcesStore.resetState();
  }, []);
  const obj4 = arg1(dependencyMap[9]);
  const items1 = [closure_10];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items1, () => onIndexChange.getState());
  jsx = stateFromStores;
  closure_15 = React.useRef(stateFromStores);
  closure_16 = React.useRef(videoStateStore);
  id = React.useId();
  const items2 = [id];
  const effect1 = React.useEffect(() => {
    const state = contextIcon.getState();
    const freezeLock = state.requestFreezeLock({ lockEnabled: true, key: id });
    return () => {
      const state = state.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: closure_17 });
    };
  }, items2);
  const items3 = [stateFromStores, videoStateStore];
  const effect2 = React.useEffect(() => {
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
  closure_18 = React.useRef({});
  callback1 = React.useCallback((arg0, portal) => {
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
  closure_20 = React.useRef({});
  const items4 = [callback1, num, initialIndexVideoStartTime];
  callback2 = React.useCallback((arg0, arg1, oldOnLoad) => {
    function callback() {
      if (null != closure_1) {
        closure_1.seek(closure_1);
        if (null != arg2) {
          arg2();
        }
      }
    }
    if (arg0 === oldOnLoad) {
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
  const effect3 = React.useEffect(() => {
    const result = onClose(onCloseCallback[17]).clearCurrentFocusAndDismissKeyboard();
    const obj = onClose(onCloseCallback[17]);
    num(onCloseCallback[18]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    return () => callback(closure_3[18]).lockOrientationForiOS();
  }, []);
  const items5 = [disableDownload, flag2, mediaViewerSyncer];
  const items6 = [mediaViewerSyncer, callback1, flag2, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, contextName, contextIcon, onIndexChange];
  const callback3 = React.useCallback(() => {
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
  const callback4 = React.useCallback((onClose, overlayEnabled) => stateFromStores(initialIndexVideoStartTime(onCloseCallback[24]), { syncer: mediaViewerSyncer, getVideoControls: callback1, onClose, shareable: flag2, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, contextName, contextIcon, overlayEnabled, onIndexChange }), items6);
  const obj5 = arg1(dependencyMap[10]);
  mediaPlayerMutedStore = arg1(dependencyMap[25]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items7 = [callback1, callback2, mediaPlayerMutedStore, videoStateStore, rnvHttpEngine];
  const callback5 = React.useCallback((hasSpoiler) => {
    let index;
    let key;
    let pointerEvents;
    let source;
    let visible;
    ({ source, index, key, visible, pointerEvents } = hasSpoiler);
    let obj = { 9223372036854775807: "Text", 0: "resizeMode", 9223372036854775807: "from", 9223372036854775807: "Array", -9223372036854775808: "isArray", 9223372036854775807: "braintreemasterpasslanding" };
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
      const obj14 = num(onCloseCallback[13]);
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
  const tmp18 = jsx(importDefault(dependencyMap[29]), obj);
  let tmp19 = tmp18;
  if (flag) {
    const obj1 = { "Null": "NOTIFICATION_SETTINGS_PERMISSION_HEADER", "Null": "values", "Null": "isArray", "Null": "type", "Null": "isArray", onRequestClose: callback };
    obj2 = { style: disableMediaOverlayFooter.absoluteFill, children: tmp18 };
    obj1.children = <contextName {...obj2} />;
    tmp19 = <disableMediaOverlayButton {...obj1} />;
  }
  return tmp19;
};
