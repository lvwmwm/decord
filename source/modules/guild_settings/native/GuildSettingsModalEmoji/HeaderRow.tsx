// Module ID: 16258
// Function ID: 126596
// Name: HeaderRow
// Dependencies: [5, 57, 31, 27, 16252, 653, 1852, 33, 4130, 689, 8402, 9391, 675, 1212, 491, 4674, 4543, 4126, 566, 2]
// Exports: ConnectedHeaderRow

// Module 16258 (HeaderRow)
import closure_3 from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { EMOJI_MAX_FILESIZE_KB } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
function HeaderRow(guild) {
  let c5;
  let c6;
  let c7;
  let dependencyMap;
  let description;
  let importDefault;
  let isUploading;
  let tmp5;
  let uploadDisabled;
  guild = guild.guild;
  ({ emojisLength: importDefault, onSelectRolesForEmoji: dependencyMap, uploadDisabled } = guild);
  ({ isUploading, description } = guild);
  if (uploadDisabled === undefined) {
    uploadDisabled = false;
  }
  let c3;
  let callback;
  let React;
  c6 = undefined;
  c7 = undefined;
  function _handleImagePicker() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined(tmp);
    return obj(...arguments);
  }
  function createUploadInstructionsListItem(intl, arg1) {
    return { id: "GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_" + arg1, text: intl };
  }
  const tmp = _createForOfIteratorHelperLoose();
  c3 = tmp;
  const tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  callback = tmp2[1];
  [tmp5, c5] = callback(React.useState(null), 2);
  const tmp4 = callback(React.useState(null), 2);
  [c6, c7] = callback(React.useState(""), 2);
  let obj = guild(8402);
  let canCreateExpressions = obj.useManageResourcePermissions(guild).canCreateExpressions;
  const intl = guild(1212).intl;
  let items = [createUploadInstructionsListItem(intl.string(guild(1212).t.N2qTQ3), 1), , , ];
  const intl2 = guild(1212).intl;
  obj = { maxSize: EMOJI_MAX_FILESIZE_KB };
  items[1] = createUploadInstructionsListItem(intl2.formatToPlainString(guild(1212).t.gfAXoR, obj), 2);
  const intl3 = guild(1212).intl;
  items[2] = createUploadInstructionsListItem(intl3.string(guild(1212).t.rnwKPH), 3);
  const intl4 = guild(1212).intl;
  items[3] = createUploadInstructionsListItem(intl4.string(guild(1212).t["8Vr5Qd"]), 4);
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
    const intl5 = guild(1212).intl;
    obj2.text = intl5.string(guild(1212).t["DU0dy/"]);
    obj2.disabled = uploadDisabled;
    canCreateExpressions = callback3(guild(4543).Button, obj2);
    const tmp11 = callback3;
  }
  const items1 = [canCreateExpressions, , ];
  let tmp16 = null != tmp5;
  if (tmp16) {
    const obj3 = { style: tmp.errorText, variant: "text-sm/medium", color: "text-feedback-critical", children: tmp5 };
    tmp16 = callback3(guild(4126).Text, obj3);
  }
  items1[1] = tmp16;
  const obj4 = { style: tmp.uploadInstructionsContainer };
  const obj5 = { variant: "text-sm/medium", color: "text-muted", children: description };
  const items2 = [callback3(guild(4126).Text, obj5), , ];
  const obj6 = { variant: "text-xs/bold", color: "text-muted", style: tmp.uploadInstructionsHeading };
  const intl6 = guild(1212).intl;
  const tmp10 = c6;
  const tmp6 = callback(React.useState(""), 2);
  const tmp7 = callback3;
  const tmp8 = closure_15;
  const tmp9 = callback2;
  obj6.children = intl6.string(guild(1212).t.jrXfyw).toUpperCase();
  items2[1] = callback3(guild(4126).Text, obj6);
  items2[2] = callback3(c7, {
    style: tmp.uploadInstructionsList,
    data: items,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: function renderUploadInstructionsListItem(item) {
      item = item.item;
      const obj = { style: _undefined.uploadListItem, variant: "text-xs/medium", color: "text-muted", accessibilityLabel: item.text };
      const items = ["\u2022", " ", item.text];
      obj.children = items;
      return outer1_13(guild(outer1_2[17]).Text, obj);
    }
  });
  obj4.children = items2;
  items1[2] = callback2(c6, obj4);
  obj1.children = items1;
  obj.children = tmp9(tmp10, obj1);
  return tmp7(tmp8, obj);
}
({ View: closure_6, FlatList: closure_7 } = get_ActivityIndicator);
({ AbortCodes: closure_9, AnalyticEvents: closure_10, UPLOAD_SMALL_SIZE: closure_11 } = ME);
({ jsxs: closure_13, jsx: closure_14, Fragment: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.uploadInstructionsContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.uploadInstructionsHeading = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.uploadInstructionsList = { marginLeft: 8 };
let obj1 = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.headerContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.errorText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.uploadListItem = { paddingRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { paddingRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("result").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/HeaderRow.tsx");

export const ConnectedHeaderRow = function ConnectedHeaderRow(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    const merged = Object.assign(arg0, undefined);
    let obj = require(566) /* initialize */;
    const items = [_isNativeReflectConstruct];
    obj = {};
    obj.isUploading = obj.useStateFromStores(items, () => outer1_8.isUploadingEmoji());
    const merged1 = Object.assign(merged);
    return callback3(HeaderRow, obj);
  }
};
