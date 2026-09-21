// Module ID: 17327
// Function ID: 17328
// Name: ChannelDetailsScreen
// Dependencies: [19, 21, 1485, 4618, 17094, 2]

// Module 17327 (ChannelDetailsScreen)
import Link from "Link" /* 1485 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4618 */;
import ChannelDetailsDefault from "ChannelDetails" /* 17094 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default noop.memo((navigation) => {
  navigation = navigation.navigation;
  const route = Link.useRoute();
  const items = [navigation];
  const callback = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  return jsx(ChannelDetailsDefault, { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: useBaseAppContainerDimensionsDefault().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic });
});
