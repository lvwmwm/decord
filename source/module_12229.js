// Module ID: 12229
// Function ID: 93844
// Dependencies: []

// Module 12229
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]).throttle((code) => {
  const invite = invite.getInvite(code.code);
  let obj = importDefault(dependencyMap[2]);
  obj = {};
  let tmp2;
  if (null != invite) {
    tmp2 = invite;
  }
  obj.invite = tmp2;
  obj.open(obj);
}, 1000, { trailing: false });
const importDefaultResult = importDefault(dependencyMap[1]);
const obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
