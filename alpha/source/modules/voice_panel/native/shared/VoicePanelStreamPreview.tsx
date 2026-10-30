// Module ID: 14852
// Function ID: 14853
// Name: VoicePanelStreamPreview
// Dependencies: [19, 17, 6708, 502, 21, 5090, 5629, 5009, 575, 12003, 504, 6711, 5249, 7235, 5712, 5619, 1114, 2]
// Exports: VoicePanelStreamPreview

// Module 14852 (VoicePanelStreamPreview)
import nativeDefault from "native" /* 575 */;
import timing from "timing" /* 5249 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6711 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 5090 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let Pressable;
let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
({ StyleSheet: c3, View: closure_4, Pressable } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_9 = ReanimatedRexport.createAnimatedComponent(Pressable);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_10 = ReanimatedRexport.createAnimatedComponent(components_Button_Button.Button);
const OPACITY_TIMING = { duration: 200 };
let createStyles = createStyles_mod;
let obj = { roundedCard: size, streamPreviewImage: { position: "absolute", width: "100%", height: "100%", opacity: 0.5 }, ownStreamTextContainer: obj2, ownStreamText: obj3 };
size = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_16 };
obj3 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
const __initData = { code: "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}" };
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export function VoicePanelStreamPreview(mode) {
  let Text;
  let disabled;
  let intl;
  let intl2;
  let items2;
  let layout;
  let obj11;
  let obj6;
  let obj7;
  let obj9;
  let onPress;
  let tmp13;
  let tmp18Result;
  let tmp2Result4;
  mode = mode.mode;
  const stream = mode.stream;
  ({ disabled, onPress, layout } = mode);
  const tmp = closure_12();
  let tmp2 = stream;
  let guildId;
  const tmp4 = stream(12003);
  if (stream != null) {
    guildId = stream.guildId;
  }
  let channelId;
  if (stream != null) {
    channelId = stream.channelId;
  }
  let ownerId;
  if (stream != null) {
    ownerId = stream.ownerId;
  }
  const previewUrl = tmp4(guildId, channelId, ownerId).previewUrl;
  let obj = mode(504);
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const items1 = [stream];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != stream && tmp.ownerId === AuthenticationStore.getId();
    if (tmp2) {
      const getStreamerActiveStreamMetadataForStream = ApplicationStreamingStore.getStreamerActiveStreamMetadataForStream;
      const obj = StreamKeyUtils;
      tmp2 = null == getStreamerActiveStreamMetadataForStream(obj.encodeStreamKey(tmp));
    }
    return tmp2;
  }, items1);
  let obj2 = mode(5090);
  class T {
    constructor() {
      let obj2;
      const obj = mode;
      if (null == mode) {
        obj2 = { opacity: 1 };
      } else {
        const withTiming = timing.withTiming;
        let num = 1;
        timing;
        if ("pip" === obj.get()) {
          num = 0;
        }
        obj2 = { opacity: withTiming(num, OPACITY_TIMING) };
      }
      return obj2;
    }
  }
  T.__closure = { mode, withTiming: mode(5249).withTiming, OPACITY_TIMING };
  T.__workletHash = 15496474861955;
  T.__initData = __initData;
  const obj4 = { layout, onPress, style: tmp.roundedCard, disabled: tmp13, accessible: false, children: items2 };
  tmp13 = disabled;
  ({ mode, withTiming: mode(5249).withTiming, OPACITY_TIMING });
  const animatedStyle = obj2.useAnimatedStyle(T);
  const tmp11 = closure_8;
  const tmp12 = closure_9;
  if (!disabled) {
    tmp13 = stateFromStores;
  }
  let tmp14 = null;
  if (null != previewUrl) {
    const obj5 = { layout, style: tmp.streamPreviewImage, children: closure_7(tmp2(5712), obj6) };
    obj6 = { source: obj7, style: absoluteFill.absoluteFill, resizeMode: "cover" };
    obj7 = { uri: previewUrl };
    const tmp2Result = tmp2(7235);
    tmp14 = closure_7(tmp2Result, obj5);
  }
  items2 = [tmp14, ];
  const obj8 = { layout, children: closure_7(tmp2Result4, obj9) };
  obj9 = { style: animatedStyle, children: tmp18Result };
  const tmp2Result3 = tmp2(7235);
  tmp2Result4 = tmp2(7235);
  if (stateFromStores) {
    const obj10 = { style: tmp.ownStreamTextContainer, children: closure_7(Text, obj11) };
    obj11 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.ownStreamText, children: intl2.string(mode(1114).t["ro/HN8"]) };
    Text = tmp8(5619).Text;
    intl2 = tmp8(1114).intl;
    tmp18Result = tmp18(closure_4, obj10);
  } else {
    const obj12 = { layout, disabled, text: intl.string(mode(1114).t["7Xq/nV"]), size: "sm", variant: "primary-overlay", onPress };
    intl = tmp8(1114).intl;
    tmp18Result = tmp18(closure_10, obj12);
  }
  items2[1] = closure_7(tmp2Result3, obj8);
  return tmp11(tmp12, obj4);
}
