// Module ID: 19904
// Function ID: 19905
// Name: FormChannelPicker
// Dependencies: [19, 4643, 21, 504, 5410, 16524, 7561, 6925, 5385, 1112, 5008, 19905, 2119, 2]
// Exports: default

// Module 19904 (FormChannelPicker)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import useChannelNameDefault from "useChannelName" /* 5410 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx");

export default function FormChannelPicker(channelId) {
  let guildId;
  let intl;
  let onChannelSelected;
  channelId = channelId.channelId;
  ({ guildId: importDefault, onChange: dependencyMap } = channelId);
  let stateFromStores;
  const tmp = channelId;
  let tmp2 = dependencyMap;
  let obj = channelId(504);
  const items = [stateFromStores];
  const items1 = [channelId];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp5Result = useChannelNameDefault(stateFromStores);
  if (null != stateFromStores) {
    const tmpResult = tmp(16524);
    let TextIcon = tmpResult.getChannelIconComponentOrDefault(stateFromStores);
  } else {
    TextIcon = tmp(7561).TextIcon;
  }
  const TableRow = tmp(6925).TableRow;
  if (tmp5Result == null) {
    const obj3 = { variant: "body-md/medium", color: "text-muted", children: intl.string(tmp(1112).t.r2ptsz) };
    const Text = tmp(5385).Text;
    intl = tmp(1112).intl;
    tmp5Result = tmp5(Text, obj3);
  }
  return <TableRow icon={null} label={tmp5Result} arrow onPress={function handleSelectChannel() {
    let id;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = { guildId: importDefault, selectedChannelId: id, onChannelSelected: dependencyMap };
    id = undefined;
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(19905, dependencyMap.paths);
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    openLazy(tmp2, "ChannelSelectorActionSheet", obj);
  }} />;
};
