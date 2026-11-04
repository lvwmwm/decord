// Module ID: 10484
// Function ID: 10485
// Name: HorizontalAutocompleteWrapper
// Dependencies: [19, 1072, 21, 10485, 10697, 1652, 5378, 7430, 2]
// Exports: default

// Module 10484 (HorizontalAutocompleteWrapper)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let item;

function getItemKey(type) {
  type = type.type;
  if (AutoCompleteResultTypes.USER === type) {
    const _HermesInternal4 = HermesInternal;
    return "" + type.type + ":" + type.user.id;
  } else if (AutoCompleteResultTypes.ROLE === type) {
    const _HermesInternal3 = HermesInternal;
    return "" + type.type + ":" + type.id;
  } else if (AutoCompleteResultTypes.CHANNEL === type) {
    const _HermesInternal2 = HermesInternal;
    return "" + type.type + ":" + type.channel.id;
  } else if (AutoCompleteResultTypes.EMOJI === type) {
    const _HermesInternal = HermesInternal;
    return "" + type.type + ":" + type.url + ":" + type.name;
  } else {
    return type.type;
  }
}
const AutoCompleteResultTypes = Constants.AutoCompleteResultTypes;
const jsx = Fragment.jsx;
let closure_7 = { code: "(function HorizontalAutocompleteWrapperTsx1(){let[withTiming,toValue]=this.__closure;return{opacity:withTiming(toValue)};})" };
const result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default function HorizontalAutocompleteWrapper(channel) {
  let autocompleteSelectionStart;
  let items5;
  let obj4;
  let selection;
  let style;
  let text;
  let tmp11;
  let tmp12;
  let tmp13;
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  let callback;
  let tmp2 = autocompleteSelectionStart;
  ({ style, text, selection } = channel);
  let obj = channel(autocompleteSelectionStart[3]);
  const horizontalAutocompleteResults = obj.useHorizontalAutocompleteResults({ channel, text, selection });
  ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
  const query = horizontalAutocompleteResults.query;
  let obj2 = query;
  const ref = query.useRef(null);
  const first = results[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const items = [query, type];
  const effect = obj2.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  const items1 = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  callback = obj2.useCallback((stopPropagation, arg1) => {
    stopPropagation.stopPropagation();
    let num = autocompleteSelectionStart;
    const tmp2 = onPressAutocompleteItem;
    if (autocompleteSelectionStart == null) {
      num = 0;
    }
    let str = query;
    if (query == null) {
      str = "";
    }
    tmp2(arg1, num, str);
  }, items1);
  const items2 = [channel.guild_id, callback];
  let num = 0;
  const callback1 = obj2.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (ref.USER === type) {
      const obj2 = {
        guildId: item.guild_id,
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const User = onPressAutocompleteItem(autocompleteSelectionStart[4]).User;
      const merged = Object.assign(item);
      return callback(User, obj2);
    } else if (ref.ROLE === type) {
      const obj3 = {
        guildId: item.guild_id,
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const Role = onPressAutocompleteItem(autocompleteSelectionStart[4]).Role;
      const merged1 = Object.assign(item);
      return callback(Role, obj3);
    } else if (ref.CHANNEL === type) {
      const obj4 = {
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const Channel = onPressAutocompleteItem(autocompleteSelectionStart[4]).Channel;
      const merged2 = Object.assign(item);
      return callback(Channel, obj4);
    } else if (ref.EMOJI === type) {
      const obj = {
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const Emoji = onPressAutocompleteItem(autocompleteSelectionStart[4]).Emoji;
      const merged3 = Object.assign(item);
      return callback(Emoji, obj);
    } else {
      return null;
    }
  }, items2);
  if (results.length > 0) {
    num = 1;
  }
  const items3 = [closure_7, , ];
  const useAnimatedStyle = tmp(tmp2[5]).useAnimatedStyle;
  channel(tmp2[5]);
  items3[1] = channel(tmp2[6]).withTiming;
  items3[2] = num;
  let c0;
  let c1;
  [tmp11, tmp12, tmp13] = items3;
  class HorizontalAutocompleteWrapperTsx1 {
    constructor() {
      const obj = { opacity: _undefined(c1) };
      return obj;
    }
  }
  const items4 = [tmp12, tmp13];
  HorizontalAutocompleteWrapperTsx1.__closure = items4;
  HorizontalAutocompleteWrapperTsx1.__workletHash = 15765485703035;
  HorizontalAutocompleteWrapperTsx1.__initData = tmp11;
  const animatedStyle = useAnimatedStyle(HorizontalAutocompleteWrapperTsx1);
  let obj3 = { style: items5, children: callback(tmp(tmp2[7]).FlashList, obj4) };
  items5 = [style, animatedStyle];
  const View = onPressAutocompleteItem(tmp2[5]).View;
  obj4 = {
    ref,
    keyboardShouldPersistTaps: "always",
    horizontal: true,
    keyExtractor: getItemKey,
    getItemType(type) {
      return type.type;
    },
    data: results,
    renderItem: callback1
  };
  return callback(View, obj3);
};
