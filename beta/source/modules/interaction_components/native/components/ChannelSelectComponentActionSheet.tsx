// Module ID: 12110
// Function ID: 12111
// Name: ChannelSelectComponentActionSheet
// Dependencies: [19, 2041, 2063, 21, 8421, 12107, 12105, 8423, 1177, 9899, 2]
// Exports: default

// Module 12110 (ChannelSelectComponentActionSheet)
import native from "native" /* 1177 */;
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 8421 */;
import NativeSearchableSelectActionComponentUtils from "NativeSearchableSelectActionComponentUtils" /* 8423 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildStore from "GuildStore" /* 2063 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx");

export default function ChannelSelectComponentActionSheet(guildId) {
  ({ selectionActionComponent, channelId } = guildId);
  guildId = guildId.guildId;
  noop = undefined;
  const channelTypes = selectionActionComponent.channelTypes;
  const items = [channelId, channelTypes];
  ({ labelComponent, containerId, onSubmit, allowEmpty } = guildId);
  const callback = noop.useCallback((arg0) => SearchableSelectActionComponentUtils.queryChannels(arg0, channelId, channelTypes), items);
  const tmp2 = guildId(channelTypes[5])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  ({ selectedOptions, submitSelection: c3 } = tmp2);
  ({ options, isSelected, onPressOptionItem, setQuery } = tmp2);
  return jsx(guildId(channelTypes[6]), {
    onPressOptionItem,
    renderIcon(value) {
      channel = ChannelStore.getChannel(value.value);
      if (null == channel) {
        return null;
      } else {
        const guild = GuildStore.getGuild(guildId);
        const channelIconData = NativeSearchableSelectActionComponentUtils.getChannelIconData(channel, guild);
        let tmp8 = null != channelIconData;
        if (tmp8) {
          const obj2 = { source: channelIconData };
          tmp8 = jsx(native.Icon, { source: channelIconData });
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
      return _undefined();
    },
    onQueryChange: setQuery,
    itemAccessibilityLabel(value) {
      channel = channel.getChannel(value.value);
      if (null != channel) {
        const obj = { channel };
        return guildId(channelTypes[9])(obj);
      }
    },
    channelId,
    allowEmpty
  });
};
