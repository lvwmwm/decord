// Module ID: 18974
// Function ID: 18975
// Name: WaterwheelsInterestPickerModal
// Dependencies: [19, 17, 1072, 21, 5243, 18975, 18976, 10146, 18973, 10148, 6785, 18887, 1252, 18977, 18978, 1113, 2553, 2]

// Module 18974 (WaterwheelsInterestPickerModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 10148 */;
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation" /* 18887 */;
import InterestPickerActionCreators from "InterestPickerActionCreators" /* 18973 */;
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 18976 */;
import InterestPickerCompletion from "InterestPickerCompletion" /* 18977 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let ModalAnimation;
let hasOwnProperty;
class WaterwheelsInterestPickerModal {
  constructor() {
    let interestPickerGameList;
    let intl;
    let intl2;
    let obj5;
    let ref;
    let tmp15;
    let waterwheelsDiscoverEnabled;
    function completePicker(arg0, arg1) {
      let pick_count;
      let pick_ids;
      let picks;
      if (!ref.current) {
        const obj = InterestPickerCompletion;
        const interestPickerCompletion = obj.getInterestPickerCompletion(arg0, arg1);
        ({ picks, pick_count, pick_ids } = interestPickerCompletion);
        const obj2 = { max_row_seen: ref3.current, pick_count, pick_ids, duration_ms: Math.max(0, Date.now() - ref2.current) };
        const track = AnalyticsUtilsDefault.track;
        AnalyticsUtilsDefault;
        const tmp9 = arg1 ? hasOwnProperty.WATERWHEELS_INTEREST_PICKER_SKIP : hasOwnProperty.WATERWHEELS_INTEREST_PICKER_CONTINUE;
        const merged = Object.assign(obj3);
        const _Math = Math;
        const _Date = Date;
        track(tmp9, obj2);
        callback(picks);
      }
    }
    let tmp2 = interestPickerGameList;
    let tmp = closure_9();
    let obj = interestPickerGameList(waterwheelsDiscoverEnabled[5]);
    interestPickerGameList = obj.useInterestPickerGameList(completePicker);
    const items = [interestPickerGameList];
    const memo = react.useMemo(() => {
      let interestPickerCatalog = null;
      if (null != interestPickerGameList) {
        const obj = InterestPickerCatalogs;
        interestPickerCatalog = obj.getInterestPickerCatalog(tmp);
      }
      return interestPickerCatalog;
    }, items);
    let obj2 = interestPickerGameList(waterwheelsDiscoverEnabled[7]);
    waterwheelsDiscoverEnabled = obj2.useWaterwheelsDiscoverEnabled(completePicker);
    react = react.useRef(false);
    const ref2 = react.useRef(0);
    const ref3 = react.useRef(0);
    const callback = react.useCallback((gameIds) => {
      if (!ref.current) {
        tmp.current = true;
        const obj = InterestPickerActionCreators;
        const result = obj.setInterestPickerPicks(gameIds);
        const obj2 = InterestPickerActionCreators;
        const result1 = obj2.markInterestPickerSeen();
        obj3 = ICYMIActionCreatorsDefault;
        const dehydrated = obj3.fetchDehydrated({ isDiscoverPickerCommit: true });
        const obj4 = ModalActionCreatorsDefault;
        obj4.popWithKey(c7);
        const obj5 = WaterwheelsDiscoverNavigation;
        const waterwheelsDiscover = obj5.selectWaterwheelsDiscover();
      }
    }, []);
    const items1 = [interestPickerGameList, waterwheelsDiscoverEnabled];
    const effect = react.useEffect(() => {
      let tmp2 = null != interestPickerGameList;
      const tmp = interestPickerGameList;
      if (tmp2) {
        tmp2 = waterwheelsDiscoverEnabled;
      }
      if (tmp2) {
        const _Date = Date;
        ref2.current = Date.now();
        const obj = { arm: tmp, catalog_version: InterestPickerCatalogs.INTEREST_PICKER_CATALOG_VERSION };
        const track = AnalyticsUtilsDefault.track;
        const WATERWHEELS_INTEREST_PICKER_EXPOSURE = hasOwnProperty.WATERWHEELS_INTEREST_PICKER_EXPOSURE;
        AnalyticsUtilsDefault;
        track(WATERWHEELS_INTEREST_PICKER_EXPOSURE, obj);
      }
    }, items1);
    const effect1 = react.useEffect(() => {
      let obj = interestPickerGameList(waterwheelsDiscoverEnabled[8]);
      const result = obj.setInterestPickerOpen(true);
      return () => {
        const obj = interestPickerGameList(waterwheelsDiscoverEnabled[8]);
        return obj.setInterestPickerOpen(false);
      };
    }, []);
    const items2 = [waterwheelsDiscoverEnabled];
    const effect2 = react.useEffect(() => {
      const current = waterwheelsDiscoverEnabled || ref.current;
      if (!current) {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(c7);
      }
    }, items2);
    const items3 = [memo, callback, waterwheelsDiscoverEnabled];
    const effect3 = react.useEffect(() => {
      const tmp = null == memo && waterwheelsDiscoverEnabled;
      if (tmp) {
        callback([]);
      }
    }, items3);
    if (null != memo) {
      if (waterwheelsDiscoverEnabled) {
        let obj3 = { arm: interestPickerGameList, catalog_version: tmp2(tmp3[6]).INTEREST_PICKER_CATALOG_VERSION };
        let obj4 = { style: tmp.screen, children: callback(tmp15, obj5) };
        obj5 = {
          catalog: memo,
          title: intl.string(memo(tmp3[16])["5MUKTF"]),
          subtitle: intl2.string(memo(tmp3[16])["z/57xV"]),
          minSelection: 1,
          onRowSeen(arg0) {
                ref3.current = Math.max(ref3.current, arg0);
              },
          onGameToggle(game_id, grid_position, selected) {
                const obj = { game_id, grid_position, selected };
                const track = AnalyticsUtilsDefault.track;
                const WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE = hasOwnProperty.WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE;
                AnalyticsUtilsDefault;
                const merged = Object.assign(obj3);
                return track(WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE, obj);
              },
          onSearch(query_length, result_count) {
                const obj = { query_length, result_count, no_results: 0 === result_count };
                const track = AnalyticsUtilsDefault.track;
                const WATERWHEELS_INTEREST_PICKER_SEARCH = hasOwnProperty.WATERWHEELS_INTEREST_PICKER_SEARCH;
                AnalyticsUtilsDefault;
                const merged = Object.assign(obj3);
                return track(WATERWHEELS_INTEREST_PICKER_SEARCH, obj);
              },
          onContinue(arg0) {
                completePicker(arg0, false);
              },
          onSkip(arg0) {
                completePicker(arg0, true);
              }
        };
        tmp15 = memo(waterwheelsDiscoverEnabled[14]);
        intl = tmp2(tmp3[15]).intl;
        intl2 = tmp2(tmp3[15]).intl;
        return callback(ref2, obj4);
      }
    }
    return null;
  }
}
let react = react_mod;
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, ModalAnimation } = Constants);
const jsx = Fragment.jsx;
let c7 = "waterwheels-interest-picker-modal";
const WaterwheelsInterestPickerModal_str = "WaterwheelsInterestPickerModal";
const React4 = createStyles.createStyles({ screen: { flex: 1 } });
WaterwheelsInterestPickerModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/WaterwheelsInterestPickerModal.tsx");

export default WaterwheelsInterestPickerModal;
export const WATERWHEELS_INTEREST_PICKER_MODAL_KEY = "waterwheels-interest-picker-modal";
