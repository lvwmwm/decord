// Module ID: 18886
// Function ID: 18887
// Name: useWaterwheelsDiscoverAnalytics
// Dependencies: [32, 19, 17, 502, 5286, 1072, 18885, 1500, 18887, 18888, 10158, 18879, 572, 2]
// Exports: default

// Module 18886 (useWaterwheelsDiscoverAnalytics)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10158 */;
import WaterwheelsDiscoverJoinAttribution from "WaterwheelsDiscoverJoinAttribution" /* 18879 */;
import WaterwheelsDiscoverFeedState from "WaterwheelsDiscoverFeedState" /* 18885 */;
import WaterwheelsDiscoverAnalytics from "WaterwheelsDiscoverAnalytics" /* 18888 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, navigation;

function toAnalyticsItems(arg0) {
  const items = [];
  const iter = arg0[Symbol.iterator]();
  while (iter !== undefined) {
    let item = iter.next().item;
    if (null != item) {
      let push = items.push;
      let obj = WaterwheelsDiscoverFeedState;
      let arr = push(obj.toDiscoverAnalyticsItem(tmp));
    }
    continue;
  }
  return items;
}
let react = react_mod;
const AppState = react_native.AppState;
const WATERWHEELS = Constants.WATERWHEELS;
let result = size.fileFinishedImporting("modules/waterwheels/discover/native/useWaterwheelsDiscoverAnalytics.tsx");

export default function useWaterwheelsDiscoverAnalytics(arg0, arg1) {
  let closure_0;
  let first;
  let items3;
  let items4;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("Link");
  navigation = obj.useNavigation();
  first = first(react.useState(() => {
    const waterwheelsDiscoverAnalyticsSession = new closure_0(navigation[8]).WaterwheelsDiscoverAnalyticsSession(closure_0(navigation[9]).discoverAnalyticsTracker);
    return waterwheelsDiscoverAnalyticsSession;
  }), 1)[0];
  const tmp3 = first(react.useState(false), 2);
  react = tmp3[1];
  let items = [navigation, first];
  const first1 = tmp3[0];
  const effect = react.useEffect(() => {
    let closure_3;
    function update() {
      const tmp = c0 && closure_1 && SelectedGuildStore.getGuildId() === WATERWHEELS;
      first.setVisible(tmp);
      closure_4(tmp);
    }
    let c0 = update.isFocused();
    closure_1 = "active" === memo.currentState;
    first = update.addListener("focus", () => {
      c0 = true;
      const tmp = closure_1 && SelectedGuildStore.getGuildId() === WATERWHEELS;
      first.setVisible(tmp);
      closure_4(tmp);
    });
    closure_4 = update.addListener("blur", () => {
      c0 = false;
      first.setVisible(false);
      closure_4(false);
    });
    let closure_5 = memo.addEventListener("change", (event) => {
      closure_1 = tmp;
      const tmp2 = c0 && tmp && SelectedGuildStore.getGuildId() === WATERWHEELS;
      first.setVisible(tmp2);
      closure_4(tmp2);
    });
    SelectedGuildStore.addChangeListener(update);
    let tmp2 = c0 && closure_1;
    const obj = SelectedGuildStore;
    if (tmp2) {
      tmp2 = obj.getGuildId() === WATERWHEELS;
    }
    first.setVisible(tmp2);
    closure_4(tmp2);
    return () => {
      closure_3();
      closure_4();
      closure_5.remove();
      SelectedGuildStore.removeChangeListener(update);
      first.dispose();
    };
  }, items);
  const items1 = [arg1];
  const memo = react.useMemo(() => closure_1.map(WaterwheelsDiscoverFeedState.toDiscoverAnalyticsItem), items1);
  const items2 = [first, arg0, memo];
  const layoutEffect = react.useLayoutEffect(() => {
    first.setFeed(closure_0, memo);
  }, items2);
  let obj2 = {
    visible: first1,
    viewabilityConfigCallbackPairs: react.useMemo(() => {
      const items = [, ];
      const obj = {
        viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 50 },
        onViewableItemsChanged(viewableItems) {
          return first.trackSeenBatch(toAnalyticsItems(viewableItems.viewableItems));
        }
      };
      items[0] = obj;
      items[1] = {
        viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 50 },
        onViewableItemsChanged(viewableItems) {
          return first.updateDwellItems(toAnalyticsItems(viewableItems.viewableItems));
        }
      };
      return items;
    }, items3),
    trackAction: react.useCallback((itemId, type, arg2) => {
      const trackAction = first.trackAction;
      const obj = WaterwheelsDiscoverFeedState;
      const result = obj.toDiscoverAnalyticsItem(itemId);
      const obj2 = WaterwheelsDiscoverAnalytics;
      const discoverActionParameters = obj2.getDiscoverActionParameters(type, arg2);
      const tmp6 = type.type === WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD || type.type === tmp2(10158).WaterwheelsActionType.OPEN_GAME;
      const trackActionResult = trackAction(result, discoverActionParameters, tmp6);
      if (null != trackActionResult) {
        const tmp2Result = WaterwheelsDiscoverJoinAttribution;
        return tmp2Result.captureDiscoverJoinAttribution(AuthenticationStore, trackActionResult, DispatcherDefault);
      }
    }, items4)
  };
  items3 = [first];
  items4 = [first];
  return obj2;
};
