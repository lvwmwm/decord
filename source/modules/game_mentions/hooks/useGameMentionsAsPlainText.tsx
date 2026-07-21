// Module ID: 9059
// Function ID: 71125
// Name: useGameMentionsAsPlainText
// Dependencies: []
// Exports: useGameMentionsAsPlainText

// Module 9059 (useGameMentionsAsPlainText)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).GAME_MENTION_RAW_RE_GLOBAL;
let closure_6 = [];
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx");

export const useGameMentionsAsPlainText = function useGameMentionsAsPlainText(state) {
  const arg1 = state;
  const items = [state];
  const memo = React.useMemo(() => {
    if (null != arg0) {
      if ("" !== arg0) {
        const items = [];
        HermesBuiltin.arraySpread(arg0.matchAll(closure_5), 0);
        let mapped = items.map((arg0) => arg0[1]);
        if (mapped.length <= 0) {
          mapped = closure_6;
        }
        return mapped;
      }
    }
    return closure_6;
  }, items);
  const dependencyMap = memo;
  const games = arg1(dependencyMap[4]).useGames(memo);
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_3, closure_4];
  const items2 = [state, memo];
  return arg1(dependencyMap[5]).useStateFromStores(items1, () => {
    if (!obj.isNullOrEmpty(arg0)) {
      if (0 !== memo.length) {
        const currentUser = currentUser.getCurrentUser();
        let nsfwAllowed;
        if (null != currentUser) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        const arg0 = nsfwAllowed;
        return arg0.replace(closure_5, (arg0, arg1) => {
          const game = game.getGame(arg1);
          if (obj.isGameProfileObscured(game, nsfwAllowed)) {
            const intl2 = nsfwAllowed(closure_1[8]).intl;
            let stringResult = intl2.string(nsfwAllowed(closure_1[8]).t.11pdXZ);
          } else {
            stringResult = undefined;
            if (null != game) {
              stringResult = game.name;
            }
            if (null == stringResult) {
              const intl = nsfwAllowed(closure_1[8]).intl;
              stringResult = intl.string(nsfwAllowed(closure_1[8]).t.11pdXZ);
            }
          }
          return stringResult;
        });
      }
    }
    return arg0;
  }, items2);
};
