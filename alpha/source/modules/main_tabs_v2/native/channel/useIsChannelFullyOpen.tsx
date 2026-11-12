// Module ID: 11949
// Function ID: 11950
// Name: useIsChannelFullyOpen
// Dependencies: [32, 19, 11944, 1652, 1705, 2]
// Exports: default

// Module 11949 (useIsChannelFullyOpen)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp2;
let items = [{ code: "(function getIsChannelFullyOpen_useIsChannelFullyOpenTsx1({isInMainTabs:isInMainTabs,translateX:translateX}){return!isInMainTabs||translateX.get()===0;})" }];
[tmp2] = items;
function getIsChannelFullyOpen(react) {
  let isInMainTabs;
  let translateX;
  ({ isInMainTabs, translateX } = react);
  let tmp = !isInMainTabs;
  if (isInMainTabs) {
    tmp = 0 === translateX.get();
  }
  return tmp;
}
getIsChannelFullyOpen.__workletHash = 2525740831781;
getIsChannelFullyOpen.__initData = tmp2;
let closure_6 = { code: "(function useIsChannelFullyOpenTsx2(){let[getIsChannelFullyOpen,isInMainTabs,translateX]=this.__closure;return getIsChannelFullyOpen({isInMainTabs:isInMainTabs,translateX:translateX});})" };
let closure_7 = { code: "(function useIsChannelFullyOpenTsx3(open,wasOpen){let[scheduleOnRN,setIsOpen]=this.__closure;if(open!==wasOpen){scheduleOnRN(setIsOpen,open);}})" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useIsChannelFullyOpen.tsx");

export default function useIsChannelFullyOpen() {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let translateX;
  const f102558 = () => {
    const obj = translateX;
    if (typeof getIsChannelFullyOpen === "function") {
      let tmp2 = !tmp;
      if (isInMainTabs) {
        tmp2 = 0 === obj.get();
      }
      return tmp2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const tmp = dependencyMap;
  const context = react.useContext(translateX(11944));
  const isInMainTabs = context.isInMainTabs;
  translateX = context.translateX;
  [tmp4, tmp5] = _slicedToArray(react.useState(f102558), 2);
  const items = [closure_6, getIsChannelFullyOpen, isInMainTabs, translateX];
  let c2;
  [tmp8, tmp9, tmp10, tmp11] = items;
  function useIsChannelFullyOpenTsx2() {
    const obj = { isInMainTabs, translateX };
    return _undefined(obj);
  }
  const items1 = [tmp9, tmp10, tmp11];
  useIsChannelFullyOpenTsx2.__closure = items1;
  useIsChannelFullyOpenTsx2.__workletHash = 2274606773816;
  useIsChannelFullyOpenTsx2.__initData = tmp8;
  const items2 = [closure_7, , ];
  const tmp3 = _slicedToArray(react.useState(f102558), 2);
  const useAnimatedReaction = isInMainTabs(1652).useAnimatedReaction;
  isInMainTabs(1652);
  items2[1] = isInMainTabs(1705).scheduleOnRN;
  items2[2] = tmp5;
  let c0;
  let c1;
  [tmp12, tmp13, tmp14] = items2;
  function useIsChannelFullyOpenTsx3(arg0, arg1) {
    if (arg0 !== arg1) {
      _undefined(c1, arg0);
    }
  }
  const items3 = [tmp13, tmp14];
  useIsChannelFullyOpenTsx3.__closure = items3;
  useIsChannelFullyOpenTsx3.__workletHash = 11624957574532;
  useIsChannelFullyOpenTsx3.__initData = tmp12;
  const animatedReaction = useAnimatedReaction(useIsChannelFullyOpenTsx2, useIsChannelFullyOpenTsx3);
  return tmp4;
};
export { getIsChannelFullyOpen };
