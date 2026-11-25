// Module ID: 15841
// Function ID: 15842
// Name: gameProfile
// Dependencies: [5, 5766, 1071, 15838, 15822, 15815, 7613, 15842, 8704, 15843, 8707, 8712, 2]

// Module 15841 (gameProfile)
import Constants2 from "Constants" /* 5766 */;
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 15838 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1071 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15822 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let closure_4;
const RPC_EMBEDDED_APP_SCOPE = Constants2.RPC_EMBEDDED_APP_SCOPE;
({ RPCCommands, RPCErrors: closure_4 } = Constants);
let closure_5 = _asyncToGeneratorDefault({ cooldownMs: 1000 });
let obj = {};
const OPEN_GAME_PROFILE = RPCCommands.OPEN_GAME_PROFILE;
let obj2 = {
  scope: RPC_EMBEDDED_APP_SCOPE,
  handler(arg0) {
    let args;
    ({ socket: require, args } = arg0);
    ({ game_id: importDefault, application_id: dependencyMap } = args);
    return (async function() {
      let c0;
      let v1;
      if (arg0 === 1) {
        throw arg1;
      }
      if (arg0 === 2) {
        return arg1;
      }
      const tmp15 = closure_1_2;
      const tmp16 = require;
      const iframeId = c1(closure_1_2[5])(require).iframeId;
      if (null == importDefault === (null == dependencyMap)) {
        const obj4 = { errorCode: constants.INVALID_COMMAND };
        const self = this;
        const str = "Pass exactly one of game_id or application_id";
        const self2 = this;
        const tmp8 = new tmp14(tmp15[6])(obj4, "Pass exactly one of game_id or application_id");
        throw tmp8;
      }
      await closure_1_5.runExclusive(tmp16, closure_1_3(function*() {
        let obj10;
        const gameId = tmp;
        const obj5 = { gameId, applicationId };
        const user = yield closure_2_1(closure_2_2[7])(obj5);
        if (null != user) {
          const obj11 = iframeId(closure_2_2[8]);
          if (!obj11.isGameDisabled(user)) {
            let obj8;
            let appContextForIframeId = null;
            const obj = iframeId(closure_2_2[5]);
            if (null != obj.tryValidateEmbeddedAppFrame(user)) {
              const obj2 = iframeId(closure_2_2[9]);
              appContextForIframeId = obj2.getAppContextForIframeId(closure_129_0);
            }
            if (null == appContextForIframeId) {
              obj8 = { opened: false };
            } else {
              const obj9 = { gameId: user.id, gameProfileModalChecks: obj10, source: iframeId(closure_2_2[11]).GameProfileSources.Frame, appContext: appContextForIframeId };
              obj10 = { shouldOpenGameProfile: true, gameId: user.id };
              const openGameProfileModal = v1(closure_2_2[10]).openGameProfileModal;
              const tmp36 = v1(closure_2_2[10]);
              openGameProfileModal(obj9);
              obj8 = { opened: true };
            }
            let c3 = 3;
            const obj12 = { value: obj8, done: true };
            return obj12;
          }
        }
        return { opened: false };
      }), { opened: false });
      if (arg0 === 1) {
        throw arg1;
      }
      if (arg0 === 2) {
        return arg1;
      }
      return arg1;
    })();
  }
};
obj[OPEN_GAME_PROFILE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_GAME_PROFILE, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/gameProfile.tsx");

export default obj;
