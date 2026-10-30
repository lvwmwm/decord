// Module ID: 19739
// Function ID: 19740
// Name: RolePermissionTemplatesActionSheet
// Dependencies: [19, 17, 1072, 21, 5009, 575, 1253, 5253, 5706, 7315, 1114, 7360, 19717, 5953, 2]
// Exports: default

// Module 19739 (RolePermissionTemplatesActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5953 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7315 */;
import ActionSheet2 from "ActionSheet" /* 7360 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = Fragment.jsx;
let obj = { templateContainer: obj2 };
obj2 = { paddingVertical: 16, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx");

export default function RolePermissionTemplatesActionSheet(guildId) {
  let constants2;
  ({ permissionsEdited: require, onPermissionsChanged: importDefault } = guildId);
  guildId = guildId.guildId;
  let tmp = closure_8();
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
    obj.track(constants.OPEN_POPOUT, obj2);
  }, []);
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  let intl = intl5.intl;
  let obj3 = { style: tmp.templateContainer, children: null };
  const tmp3 = <BottomSheetTitleHeader title={intl.string(intl5.t.KgCkoQ)} />;
  const ActionSheet = ActionSheet2.ActionSheet;
  return <ActionSheet header={tmp3} startExpanded>{null}</ActionSheet>;
};
