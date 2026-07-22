// Module ID: 9173
// Function ID: 71860
// Name: BaseIdentityVerificationField
// Dependencies: []
// Exports: default

// Module 9173 (BaseIdentityVerificationField)
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
  const items1 = [tmp.label];
  items[1] = callback(arg1(dependencyMap[5]).Text, { style: items1, children: label });
  obj = {};
  if (passesVerification) {
    obj.style = tmp.verifiedContainer;
    const obj1 = { color: "status-positive" };
    obj.children = callback(arg1(dependencyMap[6]).CheckmarkLargeIcon, obj1);
    let tmp11 = obj;
  } else {
    obj.style = tmp.ctaButton;
    const obj2 = {};
    const intl = arg1(dependencyMap[8]).intl;
    obj2.text = intl.string(arg1(dependencyMap[8]).t.13ofGu);
    obj2.onPress = onPress;
    obj.children = callback(arg1(dependencyMap[7]).Button, obj2);
    tmp11 = obj;
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
obj.label = { category: "<string:466485249>", position: "<string:3382050817>", opacity: "<string:40960001>" };
obj.verifiedContainer = { <string:1101041249>: true, addQuarters: "/assets/design/components/Icon/native/redesign/generated/images", <string:1092586321>: 24, addWeeks: 24 };
obj.ctaButton = { <string:1385783798>: "<string:1062273028>", <string:3266691745>: "<string:3332911364>", <string:5372001>: "<string:1099511627>" };
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
