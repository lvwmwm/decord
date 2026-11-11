// Module ID: 19822
// Function ID: 19823
// Name: VoicePanelDockStatusViews
// Dependencies: [19, 17, 5092, 5114, 5185, 6878, 1385, 11948, 21, 5243, 575, 19823, 11924, 504, 19824, 7654, 1187, 7156, 5891, 1113, 8029, 7368, 5866, 6288, 1652, 5876, 14745, 14746, 5485, 5957, 2]
// Exports: DockChannelIcon, DockChannelTitle, DockFace, DockUserTitle

// Module 19822 (VoicePanelDockStatusViews)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import timing_timing from "timing/timing" /* 5485 */;
import spring_spring from "spring/spring" /* 5876 */;
import useChannelName from "useChannelName" /* 5891 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7156 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11924 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildStore from "GuildStore" /* 5114 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import SpeakingStore from "SpeakingStore" /* 6878 */;
import UserStore from "UserStore" /* 1385 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11948 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let set;

let DOCK_TILE_RADIUS;
let DOCK_TILE_SIZE;
let closure_14;
let map1;
let obj2;
let obj3;
let result;
let size;
let size1;
let size2;
let size3;
let unpackModuleId;
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ DOCK_FADE_TIMING: unpackModuleId, DOCK_TILE_RADIUS, DOCK_TILE_SIZE } = VoicePanelDockConstants);
const DOCK_GLYPH_GAP = VoicePanelDockConstants.DOCK_GLYPH_GAP;
({ jsx: map1, jsxs: closure_14 } = Fragment);
const sum = DOCK_TILE_SIZE + 4;
let createStyles = createStyles_mod;
let obj = { face: obj2, avatar: size, avatarImage: { width: "100%", height: "100%" }, ring: size1, halo: { position: "absolute", top: "50%", left: "50%", width: 50, height: 50, marginTop: -25, marginLeft: -25 }, haloDisc: obj3, guildIcon: size2, guildIconAsset: { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS }, avatarShadow: size3, titleRow: { flexDirection: "row", alignItems: "center", gap: DOCK_GLYPH_GAP }, title: { flexShrink: 1 } };
obj2 = { alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_SIZE / 2, overflow: "hidden" };
size1 = { position: "absolute", top: "50%", left: "50%", marginTop: result, marginLeft: result, width: sum, height: sum, borderRadius: sum / 2, borderWidth: 1, borderColor: nativeDefault.colors.ICON_VOICE_SPEAKING };
result = -sum / 2;
obj3 = { borderRadius: 25, backgroundColor: nativeDefault.colors.ICON_VOICE_SPEAKING };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
size2 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS, outlineWidth: 1, outlineColor: nativeDefault.colors.BORDER_SUBTLE, outlineStyle: "solid", outlineOffset: -1 };
size3 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: nativeDefault.radii.round };
let closure_16 = createStyles(obj);
let closure_17 = { code: "(function VoicePanelDockStatusViewsTsx1(){let[progress,DOCK_TILE_SIZE,RING_BOX]=this.__closure;const value=progress.get();const startScale=DOCK_TILE_SIZE/RING_BOX;return{opacity:Math.min(value*2,1),transform:[{scale:startScale+(1-startScale)*value}]};})" };
let closure_18 = react.memo(function DockSpeakingRing(speaking) {
  let items3;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  speaking = speaking.speaking;
  const tmp = closure_16();
  let obj = speaking(1652);
  const sharedValue = obj.useSharedValue(0);
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
  let obj2 = speaking(1652);
  const items1 = [closure_17, sharedValue, DOCK_TILE_SIZE, closure_15];
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items1;
  class VoicePanelDockStatusViewsTsx1 {
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
  const items2 = [tmp6, tmp7, tmp8];
  VoicePanelDockStatusViewsTsx1.__closure = items2;
  VoicePanelDockStatusViewsTsx1.__workletHash = 3561359542085;
  VoicePanelDockStatusViewsTsx1.__initData = tmp5;
  const animatedStyle = obj2.useAnimatedStyle(VoicePanelDockStatusViewsTsx1);
  const obj3 = { style: items3, pointerEvents: "none" };
  items3 = [tmp.ring, animatedStyle];
  return closure_13(sharedValue(1652).View, obj3);
});
let closure_19 = { code: "(function VoicePanelDockStatusViewsTsx2(){let[progress,RING_BOX,HALO_SPEAKING_SIZE]=this.__closure;const value=progress.get();const startScale=RING_BOX/HALO_SPEAKING_SIZE;return{opacity:0.15*Math.min(value*2,1),transform:[{scale:startScale+(1-startScale)*value}]};})" };
let closure_20 = react.memo(function DockSpeakerHalo(isSpeaking) {
  let items3;
  let obj5;
  let obj6;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  isSpeaking = isSpeaking.isSpeaking;
  const userId = isSpeaking.userId;
  const tmp = closure_16();
  let obj = isSpeaking(14745);
  const voicePanelDockSpeakerLevelProps = obj.useVoicePanelDockSpeakerLevelProps();
  let obj2 = isSpeaking(1652);
  const sharedValue = obj2.useSharedValue(0);
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
  const items1 = [closure_19, sharedValue, closure_15, 42];
  let c0;
  let c1;
  let c2;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  const obj3 = isSpeaking(1652);
  class VoicePanelDockStatusViewsTsx2 {
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
  const items2 = [tmp7, tmp8, tmp9];
  VoicePanelDockStatusViewsTsx2.__closure = items2;
  VoicePanelDockStatusViewsTsx2.__workletHash = 13095623805046;
  VoicePanelDockStatusViewsTsx2.__initData = tmp6;
  const animatedStyle = obj3.useAnimatedStyle(VoicePanelDockStatusViewsTsx2);
  const obj4 = { style: items3, pointerEvents: "none", children: closure_13(tmp11, obj5) };
  items3 = [tmp.halo, animatedStyle];
  View = sharedValue(1652).View;
  obj5 = { style: StyleSheet.absoluteFill, userId, minScale: 0.84, maxScale: 1, children: closure_13(View, obj6) };
  tmp11 = sharedValue(14746);
  const merged = Object.assign(voicePanelDockSpeakerLevelProps);
  obj6 = { style: tmp.haloDisc };
  return closure_13(View, obj4);
});
let closure_21 = { code: "(function VoicePanelDockStatusViewsTsx3(){let[interpolate,dim,dimmedOpacity]=this.__closure;return{opacity:interpolate(dim.get(),[0,1],[1,dimmedOpacity])};})" };
size = size_mod;
const result1 = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockStatusViews.tsx");

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
  const tmp = closure_16();
  const tmp4 = guildId(19823);
  const tmp4Result = tmp4(channelId(575).Shadow.SHADOW_MEDIUM);
  const context = react.useContext(guildId(11924));
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
    const obj3 = { style: items4, children: closure_13(tmp2Result, obj5) };
    items4 = [tmp.guildIcon, ];
    const obj4 = { boxShadow: tmp4Result };
    items4[1] = obj4;
    obj5 = { streaming, children: closure_13(tmp2Result3, obj6) };
    obj6 = { guild: stateFromStores, size: channelId(7654).GuildIconSizes.SMALL_32, style: tmp.guildIconAsset };
    tmp2Result = guildId(19824);
    tmp2Result3 = guildId(7654);
    tmp13 = closure_13(View, obj3);
  } else {
    tmp13 = null;
    if (null != stateFromStores1) {
      const obj7 = { style: items5, children: closure_13(tmp2Result4, obj9) };
      items5 = [tmp.avatarShadow, ];
      const obj8 = { boxShadow: tmp4Result };
      items5[1] = obj8;
      obj9 = { streaming, children: closure_13(Avatar, obj10) };
      obj10 = { user: stateFromStores1, guildId: "Array", size: channelId(1187).AvatarSizes.REFRESH_MEDIUM_32 };
      tmp2Result4 = guildId(19824);
      Avatar = tmp5(1187).Avatar;
      tmp13 = closure_13(View, obj7);
    }
  }
  return tmp13;
}
export function DockChannelTitle() {
  let VoiceNormalIcon;
  let items4;
  let tmp = closure_16();
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
  const tmp7 = closure_14;
  const tmp8 = View;
  if (stateFromStores) {
    VoiceNormalIcon = tmp4(8029).VoiceLockIcon;
  } else {
    VoiceNormalIcon = tmp4(7368).VoiceNormalIcon;
  }
  items4 = [, ];
  const obj4 = { size: "sm", color: nativeDefault.colors.ICON_DEFAULT };
  items4[0] = closure_13(VoiceNormalIcon, obj4);
  const obj5 = { variant: "body-md/medium", color: "text-default", lineClamp: 1, style: tmp.title, children: stateFromStores1 };
  items4[1] = closure_13(channelId(5866).Text, obj5);
  return tmp7(tmp8, obj3);
}
export function DockUserTitle(userId) {
  let Text;
  let channelId;
  let guildId;
  let obj4;
  userId = userId.userId;
  const dimmed = userId.dimmed;
  const tmp = closure_16();
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ channelId, guildId } = context);
  const items = [UserStore];
  const items1 = [userId];
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const obj3 = { style: tmp.titleRow, children: closure_13(Text, obj4) };
  const obj2 = userId(6288);
  const name = obj2.useName(guildId, channelId, stateFromStores);
  let str = "text-default";
  Text = userId(5866).Text;
  const tmp6 = View;
  if (dimmed) {
    str = "text-subtle";
  }
  obj4 = { variant: "body-md/medium", color: str, lineClamp: 1, style: tmp.title, children: name };
  return closure_13(tmp6, obj3);
}
export function DockFace(userId) {
  let items8;
  let items9;
  let obj8;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  userId = userId.userId;
  const dimmed = userId.dimmed;
  let entered = userId.entered;
  let guildId;
  let stateFromStores;
  let sharedValue;
  const tmp = closure_16();
  let obj = stateFromStores;
  const tmp2 = dimmed;
  guildId = stateFromStores.useContext(dimmed(guildId[12])).guildId;
  let items = [UserStore];
  const items1 = [userId];
  const obj2 = userId(guildId[13]);
  stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const items2 = [SpeakingStore];
  const items3 = [userId];
  const obj3 = userId(guildId[13]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => SpeakingStore.isSpeaking(userId), items3);
  const items4 = [stateFromStores, guildId];
  const memo = stateFromStores.useMemo(() => {
    let avatarSource;
    const obj = stateFromStores;
    if (stateFromStores != null) {
      avatarSource = obj.getAvatarSource(guildId, false, DOCK_TILE_SIZE);
    }
    return avatarSource;
  }, items4);
  let num = 0;
  const useSharedValue = userId(guildId[24]).useSharedValue;
  userId(guildId[24]);
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
    const result = set(withTiming(num, unpackModuleId));
  }, items5);
  const items6 = [closure_21, , , ];
  const useAnimatedStyle = userId(tmp3[24]).useAnimatedStyle;
  userId(guildId[24]);
  items6[1] = userId(guildId[24]).interpolate;
  items6[2] = sharedValue;
  items6[3] = 0.5;
  let c0;
  let c1;
  let c2;
  [tmp12, tmp13, tmp14, tmp15] = items6;
  class VoicePanelDockStatusViewsTsx3 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], items) };
      items = [1, c2];
      return obj;
    }
  }
  const items7 = [tmp13, tmp14, tmp15];
  VoicePanelDockStatusViewsTsx3.__closure = items7;
  VoicePanelDockStatusViewsTsx3.__workletHash = 11079329802718;
  VoicePanelDockStatusViewsTsx3.__initData = tmp12;
  const animatedStyle = useAnimatedStyle(VoicePanelDockStatusViewsTsx3);
  const obj4 = { style: items8, pointerEvents: "none", children: items9 };
  items8 = [tmp.face, animatedStyle];
  let tmp18 = entered;
  View = tmp2(tmp3[24]).View;
  const tmp17 = closure_14;
  if (entered) {
    const obj5 = { userId, isSpeaking: stateFromStores1 };
    tmp18 = closure_13(closure_20, obj5);
  }
  items9 = [tmp18, , ];
  if (entered) {
    const obj6 = { speaking: stateFromStores1 };
    entered = closure_13(closure_18, obj6);
  }
  items9[1] = entered;
  let tmp23 = null;
  if (null != memo) {
    const obj7 = { style: tmp.avatar, children: closure_13(tmp2(guildId[29]), obj8) };
    obj8 = { style: tmp.avatarImage, source: memo };
    tmp23 = closure_13(View, obj7);
  }
  items9[2] = tmp23;
  return tmp17(View, obj4);
}
