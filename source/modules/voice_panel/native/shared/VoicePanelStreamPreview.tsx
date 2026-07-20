// Module ID: 11941
// Function ID: 92333
// Name: VoicePanelStreamPreview
// Dependencies: []
// Exports: VoicePanelStreamPreview

// Module 11941 (VoicePanelStreamPreview)
importAll(dependencyMap[0]);
const tmp3 = arg1(dependencyMap[1]);
const View = tmp3.View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]).createAnimatedComponent(tmp3.Pressable);
const importDefaultResult = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[5]).createAnimatedComponent(arg1(dependencyMap[6]).Button);
let closure_10 = { duration: 200 };
let obj2 = arg1(dependencyMap[7]);
let obj = {};
obj = { text: true, onPress: "/assets/.cache/intl/ZGVzaWdu", variant: null, MODE_NUMBER: "5489cb913a06f6a88877637630ce77b7", MODE_ALPHA_NUM: "pl.messages.5489cb913a06f6a88877637630ce77b7.compiled.messages", backgroundColor: importDefault(dependencyMap[8]).colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.roundedCard = obj;
obj.streamPreviewImage = { 0: "text-feedback-warning", 9223372036854775807: "text-xs/medium", 9223372036854775807: "text-feedback-warning", -9223372036854775808: true };
const importDefaultResult1 = importDefault(dependencyMap[5]);
obj.ownStreamTextContainer = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SCRIM, borderRadius: importDefault(dependencyMap[8]).radii.sm, marginHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
obj2 = { textAlign: "center", paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, paddingVertical: importDefault(dependencyMap[8]).space.PX_16 };
obj.ownStreamText = obj2;
let closure_11 = obj2.createStyles(obj);
let closure_12 = { code: "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}" };
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SCRIM, borderRadius: importDefault(dependencyMap[8]).radii.sm, marginHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export const VoicePanelStreamPreview = function VoicePanelStreamPreview(mode) {
  let disabled;
  let layout;
  let onPress;
  mode = mode.mode;
  const arg1 = mode;
  const stream = mode.stream;
  const importDefault = stream;
  ({ disabled, onPress, layout } = mode);
  const tmp = callback2();
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
  const previewUrl = importDefault(dependencyMap[9])(guildId, channelId, ownerId).previewUrl;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_4, closure_5];
  const items1 = [stream];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null != stream;
    if (tmp) {
      tmp = stream.ownerId === id.getId();
    }
    if (tmp) {
      tmp = null == streamerActiveStreamMetadataForStream.getStreamerActiveStreamMetadataForStream(mode(closure_2[11]).encodeStreamKey(stream));
      const obj = mode(closure_2[11]);
    }
    return tmp;
  }, items1);
  let obj1 = arg1(dependencyMap[5]);
  class T {
    constructor() {
      if (null == mode) {
        obj = {};
        num3 = 1;
        obj.opacity = 1;
      } else {
        obj = {};
        tmp = mode;
        tmp2 = closure_2;
        num = 12;
        obj2 = mode(closure_2[12]);
        tmp3 = mode;
        num2 = 1;
        str = "pip";
        if ("pip" === mode.get()) {
          num2 = 0;
        }
        tmp4 = closure_10;
        obj.opacity = obj2.withTiming(num2, closure_10);
      }
      return obj;
    }
  }
  obj = { mode, withTiming: arg1(dependencyMap[12]).withTiming, OPACITY_TIMING: closure_10 };
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
    const obj2 = { uri: previewUrl };
    obj1.source = obj2;
    obj1.style = tmp.streamPreviewImage;
    obj1.resizeMode = "cover";
    tmp11 = callback(importDefault(dependencyMap[5]).Image, obj1);
  }
  const items2 = [tmp11, ];
  const obj3 = { style: animatedStyle, layout };
  const tmp15 = callback;
  const tmp2 = importDefault(dependencyMap[9]);
  const tmp8 = closure_7;
  const tmp9 = closure_8;
  if (stateFromStores) {
    const obj4 = { style: tmp.ownStreamTextContainer };
    const obj5 = { INTEGRATION_CREATE: null, ConstraintReasonCode: "flex-start", style: tmp.ownStreamText };
    const intl2 = arg1(dependencyMap[15]).intl;
    obj5.children = intl2.string(arg1(dependencyMap[15]).t.ro/HN8);
    obj4.children = tmp17(arg1(dependencyMap[14]).Text, obj5);
    let tmp17Result = tmp17(View, obj4);
  } else {
    const obj6 = { layout, disabled };
    const intl = arg1(dependencyMap[15]).intl;
    obj6.text = intl.string(arg1(dependencyMap[15]).t.7Xq/nV);
    obj6.size = "sm";
    obj6.variant = "primary-overlay";
    obj6.onPress = onPress;
    tmp17Result = tmp17(closure_9, obj6);
  }
  obj3.children = tmp17Result;
  items2[1] = tmp15(importDefault(dependencyMap[13]), obj3);
  obj.children = items2;
  return tmp8(tmp9, obj);
};
