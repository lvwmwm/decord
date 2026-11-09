// Module ID: 13486
// Function ID: 13487
// Name: ChannelSelectComponentActionSheet
// Dependencies: [19, 4989, 5011, 21, 8775, 13485, 12326, 8777, 1187, 9165, 2]
// Exports: default

// Module 13486 (ChannelSelectComponentActionSheet)
import Fragment from "Fragment" /* 21 */;
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 8775 */;
import NativeSearchableSelectActionComponentUtils from "NativeSearchableSelectActionComponentUtils" /* 8777 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import GuildStore from "GuildStore" /* 5011 */;
import size from "module_2" /* 2 */;

let channel;

let react = react_mod;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx");

export default function ChannelSelectComponentActionSheet(guildId) {
  let _undefined;
  let allowEmpty;
  let c3;
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
  guildId = guildId.guildId;
  react = undefined;
  const channelTypes = selectionActionComponent.channelTypes;
  const items = [channelId, channelTypes];
  ({ labelComponent, containerId, onSubmit, allowEmpty } = guildId);
  const callback = react.useCallback((arg0) => {
    const obj = SearchableSelectActionComponentUtils;
    return obj.queryChannels(arg0, channelId, channelTypes);
  }, items);
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
        const obj = NativeSearchableSelectActionComponentUtils;
        const channelIconData = obj.getChannelIconData(channel, guild);
        let tmp8 = null != channelIconData;
        const tmp5 = require;
        if (tmp8) {
          tmp8 = jsx(tmp5(1187).Icon, { source: channelIconData });
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
    itemAccessibilityLabel: function accessibilityLabel(value) {
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
