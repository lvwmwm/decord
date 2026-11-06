// Module ID: 19885
// Function ID: 19886
// Name: InterestPickerFlow
// Dependencies: [32, 19, 1072, 21, 19882, 19886, 18702, 1252, 19888, 18704, 1113, 2534, 2]
// Exports: default

// Module 19885 (InterestPickerFlow)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 18702 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerFlow.tsx");

export default function InterestPickerFlow(arm) {
  let intl;
  let intl2;
  let tmp13;
  arm = arm.arm;
  const onComplete = arm.onComplete;
  let getPicks;
  let first;
  let tmp = arm;
  const tmp2 = getPicks;
  const catalog = arm.catalog;
  let obj = arm(getPicks[4]);
  const interestPickerPicks = obj.useInterestPickerPicks();
  getPicks = interestPickerPicks.getPicks;
  const setPicks = interestPickerPicks.setPicks;
  let tmp4 = setPicks(first.useState("picker"), 2);
  first = tmp4[0];
  let closure_5 = tmp4[1];
  const first1 = setPicks(first.useState(arm(getPicks[5]).createInterestGuildsResource), 1)[0];
  const ref = first.useRef(false);
  const ref2 = first.useRef(0);
  const items = [arm];
  const memo = first.useMemo(() => {
    const obj = { arm, catalog_version: InterestPickerCatalogs.INTEREST_PICKER_CATALOG_VERSION };
    return obj;
  }, items);
  const items1 = [first, memo];
  const effect = first.useEffect(() => {
    if ("picker" === first) {
      const _Date = Date;
      ref2.current = Date.now();
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.WATERWHEELS_INTEREST_PICKER_EXPOSURE, memo);
    }
  }, items1);
  const items2 = [first1];
  const effect1 = first.useEffect(() => () => first1.dispose(), items2);
  if ("guilds" === first) {
    const obj2 = {
      analyticsContext: memo,
      gameIds: getPicks(),
      resource: first1,
      onBack() {
          return closure_5("picker");
        },
      onComplete() {
          const tmp = getPicks();
          if (!ref.current) {
            tmp3.current = true;
            const tmp4 = 0 === tmp2;
            setPicks(tmp);
            first1.dispose();
            onComplete(tmp, tmp4);
          }
        }
    };
    const tmp12 = onComplete(tmp2[8]);
    tmp13 = first1(tmp12, obj2);
  } else {
    const obj3 = {
      catalog,
      title: intl.string(onComplete(tmp2[11])["5MUKTF"]),
      subtitle: intl2.string(onComplete(tmp2[11])["z/57xV"]),
      minSelection: 1,
      initialSelection: getPicks(),
      onGameToggle(game_id, grid_position, selected) {
          const obj = { game_id, grid_position, selected };
          const track = AnalyticsUtilsDefault.track;
          const WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE = AnalyticEvents.WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE;
          AnalyticsUtilsDefault;
          const merged = Object.assign(memo);
          return track(WATERWHEELS_INTEREST_PICKER_TILE_TOGGLE, obj);
        },
      onSearch(query_length, result_count) {
          const obj = { query_length, result_count, no_results: 0 === result_count };
          const track = AnalyticsUtilsDefault.track;
          const WATERWHEELS_INTEREST_PICKER_SEARCH = AnalyticEvents.WATERWHEELS_INTEREST_PICKER_SEARCH;
          AnalyticsUtilsDefault;
          const merged = Object.assign(memo);
          return track(WATERWHEELS_INTEREST_PICKER_SEARCH, obj);
        },
      onContinue(pick_ids) {
          const obj = { pick_count: pick_ids.length, pick_ids, duration_ms: Math.max(0, Date.now() - ref2.current) };
          const track = AnalyticsUtilsDefault.track;
          const WATERWHEELS_INTEREST_PICKER_CONTINUE = AnalyticEvents.WATERWHEELS_INTEREST_PICKER_CONTINUE;
          AnalyticsUtilsDefault;
          const merged = Object.assign(memo);
          track(WATERWHEELS_INTEREST_PICKER_CONTINUE, obj);
          setPicks(pick_ids);
          first1.setPicks(pick_ids);
          closure_5("guilds");
        },
      onSkip(pick_ids) {
          const obj = { pick_count: pick_ids.length, pick_ids, duration_ms: Math.max(0, Date.now() - ref2.current) };
          const track = AnalyticsUtilsDefault.track;
          const WATERWHEELS_INTEREST_PICKER_SKIP = AnalyticEvents.WATERWHEELS_INTEREST_PICKER_SKIP;
          AnalyticsUtilsDefault;
          const merged = Object.assign(memo);
          track(WATERWHEELS_INTEREST_PICKER_SKIP, obj);
          setPicks(pick_ids);
          if (0 === pick_ids.length) {
            const popular = first1.loadPopular();
          } else {
            first1.setPicks(pick_ids);
          }
          closure_5("guilds");
        }
    };
    const tmp16 = onComplete(tmp2[9]);
    intl = tmp(tmp2[10]).intl;
    intl2 = tmp(tmp2[10]).intl;
    tmp13 = first1(tmp16, obj3);
  }
  return tmp13;
};
