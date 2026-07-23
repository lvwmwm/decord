// Module ID: 11961
// Function ID: 92435
// Name: VoicePanelStreamPreview
// Dependencies: [31, 27, 4149, 1194, 33, 3991, 4543, 4130, 689, 10789, 566, 4194, 4131, 7589, 4126, 1212, 2]
// Exports: VoicePanelStreamPreview

// Module 11961 (VoicePanelStreamPreview)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import importDefaultResult from "module_3991";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult1 from "module_3991";

let closure_6;
let closure_7;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = require("module_3991").createAnimatedComponent(get_ActivityIndicator.Pressable);
let closure_9 = require("module_3991").createAnimatedComponent(require("Button").Button);
let closure_10 = { duration: 200 };
let obj = {};
obj = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.roundedCard = obj;
obj.streamPreviewImage = { position: "absolute", width: "100%", height: "100%", opacity: 0.5 };
obj.ownStreamTextContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = { textAlign: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.ownStreamText = _createForOfIteratorHelperLoose;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = { code: "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export const VoicePanelStreamPreview = function VoicePanelStreamPreview(mode) {
  let disabled;
  let layout;
  let onPress;
  mode = mode.mode;
  const stream = mode.stream;
  ({ disabled, onPress, layout } = mode);
  let tmp = callback2();
  let guildId;
  if (null != stream) {
    guildId = stream.guildId;
  }
  let channelId;
  if (null != stream) {
    channelId = stream.channelId;
  }
  let ownerId;
  if (null != stream) {
    ownerId = stream.ownerId;
  }
  const previewUrl = stream(10789)(guildId, channelId, ownerId).previewUrl;
  let obj = mode(566);
  const items = [_isNativeReflectConstruct, closure_5];
  const items1 = [stream];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null != stream;
    if (tmp) {
      tmp = stream.ownerId === outer1_5.getId();
    }
    if (tmp) {
      tmp = null == outer1_4.getStreamerActiveStreamMetadataForStream(mode(outer1_2[11]).encodeStreamKey(stream));
      const obj = mode(outer1_2[11]);
    }
    return tmp;
  }, items1);
  let obj1 = mode(3991);
  class T {
    constructor() {
      if (null == mode) {
        obj = {};
        num3 = 1;
        obj.opacity = 1;
      } else {
        obj = {};
        tmp = mode;
        tmp2 = outer1_2;
        num = 12;
        obj2 = mode(outer1_2[12]);
        tmp3 = mode;
        num2 = 1;
        str = "pip";
        if ("pip" === mode.get()) {
          num2 = 0;
        }
        tmp4 = outer1_10;
        obj.opacity = obj2.withTiming(num2, outer1_10);
      }
      return obj;
    }
  }
  obj = { mode, withTiming: mode(4131).withTiming, OPACITY_TIMING: closure_10 };
  T.__closure = obj;
  T.__workletHash = 15496474861955;
  T.__initData = closure_12;
  obj = { layout, onPress, style: tmp.roundedCard };
  let tmp10 = disabled;
  const animatedStyle = obj1.useAnimatedStyle(T);
  if (!disabled) {
    tmp10 = stateFromStores;
  }
  obj.disabled = tmp10;
  obj.accessible = false;
  let tmp11 = null;
  if (null != previewUrl) {
    obj1 = { layout };
    let obj2 = { uri: previewUrl };
    obj1.source = obj2;
    obj1.style = tmp.streamPreviewImage;
    obj1.resizeMode = "cover";
    tmp11 = callback(stream(3991).Image, obj1);
  }
  const items2 = [tmp11, ];
  const obj3 = { style: animatedStyle, layout };
  const tmp15 = callback;
  const tmp2 = stream(10789);
  const tmp8 = closure_7;
  const tmp9 = closure_8;
  if (stateFromStores) {
    const obj4 = { style: tmp.ownStreamTextContainer };
    const obj5 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.ownStreamText };
    const intl2 = mode(1212).intl;
    obj5.children = intl2.string(mode(1212).t["ro/HN8"]);
    obj4.children = tmp17(mode(4126).Text, obj5);
    let tmp17Result = tmp17(View, obj4);
  } else {
    const obj6 = { layout, disabled };
    const intl = mode(1212).intl;
    obj6.text = intl.string(mode(1212).t["7Xq/nV"]);
    obj6.size = "sm";
    obj6.variant = "primary-overlay";
    obj6.onPress = onPress;
    tmp17Result = tmp17(closure_9, obj6);
  }
  obj3.children = tmp17Result;
  items2[1] = tmp15(stream(7589), obj3);
  obj.children = items2;
  return tmp8(tmp9, obj);
};
