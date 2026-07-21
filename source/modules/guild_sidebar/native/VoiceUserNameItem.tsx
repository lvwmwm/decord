// Module ID: 14850
// Function ID: 111906
// Name: VoiceUserNameItem
// Dependencies: []
// Exports: default

// Module 14850 (VoiceUserNameItem)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsxs: closure_6, jsx: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ container: { RECONNECT: null, osRequirement: null, maxWidth: null }, tag: {}, measuringTag: { opacity: 0 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_sidebar/native/VoiceUserNameItem.tsx");

export default function VoiceUserNameItem(arg0) {
  let color;
  let guildId;
  let isGuest;
  let member;
  let tmp11;
  let tmp7;
  let tmp9;
  let user;
  let variant;
  ({ member, user, isGuest } = arg0);
  ({ guildId, color, variant } = arg0);
  const tmp = callback5();
  let obj = { userId: user.id, guildId };
  let obj1 = callback(dependencyMap[6]);
  const displayNameStylesFont = obj1.useDisplayNameStylesFont({ displayNameStyles: importDefault(dependencyMap[5])(obj) });
  const tmp4 = callback2(React.useState(0), 2);
  const first = tmp4[0];
  let callback = tmp4[1];
  const tmp2 = importDefault(dependencyMap[5])(obj);
  [tmp7, closure_1] = callback2(React.useState(0), 2);
  const tmp6 = callback2(React.useState(0), 2);
  [tmp9, closure_2] = callback2(React.useState(true), 2);
  const tmp8 = callback2(React.useState(true), 2);
  [tmp11, closure_3] = callback2(React.useState(0), 2);
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = React.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  obj = { onLayout: callback };
  const items = [tmp.container, ];
  let measuringTag = tmp9;
  const callback2 = React.useCallback((nativeEvent) => {
    callback4(nativeEvent.nativeEvent.layout.width);
    callback3(false);
  }, []);
  if (tmp9) {
    measuringTag = tmp.measuringTag;
  }
  items[1] = measuringTag;
  obj.style = items;
  obj = { variant, color, lineClamp: 1, onLayout: callback1 };
  let tmp18 = null != displayNameStylesFont;
  if (tmp18) {
    obj1 = { fontFamily: displayNameStylesFont };
    tmp18 = obj1;
  }
  obj.style = tmp18;
  let nick;
  if (null != member) {
    nick = member.nick;
  }
  if (null == nick) {
    nick = importDefault(dependencyMap[8]).getName(user);
    const obj6 = importDefault(dependencyMap[8]);
  }
  const items1 = [nick, ];
  if (isGuest) {
    const obj2 = { "Null": 1107296850, "Null": 107218, "Null": 160063 };
    const intl = callback(dependencyMap[9]).intl;
    const items2 = ["\u2196", intl.string(callback(dependencyMap[9]).t.pFO/Ph)];
    obj2.children = items2;
    isGuest = callback3(callback(dependencyMap[7]).Text, obj2);
  }
  items1[1] = isGuest;
  obj.children = items1;
  const items3 = [callback3(callback(dependencyMap[7]).Text, obj), ];
  if (!tmp9) {
    tmp9 = 0 !== first && 0 !== tmp7 && 0 !== tmp11 && first >= tmp7 + tmp11;
    const tmp25 = 0 !== first && 0 !== tmp7 && 0 !== tmp11 && first >= tmp7 + tmp11;
  }
  if (tmp9) {
    const obj3 = { onLayout: callback2, style: tmp.tag };
    const obj4 = { userId: user.id };
    obj3.children = callback4(importDefault(dependencyMap[10]), obj4);
    tmp9 = callback4(View, obj3);
  }
  items3[1] = tmp9;
  obj.children = items3;
  return callback3(View, obj);
};
