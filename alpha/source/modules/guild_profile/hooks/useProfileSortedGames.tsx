// Module ID: 15239
// Function ID: 15240
// Name: useProfileSortedGames
// Dependencies: [19, 9384, 15240, 15241, 12, 1380, 12562, 9227, 9230, 8758, 2]
// Exports: useProfileSortedGames

// Module 15239 (useProfileSortedGames)
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import react from "react" /* 19 */;
import GuildProfileConstants from "GuildProfileConstants" /* 9384 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, map, results, set, set2;

let closure_4;
let hasOwnProperty;
({ HOISTED_SEARCH_GAME_IDS: closure_4, HOISTED_SEARCH_GAME_IDS_BY_PRIORITY: hasOwnProperty } = GuildProfileConstants);
let closure_6 = [];
let result = size.fileFinishedImporting("modules/guild_profile/hooks/useProfileSortedGames.tsx");

export function useProfileSortedGames(surface) {
  let closure_1;
  let endSession;
  let isLoading;
  let onSelect;
  let query;
  let selectedGameIds;
  let tmp18;
  ({ query, selectedGameIds } = surface);
  importDefault = undefined;
  let memo1;
  let baseSort;
  results = undefined;
  let memo4;
  let obj = baseSort;
  let items = [selectedGameIds];
  surface = surface.surface;
  const memo = baseSort.useMemo(() => {
    const items = [...closure_2_4];
    const _Set = Set;
    let tmp3 = selectedGameIds;
    if (selectedGameIds == null) {
      tmp3 = closure_6;
    }
    HermesBuiltin.arraySpread(items, tmp3, tmp2);
    const _Set1 = new _Set(items);
    const items1 = [..._Set1];
    return items1;
  }, items);
  const tmp2 = memo1;
  let tmp3 = require("useGameRecords")(memo);
  importDefault = tmp3;
  let tmp4 = require("useAreGamesLoading")(memo);
  let items1 = [tmp3];
  memo1 = baseSort.useMemo(() => {
    map = new Map(closure_1.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    return map;
  }, items1);
  const items2 = [memo1];
  let memo2 = baseSort.useMemo(() => {
    const arr = _modDef12(closure_4);
    const mapped = arr.map((item) => memo1.get(item));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((item) => {
      const obj = selectedGameIds(memo1[6]);
      return obj.isGameAllowedInGameWidgets(item);
    });
    const mapped1 = found1.map((id) => ({ id: id.id, value: id.id, label: id.name }));
    const sortByResult = mapped1.sortBy((value) => {
      let num = memo4.get(value.value);
      if (num == null) {
        num = 0;
      }
      return num;
    });
    const iter = sortByResult.reverse();
    return iter.value();
  }, items2);
  baseSort = baseSort.useCallback((item, item2) => {
    let num = memo4.get(item2.item.value);
    const obj = memo4;
    if (num == null) {
      num = 0;
    }
    let num2 = obj.get(item.item.value);
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  }, []);
  const items3 = [baseSort];
  let num;
  const memo3 = baseSort.useMemo(() => ({ baseSort, keys: ["label"] }), items3);
  if (query != null) {
    num = query.trim().length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp9 = num > 0;
  let tmp11 = selectedGameIds(tmp2[7]);
  let tmp12 = query;
  const useDebouncedGameAutocomplete = tmp11.useDebouncedGameAutocomplete;
  const tmp10 = selectedGameIds;
  if (query == null) {
    tmp12 = null;
  }
  let obj2 = { surface, filterGroup: tmp10(tmp2[8]).GameSearchFilterGroup.DEFAULT };
  const debouncedGameAutocomplete = useDebouncedGameAutocomplete(tmp12, obj2);
  results = debouncedGameAutocomplete.results;
  const items4 = [results];
  ({ isLoading, onSelect, endSession } = debouncedGameAutocomplete);
  memo4 = obj.useMemo(() => {
    let items = results;
    const _Set = Set;
    if (results == null) {
      items = [];
    }
    const found = items.filter((item) => {
      const obj = selectedGameIds(memo1[9]);
      return obj.isGameAutocompleteResultAllowedInGameWidgets(item);
    });
    const _Set1 = new _Set(found.map((id) => id.id));
    return _Set1;
  }, items4);
  const items5 = [results, memo4, selectedGameIds, memo1];
  const items6 = [tmp3, results];
  const memo5 = obj.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter((id) => set.has(id.id));
    const items1 = [...found.map((id) => ({ id: id.id, value: id.id, label: id.name }))];
    let arr4 = selectedGameIds;
    if (selectedGameIds == null) {
      arr4 = closure_6;
    }
    const found1 = arr4.filter((item) => !set.has(item));
    HermesBuiltin.arraySpread(items1, found1.map((id) => {
      let str;
      const obj = { id, value: id, label: str };
      const value = memo1.get(id);
      str = undefined;
      if (value != null) {
        str = value.name;
      }
      if (str == null) {
        str = "";
      }
      return obj;
    }), tmp2);
    return items1;
  }, items5);
  const items7 = [memo4];
  const memo6 = obj.useMemo(() => {
    map = new Map();
    const iter = closure_1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let media = nextResult.media;
      let icon1;
      let tmp3 = nextResult;
      set = map.set;
      let id = nextResult.id;
      if (media != null) {
        icon1 = media.icon;
      }
      let obj = { icon: icon1, platformAvailability: tmp3.platformAvailability };
      let result = set(id, obj);
      continue;
    }
    let items = results;
    if (results == null) {
      items = [];
    }
    for (const item10032 of items) {
      let tmp7 = item10032;
      let value = map.get(item10032.id);
      let icon = item10032.icon;
      set2 = map.set;
      let id2 = item10032.id;
      if (icon == null) {
        let icon2;
        if (value != null) {
          icon2 = value.icon;
        }
        icon = icon2;
      }
      let obj2 = { icon, platformAvailability };
      let platformAvailability = tmp7.platformAvailability;
      if (platformAvailability == null) {
        let platformAvailability1;
        if (value != null) {
          platformAvailability1 = value.platformAvailability;
        }
        platformAvailability = platformAvailability1;
      }
      let set2Result = set2(id2, obj2);
      continue;
    }
    return map;
  }, items6);
  const callback1 = obj.useCallback((arr) => arr.filter((value) => set.has(value.value)), items7);
  if (tmp9) {
    memo2 = memo5;
  }
  const obj3 = { options: memo2, matchSorterOptions: memo3, customMatchSorter: tmp18, metadataByGameId: memo6, isLoading: tmp4, onSelect, endSession };
  tmp18 = undefined;
  if (tmp9) {
    tmp18 = callback1;
  }
  if (tmp9) {
    tmp4 = isLoading;
  }
  return obj3;
}
