// Module ID: 17298
// Function ID: 17299
// Name: useGetOrFetchChannelOverwriteUsers
// Dependencies: [32, 19, 2105, 1372, 1978, 504, 17299, 5769, 1370, 2]
// Exports: default

// Module 17298 (useGetOrFetchChannelOverwriteUsers)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5769 */;
import _modDef17299 from "module_17299" /* 17299 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_settings/useGetOrFetchChannelOverwriteUsers.tsx");

export default function useGetOrFetchChannelOverwriteUsers(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [GuildMemberStore];
  const items1 = [arg0];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => GuildMemberStore.getMemberIds(closure_0), items1);
  const items2 = [arg1, stateFromStoresArray];
  let tmp2 = first(noop.useMemo(() => {
    if (null == closure_1) {
      let items = [];
    } else {
      const _Object = Object;
      const values = Object.values(tmp2);
      const found = values.filter((type) => type.type === closure_1_0(stateFromStoresArray[4]).PermissionOverwriteType.MEMBER);
      items = found.map((id) => id.id);
    }
    return _modDef17299(items, (arg0) => stateFromStoresArray.includes(arg0));
  }, items2), 2);
  first = tmp2[0];
  noop = tmp4;
  const items3 = [tmp2[1], arg0];
  const effect = noop.useEffect(() => {
    let tmp2 = length.length > 0;
    if (tmp2) {
      tmp2 = null != closure_0;
    }
    if (tmp2) {
      const membersById = GuildActionCreatorsDefault.requestMembersById(closure_0, length, false);
    }
  }, items3);
  let obj = require("initialize");
  const items4 = [UserStore];
  const items5 = [first];
  return require("initialize").useStateFromStoresArray(items4, () => {
    const mapped = first.map(UserStore.getUser);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items5);
};
