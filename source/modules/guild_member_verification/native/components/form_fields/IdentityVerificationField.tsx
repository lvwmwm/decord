// Module ID: 9172
// Function ID: 71847
// Name: BaseIdentityVerificationField
// Dependencies: []
// Exports: default

// Module 9172 (BaseIdentityVerificationField)
function BaseIdentityVerificationField(icon) {
  let label;
  let onPress;
  let passesVerification;
  icon = icon.icon;
  ({ label, passesVerification, onPress } = icon);
  const tmp = callback2();
  let obj = { style: tmp.container };
  let tmp4 = null;
  if (null != icon) {
    obj = { style: tmp.icon };
    tmp4 = callback(icon, obj);
  }
  const items = [tmp4, , ];
  obj = { delete: -246006407672989600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, dispatch: 0.0000000000000000000000000000000000000000000000000000000000000000000741841232901058, raw: 0.158 };
  const items1 = [tmp.label];
  obj.style = items1;
  obj.children = label;
  items[1] = callback(arg1(dependencyMap[5]).Text, obj);
  const obj1 = {};
  if (passesVerification) {
    obj1.style = tmp.verifiedContainer;
    const obj2 = { color: "status-positive" };
    obj1.children = callback(arg1(dependencyMap[6]).CheckmarkLargeIcon, obj2);
    let tmp11 = obj1;
  } else {
    obj1.style = tmp.ctaButton;
    const obj3 = {};
    const intl = arg1(dependencyMap[8]).intl;
    obj3.text = intl.string(arg1(dependencyMap[8]).t.13ofGu);
    obj3.onPress = onPress;
    obj1.children = callback(arg1(dependencyMap[7]).Button, obj3);
    tmp11 = obj1;
  }
  items[2] = callback(View, tmp11);
  obj.children = items;
  return closure_5(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.sm, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
obj.icon = {};
obj.label = { 1454043078: null, 921736901: null, -1762698309: null };
obj.verifiedContainer = { 996377586: true, 2136058454: "/assets/design/components/Icon/native/redesign/generated/images", 1365401864: 24, 1398910140: 24 };
obj.ctaButton = { no: true, name: true, kind: true };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx");

export default function IdentityVerificationField(arg0) {
  let passesVerification;
  let platform;
  ({ platform, passesVerification } = arg0);
  if (arg1(dependencyMap[9]).UserVerificationFieldPlatforms.EMAIL === platform) {
    const intl3 = arg1(dependencyMap[8]).intl;
    const string2 = intl3.string;
    let INsLgA = arg1(dependencyMap[8]).t;
    if (passesVerification) {
      INsLgA = INsLgA.INsLgA;
      let string2Result = string2(INsLgA);
    } else {
      string2Result = string2(INsLgA.c6EUJI);
    }
  } else {
    if (arg1(dependencyMap[9]).UserVerificationFieldPlatforms.PHONE === platform) {
      const intl2 = arg1(dependencyMap[8]).intl;
      const string = intl2.string;
      const t = arg1(dependencyMap[8]).t;
      if (passesVerification) {
        let stringResult = string(t.xO2XI/);
      } else {
        stringResult = string(t.woMjLV);
      }
      let stringResult1 = stringResult;
    } else {
      const intl = arg1(dependencyMap[8]).intl;
      stringResult1 = intl.string(arg1(dependencyMap[8]).t.mhv8BM);
    }
    if (arg1(dependencyMap[9]).UserVerificationFieldPlatforms.EMAIL === platform) {
      let EnvelopeIcon = arg1(dependencyMap[15]).EnvelopeIcon;
    } else if (arg1(dependencyMap[9]).UserVerificationFieldPlatforms.PHONE === platform) {
      EnvelopeIcon = arg1(dependencyMap[16]).MobilePhoneIcon;
    } else {
      EnvelopeIcon = arg1(dependencyMap[15]).EnvelopeIcon;
    }
    const obj = {
      label: stringResult1,
      icon: EnvelopeIcon,
      passesVerification,
      onPress: function getHandlePress(platform) {
          if (callback(closure_2[9]).UserVerificationFieldPlatforms.EMAIL === platform) {
            return () => {
              callback2(closure_2[10]).open();
            };
          } else if (callback(closure_2[9]).UserVerificationFieldPlatforms.PHONE === platform) {
            return () => {
              let obj = callback2(paths[11]);
              obj = { reason: callback(paths[14]).ChangePhoneReason.GUILD_PHONE_REQUIRED };
              obj.pushLazy(callback(paths[13])(paths[12], paths.paths), obj);
            };
          } else {
            return () => {

            };
          }
        }(platform)
    };
    return callback(BaseIdentityVerificationField, obj);
  }
};
