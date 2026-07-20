// Module ID: 15687
// Function ID: 119923
// Name: getSourceFromURI
// Dependencies: []

// Module 15687 (getSourceFromURI)
function getSourceFromURI(uri) {
  let tmp = uri;
  if ("number" !== typeof uri) {
    const obj = { uri };
    tmp = obj;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { 313968: 30271555, 315615: 22092032, 314002: 30271232, 315613: 1489260800, backgroundColor: importDefault(dependencyMap[7]).colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.container = obj;
obj.avatarContainer = {};
obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.avatarWrapper = obj1;
obj.avatar = {};
obj.disconnectedAvatar = { opacity: 0.2 };
obj.textContainer = {};
obj.text = { textAlign: "center" };
let closure_10 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function VoicePanelCTACardCallerDisconnected() {
  let tmp6;
  let tmp7;
  const channelId = importAllResult.useContext(importDefault(dependencyMap[8])).channelId;
  const arg1 = channelId;
  const tmp = callback3();
  const channel = channel.getChannel(channelId);
  let recipients;
  if (null != channel) {
    recipients = channel.recipients;
  }
  if (null == recipients) {
    recipients = [];
  }
  const first = callback(recipients, 1)[0];
  const importDefault = first;
  const id = id.getId();
  const dependencyMap = id;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_7];
  const items1 = [channelId, id, first];
  const tmp5 = callback(obj.useStateFromStoresArray(items, () => {
    const user = authStore.getUser(id);
    const user1 = authStore.getUser(first);
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
  const tmp10 = importDefault(dependencyMap[11]);
  if (tmp12) {
    const obj1 = { style: tmp.avatarWrapper };
    const obj2 = {};
    const tmp16 = importDefault(dependencyMap[11]);
    obj2.source = getSourceFromURI(tmp6);
    obj2.style = tmp.avatar;
    obj1.children = callback2(importDefault(dependencyMap[12]), obj2);
    tmp12 = callback2(tmp16, obj1);
    const tmp17 = importDefault(dependencyMap[12]);
  }
  const items2 = [tmp12, ];
  let tmp19 = null != tmp7;
  if (tmp19) {
    const obj3 = { style: tmp.avatarWrapper };
    const obj4 = {};
    const tmp23 = importDefault(dependencyMap[11]);
    obj4.source = getSourceFromURI(tmp7);
    const items3 = [, ];
    ({ avatar: arr5[0], disconnectedAvatar: arr5[1] } = tmp);
    obj4.style = items3;
    obj3.children = callback2(importDefault(dependencyMap[12]), obj4);
    tmp19 = callback2(tmp23, obj3);
    const tmp24 = importDefault(dependencyMap[12]);
  }
  items2[1] = tmp19;
  obj.children = items2;
  const items4 = [closure_9(importDefault(dependencyMap[11]), obj), ];
  const obj5 = { style: tmp.textContainer };
  const tmp11 = importDefault(dependencyMap[11]);
  const tmp26 = closure_9;
  const obj6 = { Promise: "valueArray", marginTop: "pillOpacity", flags: "%AsyncFromSyncIteratorPrototype%", style: tmp.text };
  const intl = arg1(dependencyMap[14]).intl;
  obj6.children = intl.string(arg1(dependencyMap[14]).t.WkAgPU);
  const items5 = [callback2(arg1(dependencyMap[13]).Text, obj6), ];
  let tmp28 = null != tmp8;
  if (tmp28) {
    const obj7 = { style: tmp.text };
    const intl2 = arg1(dependencyMap[14]).intl;
    const obj8 = { username: tmp8 };
    obj7.children = intl2.format(arg1(dependencyMap[14]).t.kXrAqz, obj8);
    tmp28 = callback2(arg1(dependencyMap[13]).Text, obj7);
  }
  items5[1] = tmp28;
  obj5.children = items5;
  items4[1] = tmp26(importDefault(dependencyMap[11]), obj5);
  obj.children = items4;
  return closure_9(tmp10, obj);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx");

export default memoResult;
