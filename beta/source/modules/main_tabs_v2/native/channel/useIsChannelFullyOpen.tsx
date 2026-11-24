// Module ID: 11774
// Function ID: 11775
// Name: useIsChannelFullyOpen
// Dependencies: [32, 19, 11770, 1653, 1706, 2]
// Exports: default

// Module 11774 (useIsChannelFullyOpen)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp2;
let items = [{ code: "(function getIsChannelFullyOpen_useIsChannelFullyOpenTsx1({isInMainTabs:isInMainTabs,isNavigatorPanelsBesideChannelList:isNavigatorPanelsBesideChannelList,translateX:translateX}){return!isInMainTabs||isNavigatorPanelsBesideChannelList||translateX.get()===0;})" }];
[tmp2] = items;
function getIsChannelFullyOpen(react) {
  let isInMainTabs;
  let translateX;
  ({ isInMainTabs, translateX } = react);
  let isNavigatorPanelsBesideChannelList = !isInMainTabs;
  if (isInMainTabs) {
    isNavigatorPanelsBesideChannelList = react.isNavigatorPanelsBesideChannelList;
  }
  if (!isNavigatorPanelsBesideChannelList) {
    isNavigatorPanelsBesideChannelList = 0 === translateX.get();
  }
  return isNavigatorPanelsBesideChannelList;
}
getIsChannelFullyOpen.__workletHash = 7901999212750;
getIsChannelFullyOpen.__initData = tmp2;
let closure_6 = { code: "(function useIsChannelFullyOpenTsx2(){let[getIsChannelFullyOpen,isInMainTabs,isNavigatorPanelsBesideChannelList,translateX]=this.__closure;return getIsChannelFullyOpen({isInMainTabs:isInMainTabs,isNavigatorPanelsBesideChannelList:isNavigatorPanelsBesideChannelList,translateX:translateX});})" };
let closure_7 = { code: "(function useIsChannelFullyOpenTsx3(open,wasOpen){let[scheduleOnRN,setIsOpen]=this.__closure;if(open!==wasOpen){scheduleOnRN(setIsOpen,open);}})" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useIsChannelFullyOpen.tsx");

export default function useIsChannelFullyOpen() {
  let isNavigatorPanelsBesideChannelList;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let translateX;
  const tmp = translateX;
  const context = react.useContext(isNavigatorPanelsBesideChannelList(translateX[2]));
  const isInMainTabs = context.isInMainTabs;
  isNavigatorPanelsBesideChannelList = context.isNavigatorPanelsBesideChannelList;
  translateX = context.translateX;
  let tmp3 = _slicedToArray(react.useState(() => {
    const obj = translateX;
    if (typeof getIsChannelFullyOpen === "function") {
      let tmp3 = !tmp;
      if (isInMainTabs) {
        tmp3 = tmp2;
      }
      if (!tmp3) {
        tmp3 = 0 === obj.get();
      }
      return tmp3;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }), 2);
  [tmp4, tmp5] = tmp3;
  const items = [closure_6, getIsChannelFullyOpen, isInMainTabs, isNavigatorPanelsBesideChannelList, translateX];
  let c2;
  let c3;
  [tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  function useIsChannelFullyOpenTsx2() {
    const obj = { isInMainTabs, isNavigatorPanelsBesideChannelList, translateX };
    return _undefined(obj);
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12];
  useIsChannelFullyOpenTsx2.__closure = items1;
  useIsChannelFullyOpenTsx2.__workletHash = 15061953116511;
  useIsChannelFullyOpenTsx2.__initData = tmp8;
  const items2 = [closure_7, , ];
  const useAnimatedReaction = isInMainTabs(translateX[3]).useAnimatedReaction;
  isInMainTabs(translateX[3]);
  items2[1] = isInMainTabs(tmp[4]).scheduleOnRN;
  items2[2] = tmp5;
  let c0;
  let c1;
  [tmp13, tmp14, tmp15] = items2;
  function useIsChannelFullyOpenTsx3(arg0, arg1) {
    if (arg0 !== arg1) {
      _undefined(c1, arg0);
    }
  }
  const items3 = [tmp14, tmp15];
  useIsChannelFullyOpenTsx3.__closure = items3;
  useIsChannelFullyOpenTsx3.__workletHash = 11624957574532;
  useIsChannelFullyOpenTsx3.__initData = tmp13;
  const animatedReaction = useAnimatedReaction(useIsChannelFullyOpenTsx2, useIsChannelFullyOpenTsx3);
  return tmp4;
};
export { getIsChannelFullyOpen };
