// Module ID: 11324
// Function ID: 11325
// Name: TransferOwnershipModal
// Dependencies: [5, 19, 11325, 21, 11323, 1249, 1115, 5936, 11326, 6022, 9048, 4527, 6421, 2]
// Exports: default

// Module 11324 (TransferOwnershipModal)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import TransferOwnershipModalActionCreatorsDefault from "TransferOwnershipModalActionCreators" /* 11323 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import TransferOwnershipConstants from "TransferOwnershipConstants" /* 11325 */;
import size from "module_2" /* 2 */;

let c0;

let hasOwnProperty;
let metroRequire;
function closeModal() {
  const obj = TransferOwnershipModalActionCreatorsDefault;
  obj.close();
}
({ TransferOwnershipModalScenes: hasOwnProperty, TransferOwnershipVerificationTypes: metroRequire } = TransferOwnershipConstants);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModal.tsx");

export default function TransferOwnershipModal(guild) {
  guild = guild.guild;
  let toUser = guild.toUser;
  const items = [guild, toUser];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let obj4;
    let obj6;
    let closure_0 = guild;
    let obj = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.GUILD_TRANSFER_OWNERSHIP_FLOW };
    let obj2 = {};
    let obj3 = {
      headerTitle: intl.string(intl3.t.Z5s7PM),
      headerLeft: obj4.getHeaderCloseButton(closeModal),
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_TRANSFER_OWNERSHIP,
      impressionProperties: obj,
      render() {
        const obj = { guild, toUser };
        return closure_2_7(toUser(closure_2_2[8]), obj);
      }
    };
    const TRANFSER_OWNERSHIP = hasOwnProperty.TRANFSER_OWNERSHIP;
    intl = intl3.intl;
    obj4 = NavigatorHeader;
    obj2[TRANFSER_OWNERSHIP] = obj3;
    let obj5 = {
      headerTitle: intl2.string(intl3.t.Z5s7PM),
      headerLeft: obj6.getHeaderCloseButton(closeModal),
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
      impressionProperties: obj,
      render() {
        let closure_0;
        let intl;
        let intl2;
        let obj = {
          onFormSubmit: function() {
            return closure_0(...arguments);
          },
          onSuccess() {
            const obj = toUser(closure_1_2[4]);
            obj.close();
            const obj2 = toUser(closure_1_2[10]);
            obj2.close();
            const obj3 = closure_0(closure_1_2[11]);
            const result = obj3.showTransferOwnershipSuccess();
          },
          onResend: closure_1_3(function*(arg0, value) {
            let v1;
            if (c0 === 2) {
              c0 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c0 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    const obj2 = c1(closure_1_2[10]);
                    c1 = 1;
                    c0 = 1;
                    const obj5 = { value: obj2.sendTransferOwnershipPincode(id.id, true), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c0 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp7) {
                c0 = 3;
                throw tmp7;
              }
            }
          }),
          headerText: intl.string(guild(closure_1_2[6]).t.Z5s7PM),
          confirmButtonText: intl2.string(guild(closure_1_2[6]).t.Z5s7PM)
        };
        const tmp = toUser(closure_1_2[9]);
        guild = closure_1_3((arg0) => {
          let id2;
          const id = arg0;
          let c2 = 0;
          let c1 = 0;
          return (function*(arg0, value) {
            const obj3 = toUser(closure_2_2[10]);
            yield obj3.transferOwnership(id.id, c1.id, constants.EMAIL, id);
            return value;
          })();
        });
        intl = guild(closure_1_2[6]).intl;
        intl2 = guild(closure_1_2[6]).intl;
        return closure_1_7(tmp, obj);
      }
    };
    const CONFIRM_EMAIL_CODE = hasOwnProperty.CONFIRM_EMAIL_CODE;
    intl2 = intl3.intl;
    obj6 = NavigatorHeader;
    obj2[CONFIRM_EMAIL_CODE] = obj5;
    return obj2;
  }, items);
  const Navigator = guild(6421).Navigator;
  let intl = guild(1115).intl;
  return <Navigator screens={memo} initialRouteName={constants.TRANFSER_OWNERSHIP} headerBackTitle={intl.string(guild(1115).t["13/7kX"])} />;
};
