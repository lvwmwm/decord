// Module ID: 10990
// Function ID: 85536
// Name: closeModal
// Dependencies: [5, 31, 10991, 33, 10989, 480, 1212, 5087, 10992, 9194, 8438, 3830, 5519, 2]
// Exports: default

// Module 10990 (closeModal)
import isThrottled from "isThrottled";
import result from "result";
import TransferOwnershipModalScenes from "TransferOwnershipModalScenes";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
function closeModal() {
  importDefault(10989).close();
}
({ TransferOwnershipModalScenes: closure_5, TransferOwnershipVerificationTypes: closure_6 } = TransferOwnershipModalScenes);
let result = require("TransferOwnershipModalScenes").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModal.tsx");

export default function TransferOwnershipModal(guild) {
  guild = guild.guild;
  const toUser = guild.toUser;
  const items = [guild, toUser];
  const memo = React.useMemo(() => (function getScreens(guild, toUser) {
    let closure_0 = guild;
    let closure_1 = toUser;
    let obj = { impression_group: guild(outer2_2[5]).ImpressionGroups.GUILD_TRANSFER_OWNERSHIP_FLOW };
    obj = {};
    obj = {};
    let intl = guild(outer2_2[6]).intl;
    obj.headerTitle = intl.string(guild(outer2_2[6]).t.Z5s7PM);
    obj.headerLeft = guild(outer2_2[7]).getHeaderCloseButton(outer2_8);
    obj.impressionName = guild(outer2_2[5]).ImpressionNames.GUILD_TRANSFER_OWNERSHIP;
    obj.impressionProperties = obj;
    obj.render = function render() {
      return outer3_7(toUser(outer3_2[8]), { guild: closure_0, toUser: closure_1 });
    };
    obj[outer2_5.TRANFSER_OWNERSHIP] = obj;
    const obj1 = {};
    let intl2 = guild(outer2_2[6]).intl;
    obj1.headerTitle = intl2.string(guild(outer2_2[6]).t.Z5s7PM);
    const obj4 = guild(outer2_2[7]);
    obj1.headerLeft = guild(outer2_2[7]).getHeaderCloseButton(outer2_8);
    obj1.impressionName = guild(outer2_2[5]).ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE;
    obj1.impressionProperties = obj;
    obj1.render = function render() {
      let obj = {
        onFormSubmit: (() => {
          // CreateGeneratorClosureLongIndex (0x67)
          let closure_0 = outer4_3(tmp);
          return () => { ... };
        })(),
        onSuccess() {
          outer4_8();
          toUser(outer4_2[10]).close();
          const obj = toUser(outer4_2[10]);
          const result = guild(outer4_2[11]).showTransferOwnershipSuccess();
        }
      };
      // CreateGeneratorClosureLongIndex (0x67)
      obj.onResend = outer3_3(tmp);
      const intl = guild(outer3_2[6]).intl;
      obj.headerText = intl.string(guild(outer3_2[6]).t.Z5s7PM);
      const intl2 = guild(outer3_2[6]).intl;
      obj.confirmButtonText = intl2.string(guild(outer3_2[6]).t.Z5s7PM);
      return outer3_7(toUser(outer3_2[9]), obj);
    };
    obj[outer2_5.CONFIRM_EMAIL_CODE] = obj1;
    return obj;
  })(guild, toUser), items);
  let obj = { screens: memo, initialRouteName: constants.TRANFSER_OWNERSHIP };
  let intl = guild(1212).intl;
  obj.headerBackTitle = intl.string(guild(1212).t["13/7kX"]);
  return jsx(guild(5519).Navigator, { screens: memo, initialRouteName: constants.TRANFSER_OWNERSHIP });
};
