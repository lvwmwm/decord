// Module ID: 9673
// Function ID: 75254
// Name: HorizontalAutocompleteWrapper
// Dependencies: [31, 27, 653, 33, 9674, 9677, 3991, 4131, 2]
// Exports: default

// Module 9673 (HorizontalAutocompleteWrapper)
import result from "result";
import { FlatList } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
require("ME").AutoCompleteResultTypes;
let closure_7 = { code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const result = require("ME").fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default function HorizontalAutocompleteWrapper(channel) {
  let autocompleteSelectionStart;
  let results;
  let selection;
  let style;
  let text;
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  let num;
  ({ style, text, selection } = channel);
  let obj = channel(autocompleteSelectionStart[4]);
  const horizontalAutocompleteResults = obj.useHorizontalAutocompleteResults({ channel, text, selection });
  ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
  const query = horizontalAutocompleteResults.query;
  const items = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  const callback = query.useCallback((stopPropagation) => {
    stopPropagation.stopPropagation();
    let num = 0;
    if (null != autocompleteSelectionStart) {
      num = autocompleteSelectionStart;
    }
    let str = "";
    if (null != query) {
      str = query;
    }
    onPressAutocompleteItem(arg1, num, str);
  }, items);
  const items1 = [channel.guild_id, callback];
  num = 0;
  const callback1 = query.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (num.USER === type) {
      let obj = {};
      const merged = Object.assign(item);
      obj["guildId"] = item.guild_id;
      obj["onPress"] = function onPress(arg0) {
        return outer1_4(arg0, item);
      };
      return outer1_6(onPressAutocompleteItem(autocompleteSelectionStart[5]).User, obj);
    } else if (num.ROLE === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj["guildId"] = item.guild_id;
      obj["onPress"] = function onPress(arg0) {
        return outer1_4(arg0, item);
      };
      return outer1_6(onPressAutocompleteItem(autocompleteSelectionStart[5]).Role, obj);
    } else if (num.CHANNEL === type) {
      const obj1 = {};
      const merged2 = Object.assign(item);
      obj1["onPress"] = function onPress(arg0) {
        return outer1_4(arg0, item);
      };
      return outer1_6(onPressAutocompleteItem(autocompleteSelectionStart[5]).Channel, obj1);
    } else if (num.EMOJI === type) {
      obj = {};
      const merged3 = Object.assign(item);
      obj["onPress"] = function onPress(arg0) {
        return outer1_4(arg0, item);
      };
      return outer1_6(onPressAutocompleteItem(autocompleteSelectionStart[5]).Emoji, obj);
    } else {
      return null;
    }
  }, items1);
  if (results.length > 0) {
    num = 1;
  }
  let obj1 = channel(autocompleteSelectionStart[6]);
  const fn = function _() {
    const obj = { opacity: channel(autocompleteSelectionStart[7]).withTiming(num) };
    return obj;
  };
  obj = { withTiming: channel(autocompleteSelectionStart[7]).withTiming, toValue: num };
  fn.__closure = obj;
  fn.__workletHash = 7895652904738;
  fn.__initData = closure_7;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items2 };
  items2 = [style, animatedStyle];
  obj1 = {
    keyboardShouldPersistTaps: "always",
    horizontal: true,
    keyExtractor(arg0, arg1) {
      return String(arg1);
    },
    data: results,
    renderItem: callback1
  };
  obj.children = <callback keyboardShouldPersistTaps="always" horizontal keyExtractor={function keyExtractor(arg0, arg1) {
    return String(arg1);
  }} data={results} renderItem={callback1} />;
  return jsx(onPressAutocompleteItem(autocompleteSelectionStart[6]).View, { style: items2 });
};
