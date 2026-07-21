// Module ID: 7790
// Function ID: 62187
// Name: validateSelect
// Dependencies: []
// Exports: default

// Module 7790 (validateSelect)
function validateSelect(type, type2, modal) {
  let length;
  let maxValues;
  let minValues;
  let values;
  values = type2;
  ({ minValues, maxValues } = type);
  if (null == type2) {
    {
      let obj = require(dependencyMap[1]);
      obj = { minValues, required: tmp };
      let stringResult = null;
      if (!obj.canSelectBeEmpty(obj, modal)) {
        const intl = require(dependencyMap[2]).intl;
        stringResult = intl.string(require(dependencyMap[2]).t.eJEUvD);
      }
      const tmp5 = stringResult;
    }
    return tmp5;
  } else if (values.type === require(dependencyMap[0]).ComponentType.STRING_SELECT) {
    ({ values, length } = values);
  } else {
    length = values.selectedOptions.length;
  }
}
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/interaction_components/validateComponent.tsx");

export default function validateComponent(type, type2, modal) {
  let maxLength;
  let maxValues;
  let maxValues2;
  let minLength;
  let minValues;
  let minValues2;
  let required;
  if (null != type2) {
    importDefault(dependencyMap[3])(type2.type === type.type, "component type matches state");
  }
  type = type.type;
  if (require(dependencyMap[0]).ComponentType.BUTTON === type) {
    return null;
  } else {
    if (require(dependencyMap[0]).ComponentType.STRING_SELECT !== type) {
      if (require(dependencyMap[0]).ComponentType.USER_SELECT !== type) {
        if (require(dependencyMap[0]).ComponentType.ROLE_SELECT !== type) {
          if (require(dependencyMap[0]).ComponentType.MENTIONABLE_SELECT !== type) {
            if (require(dependencyMap[0]).ComponentType.CHANNEL_SELECT !== type) {
              if (require(dependencyMap[0]).ComponentType.TEXT_INPUT === type) {
                ({ minLength, maxLength, required } = type);
                if (null != type2) {
                  if (0 !== type2.value.length) {
                    if (type2.value.length < minLength) {
                      const intl8 = require(dependencyMap[2]).intl;
                      let obj = { min: minLength, max: maxLength };
                      let formatToPlainStringResult = intl8.formatToPlainString(require(dependencyMap[2]).t.ONSqYd, obj);
                    } else {
                      formatToPlainStringResult = null;
                    }
                  }
                  return formatToPlainStringResult;
                }
                let stringResult = null;
                if (required) {
                  const intl9 = require(dependencyMap[2]).intl;
                  stringResult = intl9.string(require(dependencyMap[2]).t.eJEUvD);
                }
                formatToPlainStringResult = stringResult;
              } else if (require(dependencyMap[0]).ComponentType.FILE_UPLOAD === type) {
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
                    const intl7 = require(dependencyMap[2]).intl;
                    stringResult1 = intl7.string(require(dependencyMap[2]).t.eJEUvD);
                  }
                  let formatToPlainStringResult1 = stringResult1;
                } else if (num8 < minValues2) {
                  const intl6 = require(dependencyMap[2]).intl;
                  obj = { minValues: minValues2 };
                  formatToPlainStringResult1 = intl6.formatToPlainString(require(dependencyMap[2]).t.pmAt62, obj);
                } else {
                  formatToPlainStringResult1 = null;
                  if (num8 > maxValues2) {
                    const intl5 = require(dependencyMap[2]).intl;
                    const obj1 = { maxValues: maxValues2 };
                    formatToPlainStringResult1 = intl5.formatToPlainString(require(dependencyMap[2]).t.dy6viJ, obj1);
                  }
                }
                return formatToPlainStringResult1;
              } else if (require(dependencyMap[0]).ComponentType.RADIO_GROUP === type) {
                if (null == type2) {
                  let stringResult2 = null;
                  if (tmp18) {
                    const intl4 = require(dependencyMap[2]).intl;
                    stringResult2 = intl4.string(require(dependencyMap[2]).t.eJEUvD);
                  }
                } else {
                  stringResult2 = null;
                }
                return stringResult2;
              } else if (require(dependencyMap[0]).ComponentType.CHECKBOX_GROUP === type) {
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
                    const intl3 = require(dependencyMap[2]).intl;
                    stringResult3 = intl3.string(require(dependencyMap[2]).t.eJEUvD);
                  }
                  let formatToPlainStringResult2 = stringResult3;
                } else if (num3 < minValues) {
                  const intl2 = require(dependencyMap[2]).intl;
                  const obj2 = { count: minValues };
                  formatToPlainStringResult2 = intl2.formatToPlainString(require(dependencyMap[2]).t.Jmwzdx, obj2);
                } else {
                  formatToPlainStringResult2 = null;
                  if (num3 > maxValues) {
                    const intl = require(dependencyMap[2]).intl;
                    obj = { count: maxValues };
                    formatToPlainStringResult2 = intl.formatToPlainString(require(dependencyMap[2]).t.LDvfRP, obj);
                  }
                }
                return formatToPlainStringResult2;
              } else if (require(dependencyMap[0]).ComponentType.CHECKBOX === type) {
                return null;
              } else {
                importDefault(dependencyMap[3])(false, "missing validator for this component");
              }
            }
          }
        }
      }
    }
    return validateSelect(type, type2, modal);
  }
};
