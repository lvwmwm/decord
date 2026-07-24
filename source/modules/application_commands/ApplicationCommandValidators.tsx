// Module ID: 11308
// Function ID: 87980
// Name: isValidRoleMention
// Dependencies: [1921, 4467, 1881, 8231, 44, 1212, 8229, 6753, 8232, 2]

// Module 11308 (isValidRoleMention)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
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
function validateNumericOptionRange(NumberResult, minValue, _8Y5zsp, CyRLmH, VD3Q_S) {
  if (null == minValue.minValue) {
    let obj = { success: true };
    return obj;
  }
  if (null != minValue.maxValue) {
    if (null != minValue.minValue) {
      obj = { success: false };
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj = { minimum: localeNumberFormat(minValue.minValue), maximum: localeNumberFormat(minValue.maxValue) };
      obj.error = intl3.formatToPlainString(_8Y5zsp, obj);
      return obj;
    }
  }
  if (null != minValue.minValue) {
    const obj1 = { success: false };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj2 = { minimum: localeNumberFormat(minValue.minValue) };
    obj1.error = intl2.formatToPlainString(CyRLmH, obj2);
    return obj1;
  } else if (null != minValue.maxValue) {
    const obj3 = { success: false };
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj4 = { maximum: localeNumberFormat(minValue.maxValue) };
    obj3.error = intl.formatToPlainString(VD3Q_S, obj4);
    return obj3;
  }
}
function localeNumberFormat(minLength) {
  return minLength.toLocaleString(require(1212) /* getSystemLocale */.intl.currentLocale, { useGrouping: false });
}
let obj = {
  [arg1(1881).ApplicationCommandOptionType.SUB_COMMAND]: () => ({ success: false }),
  [arg1(1881).ApplicationCommandOptionType.SUB_COMMAND_GROUP]: () => ({ success: false }),
  [arg1(1881).ApplicationCommandOptionType.BOOLEAN]: (type) => {
    if ("text" !== type.type) {
      let obj = { success: false };
      return obj;
    } else {
      obj = {};
      const trimmed = type.text.trim();
      obj.success = null != require(8231) /* findChoiceStringValue */.toChoiceBooleanValue(trimmed);
      return obj;
    }
  },
  [arg1(1881).ApplicationCommandOptionType.STRING]: (type, type2, id) => {
    importDefault(44)(type2.type === require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.STRING, "option type must match validator type");
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
      obj = { success: null != require(8231) /* findChoiceStringValue */.findChoiceStringValue(type2.choices, surrogate) };
      return obj;
    } else {
      if (type2.autocomplete) {
        let obj1 = require(8231) /* findChoiceStringValue */;
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
          const obj2 = { exactRangeErrorMessage: require(1212) /* getSystemLocale */.t["e+9/SY"], rangeErrorMessage: require(1212) /* getSystemLocale */.t.IE1sTh, minErrorMessage: require(1212) /* getSystemLocale */.t.rXAFQD, maxErrorMessage: require(1212) /* getSystemLocale */.t["ycEPx/"] };
          if (undefined === type2.minLength) {
            if (undefined !== type2.maxLength) {
              if (!obj3.success) {
                return obj3;
              }
            }
            obj3 = { success: true };
          }
          if (undefined !== type2.maxLength) {
            if (undefined !== type2.minLength) {
              if (type2.minLength === type2.maxLength) {
                const obj4 = { success: false };
                const intl4 = require(1212) /* getSystemLocale */.intl;
                const obj5 = { value: localeNumberFormat(type2.minLength) };
                obj4.error = intl4.formatToPlainString(obj2.exactRangeErrorMessage, obj5);
                obj3 = obj4;
              }
            }
          }
          if (undefined !== type2.maxLength) {
            if (undefined !== type2.minLength) {
              const obj6 = { success: false };
              const intl3 = require(1212) /* getSystemLocale */.intl;
              const obj7 = { minimum: localeNumberFormat(type2.minLength), maximum: localeNumberFormat(type2.maxLength) };
              obj6.error = intl3.formatToPlainString(obj2.rangeErrorMessage, obj7);
              obj3 = obj6;
            }
          }
          if (undefined !== type2.minLength) {
            const obj8 = { success: false };
            const intl2 = require(1212) /* getSystemLocale */.intl;
            const obj9 = { minimum: localeNumberFormat(type2.minLength) };
            obj8.error = intl2.formatToPlainString(obj2.minErrorMessage, obj9);
            obj3 = obj8;
          } else if (undefined !== type2.maxLength) {
            const obj10 = { success: false };
            const intl = require(1212) /* getSystemLocale */.intl;
            const obj11 = { maximum: localeNumberFormat(type2.maxLength) };
            obj10.error = intl.formatToPlainString(obj2.maxErrorMessage, obj11);
            obj3 = obj10;
          }
        }
      }
      const obj12 = { success: true };
      return obj12;
    }
    const tmp = importDefault(44);
  },
  [arg1(1881).ApplicationCommandOptionType.INTEGER]: (type, type2, id) => {
    importDefault(44)(type2.type === require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.INTEGER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      trimmed = type.text.trim();
      const str = type.text;
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          let obj = { success: null != require(8231) /* findChoiceStringValue */.findChoiceNumberValue(type2.choices, trimmed) };
          return obj;
        } else {
          if (type2.autocomplete) {
            obj = require(8231) /* findChoiceStringValue */;
            if (null != obj.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              obj = { success: true };
              return obj;
            }
          }
          const _Number = Number;
          let obj1 = importAll(8229);
          const NumberResult = Number(obj1.normalizeNumericString(_isNativeReflectConstruct.locale, trimmed));
          if (null != NumberResult) {
            const _isNaN = isNaN;
            if (!isNaN(NumberResult)) {
              const _Number2 = Number;
              if (Number.isInteger(NumberResult)) {
                const _Number3 = Number;
                if (Number.isSafeInteger(NumberResult)) {
                  let tmp17 = validateNumericOptionRange(NumberResult, type2, require(1212) /* getSystemLocale */.t["8Y5zsp"], require(1212) /* getSystemLocale */.t.CyRLmH, require(1212) /* getSystemLocale */.t["VD3Q+S"]);
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
  [arg1(1881).ApplicationCommandOptionType.NUMBER]: (type, type2, id) => {
    importDefault(44)(type2.type === require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.NUMBER, "option type must match validator type");
    let trimmed = null;
    if ("text" === type.type) {
      trimmed = type.text.trim();
      const str = type.text;
    }
    if (null != trimmed) {
      if (0 !== trimmed.length) {
        if (null != type2.choices) {
          let obj = { success: null != require(8231) /* findChoiceStringValue */.findChoiceNumberValue(type2.choices, trimmed) };
          return obj;
        } else {
          if (type2.autocomplete) {
            obj = require(8231) /* findChoiceStringValue */;
            if (null != obj.findAutocompleteChoiceNumberValue(id, type2.name, trimmed)) {
              obj = { success: true };
              return obj;
            }
          }
          const _Number = Number;
          let obj1 = importAll(8229);
          const NumberResult = Number(obj1.normalizeNumericString(_isNativeReflectConstruct.locale, trimmed));
          const _isNaN = isNaN;
          if (!isNaN(NumberResult)) {
            const _Number2 = Number;
            if (NumberResult <= Number.MAX_SAFE_INTEGER) {
              const _Number3 = Number;
              if (NumberResult >= Number.MIN_SAFE_INTEGER) {
                let tmp17 = validateNumericOptionRange(NumberResult, type2, require(1212) /* getSystemLocale */.t["8Y5zsp"], require(1212) /* getSystemLocale */.t.CyRLmH, require(1212) /* getSystemLocale */.t["VD3Q+S"]);
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
  [arg1(1881).ApplicationCommandOptionType.USER]: (type, arg1, id, source) => {
    if ("text" === type.type) {
      let obj1 = require(6753) /* _createForOfIteratorHelperLoose */;
      if (obj1.isSnowflake(type.text)) {
        let obj = { success: true };
        return obj;
      } else {
        const obj3 = require(8232) /* _createForOfIteratorHelperLoose */;
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
  [arg1(1881).ApplicationCommandOptionType.CHANNEL]: (type, arg1, id, source) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        let obj = { success: true };
        return obj;
      } else {
        const applicationCommandOption = require(8232) /* _createForOfIteratorHelperLoose */.resolveApplicationCommandOption(type.text, source, id);
        obj = {};
        type = undefined;
        if (null != applicationCommandOption) {
          type = applicationCommandOption.type;
        }
        obj.success = "channelMention" === type;
        return obj;
      }
      obj2 = require(6753) /* _createForOfIteratorHelperLoose */;
    } else {
      obj = { success: "channelMention" === type.type };
      return obj;
    }
  },
  [arg1(1881).ApplicationCommandOptionType.ROLE]: (type, arg1, id, source) => {
    if ("text" === type.type) {
      let obj1 = require(6753) /* _createForOfIteratorHelperLoose */;
      if (obj1.isSnowflake(type.text)) {
        let obj = { success: true };
        return obj;
      } else {
        const obj3 = require(8232) /* _createForOfIteratorHelperLoose */;
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
  [arg1(1881).ApplicationCommandOptionType.MENTIONABLE]: (type, arg1, id, source) => {
    if ("text" === type.type) {
      if (obj2.isSnowflake(type.text)) {
        let obj = { success: true };
        return obj;
      } else {
        const applicationCommandOption = require(8232) /* _createForOfIteratorHelperLoose */.resolveApplicationCommandOption(type.text, source, id);
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
      obj2 = require(6753) /* _createForOfIteratorHelperLoose */;
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
  [arg1(1881).ApplicationCommandOptionType.ATTACHMENT]: (type, name, arg2, arg3, commandOrigin) => {
    if ("text" !== type.type) {
      let obj = { success: false };
      return obj;
    } else {
      obj = require(6753) /* _createForOfIteratorHelperLoose */;
      upload = upload.getUpload(arg2, name.name, obj.getCommandAttachmentDraftType(commandOrigin));
      obj = { success: null != upload && upload.filename === type.text };
      return obj;
    }
  }
};
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/application_commands/ApplicationCommandValidators.tsx");

export default obj;
