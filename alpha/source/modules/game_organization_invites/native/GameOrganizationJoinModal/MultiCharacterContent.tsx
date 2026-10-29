// Module ID: 13005
// Function ID: 13006
// Name: MultiCharacterContent
// Dependencies: [19, 21, 5005, 558, 576, 6940, 1125, 2404, 5271, 13006, 2]

// Module 13005 (MultiCharacterContent)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1125 */;
import _modDef2404 from "module_2404" /* 2404 */;
import Text_Text from "Text/Text" /* 5271 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6940 */;
import GameOrganizationCharacterListDefault from "GameOrganizationCharacterList" /* 13006 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ statusText: { textAlign: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function MultiCharacterContent(hasError) {
  let characters;
  let noun;
  let onSelect;
  let selectedCharacterId;
  const obj = react2;
  const cResult = obj.c(14);
  ({ characters, selectedCharacterId, onSelect, noun } = hasError);
  hasError = hasError.hasError;
  const tmp4 = closure_4();
  if (null == characters) {
    if (hasError) {
      let tmp20;
      let tmp23;
      const _Symbol2 = Symbol;
      const statusText2 = tmp4.statusText;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1125).intl;
        const stringResult = intl2.string(_modDef2404.Rx9AlK);
        cResult[1] = stringResult;
        tmp20 = stringResult;
      } else {
        tmp20 = cResult[1];
      }
      if (cResult[2] !== tmp4.statusText) {
        const tmp25 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", style: statusText2, children: tmp20 });
        cResult[2] = tmp4.statusText;
        cResult[3] = tmp25;
        tmp23 = tmp25;
      } else {
        tmp23 = cResult[3];
      }
      return tmp23;
    } else {
      let first;
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
        cResult[0] = tmp18;
        first = tmp18;
      } else {
        first = cResult[0];
      }
      return first;
    }
  } else if (0 === characters.length) {
    let tmp9;
    const statusText = tmp4.statusText;
    if (cResult[4] !== noun) {
      const intl = tmp(1125).intl;
      const obj3 = { noun };
      const formatToPlainStringResult = intl.formatToPlainString(_modDef2404.cIerRX, obj3);
      cResult[4] = noun;
      cResult[5] = formatToPlainStringResult;
      tmp9 = formatToPlainStringResult;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp4.statusText) {
      let tmp12;
      if (cResult[7] === tmp9) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
    const tmp14 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", style: statusText, children: tmp9 });
    cResult[6] = tmp4.statusText;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    tmp12 = tmp14;
  } else {
    if (cResult[9] === characters) {
      if (cResult[10] === noun) {
        if (cResult[11] === onSelect) {
          let tmp5;
          if (cResult[12] === selectedCharacterId) {
            tmp5 = cResult[13];
          }
          return tmp5;
        }
      }
    }
    const tmp8 = jsx(GameOrganizationCharacterListDefault, { characters, selectedCharacterId, onSelect, noun });
    cResult[9] = characters;
    cResult[10] = noun;
    cResult[11] = onSelect;
    cResult[12] = selectedCharacterId;
    cResult[13] = tmp8;
    tmp5 = tmp8;
  }
}) : (function MultiCharacterContent(arg0) {
  let characters;
  let hasError;
  let intl2;
  let noun;
  let onSelect;
  let selectedCharacterId;
  let tmp5;
  ({ characters, noun } = arg0);
  ({ hasError, selectedCharacterId, onSelect } = arg0);
  const tmp = closure_4();
  if (null == characters) {
    let tmp10Result;
    if (hasError) {
      const obj2 = { variant: "text-md/normal", color: "text-muted", style: tmp.statusText, children: intl2.string(_modDef2404.Rx9AlK) };
      const Text2 = tmp11(5271).Text;
      intl2 = tmp11(1125).intl;
      tmp10Result = tmp10(Text2, obj2);
    } else {
      tmp10Result = tmp10(tmp11(6940).ActivityIndicator, {});
    }
    tmp5 = tmp10Result;
  } else if (0 === characters.length) {
    const Text = Text_Text.Text;
    const intl = intl3.intl;
    const obj4 = { noun };
    tmp5 = <Text variant="text-md/normal" color="text-muted" style={tmp.statusText}>{intl.formatToPlainString(_modDef2404.cIerRX, obj4)}</Text>;
  } else {
    tmp5 = jsx(GameOrganizationCharacterListDefault, { characters, selectedCharacterId, onSelect, noun });
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/MultiCharacterContent.tsx");

export default tmp3;
