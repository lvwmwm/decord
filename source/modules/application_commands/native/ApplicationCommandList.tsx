// Module ID: 11473
// Function ID: 89259
// Name: ApplicationCommandList
// Dependencies: [31, 27, 9594, 33, 8233, 1881, 8015, 6755, 11471, 11472, 2]
// Exports: default

// Module 11473 (ApplicationCommandList)
import result from "result";
import { FlatList } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_7 = 3 * require("AUTOCOMPLETE_ROW_HEIGHT").AUTOCOMPLETE_ROW_HEIGHT;
const result = require("AUTOCOMPLETE_ROW_HEIGHT").fileFinishedImporting("modules/application_commands/native/ApplicationCommandList.tsx");

export default function ApplicationCommandList(channel) {
  let ItemSeparatorComponent;
  let getItemLayout;
  let query;
  let style;
  channel = channel.channel;
  const onPressCommandItem = channel.onPressCommandItem;
  const onCommandsChange = channel.onCommandsChange;
  ({ style, query, ItemSeparatorComponent, getItemLayout } = channel);
  let obj = onCommandsChange(commands[4]);
  obj = { text: query };
  const items = [channel(commands[5]).ApplicationCommandType.CHAT];
  obj.commandTypes = items;
  obj = { placeholderCount: 3, limit: 7, scoreMethod: channel(commands[6]).ScoreMethod.COMMAND_OR_APPLICATION };
  query = obj.useQuery({ channel, type: "channel" }, obj, obj);
  commands = query.commands;
  const sections = query.sections;
  const scrollDown = query.scrollDown;
  const items1 = [sections, channel.guild_id, onPressCommandItem];
  let length;
  const callback = sections.useCallback((item) => {
    item = item.item;
    let found;
    if (item.inputType === channel(commands[7]).ApplicationCommandInputType.PLACEHOLDER) {
      return outer1_6(onPressCommandItem(commands[8]), {});
    } else {
      found = undefined;
      if (null != sections) {
        found = sections.find((id) => id.id === item.applicationId);
      }
      const obj = {
        command: item,
        section: found,
        onPress() {
            return found(item, found);
          },
        guildId: item.guild_id,
        highlighted: 0 === item.index
      };
      return outer1_6(onPressCommandItem(commands[9]), obj);
    }
  }, items1);
  if (null != commands) {
    length = commands.length;
  }
  const items2 = [length, onCommandsChange];
  const effect = sections.useEffect(() => {
    if (null != onCommandsChange) {
      let length;
      if (null != commands) {
        length = commands.length;
      }
      let num = 0;
      if (null != length) {
        num = length;
      }
      onCommandsChange(num);
      const tmp = onCommandsChange;
    }
  }, items2);
  const items3 = [scrollDown];
  return <scrollDown style={style} keyExtractor={function keyExtractor(id) {
    return id.id;
  }} data={commands} renderItem={callback} ItemSeparatorComponent={ItemSeparatorComponent} getItemLayout={getItemLayout} onScroll={sections.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - outer1_7) {
      scrollDown();
    }
  }, items3)} />;
};
