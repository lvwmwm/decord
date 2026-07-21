// Module ID: 16141
// Function ID: 124417
// Name: useLoadGuildStickersWithCreator
// Dependencies: []
// Exports: default

// Module 16141 (useLoadGuildStickersWithCreator)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/stickers/useLoadGuildStickerWithCreator.tsx");

export default function useLoadGuildStickersWithCreator(arg0) {
  const arg1 = arg0;
  const tmp = callback(React.useState("loading"), 2);
  const first = tmp[0];
  let closure_1 = tmp[1];
  let obj = arg1(closure_1[5]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => stickersByGuildId.getStickersByGuildId(arg0));
  const items1 = [arg0];
  const effect = React.useEffect(() => {
    function _fetch() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = _fetch(tmp);
      const _fetch = obj;
      return obj(...arguments);
    }
    const abortController = new AbortController();
    const arg0 = abortController;
    const signal = abortController.signal;
    function fetch() {
      return _fetch(...arguments);
    }();
    return () => {
      signal("loading");
      if (null != abortController) {
        abortController.abort();
      }
    };
  }, items1);
  if ("success" === first) {
    obj = {
      status: first,
      stickers: stateFromStores.map((user_id) => {
          const user = user.getUser(user_id.user_id);
          let tmp2 = user_id;
          if (null != user) {
            const obj = {};
            const merged = Object.assign(user_id);
            obj["user"] = user;
            tmp2 = obj;
          }
          return tmp2;
        })
    };
  } else {
    obj = { status: first };
  }
  return obj;
};
