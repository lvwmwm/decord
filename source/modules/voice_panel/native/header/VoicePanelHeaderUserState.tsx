// Module ID: 15659
// Function ID: 119626
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 15659 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  let obj = guildId(dependencyMap[8]);
  let id;
  if (obj.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  const tmp2Result = _createForOfIteratorHelperLoose(importDefault(dependencyMap[7])(type, id, guildId));
  let iter = tmp2Result();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp7 = closure_0;
      let tmp8 = closure_2;
      if (value.type === closure_0(closure_2[7]).VoicePanelCardUserStateIconType.USER_VIDEO_ICON) {
        let tmp9 = closure_5;
        let tmp10 = closure_0;
        let tmp11 = closure_2;
        obj = { blurTheme: "dark", style: tmp.floatingIconWrapper };
        let tmp12 = closure_5;
        obj = { style: tmp.floatingIcon, state: value.videoIconState };
        obj.children = closure_5(closure_0(closure_2[9]).VideoIcon, obj);
        let arr = items.push(closure_5(closure_0(closure_2[4]).BackgroundBlurView, obj, "video"));
      }
      let tmp14 = closure_0;
      let tmp15 = closure_2;
      if (value.type === closure_0(closure_2[7]).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON) {
        let tmp26 = closure_0;
        let tmp27 = closure_2;
        let tmp25 = closure_5;
        let obj1 = { blurTheme: "dark" };
        let items1 = [tmp.floatingIconWrapper, ];
        let leftMargin;
        if (value.withLeftMargin) {
          leftMargin = tmp.leftMargin;
        }
        items1[1] = leftMargin;
        obj1.style = items1;
        let tmp17 = closure_5;
        let tmp18 = closure_0;
        let tmp19 = closure_2;
        let obj2 = { style: tmp.floatingIcon, state: value.muteDeafenIconState };
        obj1.children = closure_5(closure_0(closure_2[9]).MuteDeafenIcon, obj2);
        arr = items.push(tmp25(closure_0(closure_2[4]).BackgroundBlurView, obj1, "mute-deafen"));
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
    return jsx(importDefault(dependencyMap[10]), obj3);
  }
  const tmp2 = _createForOfIteratorHelperLoose;
  const tmp3 = importDefault(dependencyMap[7]);
}
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = importDefault(dependencyMap[3]).createAnimatedComponent(arg1(dependencyMap[4]).BackgroundBlurView);
let closure_7 = { duration: 100 };
let obj2 = arg1(dependencyMap[5]);
let obj = {};
obj = { position: -4, top: -1924821678, left: 373772613, right: 27446850, bottom: 27446784, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj.container = obj;
obj.iconContainer = { flexDirection: "row" };
const importDefaultResult = importDefault(dependencyMap[3]);
obj.floatingIconWrapper = { borderRadius: importDefault(dependencyMap[6]).radii.round };
obj2 = { bhk: "version=$(node -p \"require('./package.json').version\") && sed -i '' \"s/#define NITRO_VERSION \\\".*\\\"/#define NITRO_VERSION \\\"$version\\\"/\" ./cpp/utils/NitroDefines.hpp", bic: "bun run write-native-version", tintColor: importDefault(dependencyMap[6]).colors.WHITE };
obj.floatingIcon = obj2;
obj.leftMargin = { marginLeft: 4 };
let closure_8 = obj2.createStyles(obj);
let closure_9 = { code: "function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}" };
const obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.round };
const memoResult = importAllResult.memo(function VoicePanelHeaderUserState(isHeaderHidden) {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const arg1 = isHeaderHidden;
  const context = importAllResult.useContext(importDefault(dependencyMap[11]));
  const channelId = context.channelId;
  const importDefault = channelId;
  const guildId = context.guildId;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const selectedParticipant = selectedParticipant.getSelectedParticipant(channelId);
    let id;
    if (null != selectedParticipant) {
      id = selectedParticipant.id;
    }
    return id;
  });
  const tmp4 = useVoicePanelHeaderUserStateIcons(importDefault(dependencyMap[8])(stateFromStores, channelId, guildId), guildId);
  arg1(dependencyMap[3]);
  const fn = function s() {
    const obj = {};
    let num = 0;
    if (isHeaderHidden.get()) {
      num = 1;
    }
    obj.opacity = isHeaderHidden(closure_2[13]).withTiming(num, closure_7);
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[13]).withTiming, isHeaderHidden, OPACITY_TIMING: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 7032221979181;
  fn.__initData = closure_9;
  let tmp7 = null;
  if (null != tmp4) {
    obj = {};
    const items1 = [tmp2.container, tmp6];
    obj.style = items1;
    obj.children = tmp4;
    tmp7 = <closure_6 {...obj} />;
  }
  return tmp7;
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx");

export default memoResult;
export { useVoicePanelHeaderUserStateIcons };
