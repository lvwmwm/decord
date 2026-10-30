// Module ID: 14360
// Function ID: 14361
// Name: useAppChannelRunningApp
// Dependencies: [6840, 1072, 6841, 504, 14361, 1114, 2]
// Exports: default

// Module 14360 (useAppChannelRunningApp)
import Constants from "Constants" /* 1072 */;
import FramesStore from "FramesStore" /* 6840 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
const ChannelTypes = Constants.ChannelTypes;
({ asLaunched: hasOwnProperty, getFrameSurfaceForChannel: metroRequire } = FramesConstants);
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelRunningApp.tsx");

export default function useAppChannelRunningApp(arg0) {
  let audible;
  let stringResult;
  let type;
  let userMuted;
  _require = arg0;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("get initialized");
  const items = [FramesStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (type.type === ChannelTypes.GUILD_APP) {
      tmp2 = metroRequire(tmp);
    }
    let tmp4;
    if (null != tmp2) {
      const first = FramesStore.getFramesForSurface(tmp2)[0];
      let id;
      if (first != null) {
        id = first.id;
      }
      tmp4 = id;
    }
    if (tmp4 == null) {
      tmp4 = null;
    }
    return tmp4;
  }, items1);
  let tmp4 = stateFromStores(14361)(stateFromStores);
  const items2 = [FramesStore];
  const items3 = [stateFromStores];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    let userMuted;
    const tmp = hasOwnProperty(FramesStore.getFrame(stateFromStores));
    let data;
    if (tmp != null) {
      data = tmp.data;
    }
    let audible;
    if (data != null) {
      audible = data.audible;
    }
    const obj = { audible: true === audible, userMuted: true === userMuted };
    userMuted = undefined;
    if (data != null) {
      userMuted = data.userMuted;
    }
    return obj;
  }, items3);
  const obj3 = { frameId: stateFromStores, runningLabel: stringResult, audible, userMuted };
  stringResult = null;
  ({ audible, userMuted } = stateFromStoresObject);
  if (tmp4) {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t["1yCkJY"]);
  }
  return obj3;
};
