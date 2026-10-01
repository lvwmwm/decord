// Module ID: 16964
// Function ID: 16965
// Name: VoicePanelCTACardCallerDisconnected
// Dependencies: [32, 19, 502, 2045, 1372, 21, 4836, 576, 11754, 504, 4988, 5901, 5899, 4832, 1115, 2]

// Module 16964 (VoicePanelCTACardCallerDisconnected)
import nativeDefault from "native" /* 576 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let size;
let size1;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: size, avatarContainer: { flexDirection: "row", gap: 24 }, avatarWrapper: size1, avatar: { width: 80, height: 80 }, disconnectedAvatar: { opacity: 0.2 }, textContainer: { position: "absolute", left: 0, right: 0, bottom: 0, padding: 16, width: "100%" }, text: { textAlign: "center" } };
size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
createStyles = createStyles.createStyles;
size1 = { width: 80, height: 80, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let closure_10 = createStyles(obj);
const memoResult = react.memo(function VoicePanelCTACardCallerDisconnected() {
  let first;
  let id;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj13;
  let obj6;
  let obj9;
  let tmp10;
  let tmp11;
  let tmp9;
  let tmpResult11;
  let tmpResult9;
  const f106682 = () => {
    const user = UserStore.getUser(id);
    const user1 = UserStore.getUser(first);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(undefined, 80);
    }
    const items = [avatarURL, , ];
    let avatarURL1;
    if (user1 != null) {
      avatarURL1 = user1.getAvatarURL(undefined, 80);
    }
    items[1] = avatarURL1;
    const obj3 = NicknameUtilsDefault;
    items[2] = obj3.getName(undefined, channelId, user1);
    return items;
  };
  const channelId = react.useContext(first(id[8])).channelId;
  const tmp3 = closure_10();
  const channel = ChannelStore.getChannel(channelId);
  let recipients;
  if (channel != null) {
    recipients = channel.recipients;
  }
  if (recipients == null) {
    recipients = [];
  }
  first = _slicedToArray(recipients, 1)[0];
  id = AuthenticationStore.getId();
  let items = [UserStore];
  const items1 = [channelId, id, first];
  const obj = channelId(id[9]);
  [tmp9, tmp10, tmp11] = obj.useStateFromStoresArray(items, f106682, items1);
  const obj2 = { style: tmp3.container, children: items4 };
  _slicedToArray(obj.useStateFromStoresArray(items, f106682, items1), 3);
  let obj3 = { style: tmp3.avatarContainer, children: items2 };
  let tmp16Result = null != tmp9;
  const tmpResult = first(id[11]);
  const tmpResult7 = first(id[11]);
  if (tmp16Result) {
    let tmp19 = tmp9;
    const obj4 = { style: tmp3.avatarWrapper, children: closure_8(tmpResult9, obj6) };
    const tmpResult8 = first(id[11]);
    tmpResult9 = first(id[12]);
    if (typeof tmp9 !== "number") {
      tmp19 = { uri: tmp9 };
      const obj5 = { uri: tmp9 };
    }
    obj6 = { source: tmp19, style: tmp3.avatar };
    tmp16Result = tmp16(tmpResult8, obj4);
  }
  items2 = [tmp16Result, ];
  let tmp21Result = null != tmp10;
  if (tmp21Result) {
    let tmp24 = tmp10;
    const obj7 = { style: tmp3.avatarWrapper, children: closure_8(tmpResult11, obj9) };
    const tmpResult10 = first(id[11]);
    tmpResult11 = first(id[12]);
    if (typeof tmp10 !== "number") {
      tmp24 = { uri: tmp10 };
      const obj8 = { uri: tmp10 };
    }
    obj9 = { source: tmp24, style: items3 };
    items3 = [, ];
    ({ avatar: arr5[0], disconnectedAvatar: arr5[1] } = tmp3);
    tmp21Result = tmp21(tmpResult10, obj7);
  }
  items2[1] = tmp21Result;
  items4 = [closure_9(tmpResult7, obj3), ];
  const obj10 = { style: tmp3.textContainer, children: items5 };
  const obj11 = { style: tmp3.text, variant: "heading-sm/semibold", color: "text-overlay-light", children: intl.string(channelId(id[14]).t.WkAgPU) };
  const tmpResult12 = first(id[11]);
  const Text = tmp7(tmp2[13]).Text;
  intl = tmp7(tmp2[14]).intl;
  items5 = [closure_8(Text, obj11), ];
  let tmp26Result = null != tmp11;
  const tmp26 = closure_8;
  if (tmp26Result) {
    const obj12 = { style: tmp3.text, variant: "text-xs/medium", color: "text-overlay-light", children: intl2.format(channelId(id[14]).t.kXrAqz, obj13) };
    const Text2 = tmp7(tmp2[13]).Text;
    intl2 = tmp7(tmp2[14]).intl;
    obj13 = { username: tmp11 };
    tmp26Result = tmp26(Text2, obj12);
  }
  items5[1] = tmp26Result;
  items4[1] = closure_9(tmpResult12, obj10);
  return closure_9(tmpResult, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx");

export default memoResult;
