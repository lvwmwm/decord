// Module ID: 9352
// Function ID: 73042
// Dependencies: [31, 33, 4471, 9353, 1934, 2]

// Module 9352
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_4471").fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    let obj = importDefault(4471);
    obj = {
      importer() {
        return guildId(outer1_2[4])(outer1_2[3], outer1_2.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj["guildId"] = outer2_0;
            return outer3_3(closure_0, obj);
          };
        });
      }
    };
    obj.openLazy(obj);
  }
};
