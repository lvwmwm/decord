// Module ID: 20377
// Function ID: 20378
// Name: FormChannelPicker
// Dependencies: [19, 4989, 21, 504, 5776, 17554, 8723, 7038, 5751, 1113, 5374, 20378, 2118, 2]
// Exports: default

// Module 20377 (FormChannelPicker)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import useChannelNameDefault from "useChannelName" /* 5776 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;
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
    const tmpResult = tmp(17554);
    let TextIcon = tmpResult.getChannelIconComponentOrDefault(stateFromStores);
  } else {
    TextIcon = tmp(8723).TextIcon;
  }
  const TableRow = tmp(7038).TableRow;
  if (tmp5Result == null) {
    const obj3 = { variant: "body-md/medium", color: "text-muted", children: intl.string(tmp(1113).t.r2ptsz) };
    const Text = tmp(5751).Text;
    intl = tmp(1113).intl;
    tmp5Result = tmp5(Text, obj3);
  }
  return <TableRow icon={null} label={tmp5Result} arrow onPress={function handleSelectChannel() {
    let id;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = { guildId: importDefault, selectedChannelId: id, onChannelSelected: dependencyMap };
    id = undefined;
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(20378, dependencyMap.paths);
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    openLazy(tmp2, "ChannelSelectorActionSheet", obj);
  }} />;
};
