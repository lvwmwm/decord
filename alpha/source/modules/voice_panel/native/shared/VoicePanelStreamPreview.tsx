// Module ID: 13158
// Function ID: 13159
// Name: VoicePanelStreamPreview
// Dependencies: [19, 17, 5897, 502, 21, 4850, 5379, 5092, 587, 558, 576, 11174, 5900, 504, 5093, 6761, 6156, 5088, 1126, 2]

// Module 13158 (VoicePanelStreamPreview)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 5093 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import StreamKeyUtils from "StreamKeyUtils" /* 5900 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4850 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const __initData = { code: "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()===\"pip\"?0:1,OPACITY_TIMING)};}" };
const __initData2 = { code: "function VoicePanelStreamPreviewTsx2(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}" };
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelStreamPreview(mode) {
  let Text;
  let disabled;
  let first;
  let intl;
  let intl2;
  let items2;
  let layout;
  let obj10;
  let obj6;
  let obj9;
  let onPress;
  let tmp13;
  let tmp14;
  const tmp = mode;
  let tmp2 = dependencyMap;
  let obj = mode(576);
  const cResult = obj.c(26);
  mode = mode.mode;
  const stream = mode.stream;
  ({ disabled, onPress, layout } = mode);
  const tmp4 = closure_12();
  let guildId;
  const tmp6 = stream(11174);
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
  const previewUrl = tmp6(guildId, channelId, ownerId).previewUrl;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore, AuthenticationStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== stream) {
    const fn = function u() {
      let tmp2 = null != stream && tmp.ownerId === AuthenticationStore.getId();
      if (tmp2) {
        const getStreamerActiveStreamMetadataForStream = ApplicationStreamingStore.getStreamerActiveStreamMetadataForStream;
        const obj = StreamKeyUtils;
        tmp2 = null == getStreamerActiveStreamMetadataForStream(obj.encodeStreamKey(tmp));
      }
      return tmp2;
    };
    const items1 = [stream];
    cResult[1] = stream;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp14 = items1;
    tmp13 = fn;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp13, tmp14);
  const tmpResult2 = tmp(4850);
  class M {
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
  let obj2 = { mode, withTiming: tmp(5093).withTiming, OPACITY_TIMING };
  M.__closure = obj2;
  M.__workletHash = 8648991604611;
  M.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(M);
  if (cResult[4] === layout) {
    if (cResult[5] === tmp4.streamPreviewImage) {
      let tmp18;
      let tmp24Result;
      if (cResult[6] === previewUrl) {
        tmp18 = cResult[7];
      }
      if (cResult[8] === disabled) {
        if (cResult[9] === stateFromStores) {
          if (cResult[10] === layout) {
            if (cResult[11] === onPress) {
              if (cResult[12] === tmp4.ownStreamText) {
                let tmp23;
                if (cResult[13] === tmp4.ownStreamTextContainer) {
                  tmp23 = cResult[14];
                }
                if (cResult[15] === animatedStyle) {
                  if (cResult[16] === layout) {
                    let tmp28;
                    if (cResult[17] === tmp23) {
                      tmp28 = cResult[18];
                    }
                    if (cResult[19] === layout) {
                      if (cResult[20] === onPress) {
                        if (cResult[21] === tmp4.roundedCard) {
                          if (cResult[22] === (disabled || stateFromStores)) {
                            if (cResult[23] === tmp18) {
                              let tmp31;
                              if (cResult[24] === tmp28) {
                                tmp31 = cResult[25];
                              }
                              return tmp31;
                            }
                          }
                        }
                      }
                    }
                    const obj3 = { layout, onPress, style: tmp4.roundedCard, disabled: disabled || stateFromStores, accessible: false, children: items2 };
                    items2 = [tmp18, tmp28];
                    const tmp34 = closure_8(closure_9, obj3);
                    cResult[19] = layout;
                    cResult[20] = onPress;
                    cResult[21] = tmp4.roundedCard;
                    cResult[22] = disabled || stateFromStores;
                    cResult[23] = tmp18;
                    cResult[24] = tmp28;
                    cResult[25] = tmp34;
                    tmp31 = tmp34;
                  }
                }
                const obj4 = { style: animatedStyle, layout, children: tmp23 };
                const tmp30 = closure_7(stream(6761), obj4);
                cResult[15] = animatedStyle;
                cResult[16] = layout;
                cResult[17] = tmp23;
                cResult[18] = tmp30;
                tmp28 = tmp30;
              }
            }
          }
        }
      }
      if (stateFromStores) {
        const obj5 = { style: tmp4.ownStreamTextContainer, children: closure_7(Text, obj6) };
        obj6 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp4.ownStreamText, children: intl2.string(tmp(1126).t["ro/HN8"]) };
        Text = tmp(5088).Text;
        intl2 = tmp(1126).intl;
        tmp24Result = tmp24(closure_4, obj5);
      } else {
        const obj7 = { layout, disabled, text: intl.string(tmp(1126).t["7Xq/nV"]), size: "sm", variant: "primary-overlay", onPress };
        intl = tmp(1126).intl;
        tmp24Result = tmp24(closure_10, obj7);
      }
      cResult[8] = disabled;
      cResult[9] = stateFromStores;
      cResult[10] = layout;
      cResult[11] = onPress;
      cResult[12] = tmp4.ownStreamText;
      cResult[13] = tmp4.ownStreamTextContainer;
      cResult[14] = tmp24Result;
      tmp23 = tmp24Result;
    }
  }
  let tmp19 = null;
  if (null != previewUrl) {
    const obj8 = { layout, style: tmp4.streamPreviewImage, children: closure_7(stream(6156), obj9) };
    obj9 = { source: obj10, style: closure_3.absoluteFill, resizeMode: "cover" };
    obj10 = { uri: previewUrl };
    const tmp5Result = stream(6761);
    tmp19 = closure_7(tmp5Result, obj8);
  }
  cResult[4] = layout;
  cResult[5] = tmp4.streamPreviewImage;
  cResult[6] = previewUrl;
  cResult[7] = tmp19;
  tmp18 = tmp19;
}) : (function VoicePanelStreamPreview(mode) {
  let Text;
  let disabled;
  let intl;
  let intl2;
  let items2;
  let layout;
  let obj10;
  let obj6;
  let obj7;
  let onPress;
  let tmp13;
  let tmp18Result;
  mode = mode.mode;
  const stream = mode.stream;
  ({ disabled, onPress, layout } = mode);
  const tmp = closure_12();
  let tmp2 = stream;
  let guildId;
  const tmp4 = stream(11174);
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
  let obj2 = mode(4850);
  const fn = function v() {
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
  };
  fn.__closure = { mode, withTiming: mode(5093).withTiming, OPACITY_TIMING };
  fn.__workletHash = 1723503693792;
  fn.__initData = __initData2;
  const obj4 = { layout, onPress, style: tmp.roundedCard, disabled: tmp13, accessible: false, children: items2 };
  tmp13 = disabled;
  ({ mode, withTiming: mode(5093).withTiming, OPACITY_TIMING });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const tmp11 = closure_8;
  const tmp12 = closure_9;
  if (!disabled) {
    tmp13 = stateFromStores;
  }
  let tmp14 = null;
  if (null != previewUrl) {
    const obj5 = { layout, style: tmp.streamPreviewImage, children: closure_7(tmp2(6156), obj6) };
    obj6 = { source: obj7, style: closure_3.absoluteFill, resizeMode: "cover" };
    obj7 = { uri: previewUrl };
    const tmp2Result = tmp2(6761);
    tmp14 = closure_7(tmp2Result, obj5);
  }
  items2 = [tmp14, ];
  const obj8 = { style: animatedStyle, layout, children: tmp18Result };
  const tmp2Result2 = tmp2(6761);
  if (stateFromStores) {
    const obj9 = { style: tmp.ownStreamTextContainer, children: closure_7(Text, obj10) };
    obj10 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.ownStreamText, children: intl2.string(mode(1126).t["ro/HN8"]) };
    Text = tmp8(5088).Text;
    intl2 = tmp8(1126).intl;
    tmp18Result = tmp18(closure_4, obj9);
  } else {
    const obj11 = { layout, disabled, text: intl.string(mode(1126).t["7Xq/nV"]), size: "sm", variant: "primary-overlay", onPress };
    intl = tmp8(1126).intl;
    tmp18Result = tmp18(closure_10, obj11);
  }
  items2[1] = closure_7(tmp2Result2, obj8);
  return tmp11(tmp12, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export const VoicePanelStreamPreview = tmp6;
