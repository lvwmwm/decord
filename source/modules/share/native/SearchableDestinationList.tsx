// Module ID: 9915
// Function ID: 76705
// Name: SearchableDestinationList
// Dependencies: [57, 31, 27, 653, 8857, 33, 4130, 689, 9916, 5582, 7088, 7093, 6903, 1327, 8871, 9921, 9923, 8864, 9924, 1212, 4662, 5772, 2]
// Exports: default

// Module 9915 (SearchableDestinationList)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import { UserRowModes } from "UserRowModes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ View: closure_5, Keyboard: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.searchBarContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.noResults = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/share/native/SearchableDestinationList.tsx");

export default function SearchableDestinationList(originDestination) {
  let c13;
  let defaultNoResultsFound;
  let disableGradient;
  let disableSelection;
  let disableStickySections;
  let disabledDestinations;
  let initialSelectedDestinations;
  let tmp13;
  ({ initialSelectedDestinations, disabledDestinations } = originDestination);
  const getRowIsUnavailable = originDestination.getRowIsUnavailable;
  const onSelectedDestinationChange = originDestination.onSelectedDestinationChange;
  const onSearchTextChange = originDestination.onSearchTextChange;
  let NONE = originDestination.rowMode;
  if (NONE === undefined) {
    NONE = first.NONE;
  }
  let PX_8 = originDestination.insetStart;
  if (PX_8 === undefined) {
    PX_8 = getRowIsUnavailable(onSelectedDestinationChange[7]).space.PX_8;
  }
  let PX_12 = originDestination.insetEnd;
  if (PX_12 === undefined) {
    PX_12 = getRowIsUnavailable(onSelectedDestinationChange[7]).space.PX_12;
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
  let ref;
  first = undefined;
  let callback;
  let results;
  let updateSearchText;
  let _createForOfIteratorHelperLoose;
  c13 = undefined;
  let closure_14;
  callback = undefined;
  let memo1;
  let memo2;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let ref1;
  let c23;
  let scaledTextLineHeight;
  ({ disableGradient, disableStickySections } = originDestination);
  const tmp6 = _createForOfIteratorHelperLoose();
  ref = NONE.useRef(null);
  if (null == initialSelectedDestinations) {
    initialSelectedDestinations = [];
  }
  const tmp9 = onSearchTextChange(NONE.useState(initialSelectedDestinations), 2);
  first = tmp9[0];
  callback = tmp9[1];
  let obj = disabledDestinations(onSelectedDestinationChange[8]);
  const shareSearchResults = obj.useShareSearchResults({ selectedDestinations: first, originDestination: originDestination.originDestination, includeMissingDMs: true });
  results = shareSearchResults.results;
  updateSearchText = shareSearchResults.updateSearchText;
  _createForOfIteratorHelperLoose = NONE.useRef("");
  [tmp13, c13] = onSearchTextChange(NONE.useState(false), 2);
  closure_14 = NONE.useRef(null);
  const effect = NONE.useEffect(() => () => {
    const current = outer1_14.current;
    if (null != current) {
      current.cancel();
    }
  }, []);
  let items = [onSearchTextChange, updateSearchText];
  callback = NONE.useCallback((current) => {
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
        const current = outer1_22.current;
        if (null != current) {
          current.scrollToTop(false);
        }
      });
      const obj = disabledDestinations(onSelectedDestinationChange[9]);
    }
  }, items);
  let items1 = [first, onSelectedDestinationChange, callback];
  const effect1 = NONE.useEffect(() => {
    onSelectedDestinationChange(first);
    const timerId = setTimeout(() => {
      disableLongPress.dismiss();
    }, 0);
    const timerId1 = setTimeout(() => {
      outer1_15("", true);
    }, 50);
  }, items1);
  const items2 = [results.length];
  const memo = NONE.useMemo(() => {
    const items = [results.length];
    return items;
  }, items2);
  const items3 = [disabledDestinations];
  const callback1 = NONE.useCallback(() => ({ type: "section", props: { hideTitle: true } }), []);
  memo1 = NONE.useMemo(() => {
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
  memo2 = NONE.useMemo(() => {
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
  callback2 = NONE.useCallback((arg0) => {
    let closure_0 = arg0;
    callback((arr) => {
      const findIndexResult = arr.findIndex((id) => id.id === outer1_0.id);
      if (-1 === findIndexResult) {
        if (outer1_5) {
          return arr;
        } else {
          const items = [closure_0];
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
  callback3 = NONE.useCallback((id) => callback2({ type: "user", id: id.id }), items6);
  const items7 = [callback2];
  callback4 = NONE.useCallback((id) => callback2({ type: "channel", id: id.id }), items7);
  const items8 = [results, getRowIsUnavailable, memo2, memo1, disableSelection, disableLongPress, NONE, callback3, callback4];
  callback5 = NONE.useCallback((arg0, arg1) => {
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
  ref1 = NONE.useRef(null);
  const tmp25 = getRowIsUnavailable(onSelectedDestinationChange[14])();
  c23 = tmp25;
  let obj2 = disabledDestinations(onSelectedDestinationChange[15]);
  scaledTextLineHeight = obj2.useScaledTextLineHeight("text-xs/medium");
  const items9 = [callback5, tmp25, scaledTextLineHeight];
  const callback6 = NONE.useCallback((arg0, arg1) => {
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
          let tmp4 = getRowIsUnavailable(onSelectedDestinationChange[16])(c23 + (subLabelLineClamp - 1) * scaledTextLineHeight);
        }
        return tmp4;
      }
      tmp4 = c23;
    }
    subLabelLineClamp = element.props.subLabelLineClamp;
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
    let tmp29Result = tmp29(disabledDestinations(onSelectedDestinationChange[17]).UsersFastList, obj);
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
    let obj1 = { style: tmp6.noResults };
    obj2 = {};
    const intl = disabledDestinations(onSelectedDestinationChange[19]).intl;
    obj2.title = intl.string(disabledDestinations(onSelectedDestinationChange[19]).t.V6nAfF);
    obj1.children = callback(getRowIsUnavailable(onSelectedDestinationChange[18]), obj2);
    obj = obj1;
    const tmp34 = getRowIsUnavailable(onSelectedDestinationChange[18]);
  }
  let obj3 = {};
  let tmp42 = !disableGradient;
  if (tmp42) {
    let obj4 = { absolute: true };
    tmp42 = callback(getRowIsUnavailable(onSelectedDestinationChange[20]), obj4);
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
  let obj5 = { style: tmp6.searchBarContainer };
  let obj6 = { ref, size: "md", onChange: callback };
  if (flag) {
    flag = someResult;
  }
  obj6.autoFocus = flag;
  const intl2 = disabledDestinations(onSelectedDestinationChange[19]).intl;
  obj6.accessibilityLabel = intl2.string(disabledDestinations(onSelectedDestinationChange[19]).t.CaEER6);
  obj5.children = callback(disabledDestinations(onSelectedDestinationChange[21]).SearchField, obj6);
  tmp47Result = tmp47(disableSelection, obj5);
};
