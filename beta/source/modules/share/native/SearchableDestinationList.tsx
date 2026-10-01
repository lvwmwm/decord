// Module ID: 10447
// Function ID: 10448
// Name: SearchableDestinationList
// Dependencies: [32, 19, 17, 1074, 10320, 21, 4836, 576, 10448, 6459, 10444, 9290, 7074, 1370, 6470, 9578, 10456, 10326, 10457, 1115, 5437, 6471, 2]
// Exports: default

// Module 10447 (SearchableDestinationList)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6459 */;
import UserSearchUtils from "UserSearchUtils" /* 7074 */;
import _mod9290 from "module_9290" /* 9290 */;
import UserRowConstants from "UserRowConstants" /* 10320 */;
import formatResults from "formatResults" /* 10444 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10456 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
({ View: hasOwnProperty, Keyboard: metroRequire } = react_native);
const NOOP = Constants.NOOP;
const UserRowModes = UserRowConstants.UserRowModes;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { searchBarContainer: obj2, noResults: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationList.tsx");

export default function SearchableDestinationList(getRowIsUnavailable) {
  let SearchField;
  let _undefined;
  let c13;
  let channelFilter;
  let defaultNoResultsFound;
  let disableGradient;
  let disableSelection;
  let disabledDestinations;
  let initialSelectedDestinations;
  let intl;
  let intl2;
  let items10;
  let obj10;
  let obj7;
  let originDestination;
  let selectedDestinations;
  let tmp14;
  let tmp26Result;
  let tmp31Result;
  let tmp35;
  let tmp36;
  ({ initialSelectedDestinations, disabledDestinations } = getRowIsUnavailable);
  getRowIsUnavailable = getRowIsUnavailable.getRowIsUnavailable;
  const onSelectedDestinationChange = getRowIsUnavailable.onSelectedDestinationChange;
  const onSearchTextChange = getRowIsUnavailable.onSearchTextChange;
  let NONE = getRowIsUnavailable.rowMode;
  ({ originDestination, channelFilter } = getRowIsUnavailable);
  if (NONE === undefined) {
    NONE = selectedDestinations.NONE;
  }
  let PX_8 = getRowIsUnavailable.insetStart;
  if (PX_8 === undefined) {
    let tmp2 = getRowIsUnavailable;
    PX_8 = getRowIsUnavailable(onSelectedDestinationChange[7]).space.PX_8;
  }
  let PX_12 = getRowIsUnavailable.insetEnd;
  if (PX_12 === undefined) {
    let tmp5 = onSelectedDestinationChange;
    PX_12 = getRowIsUnavailable(onSelectedDestinationChange[7]).space.PX_12;
  }
  let flag = getRowIsUnavailable.autoFocusSearch;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = getRowIsUnavailable.hideSearchOnDefaultNoResults;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ defaultNoResultsFound, disableGradient, disableSelection } = getRowIsUnavailable);
  const disableLongPress = getRowIsUnavailable.disableLongPress;
  selectedDestinations = undefined;
  let closure_9;
  let results;
  let updateSearchText;
  let ref;
  c13 = undefined;
  let closure_14;
  let onChange;
  let memo1;
  let memo2;
  let callback2;
  let callback3;
  let callback4;
  let ref1;
  let closure_22;
  let scaledTextLineHeight;
  const disableStickySections = getRowIsUnavailable.disableStickySections;
  let tmp6 = ref();
  let obj = NONE;
  ref = NONE.useRef(null);
  const useState = NONE.useState;
  if (initialSelectedDestinations == null) {
    initialSelectedDestinations = [];
  }
  const tmp8 = onSearchTextChange(useState(initialSelectedDestinations), 2);
  selectedDestinations = tmp8[0];
  closure_9 = tmp8[1];
  let obj2 = disabledDestinations(onSelectedDestinationChange[8]);
  const shareSearchResults = obj2.useShareSearchResults({ selectedDestinations, originDestination, channelFilter, includeMissingDMs: true });
  results = shareSearchResults.results;
  updateSearchText = shareSearchResults.updateSearchText;
  ref = obj.useRef("");
  [tmp14, c13] = onSearchTextChange(obj.useState(false), 2);
  const tmp13 = onSearchTextChange(obj.useState(false), 2);
  closure_14 = obj.useRef(null);
  const effect = obj.useEffect(() => () => {
    const current = ref.current;
    if (current != null) {
      current.cancel();
    }
  }, []);
  let items = [onSearchTextChange, updateSearchText];
  onChange = obj.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (current !== ref.current) {
      ref.current = current;
      if (flag) {
        current = ref.current;
        if (current != null) {
          current.setText(current);
        }
      }
      updateSearchText(current);
      if (onSearchTextChange != null) {
        onSearchTextChange(current);
      }
      _undefined(current.trim().length > 0);
      const obj = RunAfterInteractionsUtils;
      closure_14.current = obj.runAfterInteractions(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToTop(false);
        }
      });
    }
  }, items);
  let items1 = [selectedDestinations, onSelectedDestinationChange, onChange];
  const effect1 = obj.useEffect(() => {
    onSelectedDestinationChange(first);
    const timerId = setTimeout(() => {
      disableLongPress.dismiss();
    }, 0);
    const timerId1 = setTimeout(() => {
      onChange("", true);
    }, 50);
  }, items1);
  const items2 = [results.length];
  const memo = obj.useMemo(() => {
    const items = [results.length];
    return items;
  }, items2);
  const items3 = [disabledDestinations];
  const callback1 = obj.useCallback(() => ({ type: "section", props: { hideTitle: true } }), []);
  memo1 = obj.useMemo(() => {
    let mapped;
    const arr = disabledDestinations;
    if (disabledDestinations != null) {
      mapped = arr.map(formatResults.destinationKey);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  }, items3);
  const items4 = [selectedDestinations];
  memo2 = obj.useMemo(() => {
    let mapped;
    const arr = first;
    if (first != null) {
      mapped = arr.map(formatResults.destinationKey);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  }, items4);
  const items5 = [disableSelection];
  callback2 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    closure_9((arr) => {
      let items1;
      const findIndexResult = arr.findIndex((id) => id.id === id.id);
      if (-1 === findIndexResult) {
        const tmp7 = disableSelection;
        if (tmp7) {
          return arr;
        } else {
          const items = [id];
          HermesBuiltin.arraySpread(items, arr, 1);
          items1 = items;
        }
      } else {
        items1 = [];
        HermesBuiltin.arraySpread(items1, arr, 0);
        items1.splice(findIndexResult, 1);
      }
      return items1;
    });
  }, items5);
  const items6 = [callback2];
  callback3 = obj.useCallback((id) => {
    const obj = { type: "user", id: id.id };
    return callback2(obj);
  }, items6);
  const items7 = [callback2];
  callback4 = obj.useCallback((id) => {
    const obj = { type: "channel", id: id.id };
    return callback2(obj);
  }, items7);
  const items8 = [results, getRowIsUnavailable, memo2, memo1, disableSelection, disableLongPress, NONE, callback3, callback4];
  const callback5 = obj.useCallback((arg0, arg1) => {
    let label;
    let obj3;
    let obj4;
    let obj5;
    let record;
    let tmp15;
    let tmp2Result5;
    let type;
    ({ type, record } = results[arg1]);
    const arr = results;
    if (type !== _mod9290.AutocompleterResultTypes.HEADER) {
      const destinationKey = formatResults.destinationKey;
      formatResults;
      const tmp2Result4 = formatResults;
      const destinationKeyResult = destinationKey(tmp2Result4.getDestinationIdFromResult(results[arg1]));
      let tmp7;
      if (getRowIsUnavailable != null) {
        tmp7 = getRowIsUnavailable(record);
      }
      const hasItem = memo2.includes(destinationKeyResult);
      let tmp12 = disableSelection;
      const hasItem1 = memo1.includes(destinationKeyResult);
      if (disableSelection) {
        tmp12 = !hasItem;
      }
      if (!tmp12) {
        tmp12 = hasItem1;
      }
      if (!tmp12) {
        tmp12 = null != tmp7;
      }
      const obj = { disabled: tmp12, selected: hasItem, mode: NONE, subLabel: label, subLabelLineClamp: tmp15, start: 0 === arg1, end: arg1 === arr.length - 1 };
      if (null != tmp7) {
        NONE = UserRowModes.NONE;
      }
      label = undefined;
      if (tmp7 != null) {
        label = tmp7.label;
      }
      tmp15 = undefined;
      if (null != tmp7) {
        let num = tmp7.lineClamp;
        if (num == null) {
          num = 1;
        }
        tmp15 = num;
      }
      let tmp17;
      if (disableLongPress) {
        tmp17 = { onLongPress: NOOP };
        const obj2 = { onLongPress: NOOP };
      }
      const merged = Object.assign(tmp17);
      if (_mod9290.AutocompleterResultTypes.USER === type) {
        const element = { type: "user", props: obj3 };
        obj3 = { user: record, type: tmp2Result5.getRelationshipType(record.id), onPress: callback3 };
        const merged1 = Object.assign(obj);
        tmp2Result5 = UserSearchUtils;
        return element;
      } else if (_mod9290.AutocompleterResultTypes.GROUP_DM === type) {
        const element1 = { type: "gdm", props: obj4 };
        obj4 = { channel: record, onPress: callback4 };
        const merged2 = Object.assign(obj);
        return element1;
      } else {
        if (_mod9290.AutocompleterResultTypes.TEXT_CHANNEL !== type) {
          if (_mod9290.AutocompleterResultTypes.VOICE_CHANNEL !== type) {
            const tmp2Result6 = GlobalUtils;
            return tmp2Result6.assertNever(type);
          }
        }
        const element2 = { type: "channel", props: obj5 };
        obj5 = { channel: record, onPress: callback4 };
        const merged3 = Object.assign(obj);
        return element2;
      }
    }
  }, items8);
  ref1 = obj.useRef(null);
  const tmp27 = getRowIsUnavailable(onSelectedDestinationChange[14])();
  closure_22 = tmp27;
  let obj4 = disabledDestinations(onSelectedDestinationChange[15]);
  scaledTextLineHeight = obj4.useScaledTextLineHeight("text-xs/medium");
  const items9 = [results, getRowIsUnavailable, tmp27, scaledTextLineHeight];
  const callback6 = obj.useCallback((arg0, arg1) => {
    let record;
    let type;
    ({ type, record } = results[arg1]);
    let tmp2;
    if (type !== _mod9290.AutocompleterResultTypes.HEADER) {
      let lineClamp;
      if (getRowIsUnavailable != null) {
        const tmp5 = getRowIsUnavailable(record);
        if (tmp5 != null) {
          lineClamp = tmp5.lineClamp;
        }
      }
      tmp2 = lineClamp;
    }
    if (null != tmp2) {
      let tmp6;
      if (tmp2 > 1) {
        tmp6 = roundToNearestPixelDefault(closure_22 + (tmp2 - 1) * scaledTextLineHeight);
      }
      return tmp6;
    }
    tmp6 = closure_22;
  }, items9);
  const someResult = memo.some((item) => item > 0);
  if (someResult) {
    let obj3 = { ref: ref1, sections: memo, getItemProps: callback5, getSectionProps: callback1, getItemSize: tmp36, insetStart: PX_8, insetEnd: PX_12, disableStickySections };
    tmp36 = undefined;
    const UsersFastList = tmp10(tmp11[17]).UsersFastList;
    if (null != getRowIsUnavailable) {
      tmp36 = callback6;
    }
    tmp31Result = tmp31(UsersFastList, obj3);
    tmp35 = tmp31;
  } else {
    if (!tmp14) {
      let obj5;
      if (null != defaultNoResultsFound) {
        obj5 = { style: items10, children: defaultNoResultsFound };
        items10 = [tmp6.noResults];
      }
      tmp31Result = tmp31(tmp32, obj5);
      tmp35 = tmp31;
    }
    const obj6 = { style: tmp6.noResults, children: closure_9(tmp26Result, obj7) };
    obj7 = { title: intl.string(disabledDestinations(onSelectedDestinationChange[19]).t.V6nAfF) };
    tmp26Result = getRowIsUnavailable(onSelectedDestinationChange[18]);
    intl = tmp10(tmp11[19]).intl;
    obj5 = obj6;
  }
  let tmp35Result = !disableGradient;
  const tmp37 = updateSearchText;
  const tmp38 = results;
  if (!disableGradient) {
    tmp35Result = tmp35(tmp26(tmp11[20]), { absolute: true });
  }
  const items11 = [tmp35Result, , ];
  if (flag2) {
    let tmp35Result2;
    if (!someResult) {
      tmp35Result2 = null;
    }
    const obj8 = { children: items11 };
    items11[1] = tmp35Result2;
    items11[2] = tmp31Result;
    return tmp37(tmp38, obj8);
  }
  const obj9 = { style: tmp6.searchBarContainer, children: tmp35(SearchField, obj10) };
  obj10 = { ref, size: "md", onChange, autoFocus: flag, accessibilityLabel: intl2.string(disabledDestinations(onSelectedDestinationChange[19]).t.CaEER6) };
  SearchField = tmp10(tmp11[21]).SearchField;
  const tmp41 = disableSelection;
  if (flag) {
    flag = someResult;
  }
  intl2 = tmp10(tmp11[19]).intl;
  tmp35Result2 = tmp35(tmp41, obj9);
};
