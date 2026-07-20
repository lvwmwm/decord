// Module ID: 9313
// Function ID: 72773
// Name: PremiumUpsellTooltipActionSheet
// Dependencies: []
// Exports: default

// Module 9313 (PremiumUpsellTooltipActionSheet)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { justifyContent: "center", paddingTop: importDefault(dependencyMap[5]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.img = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.header = { <string:1353458075>: true, <string:1722561866>: true };
obj.title = { person_pouting: -0.0014069081515246523, cv: -0.0001058445630777106 };
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.description = { textAlign: "center", marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
const obj3 = { handleNewPasswordChange: 2, renderSettingSearchResultItem: "text-sm/medium", ONE_DAY: "interactive-text-active", overflow: true, Ellipse: "/assets/images/native/premium/nitro_icons", tintColor: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.nitroWheel = obj3;
const obj2 = { textAlign: "center", marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
obj.buttonContainer = { gap: importDefault(dependencyMap[5]).space.PX_8 };
let closure_8 = obj.createStyles(obj);
const obj4 = { gap: importDefault(dependencyMap[5]).space.PX_8 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx");

export default function PremiumUpsellTooltipActionSheet(arg0) {
  let backdropProps;
  let description;
  let descriptionStyle;
  let imageSource;
  let imageStyle;
  let primaryButtonIcon;
  let primaryButtonText;
  let secondaryButtonText;
  let title;
  ({ imageSource, dismissibleContent: closure_0, primaryButtonIcon, secondaryButtonText, onDismiss: closure_1, onPrimaryButtonPress: closure_2, onSecondaryButtonPress: closure_3 } = arg0);
  function handleDismiss(dismissAction) {
    let tmp = null != dismissAction;
    if (tmp) {
      tmp = dismissAction !== constants.DISMISS;
    }
    if (!tmp) {
      tmp = null == callback2;
    }
    if (!tmp) {
      callback2();
    }
    let obj = callback(closure_2[6]);
    obj = { forceTrack: true, dismissAction };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(callback, obj);
  }
  ({ title, backdropProps, description, descriptionStyle, imageStyle, primaryButtonText } = arg0);
  const tmp = callback3();
  let obj = { startExpanded: true };
  const merged = Object.assign(backdropProps);
  obj["onDismiss"] = handleDismiss;
  obj = { style: tmp.container };
  let tmp6 = null;
  if (null != imageSource) {
    obj = {};
    const items = [tmp.img, imageStyle];
    obj.style = items;
    obj.source = imageSource;
    tmp6 = callback(closure_3, obj);
  }
  const items1 = [tmp6, , , ];
  const obj1 = { style: tmp.header };
  const items2 = [callback(arg1(dependencyMap[8]).NitroWheel, { style: tmp.nitroWheel }), callback(arg1(dependencyMap[9]).Text, { style: tmp.title, children: title })];
  obj1.children = items2;
  items1[1] = callback2(handleDismiss, obj1);
  const items3 = [tmp.description, descriptionStyle];
  items1[2] = callback(arg1(dependencyMap[9]).Text, { style: items3, children: description });
  const obj4 = { style: tmp.buttonContainer };
  const obj5 = {
    variant: "active",
    text: primaryButtonText,
    onPress() {
      callback3();
      callback2(callback3[11]).hideActionSheet();
      handleDismiss(constants.PRIMARY);
    }
  };
  let primaryButtonIconResult;
  if (null != primaryButtonIcon) {
    primaryButtonIconResult = primaryButtonIcon();
  }
  obj5.icon = primaryButtonIconResult;
  obj5.size = "lg";
  const items4 = [callback(arg1(dependencyMap[10]).Button, obj5), ];
  let tmp13 = null;
  if (null != secondaryButtonText) {
    const obj6 = {
      variant: "secondary",
      text: secondaryButtonText,
      onPress() {
          if (null != callback4) {
            callback4();
          }
          callback2(closure_2[11]).hideActionSheet();
          handleDismiss(constants.DISMISS);
        },
      size: "lg"
    };
    tmp13 = callback(arg1(dependencyMap[10]).Button, obj6);
  }
  items4[1] = tmp13;
  obj4.children = items4;
  items1[3] = callback2(handleDismiss, obj4);
  obj.children = items1;
  obj["children"] = callback2(handleDismiss, obj);
  return callback(arg1(dependencyMap[7]).BottomSheet, obj);
};
