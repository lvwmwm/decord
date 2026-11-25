// Module ID: 18992
// Function ID: 18993
// Name: ChannelDetailsScreen
// Dependencies: [19, 21, 1501, 5094, 18720, 2]

// Module 18992 (ChannelDetailsScreen)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1501 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5094 */;
import ChannelDetailsDefault from "ChannelDetails" /* 18720 */;
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
