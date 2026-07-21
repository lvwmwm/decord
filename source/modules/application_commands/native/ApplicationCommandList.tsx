// Module ID: 11433
// Function ID: 88965
// Name: ApplicationCommandList
// Dependencies: []
// Exports: default

// Module 11433 (ApplicationCommandList)
let closure_4 = importAll(dependencyMap[0]);
const FlatList = arg1(dependencyMap[1]).FlatList;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = 3 * arg1(dependencyMap[2]).AUTOCOMPLETE_ROW_HEIGHT;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/application_commands/native/ApplicationCommandList.tsx");

export default function ApplicationCommandList(channel) {
  let ItemSeparatorComponent;
  let getItemLayout;
  let query;
  let style;
  channel = channel.channel;
  const arg1 = channel;
  const onPressCommandItem = channel.onPressCommandItem;
  const importDefault = onPressCommandItem;
  const onCommandsChange = channel.onCommandsChange;
  const importAll = onCommandsChange;
  ({ style, query, ItemSeparatorComponent, getItemLayout } = channel);
  let obj = importAll(dependencyMap[4]);
  obj = { text: query };
  const items = [arg1(dependencyMap[5]).ApplicationCommandType.CHAT];
  obj.commandTypes = items;
  obj = { scoreMethod: arg1(dependencyMap[6]).ScoreMethod.COMMAND_OR_APPLICATION };
  query = obj.useQuery({ channel, type: "channel" }, obj, obj);
  const commands = query.commands;
  const dependencyMap = commands;
  const sections = query.sections;
  const React = sections;
  const scrollDown = query.scrollDown;
  const FlatList = scrollDown;
  const items1 = [sections, channel.guild_id, onPressCommandItem];
  let length;
  const callback = React.useCallback((item) => {
    item = item.item;
    const channel = item;
    let onPressCommandItem;
    if (item.inputType === channel(commands[7]).ApplicationCommandInputType.PLACEHOLDER) {
      return callback(onPressCommandItem(commands[8]), {});
    } else {
      let found;
      if (null != sections) {
        found = sections.find((id) => id.id === item.applicationId);
      }
      onPressCommandItem = found;
      const obj = {
        command: item,
        section: found,
        onPress() {
            return found(item, found);
          },
        guildId: channel.guild_id,
        highlighted: 0 === item.index
      };
      return callback(onPressCommandItem(commands[9]), obj);
    }
  }, items1);
  if (null != commands) {
    length = commands.length;
  }
  const items2 = [length, onCommandsChange];
  const effect = React.useEffect(() => {
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
  return <FlatList style={style} keyExtractor={function keyExtractor(id) {
    return id.id;
  }} data={commands} renderItem={callback} ItemSeparatorComponent={ItemSeparatorComponent} getItemLayout={getItemLayout} onScroll={React.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - closure_7) {
      scrollDown();
    }
  }, items3)} />;
};
