// Module ID: 19300
// Function ID: 19301
// Name: FormChannelPicker
// Dependencies: [19, 4823, 21, 4971, 15144, 504, 5604, 9041, 5210, 19301, 2002, 8502, 8551, 5234, 1128, 7305, 2]
// Exports: default

// Module 19300 (FormChannelPicker)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx");

export default function FormChannelPicker(channelId) {
  let guildId;
  let items2;
  let items3;
  let onChange;
  let str;
  channelId = channelId.channelId;
  ({ guildId: importDefault, onChange } = channelId);
  let stateFromStores;
  onChange = undefined;
  let tmp2 = stateFromStores;
  const tmp = importDefault;
  const tmp3 = require("FormStyles")();
  const tmp4 = closure_6();
  let obj = channelId(stateFromStores[5]);
  const items = [onChange];
  const items1 = [channelId];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let stringResult = require("useChannelName")(stateFromStores);
  if (onChange == null) {
    onChange = () => {

    };
  }
  const obj2 = {
    style: items2,
    accessibilityRole: "link",
    onPress: function handleSelectChannel() {
      let id;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj = { guildId: importDefault, selectedChannelId: id, onChannelSelected: onChange };
      id = undefined;
      ActionSheetActionCreatorsDefault;
      const tmp2 = asyncRequire(19301, dependencyMap.paths);
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      openLazy(tmp2, "ChannelSelectorActionSheet", obj);
    },
    children: items3
  };
  items2 = [tmp4.container, tmp3.textInput];
  let tmp10 = null;
  const tmp8 = closure_5;
  const tmpResult = tmp(tmp2[7]);
  if (null != stateFromStores) {
    const tmp5Result = channelId(tmp2[11]);
    let TextIcon = tmp5Result.getChannelIconComponent(stateFromStores);
    if (TextIcon == null) {
      TextIcon = tmp5(tmp2[12]).TextIcon;
    }
    tmp10 = closure_4(TextIcon, { size: "sm" });
  }
  items3 = [tmp10, , ];
  const obj3 = { style: tmp4.content, variant: "text-md/medium", color: str, children: stringResult };
  str = "text-muted";
  const Text = tmp5(tmp2[13]).Text;
  if (null != channelId) {
    str = "text-default";
  }
  if (stringResult == null) {
    const intl = tmp5(tmp2[14]).intl;
    stringResult = intl.string(tmp5(tmp2[14]).t.r2ptsz);
  }
  items3[1] = closure_4(Text, obj3);
  items3[2] = closure_4(channelId(tmp2[15]).ChevronSmallRightIcon, { size: "md" });
  return tmp8(tmpResult, obj2);
};
