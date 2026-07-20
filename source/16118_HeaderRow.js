// Module ID: 16118
// Function ID: 124289
// Name: HeaderRow
// Dependencies: []
// Exports: ConnectedHeaderRow

// Module 16118 (HeaderRow)
function HeaderRow(guild) {
  let description;
  let isUploading;
  let tmp5;
  let uploadDisabled;
  guild = guild.guild;
  const arg1 = guild;
  ({ emojisLength: closure_1, onSelectRolesForEmoji: closure_2, uploadDisabled } = guild);
  ({ isUploading, description } = guild);
  if (uploadDisabled === undefined) {
    uploadDisabled = false;
  }
  let closure_3;
  let callback;
  let React;
  let closure_6;
  let closure_7;
  function _handleImagePicker() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = tmp(tmp);
    const _handleImagePicker = obj;
    return obj(...arguments);
  }
  function createUploadInstructionsListItem(intl, arg1) {
    return { id: "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + arg1, text: intl };
  }
  const tmp = callback4();
  closure_3 = tmp;
  const tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  callback = tmp2[1];
  [tmp5, closure_5] = callback(React.useState(null), 2);
  const tmp4 = callback(React.useState(null), 2);
  [closure_6, closure_7] = callback(React.useState(""), 2);
  let obj = arg1(dependencyMap[10]);
  let canCreateExpressions = obj.useManageResourcePermissions(guild).canCreateExpressions;
  const intl = arg1(dependencyMap[13]).intl;
  const items = [createUploadInstructionsListItem(intl.string(arg1(dependencyMap[13]).t.N2qTQ3), 1), , , ];
  const intl2 = arg1(dependencyMap[13]).intl;
  obj = { maxSize: EMOJI_MAX_FILESIZE_KB };
  items[1] = createUploadInstructionsListItem(intl2.formatToPlainString(arg1(dependencyMap[13]).t.gfAXoR, obj), 2);
  const intl3 = arg1(dependencyMap[13]).intl;
  items[2] = createUploadInstructionsListItem(intl3.string(arg1(dependencyMap[13]).t.rnwKPH), 3);
  const intl4 = arg1(dependencyMap[13]).intl;
  items[3] = createUploadInstructionsListItem(intl4.string(arg1(dependencyMap[13]).t.8Vr5Qd), 4);
  obj = {};
  const obj1 = { style: tmp.headerContainer };
  if (canCreateExpressions) {
    const obj2 = { size: "sm" };
    if (!first) {
      first = isUploading;
    }
    obj2.loading = first;
    obj2.onPress = function handleImagePicker() {
      return _handleImagePicker(...arguments);
    };
    const intl5 = arg1(dependencyMap[13]).intl;
    obj2.text = intl5.string(arg1(dependencyMap[13]).t.DU0dy/);
    obj2.disabled = uploadDisabled;
    canCreateExpressions = callback3(arg1(dependencyMap[16]).Button, obj2);
    const tmp11 = callback3;
  }
  const items1 = [canCreateExpressions, , ];
  let tmp16 = null != tmp5;
  if (tmp16) {
    const obj3 = { Promise: "%MapIteratorPrototype%", marginTop: "<string:1163546880>", flags: "SimpleActionSheet", style: tmp.errorText, children: tmp5 };
    tmp16 = callback3(arg1(dependencyMap[17]).Text, obj3);
  }
  items1[1] = tmp16;
  const obj4 = { style: tmp.uploadInstructionsContainer };
  const obj5 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>", children: description };
  const items2 = [callback3(arg1(dependencyMap[17]).Text, obj5), , ];
  const obj6 = { style: tmp.uploadInstructionsHeading };
  const intl6 = arg1(dependencyMap[13]).intl;
  const tmp10 = closure_6;
  const tmp6 = callback(React.useState(""), 2);
  const tmp7 = callback3;
  const tmp8 = closure_15;
  const tmp9 = callback2;
  obj6.children = intl6.string(arg1(dependencyMap[13]).t.jrXfyw).toUpperCase();
  items2[1] = callback3(arg1(dependencyMap[17]).Text, obj6);
  items2[2] = callback3(closure_7, {
    style: tmp.uploadInstructionsList,
    data: items,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: function renderUploadInstructionsListItem(item) {
      item = item.item;
      const obj = { Promise: "ur", marginTop: "SECTION_INDEX_FIRST_NAMED_CATEGORY", flags: "ur", style: tmp.uploadListItem, accessibilityLabel: item.text };
      const items = [null, null, item.text];
      obj.children = items;
      return callback(guild(closure_2[17]).Text, obj);
    }
  });
  obj4.children = items2;
  items1[2] = callback2(closure_6, obj4);
  obj1.children = items1;
  obj.children = tmp9(tmp10, obj1);
  return tmp7(tmp8, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, FlatList: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ AbortCodes: closure_9, AnalyticEvents: closure_10, UPLOAD_SMALL_SIZE: closure_11 } = arg1(dependencyMap[5]));
const EMOJI_MAX_FILESIZE_KB = arg1(dependencyMap[6]).EMOJI_MAX_FILESIZE_KB;
const tmp3 = arg1(dependencyMap[5]);
({ jsxs: closure_13, jsx: closure_14, Fragment: closure_15 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[9]).space.PX_12 };
obj.uploadInstructionsContainer = obj;
const tmp4 = arg1(dependencyMap[7]);
obj.uploadInstructionsHeading = { marginVertical: importDefault(dependencyMap[9]).space.PX_12 };
obj.uploadInstructionsList = { marginLeft: 8 };
const obj1 = { marginVertical: importDefault(dependencyMap[9]).space.PX_12 };
obj.headerContainer = { paddingTop: importDefault(dependencyMap[9]).space.PX_16 };
const obj2 = { paddingTop: importDefault(dependencyMap[9]).space.PX_16 };
obj.errorText = { marginTop: importDefault(dependencyMap[9]).space.PX_8 };
const obj3 = { marginTop: importDefault(dependencyMap[9]).space.PX_8 };
obj.uploadListItem = { paddingRight: importDefault(dependencyMap[9]).space.PX_8 };
let closure_16 = obj.createStyles(obj);
const obj4 = { paddingRight: importDefault(dependencyMap[9]).space.PX_8 };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/HeaderRow.tsx");

export const ConnectedHeaderRow = function ConnectedHeaderRow(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    const merged = Object.assign(arg0, undefined);
    let obj = arg1(dependencyMap[18]);
    const items = [closure_8];
    obj = {};
    obj.isUploading = obj.useStateFromStores(items, () => uploadingEmoji.isUploadingEmoji());
    const merged1 = Object.assign(merged);
    return callback3(HeaderRow, obj);
  }
};
