// Module ID: 16681
// Function ID: 16682
// Name: ChannelDetailsScreen
// Dependencies: [19, 21, 1486, 4697, 16438, 2]

// Module 16681 (ChannelDetailsScreen)
import Link from "Link" /* 1486 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4697 */;
import ChannelDetailsDefault from "ChannelDetails" /* 16438 */;
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
