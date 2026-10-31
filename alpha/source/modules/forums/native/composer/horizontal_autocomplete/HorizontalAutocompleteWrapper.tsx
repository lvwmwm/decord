// Module ID: 10306
// Function ID: 10307
// Name: HorizontalAutocompleteWrapper
// Dependencies: [19, 1072, 21, 10307, 10519, 5095, 5254, 7294, 2]
// Exports: default

// Module 10306 (HorizontalAutocompleteWrapper)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import timing from "timing" /* 5254 */;
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
const __initData = { code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default function HorizontalAutocompleteWrapper(channel) {
  let autocompleteSelectionStart;
  let items3;
  let obj5;
  let results;
  let selection;
  let style;
  let text;
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  let callback;
  let num;
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
    num = autocompleteSelectionStart;
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
  num = 0;
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
  const tmpResult = channel(tmp2[5]);
  class I {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.withTiming(num) };
      obj2 = timing;
      return obj;
    }
  }
  let obj3 = { withTiming: tmp(tmp2[6]).withTiming, toValue: num };
  I.__closure = obj3;
  I.__workletHash = 7895652904738;
  I.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(I);
  let obj4 = { style: items3, children: callback(tmp(tmp2[7]).FlashList, obj5) };
  items3 = [style, animatedStyle];
  const View = onPressAutocompleteItem(tmp2[5]).View;
  obj5 = {
    ref,
    keyboardShouldPersistTaps: "always",
    horizontal: true,
    keyExtractor: num,
    getItemType(type) {
      return type.type;
    },
    data: results,
    renderItem: callback1
  };
  return callback(View, obj4);
};
