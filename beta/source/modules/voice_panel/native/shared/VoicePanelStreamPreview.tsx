// Module ID: 12612
// Function ID: 12613
// Name: VoicePanelStreamPreview
// Dependencies: [19, 17, 4858, 502, 21, 4566, 5281, 4836, 576, 9522, 504, 4888, 4837, 6494, 4832, 1115, 2]
// Exports: VoicePanelStreamPreview

// Module 12612 (VoicePanelStreamPreview)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4837 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4888 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let Pressable;
let c3;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
({ View: c3, Pressable } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_9 = ReanimatedRexport.createAnimatedComponent(components_Button_Button.Button);
const OPACITY_TIMING = { duration: 200 };
let createStyles = createStyles_mod;
let obj = { roundedCard: size, streamPreviewImage: { position: "absolute", width: "100%", height: "100%", opacity: 0.5 }, ownStreamTextContainer: obj2, ownStreamText: obj3 };
size = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_16 };
obj3 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const __initData = { code: "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}" };
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export const VoicePanelStreamPreview = function VoicePanelStreamPreview(mode) {
  let Text;
  let disabled;
  let intl;
  let intl2;
  let items2;
  let layout;
  let obj6;
  let obj9;
  let onPress;
  let tmp13;
  let tmp16Result;
  mode = mode.mode;
  const stream = mode.stream;
  ({ disabled, onPress, layout } = mode);
  const tmp = closure_11();
  let tmp2 = stream;
  let guildId;
  const tmp4 = stream(9522);
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
  let obj2 = mode(4566);
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
  T.__closure = { mode, withTiming: mode(4837).withTiming, OPACITY_TIMING };
  T.__workletHash = 15496474861955;
  T.__initData = __initData;
  const obj4 = { layout, onPress, style: tmp.roundedCard, disabled: tmp13, accessible: false, children: items2 };
  tmp13 = disabled;
  ({ mode, withTiming: mode(4837).withTiming, OPACITY_TIMING });
  const animatedStyle = obj2.useAnimatedStyle(T);
  const tmp11 = closure_7;
  const tmp12 = closure_8;
  if (!disabled) {
    tmp13 = stateFromStores;
  }
  let tmp14 = null;
  if (null != previewUrl) {
    const obj5 = { layout, source: obj6, style: tmp.streamPreviewImage, resizeMode: "cover" };
    obj6 = { uri: previewUrl };
    tmp14 = closure_6(tmp2(4566).Image, obj5);
  }
  items2 = [tmp14, ];
  const obj7 = { style: animatedStyle, layout, children: tmp16Result };
  const tmp2Result = tmp2(6494);
  if (stateFromStores) {
    const obj8 = { style: tmp.ownStreamTextContainer, children: closure_6(Text, obj9) };
    obj9 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.ownStreamText, children: intl2.string(mode(1115).t["ro/HN8"]) };
    Text = tmp8(4832).Text;
    intl2 = tmp8(1115).intl;
    tmp16Result = tmp16(closure_3, obj8);
  } else {
    const obj10 = { layout, disabled, text: intl.string(mode(1115).t["7Xq/nV"]), size: "sm", variant: "primary-overlay", onPress };
    intl = tmp8(1115).intl;
    tmp16Result = tmp16(closure_9, obj10);
  }
  items2[1] = closure_6(tmp2Result, obj7);
  return tmp11(tmp12, obj4);
};
