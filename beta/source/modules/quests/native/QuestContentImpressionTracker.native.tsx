// Module ID: 10753
// Function ID: 10754
// Name: QuestContentImpressionTracker
// Dependencies: [32, 19, 1980, 7146, 1074, 21, 8179, 7720, 504, 10711, 10712, 5763, 2]
// Exports: BillableAdPlacementImpressionTrackerNative, QuestContentImpressionTrackerNative

// Module 10753 (QuestContentImpressionTracker)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import ContentImpressionTrackerConstants from "ContentImpressionTrackerConstants" /* 7146 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import size from "module_2" /* 2 */;

const react = react2;
let dependencyMap;

function AdContentImpressionTrackerBaseNative(skipRemountKey) {
  let adContentIds2;
  let setVisible;
  let state;
  let tmp20;
  let visibilityRef;
  let tmp = adContentIds2;
  let tmp2 = dependencyMap;
  let obj = adContentIds2(504);
  let items = [AppStateStore];
  let tmp3 = obj.useStateFromStores(items, () => state.getState()) === AppStates.ACTIVE;
  const tmp5 = visibilityRef;
  const ref = react.useRef(null);
  let tmp6 = visibilityRef(7720)(tmp3);
  const obj2 = adContentIds2(10711);
  const adContentImpressionTrackerProps = obj2.useAdContentImpressionTrackerProps(skipRemountKey);
  const adContentIds = adContentImpressionTrackerProps.adContentIds;
  const obj3 = { adContentIds };
  const key = adContentImpressionTrackerProps.key;
  let merged = Object.assign(skipRemountKey);
  adContentIds2 = obj3.adContentIds;
  visibilityRef = obj3.visibilityRef;
  let overrideVisibility = obj3.overrideVisibility;
  const joined = adContentIds2.join("_");
  let items1 = [joined];
  const obj4 = adContentIds2(8179);
  const tmp10 = _slicedToArray(obj4.useRecyclingState(false, items1), 2);
  dependencyMap = tmp12;
  let items2 = [adContentIds2, tmp10[1], visibilityRef];
  const first = tmp10[0];
  const effect = react.useEffect(() => {
    let children;
    function initHandlers(arg0) {
      let adContentIds;
      ({ adContentIds, setVisible: children, visibilityRef } = arg0);
      if (null != visibilityRef) {
        let tmp = adContentIds;
        function _loop(iter) {
          let closure_0 = iter;
          children = visibilityRef.current.children;
          const obj = {
            calculateVisibility() {
              let tmp4;
              const tmp = closure_2_0;
              if (visibilityRef != null) {
                const current = tmp2.current;
                if (current != null) {
                  children = current.children;
                  if (children != null) {
                    tmp4 = children[tmp3];
                  }
                }
              }
              let layout;
              if (tmp4 != null) {
                layout = tmp4.layout;
              }
              let num = 0;
              if (null != layout) {
                let layout1;
                if (visibilityRef != null) {
                  const parent = tmp2.current.parent;
                  if (parent != null) {
                    layout1 = parent.layout;
                  }
                }
                num = 0;
                if (null != layout1) {
                  let items2;
                  let items3;
                  let height;
                  let str = tmp2.current.axis;
                  if (str == null) {
                    str = "vertical";
                  }
                  if ("horizontal" === str) {
                    num = 0;
                    if (null != visibilityRef.current.parent.scrollX) {
                      const items = [tmp4.layout.x, tmp4.layout.x + tmp4.layout.width];
                      const items1 = [visibilityRef.current.parent.scrollX, visibilityRef.current.parent.scrollX + visibilityRef.current.parent.layout.width];
                      height = tmp4.layout.width;
                      items3 = items1;
                      items2 = items;
                      if (null != visibilityRef.current.parent.firstItemOffset) {
                        const firstItemOffset = tmp2.current.parent.firstItemOffset;
                        items2[0] = items2[0] + firstItemOffset;
                        items2[1] = items2[1] + firstItemOffset;
                      }
                      const _Math = Math;
                      const _Math2 = Math;
                      const bound = Math.max(items2[0], items3[0]);
                      const _Math3 = Math;
                      const _Math4 = Math;
                      num = Math.min(Math.max(0, Math.min(items2[1], items3[1]) - bound) / height, 1);
                    }
                  } else {
                    num = 0;
                    if (null != visibilityRef.current.parent.scrollY) {
                      items2 = [tmp4.layout.y, tmp4.layout.y + tmp4.layout.height];
                      items3 = [visibilityRef.current.parent.scrollY, visibilityRef.current.parent.scrollY + visibilityRef.current.parent.layout.height];
                      height = tmp4.layout.height;
                    }
                  }
                }
              }
              tmp(num >= closure_3_6);
            }
          };
          const merged = Object.assign(visibilityRef.current.children[iter]);
          children[iter] = obj;
        }
        const iter = adContentIds[Symbol.iterator]();
        let num = 0;
        const tmp2 = adContentIds;
        const tmp3 = iter;
        while (iter !== undefined) {
          let _loopResult = _loop(iter.next());
          continue;
        }
      }
    }
    let obj = { adContentIds: children, setVisible, visibilityRef };
    let tmp = visibilityRef;
    let tmp2 = initHandlers(obj);
    children = undefined;
    if (visibilityRef != null) {
      let current = tmp.current;
      if (current != null) {
        children = current.children;
      }
    }
    return () => {
      if (null != children) {
        for (const item10008 of adContentIds2) {
          let tmp4 = children[item10008];
          if (null != tmp4) {
            tmp5.calculateVisibility = undefined;
          }
          continue;
        }
      }
    };
  }, items2);
  if (overrideVisibility == null) {
    overrideVisibility = first;
  }
  const obj6 = { focused: tmp3, focusedChanged: tmp3 !== tmp6, reference: ref, isFocused: tmp3 };
  const obj5 = { visible: overrideVisibility, visibleChanged: overrideVisibility !== tmp5(7720)(overrideVisibility) };
  const merged1 = Object.assign(skipRemountKey);
  const merged2 = Object.assign(obj5);
  let tmp16;
  if (!skipRemountKey.skipRemountKey) {
    tmp16 = key;
  }
  const obj7 = { key: tmp16, adContentIds };
  const QuestContentImpressionTracker = tmp(10712).QuestContentImpressionTracker;
  const tmp18 = "questOrQuests" in skipRemountKey;
  const merged3 = Object.assign(obj6);
  const tmp17 = createElement;
  if (tmp18) {
    obj7.adCreativeType = tmp(5763).AdCreativeType.QUEST;
    tmp20 = obj7;
  } else {
    obj7.adCreativeType = skipRemountKey.adCreativeType;
    tmp20 = obj7;
  }
  return tmp17(QuestContentImpressionTracker, tmp20);
}
let closure_6 = ContentImpressionTrackerConstants.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
const AppStates = Constants.AppStates;
const createElement = react2.createElement;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/quests/native/QuestContentImpressionTracker.native.tsx");

export const QuestContentImpressionTrackerNative = function QuestContentImpressionTrackerNative(arg0) {
  const merged = Object.assign(arg0);
  return <AdContentImpressionTrackerBaseNative />;
};
export const BillableAdPlacementImpressionTrackerNative = function BillableAdPlacementImpressionTrackerNative(arg0) {
  const merged = Object.assign(arg0);
  return <AdContentImpressionTrackerBaseNative />;
};
