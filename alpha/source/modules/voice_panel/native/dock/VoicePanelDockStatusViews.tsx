// Module ID: 19520
// Function ID: 19521
// Name: VoicePanelDockStatusViews
// Dependencies: [19, 17, 4992, 5014, 5085, 6894, 1385, 11437, 21, 5143, 575, 19521, 11418, 504, 19522, 7101, 1187, 7414, 5788, 1113, 8816, 8819, 5763, 6179, 1652, 5773, 5380, 5854, 2]
// Exports: DockChannelIcon, DockChannelTitle, DockFace, DockUserTitle

// Module 19520 (VoicePanelDockStatusViews)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import timing_timing from "timing/timing" /* 5380 */;
import spring_spring from "spring/spring" /* 5773 */;
import useChannelName from "useChannelName" /* 5788 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7414 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11418 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import GuildStore from "GuildStore" /* 5014 */;
import RelationshipStore from "RelationshipStore" /* 5085 */;
import SpeakingStore from "SpeakingStore" /* 6894 */;
import UserStore from "UserStore" /* 1385 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11437 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

let set;

let DOCK_TILE_RADIUS;
let DOCK_TILE_SIZE;
let StyleSheet;
let c10;
let closure_12;
let closure_4;
let map1;
let obj2;
let result;
let size;
let size1;
let size2;
let size3;
({ View: closure_4, StyleSheet } = react_native);
({ DOCK_FADE_TIMING: c10, DOCK_TILE_RADIUS, DOCK_TILE_SIZE } = VoicePanelDockConstants);
const DOCK_GLYPH_GAP = VoicePanelDockConstants.DOCK_GLYPH_GAP;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const sum = DOCK_TILE_SIZE + 4;
let createStyles = createStyles_mod;
let obj = { face: obj2, avatar: size, avatarImage: { width: "100%", height: "100%" }, ring: size1, guildIcon: size2, guildIconAsset: { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS }, avatarShadow: size3, titleRow: { flexDirection: "row", alignItems: "center", gap: DOCK_GLYPH_GAP }, title: { flexShrink: 1 } };
obj2 = { alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_SIZE / 2, overflow: "hidden" };
size1 = { position: "absolute", top: "50%", left: "50%", marginTop: result, marginLeft: result, width: sum, height: sum, borderRadius: sum / 2, borderWidth: 1, borderColor: nativeDefault.colors.ICON_VOICE_SPEAKING };
result = -sum / 2;
size2 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS, outlineWidth: 1, outlineColor: nativeDefault.colors.BORDER_SUBTLE, outlineStyle: "solid", outlineOffset: -1 };
size3 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: nativeDefault.radii.round };
let closure_15 = createStyles(obj);
let closure_16 = { code: "(function VoicePanelDockStatusViewsTsx1(){let[progress,DOCK_TILE_SIZE,RING_BOX]=this.__closure;const value=progress.get();const hiddenScale=DOCK_TILE_SIZE/RING_BOX;return{opacity:Math.min(value*2,1),transform:[{scale:hiddenScale+(1-hiddenScale)*value}]};})" };
let closure_17 = react.memo(function DockSpeakingRing(speaking) {
  let items3;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  speaking = speaking.speaking;
  const tmp = closure_15();
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
  const items1 = [closure_16, sharedValue, DOCK_TILE_SIZE, closure_14];
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
  VoicePanelDockStatusViewsTsx1.__workletHash = 6293104178351;
  VoicePanelDockStatusViewsTsx1.__initData = tmp5;
  const animatedStyle = obj2.useAnimatedStyle(VoicePanelDockStatusViewsTsx1);
  const obj3 = { style: items3, pointerEvents: "none" };
  items3 = [tmp.ring, animatedStyle];
  return closure_12(sharedValue(1652).View, obj3);
});
let closure_18 = { code: "(function VoicePanelDockStatusViewsTsx2(){let[interpolate,dim,dimmedOpacity]=this.__closure;return{opacity:interpolate(dim.get(),[0,1],[1,dimmedOpacity])};})" };
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
  const tmp = closure_15();
  const tmp4 = guildId(19521);
  const tmp4Result = tmp4(channelId(575).Shadow.SHADOW_MEDIUM);
  const context = react.useContext(guildId(11418));
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
    const obj3 = { style: items4, children: closure_12(tmp2Result, obj5) };
    items4 = [tmp.guildIcon, ];
    const obj4 = { boxShadow: tmp4Result };
    items4[1] = obj4;
    obj5 = { streaming, children: closure_12(tmp2Result3, obj6) };
    obj6 = { guild: stateFromStores, size: channelId(7101).GuildIconSizes.SMALL_32, style: tmp.guildIconAsset };
    tmp2Result = guildId(19522);
    tmp2Result3 = guildId(7101);
    tmp13 = closure_12(closure_4, obj3);
  } else {
    tmp13 = null;
    if (null != stateFromStores1) {
      const obj7 = { style: items5, children: closure_12(tmp2Result4, obj9) };
      items5 = [tmp.avatarShadow, ];
      const obj8 = { boxShadow: tmp4Result };
      items5[1] = obj8;
      obj9 = { streaming, children: closure_12(Avatar, obj10) };
      obj10 = { user: stateFromStores1, guildId: "Array", size: channelId(1187).AvatarSizes.REFRESH_MEDIUM_32 };
      tmp2Result4 = guildId(19522);
      Avatar = tmp5(1187).Avatar;
      tmp13 = closure_12(closure_4, obj7);
    }
  }
  return tmp13;
}
export function DockChannelTitle() {
  let VoiceNormalIcon;
  let items4;
  let tmp = closure_15();
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
  const tmp7 = closure_13;
  const tmp8 = closure_4;
  if (stateFromStores) {
    VoiceNormalIcon = tmp4(8816).VoiceLockIcon;
  } else {
    VoiceNormalIcon = tmp4(8819).VoiceNormalIcon;
  }
  items4 = [, ];
  const obj4 = { size: "sm", color: nativeDefault.colors.ICON_DEFAULT };
  items4[0] = closure_12(VoiceNormalIcon, obj4);
  const obj5 = { variant: "body-md/medium", color: "text-default", lineClamp: 1, style: tmp.title, children: stateFromStores1 };
  items4[1] = closure_12(channelId(5763).Text, obj5);
  return tmp7(tmp8, obj3);
}
export function DockUserTitle(userId) {
  let Text;
  let channelId;
  let guildId;
  let obj4;
  userId = userId.userId;
  const dimmed = userId.dimmed;
  const tmp = closure_15();
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ channelId, guildId } = context);
  const items = [UserStore];
  const items1 = [userId];
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const obj3 = { style: tmp.titleRow, children: closure_12(Text, obj4) };
  const obj2 = userId(6179);
  const name = obj2.useName(guildId, channelId, stateFromStores);
  let str = "text-default";
  Text = userId(5763).Text;
  const tmp6 = closure_4;
  if (dimmed) {
    str = "text-subtle";
  }
  obj4 = { variant: "body-md/medium", color: str, lineClamp: 1, style: tmp.title, children: name };
  return closure_12(tmp6, obj3);
}
export function DockFace(userId) {
  let items8;
  let items9;
  let obj7;
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
  const tmp = closure_15();
  let obj = stateFromStores;
  const tmp2 = dimmed;
  guildId = stateFromStores.useContext(dimmed(guildId[12])).guildId;
  let items = [UserStore];
  const items1 = [userId];
  const obj2 = userId(guildId[13]);
  stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const items2 = [SpeakingStore];
  const items3 = [userId];
  const items4 = [stateFromStores, guildId];
  const obj3 = userId(guildId[13]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => SpeakingStore.isSpeaking(userId), items3);
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
    const result = set(withTiming(num, authStore));
  }, items5);
  const items6 = [closure_18, , , ];
  const useAnimatedStyle = userId(tmp3[24]).useAnimatedStyle;
  userId(guildId[24]);
  items6[1] = userId(guildId[24]).interpolate;
  items6[2] = sharedValue;
  items6[3] = 0.5;
  let c0;
  let c1;
  let c2;
  [tmp12, tmp13, tmp14, tmp15] = items6;
  class VoicePanelDockStatusViewsTsx2 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], items) };
      items = [1, c2];
      return obj;
    }
  }
  const items7 = [tmp13, tmp14, tmp15];
  VoicePanelDockStatusViewsTsx2.__closure = items7;
  VoicePanelDockStatusViewsTsx2.__workletHash = 4606633822175;
  VoicePanelDockStatusViewsTsx2.__initData = tmp12;
  const animatedStyle = useAnimatedStyle(VoicePanelDockStatusViewsTsx2);
  const obj4 = { style: items8, pointerEvents: "none", children: items9 };
  items8 = [tmp.face, animatedStyle];
  const View = tmp2(tmp3[24]).View;
  const tmp17 = closure_13;
  if (entered) {
    const obj5 = { speaking: stateFromStores1 };
    entered = closure_12(closure_17, obj5);
  }
  items9 = [entered, ];
  let tmp20 = null;
  if (null != memo) {
    const obj6 = { style: tmp.avatar, children: closure_12(tmp2(guildId[27]), obj7) };
    obj7 = { style: tmp.avatarImage, source: memo };
    tmp20 = closure_12(sharedValue, obj6);
  }
  items9[1] = tmp20;
  return tmp17(View, obj4);
}
