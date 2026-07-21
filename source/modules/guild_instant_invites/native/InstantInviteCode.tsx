// Module ID: 10169
// Function ID: 78576
// Name: InstantInviteDetails
// Dependencies: []
// Exports: default

// Module 10169 (InstantInviteDetails)
class InstantInviteDetails {
  constructor(arg0) {
    ({ channel, expiresAt } = global);
    tmp = closure_10();
    obj = arg1(dependencyMap[8]);
    TextIcon = obj.getSimpleChannelIconComponent(channel);
    if (null == TextIcon) {
      tmp2 = arg1;
      tmp3 = dependencyMap;
      num = 9;
      TextIcon = arg1(dependencyMap[9]).TextIcon;
    }
    tmp4 = jsxs;
    obj = {};
    obj1 = { messageId: null, options: 8 };
    items = [, ];
    items[0] = jsx(TextIcon, { sticker: null, animated: 10 });
    obj2 = { style: tmp.channel };
    obj5 = arg1(dependencyMap[12]);
    obj2.children = obj5.computeChannelName(channel, closure_7, closure_6, false);
    items[1] = jsx(arg1(dependencyMap[11]).Text, obj2);
    obj1.children = items;
    items1 = [, ];
    items1[0] = jsxs(arg1(dependencyMap[10]).Stack, obj1);
    tmp5 = null != expiresAt;
    if (tmp5) {
      tmp6 = jsxs;
      tmp7 = arg1;
      tmp8 = dependencyMap;
      obj3 = { messageId: null, options: 8 };
      tmp9 = jsx;
      num2 = 13;
      items2 = [, , ];
      items2[0] = jsx(arg1(dependencyMap[13]).ClockIcon, { flex: 175374847, flexGrow: 838860800 });
      tmp10 = jsx;
      obj4 = {};
      num3 = 14;
      intl = arg1(dependencyMap[14]).intl;
      obj4.children = intl.string(arg1(dependencyMap[14]).t.aTABYx);
      items2[1] = jsx(arg1(dependencyMap[11]).Text, obj4);
      tmp11 = jsx;
      tmp12 = importDefault;
      num4 = 15;
      obj5 = {};
      obj5.style = tmp.time;
      obj5.deadline = expiresAt;
      items2[2] = jsx(importDefault(dependencyMap[15]), obj5);
      obj3.children = items2;
      tmp5 = jsxs(arg1(dependencyMap[10]).Stack, obj3);
    }
    items1[1] = tmp5;
    obj.children = items1;
    return tmp4(arg1(dependencyMap[10]).Stack, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).createChannelRecordFromInvite;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { flex: { flex: 1 }, channel: { flex: 0 } };
obj = { color: importDefault(dependencyMap[7]).colors.TEXT_FEEDBACK_POSITIVE };
obj.time = obj;
let closure_10 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCode.tsx");

export default function InstantInviteCode(invite) {
  invite = invite.invite;
  const arg1 = invite;
  const items = [invite.channel];
  let obj = { style: callback3().flex };
  const memo = React.useMemo(() => callback(invite.channel), items);
  obj = {};
  obj = { "Null": "885f3f72eb87e337d8c3a92d124fe2c5", "Null": "no.messages.885f3f72eb87e337d8c3a92d124fe2c5.compiled.messages", children: invite.code };
  const items1 = [callback(arg1(dependencyMap[11]).Text, obj), ];
  const tmp = callback3();
  items1[1] = callback(InstantInviteDetails, { channel: memo, expiresAt: invite.getExpiresAt() });
  obj.children = items1;
  obj.children = callback2(arg1(dependencyMap[10]).Stack, obj);
  return callback(View, obj);
};
export { InstantInviteDetails };
