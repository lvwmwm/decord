// Module ID: 15869
// Function ID: 122524
// Name: getSourceFromURI
// Dependencies: [57, 31, 1194, 1348, 1849, 33, 4130, 689, 10046, 566, 4319, 5515, 5085, 4126, 1212, 2]

// Module 15869 (getSourceFromURI)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function getSourceFromURI(uri) {
  let tmp = uri;
  if ("number" !== typeof uri) {
    const obj = { uri };
    tmp = obj;
  }
  return tmp;
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.container = obj;
obj.avatarContainer = { flexDirection: "row", gap: 24 };
_createForOfIteratorHelperLoose = { width: 80, height: 80, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, overflow: "hidden" };
obj.avatarWrapper = _createForOfIteratorHelperLoose;
obj.avatar = { width: 80, height: 80 };
obj.disconnectedAvatar = { opacity: 0.2 };
obj.textContainer = { position: "absolute", left: 0, right: 0, bottom: 0, padding: 16, width: "100%" };
obj.text = { textAlign: "center" };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function VoicePanelCTACardCallerDisconnected() {
  let tmp6;
  let tmp7;
  const channelId = importAllResult.useContext(first(id[8])).channelId;
  const tmp = callback3();
  channel = channel.getChannel(channelId);
  let recipients;
  if (null != channel) {
    recipients = channel.recipients;
  }
  if (null == recipients) {
    recipients = [];
  }
  first = callback(recipients, 1)[0];
  id = id.getId();
  let obj = channelId(id[9]);
  let items = [closure_7];
  const items1 = [channelId, id, first];
  const tmp5 = callback(obj.useStateFromStoresArray(items, () => {
    const user = outer1_7.getUser(id);
    const user1 = outer1_7.getUser(first);
    let avatarURL;
    if (null != user) {
      avatarURL = user.getAvatarURL(undefined, 80);
    }
    const items = [avatarURL, , ];
    let avatarURL1;
    if (null != user1) {
      avatarURL1 = user1.getAvatarURL(undefined, 80);
    }
    items[1] = avatarURL1;
    items[2] = first(id[10]).getName(undefined, channelId, user1);
    return items;
  }, items1), 3);
  [tmp6, tmp7] = tmp5;
  obj = { style: tmp.container };
  obj = { style: tmp.avatarContainer };
  let tmp12 = null != tmp6;
  const tmp10 = first(id[11]);
  if (tmp12) {
    const obj1 = { style: tmp.avatarWrapper };
    const obj2 = {};
    const tmp16 = first(id[11]);
    obj2.source = getSourceFromURI(tmp6);
    obj2.style = tmp.avatar;
    obj1.children = callback2(first(id[12]), obj2);
    tmp12 = callback2(tmp16, obj1);
    const tmp17 = first(id[12]);
  }
  const items2 = [tmp12, ];
  let tmp19 = null != tmp7;
  if (tmp19) {
    const obj3 = { style: tmp.avatarWrapper };
    const obj4 = {};
    const tmp23 = first(id[11]);
    obj4.source = getSourceFromURI(tmp7);
    const items3 = [, ];
    ({ avatar: arr5[0], disconnectedAvatar: arr5[1] } = tmp);
    obj4.style = items3;
    obj3.children = callback2(first(id[12]), obj4);
    tmp19 = callback2(tmp23, obj3);
    const tmp24 = first(id[12]);
  }
  items2[1] = tmp19;
  obj.children = items2;
  const items4 = [closure_9(first(id[11]), obj), ];
  const obj5 = { style: tmp.textContainer };
  const tmp11 = first(id[11]);
  const tmp26 = closure_9;
  const obj6 = { style: tmp.text, variant: "heading-sm/semibold", color: "text-overlay-light" };
  const intl = channelId(id[14]).intl;
  obj6.children = intl.string(channelId(id[14]).t.WkAgPU);
  const items5 = [callback2(channelId(id[13]).Text, obj6), ];
  let tmp28 = null != tmp8;
  if (tmp28) {
    const obj7 = { style: tmp.text, variant: "text-xs/medium", color: "text-overlay-light" };
    const intl2 = channelId(id[14]).intl;
    const obj8 = { username: tmp8 };
    obj7.children = intl2.format(channelId(id[14]).t.kXrAqz, obj8);
    tmp28 = callback2(channelId(id[13]).Text, obj7);
  }
  items5[1] = tmp28;
  obj5.children = items5;
  items4[1] = tmp26(first(id[11]), obj5);
  obj.children = items4;
  return closure_9(tmp10, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx");

export default memoResult;
