// Module ID: 14527
// Function ID: 14528
// Name: GroupDMNitroCapCoachmark
// Dependencies: [32, 19, 17, 11592, 4855, 21, 5009, 11590, 11597, 11593, 7563, 4842, 1114, 7300, 10959, 9506, 575, 11589, 9933, 2]
// Exports: default

// Module 14527 (GroupDMNitroCapCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import AssetRegistryDefault from "AssetRegistry" /* 10959 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11590 */;
import GroupDMConstants from "GroupDMConstants" /* 11592 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let tmp;
const NitroWheelIcon2 = tmp(9506);
let react = react_mod;
const View = react_native.View;
let closure_6 = GroupDMConstants.MAX_GROUP_DM_NITRO_PARTICIPANTS;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ nitroWheelIcon: { width: 16, height: 16 } });
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapCoachmark.tsx");

export default function GroupDMNitroCapCoachmark(channelId) {
  let closure_4;
  let nitroWheelIcon;
  channelId = channelId.channelId;
  const _location = channelId.location;
  react = undefined;
  let number;
  let visible;
  const children = channelId.children;
  let tmp = closure_9();
  dependencyMap = tmp;
  let obj = react;
  const ref = react.useRef(null);
  const tmp3 = channelId;
  let obj2 = channelId(11590);
  const groupDMNitroAudience = obj2.useGroupDMNitroAudience();
  const tmp6 = "entitled" === groupDMNitroAudience;
  react = tmp6;
  let obj3 = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: channelId(11590).GroupDMNitroAcquisitionStrategy.MARKETING };
  let tmp7 = _location(11597);
  const tmp7Result = tmp7(obj3);
  let closure_5 = tmp7Result;
  const obj4 = _location(11593);
  const enabled = obj4.useConfig({ location: _location }).enabled;
  channelId(7563);
  if (enabled) {
    let str = "staff";
    if ("staff" !== groupDMNitroAudience) {
      const items = [tmp3(4842).DismissibleContent.NITRO_GDM_CAP_COACHMARK];
    }
    const tmp13 = groupDMNitroAudience(tmp10([]), 2);
    number = tmp14;
    const tmp15 = tmp13[0] === tmp3(4842).DismissibleContent.NITRO_GDM_CAP_COACHMARK;
    visible = tmp15;
    const items1 = [groupDMNitroAudience, tmp6, tmp15, tmp13[1], channelId, _location, tmp, tmp7Result];
    const memo = obj.useMemo(() => {
      let intl;
      let intl2;
      let obj2;
      let obj3;
      let str;
      let string;
      let tmp7;
      let tmp = require;
      const obj = {
        title: intl.string(intl4.t.d8Spvj),
        description: intl2.formatToPlainString(intl4.t.U3CkDg, obj2),
        visible,
        position: "bottom",
        offsetY: 12,
        renderImgComponent() {
          return closure_1_8(channelId(nitroWheelIcon[13]).Badge, { type: "beta", variant: "expressive" });
        },
        onDismiss() {
          return number(constants.USER_DISMISS);
        },
        buttonLabel: string(obj3.getGroupDMNitroCapCTAMessage(groupDMNitroAudience)),
        buttonIcon: tmp7,
        buttonVariant: str,
        buttonShiny: !tmp3,
        onButtonPress() {
          const tmp = closure_1_4;
          if (tmp) {
            _location(nitroWheelIcon[17])(channelId, closure_1_1);
          } else {
            closure_1_5();
          }
          number(constants.TAKE_ACTION);
        }
      };
      intl = intl4.intl;
      intl2 = intl4.intl;
      obj2 = { number };
      const intl3 = intl4.intl;
      string = intl3.string;
      obj3 = GroupDMNitroUpsellModel;
      if (closure_4) {
        tmp7 = AssetRegistryDefault;
      } else {
        const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
        tmp7 = <NitroWheelIcon size="custom" style={nitroWheelIcon.nitroWheelIcon} color={nativeDefault.unsafe_rawColors.WHITE} />;
      }
      str = "experimental_premium-primary";
      if (closure_4) {
        str = "primary";
      }
      return obj;
    }, items1);
    const tmp3Result = tmp3(9933);
    const coachmark = tmp3Result.useCoachmark(ref, memo);
    return <closure_5 ref={ref} collapsable={false}>{children}</closure_5>;
  }
};
