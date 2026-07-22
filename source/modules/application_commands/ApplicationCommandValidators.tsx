// Module ID: 11269
// Function ID: 87690
// Name: isValidRoleMention
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 11269 (isValidRoleMention)
import __exportStarResult1 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";

function isValidRoleMention(applicationCommandOption) {
  let tmp = "roleMention" === applicationCommandOption.type;
  if (!tmp) {
    let tmp2 = "textMention" === applicationCommandOption.type;
    if (tmp2) {
      tmp2 = "@everyone" === applicationCommandOption.text;
    }
    tmp = tmp2;
  }
  return tmp;
}
function validateNumericOptionRange(NumberResult, minValue, 8Y5zsp, CyRLmH, VD3Q+S) {
  if (null == minValue.minValue) {
    let obj = { success: true };
    return obj;
  }
  if (null != minValue.maxValue) {
    if (null != minValue.minValue) {
      obj = { success: false };
      const intl3 = minValue(dependencyMap[5]).intl;
      obj = { minimum: localeNumberFormat(minValue.minValue), maximum: localeNumberFormat(minValue.maxValue) };
      obj.error = intl3.formatToPlainString(_8Y5zsp, obj);
      return obj;
    }
  }
  if (null != minValue.minValue) {
    const obj1 = { success: false };
    const intl2 = minValue(dependencyMap[5]).intl;
    const obj2 = { minimum: localeNumberFormat(minValue.minValue) };
    obj1.error = intl2.formatToPlainString(CyRLmH, obj2);
    return obj1;
  } else if (null != minValue.maxValue) {
    const obj3 = { success: false };
    const intl = minValue(dependencyMap[5]).intl;
    const obj4 = { maximum: localeNumberFormat(minValue.maxValue) };
    obj3.error = intl.formatToPlainString(VD3Q_S, obj4);
    return obj3;
  }
}
function localeNumberFormat(minLength) {
  return minLength.toLocaleString(arg1(dependencyMap[5]).intl.currentLocale, { useGrouping: false });
}
const obj = {
  [arg1(dependencyMap[2]).ApplicationCommandOptionType.SUB_COMMAND]: () => ({ success: false }),
  [arg1(dependencyMap[2]).ApplicationCommandOptionType.SUB_COMMAND_GROUP]: () => ({ success: false }),
  [arg1(dependencyMap[2]).ApplicationCommandOptionType.BOOLEAN]: (type) => {
    if ("text" !== type.type) {
      let obj = { success: false };
      return obj;
    } else {
      obj = {};
      const trimmed = type.text.trim();
      obj.success = null != arg1(dependencyMap[3]).toChoiceBooleanValue(trimmed);
      return obj;
    }
  },
  [arg1(dependencyMap[2]).ApplicationCommandOptionType.STRING]: (type, type2, id) => {
    importDefault(dependencyMap[4])(type2.type === type2(dependencyMap[2]).ApplicationCommandOptionType.STRING, "option type must match validator type");
    type = type.type;
    if ("emoji" === type) {
      let surrogate = type.surrogate;
    } else if ("text" === type) {
      surrogate = type.text.trim();
      const str2 = type.text;
    } else {
      let obj = { success: false };
      return obj;
    }
    if (null != type2.choices) {
      obj = { success: null != type2(dependencyMap[3]).findChoiceStringValue(type2.choices, surrogate) };
      return obj;
    } else {
      if (type2.autocomplete) {
        let obj1 = type2(dependencyMap[3]);
        if (null != obj1.findAutocompleteChoiceStringValue(id, type2.name, surrogate)) {
          obj = { success: true };
          return obj;
        }
      }
      if (undefined !== type2.minLength) {
        if (null == surrogate) {
          obj1 = { success: false };
          return obj1;
        } else {
          const obj2 = { exactRangeErrorMessage: type2(dependencyMap[5]).t.e+9/SY, rangeErrorMessage: type2(dependencyMap[5]).t.IE1sTh, minErrorMessage: type2(dependencyMap[5]).t.rXAFQD, maxErrorMessage: type2(dependencyMap[5]).t.ycEPx/ };
          if (undefined === type2.minLength) {
            if (undefined !== type2.maxLength) {
              if (!obj3.success) {
                return obj3;
              }
            }
            let obj3 = { success: true };
          }
          if (undefined !== type2.maxLength) {
            if (undefined !== type2.minLength) {
              if (type2.minLength === type2.maxLength) {
                const obj4 = { success: false };
                const intl4 = type2(dependencyMap[5]).intl;
                const obj5 = { value: localeNumberFormat(type2.minLength) };
                obj4.error = intl4.formatToPlainString(obj2.exactRangeErrorMessage, obj5);
                obj3 = obj4;
              }
            }
          }
          if (undefined !== type2.maxLength) {
            if (undefined !== type2.minLength) {
              const obj6 = { success: false };
              const intl3 = type2(dependencyMap[5]).intl;
              const obj7 = { minimum: localeNumberFormat(type2.minLength), maximum: localeNumberFormat(type2.maxLength) };
              obj6.error = intl3.formatToPlainString(obj2.rangeErrorMessage, obj7);
              obj3 = obj6;
            }
          }
          if (undefined !== type2.minLength) {
            const obj8 = { success: false };
            const intl2 = type2(dependencyMap[5]).intl;
            const obj9 = { minimum: localeNumberFormat(type2.minLength) };
            obj8.error = intl2.formatToPlainString(obj2.minErrorMessage, obj9);
            obj3 = obj8;
          } else if (undefined !== type2.maxLength) {
            const obj10 = { success: false };
            const intl = type2(dependencyMap[5]).intl;
            const obj11 = { maximum: localeNumberFormat(type2.maxLength) };
            obj10.error = intl.formatToPlainString(obj2.maxErrorMessage, obj11);
            obj3 = obj10;
          }
        }
      }
      const obj12 = { success: true };
      return obj12;
    }
    const tmp = importDefault(dependencyMap[4]);
  },
  [arg1(dependencyMap[2]).ApplicationCommandOptionType.INTEGER]: (type, type2, id) => {
    importDefault(dependencyMap[4])(type2.type === type2(dependencyMap[2]).ApplicationCommandOptionType.INTEGER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      trimmed = type.text.trim();
      const str = type.text;
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          let obj = { success: null != type2(dependencyMap[3]).findChoiceNumberValue(type2.choices, trimmed) };
          return obj;
        } else {
          if (type2.autocomplete) {
            obj = type2(dependencyMap[3]);
            if (null != obj.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              obj = { success: true };
              return obj;
            }
          }
          const _Number = Number;
          let obj1 = importAll(dependencyMap[6]);
          const NumberResult = Number(obj1.normalizeNumericString(__exportStarResult1.locale, trimmed));
          if (null != NumberResult) {
            const _isNaN = isNaN;
            if (!isNaN(NumberResult)) {
              const _Number2 = Number;
              if (Number.isInteger(NumberResult)) {
                const _Number3 = Number;
                if (Number.isSafeInteger(NumberResult)) {
                  let tmp17 = validateNumericOptionRange(NumberResult, type2, type2(dependencyMap[5]).t.8Y5zsp, type2(dependencyMap[5]).t.CyRLmH, type2(dependencyMap[5]).t.VD3Q+S);
                }
                return tmp17;
              }
            }
          }
          obj1 = { success: false };
          tmp17 = obj1;
        }
      }
    }
    return { success: false };
  },
  [arg1(dependencyMap[2]).ApplicationCommandOptionType.NUMBER]: (type, type2, id) => {
    importDefault(dependencyMap[4])(type2.type === type2(dependencyMap[2]).ApplicationCommandOptionType.NUMBER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      trimmed = type.text.trim();
      const str = type.text;
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          let obj = { success: null != type2(dependencyMap[3]).findChoiceNumberValue(type2.choices, trimmed) };
          return obj;
        } else {
          if (type2.autocomplete) {
            obj = type2(dependencyMap[3]);
            if (null != obj.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              obj = { success: true };
              return obj;
            }
          }
          const _Number = Number;
          let obj1 = importAll(dependencyMap[6]);
          const NumberResult = Number(obj1.normalizeNumericString(__exportStarResult1.locale, trimmed));
          const _isNaN = isNaN;
          if (!isNaN(NumberResult)) {
            const _Number2 = Number;
            if (NumberResult <= Number.MAX_SAFE_INTEGER) {
              const _Number3 = Number;
              if (NumberResult >= Number.MIN_SAFE_INTEGER) {
                let tmp17 = validateNumericOptionRange(NumberResult, type2, type2(dependencyMap[5]).t.8Y5zsp, type2(dependencyMap[5]).t.CyRLmH, type2(dependencyMap[5]).t.VD3Q+S);
              }
              return tmp17;
            }
          }
          obj1 = { success: false };
          tmp17 = obj1;
        }
      }
    }
    return { success: false };
  },
  [arg1(dependencyMap[2]).ApplicationCommandOptionType.USER]: (type, arg1, id, source) => {
    if ("text" === type.type) {
      let obj1 = arg1(dependencyMap[7]);
      if (obj1.isSnowflake(type.text)) {
        let obj = { success: true };
        return obj;
      } else {
        const obj3 = arg1(dependencyMap[8]);
        obj = { allowRoles: false };
        const applicationCommandOption = obj3.resolveApplicationCommandOption(type.text, source, id, obj);
        obj1 = {};
        type = undefined;
        if (null != applicationCommandOption) {
          type = applicationCommandOption.type;
        }
        obj1.success = "userMention" === type;
        return obj1;
      }
    } else {
      obj = { success: "userMention" === type.type };
      return obj;
    }
  },
  [arg1(dependencyMap[2]).ApplicationCommandOptionType.CHANNEL]: (type, arg1, id, source) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        let obj = { success: true };
        return obj;
      } else {
        const applicationCommandOption = arg1(dependencyMap[8]).resolveApplicationCommandOption(type.text, source, id);
        obj = {};
        type = undefined;
        if (null != applicationCommandOption) {
          type = applicationCommandOption.type;
        }
        obj.success = "channelMention" === type;
        return obj;
      }
      const obj2 = arg1(dependencyMap[7]);
    } else {
      obj = { success: "channelMention" === type.type };
      return obj;
    }
  },
  [arg1(dependencyMap[2]).ApplicationCommandOptionType.ROLE]: (type, arg1, id, source) => {
    if ("text" === type.type) {
      let obj1 = arg1(dependencyMap[7]);
      if (obj1.isSnowflake(type.text)) {
        let obj = { success: true };
        return obj;
      } else {
        const obj3 = arg1(dependencyMap[8]);
        obj = { allowUsers: false };
        const applicationCommandOption = obj3.resolveApplicationCommandOption(type.text, source, id, obj);
        obj1 = {};
        type = undefined;
        if (null != applicationCommandOption) {
          type = applicationCommandOption.type;
        }
        obj1.success = "roleMention" === type;
        return obj1;
      }
    } else {
      obj = { success: isValidRoleMention(type) };
      return obj;
    }
  },
  [arg1(dependencyMap[2]).ApplicationCommandOptionType.MENTIONABLE]: (type, arg1, id, source) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        let obj = { success: true };
        return obj;
      } else {
        const applicationCommandOption = arg1(dependencyMap[8]).resolveApplicationCommandOption(type.text, source, id);
        obj = {};
        let tmp11 = null != applicationCommandOption;
        if (tmp11) {
          let tmp12 = "userMention" === applicationCommandOption.type;
          if (!tmp12) {
            tmp12 = isValidRoleMention(applicationCommandOption);
          }
          tmp11 = tmp12;
        }
        obj.success = tmp11;
        return obj;
      }
      const obj2 = arg1(dependencyMap[7]);
    } else {
      obj = {};
      let tmp = "userMention" === type.type;
      if (!tmp) {
        tmp = isValidRoleMention(type);
      }
      obj.success = tmp;
      return obj;
    }
  },
  [arg1(dependencyMap[2]).ApplicationCommandOptionType.ATTACHMENT]: (type, name, arg2, arg3, commandOrigin) => {
    if ("text" !== type.type) {
      let obj = { success: false };
      return obj;
    } else {
      obj = name(dependencyMap[7]);
      const upload = upload.getUpload(arg2, name.name, obj.getCommandAttachmentDraftType(commandOrigin));
      obj = { success: null != upload && upload.filename === type.text };
      return obj;
    }
  }
};
const result = require("__exportStarResult1").fileFinishedImporting("modules/application_commands/ApplicationCommandValidators.tsx");

export default obj;
