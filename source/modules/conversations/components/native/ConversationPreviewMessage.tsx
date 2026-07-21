// Module ID: 9284
// Function ID: 72533
// Name: modifyRow
// Dependencies: []
// Exports: default

// Module 9284 (modifyRow)
function modifyRow(arg0) {
  arg0.contextType = arg1(dependencyMap[6]).MessageContextType.SEARCH;
  arg0.renderContentOnly = true;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult();
importDefaultResult.setOptions({ "Bool(true)": null, "Bool(true)": null });
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = { gap: importDefault(dependencyMap[8]).space.PX_4 };
obj.container = obj;
obj1 = { gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.header = obj1;
const tmp2 = arg1(dependencyMap[4]);
obj.authorRow = { gap: importDefault(dependencyMap[8]).space.PX_4 };
obj.headerTimestamp = { flex: 1 };
let closure_10 = obj1.createStyles(obj);
const obj2 = { gap: importDefault(dependencyMap[8]).space.PX_4 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/conversations/components/native/ConversationPreviewMessage.tsx");

export default function ConversationPreviewMessage(message) {
  message = message.message;
  const arg1 = message;
  const guildId = message.guildId;
  const importDefault = guildId;
  let dependencyMap;
  const tmp = callback2();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  let obj1 = arg1(dependencyMap[9]);
  const items1 = [closure_6];
  const items2 = [guildId, message.author.id];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => member.getMember(guildId, message.author.id), items2);
  arg1(dependencyMap[10]);
  if ("username" === stateFromStores) {
    let colorString;
    if (null != stateFromStores1) {
      colorString = stateFromStores1.colorString;
    }
    if (null != colorString) {
      obj = { color: stateFromStores1.colorString };
    }
    let obj3 = arg1(dependencyMap[11]);
    let colorStrings;
    if (null != stateFromStores1) {
      colorStrings = stateFromStores1.colorStrings;
    }
    const processColorStringsArray = obj3.useProcessColorStringsArray(colorStrings);
    let obj4 = arg1(dependencyMap[11]);
    const isRoleStyleAndRoleColorsEligibleForERC = obj4.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, message.author.id, stateFromStores, processColorStringsArray);
    const TimestampHourCycle = arg1(dependencyMap[12]).TimestampHourCycle;
    const setting = TimestampHourCycle.useSetting();
    dependencyMap = setting;
    const items3 = [message.timestamp, setting];
    obj = { style: tmp.container };
    obj1 = { style: tmp.header };
    const memo = React.useMemo(() => message(setting[13]).calendarFormat(message.timestamp, true, setting), items3);
    const obj2 = { user: message.author, guildId, size: arg1(dependencyMap[14]).AvatarSizes.XXSMALL };
    const items4 = [callback(arg1(dependencyMap[14]).Avatar, obj2), , ];
    obj3 = { style: tmp.authorRow };
    let tmp27 = "dot" === stateFromStores;
    if (tmp27) {
      let colorString1;
      if (null != stateFromStores1) {
        colorString1 = stateFromStores1.colorString;
      }
      tmp27 = null != colorString1;
    }
    if (tmp27) {
      obj4 = { size: "small" };
      ({ colorString: obj10.color, colorStrings: obj10.colors } = stateFromStores1);
      tmp27 = callback(arg1(dependencyMap[14]).RoleDot, obj4);
    }
    const items5 = [tmp27, ];
    const obj5 = { style: {} };
    let tmp35;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp35 = processColorStringsArray;
    }
    obj5.gradientColors = tmp35;
    obj5.children = tmp5;
    items5[1] = callback(arg1(dependencyMap[15]).Text, obj5);
    obj3.children = items5;
    items4[1] = closure_8(View, obj3);
    const obj6 = { style: tmp.headerTimestamp, children: memo };
    items4[2] = callback(arg1(dependencyMap[15]).Text, obj6);
    obj1.children = items4;
    const items6 = [closure_8(View, obj1), ];
    const obj7 = { -1034289856: "<string:553648726>", -1031355792: "<string:68987969>", modifyRow, message, rowGenerator: importDefaultResult };
    items6[1] = callback(importDefault(dependencyMap[16]), obj7);
    obj.children = items6;
    return closure_8(View, obj);
  }
};
