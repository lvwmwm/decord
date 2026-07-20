// Module ID: 15879
// Function ID: 121645
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: acknowledgeDmSettingsUpsell

// Module 15879 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const Endpoints = arg1(dependencyMap[5]).Endpoints;
let tmp2 = (arg0) => {
  class DmSettingsUpsellManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, DmSettingsUpsellManager);
      items1 = [...items];
      obj = closure_6(DmSettingsUpsellManager);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { DM_SETTINGS_UPSELL_SHOW: tmp2Result.handleDmSettingsUpsellShow };
      return tmp2Result;
    }
  }
  const arg1 = DmSettingsUpsellManager;
  callback2(DmSettingsUpsellManager, arg0);
  const items = [
    {
      key: "handleDmSettingsUpsellShow",
      value(guildId) {
        const result = callback(closure_2[6]).openDmSettingsUpsellModal(guildId.guildId);
      }
    }
  ];
  return callback(DmSettingsUpsellManager, items);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellManager.tsx");

export default tmp2;
export const acknowledgeDmSettingsUpsell = function acknowledgeDmSettingsUpsell(guildId) {
  const HTTP = arg1(dependencyMap[8]).HTTP;
  return HTTP.post({ url: Endpoints.DM_SETTINGS_UPSELL_ACK(guildId), rejectWithError: false });
};
