// Module ID: 11653
// Function ID: 11654
// Name: AppLauncherAutocompleteActionSheet
// Dependencies: [32, 19, 17, 7198, 2067, 1074, 5305, 21, 12, 8714, 4836, 576, 563, 4800, 11648, 11649, 1115, 38, 5917, 5021, 4832, 1177, 11650, 2]
// Exports: default

// Module 11653 (AppLauncherAutocompleteActionSheet)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import merged5 from "merged5" /* 5021 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5305 */;
import TableRow from "TableRow" /* 5917 */;
import executeCommandDefault from "executeCommand" /* 8714 */;
import AssetRegistryDefault from "AssetRegistry" /* 11650 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore" /* 7198 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import module_12 from "module_12" /* 12 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
function Item(arg0) {
  let item;
  let length;
  let width;
  ({ item, index: require, choices: importDefault, onChoiceSelect: dependencyMap } = arg0);
  let closure_3;
  react = undefined;
  function ListItem(arg0) {
    let label;
    let onPress;
    ({ label, onPress } = arg0);
    const obj = { label, onPress, start: 0 === require, end: require === importDefault.length - 1 };
    return React4(TableRow.TableRow, obj);
  }
  const tmp = dependencyMap;
  let tmp4 = item.type === AutoCompleteResultTypes.CHOICE;
  const tmp2 = _modDef38;
  if (!tmp4) {
    tmp4 = item.type === tmp3.CHOICE_LOADING;
  }
  if (!tmp4) {
    tmp4 = item.type === tmp3.LABEL;
  }
  tmp2(tmp4, "Invalid autocomplete result type");
  closure_3 = closure_12();
  react = react.useMemo(() => 100 * Math.random() + 50, []);
  const str = merged5;
  const match = str.match(item);
  let obj = { type: tmp3.CHOICE };
  let obj2 = { type: tmp3.LABEL };
  let obj3 = { type: tmp3.CHOICE_LOADING };
  const withResult = match.with(obj, (children) => {
    let obj2;
    let obj = {
      label: closure_1_9(Text_Text.Text, obj2),
      onPress() {
        if (dependencyMap != null) {
          tmp(children.choice);
        }
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
    };
    obj2 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: children.choice.displayName };
    return closure_1_9(ListItem, obj);
  });
  const withResult1 = withResult.with(obj2, (label) => {
    let items;
    let obj2;
    require = label;
    let obj = {
      label: closure_1_10(Text_Text.Text, obj2),
      onPress() {
        if (dependencyMap != null) {
          const obj = { name: null, value: null, displayName: null };
          ({ label: obj.name, label: obj.value, label: obj.displayName } = label);
          tmp(obj);
        }
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
      }
    };
    obj2 = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: items };
    items = ["\"", label.label, "\""];
    return closure_1_9(ListItem, obj);
  });
  const withResult2 = withResult1.with(obj3, () => {
    let items;
    let obj2;
    let obj3;
    const obj = { label: React4(View, obj2) };
    obj2 = { style: closure_3.commandChoiceLoadingContainer, children: React4(View, obj3) };
    obj3 = { style: items };
    items = [closure_3.commandChoiceLoadingItem, ];
    const obj4 = { width };
    items[1] = obj4;
    return React4(ListItem, obj);
  });
  return withResult2.exhaustive();
}
function AutocompleteFailedEmptyState() {
  let intl;
  const obj = { style: closure_12().emptyState, lightSource: AssetRegistryDefault, darkSource: AssetRegistryDefault, title: intl.string(intl2.t.rTAbPn) };
  const EmptyState = native.EmptyState;
  intl = intl2.intl;
  return React4(EmptyState, obj);
}
let react = react_mod;
const View = react_native.View;
const AutoCompleteResultTypes = Constants.AutoCompleteResultTypes;
const AUTOCOMPLETE_OPTION_DEBOUNCE_TIME = ApplicationCommandConstants.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
({ jsx: c9, jsxs: c10 } = Fragment);
const executeCommand = module_12.debounce(executeCommandDefault, AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, { leading: true, trailing: true });
let obj = { commandChoiceLoadingContainer: { flex: 1, justifyContent: "center" }, commandChoiceLoadingItem: obj2, emptyState: { backgroundColor: "transparent" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
let closure_12 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx");

export default function AppLauncherAutocompleteActionSheet(option) {
  let initChoice;
  let intl;
  let items6;
  let onChoiceSelect;
  option = option.option;
  ({ initChoice, onChoiceSelect } = option);
  const channel = option.channel;
  const activeCommand = option.activeCommand;
  const optionValues = option.optionValues;
  let query;
  let ref;
  let autocompleteResults;
  let lastErrored;
  let memo;
  let obj = optionValues;
  let str;
  const onDismissAutocompleteSheet = option.onDismissAutocompleteSheet;
  const useState = optionValues.useState;
  if (initChoice != null) {
    str = initChoice.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp = activeCommand(useState(str), 2);
  query = tmp[0];
  const tmp3 = tmp[1];
  ref = obj.useRef(null);
  let tmp5 = option;
  let obj2 = option(channel[12]);
  let items = [ref];
  let items1 = [channel.id, option.name, query];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { autocompleteResults: ApplicationCommandAutocompleteStore.getAutocompleteChoices(channel.id, option.name, first), lastErrored: ApplicationCommandAutocompleteStore.getLastErrored(channel.id) };
    return obj;
  }, items1);
  autocompleteResults = stateFromStoresObject.autocompleteResults;
  lastErrored = stateFromStoresObject.lastErrored;
  let items2 = [query, autocompleteResults, lastErrored];
  memo = obj.useMemo(function() {
    const items = [];
    if ("" !== first) {
      const obj = { type: AutoCompleteResultTypes.LABEL, label: tmp2 };
      items.push(obj);
    }
    if (null == autocompleteResults) {
      const tmp5 = lastErrored;
      if (!tmp5) {
        const push = items.push;
        const _Array = Array;
        const self = this;
        const self2 = this;
        const array = new Array(4);
        const items1 = [];
        const obj2 = { type: AutoCompleteResultTypes.CHOICE_LOADING };
        HermesBuiltin.arraySpread(items1, array.fill(obj2), 0);
        HermesBuiltin.apply(push, items1, items);
      }
      return items;
    }
    if (null != autocompleteResults) {
      const push2 = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(items2, autocompleteResults.map((choice) => ({ type: constants.CHOICE, choice })), 0);
      HermesBuiltin.apply(push2, items2, items);
    }
  }, items2);
  let tmp13Result = 0 === memo.length && !lastErrored;
  const items3 = [channel, option.name, activeCommand, optionValues, query];
  const effect = obj.useEffect(() => {
    let obj2;
    let obj3;
    const obj = { command: activeCommand, optionValues, context: obj2 };
    obj2 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj3 };
    obj3 = { name: option.name, query };
    executeCommand(obj);
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items3);
  const items4 = [onChoiceSelect, memo];
  const items5 = [onChoiceSelect, query];
  const callback = obj.useCallback((item) => {
    const obj = { item: item.item, index: item.index, onChoiceSelect, choices: memo };
    return React4(Item, obj);
  }, items4);
  const callback1 = obj.useCallback(() => {
    if ("" !== first) {
      if (onChoiceSelect != null) {
        const obj = { name: first, value: first, displayName: first };
        tmp2(obj);
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  }, items5);
  let obj3 = { option, onDismiss: onDismissAutocompleteSheet, children: items6 };
  const AppLauncherCommandOptionActionSheet = tmp5(tmp6[14]).AppLauncherCommandOptionActionSheet;
  const obj4 = { placeholder: intl.string(tmp5(channel[16]).t.Wuie9L), onChange: tmp3, autoFocus: true, returnKeyType: "done", onSubmitEditing: callback1 };
  const AppLauncherListSearchBar = tmp5(tmp6[15]).AppLauncherListSearchBar;
  intl = tmp5(tmp6[16]).intl;
  items6 = [memo(AppLauncherListSearchBar, obj4), , , ];
  const tmp12 = closure_10;
  if (tmp13Result) {
    tmp13Result = tmp13(tmp5(tmp6[15]).AppLauncherListEmptyState, {});
  }
  items6[1] = tmp13Result;
  const obj5 = {
    ref,
    keyExtractor(type, arg1) {
      let str = "placeholder";
      if (type.type === lastErrored.CHOICE) {
        str = type.choice.name;
      }
      return "" + str + "_" + arg1;
    },
    data: memo,
    renderItem: callback,
    scrollEnabled: true
  };
  items6[2] = memo(tmp5(channel[15]).AppLauncherList, obj5);
  if (lastErrored) {
    lastErrored = tmp13(AutocompleteFailedEmptyState, {});
  }
  items6[3] = lastErrored;
  return tmp12(AppLauncherCommandOptionActionSheet, obj3);
};
