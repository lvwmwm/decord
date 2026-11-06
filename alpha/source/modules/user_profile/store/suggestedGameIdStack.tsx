// Module ID: 15170
// Function ID: 15171
// Name: suggestedGameIdStack
// Dependencies: [9396, 12, 560, 7872, 2]

// Module 15170 (suggestedGameIdStack)
import WidgetType from "WidgetType" /* 7872 */;
import GuildProfileConstants from "GuildProfileConstants" /* 9396 */;
import module_12 from "module_12" /* 12 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let set;

const prop = GuildProfileConstants.HOISTED_SEARCH_GAME_IDS;
let closure_2 = module_12.sampleSize(prop, prop.length);
let obj = module_560.create((arg0, arg1) => {
  let args;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    stack: [],
    wishlistStack: [],
    gameIds: {},
    peekedGameIds: {},
    onLoad(arr, arr2, arr3) {
      let items;
      let items1;
      set = new Set(arr3.map((gameId) => gameId.gameId));
      const found = arr.filter((item) => !set.has(item));
      const found1 = arr2.filter((item) => !set.has(item));
      const obj = { stack: items, wishlistStack: items1 };
      items = [...closure_2];
      items1 = [...closure_2];
      closure_0(obj);
      const values = Object.values(WidgetType.WidgetType);
      const tmp6 = values[Symbol.iterator]();
      while (tmp6 !== undefined) {
        let obj2 = closure_1();
        let setNextResult = obj2.setNext(6, tmp7);
        continue;
      }
    },
    setNext(arg0, arg1) {
      const obj = closure_1();
      const next = obj.getNext(arg0, arg1);
      const obj2 = closure_1();
      obj2._setGameIds(arg1, next);
      const obj3 = closure_1();
      const peekNextResult = obj3.peekNext(7, arg1);
      const obj4 = closure_1();
      obj4._setPeekedGameIds(arg1, peekNextResult);
    },
    getNext(arg0, arg1) {
      let tmp;
      let wishlistStack;
      if (arg1 === WidgetType.WidgetType.WANT_TO_PLAY_GAMES) {
        wishlistStack = closure_1().wishlistStack;
        tmp = closure_1;
      } else {
        tmp = closure_1;
        wishlistStack = closure_1().stack;
      }
      const substr = wishlistStack.slice(0, arg0);
      const substr1 = wishlistStack.slice(arg0);
      const tmpResult = tmp();
      tmpResult._setStack(arg1, substr1);
      return substr;
    },
    peekNext(arg0, arg1) {
      let wishlistStack;
      if (arg1 === WidgetType.WidgetType.WANT_TO_PLAY_GAMES) {
        wishlistStack = closure_1().wishlistStack;
      } else {
        wishlistStack = closure_1().stack;
      }
      return wishlistStack.slice(0, arg0);
    },
    bump(arg0, arg1) {
      let items = closure_1().gameIds[arg1];
      if (items == null) {
        items = [];
      }
      const index = items.indexOf(arg0);
      if (-1 !== index) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, items, 0);
        items1.splice(index, 1);
        const tmp2Result = closure_1();
        const next = tmp2Result.getNext(1, arg1);
        const tmp2Result4 = closure_1();
        const items2 = [];
        const peekNextResult = tmp2Result4.peekNext(7, arg1);
        const _setGameIds = closure_1()._setGameIds;
        closure_1();
        HermesBuiltin.arraySpread(items2, next, HermesBuiltin.arraySpread(items2, items1, 0));
        _setGameIds(arg1, items2);
        const items3 = [];
        const _setPeekedGameIds = closure_1()._setPeekedGameIds;
        closure_1();
        HermesBuiltin.arraySpread(items3, next, HermesBuiltin.arraySpread(items3, peekNextResult, 0));
        _setPeekedGameIds(arg1, items3);
      }
    },
    bumpMultiple(found, arg1) {
      closure_0 = found;
      let items = closure_1().gameIds[arg1];
      if (items == null) {
        items = [];
      }
      found = items.filter((item) => !closure_0.includes(item));
      const tmpResult = closure_1();
      const next = tmpResult.getNext(6 - found.length, arg1);
      const tmpResult4 = closure_1();
      tmpResult4.peekNext(7, arg1);
      const items1 = [...next];
      const tmpResult5 = closure_1();
      tmpResult5._setGameIds(arg1, items1);
      const items2 = [...next];
      const tmpResult6 = closure_1();
      tmpResult6._setPeekedGameIds(arg1, items2);
    },
    remove(arg0, arg1) {
      let tmp;
      let wishlistStack;
      closure_0 = arg0;
      if (arg1 === WidgetType.WidgetType.WANT_TO_PLAY_GAMES) {
        wishlistStack = closure_1().wishlistStack;
        tmp = closure_1;
      } else {
        tmp = closure_1;
        wishlistStack = closure_1().stack;
      }
      const found = wishlistStack.filter((item) => item !== closure_0);
      const tmpResult = tmp();
      tmpResult._setStack(arg1, found);
      const _setPeekedGameIds = tmp()._setPeekedGameIds;
      tmp();
      const tmpResult4 = tmp();
      _setPeekedGameIds(arg1, tmpResult4.peekNext(7, arg1));
    },
    _setGameIds(arg0, items1) {
      closure_0 = arg0;
      closure_1 = items1;
      closure_0((gameIds) => {
        let obj2;
        const obj = { gameIds: obj2 };
        obj2 = {};
        const merged = Object.assign(gameIds.gameIds);
        obj2[closure_0] = closure_1;
        return obj;
      });
    },
    _setStack(arg0, found) {
      if (arg0 === WidgetType.WidgetType.WANT_TO_PLAY_GAMES) {
        const obj2 = { wishlistStack: found };
        closure_0(obj2);
      } else {
        const obj = { stack: found };
        closure_0(obj);
      }
    },
    _setPeekedGameIds(arg0, items2) {
      closure_0 = arg0;
      closure_1 = items2;
      closure_0((peekedGameIds) => {
        let obj2;
        const obj = { peekedGameIds: obj2 };
        obj2 = {};
        const merged = Object.assign(peekedGameIds.peekedGameIds);
        obj2[closure_0] = closure_1;
        return obj;
      });
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/user_profile/store/suggestedGameIdStack.tsx");

export const useSuggestedGameIdStack = obj;
