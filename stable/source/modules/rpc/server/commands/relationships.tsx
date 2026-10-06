// Module ID: 14055
// Function ID: 14056
// Name: relationships
// Dependencies: [32, 4482, 1378, 4741, 1086, 14040, 7791, 1098, 8765, 8770, 2]

// Module 14055 (relationships)
import BigFlagUtilsAll from "BigFlagUtils" /* 1098 */;
import Constants2 from "Constants" /* 4741 */;
import OAuth2Scopes from "OAuth2Scopes" /* 7791 */;
import RPCErrorDefault from "RPCError" /* 8765 */;
import RPCHelpers from "RPCHelpers" /* 8770 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import RelationshipStore from "RelationshipStore" /* 4482 */;
import UserStore from "UserStore" /* 1378 */;
import Constants from "Constants" /* 1086 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14040 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let c9;
let metroImportAll;
let metroImportDefault;
let obj3;
const RPC_SCOPE_CONFIG = Constants2.RPC_SCOPE_CONFIG;
({ ApplicationFlags: metroImportDefault, RelationshipTypes: metroImportAll, RPCCommands, RPCErrors: c9 } = Constants);
let obj = {};
const GET_RELATIONSHIPS = RPCCommands.GET_RELATIONSHIPS;
let obj2 = {
  scope: obj3,
  handler(socket) {
    let tmp16;
    let tmp17;
    const has = BigFlagUtilsAll.has;
    BigFlagUtilsAll;
    let num = socket.socket.application.flags;
    const deserialize = BigFlagUtilsAll.deserialize;
    BigFlagUtilsAll;
    if (num == null) {
      num = 0;
    }
    const deserializeResult = deserialize(num);
    const deserializer = BigFlagUtilsAll;
    if (has(deserializeResult, deserializer.deserialize(metroImportDefault.DISABLE_RELATIONSHIPS_ACCESS))) {
      const self = this;
      const self2 = this;
      const obj = { errorCode: constants3.INVALID_PERMISSIONS };
      const tmp34 = new RPCErrorDefault(obj, "Missing Permissions");
      throw tmp34;
    } else {
      const items = [];
      const mutableRelationships = RelationshipStore.getMutableRelationships();
      const entries = mutableRelationships.entries();
      const tmp10 = entries[Symbol.iterator]();
      while (tmp10 !== undefined) {
        let tmp15 = _slicedToArray(tmp12, 2);
        [tmp16, tmp17] = tmp15;
        if (tmp17 !== metroImportAll.NONE) {
          let user = UserStore.getUser(tmp16);
          if (null != user) {
            let obj2 = RPCHelpers;
            let result = obj2.transformBaseRelationship(tmp18, tmp23);
            let push = items.push;
            let obj3 = RPCHelpers;
            let arr = push(obj3.transformApplicationRelationship(result, socket.socket.application.id));
          }
        }
        continue;
      }
      return { relationships: items };
    }
  }
};
obj3 = {};
const createRPCCommand = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const GET_RELATIONSHIPS2 = RPCCommands.GET_RELATIONSHIPS;
const ANY = RPC_SCOPE_CONFIG.ANY;
let items = [OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_READ];
obj3[ANY] = items;
obj[GET_RELATIONSHIPS] = createRPCCommand(GET_RELATIONSHIPS2, obj2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/relationships.tsx");

export default obj;
