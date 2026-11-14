// Module ID: 19028
// Function ID: 19029
// Name: WaterwheelsInterestPickerModal
// Dependencies: [32, 19, 17, 10218, 1072, 21, 5306, 19029, 19030, 10215, 19027, 10217, 6848, 19022, 1256, 19031, 19032, 1113, 2569, 2]

// Module 19028 (WaterwheelsInterestPickerModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 10217 */;
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation" /* 19022 */;
import InterestPickerActionCreators from "InterestPickerActionCreators" /* 19027 */;
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 19030 */;
import InterestPickerCompletion from "InterestPickerCompletion" /* 19031 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10218 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5306 */;
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
    let tmp16;
    let flag = edit.edit;
    if (flag === undefined) {
      flag = false;
    }
    let initialSelection;
    let memo;
    let waterwheelsDiscoverEnabled;
    let obj3;
    function completePicker(arg0, arg1) {
      if (!ref.current) {
        const obj = InterestPickerCompletion;
        const interestPickerCompletion = obj.getInterestPickerCompletion(arg0, arg1);
        const picks = interestPickerCompletion.picks;
        if (!flag) {
          const obj2 = { max_row_seen: ref3.current, pick_count: tmp6, pick_ids: tmp7, duration_ms: Math.max(0, Date.now() - ref2.current) };
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
    let tmp = closure_11();
    let obj = flag(initialSelection[7]);
    const interestPickerGameList = obj.useInterestPickerGameList(completePicker);
    let num = 1;
    initialSelection = memo(waterwheelsDiscoverEnabled.useState(() => {
      let picks;
      const tmp = flag;
      if (tmp) {
        picks = InterestPickerSessionStore.getPicks();
      } else {
        picks = [];
      }
      return picks;
    }), 1)[0];
    let items = [interestPickerGameList, flag, initialSelection];
    memo = waterwheelsDiscoverEnabled.useMemo(function() {
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
            HermesBuiltin.arraySpread(items, interestPickerCatalog, HermesBuiltin.arraySpread(items, first, 0));
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
    let obj2 = flag(initialSelection[9]);
    waterwheelsDiscoverEnabled = obj2.useWaterwheelsDiscoverEnabled(completePicker);
    const ref = waterwheelsDiscoverEnabled.useRef(false);
    const ref2 = waterwheelsDiscoverEnabled.useRef(0);
    const ref3 = waterwheelsDiscoverEnabled.useRef(0);
    const callback = waterwheelsDiscoverEnabled.useCallback((gameIds) => {
      if (!ref.current) {
        tmp.current = true;
        const obj = InterestPickerActionCreators;
        const result = obj.setInterestPickerPicks(gameIds);
        const obj2 = InterestPickerActionCreators;
        const result1 = obj2.markInterestPickerSeen();
        obj3 = ICYMIActionCreatorsDefault;
        const dehydrated = obj3.fetchDehydrated({ isDiscoverPickerCommit: true });
        const obj4 = ModalActionCreatorsDefault;
        obj4.popWithKey(c9);
        const obj5 = WaterwheelsDiscoverNavigation;
        const waterwheelsDiscover = obj5.selectWaterwheelsDiscover();
      }
    }, []);
    const items1 = [interestPickerGameList, waterwheelsDiscoverEnabled, flag];
    const effect = waterwheelsDiscoverEnabled.useEffect(() => {
      const tmp = !flag && null != interestPickerGameList && waterwheelsDiscoverEnabled;
      if (tmp) {
        const _Date = Date;
        ref2.current = Date.now();
        const obj = { arm: interestPickerGameList, catalog_version: InterestPickerCatalogs.INTEREST_PICKER_CATALOG_VERSION };
        const track = AnalyticsUtilsDefault.track;
        const WATERWHEELS_INTEREST_PICKER_EXPOSURE = metroImportDefault.WATERWHEELS_INTEREST_PICKER_EXPOSURE;
        AnalyticsUtilsDefault;
        track(WATERWHEELS_INTEREST_PICKER_EXPOSURE, obj);
      }
    }, items1);
    const effect1 = waterwheelsDiscoverEnabled.useEffect(() => {
      let obj = flag(first[10]);
      const result = obj.setInterestPickerOpen(true);
      return () => {
        const obj = flag(initialSelection[10]);
        return obj.setInterestPickerOpen(false);
      };
    }, []);
    const items2 = [waterwheelsDiscoverEnabled];
    const effect2 = waterwheelsDiscoverEnabled.useEffect(() => {
      const current = waterwheelsDiscoverEnabled || ref.current;
      if (!current) {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(c9);
      }
    }, items2);
    const items3 = [memo, callback, waterwheelsDiscoverEnabled, flag];
    const effect3 = waterwheelsDiscoverEnabled.useEffect(() => {
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
    }, items3);
    if (null != memo) {
      if (null != interestPickerGameList) {
        if (waterwheelsDiscoverEnabled) {
          obj3 = { arm: interestPickerGameList, catalog_version: tmp2(tmp3[8]).INTEREST_PICKER_CATALOG_VERSION };
          let obj4 = { style: tmp.screen, children: tmp13(tmp16, obj5) };
          let tmp14 = ref;
          obj5 = {
            catalog: memo,
            performanceContext: obj6,
            title: intl.string(interestPickerGameList(tmp3[18])["5MUKTF"]),
            subtitle: intl2.string(interestPickerGameList(tmp3[18])["z/57xV"]),
            minSelection: num,
            initialSelection,
            allowEmptySelection: flag,
            onRowSeen(arg0) {
                    ref3.current = Math.max(ref3.current, arg0);
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
          tmp16 = interestPickerGameList(initialSelection[16]);
          let merged = Object.assign(obj3);
          intl = tmp2(tmp3[17]).intl;
          intl2 = tmp2(tmp3[17]).intl;
          if (flag) {
            num = 0;
          }
          return callback(tmp14, obj4);
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
const unpackModuleId = createStyles.createStyles({ screen: { flex: 1 } });
WaterwheelsInterestPickerModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/WaterwheelsInterestPickerModal.tsx");

export default WaterwheelsInterestPickerModal;
export const WATERWHEELS_INTEREST_PICKER_MODAL_KEY = "waterwheels-interest-picker-modal";
