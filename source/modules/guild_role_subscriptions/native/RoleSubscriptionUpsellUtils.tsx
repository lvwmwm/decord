// Module ID: 8733
// Function ID: 8734
// Dependencies: [19, 21, 4684, 8734, 2007, 2]

// Module 8733
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_4684").fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    let obj = importDefault(4684);
    obj = {
      importer() {
        return guildId(outer1_2[4])(outer1_2[3], outer1_2.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.guildId = closure_0;
            return outer2_3(closure_0, obj);
          };
        });
      }
    };
    obj.openLazy(obj);
  }
};
