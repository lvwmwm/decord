// Module ID: 10063
// Function ID: 77703
// Name: CreateGuildContainer
// Dependencies: [5, 57, 31, 1907, 1849, 653, 33, 4130, 5084, 5047, 4674, 10050, 5048, 1387, 10064, 5121, 10066, 2]
// Exports: default

// Module 10063 (CreateGuildContainer)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { UPLOAD_MEDIUM_SIZE } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/create_guild/native/components/CreateGuildContainer.tsx");

export default function CreateGuildContainer(onCreate) {
  let c7;
  let c8;
  let tmp10;
  let tmp12;
  onCreate = onCreate.onCreate;
  const guildTemplate = onCreate.guildTemplate;
  let flag = onCreate.autoFocus;
  if (flag === undefined) {
    flag = true;
  }
  const onHubGuildInfoSet = onCreate.onHubGuildInfoSet;
  const isCommunityIntent = onCreate.isCommunityIntent;
  let obj = { onCreate: 0, guildTemplate: 0, autoFocus: 0, onHubGuildInfoSet: 0, isCommunityIntent: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(onCreate, obj);
  let first;
  let first1;
  let _isNativeReflectConstruct;
  c7 = undefined;
  c8 = undefined;
  let first2;
  const tmp4 = _createForOfIteratorHelperLoose();
  const tmp5 = first(first1.useState(guildTemplate(onHubGuildInfoSet[9]).getGuildNameSuggestion({ truncateUsername: true })), 2);
  first = tmp5[0];
  const tmp7 = first(first1.useState(null), 2);
  first1 = tmp7[0];
  _isNativeReflectConstruct = tmp7[1];
  const obj2 = guildTemplate(onHubGuildInfoSet[9]);
  [tmp10, c7] = first(first1.useState(false), 2);
  const tmp9 = first(first1.useState(false), 2);
  [tmp12, c8] = first(first1.useState(null), 2);
  const tmp13 = first(first1.useState(() => {
    const currentUser = _undefined.getCurrentUser();
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    return null != isStaffResult && isStaffResult;
  }), 2);
  first2 = tmp13[0];
  // CreateGeneratorClosureLongIndex (0x67)
  // CreateGeneratorClosureLongIndex (0x67)
  const callback = first1.useCallback(isCommunityIntent(1), []);
  const items = [guildTemplate, first1, first, onCreate, onHubGuildInfoSet, first2, isCommunityIntent];
  const callback1 = first1.useCallback(isCommunityIntent(tmp), items);
  obj = { top: true, style: items1 };
  items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp4);
  obj = {};
  const tmp11 = first(first1.useState(null), 2);
  const merged1 = Object.assign(merged);
  obj["guild"] = { name: first, icon: first1, staffOnly: first2 };
  obj["error"] = tmp12;
  obj["submitting"] = tmp10;
  obj["onIconPress"] = callback;
  obj["onNameChange"] = tmp5[1];
  obj["onStaffOnlyChange"] = tmp13[1];
  obj["onCreate"] = callback1;
  obj["autoFocus"] = flag;
  obj.children = first2(guildTemplate(onHubGuildInfoSet[16]), obj);
  return first2(onCreate(onHubGuildInfoSet[15]).SafeAreaPaddingView, obj);
};
