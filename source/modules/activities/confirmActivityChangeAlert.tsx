// Module ID: 10809
// Function ID: 83964
// Name: confirmActivityChangeModal
// Dependencies: [358023168, 535625728, 283115520, 261292032, 709165056, 131072, 2373713920]
// Exports: default

// Module 10809 (confirmActivityChangeModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activities/confirmActivityChangeAlert.tsx");

export default function confirmActivityChangeModal(name, channel, onConfirm, onCancel) {
  let str = "";
  if (null != channel) {
    let obj = channel(dependencyMap[2]);
    str = obj.computeChannelName(channel, closure_4, closure_3);
  }
  obj = {};
  const intl = channel(dependencyMap[4]).intl;
  obj.title = intl.string(channel(dependencyMap[4]).t.XkIWkk);
  const intl2 = channel(dependencyMap[4]).intl;
  obj.cancelText = intl2.string(channel(dependencyMap[4]).t.ETE/oC);
  const intl3 = channel(dependencyMap[4]).intl;
  obj.confirmText = intl3.string(channel(dependencyMap[4]).t.cY+Oob);
  obj.onConfirm = onConfirm;
  obj.onCancel = onCancel;
  const intl4 = channel(dependencyMap[4]).intl;
  obj = {};
  name = undefined;
  if (null != name) {
    name = name.name;
  }
  if (null == name) {
    const intl5 = channel(dependencyMap[4]).intl;
    name = intl5.string(channel(dependencyMap[4]).t.G99XFs);
  }
  obj.currentApplicationName = name;
  const obj2 = importDefault(dependencyMap[3]);
  if (obj5.isNullOrEmpty(str)) {
    const intl6 = channel(dependencyMap[4]).intl;
    str = intl6.string(channel(dependencyMap[4]).t.OGUjmt);
  }
  obj.currentApplicationChannelName = str;
  obj.body = intl4.format(channel(dependencyMap[4]).t.5/Xort, obj);
  obj2.show(obj);
};
