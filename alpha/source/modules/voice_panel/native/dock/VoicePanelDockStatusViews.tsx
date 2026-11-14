// Module ID: 19203
// Function ID: 19204
// Name: VoicePanelDockStatusViews
// Dependencies: [19, 17, 6369, 5155, 5177, 5248, 6941, 1388, 19202, 12009, 21, 5306, 575, 1380, 19204, 11984, 504, 19205, 7720, 1187, 7219, 5954, 1113, 8094, 7432, 5929, 6351, 1655, 5548, 7894, 14246, 5902, 5939, 14854, 14856, 6020, 2]
// Exports: DockChannelIcon, DockChannelTitle, DockFace, DockUserTitle

// Module 19203 (VoicePanelDockStatusViews)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import timing_timing from "timing/timing" /* 5548 */;
import spring_spring from "spring/spring" /* 5939 */;
import useChannelName from "useChannelName" /* 5954 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7219 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import VoicePanelDockStatusStore from "VoicePanelDockStatusStore" /* 19202 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SoundboardStore from "SoundboardStore" /* 6369 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5177 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import SpeakingStore from "SpeakingStore" /* 6941 */;
import UserStore from "UserStore" /* 1388 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 12009 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

let DOCK_TILE_RADIUS;
let DOCK_TILE_SIZE;
let closure_15;
let closure_16;
let map1;
let num;
let obj2;
let obj3;
let result;
let size;
let size1;
let size2;
let size3;
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
let closure_12 = VoicePanelDockStatusStore.useDockUserPlayingSoundboardId;
({ DOCK_FADE_TIMING: map1, DOCK_TILE_RADIUS, DOCK_TILE_SIZE } = VoicePanelDockConstants);
const DOCK_GLYPH_GAP = VoicePanelDockConstants.DOCK_GLYPH_GAP;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
const sum = DOCK_TILE_SIZE + 4;
let createStyles = createStyles_mod;
let obj = { face: obj2, avatar: size, avatarImage: { width: "100%", height: "100%" }, ring: size1, halo: { position: "absolute", top: "50%", left: "50%", width: 50, height: 50, marginTop: -25, marginLeft: -25 }, haloDisc: obj3, guildIcon: size2, guildIconAsset: { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS }, avatarShadow: size3, titleRow: { flexDirection: "row", alignItems: "center", gap: DOCK_GLYPH_GAP }, title: { flexShrink: 1 }, soundboardEmoji: { width: 16, height: 16 }, soundboardEmojiText: { height: 16, fontSize: num, lineHeight: 20 } };
obj2 = { alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_SIZE / 2, overflow: "hidden" };
size1 = { position: "absolute", top: "50%", left: "50%", marginTop: result, marginLeft: result, width: sum, height: sum, borderRadius: sum / 2, borderWidth: 1 };
result = -sum / 2;
obj3 = { borderRadius: 25 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
size2 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS, outlineWidth: 1, outlineColor: nativeDefault.colors.BORDER_SUBTLE, outlineStyle: "solid", outlineOffset: -1 };
size3 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: nativeDefault.radii.round };
num = undefined;
if (PlatformUtils.isIOS()) {
  num = 16;
}
let closure_18 = createStyles(obj);
let closure_19 = { code: "(function VoicePanelDockStatusViewsTsx1(){let[contentFade]=this.__closure;return{opacity:contentFade.get()};})" };
let closure_20 = { code: "(function VoicePanelDockStatusViewsTsx2(){let[progress,DOCK_TILE_SIZE,RING_BOX]=this.__closure;const value=progress.get();const startScale=DOCK_TILE_SIZE/RING_BOX;return{opacity:Math.min(value*2,1),transform:[{scale:startScale+(1-startScale)*value}]};})" };
let closure_21 = react.memo(function DockSpeakingRing(speaking) {
  let items3;
  let sharedValue;
  let tmp10;
  let tmp11;
  let tmp8;
  let tmp9;
  speaking = speaking.speaking;
  let ICON_VOICE_SPEAKING = speaking.color;
  if (ICON_VOICE_SPEAKING === undefined) {
    ICON_VOICE_SPEAKING = sharedValue(575).colors.ICON_VOICE_SPEAKING;
  }
  const tmp3 = closure_18();
  let obj = speaking(5902);
  const token = obj.useToken(ICON_VOICE_SPEAKING);
  let obj2 = speaking(1655);
  sharedValue = obj2.useSharedValue(0);
  let items = [sharedValue, speaking];
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring_spring.withSpring;
    spring_spring;
    if (speaking) {
      num = 1;
    }
    const result = set(withSpring(num, { mass: 0.3, damping: 16, stiffness: 400 }));
  }, items);
  const items1 = [closure_20, sharedValue, DOCK_TILE_SIZE, closure_17];
  let c0;
  let c1;
  let c2;
  [tmp8, tmp9, tmp10, tmp11] = items1;
  const obj3 = speaking(1655);
  class VoicePanelDockStatusViewsTsx2 {
    constructor() {
      let items;
      const value = _undefined.get();
      const result = c1 / c2;
      const obj = { opacity: Math.min(2 * value, 1), transform: items };
      items = [];
      const obj2 = { scale: result + (1 - result) * value };
      items[0] = obj2;
      return obj;
    }
  }
  const items2 = [tmp9, tmp10, tmp11];
  VoicePanelDockStatusViewsTsx2.__closure = items2;
  VoicePanelDockStatusViewsTsx2.__workletHash = 15493241536198;
  VoicePanelDockStatusViewsTsx2.__initData = tmp8;
  const animatedStyle = obj3.useAnimatedStyle(VoicePanelDockStatusViewsTsx2);
  const obj4 = { style: items3, pointerEvents: "none" };
  items3 = [tmp3.ring, { borderColor: token }, animatedStyle];
  return closure_15(sharedValue(1655).View, obj4);
});
let closure_22 = { code: "(function VoicePanelDockStatusViewsTsx3(){let[progress,RING_BOX,HALO_SPEAKING_SIZE]=this.__closure;const value=progress.get();const startScale=RING_BOX/HALO_SPEAKING_SIZE;return{opacity:0.15*Math.min(value*2,1),transform:[{scale:startScale+(1-startScale)*value}]};})" };
let closure_23 = react.memo(function DockSpeakerHalo(isSpeaking) {
  let items3;
  let items4;
  let obj6;
  let obj7;
  let sharedValue;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp9;
  isSpeaking = isSpeaking.isSpeaking;
  let ICON_VOICE_SPEAKING = isSpeaking.color;
  const userId = isSpeaking.userId;
  if (ICON_VOICE_SPEAKING === undefined) {
    ICON_VOICE_SPEAKING = sharedValue(575).colors.ICON_VOICE_SPEAKING;
  }
  const tmp3 = closure_18();
  let obj = isSpeaking(5902);
  const token = obj.useToken(ICON_VOICE_SPEAKING);
  let obj2 = isSpeaking(14854);
  const voicePanelDockSpeakerLevelProps = obj2.useVoicePanelDockSpeakerLevelProps();
  const obj3 = isSpeaking(1655);
  sharedValue = obj3.useSharedValue(0);
  let items = [sharedValue, isSpeaking];
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring_spring.withSpring;
    spring_spring;
    if (isSpeaking) {
      num = 1;
    }
    const result = set(withSpring(num, { mass: 0.3, damping: 16, stiffness: 400 }));
  }, items);
  const items1 = [closure_22, sharedValue, closure_17, 42];
  let c0;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items1;
  const obj4 = isSpeaking(1655);
  class VoicePanelDockStatusViewsTsx3 {
    constructor() {
      let items;
      const value = _undefined.get();
      const result = c1 / c2;
      const obj = { opacity: 0.15 * Math.min(2 * value, 1), transform: items };
      items = [];
      const obj2 = { scale: result + (1 - result) * value };
      items[0] = obj2;
      return obj;
    }
  }
  const items2 = [tmp10, tmp11, tmp12];
  VoicePanelDockStatusViewsTsx3.__closure = items2;
  VoicePanelDockStatusViewsTsx3.__workletHash = 4795763946999;
  VoicePanelDockStatusViewsTsx3.__initData = tmp9;
  const animatedStyle = obj4.useAnimatedStyle(VoicePanelDockStatusViewsTsx3);
  const obj5 = { style: items3, pointerEvents: "none", children: closure_15(tmp14, obj6) };
  items3 = [tmp3.halo, animatedStyle];
  View = sharedValue(1655).View;
  obj6 = { style: StyleSheet.absoluteFill, userId, minScale: 0.84, maxScale: 1, children: closure_15(View, obj7) };
  tmp14 = sharedValue(14856);
  const merged = Object.assign(voicePanelDockSpeakerLevelProps);
  obj7 = { style: items4 };
  items4 = [tmp3.haloDisc, { backgroundColor: token }];
  return closure_15(View, obj5);
});
let closure_24 = { code: "(function VoicePanelDockStatusViewsTsx4(){let[interpolate,dim,dimmedOpacity]=this.__closure;return{opacity:interpolate(dim.get(),[0,1],[1,dimmedOpacity])};})" };
size = size_mod;
let result1 = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockStatusViews.tsx");

export function DockChannelIcon(streaming) {
  let Avatar;
  let items4;
  let items5;
  let obj10;
  let obj5;
  let obj6;
  let obj9;
  let tmp13;
  let tmp2Result;
  let tmp2Result3;
  let tmp2Result4;
  streaming = streaming.streaming;
  let channelId;
  let guildId;
  const tmp = closure_18();
  const tmp4 = guildId(19204);
  const tmp4Result = tmp4(channelId(575).Shadow.SHADOW_MEDIUM);
  const context = react.useContext(guildId(11984));
  channelId = context.channelId;
  guildId = context.guildId;
  const items = [GuildStore];
  const items1 = [guildId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const items2 = [ChannelStore, UserStore];
  const items3 = [channelId, guildId];
  const obj2 = channelId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    if (null != guildId) {
      return null;
    } else {
      const channel = ChannelStore.getChannel(channelId);
      let first;
      if (channel != null) {
        const recipients = channel.recipients;
        if (recipients != null) {
          first = recipients[0];
        }
      }
      let user = null;
      if (null != first) {
        user = UserStore.getUser(first);
      }
      return user;
    }
  }, items3);
  if (null != stateFromStores) {
    const obj3 = { style: items4, children: closure_15(tmp2Result, obj5) };
    items4 = [tmp.guildIcon, ];
    const obj4 = { boxShadow: tmp4Result };
    items4[1] = obj4;
    obj5 = { streaming, children: closure_15(tmp2Result3, obj6) };
    obj6 = { guild: stateFromStores, size: channelId(7720).GuildIconSizes.SMALL_32, style: tmp.guildIconAsset };
    tmp2Result = guildId(19205);
    tmp2Result3 = guildId(7720);
    tmp13 = closure_15(View, obj3);
  } else {
    tmp13 = null;
    if (null != stateFromStores1) {
      const obj7 = { style: items5, children: closure_15(tmp2Result4, obj9) };
      items5 = [tmp.avatarShadow, ];
      const obj8 = { boxShadow: tmp4Result };
      items5[1] = obj8;
      obj9 = { streaming, children: closure_15(Avatar, obj10) };
      obj10 = { user: stateFromStores1, guildId: "Array", size: channelId(1187).AvatarSizes.REFRESH_MEDIUM_32 };
      tmp2Result4 = guildId(19205);
      Avatar = tmp5(1187).Avatar;
      tmp13 = closure_15(View, obj7);
    }
  }
  return tmp13;
}
export function DockChannelTitle() {
  let VoiceNormalIcon;
  let items4;
  let tmp = closure_18();
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = isRoleRequiredDefault;
    return tmp(ChannelStore.getChannel(channelId));
  }, items1);
  const items2 = [ChannelStore, UserStore, RelationshipStore];
  const items3 = [channelId];
  const obj3 = { style: tmp.titleRow, children: items4 };
  const obj2 = channelId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let channelName;
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const obj = useChannelName;
      channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
    } else {
      const intl = intl2.intl;
      channelName = intl.string(intl2.t.zLZPmk);
    }
    return channelName;
  }, items3);
  const tmp7 = closure_16;
  const tmp8 = View;
  if (stateFromStores) {
    VoiceNormalIcon = tmp4(8094).VoiceLockIcon;
  } else {
    VoiceNormalIcon = tmp4(7432).VoiceNormalIcon;
  }
  items4 = [, ];
  const obj4 = { size: "sm", color: nativeDefault.colors.ICON_DEFAULT };
  items4[0] = closure_15(VoiceNormalIcon, obj4);
  const obj5 = { variant: "body-md/medium", color: "text-default", lineClamp: 1, style: tmp.title, children: stateFromStores1 };
  items4[1] = closure_15(channelId(5929).Text, obj5);
  return tmp7(tmp8, obj3);
}
export function DockUserTitle(userId) {
  let closure_1;
  let items7;
  let items8;
  let ref;
  let str;
  let tmp12;
  let tmp13;
  userId = userId.userId;
  importDefault = undefined;
  let sharedValue;
  react = undefined;
  const dimmed = userId.dimmed;
  const tmp = closure_18();
  let obj = react;
  const context = react.useContext(require("VoicePanelStateContext"));
  const channelId = context.channelId;
  const guildId = context.guildId;
  const items = [UserStore];
  const items1 = [userId];
  const obj2 = userId(sharedValue[16]);
  const stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const obj3 = userId(sharedValue[26]);
  let name = obj3.useName(guildId, channelId, stateFromStores);
  const tmp7 = closure_12(channelId, userId);
  importDefault = tmp7;
  const items2 = [SoundboardStore];
  const items3 = [tmp7];
  const obj4 = userId(sharedValue[16]);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    let soundById;
    if (null != closure_1) {
      soundById = SoundboardStore.getSoundById(tmp);
    }
    return soundById;
  }, items3);
  let soundId;
  if (stateFromStores1 != null) {
    soundId = stateFromStores1.soundId;
  }
  if (soundId == null) {
    soundId = null;
  }
  const tmp5Result = userId(sharedValue[27]);
  sharedValue = tmp5Result.useSharedValue(1);
  react = obj.useRef(true);
  const items4 = [sharedValue, soundId];
  const effect = obj.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const obj = timing_timing;
      const result1 = set(obj.withTiming(1, map1));
    }
  }, items4);
  const items5 = [closure_19, sharedValue];
  let c0;
  [tmp12, tmp13] = items5;
  const tmp5Result2 = userId(sharedValue[27]);
  class VoicePanelDockStatusViewsTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items6 = [tmp13];
  VoicePanelDockStatusViewsTsx1.__closure = items6;
  VoicePanelDockStatusViewsTsx1.__workletHash = 9926830297549;
  VoicePanelDockStatusViewsTsx1.__initData = tmp12;
  let tmp15 = null != stateFromStores1;
  const animatedStyle = tmp5Result2.useAnimatedStyle(VoicePanelDockStatusViewsTsx1);
  if (tmp15) {
    tmp15 = null != stateFromStores1.emojiId || null != stateFromStores1.emojiName;
  }
  const obj5 = { style: items7, children: items8 };
  items7 = [tmp.titleRow, animatedStyle];
  let tmp19Result = null;
  View = tmp2(tmp3[27]).View;
  const tmp17 = closure_16;
  if (null != stateFromStores1) {
    tmp19Result = null;
    if (tmp15) {
      ({ soundboardEmoji: obj8.fastImageStyle, soundboardEmojiText: obj8.textEmojiStyle } = tmp);
      const obj6 = { fastImageStyle: null, textEmojiStyle: null, src: require("getSoundboardEmojiUrl")(stateFromStores1, 16), name: str };
      str = stateFromStores1.emojiName;
      const tmp19 = closure_15;
      const tmp2Result = require("Emoji");
      if (str == null) {
        str = "";
      }
      tmp19Result = tmp19(tmp2Result, obj6);
    }
  }
  items8 = [tmp19Result, ];
  let str2 = "text-default";
  const Text = tmp5(tmp3[25]).Text;
  const tmp21 = closure_15;
  if (dimmed) {
    str2 = "text-default";
    if (null == stateFromStores1) {
      str2 = "text-subtle";
    }
  }
  const obj7 = { variant: "body-md/medium", color: str2, lineClamp: 1, style: tmp.title, children: name };
  if (null != stateFromStores1) {
    name = stateFromStores1.name;
  }
  items8[1] = tmp21(Text, obj7);
  return tmp17(View, obj5);
}
export function DockFace(userId) {
  let REDESIGN_INPUT_CONTROL_SELECTED;
  let items8;
  let items9;
  let obj8;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  userId = userId.userId;
  const dimmed = userId.dimmed;
  let entered = userId.entered;
  let guildId;
  let stateFromStores;
  let sharedValue;
  const tmp = closure_18();
  let obj = stateFromStores;
  const tmp2 = dimmed;
  const context = stateFromStores.useContext(dimmed(guildId[15]));
  guildId = context.guildId;
  const channelId = context.channelId;
  let items = [UserStore];
  const items1 = [userId];
  const obj2 = userId(guildId[16]);
  stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const items2 = [SpeakingStore];
  const items3 = [userId];
  const obj3 = userId(guildId[16]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => SpeakingStore.isSpeaking(userId), items3);
  const tmp8 = null != closure_12(channelId, userId);
  if (tmp8) {
    REDESIGN_INPUT_CONTROL_SELECTED = tmp2(tmp3[12]).colors.REDESIGN_INPUT_CONTROL_SELECTED;
  }
  const items4 = [stateFromStores, guildId];
  const memo = obj.useMemo(() => {
    let avatarSource;
    const obj = stateFromStores;
    if (stateFromStores != null) {
      avatarSource = obj.getAvatarSource(guildId, false, DOCK_TILE_SIZE);
    }
    return avatarSource;
  }, items4);
  let num = 0;
  const useSharedValue = userId(tmp3[27]).useSharedValue;
  userId(guildId[27]);
  if (dimmed) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items5 = [sharedValue, dimmed];
  const effect = obj.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (dimmed) {
      num = 1;
    }
    const result = set(withTiming(num, map1));
  }, items5);
  const items6 = [closure_24, , , ];
  const useAnimatedStyle = userId(tmp3[27]).useAnimatedStyle;
  userId(guildId[27]);
  items6[1] = userId(guildId[27]).interpolate;
  items6[2] = sharedValue;
  items6[3] = 0.5;
  let c0;
  let c1;
  let c2;
  [tmp15, tmp16, tmp17, tmp18] = items6;
  class VoicePanelDockStatusViewsTsx4 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], items) };
      items = [1, c2];
      return obj;
    }
  }
  const items7 = [tmp16, tmp17, tmp18];
  VoicePanelDockStatusViewsTsx4.__closure = items7;
  VoicePanelDockStatusViewsTsx4.__workletHash = 4994476425561;
  VoicePanelDockStatusViewsTsx4.__initData = tmp15;
  const animatedStyle = useAnimatedStyle(VoicePanelDockStatusViewsTsx4);
  const obj4 = { style: items8, pointerEvents: "none", children: items9 };
  items8 = [tmp.face, animatedStyle];
  let tmp21 = entered;
  View = tmp2(tmp3[27]).View;
  const tmp20 = closure_16;
  if (entered) {
    const obj5 = { userId, isSpeaking: stateFromStores1 || tmp8, color: REDESIGN_INPUT_CONTROL_SELECTED };
    tmp21 = closure_15(closure_23, obj5);
  }
  items9 = [tmp21, , ];
  if (entered) {
    const obj6 = { speaking: stateFromStores1 || tmp8, color: REDESIGN_INPUT_CONTROL_SELECTED };
    entered = closure_15(closure_21, obj6);
  }
  items9[1] = entered;
  let tmp26 = null;
  if (null != memo) {
    const obj7 = { style: tmp.avatar, children: closure_15(tmp2(guildId[35]), obj8) };
    obj8 = { style: tmp.avatarImage, source: memo };
    tmp26 = closure_15(View, obj7);
  }
  items9[2] = tmp26;
  return tmp20(View, obj4);
}
