// Module ID: 9292
// Function ID: 72598
// Name: modifyRow
// Dependencies: [31, 27, 4122, 1917, 33, 7621, 7808, 4130, 689, 566, 4319, 7650, 3803, 3800, 1273, 4126, 9293, 2]
// Exports: default

// Module 9292 (modifyRow)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import importDefaultResult from "RowManager";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function modifyRow(arg0) {
  arg0.contextType = require(7808) /* MediaGalleryItemType */.MessageContextType.SEARCH;
  arg0.renderContentOnly = true;
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
importDefaultResult = new importDefaultResult();
importDefaultResult.setOptions({ renderReplies: false, renderReactions: false });
let obj = {};
obj = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.container = obj;
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.header = _createForOfIteratorHelperLoose;
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.authorRow = obj2;
obj.headerTimestamp = { flex: 1 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/conversations/components/native/ConversationPreviewMessage.tsx");

export default function ConversationPreviewMessage(message) {
  message = message.message;
  const guildId = message.guildId;
  let setting;
  const tmp = callback2();
  let obj = message(setting[9]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.roleStyle);
  let obj1 = message(setting[9]);
  const items1 = [closure_6];
  const items2 = [guildId, message.author.id];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_6.getMember(guildId, message.author.id), items2);
  message(setting[10]);
  if ("username" === stateFromStores) {
    let colorString;
    if (null != stateFromStores1) {
      colorString = stateFromStores1.colorString;
    }
    if (null != colorString) {
      obj = { color: stateFromStores1.colorString };
    }
    let obj3 = message(setting[11]);
    let colorStrings;
    if (null != stateFromStores1) {
      colorStrings = stateFromStores1.colorStrings;
    }
    const processColorStringsArray = obj3.useProcessColorStringsArray(colorStrings);
    let obj4 = message(setting[11]);
    const isRoleStyleAndRoleColorsEligibleForERC = obj4.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, message.author.id, stateFromStores, processColorStringsArray);
    const TimestampHourCycle = message(setting[12]).TimestampHourCycle;
    setting = TimestampHourCycle.useSetting();
    const items3 = [message.timestamp, setting];
    obj = { style: tmp.container };
    obj1 = { style: tmp.header };
    const memo = React.useMemo(() => message(setting[13]).calendarFormat(message.timestamp, true, setting), items3);
    const obj2 = { user: message.author, guildId, size: message(setting[14]).AvatarSizes.XXSMALL };
    const items4 = [callback(message(setting[14]).Avatar, obj2), , ];
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
      tmp27 = callback(message(setting[14]).RoleDot, obj4);
    }
    const items5 = [tmp27, ];
    const obj5 = { variant: "text-md/medium", lineClamp: 1, style: {} };
    let tmp35;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp35 = processColorStringsArray;
    }
    obj5.gradientColors = tmp35;
    obj5.children = tmp5;
    items5[1] = callback(message(setting[15]).Text, obj5);
    obj3.children = items5;
    items4[1] = closure_8(View, obj3);
    const obj6 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, style: tmp.headerTimestamp, children: memo };
    items4[2] = callback(message(setting[15]).Text, obj6);
    obj1.children = items4;
    const items6 = [closure_8(View, obj1), ];
    const obj7 = { pointerEvents: "none", horizontalOffset: 0, modifyRow, message, rowGenerator: closure_9 };
    items6[1] = callback(guildId(setting[16]), obj7);
    obj.children = items6;
    return closure_8(View, obj);
  }
};
