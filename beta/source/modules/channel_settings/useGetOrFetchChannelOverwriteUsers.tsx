// Module ID: 16648
// Function ID: 16649
// Name: useGetOrFetchChannelOverwriteUsers
// Dependencies: [32, 19, 2108, 1372, 1979, 504, 16649, 5832, 1370, 2]
// Exports: default

// Module 16648 (useGetOrFetchChannelOverwriteUsers)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import createAggregatorDefault from "createAggregator" /* 16649 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let react = react_mod;
const result = size.fileFinishedImporting("modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx");

export default function useGetOrFetchChannelOverwriteUsers(arg0, arg1) {
  let closure_0;
  let first;
  let length;
  let stateFromStoresArray;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  let items = [GuildMemberStore];
  const items1 = [arg0];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildMemberStore.getMemberIds(closure_0), items1);
  const items2 = [arg1, stateFromStoresArray];
  let tmp2 = first(react.useMemo(() => {
    let items;
    const tmp = createAggregatorDefault;
    if (null == closure_1) {
      items = [];
    } else {
      const _Object = Object;
      const values = Object.values(tmp2);
      const found = values.filter((type) => type.type === closure_1_0(stateFromStoresArray[4]).PermissionOverwriteType.MEMBER);
      items = found.map((id) => id.id);
    }
    return tmp(items, (arg0) => stateFromStoresArray.includes(arg0));
  }, items2), 2);
  first = tmp2[0];
  react = tmp4;
  const items3 = [tmp4, arg0];
  const effect = react.useEffect(() => {
    let tmp2 = length.length > 0;
    const tmp = length;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      const obj = GuildActionCreatorsDefault;
      const membersById = obj.requestMembersById(closure_0, tmp, false);
    }
  }, items3);
  const items4 = [UserStore];
  const items5 = [first];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items4, () => {
    const mapped = first.map(UserStore.getUser);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items5);
};
