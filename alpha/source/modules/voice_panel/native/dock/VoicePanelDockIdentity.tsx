// Module ID: 19203
// Function ID: 19204
// Name: VoicePanelDockIdentity
// Dependencies: [19, 17, 4863, 4885, 4956, 1383, 11241, 21, 5014, 575, 19204, 11222, 504, 6957, 1187, 7275, 5652, 8670, 8673, 5624, 2]

// Module 19203 (VoicePanelDockIdentity)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import native from "native" /* 575 */;
import native2 from "native" /* 1187 */;
import useChannelName from "useChannelName" /* 5652 */;
import GuildIcon from "GuildIcon" /* 6957 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7275 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11222 */;
import useDockBoxShadowDefault from "useDockBoxShadow" /* 19204 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildStore from "GuildStore" /* 4885 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11241 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const nativeDefault = native;

let DOCK_GAP;
let DOCK_GLYPH_GAP;
let DOCK_TILE_RADIUS;
let DOCK_TILE_SIZE;
let c10;
let c9;
let size;
let size1;
let tmp2;
const GuildIconDefault = tmp2(6957);
function DockChannelIcon() {
  let Avatar;
  let items2;
  let items3;
  let obj5;
  let obj8;
  let tmp12;
  let tmp2Result;
  const tmp = closure_11();
  const tmp4 = useDockBoxShadowDefault;
  const tmp4Result = tmp4(native.Shadow.SHADOW_MEDIUM);
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ channelId: require, guildId: importDefault } = context);
  const items = [GuildStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(importDefault));
  const items1 = [ChannelStore, UserStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    if (null != importDefault) {
      return null;
    } else {
      const channel = ChannelStore.getChannel(require);
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
  });
  if (null != stateFromStores) {
    const obj3 = { style: items2, children: closure_9(tmp2Result, obj5) };
    items2 = [tmp.guildIcon, ];
    const obj4 = { boxShadow: tmp4Result };
    items2[1] = obj4;
    obj5 = { guild: stateFromStores, size: GuildIcon.GuildIconSizes.SMALL_32, style: tmp.guildIconAsset };
    tmp2Result = GuildIconDefault;
    tmp12 = closure_9(View, obj3);
  } else {
    tmp12 = null;
    if (null != stateFromStores1) {
      const obj6 = { style: items3, children: closure_9(Avatar, obj8) };
      items3 = [tmp.avatarShadow, ];
      const obj7 = { boxShadow: tmp4Result };
      items3[1] = obj7;
      obj8 = { user: stateFromStores1, guildId: "Array", size: native2.AvatarSizes.REFRESH_MEDIUM_32 };
      Avatar = tmp5(1187).Avatar;
      tmp12 = closure_9(View, obj6);
    }
  }
  return tmp12;
}
const View = react_native.View;
({ DOCK_TILE_RADIUS, DOCK_TILE_SIZE, DOCK_GAP, DOCK_GLYPH_GAP } = VoicePanelDockConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { identity: { flexDirection: "row", alignItems: "center", gap: DOCK_GAP }, guildIcon: size, guildIconAsset: { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS }, avatarShadow: size1, titleRow: { flexShrink: 1, flexDirection: "row", alignItems: "center", gap: DOCK_GLYPH_GAP }, title: { flexShrink: 1 } };
size = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: DOCK_TILE_RADIUS, outlineWidth: 1, outlineColor: nativeDefault.colors.BORDER_SUBTLE, outlineStyle: "solid", outlineOffset: -1 };
createStyles = createStyles.createStyles;
size1 = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, borderRadius: nativeDefault.radii.round };
let closure_11 = createStyles(obj);
const memoResult = react.memo(function VoicePanelDockIdentity() {
  let VoiceNormalIcon;
  let items3;
  let items4;
  let tmp = closure_11();
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = isRoleRequiredDefault;
    return tmp(ChannelStore.getChannel(channelId));
  }, items1);
  const items2 = [ChannelStore, UserStore, RelationshipStore];
  const obj3 = { style: tmp.identity, children: items3 };
  const obj2 = channelId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const channel = ChannelStore.getChannel(channelId);
    let str = "";
    if (null != channel) {
      const obj = useChannelName;
      str = obj.computeChannelName(channel, UserStore, RelationshipStore);
    }
    return str;
  });
  items3 = [closure_9(DockChannelIcon, {}), ];
  const obj4 = { style: tmp.titleRow, children: items4 };
  if (stateFromStores) {
    VoiceNormalIcon = tmp4(8670).VoiceLockIcon;
  } else {
    VoiceNormalIcon = tmp4(8673).VoiceNormalIcon;
  }
  items4 = [, ];
  const obj5 = { size: "sm", color: nativeDefault.colors.ICON_DEFAULT };
  items4[0] = closure_9(VoiceNormalIcon, obj5);
  const obj6 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, style: tmp.title, children: stateFromStores1 };
  items4[1] = closure_9(channelId(5624).Text, obj6);
  items3[1] = closure_10(View, obj4);
  return closure_10(View, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockIdentity.tsx");

export default memoResult;
