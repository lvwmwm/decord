// Module ID: 10978
// Function ID: 85468
// Dependencies: [31, 33, 9098, 9100, 1212, 10980, 2, 31, 27, 1910, 33, 4126, 566, 10169, 2, 57, 31, 27, 653]

// Module 10978
import module_31 from "module_31";
import importAllResult from "module_33";
import module_9100 from "module_9100";
import getSystemLocale from "getSystemLocale";
import items from "items";
import keys from "keys";
import useNavigatorBackHandler from "useNavigatorBackHandler";
import ME from "ME";

({ Image: closure_5, View: closure_6, ScrollView: closure_7 } = require("useNavigatorBackHandler"));
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = items);
let obj = {};
obj = { backgroundColor: require("module_31").colors.BACKGROUND_BASE_LOW };
obj.container = obj;
keys = { marginTop: require("module_31").space.PX_16, backgroundColor: require("module_31").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("module_31").radii.lg, paddingTop: require("module_31").space.PX_8, paddingBottom: require("module_31").space.PX_16, alignItems: "center" };
obj.iconLabelBlock = keys;
obj.iconStyles = { height: 1.25 * require("module_31").space.PX_96 };
const obj2 = { height: 1.25 * require("module_31").space.PX_96 };
obj.redText = { marginTop: require("module_31").space.PX_12, marginBottom: require("module_31").space.PX_4, color: require("module_31").colors.TEXT_FEEDBACK_CRITICAL };
const obj3 = { marginTop: require("module_31").space.PX_12, marginBottom: require("module_31").space.PX_4, color: require("module_31").colors.TEXT_FEEDBACK_CRITICAL };
obj.blurb = { marginVertical: require("module_31").space.PX_16 };
const obj4 = { marginVertical: require("module_31").space.PX_16 };
obj.errorText = { marginBottom: require("module_31").space.PX_16 };
let closure_13 = keys.createStyles(obj);
const obj5 = { marginBottom: require("module_31").space.PX_16 };
const result = ME.fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default importAllResult.memo(function KickConfirm(arg0) {
  let onKick;
  ({ guildId: closure_0, userId: closure_1, onKick } = arg0);
  const dependencyMap = onKick;
  const tmp = callback4();
  const ref = importAllResult.useRef(null);
  const ref1 = importAllResult.useRef(null);
  const insets = importDefault(dependencyMap[8])({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  importDefault(dependencyMap[9])({ insets, inputs: items, scrollViewRef: ref });
  let obj = arg1(dependencyMap[10]);
  const items1 = [module_9100];
  const stateFromStores = obj.useStateFromStores(items1, () => guild.getGuild(closure_0));
  const callback = stateFromStores;
  let obj1 = arg1(dependencyMap[10]);
  const items2 = [getSystemLocale];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => user.getUser(closure_1));
  let closure_5 = importAllResult.useRef("");
  const tmp7 = callback(stateFromStores1.useState(() => ({})), 2);
  const first = tmp7[0];
  let closure_6 = tmp7[1];
  const items3 = [stateFromStores, onKick, stateFromStores1];
  let tmp11Result = null;
  if (null != stateFromStores1) {
    tmp11Result = null;
    if (null != stateFromStores) {
      obj = { style: tmp.container, ref };
      obj = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_24, paddingBottom: insets.bottom };
      obj.contentContainerStyle = obj;
      obj1 = {};
      const obj2 = { style: tmp.iconLabelBlock };
      const obj3 = { style: tmp.iconStyles, source: importDefault(dependencyMap[12]), resizeMode: "contain" };
      const items4 = [callback2(closure_5, obj3), , ];
      const obj4 = { style: tmp.redText, variant: "text-md/semibold" };
      const intl = arg1(dependencyMap[14]).intl;
      const obj5 = {};
      let obj9 = importDefault(dependencyMap[15]);
      obj5.user = obj9.getName(stateFromStores1);
      obj4.children = intl.formatToPlainString(arg1(dependencyMap[14]).t.1Ie87p, obj5);
      items4[1] = callback2(arg1(dependencyMap[13]).Text, obj4);
      const obj6 = { INTEGRATION_CREATE: "isArray", ConstraintReasonCode: "accessibilityRole", children: stateFromStores.name };
      items4[2] = callback2(arg1(dependencyMap[13]).Text, obj6);
      obj2.children = items4;
      const items5 = [callback3(closure_6, obj2), , , , ];
      const obj7 = { Promise: "Array", marginTop: "GUILD_MEMBER_VERIFICATION_UPDATE", flags: "Array", style: tmp.blurb };
      const intl2 = arg1(dependencyMap[14]).intl;
      const obj8 = {};
      let obj13 = importDefault(dependencyMap[15]);
      obj8.user = obj13.getName(stateFromStores1);
      obj7.children = intl2.format(arg1(dependencyMap[14]).t./yH0UT, obj8);
      items5[1] = callback2(arg1(dependencyMap[13]).Text, obj7);
      obj9 = { ref: ref1 };
      const obj10 = { marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
      obj9.containerStyle = obj10;
      const intl3 = arg1(dependencyMap[14]).intl;
      obj9.label = intl3.string(arg1(dependencyMap[14]).t.+2QEPt);
      obj9.maxLength = 512;
      obj9.onChange = function onChange(current) {
        closure_5.current = current;
      };
      items5[2] = callback2(arg1(dependencyMap[16]).TextArea, obj9);
      const obj11 = {};
      const obj12 = { marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
      obj11.style = obj12;
      obj13 = { variant: "destructive" };
      const intl4 = arg1(dependencyMap[14]).intl;
      obj13.text = intl4.string(arg1(dependencyMap[14]).t.3glT6Z);
      obj13.onPress = tmp9;
      obj13.disabled = first.kicking;
      obj11.children = callback2(arg1(dependencyMap[17]).Button, obj13);
      items5[3] = callback2(closure_6, obj11);
      let tmp20 = null;
      if (first.kickError) {
        const obj14 = { style: tmp.errorText };
        const intl5 = arg1(dependencyMap[14]).intl;
        const obj15 = { user: importDefault(dependencyMap[15]).getName(stateFromStores1) };
        obj14.children = intl5.format(arg1(dependencyMap[14]).t.UktD5J, obj15);
        tmp20 = callback2(arg1(dependencyMap[13]).Text, obj14);
        const obj22 = importDefault(dependencyMap[15]);
      }
      items5[4] = tmp20;
      obj1.children = items5;
      obj.children = callback3(closure_12, obj1);
      tmp11Result = callback2(closure_7, obj);
      const tmp11 = callback2;
      const tmp12 = closure_7;
      const tmp15 = callback3;
      const tmp16 = closure_12;
    }
  }
  return tmp11Result;
});
