// Module ID: 7797
// Function ID: 62247
// Name: validateSelect
// Dependencies: [1881, 4353, 1212, 44, 2]
// Exports: default

// Module 7797 (validateSelect)
function validateSelect(type, type2, modal) {
  let length;
  let maxValues;
  let minValues;
  let values;
  values = type2;
  ({ minValues, maxValues } = type);
  if (null == type2) {
    {
      let obj = require(4353) /* _createForOfIteratorHelperLoose */;
      obj = { minValues, required: tmp };
      let stringResult = null;
      if (!obj.canSelectBeEmpty(obj, modal)) {
        const intl = require(1212) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1212) /* getSystemLocale */.t.eJEUvD);
      }
      const tmp5 = stringResult;
    }
    return tmp5;
  } else if (values.type === require(1881) /* PermissionOverwriteType */.ComponentType.STRING_SELECT) {
    ({ values, length } = values);
  } else {
    length = values.selectedOptions.length;
  }
}
const result = require("getSystemLocale").fileFinishedImporting("modules/interaction_components/validateComponent.tsx");

export default function validateComponent(type, type2, modal) {
  let maxLength;
  let maxValues;
  let maxValues2;
  let minLength;
  let minValues;
  let minValues2;
  let required;
  if (null != type2) {
    importDefault(44)(type2.type === type.type, "component type matches state");
  }
  type = type.type;
  if (require(1881) /* PermissionOverwriteType */.ComponentType.BUTTON === type) {
    return null;
  } else {
    if (require(1881) /* PermissionOverwriteType */.ComponentType.STRING_SELECT !== type) {
      if (require(1881) /* PermissionOverwriteType */.ComponentType.USER_SELECT !== type) {
        if (require(1881) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT !== type) {
          if (require(1881) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT !== type) {
            if (require(1881) /* PermissionOverwriteType */.ComponentType.CHANNEL_SELECT !== type) {
              if (require(1881) /* PermissionOverwriteType */.ComponentType.TEXT_INPUT === type) {
                ({ minLength, maxLength, required } = type);
                if (null != type2) {
                  if (0 !== type2.value.length) {
                    if (type2.value.length < minLength) {
                      const intl8 = require(1212) /* getSystemLocale */.intl;
                      let obj = { min: minLength, max: maxLength };
                      let formatToPlainStringResult = intl8.formatToPlainString(require(1212) /* getSystemLocale */.t.ONSqYd, obj);
                    } else {
                      formatToPlainStringResult = null;
                    }
                  }
                  return formatToPlainStringResult;
                }
                let stringResult = null;
                if (required) {
                  const intl9 = require(1212) /* getSystemLocale */.intl;
                  stringResult = intl9.string(require(1212) /* getSystemLocale */.t.eJEUvD);
                }
                formatToPlainStringResult = stringResult;
              } else if (require(1881) /* PermissionOverwriteType */.ComponentType.FILE_UPLOAD === type) {
                ({ minValues: minValues2, maxValues: maxValues2 } = type);
                let length;
                if (null != type2) {
                  length = type2.uploadIds.length;
                }
                let num8 = 0;
                if (null != length) {
                  num8 = length;
                }
                if (0 === num8) {
                  let stringResult1 = null;
                  if (type.required) {
                    const intl7 = require(1212) /* getSystemLocale */.intl;
                    stringResult1 = intl7.string(require(1212) /* getSystemLocale */.t.eJEUvD);
                  }
                  let formatToPlainStringResult1 = stringResult1;
                } else if (num8 < minValues2) {
                  const intl6 = require(1212) /* getSystemLocale */.intl;
                  obj = { minValues: minValues2 };
                  formatToPlainStringResult1 = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t.pmAt62, obj);
                } else {
                  formatToPlainStringResult1 = null;
                  if (num8 > maxValues2) {
                    const intl5 = require(1212) /* getSystemLocale */.intl;
                    const obj1 = { maxValues: maxValues2 };
                    formatToPlainStringResult1 = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.dy6viJ, obj1);
                  }
                }
                return formatToPlainStringResult1;
              } else if (require(1881) /* PermissionOverwriteType */.ComponentType.RADIO_GROUP === type) {
                if (null == type2) {
                  let stringResult2 = null;
                  if (tmp18) {
                    const intl4 = require(1212) /* getSystemLocale */.intl;
                    stringResult2 = intl4.string(require(1212) /* getSystemLocale */.t.eJEUvD);
                  }
                } else {
                  stringResult2 = null;
                }
                return stringResult2;
              } else if (require(1881) /* PermissionOverwriteType */.ComponentType.CHECKBOX_GROUP === type) {
                ({ minValues, maxValues } = type);
                let length1;
                if (null != type2) {
                  length1 = type2.values.length;
                }
                let num3 = 0;
                if (null != length1) {
                  num3 = length1;
                }
                if (0 === num3) {
                  let stringResult3 = null;
                  if (type.required) {
                    const intl3 = require(1212) /* getSystemLocale */.intl;
                    stringResult3 = intl3.string(require(1212) /* getSystemLocale */.t.eJEUvD);
                  }
                  let formatToPlainStringResult2 = stringResult3;
                } else if (num3 < minValues) {
                  const intl2 = require(1212) /* getSystemLocale */.intl;
                  const obj2 = { count: minValues };
                  formatToPlainStringResult2 = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.Jmwzdx, obj2);
                } else {
                  formatToPlainStringResult2 = null;
                  if (num3 > maxValues) {
                    const intl = require(1212) /* getSystemLocale */.intl;
                    obj = { count: maxValues };
                    formatToPlainStringResult2 = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.LDvfRP, obj);
                  }
                }
                return formatToPlainStringResult2;
              } else if (require(1881) /* PermissionOverwriteType */.ComponentType.CHECKBOX === type) {
                return null;
              } else {
                importDefault(44)(false, "missing validator for this component");
              }
            }
          }
        }
      }
    }
    return validateSelect(type, type2, modal);
  }
};
