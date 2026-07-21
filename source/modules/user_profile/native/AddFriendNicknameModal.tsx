// Module ID: 12026
// Function ID: 92929
// Name: AddFriendNicknameModal
// Dependencies: []
// Exports: default

// Module 12026 (AddFriendNicknameModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { "Null": "isArray", "Null": "Array", "Null": "constructor", "Null": "values", backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SCRIM };
obj.container = obj;
obj.title = { textAlign: "center" };
obj.description = {};
let closure_11 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/user_profile/native/AddFriendNicknameModal.tsx");

export default function AddFriendNicknameModal(arg0) {
  let showUserProfile;
  ({ userId: closure_0, showUserProfile } = arg0);
  const importDefault = showUserProfile;
  let closure_2;
  let closure_3;
  let callback;
  let React;
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handleSubmit = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  const tmp3 = callback(React.useState(false), 2);
  closure_2 = tmp3[0];
  closure_3 = tmp3[1];
  let obj = arg1(closure_2[9]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => nickname.getNickname(closure_0));
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = stateFromStores;
  }
  callback = React.useRef(tmp5);
  callback = React.useCallback((current) => {
    closure_4.current = current;
  }, []);
  let obj1 = arg1(closure_2[9]);
  const items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => user.getUser(closure_0));
  if (null == stateFromStores) {
    const intl2 = arg1(closure_2[10]).intl;
    let stringResult = intl2.string(arg1(closure_2[10]).t.BGYkaH);
  } else {
    const intl = arg1(closure_2[10]).intl;
    stringResult = intl.string(arg1(closure_2[10]).t.8pOYUE);
  }
  const items2 = [showUserProfile];
  const callback1 = React.useCallback(() => {
    let arr = showUserProfile(closure_2[11]);
    arr = arr.pop();
    if (null != showUserProfile) {
      showUserProfile();
    }
  }, items2);
  React = callback1;
  obj = { style: tmp.container };
  obj = {};
  obj1 = {};
  const tmp14 = importDefault(closure_2[13]);
  const intl3 = arg1(closure_2[10]).intl;
  obj1.confirmText = intl3.string(arg1(closure_2[10]).t.R3BPH+);
  obj1.onConfirm = function handleSubmit() {
    return _handleSubmit(...arguments);
  };
  const intl4 = arg1(closure_2[10]).intl;
  obj1.cancelText = intl4.string(arg1(closure_2[10]).t.ETE/oC);
  obj1.onCancel = callback1;
  const obj2 = { Opened: 1627389952, marginVertical: 29249850, marginStart: -1876471551, marginEnd: 15473, style: tmp.title, children: stringResult };
  const items3 = [callback2(arg1(closure_2[15]).Text, obj2), , ];
  const obj3 = { style: tmp.description };
  const intl5 = arg1(closure_2[10]).intl;
  obj3.children = intl5.string(arg1(closure_2[10]).t.NdQ+lP);
  items3[1] = callback2(arg1(closure_2[15]).Text, obj3);
  const obj4 = { "Bool(false)": true, "Bool(false)": "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/", "Bool(false)": true, "Bool(false)": "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", "Bool(false)": null, "Bool(false)": "40cd9620e427817088a46c48972f0fe6", onChange: callback };
  const tmp15 = importDefault(closure_2[14]);
  obj4.placeholder = importDefault(closure_2[17]).getName(stateFromStores1);
  obj4.defaultValue = stateFromStores;
  items3[2] = callback2(arg1(closure_2[16]).TextField, obj4);
  obj1.children = items3;
  obj.children = callback3(tmp15, obj1);
  obj.children = callback2(tmp14, obj);
  return callback2(_handleSubmit, obj);
};
