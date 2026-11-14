// Module ID: 20010
// Function ID: 20011
// Name: StreamVolumeMovedHint
// Dependencies: [19, 17, 15763, 21, 5306, 575, 1655, 1113, 5315, 5929, 2]
// Exports: default

// Module 20010 (StreamVolumeMovedHint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5315 */;
import StreamVolumeMovedStore2 from "StreamVolumeMovedStore" /* 15763 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const StreamVolumeMovedStore = StreamVolumeMovedStore2;
let dependencyMap;

let obj2;
let rect;
let View = react_native.View;
let closure_6 = StreamVolumeMovedStore2.clearStreamVolumeMovedHint;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: rect, pill: obj2 };
rect = { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function StreamVolumeMovedHintTsx1(){let[interpolate,longPressProgress,PRESSED_SCALE]=this.__closure;return{transform:[{scale:interpolate(longPressProgress.get(),[0,1],[1,PRESSED_SCALE])}]};})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/stream_volume_moved/StreamVolumeMovedHint.tsx");

export default function StreamVolumeMovedHint(streamKey) {
  let c2;
  let items4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  streamKey = streamKey.streamKey;
  let state;
  const longPressProgress = streamKey.longPressProgress;
  let tmp = closure_8();
  let items = [closure_9, , , ];
  const useAnimatedStyle = streamKey(1655).useAnimatedStyle;
  const tmp4 = streamKey(1655);
  items[1] = streamKey(1655).interpolate;
  items[2] = longPressProgress;
  items[3] = 0.9;
  let c0;
  let c1;
  dependencyMap = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class StreamVolumeMovedHintTsx1 {
    constructor() {
      let items;
      let items1;
      const obj = { transform: items1 };
      const obj2 = { scale: _undefined(_undefined2.get(), [0, 1], items) };
      items = [1, c2];
      items1 = [obj2];
      return obj;
    }
  }
  let items1 = [tmp6, tmp7, tmp8];
  StreamVolumeMovedHintTsx1.__closure = items1;
  StreamVolumeMovedHintTsx1.__workletHash = 3187140271576;
  StreamVolumeMovedHintTsx1.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(StreamVolumeMovedHintTsx1);
  state = StreamVolumeMovedStore.useState((hintStreamKey) => hintStreamKey.hintStreamKey === streamKey);
  const intl = tmp2(1113).intl;
  const stringResult = intl.string(streamKey(1113).t["6nKlgr"]);
  dependencyMap = stringResult;
  const items2 = [streamKey];
  const effect = react.useEffect(() => () => closure_2_6(streamKey), items2);
  const items3 = [state, stringResult];
  const effect1 = react.useEffect(() => {
    const tmp = state;
    if (tmp) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(c2);
    }
  }, items3);
  let tmp14 = null;
  if (state) {
    let obj2 = { style: items4, children: null };
    items4 = [tmp.pill, animatedStyle];
    View = state(1655).View;
    tmp14 = <View style={tmp.container} pointerEvents="none">{null}</View>;
  }
  return tmp14;
};
