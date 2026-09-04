// Module ID: 13202
// Function ID: 13203
// Name: GroupDMNitroCapCoachmark
// Dependencies: [32, 19, 17, 11525, 1383, 21, 4481, 11523, 11530, 11526, 7326, 1372, 1233, 1296, 9960, 8592, 709, 11522, 11059, 2]
// Exports: default

// Module 13202 (GroupDMNitroCapCoachmark)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MAX_GROUP_DM_NITRO_PARTICIPANTS as closure_6 } from "MAX_GROUP_DM_NITRO_PARTICIPANTS" /* 11525 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
let closure_9 = createCacheKey.createStyles({ nitroWheelIcon: { width: 16, height: 16 } });
const result = require("set").fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapCoachmark.tsx");

export default function GroupDMNitroCapCoachmark(channelId) {
  channelId = channelId.channelId;
  const _location = channelId.location;
  dependencyMap = undefined;
  let groupDMNitroAudience;
  let React;
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  jsx = undefined;
  const tmp = callback();
  dependencyMap = tmp;
  let obj = React;
  const ref = React.useRef(null);
  groupDMNitroAudience = channelId(11523).useGroupDMNitroAudience();
  React = tmp6;
  closure_5 = tmp7;
  obj = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: null };
  const obj2 = channelId(11523);
  obj[2] = channelId(11523).GroupDMNitroAcquisitionStrategy.MARKETING;
  const tmp8Result = _location(11530)(obj);
  closure_6 = tmp8Result;
  const tmp8 = _location(11530);
  channelId(7326);
  if (obj4.useConfig({ location: _location }).enabled) {
    if ("staff" !== groupDMNitroAudience) {
      const items = [tmp3(1372).DismissibleContent.NITRO_GDM_CAP_COACHMARK];
    }
    const tmp14 = groupDMNitroAudience(tmp11([]), 2);
    closure_7 = tmp15;
    const tmp16 = tmp14[0] === tmp3(1372).DismissibleContent.NITRO_GDM_CAP_COACHMARK;
    jsx = tmp16;
    const items1 = [groupDMNitroAudience, tmp6, tmp7, tmp16, tmp14[1], channelId, _location, tmp, tmp8Result];
    const memo = obj.useMemo(() => {
      let obj = { title: null, description: null, visible: null, position: "bottom", offsetY: 12, renderImgComponent: null, onDismiss: null, buttonLabel: null, buttonIcon: null, buttonVariant: null, buttonShiny: null, onButtonPress: null };
      let intl = channelId(nitroWheelIcon[12]).intl;
      obj[0] = intl.string(channelId(nitroWheelIcon[12]).t.d8Spvj);
      const intl2 = channelId(nitroWheelIcon[12]).intl;
      const t = channelId(nitroWheelIcon[12]).t;
      obj = { number: closure_6 };
      obj[1] = intl2.formatToPlainString(closure_5 ? t.iZDK8I : t.U3CkDg, obj);
      obj[2] = callback;
      obj[5] = function renderImgComponent() {
        const obj = { text: null, color: null };
        const intl = callback(1233).intl;
        obj[0] = intl.string(callback(1233).t.oW0eUd);
        obj[1] = callback(1296).BadgeColors.EXPRESSIVE;
        return callback4(callback(1296).TextBadge, obj);
      };
      obj[6] = function onDismiss() {
        return callback3(closure_1_7.USER_DISMISS);
      };
      const intl3 = tmp(tmp2[12]).intl;
      obj[7] = intl3.string(channelId(nitroWheelIcon[7]).getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
      if (closure_4) {
        let tmp7 = _location(tmp2[14]);
      } else {
        obj = { size: "custom", style: null, color: null };
        obj[1] = nitroWheelIcon.nitroWheelIcon;
        obj[2] = _location(tmp2[16]).unsafe_rawColors.WHITE;
        tmp7 = callback(tmp(tmp2[15]).NitroWheelIcon, obj);
      }
      obj[8] = tmp7;
      let str = "experimental_premium-primary";
      if (closure_4) {
        str = "primary";
      }
      obj[9] = str;
      obj[10] = !closure_4;
      obj[11] = function onButtonPress() {
        if (closure_4) {
          closure_1_1(closure_1_2[17])(closure_0, closure_1);
        } else {
          callback2();
        }
        callback3(closure_1_7.TAKE_ACTION);
      };
      return obj;
    }, items1);
    const coachmark = tmp3(11059).useCoachmark(ref, memo);
    obj = { ref: null, collapsable: false, children: null };
    obj[0] = ref;
    obj[2] = channelId.children;
    return <closure_5 ref={null} collapsable={false}>{null}</closure_5>;
  }
};
