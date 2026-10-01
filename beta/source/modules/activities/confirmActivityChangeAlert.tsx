// Module ID: 8795
// Function ID: 8796
// Name: confirmActivityChangeAlert
// Dependencies: [4479, 1372, 4989, 5203, 1115, 2011, 2]
// Exports: default

// Module 8795 (confirmActivityChangeAlert)
import intl7 from "intl" /* 1115 */;
import StringUtils from "StringUtils" /* 2011 */;
import useChannelName from "useChannelName" /* 4989 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/confirmActivityChangeAlert.tsx");

export default function confirmActivityChangeModal(name, channel, onConfirm, onCancel) {
  let format;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let prop;
  let str = "";
  if (null != channel) {
    const obj = useChannelName;
    str = obj.computeChannelName(channel, UserStore, RelationshipStore);
  }
  const obj2 = { title: intl.string(intl7.t.XkIWkk), cancelText: intl2.string(intl7.t["ETE/oC"]), confirmText: intl3.string(intl7.t["cY+Oob"]), onConfirm, onCancel, body: format(prop, obj3), isDismissable: false };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  intl3 = intl7.intl;
  const intl4 = intl7.intl;
  format = intl4.format;
  name = undefined;
  prop = intl7.t["5/Xort"];
  if (name != null) {
    name = name.name;
  }
  if (name == null) {
    const intl5 = tmp7(1115).intl;
    name = intl5.string(tmp7(1115).t.G99XFs);
  }
  obj3 = { currentApplicationName: name, currentApplicationChannelName: str };
  const tmp7Result = StringUtils;
  if (tmp7Result.isNullOrEmpty(str)) {
    const intl6 = tmp7(1115).intl;
    str = intl6.string(tmp7(1115).t.OGUjmt);
  }
  show(obj2);
};
