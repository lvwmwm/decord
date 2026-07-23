// Module ID: 11294
// Function ID: 87870
// Name: Item
// Dependencies: [57, 31, 27, 7021, 1838, 653, 4566, 33, 22, 8184, 4130, 689, 624, 4098, 11289, 11290, 1212, 44, 5165, 4329, 4126, 1273, 11291, 2]
// Exports: default

// Module 11294 (Item)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import closure_11 from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "registerAsset";

let closure_10;
let closure_9;
const require = arg1;
function Item(arg0) {
  let dependencyMap;
  let importDefault;
  let item;
  let require;
  ({ item, index: require, choices: importDefault, onChoiceSelect: dependencyMap } = arg0);
  let _slicedToArray;
  let React;
  function ListItem(arg0) {
    let label;
    let onPress;
    ({ label, onPress } = arg0);
    return outer1_9(outer1_0(outer1_2[18]).TableRow, { label, onPress, start: 0 === closure_0, end: closure_0 === length.length - 1 });
  }
  let tmp2 = item.type === AutoCompleteResultTypes.CHOICE;
  if (!tmp2) {
    tmp2 = item.type === AutoCompleteResultTypes.CHOICE_LOADING;
  }
  if (!tmp2) {
    tmp2 = item.type === AutoCompleteResultTypes.LABEL;
  }
  importDefault(44)(tmp2, "Invalid autocomplete result type");
  _slicedToArray = callback2();
  React = React.useMemo(() => 100 * Math.random() + 50, []);
  const tmp = importDefault(44);
  const match = require(4329) /* n */.match(item);
  let obj = { type: AutoCompleteResultTypes.CHOICE };
  const str = require(4329) /* n */;
  obj = { type: AutoCompleteResultTypes.LABEL };
  const withResult = match.with(obj, (choice) => {
    let closure_0 = choice;
    obj = {
      label: outer1_9(outer1_0(outer1_2[20]).Text, obj),
      onPress() {
        if (null != outer1_2) {
          outer1_2(choice.choice);
        }
        outer2_1(outer2_2[13]).hideActionSheet();
      }
    };
    obj = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: choice.choice.displayName };
    return outer1_9(ListItem, obj);
  });
  const obj1 = { type: AutoCompleteResultTypes.CHOICE_LOADING };
  const withResult1 = match.with(obj, (choice) => {
    let closure_0 = choice;
    obj = {
      label: outer1_9(outer1_0(outer1_2[20]).Text, obj),
      onPress() {
        if (null != outer1_2) {
          outer1_2(choice.choice);
        }
        outer2_1(outer2_2[13]).hideActionSheet();
      }
    };
    obj = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: choice.choice.displayName };
    return outer1_9(ListItem, obj);
  }).with(obj, (label) => {
    let closure_0 = label;
    obj = {
      label: outer1_10(outer1_0(outer1_2[20]).Text, obj),
      onPress() {
        if (null != outer1_2) {
          const obj = {};
          ({ label: obj.name, label: obj.value, label: obj.displayName } = closure_0);
          outer1_2(obj);
        }
        outer2_1(outer2_2[13]).hideActionSheet();
      }
    };
    obj = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary" };
    const items = ["\"", label.label, "\""];
    obj.children = items;
    return outer1_9(ListItem, obj);
  });
  return match.with(obj, (choice) => {
    let closure_0 = choice;
    obj = {
      label: outer1_9(outer1_0(outer1_2[20]).Text, obj),
      onPress() {
        if (null != outer1_2) {
          outer1_2(choice.choice);
        }
        outer2_1(outer2_2[13]).hideActionSheet();
      }
    };
    obj = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: choice.choice.displayName };
    return outer1_9(ListItem, obj);
  }).with(obj, (label) => {
    let closure_0 = label;
    obj = {
      label: outer1_10(outer1_0(outer1_2[20]).Text, obj),
      onPress() {
        if (null != outer1_2) {
          const obj = {};
          ({ label: obj.name, label: obj.value, label: obj.displayName } = closure_0);
          outer1_2(obj);
        }
        outer2_1(outer2_2[13]).hideActionSheet();
      }
    };
    obj = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary" };
    const items = ["\"", label.label, "\""];
    obj.children = items;
    return outer1_9(ListItem, obj);
  }).with({ type: AutoCompleteResultTypes.CHOICE_LOADING }, () => {
    let obj = {};
    obj = { style: _slicedToArray.commandChoiceLoadingContainer, children: outer1_9(ListItem, { style: items }) };
    items = [_slicedToArray.commandChoiceLoadingItem, ];
    obj = { width: result };
    items[1] = obj;
    obj.label = outer1_9(ListItem, obj);
    return outer1_9(ListItem, obj);
  }).exhaustive();
}
function AutocompleteFailedEmptyState() {
  const obj = { style: callback2().emptyState, lightSource: importDefault(11291), darkSource: importDefault(11291) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.rTAbPn);
  return callback(require(1273) /* Button */.EmptyState, obj);
}
require("ME").AutoCompleteResultTypes;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = { commandChoiceLoadingContainer: { flex: 1, justifyContent: "center" } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
obj.commandChoiceLoadingItem = obj;
obj.emptyState = { backgroundColor: "transparent" };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx");

export default function AppLauncherAutocompleteActionSheet(onDismiss) {
  let initChoice;
  let onChoiceSelect;
  const option = onDismiss.option;
  ({ initChoice, onChoiceSelect } = onDismiss);
  const channel = onDismiss.channel;
  const activeCommand = onDismiss.activeCommand;
  const optionValues = onDismiss.optionValues;
  let first;
  let ref;
  let autocompleteResults;
  let lastErrored;
  let memo;
  let name;
  if (null != initChoice) {
    name = initChoice.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  const tmp3 = activeCommand(optionValues.useState(str), 2);
  first = tmp3[0];
  ref = optionValues.useRef(null);
  let obj = option(channel[12]);
  let items = [ref];
  let items1 = [channel.id, option.name, first];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ autocompleteResults: ref.getAutocompleteChoices(channel.id, option.name, first), lastErrored: ref.getLastErrored(channel.id) }), items1);
  autocompleteResults = stateFromStoresObject.autocompleteResults;
  lastErrored = stateFromStoresObject.lastErrored;
  let items2 = [first, autocompleteResults, lastErrored];
  memo = optionValues.useMemo(() => {
    const items = [];
    if ("" !== first) {
      let obj = { type: lastErrored.LABEL, label: first };
      items.push(obj);
    }
    if (null == autocompleteResults) {
      if (!lastErrored) {
        const push = items.push;
        const _Array = Array;
        const array = new Array(4);
        obj = { type: lastErrored.CHOICE_LOADING };
        const items1 = [];
        HermesBuiltin.arraySpread(array.fill(obj), 0);
        HermesBuiltin.apply(items1, items);
      }
      return items;
    }
    if (null != autocompleteResults) {
      const push2 = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(autocompleteResults.map((choice) => ({ type: lastErrored.CHOICE, choice })), 0);
      HermesBuiltin.apply(items2, items);
    }
  }, items2);
  let tmp7 = 0 === memo.length && !lastErrored;
  const items3 = [channel, option.name, activeCommand, optionValues, first];
  const effect = optionValues.useEffect(() => {
    let obj = { command: activeCommand, optionValues };
    obj = { channel, guild: autocompleteResults.getGuild(channel.guild_id), autocomplete: obj };
    obj = { name: option.name, query: first };
    obj.context = obj;
    outer1_11(obj);
    const current = ref.current;
    if (null != current) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items3);
  const items4 = [onChoiceSelect, memo];
  const items5 = [onChoiceSelect, first];
  const callback = optionValues.useCallback((item) => memo(outer1_13, { item: item.item, index: item.index, onChoiceSelect, choices: memo }), items4);
  const callback1 = optionValues.useCallback(() => {
    if ("" !== first) {
      if (null != onChoiceSelect) {
        const obj = { name: first, value: first, displayName: first };
        onChoiceSelect(obj);
      }
      onChoiceSelect(channel[13]).hideActionSheet();
      const obj2 = onChoiceSelect(channel[13]);
    }
  }, items5);
  obj = { option, onDismiss: onDismiss.onDismissAutocompleteSheet };
  obj = {};
  const intl = option(channel[16]).intl;
  obj.placeholder = intl.string(option(channel[16]).t.Wuie9L);
  obj.onChange = tmp3[1];
  obj.autoFocus = true;
  obj.returnKeyType = "done";
  obj.onSubmitEditing = callback1;
  const items6 = [memo(option(channel[15]).AppLauncherListSearchBar, obj), , , ];
  if (tmp7) {
    tmp7 = memo(option(channel[15]).AppLauncherListEmptyState, {});
  }
  items6[1] = tmp7;
  items6[2] = memo(option(channel[15]).AppLauncherList, {
    ref,
    keyExtractor(type) {
      let str = "placeholder";
      if (type.type === lastErrored.CHOICE) {
        str = type.choice.name;
      }
      return "" + str + "_" + arg1;
    },
    data: memo,
    renderItem: callback,
    scrollEnabled: true
  });
  if (lastErrored) {
    lastErrored = memo(AutocompleteFailedEmptyState, {});
  }
  items6[3] = lastErrored;
  obj.children = items6;
  return closure_10(option(channel[14]).AppLauncherCommandOptionActionSheet, obj);
};
