// Module ID: 11050
// Function ID: 86035
// Name: useFamilyCenterActions
// Dependencies: []
// Exports: useFamilyCenterActions

// Module 11050 (useFamilyCenterActions)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const UserLinkStatus = arg1(dependencyMap[4]).UserLinkStatus;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActions.tsx");

export const useFamilyCenterActions = function useFamilyCenterActions(arg0) {
  let tmp5;
  let tmp7;
  let tmp9;
  let obj = arg0;
  if (null == arg0) {
    obj = {};
  }
  const onError = obj.onError;
  const arg1 = onError;
  const onSuccess = obj.onSuccess;
  const importDefault = onSuccess;
  const tmp2 = callback2(React.useState(false), 2);
  const first = tmp2[0];
  let closure_2 = tmp2[1];
  [tmp5, closure_3] = callback2(React.useState(false), 2);
  const tmp4 = callback2(React.useState(false), 2);
  [tmp7, closure_4] = callback2(React.useState(false), 2);
  const tmp6 = callback2(React.useState(false), 2);
  [tmp9, closure_5] = callback2(React.useState(false), 2);
  const tmp10 = callback2(React.useState(false), 2);
  const first1 = tmp10[0];
  let closure_6 = first1;
  let closure_7 = tmp10[1];
  const tmp12 = callback2(React.useState(false), 2);
  const first2 = tmp12[0];
  let closure_9 = tmp12[1];
  const tmp14 = callback2(React.useState(false), 2);
  const first3 = tmp14[0];
  let closure_11 = tmp14[1];
  const tmp16 = callback2(React.useState(false), 2);
  const first4 = tmp16[0];
  let closure_13 = tmp16[1];
  let tmp18 = first;
  if (!first) {
    tmp18 = tmp5;
  }
  if (!tmp18) {
    tmp18 = tmp7;
  }
  if (!tmp18) {
    tmp18 = tmp9;
  }
  if (!tmp18) {
    tmp18 = first2;
  }
  if (!tmp18) {
    tmp18 = first4;
  }
  const items = [tmp18, onError, onSuccess];
  const callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
  const items1 = [tmp18, onError, onSuccess];
  const callback1 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  const items2 = [tmp18, onError, onSuccess];
  const callback2 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items2);
  const items3 = [tmp18, onError, onSuccess];
  // CreateGeneratorClosureLongIndex (0x67)
  const callback3 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items3);
  const items4 = [first1, onError, onSuccess];
  const callback4 = React.useCallback(callback(tmp), items4);
  const items5 = [first3, onError, onSuccess];
  const callback5 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items5);
  const items6 = [first2, onError, onSuccess];
  const callback6 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items6);
  const items7 = [first4, onError];
  obj = {
    acceptLinkRequest: callback,
    declineLinkRequest: callback1,
    disconnectLinkRequest: callback2,
    cancelLinkRequest: callback3,
    selectTeenUser: callback5,
    getLinkCode: callback4,
    requestLink: callback6,
    loadMore: React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), items7),
    isAcceptLoading: first,
    isDeclineLoading: tmp5,
    isDisconnectLoading: tmp7,
    isCancelLoading: tmp9,
    isGetLinkCodeLoading: first1,
    isSelectTeenUserLoading: first3,
    isRequestingLink: first2,
    isMoreLoading: first4
  };
  return obj;
};
