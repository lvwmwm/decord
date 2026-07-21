// Module ID: 11839
// Function ID: 91757
// Name: useSimilarGames
// Dependencies: []
// Exports: default

// Module 11839 (useSimilarGames)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).SIMILAR_GAMES_BLOCKED_GAME_IDS;
let closure_5 = [];
let closure_6 = [];
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0, arg1) {
  let error;
  let isLoading;
  let tmp = arg1;
  if (arg1) {
    tmp = !set.has(arg0);
  }
  let obj = arg1(dependencyMap[3]);
  const similarGameIds = obj.useSimilarGameIds(arg0, tmp);
  const data = similarGameIds.data;
  ({ isLoading, error } = similarGameIds);
  if (!tmp) {
    let tmp5 = closure_5;
  } else {
    tmp5 = data;
  }
  arg1 = tmp5;
  const games = arg1(dependencyMap[4]).useGames(tmp5);
  const obj2 = arg1(dependencyMap[4]);
  const items = [closure_2];
  const items1 = [tmp5];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => tmp5.some((arg0) => {
    let tmp = null == closure_2.getGame(arg0);
    if (tmp) {
      tmp = !closure_2.hasNoData(arg0);
    }
    if (tmp) {
      tmp = !closure_2.didFetchingFail(arg0);
    }
    return tmp;
  }), items1);
  arg1(dependencyMap[5]);
  const items2 = [closure_2, closure_3];
  [][0] = tmp5;
  obj = {};
  if (tmp) {
    obj.isFetching = null == error && null == data || isLoading || stateFromStores;
    obj.similarGames = tmp9;
    let tmp11 = obj;
  } else {
    obj.isFetching = false;
    obj.similarGames = closure_6;
    tmp11 = obj;
  }
  return tmp11;
};
