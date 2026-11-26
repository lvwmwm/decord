// Module ID: 18040
// Function ID: 18041
// Name: WaterwheelsInterestPickerModal
// Dependencies: [32, 19, 17, 8924, 1071, 21, 5043, 18041, 18042, 8921, 18039, 8923, 6130, 18035, 1256, 18043, 18044, 1112, 2655, 2]

// Module 18040 (WaterwheelsInterestPickerModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8923 */;
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation" /* 18035 */;
import InterestPickerActionCreators from "InterestPickerActionCreators" /* 18039 */;
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 18042 */;
import InterestPickerCompletion from "InterestPickerCompletion" /* 18043 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 8924 */;
import Constants from "Constants" /* 1071 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let set;

let ModalAnimation;
let metroImportDefault;
class WaterwheelsInterestPickerModal {
  constructor(edit) {
    let intl;
    let intl2;
    let obj5;
    let obj6;
    let tmp17;
    let flag = edit.edit;
    if (flag === undefined) {
      flag = false;
    }
    let first;
    let first1;
    let memo;
    let obj3;
    function completePicker(arg0, arg1) {
      if (!picks.current) {
        const obj = InterestPickerCompletion;
        const interestPickerCompletion = obj.getInterestPickerCompletion(arg0, arg1);
        picks = interestPickerCompletion.picks;
        if (!flag) {
          const obj2 = { max_row_seen: ref2.current, pick_count: tmp6, pick_ids: tmp7, duration_ms: Math.max(0, Date.now() - ref.current) };
          const track = AnalyticsUtilsDefault.track;
          AnalyticsUtilsDefault;
          const tmp12 = arg1 ? metroImportDefault.WATERWHEELS_INTEREST_PICKER_SKIP : metroImportDefault.WATERWHEELS_INTEREST_PICKER_CONTINUE;
          const merged = Object.assign(obj3);
          const _Math = Math;
          const _Date = Date;
          track(tmp12, obj2);
        }
        callback(picks);
      }
    }
    let tmp2 = flag;
    let tmp = completePicker();
    let obj = flag(first[7]);
    const interestPickerGameList = obj.useInterestPickerGameList(obj3);
    let num = 1;
    first = first1(memo.useState(() => picks.getPicks()), 1)[0];
    first1 = first1(memo.useState(() => flag ? first : []), 1)[0];
    let items = [interestPickerGameList, flag, first1];
    memo = memo.useMemo(function() {
      if (null == interestPickerGameList) {
        return null;
      } else {
        const obj = InterestPickerCatalogs;
        const interestPickerCatalog = obj.getInterestPickerCatalog(tmp2);
        let tmp14 = null;
        if (null != interestPickerCatalog) {
          let fromResult = interestPickerCatalog;
          if (flag) {
            const _Array = Array;
            const _Set = Set;
            const items = [];
            HermesBuiltin.arraySpread(items, interestPickerCatalog, HermesBuiltin.arraySpread(items, first1, 0));
            const self = this;
            const self2 = this;
            set = new Set(items);
            fromResult = from(set);
          }
          tmp14 = fromResult;
        }
        return tmp14;
      }
    }, items);
    let obj2 = flag(first[9]);
    const waterwheelsDiscoverEnabled = obj2.useWaterwheelsDiscoverEnabled(obj3);
    let picks = memo.useRef(false);
    const ref = memo.useRef(0);
    const ref2 = memo.useRef(0);
    const items1 = [first];
    const callback = memo.useCallback(function(items) {
      if (!picks.current) {
        tmp.current = true;
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(first);
        const _Set2 = Set;
        const self4 = this;
        const self3 = this;
        let someResult = set.size !== new Set(items).size;
        const set1 = new Set(items);
        if (!someResult) {
          items = [];
          HermesBuiltin.arraySpread(items, tmp9, 0);
          someResult = items.some((item) => !set.has(item));
        }
        const obj = InterestPickerActionCreators;
        const result = obj.setInterestPickerPicks(items);
        const obj2 = InterestPickerActionCreators;
        const result1 = obj2.markInterestPickerSeen();
        const obj4 = { isDiscoverPickerCommit: true, clearDiscoverSnapshot: someResult };
        obj3 = ICYMIActionCreatorsDefault;
        const dehydrated = obj3.fetchDehydrated(obj4);
        const obj5 = ModalActionCreatorsDefault;
        obj5.popWithKey(c9);
        const obj6 = WaterwheelsDiscoverNavigation;
        const waterwheelsDiscover = obj6.selectWaterwheelsDiscover();
      }
    }, items1);
    const items2 = [interestPickerGameList, waterwheelsDiscoverEnabled, flag];
    const effect = memo.useEffect(() => {
      const tmp = !flag && null != interestPickerGameList && waterwheelsDiscoverEnabled;
      if (tmp) {
        const _Date = Date;
        ref.current = Date.now();
        const obj = { arm: interestPickerGameList, catalog_version: InterestPickerCatalogs.INTEREST_PICKER_CATALOG_VERSION };
        const track = AnalyticsUtilsDefault.track;
        const WATERWHEELS_INTEREST_PICKER_EXPOSURE = metroImportDefault.WATERWHEELS_INTEREST_PICKER_EXPOSURE;
        AnalyticsUtilsDefault;
        track(WATERWHEELS_INTEREST_PICKER_EXPOSURE, obj);
      }
    }, items2);
    const effect1 = memo.useEffect(() => {
      let obj = flag(first[10]);
      const result = obj.setInterestPickerOpen(true);
      return () => {
        const obj = flag(first[10]);
        return obj.setInterestPickerOpen(false);
      };
    }, []);
    const items3 = [waterwheelsDiscoverEnabled];
    const effect2 = memo.useEffect(() => {
      const current = waterwheelsDiscoverEnabled || picks.current;
      if (!current) {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(c9);
      }
    }, items3);
    const items4 = [memo, callback, waterwheelsDiscoverEnabled, flag];
    const effect3 = memo.useEffect(() => {
      const tmp = null == memo && waterwheelsDiscoverEnabled;
      if (tmp) {
        const tmp2 = flag;
        if (tmp2) {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(c9);
        } else {
          callback([]);
        }
      }
    }, items4);
    if (null != memo) {
      if (null != interestPickerGameList) {
        if (waterwheelsDiscoverEnabled) {
          obj3 = { arm: interestPickerGameList, catalog_version: tmp2(tmp3[8]).INTEREST_PICKER_CATALOG_VERSION };
          let tmp14 = ref2;
          let obj4 = { style: tmp.screen, children: tmp14(tmp17, obj5) };
          obj5 = {
            catalog: memo,
            performanceContext: obj6,
            title: intl.string(interestPickerGameList(tmp3[18])["5MUKTF"]),
            subtitle: intl2.string(interestPickerGameList(tmp3[18])["z/57xV"]),
            minSelection: num,
            initialSelection: first1,
            allowEmptySelection: flag,
            onRowSeen(arg0) {
                    ref2.current = Math.max(ref2.current, arg0);
                  },
            onGameToggle(game_id, grid_position, selected) {
                    const tmp = flag;
                    if (!tmp) {
                      const obj = { game_id, grid_position, selected };
                      const track = AnalyticsUtilsDefault.track;
                      const WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE = metroImportDefault.WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE;
                      AnalyticsUtilsDefault;
                      const merged = Object.assign(obj3);
                      track(WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE, obj);
                    }
                  },
            onSearch(query_length, result_count) {
                    const tmp = flag;
                    if (!tmp) {
                      const obj = { query_length, result_count, no_results: 0 === result_count };
                      const track = AnalyticsUtilsDefault.track;
                      const WATERWHEELS_INTEREST_PICKER_SEARCH = metroImportDefault.WATERWHEELS_INTEREST_PICKER_SEARCH;
                      AnalyticsUtilsDefault;
                      const merged = Object.assign(obj3);
                      track(WATERWHEELS_INTEREST_PICKER_SEARCH, obj);
                    }
                  },
            onContinue(arg0) {
                    completePicker(arg0, false);
                  },
            onSkip(arg0) {
                    const tmp = flag;
                    if (tmp) {
                      const obj = ModalActionCreatorsDefault;
                      obj.popWithKey(c9);
                    } else {
                      completePicker(arg0, true);
                    }
                  }
          };
          obj6 = { surface: "modal" };
          tmp17 = interestPickerGameList(first[16]);
          let merged = Object.assign(obj3);
          intl = tmp2(tmp3[17]).intl;
          intl2 = tmp2(tmp3[17]).intl;
          const tmp15 = waterwheelsDiscoverEnabled;
          if (flag) {
            num = 0;
          }
          return tmp14(tmp15, obj4);
        }
      }
    }
    return null;
  }
}
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, ModalAnimation } = Constants);
const jsx = Fragment.jsx;
let c9 = "waterwheels-interest-picker-modal";
const WaterwheelsInterestPickerModal_str = "WaterwheelsInterestPickerModal";
let closure_11 = createStyles.createStyles({ screen: { flex: 1 } });
WaterwheelsInterestPickerModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/WaterwheelsInterestPickerModal.tsx");

export default WaterwheelsInterestPickerModal;
export const WATERWHEELS_INTEREST_PICKER_MODAL_KEY = "waterwheels-interest-picker-modal";
