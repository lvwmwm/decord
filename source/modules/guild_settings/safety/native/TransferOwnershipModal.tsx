// Module ID: 10979
// Function ID: 85473
// Name: closeModal
// Dependencies: []
// Exports: default

// Module 10979 (closeModal)
function closeModal() {
  importDefault(dependencyMap[4]).close();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ TransferOwnershipModalScenes: closure_5, TransferOwnershipVerificationTypes: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModal.tsx");

export default function TransferOwnershipModal(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const toUser = guild.toUser;
  const importDefault = toUser;
  const items = [guild, toUser];
  const memo = React.useMemo(() => function getScreens(guild, toUser) {
    let obj = { impression_group: guild(closure_2[5]).ImpressionGroups.GUILD_TRANSFER_OWNERSHIP_FLOW };
    obj = {};
    obj = {};
    const intl = guild(closure_2[6]).intl;
    obj.headerTitle = intl.string(guild(closure_2[6]).t.Z5s7PM);
    obj.headerLeft = guild(closure_2[7]).getHeaderCloseButton(closure_8);
    obj.impressionName = guild(closure_2[5]).ImpressionNames.GUILD_TRANSFER_OWNERSHIP;
    obj.impressionProperties = obj;
    obj.render = function render() {
      return callback2(arg1(closure_2[8]), { guild: arg0, toUser: arg1 });
    };
    obj[constants.TRANFSER_OWNERSHIP] = obj;
    const obj1 = {};
    const intl2 = guild(closure_2[6]).intl;
    obj1.headerTitle = intl2.string(guild(closure_2[6]).t.Z5s7PM);
    const obj4 = guild(closure_2[7]);
    obj1.headerLeft = guild(closure_2[7]).getHeaderCloseButton(closure_8);
    obj1.impressionName = guild(closure_2[5]).ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE;
    obj1.impressionProperties = obj;
    obj1.render = function render() {
      const obj = {
        onFormSubmit: () => {
          // CreateGeneratorClosureLongIndex (0x67)
          let closure_0 = callback3(tmp);
          return () => { ... };
        }(),
        onSuccess() {
          callback4();
          callback2(closure_2[10]).close();
          const obj = callback2(closure_2[10]);
          const result = callback(closure_2[11]).showTransferOwnershipSuccess();
        }
      };
      // CreateGeneratorClosureLongIndex (0x67)
      obj.onResend = callback(tmp);
      const intl = arg0(closure_2[6]).intl;
      obj.headerText = intl.string(arg0(closure_2[6]).t.Z5s7PM);
      const intl2 = arg0(closure_2[6]).intl;
      obj.confirmButtonText = intl2.string(arg0(closure_2[6]).t.Z5s7PM);
      return callback2(arg1(closure_2[9]), obj);
    };
    obj[constants.CONFIRM_EMAIL_CODE] = obj1;
    return obj;
  }(guild, toUser), items);
  const obj = { screens: memo, initialRouteName: constants.TRANFSER_OWNERSHIP };
  const intl = arg1(dependencyMap[6]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[6]).t.13/7kX);
  return jsx(arg1(dependencyMap[12]).Navigator, obj);
};
