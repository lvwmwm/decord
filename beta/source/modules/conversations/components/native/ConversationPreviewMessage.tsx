// Module ID: 7373
// Function ID: 7374
// Name: ConversationPreviewMessage
// Dependencies: [19, 17, 4825, 2108, 21, 7374, 7583, 4836, 576, 504, 4988, 7403, 2021, 4512, 1177, 4832, 8112, 2]
// Exports: default

// Module 7373 (ConversationPreviewMessage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DateUtils from "DateUtils" /* 4512 */;
import RowGeneratorDefault from "RowGenerator" /* 7374 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 7583 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
function modifyRow(arg0) {
  arg0.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
  arg0.renderContentOnly = true;
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let rowGenerator = new RowGeneratorDefault();
rowGenerator.setOptions({ renderReplies: false, renderReactions: false });
let createStyles = createStyles_mod;
let obj2 = { container: obj3, header: obj4, authorRow: obj5, headerTimestamp: { flex: 1 } };
obj3 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewMessage.tsx");

export default function ConversationPreviewMessage(message) {
  let items4;
  let items5;
  let items6;
  let roleStyle;
  let tmp28;
  message = message.message;
  const guildId = message.guildId;
  let setting;
  const tmp = closure_11();
  rowGenerator = message(setting[9]);
  const items = [AccessibilityStore];
  const stateFromStores = rowGenerator.useStateFromStores(items, () => roleStyle.roleStyle);
  const items1 = [GuildMemberStore];
  const items2 = [guildId, message.author.id];
  const obj2 = message(setting[9]);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildMemberStore.getMember(guildId, message.author.id), items2);
  message(setting[10]);
  if ("username" === stateFromStores) {
    let colorString;
    if (stateFromStores1 != null) {
      colorString = stateFromStores1.colorString;
    }
    let colorStrings;
    const useProcessColorStringsArray = message(setting[11]).useProcessColorStringsArray;
    message(setting[11]);
    if (stateFromStores1 != null) {
      colorStrings = stateFromStores1.colorStrings;
    }
    const processColorStringsArray = useProcessColorStringsArray(colorStrings);
    const tmp2Result2 = message(setting[11]);
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result2.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, message.author.id, stateFromStores, processColorStringsArray);
    const TimestampHourCycle = tmp2(tmp3[12]).TimestampHourCycle;
    setting = TimestampHourCycle.useSetting();
    const items3 = [message.timestamp, setting];
    const obj4 = { style: tmp.container, children: items6 };
    const obj5 = { style: tmp.header, children: items4 };
    const memo = react.useMemo(() => {
      const obj = DateUtils;
      return obj.calendarFormat(message.timestamp, true, setting);
    }, items3);
    const obj6 = { user: message.author, guildId, size: message(setting[14]).AvatarSizes.XXSMALL };
    const Avatar = tmp2(tmp3[14]).Avatar;
    items4 = [closure_7(Avatar, obj6), , ];
    let tmp25Result = "dot" === stateFromStores;
    const obj7 = { style: tmp.authorRow, children: items5 };
    if (tmp25Result) {
      let colorString1;
      if (stateFromStores1 != null) {
        colorString1 = stateFromStores1.colorString;
      }
      tmp25Result = null != colorString1;
    }
    if (tmp25Result) {
      const obj8 = { size: "small", color: null, colors: null };
      ({ colorString: obj9.color, colorStrings: obj9.colors } = stateFromStores1);
      tmp25Result = tmp25(tmp2(tmp3[14]).RoleDot, obj8);
    }
    items5 = [tmp25Result, ];
    const obj10 = { variant: "text-md/medium", lineClamp: 1, style: {}, gradientColors: tmp28, children: tmp7 };
    tmp28 = undefined;
    const Text = tmp2(tmp3[15]).Text;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp28 = processColorStringsArray;
    }
    items5[1] = closure_7(Text, obj10);
    items4[1] = closure_8(View, obj7);
    const obj11 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, style: tmp.headerTimestamp, children: memo };
    items4[2] = closure_7(message(setting[15]).Text, obj11);
    items6 = [closure_8(View, obj5), ];
    const obj12 = { pointerEvents: "none", horizontalOffset: 0, modifyRow, message, rowGenerator };
    items6[1] = closure_7(guildId(setting[16]), obj12);
    return closure_8(View, obj4);
  }
};
