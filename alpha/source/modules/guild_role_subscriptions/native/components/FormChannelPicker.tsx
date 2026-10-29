// Module ID: 19844
// Function ID: 19845
// Name: FormChannelPicker
// Dependencies: [19, 17, 4857, 21, 15640, 504, 5641, 17109, 8610, 6963, 5271, 1125, 5247, 19845, 2000, 2]
// Exports: default

// Module 19844 (FormChannelPicker)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import useChannelNameDefault from "useChannelName" /* 5641 */;
import FormStylesDefault from "FormStyles" /* 15640 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;
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
    const tmp3Result = channelId(17109);
    let TextIcon = tmp3Result.getChannelIconComponentOrDefault(stateFromStores);
  } else {
    TextIcon = tmp3(8610).TextIcon;
  }
  const TableRow = tmp3(6963).TableRow;
  if (tmp6Result == null) {
    const obj4 = { variant: "text-md/medium", color: "text-muted", children: intl.string(channelId(1125).t.r2ptsz) };
    const Text = tmp3(5271).Text;
    intl = tmp3(1125).intl;
    tmp6Result = tmp6(Text, obj4);
  }
  return <tmp7 style={tmp2.inputContainer}>{null}</tmp7>;
};
