// Module ID: 11894
// Function ID: 11895
// Name: ApplicationCommandList
// Dependencies: [19, 17, 9726, 21, 8719, 1979, 8599, 6943, 11892, 11893, 2]
// Exports: default

// Module 11894 (ApplicationCommandList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 9726 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let item, nativeEvent;

const FlatList = react_native.FlatList;
const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
const jsx = Fragment.jsx;
let closure_7 = 3 * AUTOCOMPLETE_ROW_HEIGHT;
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandList.tsx");

export default function ApplicationCommandList(channel) {
  let ItemSeparatorComponent;
  let getItemLayout;
  let items;
  let query;
  let style;
  channel = channel.channel;
  const onPressCommandItem = channel.onPressCommandItem;
  const onCommandsChange = channel.onCommandsChange;
  let commands;
  ({ style, query, ItemSeparatorComponent, getItemLayout } = channel);
  const tmp = onCommandsChange(commands[4]);
  const useQuery = tmp.useQuery;
  const obj = { text: query, commandTypes: items };
  items = [channel(commands[5]).ApplicationCommandType.CHAT];
  const obj2 = { placeholderCount: 3, limit: 7, scoreMethod: channel(commands[6]).ScoreMethod.COMMAND_OR_APPLICATION };
  const query1 = useQuery({ channel, type: "channel" }, obj, obj2);
  commands = query1.commands;
  const sections = query1.sections;
  const scrollDown = query1.scrollDown;
  const items1 = [sections, channel.guild_id, onPressCommandItem];
  let length;
  const callback = sections.useCallback((item) => {
    item = item.item;
    let found;
    const index = item.index;
    if (item.inputType === channel(commands[7]).ApplicationCommandInputType.PLACEHOLDER) {
      return jsx(onPressCommandItem(commands[8]), {});
    } else {
      found = undefined;
      const arr = sections;
      if (sections != null) {
        found = arr.find((id) => id.id === item.applicationId);
      }
      return jsx(onPressCommandItem(commands[9]), {
        command: item,
        section: found,
        onPress() {
            return onPressCommandItem(item, found);
          },
        guildId: item.guild_id,
        highlighted: 0 === index
      });
    }
  }, items1);
  const useEffect = sections.useEffect;
  const obj3 = sections;
  if (commands != null) {
    length = commands.length;
  }
  const items2 = [length, onCommandsChange];
  const effect = useEffect(() => {
    if (onCommandsChange != null) {
      let num;
      if (commands != null) {
        num = commands.length;
      }
      if (num == null) {
        num = 0;
      }
      tmp(num);
    }
  }, items2);
  const items3 = [scrollDown];
  return <scrollDown style={style} keyExtractor={function keyExtractor(id) {
    return id.id;
  }} data={commands} renderItem={callback} ItemSeparatorComponent={ItemSeparatorComponent} getItemLayout={getItemLayout} onScroll={obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - closure_7) {
      scrollDown();
    }
  }, items3)} />;
};
