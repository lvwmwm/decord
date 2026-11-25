// Module ID: 14042
// Function ID: 14043
// Name: GroupDMNitroCapCoachmark
// Dependencies: [32, 19, 17, 12053, 4858, 21, 12051, 12054, 9519, 4845, 1112, 10503, 12050, 9526, 2]
// Exports: default

// Module 14042 (GroupDMNitroCapCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1112 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4858 */;
import AssetRegistryDefault from "AssetRegistry" /* 10503 */;
import GroupDMConstants from "GroupDMConstants" /* 12053 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let closure_6 = GroupDMConstants.MAX_GROUP_DM_NITRO_PARTICIPANTS;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapCoachmark.tsx");

export default function GroupDMNitroCapCoachmark(channelId) {
  let closure_2;
  let number;
  let visible;
  channelId = channelId.channelId;
  const _location = channelId.location;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let obj = react;
  const children = channelId.children;
  const ref = react.useRef(null);
  let obj2 = channelId(12051);
  const groupDMNitroAudience = obj2.useGroupDMNitroAudience();
  const obj3 = _location(12054);
  const enabled = obj3.useConfig({ location: _location }).enabled;
  channelId(9519);
  if (enabled) {
    if ("entitled" === groupDMNitroAudience) {
      const items = [tmp2(4845).DismissibleContent.NITRO_GDM_CAP_COACHMARK];
    }
    const tmp9 = _slicedToArray(tmp6([]), 2);
    dependencyMap = tmp10;
    const tmp11 = tmp9[0] === channelId(4845).DismissibleContent.NITRO_GDM_CAP_COACHMARK;
    _slicedToArray = tmp11;
    const items1 = [tmp11, tmp9[1], channelId, _location];
    const memo = obj.useMemo(() => {
      let intl;
      let intl2;
      let intl3;
      let obj2;
      const obj = {
        title: intl.string(intl4.t.d8Spvj),
        description: intl2.formatToPlainString(intl4.t.U3CkDg, obj2),
        visible,
        position: "bottom",
        offsetY: 12,
        onDismiss() {
          return closure_1_2(constants.USER_DISMISS);
        },
        buttonLabel: intl3.string(intl4.t.yZOtoD),
        buttonIcon: AssetRegistryDefault,
        buttonVariant: "primary",
        onButtonPress() {
          _location(closure_2[12])(channelId, closure_1_1);
          closure_1_2(constants.TAKE_ACTION);
        }
      };
      intl = intl4.intl;
      intl2 = intl4.intl;
      obj2 = { number };
      intl3 = intl4.intl;
      return obj;
    }, items1);
    const tmp2Result = channelId(9526);
    const coachmark = tmp2Result.useCoachmark(ref, memo);
    return <View ref={ref} collapsable={false}>{children}</View>;
  }
};
