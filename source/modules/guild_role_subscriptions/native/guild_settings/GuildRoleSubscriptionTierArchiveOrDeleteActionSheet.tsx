// Module ID: 16478
// Function ID: 128376
// Name: GuildRoleSubscriptionTierArchiveOrDeleteActionSheet
// Dependencies: [31, 27, 33, 4130, 689, 1557, 44, 16479, 5187, 5189, 4126, 1273, 4543, 4098, 1212, 2]
// Exports: default

// Module 16478 (GuildRoleSubscriptionTierArchiveOrDeleteActionSheet)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ TouchableOpacity: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cancel = { alignSelf: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx");

export default function GuildRoleSubscriptionTierArchiveOrDeleteActionSheet(groupListingId) {
  let archiving;
  let buttonText;
  let descriptionText;
  let editStateId;
  let guildId;
  let handleArchiveOrDelete;
  let headerText;
  groupListingId = groupListingId.groupListingId;
  ({ editStateId, guildId } = groupListingId);
  const tmp = _createForOfIteratorHelperLoose();
  importDefault(44)(null != groupListingId, "group listing id cannot be null");
  const tmp3 = importDefault(16479)(guildId, groupListingId, editStateId);
  let deleting = tmp3.deleting;
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, archiving } = tmp3);
  let obj = { backdropOpacity: 0.8 };
  obj = { style: tmp.container };
  obj = { contentContainerStyle: { paddingBottom: importDefault(1557)().bottom } };
  const obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: headerText };
  const items = [callback(require(4126) /* Text */.Text, obj1), callback(require(1273) /* Button */.Spacer, { size: 12 }), , , , , ];
  const obj2 = { variant: "text-sm/normal", color: "text-default", children: descriptionText };
  items[2] = callback(require(4126) /* Text */.Text, obj2);
  items[3] = callback(require(1273) /* Button */.Spacer, { size: 24 });
  const obj3 = { text: buttonText, variant: "destructive", grow: true, onPress: handleArchiveOrDelete };
  if (!deleting) {
    deleting = archiving;
  }
  obj3.disabled = deleting;
  items[4] = callback(require(4543) /* Button */.Button, obj3);
  items[5] = callback(require(1273) /* Button */.Spacer, { size: 24 });
  const obj4 = {
    onPress() {
      return outer1_1(outer1_2[13]).hideActionSheet();
    },
    style: tmp.cancel,
    activeOpacity: 0.5
  };
  const obj5 = { variant: "text-sm/semibold", color: "interactive-text-active" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj4.children = callback(require(4126) /* Text */.Text, obj5);
  items[6] = callback(closure_3, obj4);
  obj.children = items;
  obj.children = closure_6(require(5189) /* BottomSheetModal */.BottomSheetScrollView, obj);
  obj.children = callback(closure_4, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
