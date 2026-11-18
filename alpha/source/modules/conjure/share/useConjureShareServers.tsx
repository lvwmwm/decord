// Module ID: 18436
// Function ID: 18437
// Name: useConjureShareServers
// Dependencies: [5, 32, 19, 4694, 6529, 504, 18414, 12312, 6530, 1113, 4121, 18423, 2]
// Exports: default

// Module 18436 (useConjureShareServers)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6530 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4694 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6529 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, name;

let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let result = size.fileFinishedImporting("modules/conjure/share/useConjureShareServers.tsx");

export default function useConjureShareServers(arg0, arg1, arg2) {
  let _undefined;
  let c3;
  let c4;
  let callback1;
  let items6;
  let tmp11;
  const f116183 = () => {
    let tmp = null;
    if (flag) {
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      tmp = guild_id;
    }
    return tmp;
  };
  _require = arg0;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let stateFromStores;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  let found;
  let pickGuild;
  let share;
  let publish;
  let closure_9;
  let str2;
  let closure_11;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [share];
  const items1 = [arg0];
  const tmp3 = share;
  stateFromStores = obj.useStateFromStores(items, () => {
    let project = ConjureProjectStore.getProject(closure_0);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  const obj2 = found;
  const first = _slicedToArray(found.useState(() => {
    let install_scope;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    return "guild" === install_scope;
  }), 1)[0];
  const tmp7 = flag(stateFromStores[6])(arg0, arg1, arg2, first);
  require("conjureRemoveApp");
  if (first) {
    let result = null != stateFromStores;
    if (result) {
      const tmpResult = tmp(stateFromStores[6]);
      result = tmpResult.canAddConjureProjectToAnotherServer(stateFromStores, tmp10, "ConjureShareServers");
    }
    tmp11 = result;
  } else {
    tmp11 = null != arg2 && tmp7.available;
  }
  const arr3 = tmp11 ? tmp7.guilds : [];
  const items2 = [tmp3, pickGuild];
  const items3 = [arg0];
  const tmpResult3 = tmp(stateFromStores[5]);
  const stateFromStoresArray = tmpResult3.useStateFromStoresArray(items2, () => {
    let guild;
    const project = ConjureProjectStore.getProject(closure_0);
    if (null != project) {
      if ("guild" === project.install_scope) {
        const obj = ConjureProjectTypes;
        const result = obj.conjureProjectServerIds(project);
        const mapped = result.map((item) => guild.getGuild(item));
        found = mapped.filter((item) => null != item);
      }
      return [];
    }
  }, items3);
  [c3, c4] = _slicedToArray(obj2.useState(f116183), 2);
  _slicedToArray(obj2.useState(f116183), 2);
  found = arr3.find((id) => id.id === c3);
  if (found == null) {
    found = null;
  }
  pickGuild = tmp7.pickGuild;
  share = tmp7.share;
  publish = tmp7.publish;
  const items4 = [pickGuild];
  const callback = obj2.useCallback((arg0) => {
    _undefined(arg0);
    if (null != arg0) {
      pickGuild(arg0);
    }
  }, items4);
  closure_9 = obj2.useRef(false);
  const effect = obj2.useEffect(() => {
    closure_9.current = false;
    return () => {
      closure_1_9.current = true;
    };
  }, []);
  str2 = undefined;
  if (stateFromStores != null) {
    str2 = stateFromStores.name;
  }
  if (str2 == null) {
    str2 = "";
  }
  closure_11 = obj2.useRef(false);
  const useCallback = obj2.useCallback;
  _require = _asyncToGenerator(async (arg0, value) => {
    let closure_3;
    let closure_4;
    let flag3;
    closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (1 === name) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else if (null != name) {
        if (!ref2.current) {
          ref2.current = true;
          name = 2;
          c6 = 1;
          const obj5 = { value: share(), done: false };
          return obj5;
        }
      } else {
        closure_0();
      }
    } else if (2 === name) {
      if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        const tmp = value;
        if (tmp.shared) {
          if (!ref.current) {
            closure_0();
            if ("publish" !== tmp.next) {
              let o2xHEb;
              const intl = closure_0(stateFromStores[9]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const tmp17 = closure_1;
              if ("added" === tmp.next) {
                o2xHEb = flag(stateFromStores[10])["4WtS+v"];
              } else {
                o2xHEb = flag(stateFromStores[10]).o2xHEb;
              }
              const obj7 = { app, server: name.name };
              tmp17(formatToPlainString(o2xHEb, obj7));
            } else {
              name = 3;
              c6 = 1;
              const obj8 = { value: publish(flag3), done: false };
              return obj8;
            }
          }
        } else {
          ref2.current = false;
        }
      }
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 3;
      const obj = { value, done: true };
      return obj;
    }
    await "HermesInternal";
    flag3 = closure_2;
    if (closure_2 === undefined) {
      flag3 = false;
    }
    return "Path";
  });
  const items5 = [found, share, publish, str2];
  const obj3 = { current: stateFromStoresArray, candidates: arr3, picked: found, pick: callback, changeRows: items6, sharing: null, error: null, finish: callback1 };
  callback1 = useCallback(function() {
    return closure_0(...arguments);
  }, items5);
  if (null == found) {
    items6 = [];
  } else {
    const tmpResult4 = tmp(stateFromStores[11]);
    if (first) {
      items6 = tmpResult4.conjureAddToAnotherServerRows(stateFromStores);
    } else {
      items6 = tmpResult4.conjureShareRows(stateFromStores);
    }
  }
  ({ sharing: obj5.sharing, error: obj5.error } = tmp7);
  return obj3;
};
