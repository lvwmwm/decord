// Module ID: 11283
// Function ID: 87795
// Name: Item
// Dependencies: []
// Exports: default

// Module 11283 (Item)
function Item(arg0) {
  let item;
  ({ item, index: closure_0, choices: closure_1, onChoiceSelect: closure_2 } = arg0);
  let closure_3;
  let React;
  function ListItem(arg0) {
    let label;
    let onPress;
    ({ label, onPress } = arg0);
    return callback2(callback(closure_2[18]).TableRow, { label, onPress, start: 0 === callback, end: callback === length.length - 1 });
  }
  let tmp2 = item.type === AutoCompleteResultTypes.CHOICE;
  if (!tmp2) {
    tmp2 = item.type === AutoCompleteResultTypes.CHOICE_LOADING;
  }
  if (!tmp2) {
    tmp2 = item.type === AutoCompleteResultTypes.LABEL;
  }
  importDefault(dependencyMap[17])(tmp2, "Invalid autocomplete result type");
  closure_3 = callback3();
  React = React.useMemo(() => 100 * Math.random() + 50, []);
  const tmp = importDefault(dependencyMap[17]);
  const match = arg1(dependencyMap[19]).match(item);
  let obj = { type: AutoCompleteResultTypes.CHOICE };
  const str = arg1(dependencyMap[19]);
  obj = { type: AutoCompleteResultTypes.LABEL };
  const withResult = match.with(obj, (children) => {
    let obj = {
      label: callback2(children(closure_2[20]).Text, obj),
      onPress() {
        if (null != callback2) {
          callback2(arg0.choice);
        }
        callback(callback2[13]).hideActionSheet();
      }
    };
    obj = { children: children.choice.displayName };
    return callback2(ListItem, obj);
  });
  const obj1 = { type: AutoCompleteResultTypes.CHOICE_LOADING };
  const withResult1 = match.with(obj, (children) => {
    let obj = {
      label: callback2(children(closure_2[20]).Text, obj),
      onPress() {
        if (null != callback2) {
          callback2(arg0.choice);
        }
        callback(callback2[13]).hideActionSheet();
      }
    };
    obj = { children: children.choice.displayName };
    return callback2(ListItem, obj);
  }).with(obj, (label) => {
    const items = ["GUILD_CREATION_INTENT_SELECTED", label.label, "\""];
    return callback2(ListItem, {
      label: callback3(label(closure_2[20]).Text, { children: items }),
      onPress() {
        if (null != callback2) {
          const obj = {};
          ({ label: obj.name, label: obj.value, label: obj.displayName } = arg0);
          callback2(obj);
        }
        callback(callback2[13]).hideActionSheet();
      }
    });
  });
  return match.with(obj, (children) => {
    let obj = {
      label: callback2(children(closure_2[20]).Text, obj),
      onPress() {
        if (null != callback2) {
          callback2(arg0.choice);
        }
        callback(callback2[13]).hideActionSheet();
      }
    };
    obj = { children: children.choice.displayName };
    return callback2(ListItem, obj);
  }).with(obj, (label) => {
    const items = ["GUILD_CREATION_INTENT_SELECTED", label.label, "\""];
    return callback2(ListItem, {
      label: callback3(label(closure_2[20]).Text, { children: items }),
      onPress() {
        if (null != callback2) {
          const obj = {};
          ({ label: obj.name, label: obj.value, label: obj.displayName } = arg0);
          callback2(obj);
        }
        callback(callback2[13]).hideActionSheet();
      }
    });
  }).with({ type: AutoCompleteResultTypes.CHOICE_LOADING }, () => {
    let obj = {};
    obj = { style: closure_3.commandChoiceLoadingContainer, children: callback2(ListItem, { style: items }) };
    const items = [closure_3.commandChoiceLoadingItem, ];
    obj = { width: closure_4 };
    items[1] = obj;
    obj.label = callback2(ListItem, obj);
    return callback2(ListItem, obj);
  }).exhaustive();
}
function AutocompleteFailedEmptyState() {
  const obj = { style: callback3().emptyState, lightSource: importDefault(dependencyMap[22]), darkSource: importDefault(dependencyMap[22]) };
  const intl = arg1(dependencyMap[16]).intl;
  obj.title = intl.string(arg1(dependencyMap[16]).t.rTAbPn);
  return callback2(arg1(dependencyMap[21]).EmptyState, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
arg1(dependencyMap[5]).AutoCompleteResultTypes;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]).debounce(importDefault(dependencyMap[9]), arg1(dependencyMap[6]).AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, { flex: null, marginRight: null });
const importDefaultResult = importDefault(dependencyMap[8]);
let obj = { commandChoiceLoadingContainer: { markAsSpoilerTitle: null, keyboardAppearance: null } };
obj = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: importDefault(dependencyMap[11]).radii.lg, alignSelf: "flex-start" };
obj.commandChoiceLoadingItem = obj;
obj.emptyState = { backgroundColor: "transparent" };
let closure_12 = arg1(dependencyMap[10]).createStyles(obj);
const obj2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx");

export default function AppLauncherAutocompleteActionSheet(onDismiss) {
  let initChoice;
  let onChoiceSelect;
  const option = onDismiss.option;
  const arg1 = option;
  ({ initChoice, onChoiceSelect } = onDismiss);
  const importDefault = onChoiceSelect;
  const channel = onDismiss.channel;
  const dependencyMap = channel;
  const activeCommand = onDismiss.activeCommand;
  let callback = activeCommand;
  const optionValues = onDismiss.optionValues;
  const React = optionValues;
  let View;
  let closure_6;
  let closure_7;
  let memo;
  let name;
  if (null != initChoice) {
    name = initChoice.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  const tmp3 = callback(React.useState(str), 2);
  const first = tmp3[0];
  View = first;
  const ref = React.useRef(null);
  closure_6 = ref;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const items1 = [channel.id, option.name, first];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ autocompleteResults: ref.getAutocompleteChoices(channel.id, option.name, first), lastErrored: ref.getLastErrored(channel.id) }), items1);
  closure_7 = autocompleteResults;
  let lastErrored = stateFromStoresObject.lastErrored;
  const items2 = [first, stateFromStoresObject.autocompleteResults, lastErrored];
  memo = React.useMemo(() => {
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
      HermesBuiltin.arraySpread(autocompleteResults.map((choice) => ({ type: constants.CHOICE, choice })), 0);
      HermesBuiltin.apply(items2, items);
    }
  }, items2);
  let tmp7 = 0 === memo.length && !lastErrored;
  const items3 = [channel, option.name, activeCommand, optionValues, first];
  const effect = React.useEffect(() => {
    let obj = { command: activeCommand, optionValues };
    obj = { channel, guild: autocompleteResults.getGuild(channel.guild_id), autocomplete: obj };
    obj = { name: option.name, query: first };
    obj.context = obj;
    callback(obj);
    const current = ref.current;
    if (null != current) {
      current.scrollToOffset({ -437125116: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002488040065571517, -435748860: -823154013994709700000000000000000000000000000000000000000000000 });
    }
  }, items3);
  const items4 = [onChoiceSelect, memo];
  const items5 = [onChoiceSelect, first];
  callback = React.useCallback((item) => memo(closure_13, { item: item.item, index: item.index, onChoiceSelect, choices: memo }), items4);
  const callback1 = React.useCallback(() => {
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
  const intl = arg1(dependencyMap[16]).intl;
  obj.placeholder = intl.string(arg1(dependencyMap[16]).t.Wuie9L);
  obj.onChange = tmp3[1];
  obj.autoFocus = true;
  obj.returnKeyType = "done";
  obj.onSubmitEditing = callback1;
  const items6 = [memo(arg1(dependencyMap[15]).AppLauncherListSearchBar, obj), , , ];
  if (tmp7) {
    tmp7 = memo(arg1(dependencyMap[15]).AppLauncherListEmptyState, {});
  }
  items6[1] = tmp7;
  items6[2] = memo(arg1(dependencyMap[15]).AppLauncherList, {
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
  return closure_10(arg1(dependencyMap[14]).AppLauncherCommandOptionActionSheet, obj);
};
