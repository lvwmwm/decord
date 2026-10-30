// Module ID: 13915
// Function ID: 13916
// Name: ApplicationCommandList
// Dependencies: [19, 10205, 21, 10296, 1993, 9748, 5678, 13913, 13914, 7288, 2]
// Exports: default

// Module 13915 (ApplicationCommandList)
import Fragment from "Fragment" /* 21 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 10205 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let item, nativeEvent;

const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
const jsx = Fragment.jsx;
let closure_6 = 3 * AUTOCOMPLETE_ROW_HEIGHT;
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandList.tsx");

export default function ApplicationCommandList(channel) {
  let ItemSeparatorComponent;
  let items;
  let query;
  let style;
  channel = channel.channel;
  const onPressCommandItem = channel.onPressCommandItem;
  const onCommandsChange = channel.onCommandsChange;
  let commands;
  ({ style, query, ItemSeparatorComponent } = channel);
  const tmp = commands;
  let obj = { text: query, commandTypes: items };
  const useQuery = onCommandsChange(commands[3]).useQuery;
  const tmp2 = onCommandsChange(commands[3]);
  items = [channel(commands[4]).ApplicationCommandType.CHAT];
  const obj2 = { placeholderCount: 3, limit: 7, scoreMethod: channel(commands[5]).ScoreMethod.COMMAND_OR_APPLICATION };
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
    if (item.inputType === channel(commands[6]).ApplicationCommandInputType.PLACEHOLDER) {
      return scrollDown(onPressCommandItem(commands[7]), {});
    } else {
      found = undefined;
      const arr = sections;
      if (sections != null) {
        found = arr.find((id) => id.id === item.applicationId);
      }
      const obj = {
        command: item,
        section: found,
        onPress() {
            return onPressCommandItem(item, found);
          },
        guildId: item.guild_id,
        highlighted: 0 === index
      };
      return scrollDown(onPressCommandItem(commands[8]), obj);
    }
  }, items1);
  const useEffect = sections.useEffect;
  const obj3 = sections;
  const tmp3 = channel;
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
  const callback1 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height >= nativeEvent.contentSize.height - closure_6) {
      scrollDown();
    }
  }, items3);
  const obj4 = {
    style,
    keyExtractor(id) {
      return id.id;
    },
    data: commands,
    maintainVisibleContentPosition: { disabled: true },
    getItemType(inputType) {
      let str = "command";
      if (inputType.inputType === channel(commands[6]).ApplicationCommandInputType.PLACEHOLDER) {
        str = "placeholder";
      }
      return str;
    },
    renderItem: callback,
    ItemSeparatorComponent,
    onScroll: callback1
  };
  return scrollDown(tmp3(tmp[9]).FlashList, obj4);
};
