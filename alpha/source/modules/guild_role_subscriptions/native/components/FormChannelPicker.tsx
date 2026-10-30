// Module ID: 19907
// Function ID: 19908
// Name: FormChannelPicker
// Dependencies: [19, 17, 4858, 21, 15680, 504, 5647, 17163, 8644, 6969, 5619, 1114, 5253, 19908, 1995, 2]
// Exports: default

// Module 19907 (FormChannelPicker)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import FormStylesDefault from "FormStyles" /* 15680 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx");

export default function FormChannelPicker(channelId) {
  let guildId;
  let intl;
  let onChannelSelected;
  channelId = channelId.channelId;
  ({ guildId: importDefault, onChange: dependencyMap } = channelId);
  let tmp2 = FormStylesDefault();
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp6Result = useChannelNameDefault(stateFromStores);
  if (null != stateFromStores) {
    const tmp3Result = channelId(17163);
    let TextIcon = tmp3Result.getChannelIconComponentOrDefault(stateFromStores);
  } else {
    TextIcon = tmp3(8644).TextIcon;
  }
  const TableRow = tmp3(6969).TableRow;
  if (tmp6Result == null) {
    const obj4 = { variant: "text-md/medium", color: "text-muted", children: intl.string(channelId(1114).t.r2ptsz) };
    const Text = tmp3(5619).Text;
    intl = tmp3(1114).intl;
    tmp6Result = tmp6(Text, obj4);
  }
  return <tmp7 style={tmp2.inputContainer}>{null}</tmp7>;
};
