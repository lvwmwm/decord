// Module ID: 10980
// Function ID: 85477
// Name: items
// Dependencies: []

// Module 10980 (items)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ Image: closure_5, View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[5]));
let obj = {
  value: 0,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.4obaMS);
  }
};
const items = [obj, , , , , , ];
obj = {
  value: importDefault(dependencyMap[7]).Seconds.HOUR,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.RKpitY);
  }
};
items[1] = obj;
const tmp3 = arg1(dependencyMap[5]);
items[2] = {
  value: 6 * importDefault(dependencyMap[7]).Seconds.HOUR,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.8WfJZ8);
  }
};
const obj1 = {
  value: 6 * importDefault(dependencyMap[7]).Seconds.HOUR,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.8WfJZ8);
  }
};
items[3] = {
  value: 12 * importDefault(dependencyMap[7]).Seconds.HOUR,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.p1up7u);
  }
};
const obj2 = {
  value: 12 * importDefault(dependencyMap[7]).Seconds.HOUR,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.p1up7u);
  }
};
items[4] = {
  value: importDefault(dependencyMap[7]).Seconds.DAY,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.XuVkkD);
  }
};
const obj3 = {
  value: importDefault(dependencyMap[7]).Seconds.DAY,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.XuVkkD);
  }
};
items[5] = {
  value: 3 * importDefault(dependencyMap[7]).Seconds.DAY,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.gMcDS+);
  }
};
const obj4 = {
  value: 3 * importDefault(dependencyMap[7]).Seconds.DAY,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.gMcDS+);
  }
};
items[6] = {
  value: 7 * importDefault(dependencyMap[7]).Seconds.DAY,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.FA7IUk);
  }
};
let obj8 = arg1(dependencyMap[8]);
const obj6 = {};
const obj5 = {
  value: 7 * importDefault(dependencyMap[7]).Seconds.DAY,
  getLabel() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.FA7IUk);
  }
};
obj6.container = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj8 = { marginTop: importDefault(dependencyMap[9]).space.PX_16, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[9]).radii.lg, paddingTop: importDefault(dependencyMap[9]).space.PX_8, paddingBottom: importDefault(dependencyMap[9]).space.PX_16, alignItems: "center" };
obj6.iconLabelBlock = obj8;
const obj7 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj6.iconStyles = { height: 1.25 * importDefault(dependencyMap[9]).space.PX_96 };
const obj9 = { height: 1.25 * importDefault(dependencyMap[9]).space.PX_96 };
obj6.blurb = { marginVertical: importDefault(dependencyMap[9]).space.PX_16 };
const obj10 = { marginVertical: importDefault(dependencyMap[9]).space.PX_16 };
obj6.redText = { marginTop: importDefault(dependencyMap[9]).space.PX_12, marginBottom: importDefault(dependencyMap[9]).space.PX_4, color: importDefault(dependencyMap[9]).colors.TEXT_FEEDBACK_CRITICAL };
const obj11 = { marginTop: importDefault(dependencyMap[9]).space.PX_12, marginBottom: importDefault(dependencyMap[9]).space.PX_4, color: importDefault(dependencyMap[9]).colors.TEXT_FEEDBACK_CRITICAL };
obj6.errorText = { marginBottom: importDefault(dependencyMap[9]).space.PX_16 };
let closure_14 = obj8.createStyles(obj6);
const obj12 = { marginBottom: importDefault(dependencyMap[9]).space.PX_16 };
const memoResult = importAllResult.memo(function BanConfirm(arg0) {
  let onBan;
  ({ guildId: closure_0, userId: closure_1, onBan } = arg0);
  const dependencyMap = onBan;
  const tmp = callback4();
  const ref = importAllResult.useRef(null);
  const ref1 = importAllResult.useRef(null);
  const insets = importDefault(dependencyMap[10])({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  importDefault(dependencyMap[11])({ insets, inputs: items, scrollViewRef: ref });
  let obj = arg1(dependencyMap[12]);
  const items1 = [closure_8];
  const stateFromStores = obj.useStateFromStores(items1, () => guild.getGuild(closure_0));
  const callback = stateFromStores;
  let obj1 = arg1(dependencyMap[12]);
  const items2 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => user.getUser(closure_1));
  let closure_5 = importAllResult.useRef(0);
  let closure_6 = importAllResult.useRef("");
  const tmp7 = callback(stateFromStores1.useState(() => ({})), 2);
  const first = tmp7[0];
  let closure_7 = tmp7[1];
  const items3 = [stateFromStores, stateFromStores1, onBan];
  let tmp11Result = null;
  if (null != stateFromStores1) {
    tmp11Result = null;
    if (null != stateFromStores) {
      obj = { style: tmp.container, ref };
      obj = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_24, paddingBottom: insets.bottom };
      obj.contentContainerStyle = obj;
      obj1 = {};
      const obj2 = { style: tmp.iconLabelBlock };
      const obj3 = { style: tmp.iconStyles, source: importDefault(dependencyMap[14]), resizeMode: "contain" };
      const items4 = [callback2(closure_5, obj3), , ];
      const obj4 = { style: tmp.redText, variant: "text-md/semibold" };
      const intl = arg1(dependencyMap[6]).intl;
      const obj5 = {};
      let obj9 = importDefault(dependencyMap[16]);
      obj5.username = obj9.getName(stateFromStores1);
      obj4.children = intl.format(arg1(dependencyMap[6]).t.Qd6w7T, obj5);
      items4[1] = callback2(arg1(dependencyMap[15]).Text, obj4);
      const obj6 = { INTEGRATION_CREATE: "isArray", ConstraintReasonCode: "accessibilityRole", children: stateFromStores.name };
      items4[2] = callback2(arg1(dependencyMap[15]).Text, obj6);
      obj2.children = items4;
      const items5 = [callback3(closure_6, obj2), , , , , ];
      const obj7 = { Promise: "Array", marginTop: "GUILD_MEMBER_VERIFICATION_UPDATE", flags: "Array", style: tmp.blurb };
      const intl2 = arg1(dependencyMap[6]).intl;
      const obj8 = {};
      let obj13 = importDefault(dependencyMap[16]);
      obj8.user = obj13.getName(stateFromStores1);
      obj7.children = intl2.format(arg1(dependencyMap[6]).t.8jV9fx, obj8);
      items5[1] = callback2(arg1(dependencyMap[15]).Text, obj7);
      obj9 = {};
      const intl3 = arg1(dependencyMap[6]).intl;
      obj9.title = intl3.string(arg1(dependencyMap[6]).t.8l3W0y);
      obj9.defaultValue = items[0].value;
      obj9.onChange = function onChange(current) {
        closure_5.current = current;
      };
      obj9.hasIcons = false;
      obj9.children = items.map((getLabel, value) => {
        const obj = { value, label: getLabel.getLabel() };
        return callback4(callback(onBan[18]).TableRadioRow, obj, value);
      });
      items5[2] = callback2(arg1(dependencyMap[17]).TableRadioGroup, obj9);
      const obj10 = { ref: ref1 };
      const obj11 = { marginVertical: importDefault(dependencyMap[9]).space.PX_16 };
      obj10.containerStyle = obj11;
      const intl4 = arg1(dependencyMap[6]).intl;
      obj10.label = intl4.string(arg1(dependencyMap[6]).t.w4Ivys);
      obj10.maxLength = 512;
      obj10.onChange = function onChange(current) {
        closure_6.current = current;
      };
      items5[3] = callback2(arg1(dependencyMap[19]).TextArea, obj10);
      const obj12 = {};
      obj13 = { marginBottom: importDefault(dependencyMap[9]).space.PX_16 };
      obj12.style = obj13;
      const obj14 = { variant: "destructive" };
      const intl5 = arg1(dependencyMap[6]).intl;
      obj14.text = intl5.string(arg1(dependencyMap[6]).t.5MBJ5M);
      obj14.onPress = tmp9;
      obj14.disabled = first.banning;
      obj12.children = callback2(arg1(dependencyMap[20]).Button, obj14);
      items5[4] = callback2(closure_6, obj12);
      let tmp21 = null;
      if (first.banError) {
        const obj15 = { style: tmp.errorText };
        const intl6 = arg1(dependencyMap[6]).intl;
        const obj16 = { user: importDefault(dependencyMap[16]).getName(stateFromStores1) };
        obj15.children = intl6.format(arg1(dependencyMap[6]).t./K6eer, obj16);
        tmp21 = callback2(arg1(dependencyMap[15]).Text, obj15);
        const obj23 = importDefault(dependencyMap[16]);
      }
      items5[5] = tmp21;
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
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guild_moderation/native/BanConfirm.tsx");

export default memoResult;
