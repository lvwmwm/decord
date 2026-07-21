// Module ID: 9875
// Function ID: 76457
// Name: SearchableDestinationList
// Dependencies: []
// Exports: default

// Module 9875 (SearchableDestinationList)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Keyboard: closure_6 } = arg1(dependencyMap[2]));
const NOOP = arg1(dependencyMap[3]).NOOP;
const UserRowModes = arg1(dependencyMap[4]).UserRowModes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.searchBarContainer = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.noResults = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_12 = obj.createStyles(obj);
const obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/share/native/SearchableDestinationList.tsx");

export default function SearchableDestinationList(originDestination) {
  let defaultNoResultsFound;
  let disableGradient;
  let disableSelection;
  let disableStickySections;
  let disabledDestinations;
  let initialSelectedDestinations;
  let tmp13;
  ({ initialSelectedDestinations, disabledDestinations } = originDestination);
  const arg1 = disabledDestinations;
  const getRowIsUnavailable = originDestination.getRowIsUnavailable;
  const importDefault = getRowIsUnavailable;
  const onSelectedDestinationChange = originDestination.onSelectedDestinationChange;
  const dependencyMap = onSelectedDestinationChange;
  const onSearchTextChange = originDestination.onSearchTextChange;
  let callback = onSearchTextChange;
  let NONE = originDestination.rowMode;
  if (NONE === undefined) {
    NONE = UserRowModes.NONE;
  }
  const React = NONE;
  let PX_8 = originDestination.insetStart;
  if (PX_8 === undefined) {
    PX_8 = importDefault(dependencyMap[7]).space.PX_8;
  }
  let PX_12 = originDestination.insetEnd;
  if (PX_12 === undefined) {
    PX_12 = importDefault(dependencyMap[7]).space.PX_12;
  }
  let flag = originDestination.autoFocusSearch;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = originDestination.hideSearchOnDefaultNoResults;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ defaultNoResultsFound, disableSelection } = originDestination);
  const disableLongPress = originDestination.disableLongPress;
  let NOOP;
  let UserRowModes;
  let callback2;
  let results;
  let updateSearchText;
  let callback3;
  let closure_13;
  let closure_14;
  callback = undefined;
  let memo1;
  let memo2;
  callback2 = undefined;
  callback3 = undefined;
  let callback4;
  let callback5;
  let ref1;
  let tmp25;
  let scaledTextLineHeight;
  ({ disableGradient, disableStickySections } = originDestination);
  const tmp6 = callback3();
  const ref = React.useRef(null);
  NOOP = ref;
  if (null == initialSelectedDestinations) {
    initialSelectedDestinations = [];
  }
  const tmp9 = callback(React.useState(initialSelectedDestinations), 2);
  const first = tmp9[0];
  UserRowModes = first;
  callback2 = tmp9[1];
  let obj = arg1(dependencyMap[8]);
  const shareSearchResults = obj.useShareSearchResults({ selectedDestinations: first, originDestination: originDestination.originDestination, includeMissingDMs: true });
  results = shareSearchResults.results;
  updateSearchText = shareSearchResults.updateSearchText;
  callback3 = React.useRef("");
  [tmp13, closure_13] = callback(React.useState(false), 2);
  closure_14 = React.useRef(null);
  const effect = React.useEffect(() => () => {
    const current = ref.current;
    if (null != current) {
      current.cancel();
    }
  }, []);
  const items = [onSearchTextChange, updateSearchText];
  callback = React.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (current !== ref.current) {
      ref.current = current;
      if (flag) {
        current = ref.current;
        if (null != current) {
          current.setText(current);
        }
      }
      updateSearchText(current);
      if (null != onSearchTextChange) {
        onSearchTextChange(current);
      }
      _undefined(current.trim().length > 0);
      closure_14.current = disabledDestinations(onSelectedDestinationChange[9]).runAfterInteractions(() => {
        const current = ref.current;
        if (null != current) {
          current.scrollToTop(false);
        }
      });
      const obj = disabledDestinations(onSelectedDestinationChange[9]);
    }
  }, items);
  const items1 = [first, onSelectedDestinationChange, callback];
  const effect1 = React.useEffect(() => {
    onSelectedDestinationChange(first);
    const timerId = setTimeout(() => {
      closure_6.dismiss();
    }, 0);
    const timerId1 = setTimeout(() => {
      callback("", true);
    }, 50);
  }, items1);
  const items2 = [results.length];
  const memo = React.useMemo(() => {
    const items = [results.length];
    return items;
  }, items2);
  const items3 = [disabledDestinations];
  const callback1 = React.useCallback(() => ({ type: "section", props: { hideTitle: true } }), []);
  memo1 = React.useMemo(() => {
    let mapped;
    if (null != disabledDestinations) {
      mapped = disabledDestinations.map(disabledDestinations(onSelectedDestinationChange[10]).destinationKey);
    }
    if (null == mapped) {
      mapped = [];
    }
    return mapped;
  }, items3);
  const items4 = [first];
  memo2 = React.useMemo(() => {
    let mapped;
    if (null != first) {
      mapped = first.map(disabledDestinations(onSelectedDestinationChange[10]).destinationKey);
    }
    if (null == mapped) {
      mapped = [];
    }
    return mapped;
  }, items4);
  const items5 = [disableSelection];
  callback2 = React.useCallback((arg0) => {
    const disabledDestinations = arg0;
    callback((arr) => {
      const findIndexResult = arr.findIndex((id) => id.id === id.id);
      if (-1 === findIndexResult) {
        if (closure_5) {
          return arr;
        } else {
          const items = [arr];
          HermesBuiltin.arraySpread(arr, 1);
          let items1 = items;
        }
      } else {
        items1 = [];
        HermesBuiltin.arraySpread(arr, 0);
        items1.splice(findIndexResult, 1);
      }
      return items1;
    });
  }, items5);
  const items6 = [callback2];
  callback3 = React.useCallback((id) => callback2({ type: "user", id: id.id }), items6);
  const items7 = [callback2];
  callback4 = React.useCallback((id) => callback2({ type: "channel", id: id.id }), items7);
  const items8 = [results, getRowIsUnavailable, memo2, memo1, disableSelection, disableLongPress, NONE, callback3, callback4];
  callback5 = React.useCallback((arg0, arg1) => {
    let record;
    let type;
    ({ type, record } = results[arg1]);
    let num = 1;
    const diff = results.length - 1;
    if (type !== disabledDestinations(onSelectedDestinationChange[11]).AutocompleterResultTypes.HEADER) {
      if (type === disabledDestinations(onSelectedDestinationChange[11]).AutocompleterResultTypes.USER) {
        let obj2 = disabledDestinations(onSelectedDestinationChange[10]);
        let obj = { type: "user", id: record.id };
        let destinationKeyResult = obj2.destinationKey(obj);
      } else {
        obj = disabledDestinations(onSelectedDestinationChange[10]);
        obj = { type: "channel", id: record.id };
        destinationKeyResult = obj.destinationKey(obj);
      }
      let tmp11;
      if (null != getRowIsUnavailable) {
        tmp11 = getRowIsUnavailable(record);
      }
      const hasItem = memo2.includes(destinationKeyResult);
      const obj1 = {};
      let tmp17 = disableSelection;
      const hasItem1 = memo1.includes(destinationKeyResult);
      if (disableSelection) {
        tmp17 = !hasItem;
      }
      if (!tmp17) {
        tmp17 = hasItem1;
      }
      if (!tmp17) {
        tmp17 = null != tmp11;
      }
      obj1.disabled = tmp17;
      obj1.selected = hasItem;
      if (null != tmp11) {
        const NONE = first.NONE;
      }
      obj1.mode = NONE;
      let label;
      if (null != tmp11) {
        label = tmp11.label;
      }
      obj1.subLabel = label;
      let tmp20;
      if (null != tmp11) {
        const lineClamp = tmp11.lineClamp;
        if (null != lineClamp) {
          num = lineClamp;
        }
        tmp20 = num;
      }
      obj1.subLabelLineClamp = tmp20;
      obj1.start = 0 === arg1;
      obj1.end = arg1 === diff;
      if (disabledDestinations(onSelectedDestinationChange[11]).AutocompleterResultTypes.USER === type) {
        obj2 = { type: "user" };
        const obj3 = {};
        const merged = Object.assign(obj1);
        obj3["user"] = record;
        obj3["type"] = disabledDestinations(onSelectedDestinationChange[12]).getRelationshipType(record.id);
        obj3["onPress"] = callback3;
        let tmp54;
        if (disableLongPress) {
          const obj4 = { onLongPress: ref };
          tmp54 = obj4;
        }
        const merged1 = Object.assign(tmp54);
        obj2.props = obj3;
        return obj2;
      } else if (disabledDestinations(onSelectedDestinationChange[11]).AutocompleterResultTypes.GROUP_DM === type) {
        let obj5 = { type: "gdm" };
        const obj6 = {};
        const merged2 = Object.assign(obj1);
        obj6["channel"] = record;
        obj6["onPress"] = callback4;
        let tmp42;
        if (disableLongPress) {
          const obj7 = { onLongPress: ref };
          tmp42 = obj7;
        }
        const merged3 = Object.assign(tmp42);
        obj5.props = obj6;
        return obj5;
      } else {
        if (disabledDestinations(onSelectedDestinationChange[11]).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
          if (disabledDestinations(onSelectedDestinationChange[11]).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
            obj5 = disabledDestinations(onSelectedDestinationChange[13]);
            return obj5.assertNever(type);
          }
        }
        const obj8 = { type: "channel" };
        const obj9 = {};
        const merged4 = Object.assign(obj1);
        obj9["channel"] = record;
        obj9["onPress"] = callback4;
        let tmp32;
        if (disableLongPress) {
          const obj10 = { onLongPress: ref };
          tmp32 = obj10;
        }
        const merged5 = Object.assign(tmp32);
        obj8.props = obj9;
        return obj8;
      }
    }
  }, items8);
  ref1 = React.useRef(null);
  tmp25 = importDefault(dependencyMap[14])();
  let obj2 = arg1(dependencyMap[15]);
  scaledTextLineHeight = obj2.useScaledTextLineHeight("text-xs/medium");
  const items9 = [callback5, tmp25, scaledTextLineHeight];
  const callback6 = React.useCallback((arg0, arg1) => {
    const element = callback5(arg0, arg1);
    let type;
    if (null != element) {
      type = element.type;
    }
    if ("user" !== type) {
      let type1;
      if (null != element) {
        type1 = element.type;
      }
      if ("gdm" !== type1) {
        let type2;
        if (null != element) {
          type2 = element.type;
        }
      }
      if (null != subLabelLineClamp) {
        if (subLabelLineClamp > 1) {
          let tmp4 = getRowIsUnavailable(onSelectedDestinationChange[16])(tmp25 + (subLabelLineClamp - 1) * scaledTextLineHeight);
        }
        return tmp4;
      }
      tmp4 = tmp25;
    }
    const subLabelLineClamp = element.props.subLabelLineClamp;
  }, items9);
  const someResult = memo.some((arg0) => arg0 > 0);
  if (someResult) {
    obj = { ref: ref1, sections: memo, getItemProps: callback5, getSectionProps: callback1 };
    let tmp39;
    if (null != getRowIsUnavailable) {
      tmp39 = callback6;
    }
    obj.getItemSize = tmp39;
    obj.insetStart = PX_8;
    obj.insetEnd = PX_12;
    obj.disableStickySections = disableStickySections;
    let tmp29Result = tmp29(arg1(dependencyMap[17]).UsersFastList, obj);
  } else {
    if (!tmp13) {
      if (null != defaultNoResultsFound) {
        obj = {};
        const items10 = [tmp6.noResults];
        obj.style = items10;
        obj.children = defaultNoResultsFound;
      }
      tmp29Result = tmp29(tmp30, obj);
    }
    const obj1 = { style: tmp6.noResults };
    obj2 = {};
    const intl = arg1(dependencyMap[19]).intl;
    obj2.title = intl.string(arg1(dependencyMap[19]).t.V6nAfF);
    obj1.children = callback2(importDefault(dependencyMap[18]), obj2);
    obj = obj1;
    const tmp34 = importDefault(dependencyMap[18]);
  }
  const obj3 = {};
  let tmp42 = !disableGradient;
  if (tmp42) {
    const obj4 = { absolute: true };
    tmp42 = callback2(importDefault(dependencyMap[20]), obj4);
  }
  const items11 = [tmp42, , ];
  if (flag2) {
    if (!someResult) {
      let tmp47Result = null;
    }
    items11[1] = tmp47Result;
    items11[2] = tmp29Result;
    obj3.children = items11;
    return updateSearchText(results, obj3);
  }
  const obj5 = { style: tmp6.searchBarContainer };
  const obj6 = { ref, size: "md", onChange: callback };
  if (flag) {
    flag = someResult;
  }
  obj6.autoFocus = flag;
  const intl2 = arg1(dependencyMap[19]).intl;
  obj6.accessibilityLabel = intl2.string(arg1(dependencyMap[19]).t.CaEER6);
  obj5.children = callback2(arg1(dependencyMap[21]).SearchField, obj6);
  tmp47Result = tmp47(disableSelection, obj5);
};
