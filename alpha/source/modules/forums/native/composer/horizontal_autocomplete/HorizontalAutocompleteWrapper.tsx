// Module ID: 10431
// Function ID: 10432
// Name: HorizontalAutocompleteWrapper
// Dependencies: [19, 1072, 21, 10432, 10644, 10647, 1652, 5372, 7360, 2]
// Exports: default

// Module 10431 (HorizontalAutocompleteWrapper)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let item, keyExtractor, results;

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
  let items6;
  let obj4;
  let selection;
  let style;
  let text;
  let tmp14;
  let tmp15;
  let tmp16;
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  results = undefined;
  keyExtractor = undefined;
  let tmp2 = results;
  ({ style, text, selection } = channel);
  let obj = channel(results[3]);
  const horizontalAutocompleteResults = obj.useHorizontalAutocompleteResults({ channel, text, selection });
  results = horizontalAutocompleteResults.results;
  const autocompleteSelectionStart = horizontalAutocompleteResults.autocompleteSelectionStart;
  const query = horizontalAutocompleteResults.query;
  let obj2 = autocompleteSelectionStart;
  const ref = autocompleteSelectionStart.useRef(null);
  const first = results[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  let items = [query, type];
  const effect = obj2.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  let items1 = [results];
  const memo = obj2.useMemo(() => results.flatMap((type) => {
    let items1;
    if (type.type === constants.USER) {
      const items = [type.user.id];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }), items1);
  onPressAutocompleteItem(tmp2[4])(channel.guild_id, memo);
  const items2 = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  keyExtractor = obj2.useCallback((stopPropagation, arg1) => {
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
  }, items2);
  const items3 = [channel.guild_id, keyExtractor];
  let num = 0;
  const callback1 = obj2.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (query.USER === type) {
      const obj2 = {
        guildId: item.guild_id,
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const User = onPressAutocompleteItem(results[5]).User;
      const merged = Object.assign(item);
      return ref(User, obj2);
    } else if (query.ROLE === type) {
      const obj3 = {
        guildId: item.guild_id,
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const Role = onPressAutocompleteItem(results[5]).Role;
      const merged1 = Object.assign(item);
      return ref(Role, obj3);
    } else if (query.CHANNEL === type) {
      const obj4 = {
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const Channel = onPressAutocompleteItem(results[5]).Channel;
      const merged2 = Object.assign(item);
      return ref(Channel, obj4);
    } else if (query.EMOJI === type) {
      const obj = {
        onPress(arg0) {
            return callback(arg0, item);
          }
      };
      const Emoji = onPressAutocompleteItem(results[5]).Emoji;
      const merged3 = Object.assign(item);
      return ref(Emoji, obj);
    } else {
      return null;
    }
  }, items3);
  const tmp9 = onPressAutocompleteItem;
  if (results.length > 0) {
    num = 1;
  }
  const items4 = [closure_7, , ];
  const useAnimatedStyle = tmp(tmp2[6]).useAnimatedStyle;
  channel(tmp2[6]);
  items4[1] = channel(tmp2[7]).withTiming;
  items4[2] = num;
  let c0;
  let c1;
  [tmp14, tmp15, tmp16] = items4;
  class HorizontalAutocompleteWrapperTsx1 {
    constructor() {
      const obj = { opacity: _undefined(c1) };
      return obj;
    }
  }
  const items5 = [tmp15, tmp16];
  HorizontalAutocompleteWrapperTsx1.__closure = items5;
  HorizontalAutocompleteWrapperTsx1.__workletHash = 15765485703035;
  HorizontalAutocompleteWrapperTsx1.__initData = tmp14;
  const animatedStyle = useAnimatedStyle(HorizontalAutocompleteWrapperTsx1);
  let obj3 = { style: items6, children: ref(tmp(tmp2[8]).FlashList, obj4) };
  items6 = [style, animatedStyle];
  const View = tmp9(tmp2[6]).View;
  obj4 = {
    ref,
    keyboardShouldPersistTaps: "always",
    horizontal: true,
    keyExtractor,
    getItemType(type) {
      return type.type;
    },
    data: results,
    renderItem: callback1
  };
  return ref(View, obj3);
};
