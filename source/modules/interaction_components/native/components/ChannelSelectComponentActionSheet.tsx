// Module ID: 10999
// Function ID: 85502
// Name: ChannelSelectComponentActionSheet
// Dependencies: [31, 1348, 1838, 33, 7893, 10996, 10994, 7895, 1273, 8494, 2]
// Exports: default

// Module 10999 (ChannelSelectComponentActionSheet)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx");

export default function ChannelSelectComponentActionSheet(guildId) {
  let allowEmpty;
  let channelId;
  let result;
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
  const channelTypes = selectionActionComponent.channelTypes;
  const items = [channelId, channelTypes];
  ({ labelComponent, containerId, onSubmit, allowEmpty } = guildId);
  const callback = React.useCallback((arg0) => channelId(channelTypes[4]).queryChannels(arg0, channelId, channelTypes), items);
  const tmp2 = guildId(channelTypes[5])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  ({ selectedOptions, submitSelection: result } = tmp2);
  ({ options, isSelected, onPressOptionItem, setQuery } = tmp2);
  return jsx(guildId(channelTypes[6]), {
    onPressOptionItem,
    renderIcon(value) {
      const channel = outer1_4.getChannel(value.value);
      if (null == channel) {
        return null;
      } else {
        const guild = outer1_5.getGuild(guildId);
        let obj = channelId(channelTypes[7]);
        const channelIconData = obj.getChannelIconData(channel, guild);
        let tmp8 = null != channelIconData;
        if (tmp8) {
          obj = { source: channelIconData };
          tmp8 = outer1_6(channelId(channelTypes[8]).Icon, obj);
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
      const channel = outer1_4.getChannel(value.value);
      if (null != channel) {
        const obj = { channel };
        return guildId(channelTypes[9])(obj);
      }
    },
    channelId,
    allowEmpty
  });
};
