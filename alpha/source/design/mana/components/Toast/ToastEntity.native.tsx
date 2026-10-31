// Module ID: 15860
// Function ID: 15861
// Name: ToastEntity
// Dependencies: [19, 17, 21, 5014, 575, 5624, 5717, 2027, 2]
// Exports: ToastEntity

// Module 15860 (ToastEntity)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import utils_StringUtils from "utils/StringUtils" /* 2027 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
function ToastEntityContent(arg0) {
  let entity;
  let obj4;
  let styles;
  ({ entity, styles } = arg0);
  const type = entity.type;
  if ("emoji" === type) {
    let tmp14Result;
    if ("unicode" in entity) {
      const obj2 = { variant: "text-lg/normal", color: "text-default", style: styles.glyph, lineClamp: 1, children: entity.unicode };
      tmp14Result = tmp14(Text_Text.Text, obj2);
    } else {
      const obj3 = { style: styles.image, source: obj4, accessibilityLabel: entity.alt };
      obj4 = { uri: entity.src };
      tmp14Result = tmp14(FastImageDefault, obj3);
    }
    return tmp14Result;
  } else if ("avatar" === type) {
    const obj7 = { uri: entity.src };
    return jsx(FastImageDefault, { style: styles.image, source: obj7, accessibilityLabel: entity.alt });
  } else if ("guild" === type) {
    if (null == entity.src) {
      const obj5 = utils_StringUtils;
      const acronym = obj5.getAcronym(entity.name);
      let str2 = "text-md/semibold";
      const Text = Text_Text.Text;
      const tmp10 = jsx;
      if (acronym.length > 2) {
        let str3 = "text-xs/semibold";
        if (acronym.length <= 4) {
          str3 = "text-sm/semibold";
        }
        str2 = str3;
      }
      const obj8 = { variant: str2, color: "interactive-text-default", lineClamp: 1, children: acronym };
      return tmp10(Text, obj8);
    } else {
      const obj10 = { uri: entity.src };
      return jsx(FastImageDefault, { style: styles.image, source: obj10, accessibilityLabel: entity.name });
    }
  } else if ("image" === type) {
    const obj11 = { uri: entity.src };
    return jsx(FastImageDefault, { style: styles.image, source: obj11, resizeMode: "contain", accessibilityLabel: entity.alt });
  }
}
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { entity: { flexShrink: 0, width: 24, height: 24, alignItems: "center", justifyContent: "center", overflow: "hidden" }, image: { width: 24, height: 24 }, glyph: { textAlign: "center" }, avatar: obj2, guild: obj3, guildAcronym: obj4 };
obj2 = { borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("design/mana/components/Toast/ToastEntity.native.tsx");

export function ToastEntity(entity) {
  let guild;
  entity = entity.entity;
  const style = entity.style;
  const tmp = closure_5();
  if ("avatar" === entity.type) {
    guild = tmp.avatar;
  } else if ("guild" === entity.type) {
    guild = tmp.guild;
  }
  let guildAcronym;
  if ("guild" === entity.type) {
    if (null == entity.src) {
      guildAcronym = tmp.guildAcronym;
    }
  }
  const items = [tmp.entity, guild, guildAcronym, style];
  return <View style={items} accessibilityElementsHidden importantForAccessibility="no-hide-descendants"><ToastEntityContent entity={entity} styles={tmp} /></View>;
}
