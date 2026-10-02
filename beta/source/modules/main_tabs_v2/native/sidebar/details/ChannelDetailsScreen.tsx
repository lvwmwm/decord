// Module ID: 16683
// Function ID: 16684
// Name: ChannelDetailsScreen
// Dependencies: [19, 21, 558, 576, 1492, 4699, 16440, 2]

// Module 16683 (ChannelDetailsScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Link from "Link" /* 1492 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4699 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let tmp4;
const ChannelDetailsDefault = tmp4(16440);
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(8);
  navigation = navigation.navigation;
  const obj2 = Link;
  const route = obj2.useRoute();
  const channelId = route.params.channelId;
  const search = route.params.search;
  const expandTopic = route.params.expandTopic;
  const width = useBaseAppContainerDimensionsDefault().width;
  if (cResult[0] !== navigation) {
    const fn = function o() {
      navigation.goBack();
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === channelId) {
    if (cResult[3] === width) {
      if (cResult[4] === true === expandTopic) {
        if (cResult[5] === true === search) {
          let tmp8;
          if (cResult[6] === tmp5) {
            tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
    }
  }
  const tmp9 = jsx(ChannelDetailsDefault, { channelId, isSearchLocked: true === search, onBackPress: tmp5, componentWidth: width, onChannelDeleted: tmp5, expandTopic: true === expandTopic });
  cResult[2] = channelId;
  cResult[3] = width;
  cResult[4] = true === expandTopic;
  cResult[5] = true === search;
  cResult[6] = tmp5;
  cResult[7] = tmp9;
  tmp8 = tmp9;
}) : ((navigation) => {
  navigation = navigation.navigation;
  let obj = Link;
  const route = obj.useRoute();
  const search = route.params.search;
  const channelId = route.params.channelId;
  const expandTopic = route.params.expandTopic;
  let items = [navigation];
  const width = useBaseAppContainerDimensionsDefault().width;
  const callback = react.useCallback(() => {
    navigation.goBack();
  }, items);
  return jsx(ChannelDetailsDefault, { channelId, isSearchLocked: true === search, onBackPress: callback, componentWidth: width, onChannelDeleted: callback, expandTopic: true === expandTopic });
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default memoResult;
