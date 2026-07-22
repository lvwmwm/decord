// Module ID: 15696
// Function ID: 119874
// Name: getCardKey
// Dependencies: []

// Module 15696 (getCardKey)
let UI_SHOW_HIDE_PHYSICS;
let VOICE_PANEL_CHUNK_DIVISOR;
function getCardKey(type) {
  return "" + type.type + "-" + type.id;
}
function renderCard(arg0, item, transitionState, cleanUp) {
  return jsx(importDefault(dependencyMap[10]), { item, transitionState, cleanUp }, arg0);
}
function CardContentFreezer(children) {
  children = children.children;
  const arg1 = children;
  const tmp = function useLazyContentFreeze() {
    const mode = children(closure_2[20]).usePIPState().mode;
    const children = mode;
    const ref = React.useRef(mode === constants.IN_APP);
    closure_2 = callback(React.useState({}), 2)[1];
    const items = [mode];
    const effect = React.useEffect(() => {
      if (timeout === constants.IN_APP) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          if (!ref.current) {
            ref.current = true;
            callback({});
          }
        }, 700);
        return () => {
          clearTimeout(closure_0);
        };
      } else {
        ref.current = false;
      }
    }, items);
    const obj = children(closure_2[20]);
    const tmp = ref;
    return mode === constants.IN_APP && ref(closure_2[21])(ref);
  }();
  const importDefault = tmp;
  const tmp2 = function useSpacerStyles(freeze) {
    const children = freeze;
    const tmp = tmp(tmp2[13])("VoicePanelCardView");
    const context = safeArea.useContext(tmp(tmp2[14]));
    const connected = context.connected;
    const controlsSpecs = context.controlsSpecs;
    const safeArea = context.safeArea;
    const contentDimensions = context.contentDimensions;
    const windowDimensions = context.windowDimensions;
    const mode = context.mode;
    const focused = context.focused;
    const wrapperOffset = context.wrapperOffset;
    let obj = children(tmp2[15]);
    const token = obj.useToken(tmp(tmp2[16]).modules.mobile.VOICE_PANEL_GUTTER);
    const fn = function o() {
      let height;
      let paddingTop;
      const bound = Math.max(safeArea.get().bottom, closure_12);
      const tmp2 = tmp(connected[17]);
      ({ height, paddingTop } = tmp(connected[17])(safeArea.get(), token));
      let num = 1;
      let num2 = 0;
      let num3 = 1;
      let num4 = 0;
      if (connected.get()) {
        let height2 = paddingTop + contentDimensions.get().height + bound;
        if (height2 - windowDimensions.get().height < 8) {
          height2 = windowDimensions.get().height;
        }
        num2 = height2;
        num3 = num;
        num4 = 0;
        if (mode.get() !== wrapperOffset.PIP) {
          num2 = height2;
          num3 = num;
          num4 = 0;
          if (controlsSpecs.get().mode !== token.HIDDEN) {
            num2 = height2;
            num3 = num;
            num4 = 0;
            if (null == focused.get()) {
              const diff = height2 - height - closure_12;
              const diff1 = diff - controlsSpecs.get().height - bound;
              const diff2 = windowDimensions.get().height - paddingTop - bound;
              const diff3 = windowDimensions.get().height - height;
              const diff4 = diff3 - controlsSpecs.get().height - bound;
              if (contentDimensions.get().height > diff1) {
                let result = diff1 / contentDimensions.get().height;
              } else {
                let obj = windowDimensions;
                const width = windowDimensions.get().width;
                if (tmp) {
                  result = width / obj.get().width;
                } else {
                  const diff5 = width - 48;
                  result = diff5 / obj.get().width;
                }
              }
              let tmp24 = contentDimensions.get().height < diff2;
              if (tmp24) {
                tmp24 = contentDimensions.get().height > diff4;
              }
              let diff6 = height;
              if (tmp24) {
                const result1 = (diff2 - contentDimensions.get().height) / 2;
                diff6 = height - (result1 - (diff4 - contentDimensions.get().height * result) / 2) * result;
              }
              if (contentDimensions.get().height > diff1) {
                let sum = diff6 + (height2 * result - height2) / 2;
              } else {
                sum = diff6 + (diff1 - (windowDimensions.get().height - paddingTop - bound)) / 2;
              }
              paddingTop = paddingTop * result;
              const diff7 = sum - paddingTop;
            }
          }
        }
        const tmp4 = paddingTop;
      }
      obj = { position: "relative", width: windowDimensions.get().width, height: tmp(connected[18])(num2) };
      obj = {};
      const tmp2Result = tmp(connected[17])(safeArea.get(), token);
      const sum1 = num4 + wrapperOffset.get().y;
      if (!wrapperOffset.get().gestureActive) {
        if (mode.get() !== wrapperOffset.PIP) {
          let tmp38 = closure_15;
        }
        obj.translateY = obj4.withSpring(sum1, tmp38);
        const items = [obj, ];
        const obj1 = { scale: arg0(connected[19]).withSpring(num3, closure_15) };
        items[1] = obj1;
        obj.transform = items;
        if (arg0) {
          num = 0;
        }
        obj.opacity = num;
        return obj;
      }
      tmp38 = focused;
    };
    obj = { controlsSpecs, VoicePanelControlsModes: token, safeArea, EDGE_GUTTER: closure_12, calculateVoicePanelHeaderSpecs: tmp(tmp2[17]), edgeGutter: token, connected, contentDimensions, windowDimensions, mode, VoicePanelModes: wrapperOffset, focused, isRefreshEnabled: tmp, roundToNearestPixel: tmp(tmp2[18]), withSpring: children(tmp2[19]).withSpring, wrapperOffset, LAYOUT_PHYSICS: focused, SCALE_PHYSICS: closure_15, freeze };
    fn.__closure = obj;
    fn.__workletHash = 495797244676;
    fn.__initData = closure_19;
    return children(connected[11]).useAnimatedStyle(fn);
  }(tmp);
  const dependencyMap = tmp2;
  const items = [tmp2, tmp, children];
  return importAllResult.useMemo(() => {
    let obj = { style: tmp2 };
    const tmp = tmp(tmp2[22]);
    obj = { freeze: tmp };
    obj = { collapsable: false, style: absoluteFill.absoluteFill, children };
    obj.children = callback2(closure_6, obj);
    obj.children = callback2(children(tmp2[23]).Freeze, obj);
    return callback2(tmp, obj);
  }, items);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ StyleSheet: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp3 = arg1(dependencyMap[4]);
({ LAYOUT_PHYSICS: closure_8, VoicePanelModes: closure_9 } = tmp3);
({ UI_SHOW_HIDE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = tmp3);
const VoicePanelControlsModes = arg1(dependencyMap[5]).VoicePanelControlsModes;
const VoicePanelPIPModes = arg1(dependencyMap[6]).VoicePanelPIPModes;
const EDGE_GUTTER = arg1(dependencyMap[7]).EDGE_GUTTER;
const isUserParticipant = arg1(dependencyMap[8]).isUserParticipant;
const jsx = arg1(dependencyMap[9]).jsx;
const obj = {};
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
obj["mass"] = 1;
obj["restSpeedThreshold"] = 0.00001;
let closure_16 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
let closure_17 = { code: "function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}" };
let closure_18 = { code: "function VoicePanelCardViewTsx2(newChunks,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks);}" };
let closure_19 = { code: "function VoicePanelCardViewTsx3(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,isRefreshEnabled,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return isRefreshEnabled?windowDimensions.get().width/windowDimensions.get().width:(windowDimensions.get().width-48)/windowDimensions.get().width;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}" };
const tmp2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function VoicePanelCardView(viewableChunks) {
  const channelId = importAllResult.useContext(importDefault(dependencyMap[14])).channelId;
  const arg1 = channelId;
  const tmp = function useViewableChunkState(viewableChunks) {
    const channelId = viewableChunks;
    const tmp = ref(React.useState(closure_16), 2);
    let closure_1 = tmp[1];
    const callback = React.useCallback((arg0) => {
      callback((start) => {
        let tmp = start;
        if (start.start !== start.start) {
          tmp = start;
        }
        return tmp;
      });
    }, []);
    const stateFromStoresArray = callback;
    let obj = channelId(stateFromStoresArray[11]);
    const fn = function h() {
      return arg0.get();
    };
    fn.__closure = { viewableChunks };
    fn.__workletHash = 1074173860641;
    fn.__initData = closure_17;
    const fn2 = function s(safeAreaState, safeAreaState2) {
      let tmp;
      if (null != safeAreaState2) {
        tmp = safeAreaState2;
      }
      if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
        safeAreaState(callback[11]).runOnJS(callback)(safeAreaState);
        const obj2 = safeAreaState(callback[11]);
      }
    };
    obj = { cheapWorkletShallowEqual: channelId(stateFromStoresArray[12]).cheapWorkletShallowEqual, runOnJS: channelId(stateFromStoresArray[11]).runOnJS, updateValueIfChange: callback };
    fn2.__closure = obj;
    fn2.__workletHash = 13543715159803;
    fn2.__initData = closure_18;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
    return tmp[0];
  }(viewableChunks.viewableChunks);
  const chunkedParticipants = arg1(dependencyMap[24]).useChunkedParticipants(channelId, tmp);
  const importDefault = chunkedParticipants;
  const obj = arg1(dependencyMap[24]);
  const items = [closure_7];
  const items1 = [channelId];
  const stateFromStoresArray = arg1(dependencyMap[25]).useStateFromStoresArray(items, () => {
    const participants = participants.getParticipants(channelId);
    return participants.filter((arg0) => callback(arg0));
  }, items1);
  const dependencyMap = stateFromStoresArray;
  let closure_3 = importAllResult.useRef(stateFromStoresArray);
  const items2 = [stateFromStoresArray, channelId];
  const effect = importAllResult.useEffect(() => {
    let obj = chunkedParticipants(stateFromStoresArray[26]);
    if (!obj.isEqual(ref.current, stateFromStoresArray)) {
      const differenceWithResult = chunkedParticipants(stateFromStoresArray[26]).differenceWith(ref.current, stateFromStoresArray, (id, id2) => id.id === id2.id);
      let user = null;
      if (differenceWithResult.length > 0) {
        user = differenceWithResult[0].user;
      }
      if (null != user) {
        const AccessibilityAnnouncer = channelId(stateFromStoresArray[27]).AccessibilityAnnouncer;
        const intl = channelId(stateFromStoresArray[28]).intl;
        obj = { username: user.username };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(channelId(stateFromStoresArray[28]).t.9NqwWZ, obj));
      }
      const obj2 = chunkedParticipants(stateFromStoresArray[26]);
    }
    ref.current = stateFromStoresArray;
  }, items2);
  const items3 = [chunkedParticipants];
  return importAllResult.useMemo(() => {
    let obj = { children: callback(channelId(stateFromStoresArray[29]).TransitionGroup, obj) };
    obj = { items: chunkedParticipants, renderItem: closure_21, getItemKey: closure_20, lazyCleanUpDelay: 1000 };
    return callback(closure_22, obj);
  }, items3);
});
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardView.tsx");

export default memoResult;
