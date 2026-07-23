// Module ID: 14098
// Function ID: 108404
// Name: GuildRoleSubscriptionsSectionHeader
// Dependencies: [31, 27, 33, 4130, 4126, 1212, 1273, 14099, 14100, 14101, 14104, 14105, 2]
// Exports: default

// Module 14098 (GuildRoleSubscriptionsSectionHeader)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function GuildRoleSubscriptionsSectionHeader() {
  const tmp = callback3();
  let obj = { style: tmp.sectionHeader };
  obj = { variant: "eyebrow", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["KzCF/6"]);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { style: tmp.sectionSubtitle, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t["Y+ucR7"]);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(closure_3, obj);
}
function renderSectionHeader(section) {
  let tmp = null;
  if (section.section.key === c7) {
    tmp = callback(GuildRoleSubscriptionsSectionHeader, {});
  }
  return tmp;
}
function ItemSeparator() {
  return callback(require(1273) /* Button */.Spacer, { size: 8 });
}
({ View: closure_3, SectionList: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let c7 = "role-subscriptions";
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 }, list: { flex: 1 }, listContentContainer: { paddingHorizontal: 16 }, sectionHeader: { paddingVertical: 24 }, sectionSubtitle: { marginTop: 4 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx");

export default function UserSettingsGuildRoleSubscriptions() {
  const tmp = callback3();
  importDefault(14099)({ forceRestore: true });
  const tmp3 = importDefault(14100)({ ensureFresh: true });
  let obj = require(14101) /* _createForOfIteratorHelperLoose */;
  if (obj.useFetchListingsForSubscriptions(tmp3).loading) {
    let tmp4Result = tmp4(importDefault(14104), {});
  } else {
    obj = { style: tmp.container };
    obj = {};
    ({ listContentContainer: obj3.contentContainerStyle, list: obj3.style } = tmp);
    const obj1 = { key: c7, data: tmp3 };
    const items = [obj1];
    obj.sections = items;
    obj.stickySectionHeadersEnabled = false;
    obj.keyExtractor = function keyExtractor(id) {
      return id.id;
    };
    obj.renderSectionHeader = renderSectionHeader;
    obj.renderItem = function renderItem(subscription) {
      return outer1_5(outer1_1(outer1_2[11]), { subscription: subscription.item });
    };
    obj.ItemSeparatorComponent = ItemSeparator;
    obj.children = callback(closure_4, obj);
    tmp4Result = tmp4(closure_3, obj);
  }
  return tmp4Result;
};
