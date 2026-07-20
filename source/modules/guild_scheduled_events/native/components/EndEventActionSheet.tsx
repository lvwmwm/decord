// Module ID: 12083
// Function ID: 93205
// Name: EndEventActionSheet
// Dependencies: []
// Exports: default

// Module 12083 (EndEventActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).EXPLICIT_END_EVENT_SHEET_KEY;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { container: {} };
obj = { ddd: 0, ind: 137439025, ty: 1452940460, fontFamily: arg1(dependencyMap[3]).Fonts.PRIMARY_BOLD, color: importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.title = obj;
obj.subtitle = { accessible: null, id: null };
obj.cancelButtonContainer = {};
obj.confirmButtonContainer = { "Null": "_mixedIntoPredicates", "Null": "chart" };
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EndEventActionSheet.tsx");

export default function EndEventActionSheet(channel) {
  channel = channel.channel;
  const arg1 = channel;
  function handleClose() {
    activeEvent(handleClose[8]).hideActionSheet(closure_4);
    const obj = activeEvent(handleClose[8]);
    channel(handleClose[9]).handleDisconnect(channel);
  }
  const dependencyMap = handleClose;
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const activeEvent = obj.useActiveEvent(channel.id);
  const importDefault = activeEvent;
  if (null == activeEvent) {
    return null;
  } else {
    obj = {};
    obj = { style: tmp.container };
    const obj1 = { style: tmp.title, accessibilityRole: "header" };
    const intl = arg1(dependencyMap[12]).intl;
    obj1.children = intl.string(arg1(dependencyMap[12]).t.4Ao8LC);
    const items = [callback(arg1(dependencyMap[11]).LegacyText, obj1), , , ];
    const obj2 = { style: tmp.subtitle };
    const intl2 = arg1(dependencyMap[12]).intl;
    obj2.children = intl2.string(arg1(dependencyMap[12]).t.0I0B8f);
    items[1] = callback(arg1(dependencyMap[13]).Text, obj2);
    const obj3 = { style: tmp.cancelButtonContainer };
    const obj4 = {};
    const intl3 = arg1(dependencyMap[12]).intl;
    obj4.text = intl3.string(arg1(dependencyMap[12]).t.P60OAX);
    obj4.grow = true;
    obj4.onPress = handleClose;
    obj3.children = callback(arg1(dependencyMap[14]).Button, obj4);
    items[2] = callback(View, obj3);
    const obj5 = { style: tmp.confirmButtonContainer };
    const obj6 = {};
    const intl4 = arg1(dependencyMap[12]).intl;
    obj6.text = intl4.string(arg1(dependencyMap[12]).t.mjB9pd);
    obj6.onPress = function onPress() {
      if (null != activeEvent) {
        activeEvent(handleClose[15]).endEvent(activeEvent.id, activeEvent.guild_id);
        handleClose();
        const obj = activeEvent(handleClose[15]);
      }
    };
    obj5.children = callback(arg1(dependencyMap[14]).Button, obj6);
    items[3] = callback(View, obj5);
    obj.children = items;
    obj.children = callback2(View, obj);
    return callback(importDefault(dependencyMap[10]), obj);
  }
};
