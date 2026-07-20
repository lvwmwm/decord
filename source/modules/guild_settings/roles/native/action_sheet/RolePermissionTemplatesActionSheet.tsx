// Module ID: 16189
// Function ID: 125112
// Name: RolePermissionTemplatesActionSheet
// Dependencies: []
// Exports: default

// Module 16189 (RolePermissionTemplatesActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ AnalyticEvents: closure_5, AnalyticsSections: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { <string:3992539790>: "Group 11", <string:2204218813>: 2, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER };
obj.templateContainer = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx");

export default function RolePermissionTemplatesActionSheet(guildId) {
  ({ permissionsEdited: closure_0, onPermissionsChanged: closure_1 } = guildId);
  function saveTemplate(arg0) {
    callback2(arg0);
    callback2(saveTemplate[7]).hideActionSheet();
    const obj = callback2(saveTemplate[7]);
    const result = callback(saveTemplate[8]).roleTemplateAppliedToast();
  }
  const effect = React.useEffect(() => {
    let obj = callback2(saveTemplate[6]);
    obj = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
    obj.track(constants.OPEN_POPOUT, obj);
  }, []);
  let obj = {};
  const intl = arg1(saveTemplate[10]).intl;
  obj.title = intl.string(arg1(saveTemplate[10]).t.KgCkoQ);
  const tmp = callback();
  obj = { header: jsx(arg1(saveTemplate[9]).BottomSheetTitleHeader, obj), startExpanded: true };
  obj = {
    style: tmp.templateContainer,
    children: jsx(importDefault(saveTemplate[12]), {
      onSelect(arg0) {
        if (arg0) {
          let obj = callback2(saveTemplate[13]);
          obj = {};
          const intl = arg0(saveTemplate[10]).intl;
          obj.title = intl.string(arg0(saveTemplate[10]).t.MVdkgB);
          const intl2 = arg0(saveTemplate[10]).intl;
          obj.body = intl2.string(arg0(saveTemplate[10]).t.LpogjK);
          const intl3 = arg0(saveTemplate[10]).intl;
          obj.cancelText = intl3.string(arg0(saveTemplate[10]).t.ETE/oC);
          const intl4 = arg0(saveTemplate[10]).intl;
          obj.confirmText = intl4.string(arg0(saveTemplate[10]).t.p89ACt);
          obj.onConfirm = function onConfirm() {
            callback2(arg0);
          };
          obj.onCancel = function onCancel() {
            callback(closure_2[7]).hideActionSheet();
          };
          obj.hideActionSheet = false;
          obj.show(obj);
        } else {
          saveTemplate(arg0);
        }
      },
      location: constants.GUILD_ROLE_TEMPLATE_POPOUT,
      guildId: guildId.guildId
    })
  };
  obj.children = <View {...obj} />;
  return jsx(arg1(saveTemplate[11]).ActionSheet, obj);
};
