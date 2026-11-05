// Module ID: 19253
// Function ID: 19254
// Name: ChannelDetailsScreen
// Dependencies: [19, 21, 1500, 5329, 18989, 2]

// Module 19253 (ChannelDetailsScreen)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1500 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5329 */;
import ChannelDetailsDefault from "ChannelDetails" /* 18989 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function ChannelDetailsScreen(navigation) {
  navigation = navigation.navigation;
  const obj = Link;
  const route = obj.useRoute();
  const search = route.params.search;
  const channelId = route.params.channelId;
  const expandTopic = route.params.expandTopic;
  const items = [navigation];
  const width = useBaseAppContainerDimensionsDefault().width;
  const callback = react.useCallback(() => {
    navigation.goBack();
  }, items);
  return jsx(ChannelDetailsDefault, { channelId, isSearchLocked: true === search, onBackPress: callback, componentWidth: width, onChannelDeleted: callback, expandTopic: true === expandTopic });
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default memoResult;
