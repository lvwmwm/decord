// Module ID: 7060
// Function ID: 56468
// Name: onDismiss
// Dependencies: []
// Exports: default, openBurstReactionFirstSendActionSheet

// Module 7060 (onDismiss)
function onDismiss() {
  importDefault(dependencyMap[5]).hideActionSheet();
}
importAll(dependencyMap[0]);
const tmp3 = arg1(dependencyMap[1]);
const View = tmp3.View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Null": "message", "Null": "properties", "Null": 1, "Null": 250 } };
obj = {};
const merged = Object.assign(tmp3.StyleSheet.absoluteFillObject);
obj["flex"] = 1;
obj["alignItems"] = "center";
obj["justifyContent"] = "center";
obj["top"] = -120;
obj.fill = obj;
const obj1 = { <string:1199788897>: null, <string:480689183>: null, <string:3327199329>: null, tintColor: importDefault(dependencyMap[4]).colors.TEXT_SUBTLE };
obj.nitroWheel = obj1;
obj.textContainer = {};
obj.body = {};
obj.content = { paddingHorizontal: 16 };
let closure_6 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("components_native/reactions/BurstReactionFirstSendActionSheet.tsx");

export default function BurstReactionFirstSendActionSheet(arg0) {
  let channelId;
  let emoji;
  let messageId;
  ({ emoji, channelId, messageId } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  obj = { quest: arg1(dependencyMap[7]).t.5TpPli };
  const deviceSpecificString = obj.getDeviceSpecificString(obj, arg1(dependencyMap[7]).t.2Yp7dF);
  obj = { backdropOpacity: arg1(dependencyMap[9]).BACKDROP_OPACITY, contentStyles: tmp.content };
  const obj1 = { style: tmp.fill };
  const obj2 = { channelId, emoji, messageId, reactionType: arg1(dependencyMap[11]).ReactionTypes.BURST };
  obj1.children = callback(importDefault(dependencyMap[10]), obj2);
  obj.backdropChildren = callback(View, obj1);
  obj.onDismiss = onDismiss;
  const obj3 = { style: tmp.container };
  const obj4 = { style: tmp.textContainer };
  const items = [callback(arg1(dependencyMap[12]).NitroWheel, { style: tmp.nitroWheel }), ];
  const obj6 = { variant: "heading-xl/bold" };
  const intl = arg1(dependencyMap[7]).intl;
  obj6.children = intl.string(arg1(dependencyMap[7]).t.NX7HI7);
  items[1] = callback(arg1(dependencyMap[13]).Text, obj6);
  obj4.children = items;
  const items1 = [callback2(View, obj4), , ];
  const obj5 = { style: tmp.nitroWheel };
  const tmp3 = importDefault(dependencyMap[10]);
  items1[1] = callback(View, { style: tmp.body, children: callback(arg1(dependencyMap[13]).Text, obj8) });
  const obj9 = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj9.text = intl2.string(arg1(dependencyMap[7]).t.+IrDzN);
  obj9.onPress = onDismiss;
  items1[2] = callback(arg1(dependencyMap[14]).Button, obj9);
  obj3.children = items1;
  obj.children = callback2(View, obj3);
  return callback(arg1(dependencyMap[8]).BottomSheet, obj);
};
export const openBurstReactionFirstSendActionSheet = function openBurstReactionFirstSendActionSheet(arg0) {
  let channelId;
  let emoji;
  let messageId;
  ({ channelId, messageId, emoji } = arg0);
  let obj = importDefault(dependencyMap[5]);
  obj.hideActionSheet();
  if (obj2.UNSAFE_isDismissibleContentDismissed(arg1(dependencyMap[16]).DismissibleContent.SUPER_REACTIONS_FIRST_SENT)) {
    obj = { type: "BURST_REACTION_EFFECT_SEND", channelId, messageId, emoji };
    importDefault(dependencyMap[19]).dispatch(obj);
    const obj6 = importDefault(dependencyMap[19]);
  } else {
    const result = arg1(dependencyMap[15]).UNSAFE_markDismissibleContentAsDismissed(arg1(dependencyMap[16]).DismissibleContent.SUPER_REACTIONS_FIRST_SENT);
    const obj3 = arg1(dependencyMap[15]);
    obj = { channelId, messageId, emoji };
    importDefault(dependencyMap[5]).openLazy(arg1(dependencyMap[18])(dependencyMap[17], dependencyMap.paths), "BurstReactionFirstSendActionSheet", obj);
    const obj4 = importDefault(dependencyMap[5]);
  }
};
