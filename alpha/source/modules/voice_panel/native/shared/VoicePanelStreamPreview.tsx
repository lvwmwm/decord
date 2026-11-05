// Module ID: 15119
// Function ID: 15120
// Name: VoicePanelStreamPreview
// Dependencies: [19, 17, 6852, 502, 21, 1652, 5770, 5143, 575, 12248, 504, 6855, 5380, 5854, 5763, 1113, 2]
// Exports: VoicePanelStreamPreview

// Module 15119 (VoicePanelStreamPreview)
import nativeDefault from "native" /* 575 */;
import components_Button_Button from "components/Button/Button" /* 5770 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6855 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 12248 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6852 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import module_1652_mod from "module_1652" /* 1652 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

let Pressable;
let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let tmp2;
const FastImageDefault = tmp2(5854);
({ StyleSheet: c3, View: closure_4, Pressable } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let module_1652 = module_1652_mod;
let closure_9 = module_1652.createAnimatedComponent(Pressable);
module_1652 = module_1652_mod;
let closure_10 = module_1652.createAnimatedComponent(components_Button_Button.Button);
let closure_11 = { duration: 200 };
let createStyles = createStyles_mod;
let obj = { roundedCard: size, streamPreviewImage: { position: "absolute", width: "100%", height: "100%", opacity: 0.5 }, ownStreamTextContainer: obj2, ownStreamText: obj3 };
size = { position: "absolute", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_16 };
obj3 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
let closure_13 = { code: "(function VoicePanelStreamPreviewTsx1(){let[mode,withTiming,OPACITY_TIMING]=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};})" };
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx");

export function VoicePanelStreamPreview(stream) {
  let Text;
  let View3;
  let disabled;
  let intl;
  let intl2;
  let items4;
  let layout;
  let obj4;
  let obj5;
  let obj7;
  let obj9;
  let onPress;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp18;
  let tmp22Result;
  stream = stream.stream;
  ({ disabled, onPress, layout } = stream);
  const mode = stream.mode;
  let tmp = closure_12();
  let tmp2 = importDefault;
  let guildId;
  const tmp4 = useFetchStreamPreviewDefault;
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
  let obj = stream(504);
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
  const items2 = [closure_13, mode, , ];
  const useAnimatedStyle = stream(1652).useAnimatedStyle;
  stream(1652);
  items2[2] = stream(5380).withTiming;
  items2[3] = closure_11;
  let c0;
  let c1;
  let c2;
  [tmp11, tmp12, tmp13, tmp14] = items2;
  class VoicePanelStreamPreviewTsx1 {
    constructor() {
      let obj2;
      const obj = c0;
      if (null == c0) {
        obj2 = { opacity: 1 };
      } else {
        let num = 1;
        const tmp = c1;
        if ("pip" === obj.get()) {
          num = 0;
        }
        obj2 = { opacity: tmp(num, c2) };
      }
      return obj2;
    }
  }
  const items3 = [tmp12, tmp13, tmp14];
  VoicePanelStreamPreviewTsx1.__closure = items3;
  VoicePanelStreamPreviewTsx1.__workletHash = 4349610028794;
  VoicePanelStreamPreviewTsx1.__initData = tmp11;
  let obj2 = { layout, onPress, style: tmp.roundedCard, disabled: tmp18, accessible: false, children: items4 };
  tmp18 = disabled;
  const animatedStyle = useAnimatedStyle(VoicePanelStreamPreviewTsx1);
  const tmp16 = closure_8;
  const tmp17 = closure_9;
  if (!disabled) {
    tmp18 = stateFromStores;
  }
  let tmp19 = null;
  if (null != previewUrl) {
    const obj3 = { layout, style: tmp.streamPreviewImage, children: closure_7(FastImageDefault, obj4) };
    const View = module_1652.View;
    obj4 = { source: obj5, style: absoluteFill.absoluteFill, resizeMode: "cover" };
    obj5 = { uri: previewUrl };
    tmp19 = closure_7(View, obj3);
  }
  items4 = [tmp19, ];
  const obj6 = { layout, children: closure_7(View3, obj7) };
  const View2 = module_1652.View;
  obj7 = { style: animatedStyle, children: tmp22Result };
  View3 = module_1652.View;
  if (stateFromStores) {
    const obj8 = { style: tmp.ownStreamTextContainer, children: closure_7(Text, obj9) };
    obj9 = { variant: "body-sm/semibold", color: "text-overlay-light", style: tmp.ownStreamText, children: intl2.string(stream(1113).t["ro/HN8"]) };
    Text = tmp8(5763).Text;
    intl2 = tmp8(1113).intl;
    tmp22Result = tmp22(closure_4, obj8);
  } else {
    const obj10 = { layout, disabled, text: intl.string(stream(1113).t["7Xq/nV"]), size: "sm", variant: "primary-overlay", onPress };
    intl = tmp8(1113).intl;
    tmp22Result = tmp22(closure_10, obj10);
  }
  items4[1] = closure_7(View2, obj6);
  return tmp16(tmp17, obj2);
}
