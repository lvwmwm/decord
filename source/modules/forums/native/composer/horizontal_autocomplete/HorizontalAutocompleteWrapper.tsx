// Module ID: 9629
// Function ID: 74989
// Name: HorizontalAutocompleteWrapper
// Dependencies: []
// Exports: default

// Module 9629 (HorizontalAutocompleteWrapper)
let closure_3 = importAll(dependencyMap[0]);
const FlatList = arg1(dependencyMap[1]).FlatList;
arg1(dependencyMap[2]).AutoCompleteResultTypes;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = { code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default function HorizontalAutocompleteWrapper(channel) {
  let autocompleteSelectionStart;
  let results;
  let selection;
  let style;
  let text;
  channel = channel.channel;
  const arg1 = channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  const importDefault = onPressAutocompleteItem;
  ({ style, text, selection } = channel);
  let obj = arg1(dependencyMap[4]);
  const horizontalAutocompleteResults = obj.useHorizontalAutocompleteResults({ channel, text, selection });
  ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
  const dependencyMap = autocompleteSelectionStart;
  const query = horizontalAutocompleteResults.query;
  const React = query;
  const items = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  const callback = React.useCallback((stopPropagation) => {
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
  const FlatList = callback;
  const items1 = [channel.guild_id, callback];
  let num = 0;
  const callback1 = React.useCallback((item) => {
    item = item.item;
    const channel = item;
    const type = item.type;
    if (num.USER === type) {
      let obj = {};
      const merged = Object.assign(item);
      obj["guildId"] = channel.guild_id;
      obj["onPress"] = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[5]).User, obj);
    } else if (num.ROLE === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj["guildId"] = channel.guild_id;
      obj["onPress"] = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[5]).Role, obj);
    } else if (num.CHANNEL === type) {
      const obj1 = {};
      const merged2 = Object.assign(item);
      obj1["onPress"] = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[5]).Channel, obj1);
    } else if (num.EMOJI === type) {
      obj = {};
      const merged3 = Object.assign(item);
      obj["onPress"] = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[5]).Emoji, obj);
    } else {
      return null;
    }
  }, items1);
  if (results.length > 0) {
    num = 1;
  }
  let obj1 = arg1(dependencyMap[6]);
  const fn = function _() {
    const obj = { opacity: channel(autocompleteSelectionStart[7]).withTiming(num) };
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[7]).withTiming, toValue: num };
  fn.__closure = obj;
  fn.__workletHash = 7895652904738;
  fn.__initData = closure_7;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items2 };
  const items2 = [style, animatedStyle];
  obj1 = {
    <string:1698100995>: "channelId",
    <string:3635473612>: "channelId",
    keyExtractor(arg0, arg1) {
      return String(arg1);
    },
    data: results,
    renderItem: callback1
  };
  obj.children = <FlatList {...obj1} />;
  return jsx(importDefault(dependencyMap[6]).View, obj);
};
