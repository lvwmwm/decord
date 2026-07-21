// Module ID: 16385
// Function ID: 126588
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16385 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function fetchForwardReferencedGuilds(message_reference) {
  message_reference = message_reference.message_reference;
  let type;
  if (null != message_reference) {
    type = message_reference.type;
  }
  if (type === MessageReferenceTypes.FORWARD) {
    const guild_id = message_reference.message_reference.guild_id;
    if (null != guild_id) {
      const basicGuild = arg1(dependencyMap[6]).fetchBasicGuild(guild_id);
      const obj = arg1(dependencyMap[6]);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const MessageReferenceTypes = arg1(dependencyMap[5]).MessageReferenceTypes;
let tmp2 = (arg0) => {
  class ForwardGuildBreadcrumbManager {
    constructor() {
      self = this;
      tmp = closure_4(this, ForwardGuildBreadcrumbManager);
      obj = closure_6(ForwardGuildBreadcrumbManager);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp7 = closure_1(closure_2[7])(tmp2Result, closure_10);
      return tmp2Result;
    }
  }
  const arg1 = ForwardGuildBreadcrumbManager;
  callback2(ForwardGuildBreadcrumbManager, arg0);
  return callback(ForwardGuildBreadcrumbManager);
}(importDefault(dependencyMap[8]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/forwarding/ForwardGuildBreadcrumbManager.tsx");

export default tmp2;
