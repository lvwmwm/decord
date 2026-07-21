// Module ID: 16205
// Function ID: 125277
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16205 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const FormStates = arg1(dependencyMap[5]).FormStates;
let closure_8 = {};
const CLOSED = FormStates.CLOSED;
let closure_10 = null;
let tmp2 = (Store) => {
  class ChangeVanityURLModalStore {
    constructor() {
      self = this;
      tmp = ChangeVanityURLModalStore(this, ChangeVanityURLModalStore);
      obj = closure_3(ChangeVanityURLModalStore);
      tmp2 = closure_2;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ChangeVanityURLModalStore;
  callback2(ChangeVanityURLModalStore, Store);
  let obj = {
    key: "isOpen",
    value() {
      return closure_9 !== constants.CLOSED;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getProps",
    value() {
      return { submitting: closure_9 === constants.SUBMITTING, errorDetails: closure_10, errors: closure_8, guildId: closure_6, code: closure_7 };
    }
  };
  items[1] = obj;
  return callback(ChangeVanityURLModalStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "ChangeVanityURLModalStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  CHANGE_VANITY_URL_MODAL_OPEN: function handleOpen(arg0) {
    const CLOSED = FormStates.OPEN;
    ({ guildId: closure_6, code: closure_7 } = arg0);
    let closure_10 = null;
  },
  CHANGE_VANITY_URL_MODAL_SUBMIT: function handleSubmit() {
    const CLOSED = FormStates.SUBMITTING;
  },
  CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE: function handleSubmitFailure(error) {
    const CLOSED = FormStates.OPEN;
    error = error.error;
  },
  CHANGE_VANITY_URL_MODAL_CLOSE: function handleClose() {
    const CLOSED = FormStates.CLOSED;
    let closure_6 = null;
    let closure_7 = null;
    let closure_10 = null;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/ChangeVanityURLModalStore.tsx");

export default tmp2;
