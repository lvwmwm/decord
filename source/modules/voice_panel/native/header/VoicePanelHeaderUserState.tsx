// Module ID: 15787
// Function ID: 121881
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 4143, 33, 3991, 8372, 4130, 689, 15788, 15786, 8866, 5517, 10014, 566, 4131, 2]

// Module 15787 (_createForOfIteratorHelperLoose)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function useVoicePanelHeaderUserStateIcons(participant, guildId, userIcons) {
  let iter2;
  const tmp = callback();
  const items = [];
  let type;
  if (null != participant) {
    type = participant.type;
  }
  let obj = require(15786) /* isStableStreamParticipant */;
  let id;
  if (obj.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  const tmp2Result = _createForOfIteratorHelperLoose(importDefault(15788)(type, id, guildId));
  let iter = tmp2Result();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp7 = require;
      let tmp8 = dependencyMap;
      if (value.type === require(15788) /* useVoicePanelCardUserStateIcons */.VoicePanelCardUserStateIconType.USER_VIDEO_ICON) {
        let tmp9 = jsx;
        let tmp10 = require;
        let tmp11 = dependencyMap;
        obj = { blurTheme: "dark", style: tmp.floatingIconWrapper };
        let tmp12 = jsx;
        obj = { style: tmp.floatingIcon, state: value.videoIconState };
        obj.children = jsx(require(8866) /* VideoDisabledSvgIcon */.VideoIcon, { style: tmp.floatingIcon, state: value.videoIconState });
        let arr = items.push(jsx(require(8372) /* TwinButtons */.BackgroundBlurView, { style: tmp.floatingIcon, state: value.videoIconState }, "video"));
      }
      let tmp14 = require;
      let tmp15 = dependencyMap;
      if (value.type === require(15788) /* useVoicePanelCardUserStateIcons */.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
        let tmp26 = require;
        let tmp27 = dependencyMap;
        let tmp25 = jsx;
        let obj1 = { blurTheme: "dark" };
        let items1 = [tmp.floatingIconWrapper, ];
        let leftMargin;
        if (value.withLeftMargin) {
          leftMargin = tmp.leftMargin;
        }
        items1[1] = leftMargin;
        obj1.style = items1;
        let tmp17 = jsx;
        let tmp18 = require;
        let tmp19 = dependencyMap;
        let obj2 = { style: tmp.floatingIcon, state: value.muteDeafenIconState };
        obj1.children = jsx(require(8866) /* VideoDisabledSvgIcon */.MuteDeafenIcon, { style: tmp.floatingIcon, state: value.muteDeafenIconState });
        arr = items.push(tmp25(require(8372) /* TwinButtons */.BackgroundBlurView, obj1, "mute-deafen"));
      }
      iter2 = tmp2Result();
      iter = iter2;
    } while (!iter2.done);
  }
  if (0 !== items.length) {
    const obj3 = {};
    const items2 = [tmp.iconContainer, userIcons];
    obj3.style = items2;
    obj3.children = items;
    return jsx(importDefault(5517), {});
  }
  const tmp2 = _createForOfIteratorHelperLoose;
  const tmp3 = importDefault(15788);
}
let closure_6 = require("module_3991").createAnimatedComponent(require("TwinButtons").BackgroundBlurView);
let closure_7 = { duration: 100 };
let obj = {};
obj = { position: "absolute", top: 0, left: 0, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, padding: 6 };
obj.container = obj;
obj.iconContainer = { flexDirection: "row" };
let obj1 = { width: 20, height: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center" };
obj.floatingIconWrapper = obj1;
_createForOfIteratorHelperLoose = { width: 12, height: 12, tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.floatingIcon = _createForOfIteratorHelperLoose;
obj.leftMargin = { marginLeft: 4 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_9 = { code: "function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}" };
const memoResult = importAllResult.memo(function VoicePanelHeaderUserState(isHeaderHidden) {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const context = importAllResult.useContext(channelId(10014));
  channelId = context.channelId;
  const guildId = context.guildId;
  let obj = isHeaderHidden(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const selectedParticipant = outer1_4.getSelectedParticipant(channelId);
    let id;
    if (null != selectedParticipant) {
      id = selectedParticipant.id;
    }
    return id;
  });
  const tmp4 = useVoicePanelHeaderUserStateIcons(channelId(15786)(stateFromStores, channelId, guildId), guildId);
  isHeaderHidden(3991);
  const fn = function s() {
    const obj = {};
    let num = 0;
    if (isHeaderHidden.get()) {
      num = 1;
    }
    obj.opacity = isHeaderHidden(outer1_2[13]).withTiming(num, outer1_7);
    return obj;
  };
  obj = { withTiming: isHeaderHidden(4131).withTiming, isHeaderHidden, OPACITY_TIMING: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 7032221979181;
  fn.__initData = closure_9;
  let tmp7 = null;
  if (null != tmp4) {
    obj = { blurTheme: "dark", style: null, pointerEvents: "none" };
    const items1 = [tmp2.container, tmp6];
    obj.style = items1;
    obj.children = tmp4;
    tmp7 = <closure_6 blurTheme="dark" style={null} pointerEvents="none" />;
  }
  return tmp7;
});
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx");

export default memoResult;
export { useVoicePanelHeaderUserStateIcons };
