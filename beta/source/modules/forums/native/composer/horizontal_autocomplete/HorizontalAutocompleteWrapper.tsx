// Module ID: 9884
// Function ID: 9885
// Name: HorizontalAutocompleteWrapper
// Dependencies: [19, 17, 1074, 21, 9885, 10087, 4566, 4837, 2]
// Exports: default

// Module 9884 (HorizontalAutocompleteWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let item;

const FlatList = react_native.FlatList;
Constants.AutoCompleteResultTypes;
const jsx = Fragment.jsx;
const __initData = { code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default function HorizontalAutocompleteWrapper(channel) {
  let autocompleteSelectionStart;
  let results;
  let selection;
  let style;
  let text;
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  let tmp2 = autocompleteSelectionStart;
  ({ style, text, selection } = channel);
  let obj = channel(autocompleteSelectionStart[4]);
  const horizontalAutocompleteResults = obj.useHorizontalAutocompleteResults({ channel, text, selection });
  ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
  const query = horizontalAutocompleteResults.query;
  const items = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  const callback = query.useCallback((stopPropagation, arg1) => {
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
  }, items);
  const items1 = [channel.guild_id, callback];
  let num = 0;
  const callback1 = query.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (num.USER === type) {
      const User = onPressAutocompleteItem(autocompleteSelectionStart[5]).User;
      const merged = Object.assign(item);
      return <User guildId={item.guild_id} onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else if (num.ROLE === type) {
      const Role = onPressAutocompleteItem(autocompleteSelectionStart[5]).Role;
      const merged1 = Object.assign(item);
      return <Role guildId={item.guild_id} onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else if (num.CHANNEL === type) {
      const Channel = onPressAutocompleteItem(autocompleteSelectionStart[5]).Channel;
      const merged2 = Object.assign(item);
      return <Channel onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else if (num.EMOJI === type) {
      const Emoji = onPressAutocompleteItem(autocompleteSelectionStart[5]).Emoji;
      const merged3 = Object.assign(item);
      return <Emoji onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else {
      return null;
    }
  }, items1);
  if (results.length > 0) {
    num = 1;
  }
  const fn = function _() {
    let obj2;
    const obj = { opacity: obj2.withTiming(num) };
    obj2 = timing;
    return obj;
  };
  const tmpResult = channel(tmp2[6]);
  let obj2 = { withTiming: tmp(tmp2[7]).withTiming, toValue: num };
  fn.__closure = obj2;
  fn.__workletHash = 7895652904738;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const items2 = [style, animatedStyle];
  const View = onPressAutocompleteItem(tmp2[6]).View;
  return <View style={items2}>{null}</View>;
};
