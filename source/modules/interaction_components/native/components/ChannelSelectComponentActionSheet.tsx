// Module ID: 10961
// Function ID: 85251
// Name: ChannelSelectComponentActionSheet
// Dependencies: []
// Exports: default

// Module 10961 (ChannelSelectComponentActionSheet)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx");

export default function ChannelSelectComponentActionSheet(guildId) {
  let allowEmpty;
  let channelId;
  let containerId;
  let isSelected;
  let labelComponent;
  let onPressOptionItem;
  let onSubmit;
  let options;
  let selectedOptions;
  let selectionActionComponent;
  let setQuery;
  ({ selectionActionComponent, channelId } = guildId);
  const arg1 = channelId;
  guildId = guildId.guildId;
  const importDefault = guildId;
  const channelTypes = selectionActionComponent.channelTypes;
  const dependencyMap = channelTypes;
  const items = [channelId, channelTypes];
  ({ labelComponent, containerId, onSubmit, allowEmpty } = guildId);
  const callback = React.useCallback((arg0) => channelId(channelTypes[4]).queryChannels(arg0, channelId, channelTypes), items);
  const tmp2 = importDefault(dependencyMap[5])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  ({ selectedOptions, submitSelection: closure_3 } = tmp2);
  ({ options, isSelected, onPressOptionItem, setQuery } = tmp2);
  return jsx(importDefault(dependencyMap[6]), {
    onPressOptionItem,
    renderIcon(value) {
      const channel = store.getChannel(value.value);
      if (null == channel) {
        return null;
      } else {
        const guild = guild.getGuild(guildId);
        let obj = channelId(channelTypes[7]);
        const channelIconData = obj.getChannelIconData(channel, guild);
        let tmp8 = null != channelIconData;
        if (tmp8) {
          obj = { source: channelIconData };
          tmp8 = callback2(channelId(channelTypes[8]).Icon, obj);
        }
        return tmp8;
      }
    },
    selectionActionComponent,
    labelComponent,
    options,
    selectedCount: selectedOptions.length,
    selectedOptions,
    isSelected,
    submitSelection() {
      return callback();
    },
    onQueryChange: setQuery,
    itemAccessibilityLabel(value) {
      const channel = store.getChannel(value.value);
      if (null != channel) {
        const obj = { channel };
        return guildId(channelTypes[9])(obj);
      }
    },
    channelId,
    allowEmpty
  });
};
