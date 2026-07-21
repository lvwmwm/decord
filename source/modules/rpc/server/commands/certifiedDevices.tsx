// Module ID: 13273
// Function ID: 100810
// Name: RPC_LOCAL_SCOPE
// Dependencies: []

// Module 13273 (RPC_LOCAL_SCOPE)
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
const _module = require(dependencyMap[0]);
({ RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = _module);
const _module1 = require(dependencyMap[1]);
const RPCErrors = _module1.RPCErrors;
const DeviceTypes = require(dependencyMap[2]).DeviceTypes;
let obj = {};
obj = {};
obj = {};
const items = [require(dependencyMap[3]).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.validation = function validation(array) {
  let obj = importDefault(dependencyMap[4])(array);
  obj = {};
  let arrayResult = array.array();
  const requiredResult = obj.required();
  obj = {};
  const obj5 = importDefault(dependencyMap[4])(array);
  const stringResult = array.string();
  const items = [, , ];
  ({ AUDIO_INPUT: arr[0], AUDIO_OUTPUT: arr[1], VIDEO_INPUT: arr[2] } = DeviceTypes);
  obj.type = array.string().required().valid(items);
  const requiredResult1 = array.string().required();
  const stringResult1 = array.string();
  obj.id = array.string().required().min(1);
  const requiredResult2 = array.string().required();
  const obj11 = importDefault(dependencyMap[4])(array);
  const obj1 = {};
  const requiredResult3 = importDefault(dependencyMap[4])(array).required();
  obj1.name = array.string().min(1);
  const stringResult2 = array.string();
  obj1.url = array.string().min(1);
  obj.vendor = requiredResult3.keys(obj1);
  const stringResult3 = array.string();
  const obj16 = importDefault(dependencyMap[4])(array);
  const obj2 = {};
  const requiredResult4 = importDefault(dependencyMap[4])(array).required();
  obj2.name = array.string().min(1);
  const stringResult4 = array.string();
  obj2.url = array.string().min(1);
  obj.model = requiredResult4.keys(obj2);
  arrayResult = array.array();
  const stringResult5 = array.string();
  obj.related = arrayResult.items(array.string().min(1));
  obj.echo_cancellation = array.boolean();
  obj.noise_suppression = array.boolean();
  obj.automatic_gain_control = array.boolean();
  obj.hardware_mute = array.boolean();
  obj.devices = arrayResult.items(obj5.keys(obj));
  return requiredResult.keys(obj);
};
obj.handler = function handler(socket) {
  socket = socket.socket;
  const devices = socket.args.devices;
  const require = devices;
  if (null == socket.application.id) {
    let tmp6 = importDefault(dependencyMap[5]);
    let obj = { errorCode: RPCErrors.INVALID_COMMAND };
    const prototype = tmp6.prototype;
    tmp6 = new tmp6(obj, "No application.");
    throw tmp6;
  } else {
    obj = require(dependencyMap[6]);
    obj.setCertifiedDevices(socket.application.id, devices.map((type) => {
      const related = type.related;
      return { type: type.type, id: type.id, vendor: type.vendor, model: type.model, related: related.filter((arg0) => arg0.some((id) => id.id === id)), echoCancellation: type.echo_cancellation, noiseSuppression: type.noise_suppression, automaticGainControl: type.automatic_gain_control, hardwareMute: type.hardware_mute };
    }));
  }
};
obj[_module1.RPCCommands.SET_CERTIFIED_DEVICES] = obj;
const _module2 = require(dependencyMap[7]);
const result = _module2.fileFinishedImporting("modules/rpc/server/commands/certifiedDevices.tsx");

export default obj;
